// オブジェクトの分割代入:

const human = {
  name: "HIGE",
  instruments: { guitar: "Gibson" }
};

// 分割代入
const { name } = human; // console.log(name); => HIGE

// 分割代入 + 別名
const { newName: name} = human // console.log(newName) => HIGE

// ネスト
const { name, instruments: {guitar}} = human;

// 分割代入でのデファルト => イコールで代入
const { name, height = 170 } = human;

// 配列の分割代入
const array = [1, 2, 3]
const [one, two, three] = array; // one => 1, two => 2, three => 3
const [uno, , tres, cuatro = 4] = array; // uno => 1, tres => 3, cuatro => 4
