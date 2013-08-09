function Game() {
	this.pages = pages; //see pages.js
	this.current_page = this.pages[0];
}

Game.prototype.start = function () {
	//set current page to first page
	this.current_page = this.pages[0];
	//load it up onto screen
	this.load_page();
};

//loads the current page
Game.prototype.load_page = function () {
	this.load_text();
	this.load_buttons();
};

Game.prototype.load_text = function () {
	var page = this.current_page;

	$("#gametext").empty(); //clear out current game text
	
	//get new game text
	var new_text = "<p>" + page.text + "</p>";

	//write out game text
	$("#gametext").append(new_text);
};

Game.prototype.load_buttons = function () {
	var page = this.current_page;
	var game = this; //so we can access game in closure
	var button = ""; //for buttons in if statement

	$("#actions").empty(); //clear out current buttons

	//create buttons
	
	//if there are choices, list them
	if (page.choices.length > 0) {
		for (var i = 0; i < length; i++) {
			var choice = page.choices[i];
			button = "<li><button type='button'>" + game.pages[choice].title + "</button></li>";
			$("#actions").append(button);
		}

		//set event handlers for button
		$("button").click(function () {
			var index = $(this).parent().index();

			//load new page
			game.current_page = game.pages[(game.current_page.choices[index])];
			game.load_page();
		});
	}
	else {
		//otherwise, put in a start over button
		button = "<li><button type='button'>Start Over?</button></li>";
		$("#actions").append(button);

		$("button").click(function () {
			game.start();
		});
	}
};

$(document).ready(function() {
	//add ontouchstart event listener, so that active pseudoclass shows up on touch devices
	$("body").on('touchstart', function () {
		//nothing inside, the event listener is enough
	});

	//start game
	var game = new Game();
	game.start();
});