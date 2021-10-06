$(function() {
   //画面が開いたときに動きます。
   //EVENT SET
   //varの考え方と変数の書く場所を考えてください。
   $('#calcbtn').bind('click' , function(e) {
        var val1 = $('#data1').val();
        var val2 = $('#data2').val();
        var iVal1 = parseInt(val1);
        var iVal2 = parseInt(val2);
        var iVal3 = iVal1 + iVal2;
        $('#answer').val(iVal3); 
        //var val = val1 + val2;       
        //$('#answer').val(val);        
      });  
   $('#sample').bind('click' , function(e) {
        alert(e.target.id);
        alert($('#' + e.target.id).val());
      });      
});
