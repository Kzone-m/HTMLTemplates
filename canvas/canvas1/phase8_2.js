/* Canvasで円形グラデーションの作成

使用する属性と関数
・createLinearGradient(開始円X, 開始円Y, 開始円半径, 終了円X, 終了円Y, 終了円半径)
*/

window.onload = function(){
  var canvas = document.getElementById("sketchbook");
  if( canvas && canvas.getContext ){
    var ctx = canvas.getContext("2d");

    // createLinearGradient(開始円X, 開始円Y, 開始円半径, 終了円X, 終了円Y, 終了円半径)
    var g = ctx.createRadialGradient(150, 150, 25, 150, 150, 80);

    g.addColorStop(0, "#00F");
    g.addColorStop(0.3, "#003");
    g.addColorStop(1, "#003");
    ctx.fillStyle = g;
    ctx.fillRect(0,0,300,300);

  }
}
