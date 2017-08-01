/* Canvasで四角形を描く

使用する属性と関数
・strokeStyle: 枠線の色の設定
・lineWidth: 枠線の太さの設定
・strokeRect(x1, y1, w, h): 四角形の枠線の描く関数

・fillStyle: 四角形の中を塗りつぶす
・fillRect(x1, y1, w, h): 四角形を描く関数

・clearRect(x1, y1, w, h): 指定した範囲の描画を消す関数
*/

window.onload = function(){
  var canvas = document.getElementById("sketchbook");
  if( canvas && canvas.getContext ){
    var ctx = canvas.getContext("2d");

    // strokeStyle属性 => 枠線の色の指定
    ctx.strokeStyle = "#030";
    // 線の太さを設定する
    ctx.lineWidth = 5;
    // strokeRect(x1, y1, w, h) => 四角形の枠を描く
    ctx.strokeRect(0, 0, 90, 125);

    // fillStyle属性 => 四角形を塗りつぶす属性 vs strokeStyle
    ctx.fillStyle = "#090";
    // fillRect(x1, y1, w, h) => 四角形を描く
    ctx.fillRect(10, 10, 80, 120);

    // clearRect(x1, y1, w, h) => 囲まれた部分の描画を消す
    ctx.clearRect(20, 20, 30, 30);
  }
}
