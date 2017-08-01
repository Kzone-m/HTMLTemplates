/* Class */
class Human{
  // 初期化: コンストラクタ
  constructor(hour, maxAge = 100){
    this.hour = hour;
    this.maxAge = maxAge;
  }
  // 静的メソッド
  static isHuman(){
    return true;
  }
  // インスタンスメソッド
  sleep(){
    console.log(`I wanna sleep for ${ this.hour } hours.`);
  }
}

class Hige extends Human{
  // constructorの再定義
  constructor(hour){
    const maxAge = 200;
    super(hour, maxAge);
  }
  // super classのメソッドの上書き
  sleep(additionalHour){
    this.hour = this.hour + additionalHour;
    console.log(`I wanna sleep for ${ this.hour } hours.`);
  }
}

console.log(Human.isHuman()); // True

const human = new Human(10);
human.sleep();

const hige = new Hige(10);
hige.sleep(6);
