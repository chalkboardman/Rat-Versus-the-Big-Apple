//Event object
//name is choice name
//description is what is happening
//exits are the choices you can make

function Event(name, description, numeric_exits) {
	this.name = name;
	this.description = description;
	this.numeric_exits = numeric_exits; //this is used to initialize actual objects.
										//it's just easier documentation-wise to put all the connections together
	this.exits = []; //initialize empty array, this is actual objects when others use this
}

//takes an array of event objects
///sets them up internally
Event.prototype.set_exits = function (exits) {
	this.exits = exits;
}

function Events() {
	this.events = []; //create an array

	//0 Welcome message when the user runs the game.
    this.events[0] = new Event("Rat Versus the Big Apple","An Adventure in Java" + 
		"<br>Featuring the creative \"talents\" of: " + 
		"<br>Erin Donohue, Keelee James, and Rae Berg" + 
		"<br>" + 
		"<br>Ported to JavaScript by Shawn McDonald" + 
		"<br>" + 
		"<br>Are you ready to explore the city? Well, too bad, cause you're going to. ", 
		[1]);

    //1 Wake up in the sewer.
    this.events[1] = new Event("Sewer Entrance", "You wake up in a dark and smelly place that feels quite homey. " + 
		"<br>Liquid sludge surrounds you, but you're unbothered by it." + 
		"<br>" + 
		"<br>Ahead is the darkness and dull echo of the sewer. " + 
		"<br>Above your head is a sewer grate, through which shine a few brave beams of light. " + 
		"<br>Maybe someday you'll go up and see the surface, but today is not that day. " + 
		"<br>Better just go forward into the darkness of the sewer for now. It's safer.", 
		[2]);

          //The Sewer
      //2 Choose 1 of 3 tunnels: The Narrow Tunnel (Tunnel One, 2>3, 0), Tunnel With A Weird Smell (Tunnel Three, 2>16, 1), Wide Tunnel (Tunnel Two, 2>29, 2)
      this.events.push(new Event("Forward to the dark sewer.", 
		"You blink your eyes, clean your whiskers quickly, and stroll into the depths of the sewer. " + 
		"<br>It is dark and oppressively warm, and the scent of slow decay wafts around you. It is a lovely day." + 
		"<br>Your feet pitter-patter softly on the sewer floor as you stroll along, hopping over small piles of sludge and debris. " + 
		"<br>After several yards of strolling, you come to a series of three tunnels. " +
		"<br>" + 
		"<br>One of the tunnels, to your left, is quite narrow and very dark. It is partially obstructed by litter and waste." + 
		"<br>Another tunnel, in the center, is much wider. You hear a heavy, echoing rumble somewhere deep inside it." + 
		"<br>The last tunnel, to your right, is slightly smaller. No sound escapes from it, but at its entrance is a large pool of sludge. " + 
		"<br>A strong rotting smell comes from this tunnel." + 
		"<br>" + 
		"<br>Which way do you want to go, kiddo?", 
		[3, 16, 29]));

      
      //Tunnel One: Narrow Tunnel (Rat Gang)
      
      //3 Choose the narrow tunnel at the beginning of the game. Right or Left Turn?
      this.events.push(new Event("Let's try the narrow tunnel.", 
		"You elect to go down the narrow tunnel to your left. You hop inside, deftly dodging the litter and other rubbish blocking the entrance. " + 
		"<br>You can tell from just a quick sniff that there is no food of interest in that pile." + 
		"<br>You stroll down the tunnel quite a ways, thinking about what a lovely day you're going to have: a few delicious snacks, " + 
		"<br>maybe some wires to choose from, and definitely a trip to the cesspool later to cool down. It's far too steamy today." + 
		"<br>Eventually, you come to yet another fork in the road: two tunnel branches sit silent and dark before you. " + 
		"<br>Neither of them has a particularly distinctive scent." + 
		"<br>You think you hear a sound coming from the tunnel on the left but that could be a good thing or a bad thing." + 
		"<br>A lone roach crawls out of the tunnel on the right. You avoid eye contact with it. " + 
		"<br>Roaches can be so socially awkward." + 
		"<br>" + 
		"<br>Which way now? Right or left?", 
		[4, 6]));
      
      //Tunnel One: Right Turn (Death)
      //4 Right turn in Narrow Tunnel. (3>4, 0)
      this.events.push(new Event("Right.",  
		"You decide to check out the tunnel on the right. Maybe that roach was onto something good. " + 
		"<br>The tunnel narrows significantly after you enter it, but you're not afraid. " + 
		"<br>Taking care that your whiskers don't brush too close to the tunnel walls, " + 
		"<br>you squeeze your way down the narrow passage way. Though you can see quite well in the dark, " + 
		"<br>the utter blackness of this tunnel is a bit disconcerting, and you're increasingly finding it harder and harder to see. " + 
		"<br>You smell a faint rotting smell, and take notice of several skeletons right beside you in the narrow tunnel. " + 
		"<br>You dare not look at them too closely. " + 
		"<br>All you know is they're not rats. Surely there must be some food down here, you tell yourself. " + 
		"<br>Why else would all these other creatures have traveled this way? " + 
		"<br>" + 
		"<br>But the tunnel goes on and on endlessly, and at this point you've been walking in the same narrow passage for hours. " + 
		"<br>You don't want to give up on your food hunt,but this is getting ridiculous. " + 
		"<br>You'll never make it to the cesspool in time if you don't turn around and head back now.", 
		[5]));
      //5 Get trapped in right tunnel and die. [LOSE]
      this.events.push(new Event("Turn back.","You turn around to head back to the tunnel entrance. " + 
		"<br>Unfortunately, you take only a few steps forward before you realize that the tunnel is now too narrow for you to fit through. " + 
		"<br>You suck in your stomach and claw at the metal walls, but nothing works. Somehow either you got fatter or it got skinnier. " + 
		"<br>Either way, try as you might, you cannot squeeze your way back the way you came. Nor can you go forward. " + 
		"<br>You're stuck, the cruel cylinder of the tunnel closing in around your body." + 
		"<br>You squeak for help but no one answers. No one would, not this far down in the sewer depths. " + 
		"<br>Like those other unfortunate animals before you, you get stuck in the tiny tunnel and die. " + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      
      //Tunnel One: Left Turn (Rat Gang)
      //6 Left turn in Narrow Tunnel. Meet the Rat Gang. (3>6, 1)
      this.events.push(new Event("Left.", "Like a good politician, you head to the left. " + 
		"<br>You haven't walked more than a few yards into the tunnel when the voices you heard at the entrance get significantly louder. " + 
		"<br>Lots of shouting and laughter. From the scent, you can tell there are at least some fellow rats there." + 
		"<br>Sure enough, you turn a corner in the tunnel and come face to face with a group of six rats. " + 
		"<br>These aren't just any rats—you can tell immediately from their markings, tattered ears, and snide expressions." + 
		"<br>" + 
		"<br>This is a rat gang." + 
		"<br>" + 
		"<br>Gang violence has always been something of an issue in the rat community, as rat gangs are notoriously impulsive and emotion-driven. " + 
		"<br>You are immediately on your toes. You consider running away, but the rat gang has already spotted you." + 
		"<br>\"Hey, look at this,\" one of the smaller rats yells. \"We got a visitor!\"" + 
		"<br>The other rats stop their laughing and joking and all turn to study you. " + 
		"<br>The largest rat, clearly the leader, gets up and saunters toward you, a smirk upon his face." + 
		"<br>\"What're you doin' here?\" he asks with a menacing grin. \"Come to crash our party?\" His ears are in tatters, you notice, he is missing a tooth, " + 
		"<br>and he has only one eye. You dare not break eye contact with his remaining eye." + 
		"<br>" + 
		"<br>\"S—sorry,\" you stutter, backing away slowly. \"I was just exploring.\"" + 
		"<br>\"Explorin'?\" The leader of the rat gang laughs a hearty, smokey laugh. " + 
		"<br>He turns to the rest of the rats. You hear that, fellas? Explorin'. Look at that.\"" + 
		"<br>Got Christopher Columbus over here, ain't we? snickered one of the other rats as the gang exploded in laughter." + 
		"<br>Whatcha explorin' for? the gang leader asks you, putting his face close to yours. " + 
		"<br>His breath is sharp and sour. \"Explorin' for trouble?\"" + 
		"<br>\"Not really,\" you whisper, wishing that you had never set foot in this tunnel. " + 
		"<br>Surely this rat gang will be the end of you." + 
		"<br>The leader laughs again, whipping his bent tail jovially. \"Relax, buddy,\" he says with a crooked smile. " + 
		"<br>\"Just messin' with ya.\"" + 
		"<br>" + 
		"<br>You try to look relieved, but your heart is still in your throat." + 
		"<br>\"Siddown,\" says the rat leader. \"Relax. Let's have a little chat, and you can tell us all about your little adventures.\" " + 
		"<br>He trots over to the other rats, who are seated atop a garbage heap." + 
		"<br>\"Come on and join the party,\" call the rats. You're not entirely sure you want to keep talking to them, but something in their tone suggests you can't really say no.", 
		[7, 15]));
      //7 Keep talking to the rats.
      this.events.push(new Event("Keep talking to the rats.", "You join the rats on top of the trash heap and try to think of impressive things to say." + 
		"<br>\"Wait, wait,\" says one of the rats. \"We can't just let this guy hang with us!\" " + 
		"<br>The other rats stop laughing and joking, waiting for a response from the leader." + 
		"<br>\"What do you mean?\" the leader asks." + 
		"<br>\"He hasn't given us the secret signal!\" exclaims the other gang member. " + 
		"<br>\"We can't just be associatin' with people who don't know the secret gang signal!\"" + 
		"<br>\"Good point,\" muses the leader. \"Give us the secret signal and you're cool with us. " + 
		"<br>And no messin' around neither! If you don't give us the right signal, we have no choice but to take you down.\"" + 
		"<br>" + 
		"<br>Your heart races in your chest. A secret signal? " + 
		"<br>What secret signal? You rack your brain, but you can't recall learning any secret signals ever! You knew it was a mistake to get involved with a gang in the first place!" + 
		"<br>A flurry of potential secret signals rushes to your brain. Should you just do a random handshake and hope it's the secret signal? " + 
		"<br>Or do you want to wait and see if the rats drop any clues?", 
		[8, 12]));
      //8 Do nothing for secret signal. (7>8, 0)
      this.events.push(new Event("No idea. Wait and see what they do.", "You have no idea what the signal could possibly be, so you stand around stupidly holding your breath." + 
		"<br>\"Well?\" says the leader, irritation creeping into his voice." + 
		"<br>\"Uh...\" You are totally drawing a blank. " + 
		"<br>Your heart feels like it's going to burst through your chest. " + 
		"<br>You stare blankly but then realize the severity of the situation and blink your eyes five times in quick succession." + 
		"<br>\"The secret signal!\" the rats exclaim, simultaneously bowing down before you in reverence. " + 
		"<br>\"The secret signal!\"" + 
		"<br>" + 
		"<br>What? You are totally confused, but the rats are now staring at you with rapt attention. Then it hits you. " + 
		"<br>The rapid blinking! That must be the secret signal! " + 
		"<br>That is possibly the dumbest secret signal ever devised. But hey, your passivity has paid off!" + 
		"<br>\"Looks like we were wrong about you not having any cred,\" smiles the leader. " + 
		"<br>\"Considering you knew the secret signal all along.\"" + 
		"<br>\"Uh, yeah,\" you stammer, trying to act affronted. \"Of course I did.\"" + 
		"<br>" + 
		"<br>\"Join us! Join us!\" the other rats call in a merry chorus." + 
		"<br>\"You really should come on board,\" says the leader. " + 
		"<br>\"Trust me, kid, this is where you wanna be. We're the toughest gang this side of Brooklyn.\"" + 
		"<br>You laugh and ponder the offer. You don't really like the idea of being involved in a gang. " + 
		"<br>It's a hard, dangerous life, and you could be killed at any moment. " + 
		"<br>At the same time, though, you don't want to offend the rats, and it does sound kind of exciting." + 
		"<br>" + 
		"<br>What do you want to do?", 
		[9, 10, 11]));
      //9 You agree to join the Rat Gang.[WIN]
      this.events.push(new Event("You agree to join the rat gang.", "You tell the rats that you are happy to join their gang. " + 
		"<br>They shriek in a mad joyous frenzy and you guys all get really full on a feast of rotten trash. " + 
		"<br>Over time, you work your way up in the ranks and become king of a mighty rat empire." + 
		"<br>" + 
		"<br>YOU WIN!", 
		[]));
      //10 You refuse to join the Rat Gang and they kill you. [LOSE]
      this.events.push(new Event("You refuse to join the rat gang.", "You decline the rats' offer to join the gang, explaining that it's really just not your thing. " + 
		"<br>Plus, you think it would conflict with your bridge club meetings each week." + 
		"<br>The rats glare at you, super offended. They swarm around you and kill you. " + 
		"<br>No one says no to a rat gang, you idiot." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //11 You ask for more time and they kill you. [LOSE]
      this.events.push(new Event("You ask for more time to consider your decision.", "The rats tell you that if you want to stall when making decisions, you should have gone into politics. " + 
		"<br>They kill you for being indecisive." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //12 Grab leader's paw for secret signal. (7>12, 1)
      this.events.push(new Event("You grab the leader's paw and shake it.", "You grab the leader's paw and shake vigorously in an elaborate fashion, attempting to end with an awkward fist bump." + 
		"<br>From the leader's angry glare, you can tell that that was not, in fact, the secret signal. " + 
		"<br>The leader yanks his paw away and wipes it on his fur." + 
		"<br>\"How dare you!\" he roars. \"Don't be grabbin' me, fool!\" " + 
		"<br>The other rats swarm around you in an angry, screaming hive." + 
		"<br>" + 
		"<br>\"Kill him!\" the leader roars, still cleaning his paw neurotically. \"Kill him!\"" + 
		"<br>You dart away from the rats as fast as you can, running with all your strength. " + 
		"<br>However, you have no idea where you are in the tunnels, and you're not sure which way to go. " + 
		"<br>The tunnel splits into a fork in front of you." + 
		"<br>Which way, kiddo? Left or right? Better decide fast, cause the rat gang is right on your tail.", 
		[13, 14]));
      //13 Try to escape Rat Gang by running left, they corner and kill you. [LOSE]
      this.events.push(new Event("You run left.","You run into a dead end and the rat gang kills you. Too bad." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //14 Try to escape Rat Gang by running right, escape. Run into Tunnel Three: Homeless Guy (16) (14>16, 0)
      this.events.push(new Event("You run right.", "You run as fast as you can to the right, " + 
		"<br>pushing your legs with all your strength, dodging massive piles of trash. " + 
		"<br>The irate voices of the rat gang fade in the distance. They cannot tell which way you've gone." + 
		"<br>You escape the rat gang and run at full speed through the sewer. " + 
		"<br>You run and run til long after you can't hear the gang anymore. You are now hopelessly lost, but you have no choice but to keep walking." + 
		"<br>The tunnel starts to smell weird.", 
		[16]));
      //15 Don't talk to the Rat Gang at all. (6>15, 1) Run into Tunnel Two: Subway (29) (15>29, 0)
      this.events.push(new Event("Run away as fast as you can.", "These rats are too dangerous, so you decide to make a run for it. " + 
		"<br>Without waiting to hear what they're planning for you, you take off running in the sewer. " + 
		"<br>You pay no attention to where you're going; it doesn't matter as long as you get away. " + 
		"<br>You run as fast as you can for what seems like miles, but the rats do not seem to be chasing you. " + 
		"<br>You pause for breath." + 
		"<br>You've escaped the rat gang. " + 
		"<br>You go deep into the sewer, wander round lots of twists and turns and whatnot and you get pretty tired and very hungry. " + 
		"<br>As you walk, the tunnel widens considerably and you feel a bit of a breeze.", 
		[29]));

      
      //Tunnel Three: Tunnel With A Weird Smell (Homeless Man)
      
      //16 Choose the tunnel with a weird smell at the beginning of the game. (2>16, 1)
      this.events.push(new Event("Tunnel with a weird smell. Promising.", "You go down the tunnel. " + 
		"<br>It has a very weird smell. You roam for a while and hop over several large piles of trash. " + 
		"<br>Nothing smells enticing." + 
		"<br>After some wandering, you hear a voice echoing through the dark tunnel...a human voice. " + 
		"<br>You're cautious, but also very curious. You turn the corner, careful to keep slightly hidden, and discover a homeless man sitting on the tunnel floor, " + 
		"<br>indifferent to the decay and sludge around him. The homeless man has long, scraggly white hair and is missing a few teeth. " + 
		"<br>He wears a tattered hat that is not particularly fashionable. " + 
		"<br>And you realize you've discovered the source of the weird smell permeating the tunnel." + 
		"<br>" + 
		"<br>It's just a harmless old homeless guy, so you scamper out of your hiding place and move a bit closer to him. " + 
		"<br>He rubs his eyes and stretches his legs on the ground." + 
		"<br>\"Hello there!\" he says merrily. You look around for signs of another human, but you're alone. " + 
		"<br>The homeless man, you realize, is talking to you like you're a person. " + 
		"<br>This is weird, considering you're not a person.", 
		[17, 18]));
      //17 Tell the Homeless Man you're a rat.
      this.events.push(new Event("Tell him you're a rat.", "You start to remind the homeless man that you're a rat, not a person, but rats don't speak English, so you stay silent.", 
		[18]));
      //18 Don't tell the Homeless Man you're a rat.
      this.events.push(new Event("Don't say anything and leave him his simple pleasures.", "\"How's it going?\" the homeless man asks you. " + 
		"<br>You don't answer. This doesn't stop him from talking, however.  " + 
		"<br>\"My, what a day I've had,\" he muses. \"What a life I've had!\" You roll your eyes, recognizing that a dull story is coming." + 
		"<br>\"I don't often see anyone down around these parts,\" he beams, " + 
		"<br>his smile missing several teeth. \"Let me tell you about the war! " + 
		"<br>The war that brought me down here under the ground upon which the city was built. " + 
		"<br>It all started, like so many things, when I was at a Steely Dan concert in the summer of 1977...\" " + 
		"<br>You groan. Stuff is about to get staggeringly boring." + 
		"<br>" + 
		"<br>In his creaky voice, the homeless dude tells you his elaborate life story. " + 
		"<br>It's kinda weird and depressing and a little surreal. " + 
		"<br>Somehow lots of ducks are involved. The pacing needs work, you think." + 
		"<br>While the homeless dude is rambling about his relationship to the Prime Minister of Russia, " + 
		"<br>you notice that he has a piece of a biscuit in his ragged pants pocket. " + 
		"<br>The man is swept up in the waves of his own ramblings. That biscuit smells delicious. " + 
		"<br>And you are really hungry.", 
		[19, 24]));

      //Tunnel Three: Steal food from the Homeless Man?
      //19 Steal the food.
      this.events.push(new Event("Steal the food.", "You dart toward the homeless guy and grab the biscuit from his pocket. " + 
		"<br>Though the guy is wrapped up in how he helped repaint the Sistine Chapel, he definitely notices when you grab the biscuit." + 
		"<br>\"My biscuit! My biscuit!\" he cries, standing up and banging around the sewer in a rabid frenzy. " + 
		"<br>He swings at you and tries to grab your tail, but you're too quick for him. " + 
		"<br>As he darts around after you, you notice that the man has even more food" + 
		"<br>--an entire corn muffin--" + 
		"<br>stashed in his bag in the corner. Want to stay and get the corn muffin or run away while the getting is good?", 
		[20, 21]));
      //20 Stay around for more food and the Homeless Man kills you. [LOSE]
      this.events.push(new Event("Stick around for more food.", "The homeless man grumbles that it was a really dick move of you to steal food from him, " + 
		"<br>since he's homeless and all. He smashes you with his foot and kills you." + 
		"<br>" + 
		"<br> You lose.", 
		[]));
      //21 Run away after stealing the food.
      this.events.push(new Event("Run away.", "You dart away from the homeless man as fast as you can down the tunnel. " + 
		"<br>You hear him calling you, in his creepy homeless-dude-dwelling-in-a-sewer voice, for you to come back. " + 
		"<br>\"Don't go, don't leave me, little rat. You're my only friend.\" " + 
		"<br>Kinda pathetic, but also oddly touching.", 
		[22, 23]));
      //22 Go back to the pleading Homeless Man and he kills you. [LOSE]
      this.events.push(new Event("Go back to the homeless man.", "You return to the homeless man and squeak timidly to him, apologizing for stealing his food. " + 
		"<br>The homeless man shows no mercy and smashes you with his foot. " + 
		"<br>You die." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //23 Don't go back to the Homeless Man, keep running and end up in Tunnel Two: Subway (29) (23>29, 0)
      this.events.push(new Event("Who cares? Keep running.", "Indifferent to human suffering, you race across the sewer's slimy floor, dodging massive puddles of sludge. " + 
		"<br>You realize that the tunnel is starting to widen, the amount of human and animal waste is decreasing, " + 
		"<br>and you feel a breeze on your face. You're totally lost at this point, but something exciting seems up ahead.", 
		[29]));

      //Tunnel Three: Credit Card Fraud
      //24 Don't steal food from the Homeless Man.
      this.events.push(new Event ("Let him have it. He's a homeless dude.", "Even though you're hungry, you decide not to steal the food, you bleeding heart liberal, you. " + 
		"<br>Miraculously, the old man finishes his serpentine tale and grins at you. " + 
		"<br>You stare at the biscuit." + 
		"<br>\"You must be hungry,\" the homeless man says, tossing you the biscuit. \"Take it, new best friend!\" " + 
		"<br>You're weirded out by this, but you devour the morsel gratefully." + 
		"<br>You and the homeless dude are really hitting it off. He tells you some more insane stuff, " + 
		"<br>like homeless people sometimes do. You don't even attempt to make sense of the rambles. " + 
		"<br>You're not even sure that all of them are English." + 
		"<br>Eventually, the homeless man decides he can trust you, and he gets a gleam in his eye." + 
		"<br>\"Wanna hear about an exciting plan, little mousey?\"" + 
		"<br>You loathe being called \"Little mousey,\" but you do want to hear the exciting plan. " + 
		"<br>You stay still and listen attentively." + 
		"<br>The homeless man tells you about his scheme to commit some elaborate credit card fraud. " + 
		"<br>\"I've done this sort of thing a million times before,\" he says with a defiant cackle. " + 
		"<br>\"Only way to make a living. And easy as pie as society becomes increasingly cashless!\"" + 
		"<br>\"I'd be happy to have you as a partner in this,\" the man tells you, \"since you're my new friend and all. " + 
		"<br>And of course I'd split the profits with you 50/50, like friends do. " + 
		"<br>It's easy money. What do ya say?\"" + 
		"<br> You're not sure why the homeless man trusts you so much, considering you just met like 15 minutes ago in the bloody sewer. " + 
		"<br>But it could also be some quick, easy cash, and it sounds pretty sweet." + 
		"<br>Want in? " + 
		"<br>(You communicate via a series of squeaks or something, I dunno.)", 
		[25, 27, 28]));
      //25 Agree to commit credit card fraud.
      this.events.push(new Event("Hell yeah. Tell the homeless man you're happy to break the law with him.", "The homeless dude is super psyched. " + 
		"<br>He pumps his fists, grabs you, and puts you on his shoulder." + 
		"<br>\"Let's go to the surface!\" he cries. \"Financial privacy and security are things of the past as long as we're in business!\"" + 
		"<br>With you on his shoulder, the homeless man navigates the tunnels, " + 
		"<br>his long legs running fast, til he comes to a sewer grate. It's been a while since you've been up on the surface, " + 
		"<br>and you're pretty excited. You and the homeless man climb up the sewer wall and push open the sewer grate, " + 
		"<br>crawling out into the sunlight.", 
		[26]));
      //26 Head to the surface with the Homeless Man, you both get arrested. [LOSE]
      this.events.push(new Event("The surface! The surface!", "You feel the warm, blessed light of the sun on your fur. " + 
		"<br>It is glorious! You are ready to take on the world!" + 
		"<br>But..." + 
		"<br>" + 
		"<br>The cops immediately pick you guys up. " + 
		"<br>\"Hey, aren't you that homeless man who does credit card fraud?\" they ask. " + 
		"<br>\"Yeah, that's me,\" sighs the homeless man. " + 
		"<br>\"Is this rat helping you?\" the cops ask. " + 
		"<br>\"Yup, the rat was in on it.\" " + 
		"<br>You go to rat prison forever. " + 
		"<br>How can there be an entire legal system for rat crimes? " + 
		"<br>There just is, loser. Go with it. You're just mad cause you lost." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //27 Delicately decline to commit credit card fraud. End up in Tunnel Two: Subway (29) (27>23, 0)
      this.events.push(new Event("Delicately tell the homeless man you're not really comfortable with the situation, but you wish him luck.", "He grumbles to himself about Jennifer Aniston and falls into a drunken slumber. " + 
		"<br>You dart away down the sewer, feeling awkward. Maybe you should go back and apologize to the homeless man. " + 
		"<br>He seems like he's in a bad place.", 
		[23]));
      //28 Angrily decline to commit credit card fraud and the Homeless Man kills you. [LOSE]
      this.events.push(new Event("Angrily tell the homeless man that credit card fraud is illegal, immoral, and something you want no part of.", "The homeless man, who is already kinda unstable if you haven't noticed, gets upset and kills you." + 
		"<br>" + 
		"<br>You lose.", 
		[]));

      
      //Tunnel Two: Subway (Wide Tunnel)
      
      //Tunnel Two: On the train.
      //29 Choose the wide tunnel at the beginning of the game. (2>29, 2)
      this.events.push(new Event("Onward into the wide tunnel.", "This tunnel is pretty loud. It leads into a subway tunnel. " + 
		"<br>You wander around on the tracks near a platform when you hear a train coming." + 
		"<br>Oh snap.", 
		[30, 31, 32]));
      //30 Face down the train and get crushed. [LOSE]
      this.events.push(new Event("Stand your ground. You're not afraid!", "The train crushes you and you die. " + 
		"<br>What did you think was going to happen?" + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //31 Jump out of the train's way, still get lost and die. [LOSE]
      this.events.push(new Event("Jump out of the train's way.", "You survive and keep wandering down the tunnel via many twists and turns. " + 
		"<br>Unfortunately, you have no idea where you're going, and you find yourself hopelessly lost. " + 
		"<br>You're a rat, it's a sewer...but things have really spiraled out of your control here, " + 
		"<br>and the whole almost being killed by a massive oncoming train thing has you a little shook up. " + 
		"<br>You wander, and as you get tired, choose sludge-covered tunnel paths at random." + 
		"<br>" + 
		"<br>You get lost and die. And you were so careful to get out of that train's way! Drat.", 
		[]));
      //32 Hop onto the oncoming train.
      this.events.push(new Event("Hop onto the oncoming train.", "Thinking fast, you time your jump perfectly and hop onto side of the train. " + 
		"<br>You shut your eyes tightly, expecting to be crushed, but to your surprise, you manage to hold on as the train rushes foward." + 
		"<br>The train slowly comes to a stop in the station and amid the mass of humans boarding the train, " + 
		"<br>you manage to sneak into the subway car when the doors open. " + 
		"<br>You dodge dozens of pairs of large, awkward human feet, but miraculously, no one crushes you. " + 
		"<br>No one even notices you've hopped into the train car." + 
		"<br>You immediately dart under one of the seats and hide in a corner. " + 
		"<br>" + 
		"<br>Unfortunately, the train is very crowded, and even though you're concealed, " + 
		"<br>you worry that there are enough passengers that one of them will notice you shortly and cause a panic. " + 
		"<br>The train lurches forward out of the station and roars as it continues down the tunnel. " + 
		"<br>Everyone is staring at their iPhones, and the whole scene is pretty boring." + 
		"<br>" + 
		"<br>But wait. What's that?" + 
		"<br>You spot an open bag of chips on the floor on the other side of the car! " + 
		"<br>You love a good potato chip as much as the next rat, and you're really hungry..." + 
		"<br>but you also don't want to get caught and cause a scene in the train car.", 
		[33, 34]));
      //33 Go after the chips. (33>35, 0) (33>47, 1)
      this.events.push(new Event("Go after the chips.", "You scurry across the car to the precious bag of chips. " + 
		"<br>None of the passengers even notices your daring run because they are all too busy staring at their iPhones like zombies. " + 
		"<br>You rip into the bag of chips and savor their delicious, salty crunch. " + 
		"<br>Sustenance obtained!" + 
		"<br>" + 
		"<br>You sit around in the train car for a while, thinking both about the Kardashian pregnancy and your place in the universe. " + 
		"<br>In a muffled, scratchy voice, the driver announces the 23rd street Broadway stop. " + 
		"<br>Want to get off here?", 
		[35, 47]));
      //34 Stay hidden and don't go after the chips. (34>35, 0) (34>47, 1)
      this.events.push(new Event("Stay hidden under the seat.", "You eye the chips hungrily but decide not to risk it. " + 
		"<br>You stay huddled in your hiding place. Better safe than sorry." + 
		"<br>You sit around in the train car for a while, thinking both about the Kardashian pregnancy and your place in the universe. " + 
		"<br>In a muffled, scratchy voice, the driver announces the 23rd street Broadway stop. " + 
		"<br>Want to get off here?", 
		[35, 47]));

      //Tunnel Two: Broadway (The Lion King)
      //35 Get off at Broadway. (33>35, 0) (34>35, 0)
      this.events.push(new Event("Get off at Broadway.", "As soon as the doors open, you pop out of the train and onto the Broadway platform. " + 
		"<br>It is quite bustling, and you have to take great care to ensure your tail isn't stepped on. " + 
		"<br>You pause to urinate on a Macy's advertisement—just because—and then scurry up the subway stairs to street level. " + 
		"<br>A few people shriek or gasp at the sight of you, but really, " + 
		"<br>that's their problem not yours." + 
		"<br>" + 
		"<br>You have reached the heart of the Broadway theater district, " + 
		"<br>which is alive with people, cars, lights, and noise. " + 
		"<br>Tickets litter the ground, suggesting that a show just let out a short while ago. " + 
		"<br>You take a good look around you, as you've never before been to this part of town. " + 
		"<br>There is so much activity, so many things to do and smell and eat, that you're not really sure what to do first." + 
		"<br>" + 
		"<br>You figure that since you're in the greatest theater district in the world, " + 
		"<br>you might as well go check out a show. This way when you return to the sewer, " + 
		"<br>you will definitely be able to impress the others. Now the question is, which show do you see? " + 
		"<br>There are endless options in this part of town." + 
		"<br>In front of you, you notice a gargantuan light-up sign for the Lion King musical. " + 
		"<br>You've heard a lot about this musical, and you did dig the movie. " + 
		"<br>That could be fun. On the other side of the street is a small, almost forgotten theater. " + 
		"<br>The outside is dark, but judging from the people streaming into it, the theater is open for business and showing something quite popular. " + 
		"<br>You glance at the marquee outside the humble theater. " + 
		"<br>It reads: \"The Clam, It Broods.\"" + 
		"<br>Hmm, which show do you want to see? " + 
		"<br>Free admission for rats either way.", 
		[36, 77]));
      //36 The Lion King (35>36, 0) (66>36, 0)
      this.events.push(new Event("The Lion King", "You are super psyched for the blockbuster epic that is The Lion King! " + 
		"<br>Rafiki was always your favorite, and now you'll get to relive all that awesome Disney magic! " + 
		"<br>You hurry into the theater unnoticed and scurry into the show. " + 
		"<br>Nearly every seat is full, and the excitement hangs heavy in the air. " + 
		"<br>Now, where to sit?" + 
		"<br>" + 
		"<br>The delighted cries of joyous children come from the front of the room. " + 
		"<br>Perhaps you could go to the front with the kids. " + 
		"<br>For one thing, children are much more likely to drop their food, which is excellent news for you. " + 
		"<br>For another, they have boundless enthusiasm. There is, however, the chance they'll yammer through the entire performance." + 
		"<br>The back of the theater is not nearly so crowded, " + 
		"<br>but you can tell already there are some teenagers who are planning to make out there. " + 
		"<br>Maybe you could find a nice empty hiding spot in the back.", 
		[37, 38]));
      //37 Choose to sit in the front and get crushed. [LOSE]
      this.events.push(new Event("Sit in the front.", "You race to the front of the theater, excited for the curtain to rise. " + 
		"<br>Unfortunately just as the show is about to start, one late-coming family rushes in, " + 
		"<br>three toddlers in tow—and the harried family is headed right for you. " + 
		"<br>You try to get out of the way, but you get squashed and killed by the toddlers, " + 
		"<br>who mistakenly assume you're a stuffed toy and rip your limbs off. " + 
		"<br>Eww." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //38 Choose to sit in the back.
      this.events.push(new Event("Sit in the back.", "You find a cozy hiding spot in the back of the theater, where you munch on a long-forgotten bag of candy. " + 
		"<br>The Lion King starts, yadda, yadda, yadda. " + 
		"<br>The animals fascinate you. They are similar to zoo animals, but unlike the zoo animals you've talked to, " + 
		"<br>they do not seem clinically depressed. As the show goes on, you start to get hungry again, " + 
		"<br>and your candy supply is exhausted. You look around for food. " + 
		"<br>Even though food is not allowed in the theater, you find a couple of patrons are indifferent to the rules. " + 
		"<br>You spot one man with a delicious bag of popcorn. " + 
		"<br>There's also a woman with long braided hair surreptitiously eating a Clif Bar. " + 
		"<br>Want to steal a snack?", 
		[39, 40, 41]));
      //39 Steal the popcorn.
      this.events.push(new Event("Steal the popcorn.", "Stealthily, you approach the bespectacled man with the popcorn. " + 
		"<br>He has a nervous leg twitch, which makes it hard to approach him without getting trampled upon. " + 
		"<br>You manage to clamber into the seat next to his, and you reach your hand over for a few bits of popcorn. " + 
		"<br>Just as you lean forward to grab the food, however, " + 
		"<br>the man grabs the popcorn bag and pulls it into his lap. " + 
		"<br>" + 
		"<br>Startled, you tumble to the floor, where you brush up against the man's rapidly twitching leg. " + 
		"<br>He feels you touch his leg and stands up with a start." + 
		"<br>\"My God, a rat!\" he screams, as they always do. " + 
		"<br>He panics and bolts from his seat, fleeing the theater. This sends the entire theatergoing audience into a mad frenzy. " + 
		"<br>As all the theater patrons undertake a frantic mass exodus, you are trampled to death in your attempt to escape the theater." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //40 Sneak the Clif bar.
      this.events.push(new Event("Sneak the Clif bar.", "You sneak slowly up to the woman with the braided hair, eyes locked on the holy grail of the Clif Bar in the darkness. " + 
		"<br>The woman is totally absorbed in a rendition of \"The Circle of Life\" and fails to notice you sitting right next to her, " + 
		"<br>gunning for the Clif Bar in her lap." + 
		"<br>You reach into the woman's lap and grab the Clif Bar. " + 
		"<br>It's a bit large for you, but you manage to pull it off her lap. " + 
		"<br>You're just about to sneak away with it when she snatches it back." + 
		"<br>Now she will kill you, you're sure. " + 
		"<br>" + 
		"<br>Or she will scream how she has seen a rat, will cause massive panic in the theater, " + 
		"<br>and bring about your untimely demise. You brace yourself for the shrill scream of rat-induced terror." + 
		"<br>But instead, the woman puts the Clif Bar back in her lap and whispers, \"Bad rat! Don't steal my food!\"" + 
		"<br>You're so surprised that she didn't scream that you squeak apologetically. " + 
		"<br>She smiles, breaks off a piece of the Clif Bar, and hands it to you." + 
		"<br>\"Circle of life, my friend,\" she grins, returning her attention to the show. " + 
		"<br>You gobble up the Clif Bar and try to watch the show as well, but you realize you can't really see so well back here.", 
		[42]));
      //41 Don't steal any food.
      this.events.push(new Event("Don't steal any food.", "Eh, you're not that hungry. You can do without a snack for now. " + 
		"<br>You focus on the show, but you find it's kinda hard to see all the way in the back of the theater.", 
		[42]));
      //42 Head to the front of the theatre from the back.
      this.events.push(new Event("The view is better in the front.", "You scurry hastily to the front row of seats, careful not to disturb anyone or brush up against any legs. " + 
		"<br>Luckily, the music from the show is so loud that you don't have to worry about keeping quiet, " + 
		"<br>but you do need to avoid being seen." + 
		"<br>The view from the front row is much better than the back. " + 
		"<br>It's like the whole musical has come to life! " + 
		"<br>Everything is loud, vibrant and close. In fact, you realize, the view could be even better than the front row. " + 
		"<br>The view would certainly be better from the stage itself! " + 
		"<br>It does look pretty busy up there, though. Maybe that's not such a good idea.", 
		[43, 44]));
      //43 Stay seated in front and die. [LOSE]
      this.events.push(new Event("Better stay seated.", "You snuggle into your spot in the front row. " + 
		"<br>Unfortunately, a rather large gentleman also snuggled into your spot in the front row, " + 
		"<br>and he crushes you to death." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //44 Hop up on stage. (44>45, 0) (44>46, 1)
      this.events.push(new Event("Hop up on stage.", "Putting aside your stage fright, you climb onto the stage during an exuberant performance " + 
		"<br>of \"I Just Can't Wait to Be King.\" There's a commotion of dancing and singing, " + 
		"<br>and general theater shenanigans. True to your prediction, the view from up here is awesome! " + 
		"<br>You just have to be careful not to get trampled." + 
		"<br>Suddenly, as you look up at the performers, you realize the animals on stage are not real animals " + 
		"<br>but instead just people dressed up as animals. Whaaat? " + 
		"<br>This show sucks!" + 
		"<br>" + 
		"<br>One of the \"antelopes\" sees you on the floor of the stage and screams. " + 
		"<br>The whole production immediately grinds to a halt.", 
		[45, 46]));
      //45 Try to run off the stage get killed by actors. [LOSE]
      this.events.push(new Event("Run off the stage before everyone freaks out and kills you.", "You run off the stage but not fast enough. " + 
		"<br>Rafiki kills you." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //46 Seize the moment! [WIN!!]
      this.events.push(new Event("Seize your moment of stardom and burst into song.", "Without a moment's hesitation, you let your theatrical side take over. " + 
		"<br>Improv was never your strength, but out of nowhere, you concoct an elaborate song and dance routine. " + 
		"<br>There is no music in the theater, but it flows through your veins nonetheless. " + 
		"<br>After a couple of minutes, you finish your song, " + 
		"<br>do a triple backflip, and land on your knees, arms outstretched." + 
		"<br>" + 
		"<br>The audience is dead silent. The only sound is the furious beating of your little rat heart." + 
		"<br>Suddenly, the audience bursts into uproarious applause, assuming your routine is part of the show. " + 
		"<br>You receive a standing ovation." + 
		"<br>The Lion King actors also love it: now they can have a real animal in their production, " + 
		"<br>instead of just people in dopey animal costumes." + 
		"<br>You tour with the show for the rest of the season, become a theater sensation, and win a Tony award." + 
		"<br>" + 
		"<br>YOU WIN!", 
		[]));

      //Tunnel Two: On the train (continued).
      //47 Do NOT get off on Broadway, stay on the train. (33>47, 1) (34>47, 1)
      this.events.push(new Event("Stay on the train.", "You stay on the train. It's pretty boring. " + 
		"<br>Several train stops fly by, but they don't seem particularly interesting." + 
		"<br>A homeless man comes through the car, muttering to himself about credit card fraud. " + 
		"<br>You scratch behind your ears and wash your whiskers as the train roars along. " + 
		"<br>The conductor announces that the next stop is City Hall. " + 
		"<br>Want to get off?", 
		[48, 49]));
      //48 Get off at City Hall.
      this.events.push(new Event("Get off at City Hall.", "You pop off the subway at the City Hall stop. " + 
		"<br>The platform is incredibly crowded with well-dressed people who are very invested in their mobile phones. " + 
		"<br>You come very close to being stepped on several times, " + 
		"<br>as these suits are more interested in their impending business deals than in avoiding the sewer rat at their feet. " + 
		"<br>To stay on this platform would be a death trap. " + 
		"<br>Better see what's on the surface.", 
		[50]));
      //49 Do NOT get off at City Hall, stay on the train a third time, janitor kills you. [LOSE]
      this.events.push(new Event("Stay on the train.", "You stay on the train. All the people get off at City Hall, and the train rattles on, empty and echoing. " + 
		"<br>You yawn and fall into a woozy sleep." + 
		"<br>A few minutes after you pass out, a janitor cleaning the train comes by and kills you." + 
		"<br>Probably should have gotten off the train." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //50 Climb the subway stairs. Choose City Hall (50>51, 0) or the Street (50>76, 1)
      this.events.push(new Event("Climb the subway stairs.", "In front of you, you see a monumental (and to be honest, a bit ostentatious)" + 
		"<br>building with grandiose white pillars and a heavy police presence. " + 
		"<br>Based upon a set of encyclopedias you stole as a youth, you recognize this as New York's City Hall building at 260 Broadway. " + 
		"<br>You're in the Civic Center neighborhood. You had never bothered to check out this area of the city before, " + 
		"<br>cause politics = boring, but since you're here, maybe you should take a look. " + 
		"<br>On the other hand, maybe you could score some food from a street vendor.", 
		[51, 76]));

      //Tunnel Two: City Hall
      //51 You enter City Hall. Face three room options: Bathroom (51>52, 0), Room 9 (51>55, 1), or Governor's Room (51>60, 2)
      this.events.push(new Event("Check out City Hall.", "You stroll into City Hall. It is pristine and its shiny floors echo with every step you take. " + 
		"<br>To your left, you see a sign for the bathroom. " + 
		"<br>In front of you there's a sign for the Governor's Room. You're not sure quite what that is, but it sounds fancy. " + 
		"<br>To your right is a sign for something called Room 9. Hmm. Where to, kiddo?", 
		[52, 55, 60]));
      //52 Check out the Bathroom.
      this.events.push(new Event("Let's go to the bathroom.", "You're alone in the bathroom. You get a drink from one of the sink basins, but as you do so, a bumbling janitor comes in. " + 
		"<br>He starts mindlessly mopping the floor, whistling a Led Zeppelin song, and doesn't spot you at first." + 
		"<br>However, as soon as he reaches the sinks, he notices that the large sewer rat perched there is slightly out of place. " + 
		"<br>He says some naughty words that you wouldn't want your mother to hear." + 
		"<br>With a mighty battle cry, the janitor wields his mop like a battle ax and takes a tremendous swing at you. " + 
		"<br>You have only a fraction of a second to react. What do you want to do?", 
		[53, 54]));
      //53 Try to dart out of the way of the janitor's mop and fail. [LOSE]
      this.events.push(new Event("Dart out of the way!", "Keeping your eyes locked on the mop head, you try to spring out of the way as the dreaded filthy mop crashes down to the floor." + 
		"<br>Unfortunately, you're not quite limber enough, and you fail to get out of the way in time. " + 
		"<br>The mop slams down on you and you're tangled. " + 
		"<br>The janitor, barbaric monster that he is, proceeds to smash you to death with the mop. How grisly!" + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //54 Run up the janitor's mop and escape. End up in Room 9 (55) (54>55, 0)
      this.events.push(new Event("Run up the mop!", "You dart out of the bathroom as fast as you can, breathing hard. " + 
		"<br>Your heart races in your chest and without thinking, you turn into the first room you see. " + 
		"<br>The sign on the door reads Room 9.", 
		[55]));
      
      //Tunnel Two: Room 9
      //55 Enter Room 9.
      this.events.push(new Event("Room 9 sounds pretty cool.", "You enter Room 9 and discover it is the Press Room. " + 
		"<br>It is cramped and loud, full of overworked, screaming people who are propelled largely by their fear " + 
		"<br>of the impending obsolescence of their profession. Ah, journalists. " + 
		"<br>People are cranking out stories, typing notes, screaming into iPhones, looking insane as they talk into Bluetooth headsets, and so on. " + 
		"<br>A little nucleus of bloggers sits awkwardly, trying to act like legitimate news reporters." + 
		"<br>You notice that one of the journalists, who could be an even more gluttonous relative of New Jersey governor Chris Christie, " + 
		"<br>has left a bit of a turkey sandwich on the floor by his large feet. You're kinda hungry (per usual), and you gotta have that sandwich. " + 
		"<br>The question is how to get it. Run directly across the room and risk being spotted, " + 
		"<br>or try to obliquely edge your way around the room til you reach the precious morsel?", 
		[56, 59]));
      //56 Run for the sandwich in Room 9.
      this.events.push(new Event("Just run right for it! I'm hungry!", "You figure that the journalists are so distracted by the strain of the 24-hour news cycle " + 
		"<br>that they won't even notice if you dart across the room to get the turkey sandwich. " + 
		"<br>Well, you thought wrong! They notice, of course. But instead of trying to kill you, they let you get the sandwich. " + 
		"<br>They watch you eat, every single journalist in the room has her or his eyes trained on you with a fiery intensity that is a bit disconcerting.", 
		[57]));
      //57 Keep eating the sandwich.
      this.events.push(new Event("Whatever, man. Just eat the sandwich. Be cool.", "You finish off the piece of turkey sandwich, and all the journalists start typing madly into their laptops and smartphones. " + 
		"<br>You lick your lips, wash your whiskers, and even take some time to groom your fur and clean your tail. " + 
		"<br>The journalists don't even care! They just keep typing away. " + 
		"<br>One of them puts a small audio recorder in your face, and you're pretty sure two of them have you on Skype. " + 
		"<br>You finish grooming and walk out of the press room, out of City Hall, " + 
		"<br>and down into the safety of the nearest sewer tunnel.", 
		[58]));
      //58 Well that went well? [LOSE/win?]
      this.events.push(new Event("Well, that went well!", "The next morning, when reading the paper versions of the New York Times that no one wants anymore, " + 
		"<br>you discover that a detailed, scathing campaign against Mayor Bloomberg and City Hall has been printed in every paper and blog in the city. " + 
		"<br>And guess who's on the front page of the Times? It's you! Washing your whiskers like a model!" + 
		"<br>All the articles are highly critical of the administration and its commitment to sanitation. " + 
		"<br>City Hall is filled with rats in more ways than one, every news reporter smugly notes." + 
		"<br>Desperate to revamp its image, the city launches an aggressive city-wide cleaning and sanitation campaign, " + 
		"<br>including increased funding for aggressive pest control. " + 
		"<br>Ultimately, this destroys your home and all your friends and family are brutally murdered in their beds " + 
		"<br>because you just had to have that piece of turkey sandwich." + 
		"<br>" + 
		"<br>You win?", 
		[]));
      //59 Scale the perimeter instead of running right at food in Room 9. [LOSE]
      this.events.push(new Event("Scale the perimeter!", "You carefully sneak your way around the room as the journalistic screaming continues. " + 
		"<br>You can almost taste the delicious meat in that sandwich." + 
		"<br>Unfortunately, a nasty fight about \"Medicare\" being one word or two breaks out and you nearly get stepped on. " + 
		"<br>In your haste to escape and avoid being trodden upon by the journalists, you run straight into a glue trap and die." + 
		"<br>" + 
		"<br>You lose.", 
		[]));

      //Tunnel Two: Governor's Room
      //60 To the Governor's Room!
      this.events.push(new Event("To the Governor's Room!", "You make your way down the hall and to the Governor's Room. It is the fanciest room you've ever seen. " + 
		"<br>I would describe it in opulent detail, but I'm sure you don't feel like reading all that, do you? Trust me, it's snazzy." + 
		"<br>Inside the Governor's Room, a very fancy, important meeting, featuring lots of pompously dressed humans is taking place. " + 
		"<br>Everyone is laughing and talking, and trying to act like an authentic human being " + 
		"<br>who has concerns not immediately related to greedy, self-interested capitalistic consumption." + 
		"<br>But you don't really care about the humans and their pathetic shells of lives. You care about the food the humans are eating. " + 
		"<br>" + 
		"<br>The splendid medley of delicious food scents is overwhelming. " + 
		"<br>There are several tables in the Governor's Room, all piled high with expensive, delightful foods. " + 
		"<br>You scurry over to one of the banquet tables to get a closer look. " + 
		"<br>A stiletto heel slams down on the tip of your tail, but you're so " + 
		"<br>overcome with lust for the feast before your eyes that you hardly feel the pain." + 
		"<br>Mountains. Literally mountains of delicious, unspoiled food. " + 
		"<br>You have found the mother lode. You know already that you must have some. " + 
		"<br>" + 
		"<br>The only question is where to begin? " + 
		"<br>Among the seemingly endless spreads of food, a few items in particular catch your eye. " + 
		"<br>You see a large plate of pâté to your left, rich, moist, and delicious. " + 
		"<br>To your right, a massive cheese plate, featuring cheeses of every size, shape, and color, " + 
		"<br>perched neatly on a pyramid-shaped tray. " + 
		"<br>In front of you, a silver platter filled with pigs in a blanket, coupled with very expensive mustard—" + 
		"<br>a taste of home, but with an upscale twist. " + 
		"<br>What would you like to eat first?", 
		[61, 63, 62]));
      //61 Try the pâté. [LOSE]
      this.events.push(new Event("Let's try the pâté!", "You hungrily rush to the pâté and dig your paws into its soft, warm goodness. " + 
		"<br>The sweet scent of meat dances with your nostrils and you take a moment—just a moment—to savor this exquisite moment before you dig in. " + 
		"<br>Unfortunately for you, it is a moment too long, for just as you're about to dig into the pâté plate, a woman notices you sitting on the table. " + 
		"<br>Per usual, she makes no effort to get to know you or to understand your situation, and instead shrilly screams, " + 
		"<br>\"A rat!\"" + 
		"<br>" + 
		"<br>The party in the Governor's Room comes to a complete halt. " + 
		"<br>The wealthy politicians look over, see you, your furry face covered in pâté, " + 
		"<br>and take a moment to collectively process that a rat—a filthy rat!—is in their midst. " + 
		"<br>You hop off the table and run away, while they are frozen in fear." + 
		"<br>But they don't stay frozen for long. " + 
		"<br>Before you can reach the exit, the politicians whip themselves into a wealthy, screaming frenzy " + 
		"<br>and all try to flee the Governor's Room at once, as though it is on fire. " + 
		"<br>You put everything you have into a last-ditch effort to escape through the door before the politicians trample you, but to no avail. " + 
		"<br>Just a few feet from the door, you are crushed by a herd of stampeding politicians, " + 
		"<br>desperate to get away from the very life they just took." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //62 Try the pigs in a blanket! Connects to Room 9. (62>55, 0)
      this.events.push(new Event("Nothing says party like pigs in a blanket!", "You definitely have to have those pigs in a blanket first, you decide. " + 
		"<br>Who wants all this highbrow food when you can have simple hotdog perfection? " + 
		"<br>You rush over to the plate and seize a hotdog in your hands, your heart whirring with excitement. " + 
		"<br>You grin and drip the hotdog into the fanciest-looking gourmet mustard on the table and " + 
		"<br>shove the whole thing in your mouth, barely bothering to chew it before swallowing." + 
		"<br>You manage to pack away three more pigs in a blanket before trouble starts. " + 
		"<br>Just as you're about to score pig in blanket number four, a woman notices you sitting on the table. " + 
		"<br>Per usual, she makes no effort to get to know you or to understand your situation, " + 
		"<br>and instead shrilly screams, \"A rat!\"" + 
		"<br>" + 
		"<br>The party in the Governor's Room comes to a complete halt. " + 
		"<br>The wealthy politicians look over, see you—your furry face covered in mustard and hotdog crumbs—" + 
		"<br>and take a moment to collectively process that a rat is in their midst. " + 
		"<br>You hop off the table and run away, while they are frozen in fear. " + 
		"<br>But they don't stay frozen for long. " + 
		"<br>The entire crowd begins screaming, and a few of the more hardened fiscal conservatives " + 
		"<br>reflexively remove one shoe from their feet and rush forward to attack you." + 
		"<br>The screams and terror are both chaotic and intoxicating, as two senior city council members " + 
		"<br>attempt to bash your head in with expensive shoes. " + 
		"<br>You duck and dance around them, taunting them as you fly past." + 
		"<br>\"God damned rat!\" cry the council members. \"Get it!\"" + 
		"<br>" + 
		"<br>But it's hopeless. You're much faster than these weathered old men and they know it. " + 
		"<br>You scurry gleefully from the room, stopping to grab one more pig in a blanket and shove it in your mouth before you go." + 
		"<br>You hear the politicians in the Governor's Room discussing a janitor and an exterminator, " + 
		"<br>so you know you must move quickly and find a good hiding place. " + 
		"<br>You rush down the hall to your right and into the room labeled Room 9.", 
		[55]));
      //63 Try the cheese plate! Options: Put the cheese back. (63>64, 0) Or eat cheese defiantly. (63>67, 1) 
      this.events.push(new Event("Get involved with that cheese plate!", "You're a rat, so of course you're going for the fancy cheese plate. " + 
		"<br>It is literally a mountain of succulent cheese. " + 
		"<br>How can you say no?" + 
		"<br>Someday, when the creators of this game don't have tons of assignments due, there will be a nice description of the cheese plate. " + 
		"<br>Won't that be nice? In the meantime, you're at the cheese plate. Aww yeah! " + 
		"<br>You grab a delicious piece of white cheese from the base of the pyramid." + 
		"<br>Just as you're about to put the cheese cube in your mouth, you make eye contact with Mayor Michael Bloomberg himself, " + 
		"<br>who is seated across the room. You recognize him from television and the newspaper. " + 
		"<br>You and Bloomberg lock eyes for what feels like forever, " + 
		"<br>but in reality is probably less than a fraction of a second. " + 
		"<br>His stare bores through you to your very soul. " + 
		"<br>Basically, you and The Bloom share what we might call \"A Moment.\"" + 
		"<br>His look says one thing and one thing only: Don't you dare.", 
		[64, 67]));
      //64 Put the cheese back. (63>64, 0)
      this.events.push(new Event("Put the cheese piece back on the plate.", "Timidly, you drop the piece of white, delicious cheese back on the cheese pyramid and wash your whiskers nervously. " + 
		"<br>It doesn't appear that anyone else has seen you, but Bloomberg certainly has. " + 
		"<br>He won't take his eyes off you. " + 
		"<br>You're unsure what to do, so you sit frozen on the table, unable to blink." + 
		"<br>Finally, Bloomberg excuses himself from a conversation he was having with a large man with an obnoxious laugh. " + 
		"<br>He strolls over to you, nonchalant but commanding. He bends down to eye level with you, " + 
		"<br>and his eyes are hard and cold. They are the eyes of a man who really doesn't like soda." + 
		"<br>\"I'm going to have to ask you to leave, sir,\" " + 
		"<br>Bloomberg says in a tone that suggests he is not \"asking\" at all. " + 
		"<br>His eyes burn like someone who has been both a Democrat and a Republican and lived to tell the tale. " + 
		"<br>He is not a man to be trifled with.", 
		[65]));
      //65 Better leave City Hall. (64>65, 0)
      this.events.push(new Event("What can you say? You'd better leave.", "You exit the Governor's Room hastily, not wanting to cause a scene. " + 
		"<br>You notice that Bloomberg shuts the door behind you. " + 
		"<br>You trudge out of City Hall, dejected. You didn't even get one lousy piece of cheese out of the whole shindig!" + 
		"<br>You sit outside on the Civic Center sidewalk and ponder your next move. " + 
		"<br>How about hopping a train to somewhere less stuffy and self-absorbed? " + 
		"<br>You heard there was a Siamese who was throwing a pretty sweet party somewhere on Broadway.", 
		[66]));
      //66 Outside City Hall, head over to Broadway. (65>66, 0) See The Lion King. (66>36, 0) See The Clam, It Broods. (66>77, 1)
      this.events.push(new Event("Let's blow this popsicle stand and get on the train.", "You hop a lift on the nearest baby stroller and hide in a diaper bag until your vehicle approaches the subway terminal. " + 
		"<br>You leap off the stroller, parent and child totally oblivious to your presence, " + 
		"<br>and deftly scramble down the stairs into the subway station." + 
		"<br>You wait on the platform for the N train and hop on the first train headed up to Broadway. " + 
		"<br>The train is pretty crowded, but everyone has an iPhone and no sense of self-awareness, so you go unnoticed. " + 
		"<br>You wash your face, lament how utterly dull the Mayor's stupid party was, " + 
		"<br>and wait for the conductor to announce the 23rd street Broadway stop." + 
		"<br>" + 
		"<br>As soon as the doors open, you pop out of the train and onto the Broadway platform. " + 
		"<br>It is quite bustling, and you have to take great care to ensure your tail isn't stepped on. " + 
		"<br>You pause to urinate on a Macy's advertisement—just because—and then scurry up the subway stairs to street level. " + 
		"<br>A few people shriek or gasp at the sight of you, but really, that's their problem not yours." + 
		"<br>You have reached the heart of the Broadway theater district, which is alive with people, cars, lights, and noise. " + 
		"<br>" + 
		"<br>Tickets litter the ground, suggesting that a show just let out a short while ago. " + 
		"<br>You take a good look around you, as you've never before been to this part of town. " + 
		"<br>There is so much activity, so many things to do and smell and eat, that you're not really sure what to do first." + 
		"<br>You figure that since you're in the greatest theater district in the world, you might as well go check out a show. " + 
		"<br>This way when you return to the sewer, you will definitely be able to impress the others. " + 
		"<br>Now the question is, which show do you see? " + 
		"<br>" + 
		"<br>There are endless options in this part of town." + 
		"<br>In front of you, you notice a gargantuan light-up sign for the Lion King musical. " + 
		"<br>You've heard a lot about this musical, and you did dig the movie. " + 
		"<br>That could be fun. On the other side of the street is a small, almost forgotten theater. " + 
		"<br>The outside is dark, but judging from the people streaming into it, the theater is open for business and showing something quite popular. " + 
		"<br>You glance at the marquee outside the humble theater. " + 
		"<br>It reads: \"The Clam, It Broods.\"" + 
		"<br>Hmm, which show do you want to see? " + 
		"<br>Free admission for rats either way.", 
		[36, 77]));
        
      //Tunnel Two: Bloomberg Battle
      //67 Eat the cheese! You're not afraid! (63>67, 1) Turns into a fight. (67>68, 0)
      this.events.push(new Event("Forget Bloomberg. Eat the cheese piece.", "Ugh, Bloomberg! So paternalistic and bossy! " + 
		"<br>Defiantly, you pop the cheese piece into your mouth, and chew it slowly, savoring its sweet, tangy taste on your tongue. " + 
		"<br>Never breaking eye contact with the mayor, you proceed to rub your hands on several other cheese pieces, " + 
		"<br>and even sneeze on what you know is absurdly expensive gouda. " + 
		"<br>You snicker to yourself and wipe your tail on some brie." + 
		"<br>Bloomberg looks tense, and even from far away, you can see that a vein in his neck is bulging. " + 
		"<br>Some of the other politicians in the Governor's Room have noticed your presence now, " + 
		"<br>and a few of them show visible signs of terror." + 
		"<br>" + 
		"<br>One of the city council members, an unpleasant man with white hair and a sour face, " + 
		"<br>starts toward you, ready to attack. Before the man can charge you, however, " + 
		"<br>Bloomberg puts his hand on the man's arm." + 
		"<br>\"Let me handle this,\" whispers Mayor Bloomberg, his voice cold and steely. " + 
		"<br>\"I've been dealing with the rat problem in this city for years.\"" + 
		"<br>He stands up from his seat at the table and strolls confidently, commandingly, " + 
		"<br>toward you and that fateful cheese plate. " + 
		"<br>The day of reckoning has come.", 
		[68]));
      //68 The fight is on! (68>69, 0)
      this.events.push(new Event("It's on!", "Bloomberg reaches the banquet table, and you are frozen in fear. " + 
		"<br>Your heart beats sickeningly in your chest, " + 
		"<br>and you fear you may throw up the lovely cheese you just ate. " + 
		"<br>He stares at you, and his face betrays no emotion beyond sheer determination and strength of will. " + 
		"<br>You have no idea what the mayor has up his well-tailored sleeve. " + 
		"<br>You manage a quick sweeping glance around the room. " + 
		"<br>None of the other politicians comes toward you; it's just you and that maverick Michael Bloomberg." + 
		"<br>" + 
		"<br>However, there is an older man standing just near the other side of the table. " + 
		"<br>Perhaps you could take a hostage and turn the situation to your advantage. " + 
		"<br>Then again, you are vastly out-numbered. " + 
		"<br>Maybe it's best to rely on the element of surprise. " + 
		"<br>How do you proceed?", 
		[69, 70, 71]));
      //69 Take the old man hostage. [LOSE]
      this.events.push(new Event("Take the old man hostage.", "Before Bloomberg can take one more step toward you, " + 
		"<br>you dart away from the cheese plate and race toward the feeble old man near the table. " + 
		"<br>You scurry up his arm and try to grab him by the throat. " + 
		"<br>The man screams in terror and wobbles unsteadily on his feet." + 
		"<br>Though the man is old and weak, he is still much, much larger and stronger than you, " + 
		"<br>and he easily manages to shake you loose from his shirt and fling you across the room. " + 
		"<br>You're just a rat, remember?" + 
		"<br>" + 
		"<br>The mob of angry politicians descends upon you and crushes you like an unpleasant Senate bill. " + 
		"<br>As you take your last breath, you see Mayor Bloomberg standing over you, " + 
		"<br>smiling and eating a piece of cheese." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //70 Rush Bloomberg and claw his eyes. [LOSE/win?]
      this.events.push(new Event("Rush Bloomberg and claw his eyes.", "Without a moment's hesitation, you throw yourself at the strongest advocate for gun control in New York City. " + 
		"<br>You launch yourself into the air and land with a mighty thump right onto Bloomberg's face. " + 
		"<br>Your heart is beating faster than you ever knew it could; " + 
		"<br>you must fight for your life, so you give it everything you have. " + 
		"<br>" + 
		"<br>Without even thinking, you claw furiously at Bloomberg's eyes and take a large bite of his nose. " + 
		"<br>You emit your most ferocious squeak and your tail whips around as though possessed." + 
		"<br>Bloomberg screams as blood pours from the bite on his nose, " + 
		"<br>but he manages to pull you off of himself and throw you hard into the floor. " + 
		"<br>The shock of hitting the floor stuns you, and a sharp pain shoots through your back and neck. " + 
		"<br>You instinctively protect your stomach with your paws, " + 
		"<br>but you're in a lot of pain, and getting up is not easy." + 
		"<br>" + 
		"<br>Though he managed to dislodge you, Mayor Bloomberg has problems of his own. " + 
		"<br>He is badly wounded and cannot see. He stumbles around the room, feeling with his feet to try to find you." + 
		"<br>\"Where is that rat?!\" " + 
		"<br>he cries bitterly as the other politicians rush to his aid." + 
		"<br>\"We'll get the rat, sir,\" they assure him." + 
		"<br>Bloomberg wipes the blood from his face and as he feels around blindly for you, " + 
		"<br>he immediately begins dictating an angry Op-Ed piece to be published in the New York Times tomorrow. " + 
		"<br>An aide hurriedly takes notes on everything Bloomberg says." + 
		"<br>" + 
		"<br>\"The rat infestation in this city is out of control!\" " + 
		"<br>Bloomberg roars, tripping over a chair. \"Underline that. 'Out of control!'\"" + 
		"<br>After a couple excruciating seconds, you manage to get up from the floor and, " + 
		"<br>despite the pain, you flee from the Governor's Room. " + 
		"<br>Your body is sore, but you are resilient, and you know, given time and patience, you will make a full recovery. " + 
		"<br>Can Bloomberg say the same? You smile to yourself and hurry out of City Hall " + 
		"<br>and back to the bosom of the cool, dark sewer." + 
		"<br>Unfortunately, your troubles aren't over so easily. " + 
		"<br>" + 
		"<br>The next day, the front page of the New York times is brimming with bad press about the rat problem in New York City. " + 
		"<br>Bloomberg's irate Op-ed piece, \"A Modern Black Plague,\" is the main headline above the fold." + 
		"<br>You study the paper carefully, glad you took those community literacy courses in the Bronx years ago, " + 
		"<br>and you know it's not good. " + 
		"<br>The city is launching an all-out war on rats and other pests immediately." + 
		"<br>The aggressive city-wide cleaning and sanitation campaign ultimately destroys your home. " + 
		"<br>All your friends and family are brutally murdered in their beds " + 
		"<br>by faceless exterminators wielding toxic chemicals—" + 
		"<br>all because you just had to sample that cheese plate. Nice going." + 
		"<br>" + 
		"<br>You win?", 
		[]));
      //71 Wait for Bloomberg to come to you.
      this.events.push(new Event("Wait for Bloomberg to come to you.", "You figure you'd better see just way the mayor is up to before you make any sudden decisions." + 
		"<br>Bloomberg leans down at the table so that you and the most powerful man in the city are at eye level." + 
		"<br>\"Hello, little rat,\" he whispers softly, coldly. \"We meet again.\"" + 
		"<br>Again? You're puzzled. You dare not take your beady oil drop eyes off him for even a moment." + 
		"<br>\"You remember me, don't you?\" Bloomberg's voice has a superficially playful tone, but under the surface it sounds tired and hollow. " + 
		"<br>His eyes are ringed with heavy dark circles. " + 
		"<br>" + 
		"<br>\"Or maybe you don't remember me,\" he muses. " + 
		"<br>\"Maybe you don't remember how you got that scar on your left paw.\"" + 
		"<br>You risk a glance down at your left paw, which, true to the mayor's words, bears a long, crooked scar. " + 
		"<br>You shudder to think about it, remembering how hungry you were, the desperate hunt for garbage. " + 
		"<br>You remember the feel of cold metal under your paws as you grabbed onto the garbage truck, " + 
		"<br>not realizing it was for recycling only. " + 
		"<br>You never would have been so careless had you not been so hungry." + 
		"<br>That truck, that dreaded recycling truck! " + 
		"<br>Your paw still stings in pain when you think about it." + 
		"<br>" + 
		"<br>\"Yes,\" whispers Bloomberg. \"Remember how you fell from the truck? Remember how you smashed into the pavement? " + 
		"<br>And remember how the truck almost hit you?\" The mayor laughs softly. " + 
		"<br>\"I don't need to remind you. I can see in your eyes that you remember. Little rat.\"" + 
		"<br>Involuntarily, you hide your paw under your body. " + 
		"<br>How could Bloomberg know about the time the recycling truck nearly ruined your hand, nearly took your life?" + 
		"<br>Unless..." + 
		"<br>" + 
		"<br>Bloomberg's eyes are alight with malicious glee. " + 
		"<br>\"Yes, little rat. Yes. That was my recycling program, little rat. " + 
		"<br>And I was the one driving that truck all those years ago.\"" + 
		"<br>The mayor blinks and smiles his wide, political smile. " + 
		"<br>\"And my only regret is that I only damaged your paw—instead of taking your life.\"" + 
		"<br>" + 
		"<br>Your entire body is shaking with rage so badly that you fear you might pass out. " + 
		"<br>That monster! That barbaric monster! He mutilated your body—and is proud of this treachery!" + 
		"<br>This cannot stand! You have to do something! " + 
		"<br>You must make this demon pay for his crimes!" + 
		"<br>What do you do?", 
		[72, 73, 74, 75]));
      //72 Call rats for help. [LOSE]
      this.events.push(new Event("Call your fellow rats for help.", "You emit a mighty squeak and blink your eyes five times in rapid succession. " + 
		"<br>The power of the secret rat signal has been unleashed!" + 
		"<br>" + 
		"<br>A few tense seconds pass, during which you're sure that all your rodent comrades will come bursting through the doors, " + 
		"<br>rushing to your aid. The politicians stand around awkwardly, not sure how to proceed." + 
		"<br>A few more seconds pass and it becomes clear that no one is coming. " + 
		"<br>You squeak and again blink your eyes five times, but nothing happens. " + 
		"<br>Bloomberg has a hearty laugh and kills you. " + 
		"<br>Then for fun, he changes the legal smoking age in New York to 21." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //73 Charge Bloomberg. [LOSE/win?]
      this.events.push(new Event("Charge and aim for the eyes.", "Without a moment's hesitation, you throw yourself at the strongest advocate for gun control in New York City. " + 
		"<br>You launch yourself into the air and land with a mighty thump right onto Bloomberg's face. " + 
		"<br>Your heart is beating faster than you ever knew it could; " + 
		"<br>you must fight for your life, so you give it everything you have. " + 
		"<br>" + 
		"<br>Without even thinking, you claw furiously at Bloomberg's eyes and take a large bite of his nose. " + 
		"<br>You emit your most ferocious squeak and your tail whips around as though possessed." + 
		"<br>Bloomberg screams as blood pours from the bite on his nose, " + 
		"<br>but he manages to pull you off of himself and throw you hard into the floor. " + 
		"<br>The shock of hitting the floor stuns you, and a sharp pain shoots through your back and neck. " + 
		"<br>You instinctively protect your stomach with your paws, " + 
		"<br>but you're in a lot of pain, and getting up is not easy." + 
		"<br>" + 
		"<br>Though he managed to dislodge you, Mayor Bloomberg has problems of his own. " + 
		"<br>He is badly wounded and cannot see. He stumbles around the room, feeling with his feet to try to find you." + 
		"<br>\"Where is that rat?!\" " + 
		"<br>he cries bitterly as the other politicians rush to his aid." + 
		"<br>\"We'll get the rat, sir,\" they assure him." + 
		"<br>Bloomberg wipes the blood from his face and as he feels around blindly for you, " + 
		"<br>he immediately begins dictating an angry Op-Ed piece to be published in the New York Times tomorrow. " + 
		"<br>An aide hurriedly takes notes on everything Bloomberg says." + 
		"<br>" + 
		"<br>\"The rat infestation in this city is out of control!\" " + 
		"<br>Bloomberg roars, tripping over a chair. \"Underline that. 'Out of control!'\"" + 
		"<br>After a couple excruciating seconds, you manage to get up from the floor and, " + 
		"<br>despite the pain, you flee from the Governor's Room. " + 
		"<br>Your body is sore, but you are resilient, and you know, given time and patience, you will make a full recovery. " + 
		"<br>Can Bloomberg say the same? You smile to yourself and hurry out of City Hall " + 
		"<br>and back to the bosom of the cool, dark sewer." + 
		"<br>Unfortunately, your troubles aren't over so easily. " + 
		"<br>" + 
		"<br>The next day, the front page of the New York times is brimming with bad press about the rat problem in New York City. " + 
		"<br>Bloomberg's irate Op-ed piece, \"A Modern Black Plague,\" is the main headline above the fold." + 
		"<br>You study the paper carefully, glad you took those community literacy courses in the Bronx years ago, " + 
		"<br>and you know it's not good. " + 
		"<br>The city is launching an all-out war on rats and other pests immediately." + 
		"<br>The aggressive city-wide cleaning and sanitation campaign ultimately destroys your home. " + 
		"<br>All your friends and family are brutally murdered in their beds " + 
		"<br>by faceless exterminators wielding toxic chemicals—" + 
		"<br>all because you just had to sample that cheese plate. Nice going." + 
		"<br>" + 
		"<br>You win?", 
		[]));
      //74 Throw soda at Bloomberg. [WIN]
      this.events.push(new Event("Throw soda at Bloomberg's face.", "Quick as a flash, you pop open the can of soda with your nimble fingers. " + 
		"<br>With your fiercest battle squeak, you hold the can tightly and fling the soda at Bloomberg." + 
		"<br>As it happens, though Bloomberg is immune to many forms of illness, death, and dismemberment, " + 
		"<br>his one weakness is soda. Soda is to Bloomberg as kryptonite is to Superman; that kind of thing. " + 
		"<br>" + 
		"<br>As soon as the soda makes contact with his flesh, he lets out a high-pitched, inhuman scream, and steam rises from his skin. " + 
		"<br>You hold onto the rapidly emptying soda can and boldly march closer to the mayor. " + 
		"<br>You fling the last of the soda right into his eyes and drop the can." + 
		"<br>" + 
		"<br>Bloomberg shrieks and howls, dropping to the floor and foaming at the mouth like a rabid animal. " + 
		"<br>Everywhere that the soda has made contact with his skin, you notice, " + 
		"<br>is covered in angry green boils, and steam continues to rise from his entire body. " + 
		"<br>After only a few seconds, his entire form dissolves into nothing, " + 
		"<br>and where Mayor Michael Bloomberg used to stand lies only his expensive suit, in an undignified heap." + 
		"<br>" + 
		"<br>Without waiting for a reaction from the other politicians, you bolt from the Governor's Room, " + 
		"<br>flee City Hall, and return to the safety of the sewer you know and love. " + 
		"<br>You don't want to think about the therapy bill you'll have to pay to unsee the horrors of a man melting before your very eyes—" + 
		"<br>but you do know that you have destroyed one of the greatest threats ever known to rats, and thus..." + 
		"<br>" + 
		"<br>YOU WIN!", 
		[]));
      //75 Throw cheese cubes at Bloomberg. [LOSE]
      this.events.push(new Event("Throw cheese cubes from the cheese plate.", "With both hands, you grab cubes of cheese from the mighty cheese pyramid" + 
		"<br> and start lobbing them directly at Bloomberg's eyes with all the rage and fire you can summon." + 
		"<br>Unfortunately, Bloomberg is too deft for you, and he simply catches the cheese cubes in his mouth." + 
		"<br>\"These cheese cubes are taxpayer funded,\" he grins, leaning in to face you. " + 
		"<br>\"Did you really think I would let them go to waste?\"" + 
		"<br>" + 
		"<br>He laughs and grabs your tiny body and squeezes it as though you're an employee of his media empire, " + 
		"<br>draining the life from your veins. " + 
		"<br>" + 
		"<br>The last thing you see is Mayor Bloomberg, smiling merrily and casually popping " + 
		"<br>a Munster cheese cube into his mouth." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      //76 Never check out City Hall in the first place. (50>76, 1) [LOSE]
      this.events.push(new Event("Eh, forget it. Keep walking down the street.", "You decide to keep walking down the street. Where are those cheese-covered soft pretzels you smelled earlier? " + 
		"<br>You're just about to find out when you get crushed during a stampede of political protestors " + 
		"<br>demanding that the Yankees be allowed to participate in the World Series, " + 
		"<br>despite not having qualified for the playoffs this year. You die." + 
		"<br>" + 
		"<br>You lose.", 
		[]));
      
      //Tunnel Two: Broadway (The Clam, It Broods)
      //77 The Clam, It Broods. (35>77, 1) (66>77, 1) Boring? (77>78, 0) Awesome? (77>79, 1)
      this.events.push(new Event("The Clam, It Broods", "You head for the small theater showing the mysterious \"The Clam, It Broods\" play. " + 
		"<br>The promotional poster features a single clam against a black background. Seems pretty artsy." + 
		"<br>The theater is small and run-down, " + 
		"<br>but it is bustling with well-dressed old people whispering to each other in excited tones." + 
		"<br>You enter the theater, the lights go down, and the play begins. " + 
		"<br>You settle into a seat near the front. " + 
		"<br>None of the audience members notices you in the darkness." + 
		"<br>Onto the stage rushes a woman, who immediately begins weeping and screaming in German. " + 
		"<br>Your German is extremely rusty, as you haven't hung out in that part of the city for a while, " + 
		"<br>so you can't understand most of what is being shouted. " + 
		"<br>Something about suffering and endless torment." + 
		"<br>" + 
		"<br>The woman lights eight candles and launches into an interpretive dance sequence, " + 
		"<br>yelling repeatedly that she is a tree. " + 
		"<br>Two men in bear costumes join her on the stage and dance in a spastic, twitchy fashion. " + 
		"<br>They chant in German about socialism. " + 
		"<br>A large animatronic dolphin descends from the ceiling, water spurting from its mechanical blowhole." + 
		"<br>This might possibly be the artsiest thing you've ever seen. " + 
		"<br>What do you think of the play so far?",
		[78, 79]));
      //78 If you think the play is boring, you have a dream and die. [LOSE]
      this.events.push(new Event("Ugh, so boring and pretentious!", "You don't have to be fluent in German to know that this play sucks. " + 
		"<br>As a group of fourteen dwarves wearing traffic cones on their heads emerges on the stage, " + 
		"<br>you feel yourself nodding off." + 
		"<br>You slip into a dream in which you are flying high above the city at night. " + 
		"<br>" + 
		"<br>Below you, the taxi cabs are dimly lit yellow ants. " + 
		"<br>You soar through the clouds, weightless and free, feeling the cool wind through your clean, unmatted fur." + 
		"<br>You fly out of the city and over the countryside. " + 
		"<br>You've never seen a rural landscape before—rolling green hills and valleys of wildflowers and all that—" + 
		"<br>so you swoop down to the ground to check it out." + 
		"<br>You wander around the valley of wildflowers, feeling the soft green grass under your feet. " + 
		"<br>The air is heavy with dew. In the middle of the valley is an enormous tar pit. " + 
		"<br>You're not sure why, but you are magnetically drawn to it. " + 
		"<br>" + 
		"<br>You want to walk away from the thick vat of black, bubbling tar, but instead, you hurry toward it." + 
		"<br>The tar is hot, so hot that it feels like it's burning your skin even from the edge of the pit. " + 
		"<br>The endless black sea is hypnotic, and before you can stop yourself—" + 
		"<br>if you ever could stop yourself—you walk right into the vat of hot tar." + 
		"<br>As soon as you do this, the tar scalds your skin and you scream, " + 
		"<br>secure in the knowledge that you have made a huge mistake. " + 
		"<br>You struggle to release yourself from the tar, but it sticks tightly to your flesh " + 
		"<br>and you sink deeper into the pit, as though trapped in quicksand." + 
		"<br>" + 
		"<br>You wake up suddenly and find yourself back in the artsy theater where The Clam, It Broods was playing. " + 
		"<br>You are relieved that no hot tar is burning your skin. " + 
		"<br>But you realize, to your horror, that it wasn't a dream after all. " + 
		"<br>You look down and discover that you are ensnared in a glue trap in a corner of the theater." + 
		"<br>You pull hard against the glue, but you are solidly stuck in the trap. " + 
		"<br>You squeak for help, but no one hears you. " + 
		"<br>If they could hear you, they wouldn't care anyway. " + 
		"<br>You live out the rest of your anguished, starving days stuck in the glue." + 
		"<br>You really should be more careful when sleepwalking." + 
		"<br>" + 
		"<br>You lose.", []));
      //79 You think the play is awesome and you live to intermission. (79>80, 0) (79>81, 1)
      this.events.push(new Event("Innovative! I love it!", "You don't have to be fluent in German to know that The Clam, It Broods is awesome! " + 
		"<br>The costumes are striking, the casting is both intuitive and daring, and the directing is on point. " + 
		"<br>Overall, a stunning piece of stagecraft. " + 
		"<br>You can't wait to tell all the other rats about it." + 
		"<br>You are totally absorbed in the play, and before you know it, it's time for the intermission. " + 
		"<br>What do you want to do?", 
		[80, 81]));
      //80 Look for food on the floor, meet The Critic and die. [LOSE]
      this.events.push(new Event("Check the floor of the theater for food.", "There's bound to be some tasty morsels dropped on the floor of this theater. " + 
		"<br>You scurry around and finally spot a delectable-looking piece of brownie, only a few days old. " + 
		"<br>You rush over to it. Unfortunately, as you're heading for the brownie, " + 
		"<br>you accidentally scurry across the foot of one Mr. Harrison von Jenkins-Dominguez, " + 
		"<br>renowned theater critic for the New York Times. " + 
		"<br>" + 
		"<br>He hasn't particularly been enjoying the play, and he is certainly not happy to see you." + 
		"<br>\"A rat!\" he screams, like everyone else, without even bothering to get to know you. " + 
		"<br>\"A disgusting rat!\"" + 
		"<br>" + 
		"<br>Immediately a slender, nervous, bespectacled man rushes over: the owner of the theater. " + 
		"<br>He is desperate to placate Mr. von Jenkins-Dominguez, " + 
		"<br>as he is slavishly dependent on The Clam, It Broods getting a good NYT review." + 
		"<br>\"This theater is almost as revolting as the play!\" booms Harrison von Jenkins-Dominguez. " + 
		"<br>\"I've had it up to here with this production!\" " + 
		"<br>" + 
		"<br>You watch the drama unfold, transfixed by the bellowing, overweight critic." + 
		"<br>The theater owner tsks sympathetically. " + 
		"<br>\"Please, sir, don't let this impact your review of the play in any way! " + 
		"<br>That rat has nothing to do with this production!\"" + 
		"<br>Without a moment's hesitation, the wiry theater owner slams his foot down upon your head, " + 
		"<br>killing you instantly." + 
		"<br>\"You see, Mr. von Jenkins-Dominguez,\" says the theater owner. " + 
		"<br>\"The rat is no longer a problem.\"" + 
		"<br>" + 
		"<br>You lose.", []));
      //81 Head out to the lobby to socialize.
      this.events.push(new Event("Go out in the lobby and socialize.", "You head into the lobby, " + 
		"<br>which is teeming with well-dressed, educated theater patrons sipping expensive booze. " + 
		"<br>In the corner of the room, you spot a tall, thin man sipping a glass of red wine. " + 
		"<br>He stands alone and doesn't talk to anyone." + 
		"<br>" + 
		"<br>Over to your right, you spot two women, a blonde and a brunette, " + 
		"<br>having an animated conversation while clutching glasses of champagne. " + 
		"<br>Whom would you like to talk to?", 
		[82, 83]));
      //82 Try to talk to the German man. (81>82, 0)
      this.events.push(new Event("The man in the corner.", "Well, unfortunately, the man in the corner only speaks German. " + 
		"<br>Looks like you'll have to talk to the ladies.", 
		[83]));
      //83 Talk to the two ladies in the corner. (81>83, 1) (82>83, 0)
      this.events.push(new Event("Chat up the ladies.", "You scurry over to the two bubbly women. " + 
		"<br>They are discussing The Clam, It Broods with both joy and intensity. " + 
		"<br>At first, they are a little weirded out that a rat has joined their conversation, " + 
		"<br>but they are drunk enough that it doesn't really bother them." + 
		"<br>" + 
		"<br>\"What do you think of the play so far?\" asks the brunette, a stocky woman with a wide, warm smile." + 
		"<br>You tell the women that you are totally digging it. " + 
		"<br>You explain that you find the use of negative space on the stage to be particularly compelling, " + 
		"<br>and the scene with the football players dressed as neon green orca whales was both innovative and also exactly what you'd expect. " + 
		"<br>The play does a marvelous job, you explain, of exploring the tension inherent in the subjective perspective, " + 
		"<br>while still managing to foster an experience that is universally relatable." + 
		"<br>" + 
		"<br>\"I completely agree,\" gushes the brunette. " + 
		"<br>\"This is really an exceptional piece of theater.\"" + 
		"<br>\"You really have a unique perspective,\" says the blonde. " + 
		"<br>\"Your commentary is very insightful, without relying on tired theatrical criticism cliches.\"" + 
		"<br>\"You know what he should do, right?\" beams the brunette to her friend. " + 
		"<br>\"He must start a theater blog!\"" + 
		"<br>\"Oh absolutely,\" says the blonde, noddding her head vigorously. " + 
		"<br>\"My sister just started a theater blog, and she's a complete idiot. " + 
		"<br>But you...you could really make something of it.\"" + 
		"<br>What do you think of this idea? Wanna be a blogger?", 
		[84, 85]));
      //84 You reject the blog idea, run into The Critic, and die. [LOSE] (83>84, 0)
      this.events.push(new Event("Nah, typing is a chore.", "You politely tell the tipsy women that you're flattered, " + 
		"<br>but you're not really into the whole blogging scene. " + 
		"<br>Andrew Sullivan does more than enough of that for both of you. " + 
		"<br>" + 
		"<br>You slip away and decide to head into the theater to hunt for food." + 
		"<br>There's bound to be some tasty morsels dropped on the floor of this theater. " + 
		"<br>You scurry around and finally spot a delectable-looking piece of brownie, only a few days old. " + 
		"<br>You rush over to it. Unfortunately, as you're heading for the brownie, " + 
		"<br>you accidentally scurry across the foot of one Mr. Harrison von Jenkins-Dominguez, " + 
		"<br>renowned theater critic for the New York Times. " + 
		"<br>" + 
		"<br>He hasn't particularly been enjoying the play, and he is certainly not happy to see you." + 
		"<br>\"A rat!\" he screams, like everyone else, without even bothering to get to know you. " + 
		"<br>\"A disgusting rat!\"" + 
		"<br>" + 
		"<br>Immediately a slender, nervous, bespectacled man rushes over: the owner of the theater. " + 
		"<br>He is desperate to placate Mr. von Jenkins-Dominguez, " + 
		"<br>as he is slavishly dependent on The Clam, It Broods getting a good NYT review." + 
		"<br>\"This theater is almost as revolting as the play!\" booms Harrison von Jenkins-Dominguez. " + 
		"<br>\"I've had it up to here with this production!\" " + 
		"<br>" + 
		"<br>You watch the drama unfold, transfixed by the bellowing, overweight critic." + 
		"<br>The theater owner tsks sympathetically. " + 
		"<br>\"Please, sir, don't let this impact your review of the play in any way! " + 
		"<br>That rat has nothing to do with this production!\"" + 
		"<br>Without a moment's hesitation, the wiry theater owner slams his foot down upon your head, " + 
		"<br>killing you instantly." + 
		"<br>\"You see, Mr. von Jenkins-Dominguez,\" says the theater owner. " + 
		"<br>\"The rat is no longer a problem.\"" + 
		"<br>" + 
		"<br>You lose.", []));
      //85 You love the blog idea, and become a famous critic! [WIN!!] (83>85, 1)
      this.events.push(new Event("Totally! RatPlayz.tumblr.com, baby!", "A theater blog! It's an excellent idea! " + 
		"<br>You thank the women for the suggestion and hurry into the theater to watch the rest of The Clam, It Broods. " + 
		"<br>You get home, start a tumblr, and write a glowing review of it. " + 
		"<br>The words flow easily out of your paws and into your rat-sized keyboard." + 
		"<br>" + 
		"<br>The blog, as it happens, is a huge success. " + 
		"<br>People are hungry for theatrical criticism from the rodent perspective. " + 
		"<br>You become hugely famous and influential, " + 
		"<br>your witty, honest reviews can make or break any play in the city. " + 
		"<br>Your popularity soars: you have over a million Twitter followers overnight, " + 
		"<br>your own fragrance line, an appearance on Charlie Rose, " + 
		"<br>and a recurring guest spot on HBO's hit show Girls. " + 
		"<br>Miranda Kerr texts you frequently—it's getting pretty serious." + 
		"<br>" + 
		"<br>YOU WIN!", []));

    //loop through and set 
    length = this.events.length;
    for (var i = 0; i < length; i++) {
    	var exits = this.events[i].numeric_exits;
    	this.set_connection(i, exits);
    }
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
	
}