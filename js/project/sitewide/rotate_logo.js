var hover_element = $('#rotate_logo_trigger');
var rotate = $('#rotate_logo');

var lock = false;

hover_element.hover(function(){
    if(!rotate.hasClass('over')){
        rotate.addClass('over');
    }
});

hover_element.mouseleave(function(){
    if(!lock){
        lock = true;
        window.setTimeout( function () { 
            rotate.removeClass('over');
            lock = false;
        }, 40000 );
        
    }
});