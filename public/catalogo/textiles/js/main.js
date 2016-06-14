
$(document).ready(function(){

	ventana_ancho = $(window).width();


	// ANIMACIÓN DEL SCROLL

	$('#nav ul li .scrolleable').on('click',function (e){
		//e.preventDefault();
		var strAncla = $(this).attr('href');
		var presize = $(strAncla).offset().top
		var size = presize;

		$('body, html').stop(true, true).animate({
			scrollTop: size
		}, 1000);
	});
});