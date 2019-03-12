
var lat = document.getElementById("googleMap").getAttribute("lat").val();
var lng = document.getElementById("googleMap").getAttribute("lng").val();

//GOOGLE MAPS ROUTE
var myCenter=new google.maps.LatLng(lat,lng);

setTimeout(startMap(), 1);

function startMap() {

	function initialize() {
		var mapProp = {
		  center:myCenter,
		  zoom:15,
		  disableDefaultUI:true, 
								preserveViewport: true,
								panControl:true,
		    					zoomControl:true,
		    					mapTypeControl:true,
		    					scaleControl:false,
								streetViewControl:false,
								overviewMapControl:false,
								rotateControl:false, 
		  mapTypeId:google.maps.MapTypeId.ROADMAP
		  };

		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

		var marker=new google.maps.Marker({
		  position:myCenter
		  });

		marker.setMap(map);
	}

	google.maps.event.addDomListener(window, 'load', initialize);

}