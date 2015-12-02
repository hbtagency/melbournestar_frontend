var window_height = Math.max($(document).height(), $(window).height());

$(window).load(function(){
    $("#leftMobileMenu").height(window_height);
});

$("#nav-button").click(function(){
    if(!$("#box-container").hasClass("move-left")){
        $("#leftMobileMenu").addClass("move-left");
        $("#box-container").addClass("move-left");
    }else{
        $("#leftMobileMenu").removeClass("move-left");
        $("#box-container").removeClass("move-left");
    }
});


