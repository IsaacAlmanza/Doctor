	function initialize() {
	 	
        var mapCanvas = document.getElementById('map-canvas');

        var mapOptions = {
          center: new google.maps.LatLng(8.9819269000 , -79.510194200),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(mapCanvas, mapOptions)

        var iconBase = 'images/';
		var marker = new google.maps.Marker({
		  position:new google.maps.LatLng(8.9819269000 , -79.510194200),
		  map: map,
		  icon: iconBase + 'icono1.png'
		});

		var div = document.createElement('div');
          div.innerHTML = '<p>Estamos Ubicados en el 1º piso </p>' + '<p> Consultorio No. 118 </p>';
        
          legend.appendChild(div);

		 map.controls[google.maps.ControlPosition.RIGHT_TOP].push(
 		 document.getElementById('legend'));
      }
      

      google.maps.event.addDomListener(window, 'load', initialize);