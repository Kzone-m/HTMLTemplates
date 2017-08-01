/* Promiseオブジェクト
resolve: 処理が成功した場合に、結果を次の関数に渡す
reject: 処理が失敗した場合に、結果を次の関数に渡す

const promise = new Promise((resolve, reject) => {});
primise.then( (result)=> {} ).catch( (result) => {} );
*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("one")
  }, 100);
});

promise
  .then(data => {
    // resolveで渡された値が引き継がれる
    console.log(data); // one
    return `${data} two` // thenが値を返した場合はPromise.resolveでラップされるため、次のthenでその値を取得できる
  })
  // Promiseのチェイン
  .then(data => {
    console.log(data); // one two
  });


/* 省略記法
const promise = Promise.resolve(`This is sample msg`);
promise.then(data => { console.log(data)});

const promise = Promise.reject(`This is err msg`);
promise
  .then(data => {console.log(data)})
  .catch(error => {console.log(error)}) => This is err msg
*/


/* ＊あとでもう一回！！！

onFulfilled, onRejected, catch
.then(onFulfilled, onRejected)
.catch()
*/
