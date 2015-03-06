	
	$(document).ready( function() {
			var menu = $('button.navbar-toggle-right');
			var $elemento1 = $('span.icon-bar').first();
			var $elemento2 = $('span.icon-bar:nth-child(2)');
			var $elemento3 = $('span.icon-bar').last();
			var inicio = 2;

			var contenedor_bio = $('div.text');
			var imagen_contenido = $('figure.wrapper-img');
			var portada = $('#portada');
			var fondo = $('header.fondo');
			var location_info = $('#location-info');
			var contendor_mapa = $('section.mapas');

			contendor_mapa.height(location_info.outerHeight());
			
			
			//=============padding dinamico ========================*/
			a = portada.height()/2*0.25;
			fondo.css({'padding-top':(portada.height()/2+a)+'px','padding-bottom':portada.height()/2+'px'});

			
			imagen_contenido.height(contenedor_bio.outerHeight());
			
			 checkSize();
	
    				// run test on resize of the window
   					$(window).resize(checkSize);
				
					//Function to the css rule
					function checkSize(){if (imagen_contenido.css("float") == "none" ){imagen_contenido.height('auto');}}


					$('#BotonHorario').click(function(){
						
						$('#horario').slideToggle(500);
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
							 $('span.icon-bar').addClass('white-back');

							
						}else {
							$elemento1.transition({rotate:'0deg'},500);
							$elemento3.transition({rotate:'0deg'},500);
							$elemento1.transition({ x:0, y:0 },500);
							$elemento3.transition({ x:0, y:0 },500);
							$elemento2.transition({ opacity:1 },500);
							inicio++;
							 $('span.icon-bar').removeClass('white-back');
						}


					});// cierra evento de click
			
	});// cierra evento ready
	
	
 
