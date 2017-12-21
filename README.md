# Memo

Windows  
https://github.com/hiko2msp/play_with_parrot_mambo  

(1) ELECOM Bluetooth アダプタ  
http://www.elecom.co.jp/support/download/network/bluetooth/lbt-uan05c2/  
	・ダウンロード  
	・再起動  

(2)ZADIG  
http://zadig.akeo.ie  
	・ダウンロード  
	・Optionメニュー  
	・List All Devices  
	・CSR8510 A10  
	・Win USB  
	・Replace Driver  

(3)Git Bash  
http://gitforwindows.org  
	・ダウンロード  
	・Search Git Bash  
	・Open Git Bash  
	・git --version  

(4)Node  
https://nodejs.org/ja/  
	・ダウンロード  
	・node -v  
	・npm -v   

(5)管理者権限@Git Bash(右クリック)  
$ git clone https://github.com/hiko2msp/play_with_parrot_mambo.git  
$ conda create -n py3.5 python=3.5 anaconda  
$ source activate py3.5  
$ pip install --upgrade  --ignore-installed Flask==0.10.1  
$ pip install --upgrade  --ignore-installed h5py==2.5.0  
$ pip install --upgrade  --ignore-installed Pillow==3.1.0  
$ pip install --upgrade  --ignore-installed scikit-image==0.11.3  
$ pip install --upgrade  --ignore-installed tensorflow==1.4.0  
$ pip install --upgrade  --ignore-installed Keras==2.1.2  
$ npm install --global --production windows-build-tools  
$ npm install git clone https://github.com/hiko2msp/DroneJS.git  
$ mv DroneJS node_modules/dronejs  

$ node find.js  
$ node winSample.js  


MAC
(0)Pythonを入れる前の設定
$ xcode-select --install

もし必要なら…
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install pyenv
$ vim .bash_profile
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
$ source ~/.bash_profile

(1)Node
https://nodejs.org/ja/
$ node -v $ npm -v 

(2)Git
https://git-scm.com
$ git 

(3)Anaconda
https://www.anaconda.com/download/#macos
$ conda create -n py3.5 python=3.5 anaconda
$ conda create -n py2.7 python=2.7 
$ pyenv global 
$ git clone https://github.com/hiko2msp/play_with_parrot_mambo
$ cd play_with_parrot_mambo

$ bash setup.sh

or 

$ source activate py3.5
$ pip install --upgrade --ignore-installed Flask==0.10.1
$ pip install --upgrade --ignore-installed h5py==2.5.0
$ pip install --upgrade --ignore-installed Pillow==3.1.0
$ pip install --upgrade --ignore-installed scikit-image==0.11.3
$ pip install --upgrade --ignore-installed tensorflow==1.4.0
$ pip install --upgrade --ignore-installed Keras==2.1.2
$ source deactivate py3.5

$ source activate py2.7
$ cd play_with_parrot_mambo
$ npm install
$ npm install xlc-connection
$ cd node_modules
$ rm -rf dronejs
$ git clone https://github.com/hiko2msp/DroneJS.git
$ mv DroneJS dronejs
$ cd ../
$ node find.js
$ source deactivate py2.7
$ node macSample.js


