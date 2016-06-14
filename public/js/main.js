
$(document).ready(function(){

	// ACTIVACION DE BANNER Y SETTEO DE TIEMPO

	var t=setInterval(function(){avanzar2();},6500);

	ventana_ancho = $(window).width();


	// ANIMACIÓN DEL SCROLL

	$('#nav ul li .scrolleable').on('click',function (e){
		e.preventDefault();
		var strAncla = $(this).attr('href');
		var presize = $(strAncla).offset().top
		var size = presize -104;

		$('body, html').stop(true, true).animate({
			scrollTop: size
		}, 1000);
	});

	//VALIDACION DE FORM DE SECCION CONTACTO

	function validarForm(){
		if($("#nombre").val() == ""){
			alert("El campo Nombre no puede estar vacio");
			$("#nombre").focus();
			return false;
		}
		if($("#correo").val() == ""){
			alert("El campo Correo no puede estar vacio");
			$("#correo").focus();
			return false;
		}
		if($("#mensaje").val() == ""){
			alert("El campo Servicio no puede estar vacio");
			$("#mensaje").focus();
			return false;
		}

		return true;		
	}

	$("#boton").click(function(){


		if(validarForm()){

			console.log("formulario validado");

			$.post("enviar.php",$("#formdata").serialize(),function(res){
				if(res==1){
					console.log(res);
					
					alert("Pronto nos pondremos en contacto con usted")
				}else{
					console.log(res)
					alert("Hubo un error, intentelo nuevamente.")
				}
			});
		}
	});



});

//FUNCION DE BANNER

function avanzar2()
{
	var size = $('#banner').find('.slide').size();
		$('#banner').find('.slide').each(
			function(index,value){
				if($(value).hasClass('slide_visible'))
				{
					var id_visible = $(value).attr("id");
					//console.log(id_visible);
					$(".paginacion").each( function (){
						$(this).removeClass("paginaVisible");

					});
					$("#" + id_visible + "pag").addClass("paginaVisible");
					$(value).fadeOut(2000);
					setTimeout(function(){ $(value).removeClass('slide_visible'); }, 2000);
					//$(value).removeClass('slide_visible');
					
					if(index+1<size)
					{
						$($('#banner').find('.slide').get(index+1)).fadeIn(2000);
						setTimeout(function(){ $($('#banner').find('.slide').get(index+1)).addClass('slide_visible'); }, 2000);
						
					}
					else
					{
						$($('#banner').find('.slide').get(0)).fadeIn(2000);
						$($('#banner').find('.slide').get(0)).addClass('slide_visible');	
						return false;
					}
				}
		});
}
