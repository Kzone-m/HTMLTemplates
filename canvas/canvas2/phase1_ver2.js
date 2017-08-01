var boardWidth = 512; // ゲーム画面の横幅
var boardHeight = 216; // ゲーム画面の高さ
var lastTime; // 最終フレームの時間を記憶する
var canvas; // 描画領域の初期化
var context; // 描画を実際に担当するインスタンスを初期化
var puck; // パックインスタンスの初期化

class Puck {
  constructor(x, y){
    this.radius = 5; // ボールの半径
    this.x = x; // ボールの横位置
    this.y = y; // ボールの縦位置
    this.vX = 0.4; // ボールの水平方向の速度
    this.vY = 0.3; // ボールの垂直方向の速度
  }

  update(dt){
    this.x += this.vX * dt; // 水平方向の移動
    this.y += this.vY * dt; // 垂直方向の移動

    if (this.y + this.radius > boardHeight) this.vY *= -1; // 下の壁の跳ね返り
    if (this.x + this.radius > boardWidth) this.vX *= -1; // 右の壁の跳ね返り
    if (this.y - this.radius < 0) this.vY *= -1; // 上の壁の跳ね返り
    if (this.x - this.radius < 0) this.vX *= -1; // 左の壁の跳ね返り
  }

  draw(context){
    context.fillStyle = "white"; // ボールの色
    context.beginPath(); // ボールの描画宣言
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI); // ボールの実態を作成
    context.fill(); // ボールを描画
  }
}

// 初期設定に必要なもの準備する関数
function init(){
  canvas = document.getElementById("game-canvas"); // 描画領域を取得
  canvas.width = boardWidth; // 描画の横幅の確定
  canvas.height = boardHeight; // 描画の縦幅の確定
  puck = new Puck(100, 100); // ボールの作成
  context = canvas.getContext("2d"); // 描画を実際に担当するインスタンスを取得
  lastTime = performance.now(); // performance.now() => 現在時刻のミリ秒を取得
}

// ボールオブジェクトのupdate関数を呼び出し、difference of time(dt)を渡す
// ＊1秒間に60回呼び出され、フレームを更新
function update(dt){
  puck.update(dt);
}

// ゲームの状態をcanvasに書き出す関数
function render(dt){
  context.clearRect(0, 0, canvas.width, canvas.height); // 画面の更新
  puck.draw(context); // ボールオブジェクトのdraw関数にcontextを引数と渡してボールを描画
}

// update関数とrender関数を呼び出す
// ＊requestAnimationFrame関数を使用して、main自身を呼び出す => 16ミリ秒ごとにmainを呼び出すループが完成
function main(){
  var now = performance.now();
  var dt = now - lastTime;

  /* maxFrameTimeについての注意書き!!!
     別タブを閲覧するとループが止まってしまうため、大きな時差が発生する
     それを防ぐために最大値を設ける
     60FPSのアニメーションの1フレームのミリ秒 */
  var maxFrameTime = 1000 / 60;
  if (dt > maxFrameTime){
    dt = maxFrameTime;
  }

  update(dt);
  render(dt);

  lastTime = now;
  requestAnimationFrame(main);
}

init(); // 初期化
main(); // アニメーションの描画を開始
