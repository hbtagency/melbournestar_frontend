$(".whatson_content").hover(function(){

	if($(this).children('.whatson_carousel_textarea').first().hasClass('centered')){
	}else{
		$(this).children('.whatson_carousel_textarea').first().addClass('centered');
	}
});

$(".whatson_content").mouseleave(function(){
	if($(this).children('.whatson_carousel_textarea').first().hasClass('centered')){
		$(this).children('.whatson_carousel_textarea').first().removeClass('centered');
	}else{
	}
});