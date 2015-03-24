	
	$(document).ready( function() {
			var menu = $('button.navbar-toggle-right');
			var $elemento1 = $('span.icon-bar').first();
			var $elemento2 = $('span.icon-bar:nth-child(2)');
			var $elemento3 = $('span.icon-bar').last();
			var inicio = 2;

			var contenedor_bio = $('div.texto');
			var imagen_contenido = $('.wrapper-img');
			var portada = $('#portada');
			var fondo = $('header.fondo');
			var icon_bar = $('span.icon-bar');
			var b = 0;

			
			
			
			imagen_contenido.height(contenedor_bio.outerHeight());
			
			 checkSize();
	
    				// run test on resize of the window
   					$(window).resize(checkSize);
				
					//Function to the css rule
					function checkSize(){if (imagen_contenido.css("float") == "none" ){imagen_contenido.height('auto');}}


					$('#BotonHorario').hover(function(){
						
						$('#horario').slideToggle(800);
					}) 
					menu.click( function() {

						$('#navigation').fadeToggle(400);

						if (inicio%2==0){
							$elemento1.transition({ x:0, y:12 },500);
							$elemento3.transition({ x:0, y:-12 },500);
							$elemento2.transition({ opacity: 0 },500);
							$elemento1.transition({rotate:'45deg'},500);
							$elemento3.transition({rotate:'-45deg'},500);
							inicio++;
							if(!(icon_bar.hasClass('white-background'))){
								b++;
								icon_bar.addClass('white-background');
							}

							
						}else {
							$elemento1.transition({rotate:'0deg'},500);
							$elemento3.transition({rotate:'0deg'},500);
							$elemento1.transition({ x:0, y:0 },500);
							$elemento3.transition({ x:0, y:0 },500);
							$elemento2.transition({ opacity:1 },500);
							inicio++;
							if(b>=1){icon_bar.removeClass('white-background');}
							
							
						}


					});// cierra evento de click
			
	});// cierra evento ready
	
	
 
