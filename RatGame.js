function Game() {
	this.events = new Events();
	this.current_event = this.events.start();
}

Game.prototype.start = function () {
	//set current event
	var start_event = this.events.start();
	this.current_event = start_event;
	//load it up onto screen
	this.load_event();
}

Game.prototype.load_event = function () {
	this.load_text();
	this.load_buttons();
}

Game.prototype.load_text = function () {
	var event = this.current_event;

	$("#gametext").empty(); //clear out current game text

	//get new game text
	var new_text = "<p>" + event.description + "</p>";

	//write out game text
	$("#gametext").append(new_text);
}

Game.prototype.load_buttons = function () {
	var event = this.current_event;
	$("#actions").empty(); //clear out current buttons

	//create button
	var length = event.exits.length;
	for (var i = 0; i < length; i++) {
		var exit = event.exits[i];
		var button = "<li><button type='button'>" + exit.name + "</button></li>";
		$("#actions").append(button);
	}

	var game = this; //so we can access game in closure

	//set event handlers for button
	$("button").click(function () {
		var index = $(this).parent().index();
		console.log("Button index: " + index);

		//load new event
		game.current_event = event.exits[index];
		game.load_event();
	});
}

$(document).ready(function() {
	// Handler for .ready() called.
	var game = new Game();
	game.start();

});