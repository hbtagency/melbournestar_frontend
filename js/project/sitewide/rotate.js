var hover_element = $('#book-ticket-button');
var rotate = $('#rotate' );

hover_element.hover(function(){
    rotate.addClass('over');
});

hover_element.mouseleave(function(){
    rotate.removeClass('over');
    rotate.addClass('out');
    window.setTimeout( function () { rotate.removeClass('out') }, 800 );
});

