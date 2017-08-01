/* Canvasで影の色を設定する

使用する属性と関数
・shadowColor: 要素に与える影の色を指定する
・shadowOffsetX: 影のx座標の位置を指定する
・shadowOffsetY: 影のy座標の位置を指定する
・shadowBlue: 影のぼかしを設定する
*/

window.onload = function(){
  var canvas = document.getElementById("sketchbook");
  if( canvas && canvas.getContext ){
    var ctx = canvas.getContext("2d");
    // shadowColor => 要素に与える影の色を指定する
    ctx.shadowColor = "#333";

    // shadowOffsetX => 影のx座標の位置を指定する
    ctx.shadowOffsetX = -2;

    // shadowOffsetY => 影のy座標の位置を指定する
    ctx.shadowOffsetY = 3;

    // shadowBlue => 影のぼかしを設定する
    ctx.shadowBlur = 5;

    ctx.fillRect(10, 10, 100, 100);
    ctx.beginPath();
    ctx.arc(165, 165, 50, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.fillText("Hello", 220, 50);
  }
}
