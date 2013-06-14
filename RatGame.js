function start_game() {
	//load events
	events = new Events();

	//load text
	var start_event = events.start();
	load_text(start_event);
}

function load_text(event) {
	$("#gametext").empty(); //clear out current game text

	//get new game text
	var new_text = "<p>" + event.description + "</p>";

	//write out game text
	$("#gametext").append(new_text);
}

$(document).ready(function() {
	// Handler for .ready() called.
	start_game();

});