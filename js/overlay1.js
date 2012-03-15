$(document).ready(function() {
	//$('#Overlay1Div').overlay().close();
	$('h3').css("color", "blue");

	$('#overlayDiv1').overlay({
		// custom top position
		top : 100,
		left : 100,
		zIndex : 1001,
		//oneInstance : false,
		mask : {
			color : '#000',
			loadSpeed : 200,
			opacity : 0.5,
			zIndex : 1000,
		},
		closeOnClick : false,
		load : false

	});

	$('#overlayDiv2').overlay({
		top : 200,
		left : 200,
		zIndex : 2001,
		oneInstance : false,
		mask : {
			color : '#000',
			loadSpeed : 200,
			opacity : 0.5,
			zIndex : 2000
		},
		closeOnClick : false,
		load : false

	});

	$('#button1').click(function(e) {
		$('#overlayDiv1').overlay().load();
		//$('#overlayDiv2').overlay().load();
		e.preventDefault();
		e.stopPropagation();
		return false;
	})

	$('#overlayCloseButton1').click(function(e) {
		$('#overlayDiv1').overlay().close();
		e.preventDefault();
		e.stopPropagation();

	});

	$('#button2').click(function(e) {
		$('#overlayDiv2').overlay().load();
		e.preventDefault();
		e.stopPropagation();
		return false;
	})

	$('#overlayCloseButton2').click(function(e) {
		$('#overlayDiv2').overlay().close();
		e.preventDefault();
		e.stopPropagation();

	});
});
