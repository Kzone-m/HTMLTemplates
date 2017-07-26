// var $dropzone = $('#dropzone').on('dragover', onDragOver).on('dragenter', onDragEnterDropZone).on('dragleave', onDragLeaveDropZone).on('drop', onDrop);

var $wrapper = $('#dropzoneWrapper')
  .on('dragenter', onDragEnter)
  .on('dragover', onDragOver)
  .on('dragleave', onDragLeave)
  .on('dragenter', onDragEnterDropZone)
  .on('dragleave', onDragLeaveDropZone)
  .on('drop', onDrop);

// カーソルがdropzoneの上にあるか判定する用
// エフェクトの切り替えに使用する
var stateDropzone = false;
// 画面内にドラッグされたときエフェクトを追加する
function onDragEnter(e) {
  addEffect();
}

// dropzoneにカーソルが乗っているフラグを立てる
function onDragEnterDropZone(e) {
  stateDropzone = true;
}

// dropzoneからカーソルが外れたフラグを立てる
function onDragLeaveDropZone() {
  stateDropzone = false;
}

// ドラッグが画面外に行った場合にエフェクトを削除する
function onDragLeave(e) {
  if(this === e.target && !stateDropzone) removeEffect();
}

// ドロップ可能なことを示す
function onDragOver(e) {
  e.preventDefault();
  e.stopPropagation();
}

// ドロップされた際の処理
function onDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  var event = e.originalEvent;
  var file;
  var dataTransfer = event.dataTransfer;
  var fileObject = dataTransfer.files;

  // fileが存在しているときだけ処理する
  if ( dataTransfer.files.length !== 0) {
    file = dataTransfer.files[0];
    // ファイルタイプがjpegかpngの場合処理する
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      fileReader(file, fileObject);
    }
    else { alert('ドロップできるのは画像だけです。');}
  }
  else { alert('画像ファイルをドロップしてください。');}
  removeEffect();
}
// エフェクトを追加する
function addEffect() {
  // $wrapper.addClass('ondragenter');
  $('#dropzoneWrapperInside').addClass('ondragenter');
}
// エフェクトを削除する
function removeEffect() {
  // $('.ondragenter').removeClass('ondragenter');
  $('#dropzoneWrapperInside').removeClass('ondragenter');
}
// ドロップできない場所にドロップされた場合の処理
// ブラウザのデフォルトのドロップ処理をキャンセルする
function onDropCancel(e) {
  e.preventDefault();
  alert('ここにはドロップできません');
  // dragenterイベント時につけたクラスを削除する
  // $('.ondragenter').removeClass('ondragenter');
  $('#dropzoneWrapperInside').removeClass('ondragenter');
}
// ファイルを読み込む
function fileReader(file, files) {
  var reader = new FileReader();
  // ファイルの読み込み
  reader.readAsDataURL(file);
  // ファイルの読み込み完了時の処理
  $(reader).on('load' , function(e) {
    // reader.resultにdataURIで画像のデータが入っている
    showImage(reader.result, files);
  });
}
// 画像をDOMに追加する
function showImage(image, files) {
  var $img = $('<img>').attr({
    'src': image,
    'class': "picture",
  });
  // 画像をDOMに追加する
  $("#file-wrapper").append($img);
  $("#file")[0].files = files;
  $("#file-wrapper").removeAttr("id", "file-wrapper");
  $("#file").removeAttr("id", "file");
  $("#dropzone").append('<label for="file" id="file-wrapper" class="col-sm-3 file-wrapper"><input type="file" id="file" style="display:none;"></label>')
}
