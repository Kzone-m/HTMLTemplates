/* 新しい関数の引数の渡し方 */
function hello(target = "everybody"){
  console.log("Hello " + target);
}
// hello("HIGE") => Hello HIGE
// hello() => Hello everybody


/* Rest引数: 可変長 => 配列 */
function add(x, ...y){
  let result = x;
  y.forEach(num => {
    result = result + num;
  });
}
// add(1); => 1
// add(1, 2); => 3
// add(1, 2, 3); => 6


/* Spread演算子 */
const lst1 = [1, 2]
const lst2 = [3, 4, 5]
lst1.push(...lst2); // lst2.forEach( (i) => { lst1.push(i); });
console.log(JSON.stringfy(lst1)); // [1, 2, 3, 4, 5]

const lst3 = [1, 2, ...lst2] // [1, 2, 3, 4, 5]
[x, ...y] = lst2; // x: 3, y: [4, 5]
