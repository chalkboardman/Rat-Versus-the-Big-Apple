function Game() {
	this.events = new Events();
	//this.current_event = this.events.start();
}

Game.prototype.start = function () {
	//load text
	var start_event = this.events.start();
	this.load_event(start_event);
}

Game.prototype.load_event = function (event) {
	this.load_text(event);
	this.load_buttons(event);
}

Game.prototype.load_text = function (event) {
	$("#gametext").empty(); //clear out current game text

	//get new game text
	var new_text = "<p>" + event.description + "</p>";

	//write out game text
	$("#gametext").append(new_text);
}

Game.prototype.load_buttons = function (event) {
	$("#actions").empty(); //clear out current buttons

	//create button
	var length = event.exits.length;
	for (var i = 0; i < length; i++) {
		var exit = event.exits[i];
		var button = "<li><button type='button'>" + exit.name + "</button></li>";
		$("#actions").append(button);
	}

	//set event handlers for button
	$("button").click(function () {
		var index = $(this).parent().index();
		console.log("Button index: " + index);

		//load new event
		//current_event = current_event.exits[index];
		//load_event(current_event);
	});
}

$(document).ready(function() {
	// Handler for .ready() called.
	var game = new Game();
	game.start();

});