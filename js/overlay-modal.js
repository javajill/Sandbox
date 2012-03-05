$(document).ready( function(){

var triggers = $(".modalInput").overlay({

	// some mask tweaks suitable for modal dialogs
	mask: {
		color: '#000044',
		loadSpeed: 200,
		opacity: 0.4
	},

	closeOnClick: false
});

var buttons = $("#yesno button").click(function(e) {
	
	// get user input
	var yes = buttons.index(this) === 0;

	// do something with the answer
	triggers.eq(0).html("You clicked " + (yes ? "yes" : "no"));
});

$("#prompt form").submit(function(e) {

	// close the overlay
	triggers.eq(1).overlay().close();

	// get user input
	var input = $("input", this).val();

	// do something with the answer
	triggers.eq(1).html(input);

	// do not submit the form
	return e.preventDefault();
});
	
});
