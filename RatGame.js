function Game() {
	this.events = new Events();
	this.pages = pages;
	this.current_event = this.events.start();
	this.current_page = this.pages[0];
}

Game.prototype.start = function () {
	//set current event
	var start_event = this.events.start();
	this.current_event = start_event;

	this.current_page = this.pages[0];
	//load it up onto screen
	this.load_event();
}

Game.prototype.load_event = function () {
	this.load_text();
	this.load_buttons();
}

Game.prototype.load_text = function () {
	var event = this.current_event;
	var page = this.current_page;

	$("#gametext").empty(); //clear out current game text
	
	//get new game text
	//var new_text = "<p>" + event.description + "</p>";
	var new_text = "<p>" + page.text + "</p>";

	//write out game text
	$("#gametext").append(new_text);
}

Game.prototype.load_buttons = function () {
	var event = this.current_event;
	var page = this.current_page;
	var game = this; //so we can access game in closure

	$("#actions").empty(); //clear out current buttons

	//create button
	//var length = event.exits.length;
	var length = page.choices.length;
	//if there are exits, list them
	if (length > 0) {
		for (var i = 0; i < length; i++) {
			var choice = page.choices[i];
			var exit = event.exits[i];
			//var button = "<li><button type='button'>" + exit.name + "</button></li>";
			var button = "<li><button type='button'>" + pages[choice].title + "</button></li>";
			$("#actions").append(button);
		}

		//set event handlers for button
		$("button").click(function () {
			var index = $(this).parent().index();
			console.log("Button index: " + index);

			//load new event
			game.current_event = event.exits[index];
			game.current_page = game.pages[(game.current_page.choices[index])];
			game.load_event();
		});
	}
	else {
		//otherwise, put in a start over button
		var button = "<li><button type='button'>Start Over?</button></li>";
		$("#actions").append(button);

		$("button").click(function () {
			game.start();
		});
	}



}

$(document).ready(function() {
	// Handler for .ready() called.
	var game = new Game();
	game.start();

});