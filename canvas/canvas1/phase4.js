/* Canvasで円を描く

使用する属性と関数
・beginPath
・fillStyle
・arc(centerX, centerY, r, initial, end, dir)
・fill()
*/

window.onload = function(){
  var canvas = document.getElementById("sketchbook");
  if( canvas && canvas.getContext ){
    var ctx = canvas.getContext("2d");
    // 描画開始の宣言をする => 円と線のとき!!!
    ctx.beginPath();

    // fillStyle属性: 対象の図形の中を指定した色で塗りつぶす
    ctx.fillStyle = "#600";

    // 枠線の色, 太さの指定
    ctx.strokeStyle = "#300";
    ctx.lineWidth = 10;

    // arc(x, y, r, initial, end, dir) => 円を描く関数
    // x,y => 円の中心座標, r => 円の半径
    // initial => 円の開始位置(0 ~ 2π), end => 円の終了位置
    // dir: false => 時計周り,  true => 反時計周り
    ctx.arc(200, 100, 25, 0, (1/4) * Math.PI, true);

    // 枠線の描画を行う
    ctx.stroke();
    // 塗りつぶしの描画を行う
    ctx.fill();

  }
}
