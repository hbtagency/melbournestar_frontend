$(document).ready(function(){
    responsiveCarousel();
        initCarouselItem();

});


function initCarouselItem(){
    var parent_height = $(".whats_new_mask").first().parent().height();
    $(".whats_new_mask").height(parent_height);
}

function responsiveCarousel() {
    var window_width = $(window).width();
    if (window_width < 520) {
        $('.autoplay').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
        });
    } else if (window_width < 992) {
        $('.autoplay').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
        });
    } else {
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
}}
