var boardWidth = 512; // ゲーム画面の横幅
var boardHeight = 216; // ゲーム画面の高さ
var counter = 0; // ループ変数を用意
var lastTime; // 最終フレームの時間を記憶する
var canvas; // 描画領域の初期化
var context; // 描画を実際に担当するインスタンスを初期化
var puck; // パックインスタンスの初期化
var paddle1; // パドルの作成
var paddle2;

// ホッケーのボールクラス *ES5
function Puck(x, y){
  var self = this; // 自分自身を取得
  self.radius = 5; // ボールの半径
  self.x = x; // ボールの横幅
  self.y = y; // ボールの縦幅
  self.velX = 0.4 // 水平方向への速度
  self.velY = 0.3 // 垂直方向への速度

  // ボールの位置を更新する関数
  self.update = function(dt){
    self.x += self.velX * dt; // 水平方向の移動
    self.y += self.velY * dt; // 垂直方向の移動

    // 下の壁の跳ね返り
    if(self.y + self.radius > boardHeight) self.velY *= -1;

    // 右の壁の跳ね返り
    if (self.x + self.radius > boardWidth) self.velX *= -1;

    // 上の壁の跳ね返り
    if (self.y - self.radius < 0) self.velY *= -1;

    // 左の壁の跳ね返り
    if (self.x - self.radius < 0) self.velX *= -1;
  }

  // ボールを描画する関数
  self.draw = function(context){
    context.fillStyle = "white"; // ボールの色を指定
    context.beginPath(); // ボールの描画開始合図
    context.arc(self.x, self.y, self.radius, 0, 2 * Math.PI); // ボールの描画位置の設定
    context.fill(); // ボールの描画
  }
}

// ボールを打ち返すパドルクラス
function Paddle(x, upKeyCode, downKeyCode){
  var self = this;

  self.x = x; // xは固定値
  self.y = boardHeight / 2; // yの初期値はボードの中央

  self.halfWidth = 5; // パドルの横幅
  self.halfHeight = 20; // パドルの縦幅
  self.moveSpeed = 0.5; // パドルの上下移動の速度
  self.upButtonPressed = false; // 上へ移動するキーが押されたかどうか判定する
  self.downButtonPressed = false; // 下へ移動するキーが押されたかどうか判定する
  self.upKeyCode = upKeyCode;
  self.downKeyCode = downKeyCode;

  // ユーザーによるキー入力がされたときの処理
  self.onKeyDown = function(keyCode){
    if (keyCode === self.upKeyCode){
      self.upButtonPressed = true;
    }

    if (keyCode === self.downKeyCode){
      self.downButtonPressed = true;
    }
  }

  // ユーザーがキーから手を離したときの処理
  self.onKeyUp = function(keyCode){
    if (keyCode === self.upKeyCode){
      self.upButtonPressed = false;
    }

    if (keyCode === self.downKeyCode){
      self.downButtonPressed = false;
    }
  }

  // update関数を実装することで、押されたキーに対応してパドルを操作できるようになる
  self.update = function(dt){
    // 上方向に移動したい時の処理
    if (self.upButtonPressed){
      self.y -= self.moveSpeed * dt; // 0が上方向
    }

    // 下方向に移動したい時の処理
    if (self.downButtonPressed){
      self.y += self.moveSpeed * dt; // 255が下方向
    }

    // 上方向に制限をかけたい時の処理
    if (self.y - self.halfHeight < 0){
      self.y = self.halfHeight;
    }

    // 下方向に制限をかけたい時の処理
    if (self.y + self.halfHeight > boardHeight){
      self.y = boardHeight - self.halfHeight;
    }

  }

  // パドルを描画するための関数
  self.draw = function(context){
    context.fillStyle = "white"; // パドルの色を決定
    context.fillRect( // パドルを描画する
      self.x - self.halfWidth, // 開始位置
      self.y - self.halfHeight,
      self.halfWidth * 2,
      self.halfHeight * 2
    );
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

  // パックオブジェクトの生成
  puck = new Puck(100, 100);

  // パドルオブジェクトの生成
  paddle1 = new Paddle(10, 87, 83); // 左の壁から10px離れた場所, W=87=上, S=83=下
  paddle2 = new Paddle(boardWidth - 10, 38, 40); // 右の壁から10px離れた場所, ↑=38=上, ↓=40=下

  // キーボード入力を受け付ける
  document.addEventListener("keydown", function(e){
    // ブラウザがデファルトで設定している挙動をキャンセル
    // ex: 矢印キーのデファルトはスクロール
    e.preventDefault();

    // onKeyDown関数を呼び出す
    // *keyCodeはe.keyCodeで取得できる
    paddle1.onKeyDown(e.keyCode);
    paddle2.onKeyDown(e.keyCode);
  })

  // キー離された時のイベント
  document.addEventListener("keyup", function(e){
    e.preventDefault();

    // onKeyUp関数を呼び出す
    paddle1.onKeyUp(e.keyCode);
    paddle2.onKeyUp(e.keyCode);
  })


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
  paddle1.update(dt);
  paddle2.update(dt);
}


/* render関数
    ・ゲームの状態をcanvasに書き出す関数
    ・args dt: difference of time */
function render(dt){
  // 画面の更新
  context.clearRect(0, 0, canvas.width, canvas.height);

  // puckインスタンスのdraw関数にcontextを引数と渡してホッケーを描画
  puck.draw(context);

  // パドルインスタンスのdraw関数にcontextを引数として渡してパドルを生成
  paddle1.draw(context);
  paddle2.draw(context);
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
