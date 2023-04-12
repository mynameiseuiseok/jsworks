$(document).ready(function(){
    $("#btn_show").click(function(){
        $("#detail").show();
        $(this).hide(); //클릭한 버튼 자신
    });
    $("#btn_hide").click(function(){
        $("#detail").hide();
        $("#btn_show").show();
    });
});