$(document).ready(function() {
	//$('#Overlay1Div').overlay().close();
	$('h3').css("color", "blue");

	$('#overlayDiv1').overlay({
		// custom top position
		top : 260,
		left : 100,
		mask : {
			color : '#000',
			loadSpeed : 200,
			opacity : 0.5
		},
		closeOnClick : false,
		load : false

	});

	$('#overlayDiv2').overlay({
		top : 400,
		left : 200,
		mask : {
			color : '#000',
			loadSpeed : 200,
			opacity : 0.5
		},
		closeOnClick : false,
		load : false

	});

	$('#button1').click(function(e) {
		$('#overlayDiv1').overlay().load();
		e.preventDefault();
		e.stopPropagation();
		return false;
	})

	$('#button2').click(function(e) {
		// $('#overlayDiv1').overlay().close();
		$('#overlayDiv2').overlay().load();
		e.preventDefault();
		e.stopPropagation();
		return false;
	})
});
