/* Canvasで円形グラデーションの作成

使用する属性と関数
*/

window.onload = function(){
  var canvas = document.getElementById("sketchbook");
  if( canvas && canvas.getContext ){
    function move(){
      x += 3;
      y += 2;
      ctx.fillStyle = "#FFF";
      ctx.fillRect(0, 0, 500, 300);
      ctx.fillStyle = "#F00";
      ctx.fillRect(x, y, 30, 30);
    }

    var ctx = canvas.getContext("2d");
    // 四角形の位置の宣言
    var x = 0, y = 0;
    ctx.fillStyle = "#F00";
    ctx.fillRect(x, y, 30, 30);

    // setInterval(関数名, ミリ秒): ある関数を一定間隔で動かす関数
    setInterval(move, 50);
  }
}
