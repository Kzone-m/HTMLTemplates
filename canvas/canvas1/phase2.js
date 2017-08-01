/* Canvasで線を描く

使用する属性と関数
・strokeStyle => 線の色の設定
・lineWidth => 線の太さの設定
・beginPath => 描画の開始宣言
・moveTo(x, y) => 開始位置の宣言 => 再宣言可能
・lineTo(targetX, targetY) => 線画の終端の設定 => 連続可能
・lineCap = "round" => 線の終端の形を変更する
・stroke() => 設定した項目にしたがって描画する
*/

window.onload = function(){
  var canvas = document.getElementById("sketchbook");
  if( canvas && canvas.getContext ){
    var ctx = canvas.getContext("2d");
    // strokeStyle属性 => 通常の線や枠線など => 指定しただけでは線は描かれない
    ctx.strokeStyle = "#F60"
    // lineWidth属性 => 太さの調整
    ctx.lineWidth = 10;

    // beginPath() => 描画の開始宣言
    ctx.beginPath();

    // moveTo(x座標, y座標) => 開始位置の設定
    ctx.moveTo(50, 100);

    // lineTo(targetX, targetY) => (線)描画の終端の設定
    ctx.lineTo(250, 40);

    // lineToを使うことによって連続で線描画が可能
    ctx.lineTo(20, 150);

    // moveToを使うことによって開始位置を再設定可能
    ctx.moveTo(300, 200);

    ctx.lineTo(10, 10);

    // lineCap属性 => 線の終端の形を変更する
    ctx.lineCap = "round"; // square

    // stroke() => ここまで設定した範囲で描画を行う機能
    ctx.stroke();
  }
}
