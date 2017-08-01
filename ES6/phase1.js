/* const & let */

let msg = "hello"  // 変数宣言
const msg = "hello" // 読み取り専用
/*
ブロックスコープ for let and const
  const name = "";
  {
    const name = "";
  }

関数スコープ for var
  var name = "";
  {
    var name =""; => Error: Duplicate declaration "name"
  }
*/


const project = { name: "sample" } // project.name => sample
project.name = "sample2" // プロパティの変更は可能 => project.name => sample2

/*
オブジェクの変更は不可
project = { name: "sample3"} => Script Error

変更を不変にするには
Object.freeze(project);
*/
