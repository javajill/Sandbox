$(document).ready( function(){
	//$('#Overlay1Div').overlay().close();
	$('h1').css("color","blue");
	//$('#click1Btn').click( function() {
	
	$('#Overlay1Div').overlay({
		oneInstance: false, 
		// custom top position
		top: 100,
		left: 100,
		// some mask tweaks suitable for facebox-looking dialogs
		mask: {

			// you might also consider a "transparent" color for the mask
			color: '#f22',

			// load mask a little faster
			loadSpeed: 200,

			// very transparent
			opacity: 0.5
		},

		// disable this for modal dialog-type of overlays
		closeOnClick: false,

		// load it immediately after the construction
		load: true	

	});
	
		$('#Overlay2Div').overlay({
			oneInstance: false, 
		// custom top position
		top: 130,
		left: 200,
		// some mask tweaks suitable for facebox-looking dialogs
		mask: {

			// you might also consider a "transparent" color for the mask
			color: '#f22',

			// load mask a little faster
			loadSpeed: 200,

			// very transparent
			opacity: 0.5
		},

		// disable this for modal dialog-type of overlays
		closeOnClick: false,

		// load it immediately after the construction
		load: true	

	});
	
});
