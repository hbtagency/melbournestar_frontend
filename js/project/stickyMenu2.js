$(window).scroll(function(){
	var currentHeight = $(window).scrollTop();

	if(currentHeight > 200){
		$('.sticky_menu_2').addClass('stickyMenu');
		// alert("added");
	}
	else{
		$('.sticky_menu_2').removeClass('stickyMenu');
	}
	console.log(currentHeight);
})