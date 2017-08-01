// 全てのdom要素が読み込まれた後に動作させるための処理
window.onload = function(){
  var canvas = document.getElementById("sketchbook");
  // エラーの回避
  // canvas要素が取得できているか
  // 描画に必要な機能をサポートしているか
  if( canvas && canvas.getContext ){
    // 2d context => 描画を担当する司令塔
    var ctx = canvas.getContext("2d");
    // fillStyleプロパティを設定することによって背景を設定
    ctx.fillStyle = "#00C";
    // fillRectは四角形を描画する
    ctx.fillRect(20, 20, 150, 80)
  }
}
