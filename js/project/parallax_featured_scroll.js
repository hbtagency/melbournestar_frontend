$(window).scroll(function () {
    var x = $(this).scrollTop();
    if ($(window).width() > 1200) {
        $('.horrizontal-parallax-banner').css('background-position', parseInt(-x / 10) + 'px 100%, '+ parseInt(-x / 20) + 'px 0% ');
    }
});

