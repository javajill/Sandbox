$(document).ready( function(){
	//$('#Overlay1Div').overlay().close();
	$('h3').css("color","blue");

	
	$('#overlayDiv1').overlay({
		// custom top position
		top: 260,
		mask: {
			color: '#f22',
			loadSpeed: 200,
			opacity: 0.5
		},
		closeOnClick: false,
		load: false	

	});
	
	$('#overlayDiv2').overlay({
		top: 260,
		mask: {
			color: '#f22',
			loadSpeed: 200,
			opacity: 0.5
		},
		closeOnClick: false,
		load: false	

	});
	
	$('#button1').click( function() {
		('#OverlayDiv1').overlay().load();
	})
	
	$('#button2').click( function() {
		('#OverlayDiv2').overlay().load();
	})
	
});
