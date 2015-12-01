$(document).ready(function() {
var movementStrength = 20;
//var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
var first_hit = true;
$("#featured_area").mousemove(function(e){
    
          var pageX = e.pageX - ($(window).width() / 2);
          //var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -2 -20;
          //var newvalueY = height * pageY * -1 - 50;
          if(first_hit){
              var backgroundPos = $("#featured_area").css('backgroundPosition').split(" ");
                //now contains an array like ["0%", "50px"]

                var xPos = backgroundPos[0];
                moveBackground(xPos,newvalueX,$("#featured_area"));
                //$('#featured_area').css("background-position-y", newvalueY+"px");
                first_hit = false;
          }else{
            $('#featured_area').css("background-position-x", newvalueX+"px");
            //$('#featured_area').css("background-position-y", newvalueY+"px");

          }

});
});

$("#featured_area").mouseleave(function(e){
    first_hit = true;
    console.log(first_hit);
});



function moveBackground(current_position,new_position,container){
$({deg: current_position}).animate({deg: (new_position)}, {
        duration: 3500,
        step: function(now){
            container.css({
                 "background-position-x": "+"+now+"px"
            });
        }
});
}