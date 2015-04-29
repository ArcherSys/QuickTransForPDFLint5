CKEDITOR.plugins.add('quicktrans',{
init: function( editor ){
    editor.addCommand('displayAllConjugations', {
       exec: function( editor ){
       editor.insertHtml("<div>&eacute;</div><div>&aacute;s</div><div>&aacute;</div><div>emos</div><div>&aacute;is</div><div>&aacute;n</div>");
}
});
editor.ui.addButton('QuickTrans Conjugational Aid',{
 label: "Activate Conjugation Aid",
 command: "displayAllConjugations",
 toolbar: "insert"
});
}
});