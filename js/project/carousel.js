$(document).ready(function(){
  $('.whats_on_carousel').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: false,
	  autoplaySpeed: 2000,
	  focusOnSelect: false,
	  infinite: true,
  });

  $('.whats_new_carousel').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: false,
	  autoplaySpeed: 2000,
	  focusOnSelect: false,
	  infinite: true,
	  nextArrow: "<a><img style='display:inline-block; right:-25px; position:absolute; top:50%;' src='plugins/slick/carousel_right_white.png' /></a>",
  	  prevArrow: "<a><img style='display:inline-block; left:-25px; position:absolute; top:50%;' src='plugins/slick/carousel_left_white.png' /></a>",
  });
});
