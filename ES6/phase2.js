/* アロー関数:
functionキーワードを必要としない関数構文
(param1, param2, ..., paramN ) => expression;

1つの場合、()はoption:
  array.forEach(num => console.log(num));
2つの場合、()は絶対:
  array.forEach((num1, num2) => console.log(num1, num2));
*/

"use strict";
const array = [1, 2, 3, 4, 5];
array.forEach(num => console.log(num));
array.forEach((num, i) => console.log("i: ", i, " num: ", num));

// 簡潔文体(concise body): 返り値 = 処理結果
const dArray1 = array.map(num => num + num); // [2, 4, 6, 8, 10]

// ブロック文体(block body): 明示的にreturnで返す
const dArray2 = array.map(num => { return num + num; }); // // [2, 4, 6, 8, 10]

// アロー関数は、自動的に関数の外側のスコープがthisに設定される
function soda(callback){ callback(); }
const es6 = {
  name: "HIGE",
  f: function(){ soda(() => { console.log("I am ", this.name); });}
}

// 関数の外側のスコープを明示的にbindしないとthisがundefinedになる
var es5 = {
  name: "HIGE",
  f: function(){ soda(function(){ console.log("I am ", this.name); }.bind(this));}
}
