/* プロパティの省略記法 */

const name = "HIGE";
const age = 250;
const power = `zero`

const human = {
  name, // => name: name, => human.name => HIGE
  age, // => age: age => human.age => 250
  info(){ console.log(this.name + " is " + this.age + " years old." );},
  // info: function( ... )
  [power]: `uno` // 動的な変更
}
