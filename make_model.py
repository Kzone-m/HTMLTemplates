import numpy
import matplotlib.pyplot as plt
import pandas as pd
import math
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error

# Load Stock Data and Customize it
df = pd.read_csv('stock2017_1_4_to_12_29.csv').dropna().reset_index(drop=True)
date = df['Date']
df = df.drop(['Date','Volume'], axis=1).ix[:, ['Adj Close','Open', 'High', 'Low', 'Close']]
dataset = df.values
dataset = dataset.astype('float32')


# normalize the dataset
scaler = MinMaxScaler(feature_range=(0, 1))
dataset = scaler.fit_transform(dataset)


# Convert an array of values into a dataset matrix
# if you give look_back 3, a part of the array will be like this: Jan, Feb, Mar
def create_dataset(dataset, look_back=1):
    dataX, dataY = [], []
    for i in range(len(dataset)-look_back-1):
        xset = []
        for j in range(dataset.shape[1]):
            a = dataset[i:(i+look_back), j]
            xset.append(a)
        dataY.append(dataset[i + look_back, 0])
        dataX.append(xset)
    return numpy.array(dataX), numpy.array(dataY)

# Reshape into X=t and Y=t+1
look_back = 12
trainX, trainY = create_dataset(dataset, look_back)
# print(trainX.shape) => (235, 5, 12)


# Reshape input to be [samples, time steps(number of variables), features] *convert time series into column
trainX = numpy.reshape(trainX, (trainX.shape[0], trainX.shape[1], trainX.shape[2]))


# Create and fit the LSTM network
model = Sequential()
model.add(LSTM(4, input_shape=(trainX.shape[1], look_back)))	#shape：変数数、遡る時間数
model.add(Dense(1))
model.compile(loss='mean_squared_error', optimizer='adam')
model.fit(trainX, trainY, epochs=10, batch_size=1, verbose=2)

# Make predictions
trainPredict = model.predict(trainX)
pad_col = numpy.zeros(dataset.shape[1] - 1)


# Invert predictions
def pad_array(val):
    return numpy.array([numpy.insert(pad_col, 0, x) for x in val])

trainPredict = scaler.inverse_transform(pad_array(trainPredict))
trainY = scaler.inverse_transform(pad_array(trainY))


# Calculate root mean squared error
trainScore = math.sqrt(mean_squared_error(trainY[:, 0], trainPredict[:, 0]))
print('Train Score: %.2f RMSE' % (trainScore))
print(trainPredict[:, 0], "\n\n")
print(trainY[:, 0], "\n\n")
print(len(trainPredict[:, 0]))
print(len(trainY[:, 0]))


# Prepare Plotting Data
look_back_lst = list(range(look_back+1))
date = date.drop(look_back_lst).values
# actual_value = df.drop(look_back_lst)['Adj Close'].values
actual_value = trainY[:, 0]
predicted_value = trainPredict[:, 0]
print(len(actual_value))
print(len(predicted_value))


# Plot Actual Value and Predicted Value
plt.plot(actual_value, color="blue", label="Actual")
plt.plot(predicted_value, color="yellow", label="Predicted")
plt.xticks(range(len(actual_value)), actual_value, rotation=90, size=4)
plt.show()


# Saving its model
# json_string = model.to_json()
# open('multi_lstm_model.json', 'w').write(json_string)
# model.save_weights('multi_lstm_model_weights.hdf5')


"""Memo
# print(len(df.drop(list(range(look_back+1)))['Adj Close'].values))
# print(len(trainPredict[:, 0]))
# print(len(date.drop(list(range(look_back+1))).values))

# shift train predictions for plotting
# trainPredictPlot = numpy.empty_like(dataset)
# trainPredictPlot[:, :] = numpy.nan
# trainPredictPlot[look_back:len(trainPredict)+look_back, :] = trainPredict


# plot baseline and predictions
# plt.plot(scaler.inverse_transform(dataset))
# plt.plot(trainPredictPlot[:, 0])

# plt.plot(trainPredictPlot[0], color="yellow")
# plt.plot(df['Adj Close'].values, color="blue")
# plt.xticks(range(len(df)), date, rotation=90, size=4)
# plt.show()
"""
