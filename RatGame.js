function start_game() {
	//load events
	events = new Events();

	//load text
	var start_event = events.start();
	load_event(start_event);
}

function load_text(event) {
	$("#gametext").empty(); //clear out current game text

	//get new game text
	var new_text = "<p>" + event.description + "</p>";

	//write out game text
	$("#gametext").append(new_text);
}

function load_buttons(event) {
	$("#actions").empty(); //clear out current buttons

	var length = event.exits.length;
	for (var i = 0; i < length; i++) {
		var exit = event.exits[i];
		var button = "<li>" + exit.name + "</li>";
		$("#actions").append(button);
	}
}

function load_event(event) {
	load_text(event);
	load_buttons(event);
}

$(document).ready(function() {
	// Handler for .ready() called.
	start_game();

});