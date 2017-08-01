var boardWidth = 512; // ゲーム画面の横幅
var boardHeight = 216; // ゲーム画面の高さ
var counter = 0; // ループ変数を用意
var lastTime; // 最終フレームの時間を記憶する
var canvas; // 描画領域の初期化
var context; // 描画を実際に担当するインスタンスを初期化
var puck; // パックインスタンスの初期化

// ES5
function Puck(x, y){
  var self = this;

  self.radius = 5;
  self.x = x;
  self.y = y;
  self.velX = 0.4 // 水平方向の速度
  self.velY = 0.3 // 垂直方向の速度

  // ホッケーボールの位置を更新する関数
  self.update = function(dt){
    self.x += self.velX * dt; // 水平方向の移動
    self.y += self.velY * dt; // 垂直方向の移動

    // 下の壁の跳ね返り
    if(self.y + self.radius > boardHeight){
      self.velY *= -1;
    }

    // 右の壁の跳ね返り
    if (self.x + self.radius > boardWidth){
      self.velX *= -1;
    }

    // 上の壁の跳ね返り
    if (self.y - self.radius < 0){
      self.velY *= -1;
    }

    // 左の壁の跳ね返り
    if (self.x - self.radius < 0){
      self.velX *= -1;
    }
  }

  // ホッケーボールを描画する関数
  self.draw = function(context){
    context.fillStyle = "white";
    context.beginPath();
    context.arc(self.x, self.y, self.radius, 0, 2 * Math.PI);
    context.fill();
  }
}


/* init関数
    ・描画領域の取得
    ・描画領域の幅の確定
    ・ホッケーボールの作成
    ・描画するインスタンスの生成
    ・この後の処理で使う時刻を取得 */
function init(){
  // 描画領域を取得
  canvas = document.getElementById("game-canvas");
  canvas.width = boardWidth;
  canvas.height = boardHeight;

  // パックオブジェクトの作成
  puck = new Puck(100, 100);

  // 描画を実際に担当するインスタンスを取得
  context = canvas.getContext("2d")

  // performance.now() => 現在時刻のミリ秒を取得
  lastTime = performance.now();
}


/* update関数
    ・1秒間に60回呼び出され、フレームを更新
    ・呼び出される度にcounterを+1する
    ・args dt: difference of time */
function update(dt){
  counter += 1;
  puck.update(dt);
}


/* render関数
    ・ゲームの状態をcanvasに書き出す関数
    ・args dt: difference of time */
function render(dt){
  // 画面の更新
  context.clearRect(0, 0, canvas.width, canvas.height);

  // puckインスタンスのdraw関数にcontextを引数と渡してホッケーを描画
  puck.draw(context);
}


/* main関数
    ・updateとrenderを呼び出す
    ＊requestAnimationFrame関数を使用して、main自身を呼び出す
      => 16ミリ秒ごとにmainを呼び出すループが完成 */
function main(){
  var now = performance.now();
  var dt = now - lastTime;

  // 別タブを閲覧するとループが止まってしまうため、大きな時差が発生する
  // それを防ぐために最大値を設ける
  // 60FPSのアニメーションの1フレームのミリ秒
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
