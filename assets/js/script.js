$(document).ready(function(){
    $(".header-ham").click(function(){
        $(".header-menus").slideToggle(1000);
        $(this).toggleClass("cross");
    });
    $(".banner-ham").click(function(){
        $(".banner-menus").slideToggle(1000);
        $(this).toggleClass("cross");
    });
})


















