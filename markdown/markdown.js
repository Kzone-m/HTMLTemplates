$(document).ready(function(){
 var editor = $('#editor');
 var preview = $('#preview');
 function setContent(value){
   var markedContent = marked(value)
   preview.html(markedContent);
 };
 editor.keyup(function(){
   var newContent = $(this).val();
   setContent(newContent);
 });
})
