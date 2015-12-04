var star_point = $('.main_nav').first().offset().top;
var sticky_element = $('.main_nav').first();
//Customized staff for box container only
var box = $('.box-container').first();
$(window).scroll(function(){
    if($(window).scrollTop() > star_point){
        sticky_element.addClass('stick');
        box.addClass("no-padding");
        $("#book-ticket-button").addClass("hidden");
    }else{
        sticky_element.removeClass('stick');
        box.removeClass("no-padding");
        $("#book-ticket-button").removeClass("hidden");
    }
});


