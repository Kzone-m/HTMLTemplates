/* Canvasで文字を描く

使用する属性と関数
・setTransform(伸縮x, 傾斜y, 傾斜x, 伸縮y, 移動x, 移動y)
・rotate(0 ~ 2π): 回転を加える => canvasそのものを回転させる
*/

window.onload = function(){
  var canvas = document.getElementById("sketchbook");
  if( canvas && canvas.getContext ){
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#C00";
    ctx.fillRect(0, 0, 50, 50);

    // setTransform(伸縮x, 傾斜y, 傾斜x, 伸縮y, 移動x, 移動y)
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // rotate(0 ~ 2π) => 回転を加える => canvasそのものを回転させる
    ctx.rotate( (1/8) * Math.PI );

    // 変形と回転を加えて四角形を再描画
    ctx.fillRect(50, 0, 50, 50);

    ctx.rotate( (1/8) * Math.PI );
    ctx.fillRect(100, 0, 50, 50);
  }
}
