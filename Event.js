//Event object
//name is choice name
//description is what is happening
//exits are the choices you can make

function Event(name, description) {
	this.name = name;
	this.description = description;
	this.exits = []; //initialize empty array
}

//takes an array of event objects
///sets them up internally
Event.prototype.set_exits = function (exits) {
	this.exits = exits;
}

function Events() {
	this.events = []; //create an array

	//0 Welcome message when the user runs the game.
    this.events[0] = new Event("Rat Versus the Big Apple","An Adventure in Java\nFeaturing the creative \"talents\" of: \nErin Donohue, Keelee James, and Rae Berg\n\nAre you ready to explore the city? Well, too bad, cause you're going to. \nType 0 to begin exploring the sewer.\n");

    //1 Wake up in the sewer.
    this.events[1] = new Event("Sewer Entrance", "You wake up in a dark and smelly place that feels quite homey. \nLiquid sludge surrounds you, but you're unbothered by it.\n\nAhead is the darkness and dull echo of the sewer. \nAbove your head is a sewer grate, through which shine a few brave beams of light. \nMaybe someday you'll go up and see the surface, but today is not that day. \nBetter just go forward into the darkness of the sewer for now. It's safer.\n");

      //The Sewer
      //2 Choose 1 of 3 tunnels: The Narrow Tunnel (Tunnel One, 2>3, 0), Tunnel With A Weird Smell (Tunnel Three, 2>16, 1), Wide Tunnel (Tunnel Two, 2>29, 2)
      //events.add(new Event("Forward to the dark sewer.", "\nYou blink your eyes, clean your whiskers quickly, and stroll into the depths of the sewer. \nIt is dark and oppressively warm, and the scent of slow decay wafts around you. It is a lovely day.\nYour feet pitter-patter softly on the sewer floor as you stroll along, hopping over small piles of sludge and debris. \nAfter several yards of strolling, you come to a series of three tunnels. \n\nOne of the tunnels, to your left, is quite narrow and very dark. It is partially obstructed by litter and waste.\nAnother tunnel, in the center, is much wider. You hear a heavy, echoing rumble somewhere deep inside it.\nThe last tunnel, to your right, is slightly smaller. No sound escapes from it, but at its entrance is a large pool of sludge. \nA strong rotting smell comes from this tunnel.\n\nWhich way do you want to go, kiddo?\n", 3));

      /*
    this.get_event_by_id = function (id) {
    	return this.events[id];
    };

    this.set_connections = 
    */
    this.set_connection(0, [1]);
    this.set_connection(1, [0]);
}

//this is to hide that the id is implemented as an array
Events.prototype.get_event_with_id = function (id) {
	return this.events[id];
}

Events.prototype.start = function () {
	return this.events[0];
}

//this adds connections to each event object, so the object doesn't store IDs
Events.prototype.set_connection = function (event_id, exit_ids) {

	var exits_as_objects = []; //initialize array

	//loops through exit ids, grabbing appropriate object
	var length = exit_ids.length;
	for (var i = 0; i < length; i++) {
		console.log(exit_ids[i]);
		exits_as_objects.push(this.get_event_with_id(exit_ids[i]));
	}

	//set objects
	this.events[event_id].set_exits(exits_as_objects);

	/*
	
	//create an array of 
	for (var exit_id in exit_ids) {
		console.log(exit_id);
		exits_as_objects.push(this.get_event_with_id(exit_id));
	}
	
	this.events[event_id].set_exits(exits_as_objects);
	*/
	
}