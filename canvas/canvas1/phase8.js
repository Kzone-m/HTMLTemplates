/* Canvasで線形グラデーションの作成

使用する属性と関数
・createLinearGradient(始点X, 始点Y, 終点X, 終点Y)
・addColorStop(0.0 ~ 1.0, 色)
    => グラデーションのある地点での色を決定する
      0.0 => Gの始点, 1.0 => Gの終点
*/

window.onload = function(){
  var canvas = document.getElementById("sketchbook");
  if( canvas && canvas.getContext ){
    var ctx = canvas.getContext("2d");

    // createLinearGradient(始点X, 始点Y, 終点X, 終点Y)
    var g = ctx.createLinearGradient(0, 0, 100, 0);

    // addColorStop(0.0 ~ 1.0, 色) => グラデーションのある地点での色を決定する
    // 0.0 => Gの始点, 1.0 => Gの終点
    g.addColorStop(0, "#00F");
    g.addColorStop(0.3, "#CC0");
    g.addColorStop(1, "#003");

    // fillStyleにgを適用する
    ctx.fillStyle = g;

    ctx.fillRect(0, 0, 300, 300)
  }
}
