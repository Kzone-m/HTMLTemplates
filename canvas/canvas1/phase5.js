/* Canvasで文字を描く

使用する属性と関数
・fillStyle: 文字そのものの色
・strokeStyle: 文字の枠の色の指定
・lineWidth: 枠の太さの指定
・font: フォントの大きさと書体の指定
・fillText(): フォントそのものの描画
・strokeText(): 縁取りした文字の描画
*/

window.onload = function(){
  var canvas = document.getElementById("sketchbook");
  if( canvas && canvas.getContext ){
    var ctx = canvas.getContext("2d");
    // 文字色の指定 => 文字そのものの色
    ctx.fillStyle = "#099";

    // strokeStyle => 文字の枠の色の指定
    ctx.strokeStyle = "#000";

    // lineWidth => 枠の太さの指定
    ctx.lineWidth = 2;

    // font => フォントの大きさと書体の指定
    ctx.font = "30px serif"

    // fillText関数("文字列", x, y) => フォントそのものの描画
    ctx.fillText("Hello", 100, 50);

    // strokeText("文字列", x, y) => 縁取りした文字の描画
    ctx.strokeText("Hello", 100, 50);
  }
}
