$(document).ready( function(){
	//$('#Overlay1Div').overlay().close();
	$('h1').css("color","blue");
	$('#Button1').click( function() {
		alert('Hey');
		$('#Overlay1Div2').load();
	});

	$('#OverlayDiv1').overlay( {
		oneInstance: false, 
		// custom top position
		top: 100,
		left: 100,
		zIndex: 10100,
		// some mask tweaks suitable for facebox-looking dialogs
		mask: {

			// you might also consider a "transparent" color for the mask
			color: '#222',

			// load mask a little faster
			loadSpeed: 200,

			// very transparent
			opacity: 0.0
		},

		// disable this for modal dialog-type of overlays
		closeOnClick: false,

		// load it immediately after the construction
		load: false	

	});
	
		$('#OverlayDiv2').overlay({
			oneInstance: false, 
		// custom top position
		top: 130,
		left: 200,
		zIndex: 10500,
		// some mask tweaks suitable for facebox-looking dialogs
		mask: {

			// you might also consider a "transparent" color for the mask
			color: '#222',

			// load mask a little faster
			loadSpeed: 200,

			// very transparent
			opacity: 0.0
		},

		// disable this for modal dialog-type of overlays
		closeOnClick: false,

		// load it immediately after the construction
		load: true	

	});
	
});
