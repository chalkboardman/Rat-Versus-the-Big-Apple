//pretending the game is a choose your own adventure book
//so we're going to have a list of pages
//each page will have a title and text
//the title shows up on the buttons

//the pages are a DAG, so each page is a node, and it contains a list of adjacent nodes
//the list of adjacent nodes is called "choices"
var pages = { 
	//0 Welcome message when the user runs the game.
	"0" : { "title" : "Rat Versus the Big Apple",
			"text" : "<p>An Adventure in Java<br>" +
							"Featuring the creative \"talents\" of:<br>" + 
							"Erin Donohue, Keelee James, and Rae Berg</p>" + 
							"<p>Ported to JavaScript by Shawn McDonald</p>" + 
							"<p>Are you ready to explore the city? Well, too bad, cause you're going to.</p>",
			"choices" : [1]
	},
	//1 Wake up in the sewer.
	"1" : {	"title" : "Sewer Entrance", 
			"text" : "You wake up in a dark and smelly place that feels quite homey. " + 
					"<br>Liquid sludge surrounds you, but you're unbothered by it." + 
					"<br>" + 
					"<br>Ahead is the darkness and dull echo of the sewer. " + 
					"<br>Above your head is a sewer grate, through which shine a few brave beams of light. " + 
					"<br>Maybe someday you'll go up and see the surface, but today is not that day. " + 
					"<br>Better just go forward into the darkness of the sewer for now. It's safer.", 
			"choices" : [2]
	},
	//The Sewer
	//2 Choose 1 of 3 tunnels: The Narrow Tunnel (Tunnel One, 2>3, 0), Tunnel With A Weird Smell (Tunnel Three, 2>16, 1), Wide Tunnel (Tunnel Two, 2>29, 2)
	"2" : { "title" : "Forward to the dark sewer.", 
			"text" : "You blink your eyes, clean your whiskers quickly, and stroll into the depths of the sewer. " + 
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
			"choices" : [3, 16, 29]
	},
	//Tunnel One: Narrow Tunnel (Rat Gang)
	//3 Choose the narrow tunnel at the beginning of the game. Right or Left Turn?
	"3" : { "title" : "Let's try the narrow tunnel.", 
			"text" : "You elect to go down the narrow tunnel to your left. You hop inside, deftly dodging the litter and other rubbish blocking the entrance. " + 
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
			"choices" : [4, 6]
	},
	//Tunnel One: Right Turn (Death)
	//4 Right turn in Narrow Tunnel. (3>4, 0)
	"4" : { "title" : "Right.",  
			"text" : "You decide to check out the tunnel on the right. Maybe that roach was onto something good. " + 
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
			"choices" : [5]

	},
	//5 Get trapped in right tunnel and die. [LOSE]
	"5" : { "title" : "Turn back.",
			"text" : "You turn around to head back to the tunnel entrance. " + 
					"<br>Unfortunately, you take only a few steps forward before you realize that the tunnel is now too narrow for you to fit through. " + 
					"<br>You suck in your stomach and claw at the metal walls, but nothing works. Somehow either you got fatter or it got skinnier. " + 
					"<br>Either way, try as you might, you cannot squeeze your way back the way you came. Nor can you go forward. " + 
					"<br>You're stuck, the cruel cylinder of the tunnel closing in around your body." + 
					"<br>You squeak for help but no one answers. No one would, not this far down in the sewer depths. " + 
					"<br>Like those other unfortunate animals before you, you get stuck in the tiny tunnel and die. " + 
					"<br>" + 
					"<br>You lose.", 
			"choices" : []
	},
	//Tunnel One: Left Turn (Rat Gang)
    //6 Left turn in Narrow Tunnel. Meet the Rat Gang. (3>6, 1)
	"6" : { "title" : "Left.",
			"text" : "Like a good politician, you head to the left. " + 
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
			"choices" : [7, 15]
	},
	//7 Keep talking to the rats.
	"7" : { "title" : "Keep talking to the rats.",
			"text" : "You join the rats on top of the trash heap and try to think of impressive things to say." + 
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
			"choices" : [8, 12]
	},
	//8 Do nothing for secret signal. (7>8, 0)
	"8" : { "title" : "No idea. Wait and see what they do.", 
			"text" : "You have no idea what the signal could possibly be, so you stand around stupidly holding your breath." + 
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
			"choices" : [9, 10, 11]
	},
	//9 You agree to join the Rat Gang. [WIN]
	"9" : { "title" : "You agree to join the rat gang.",
			"text" : "You tell the rats that you are happy to join their gang. " + 
					"<br>They shriek in a mad joyous frenzy and you guys all get really full on a feast of rotten trash. " + 
					"<br>Over time, you work your way up in the ranks and become king of a mighty rat empire." + 
					"<br>" + 
					"<br>YOU WIN!", 
			"choices" : []
	},
	//10 You refuse to join the Rat Gang and they kill you. [LOSE]
	"10" : { "title" : "You refuse to join the rat gang.", 
			"text" : "You decline the rats' offer to join the gang, explaining that it's really just not your thing. " + 
					"<br>Plus, you think it would conflict with your bridge club meetings each week." + 
					"<br>The rats glare at you, super offended. They swarm around you and kill you. " + 
					"<br>No one says no to a rat gang, you idiot." + 
					"<br>" + 
					"<br>You lose.", 
			"choices" : []
	},
	//11 You ask for more time and they kill you. [LOSE]
	"11" : { "title" : "You ask for more time to consider your decision.", 
			"text" : "The rats tell you that if you want to stall when making decisions, you should have gone into politics. " + 
					"<br>They kill you for being indecisive." + 
					"<br>" + 
					"<br>You lose.", 
			"choices" : []
	},
	//12 Grab leader's paw for secret signal. (7>12, 1)
	"12" : {
		"title" : "You grab the leader's paw and shake it.", 
		"text" : "You grab the leader's paw and shake vigorously in an elaborate fashion, attempting to end with an awkward fist bump." + 
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
		"choices" : [13, 14]
	},
	//13 Try to escape Rat Gang by running left, they corner and kill you. [LOSE]
	"13" : {
		"title" : "You run left.",
		"text" : "You run into a dead end and the rat gang kills you. Too bad." + 
				"<br>" + 
				"<br>You lose.", 
		"choices" : []
	},
	//14 Try to escape Rat Gang by running right, escape. Run into Tunnel Three: Homeless Guy (16) (14>16, 0)
	"14" : {
		"title" : "You run right.", 
		"text" : "You run as fast as you can to the right, " + 
				"<br>pushing your legs with all your strength, dodging massive piles of trash. " + 
				"<br>The irate voices of the rat gang fade in the distance. They cannot tell which way you've gone." + 
				"<br>You escape the rat gang and run at full speed through the sewer. " + 
				"<br>You run and run til long after you can't hear the gang anymore. You are now hopelessly lost, but you have no choice but to keep walking." + 
				"<br>The tunnel starts to smell weird.", 
		"choices" : [16]
	},
	//15 Don't talk to the Rat Gang at all. (6>15, 1) Run into Tunnel Two: Subway (29) (15>29, 0)
	"15" : {
		"title" : "Run away as fast as you can.", 
		"text" : "These rats are too dangerous, so you decide to make a run for it. " + 
				"<br>Without waiting to hear what they're planning for you, you take off running in the sewer. " + 
				"<br>You pay no attention to where you're going; it doesn't matter as long as you get away. " + 
				"<br>You run as fast as you can for what seems like miles, but the rats do not seem to be chasing you. " + 
				"<br>You pause for breath." + 
				"<br>You've escaped the rat gang. " + 
				"<br>You go deep into the sewer, wander round lots of twists and turns and whatnot and you get pretty tired and very hungry. " + 
				"<br>As you walk, the tunnel widens considerably and you feel a bit of a breeze.", 
		"choices" : [29]
	},

	//Tunnel Three: Tunnel With A Weird Smell (Homeless Man)

	//16 Choose the tunnel with a weird smell at the beginning of the game. (2>16, 1)
	"16" : {
		"title" : "Tunnel with a weird smell. Promising.", 
		"text" : "You go down the tunnel. " + 
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
		"choices": [17, 18]
	},
	//17 Tell the Homeless Man you're a rat.
	"17" : {
		"title" : "Tell him you're a rat.", 
		"text" : "You start to remind the homeless man that you're a rat, not a person, but rats don't speak English, so you stay silent.", 
		"choices" : [18]
	},
	//18 Don't tell the Homeless Man you're a rat.
	"18" : {
		"title" : "Don't say anything and leave him his simple pleasures.", 
		"text" : "\"How's it going?\" the homeless man asks you. " + 
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
		"choices" : [19, 24]
	},
	//Tunnel Three: Steal food from the Homeless Man?
	//19 Steal the food.
	"19" : {
		"title" : "Steal the food.", 
		"text" : "You dart toward the homeless guy and grab the biscuit from his pocket. " + 
				"<br>Though the guy is wrapped up in how he helped repaint the Sistine Chapel, he definitely notices when you grab the biscuit." + 
				"<br>\"My biscuit! My biscuit!\" he cries, standing up and banging around the sewer in a rabid frenzy. " + 
				"<br>He swings at you and tries to grab your tail, but you're too quick for him. " + 
				"<br>As he darts around after you, you notice that the man has even more food" + 
				"<br>--an entire corn muffin--" + 
				"<br>stashed in his bag in the corner. Want to stay and get the corn muffin or run away while the getting is good?", 
		"choices" : [20, 21]
	},
	//20 Stay around for more food and the Homeless Man kills you. [LOSE]
	"20" : {
		"title" : "Stick around for more food.", 
		"text" : "The homeless man grumbles that it was a really dick move of you to steal food from him, " + 
				"<br>since he's homeless and all. He smashes you with his foot and kills you." + 
				"<br>" + 
				"<br> You lose.", 
		"choices" : []
	},
	//21 Run away after stealing the food.
	"21" : {
		"title" : "Run away.", 
		"text" : "You dart away from the homeless man as fast as you can down the tunnel. " + 
				"<br>You hear him calling you, in his creepy homeless-dude-dwelling-in-a-sewer voice, for you to come back. " + 
				"<br>\"Don't go, don't leave me, little rat. You're my only friend.\" " + 
				"<br>Kinda pathetic, but also oddly touching.", 
		"choices" : [22, 23]
	},
	//22 Go back to the pleading Homeless Man and he kills you. [LOSE]
	"22" : {
		"title" : "Go back to the homeless man.", 
		"text" : "You return to the homeless man and squeak timidly to him, apologizing for stealing his food. " + 
				"<br>The homeless man shows no mercy and smashes you with his foot. " + 
				"<br>You die." + 
				"<br>" + 
				"<br>You lose.", 
		"choices" : []
	},
	//23 Don't go back to the Homeless Man, keep running and end up in Tunnel Two: Subway (29)
	"23" : {
		"title" : "Who cares? Keep running.", 
		"text" : "Indifferent to human suffering, you race across the sewer's slimy floor, dodging massive puddles of sludge. " + 
				"<br>You realize that the tunnel is starting to widen, the amount of human and animal waste is decreasing, " + 
				"<br>and you feel a breeze on your face. You're totally lost at this point, but something exciting seems up ahead.", 
		"choices" : [29]
	},
	//Tunnel Three: Credit Card Fraud
	//24 Don't steal food from the Homeless Man.
	"24" : {
		"title" : "Let him have it. He's a homeless dude.", 
		"text" : "Even though you're hungry, you decide not to steal the food, you bleeding heart liberal, you. " + 
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
		"choices" : [25, 27, 28]
	},
	//25 Agree to commit credit card fraud.
	"25" : {
		"title": "Hell yeah. Tell the homeless man you're happy to break the law with him.",
		"text" : "The homeless dude is super psyched. " + 
				"<br>He pumps his fists, grabs you, and puts you on his shoulder." + 
				"<br>\"Let's go to the surface!\" he cries. \"Financial privacy and security are things of the past as long as we're in business!\"" + 
				"<br>With you on his shoulder, the homeless man navigates the tunnels, " + 
				"<br>his long legs running fast, til he comes to a sewer grate. It's been a while since you've been up on the surface, " + 
				"<br>and you're pretty excited. You and the homeless man climb up the sewer wall and push open the sewer grate, " + 
				"<br>crawling out into the sunlight.", 
		"choices" : [26]
	},
	//26 Head to the surface with the Homeless Man, you both get arrested. [LOSE]
	"26" : {
		"title" : "The surface! The surface!", 
		"text" : "You feel the warm, blessed light of the sun on your fur. " + 
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
		"choices" : []
	},
	//27 Delicately decline to commit credit card fraud. End up in Tunnel Two: Subway (29)
	"27" : {
		"title" : "Delicately tell the homeless man you're not really comfortable with the situation, but you wish him luck.",
		"text" : "He grumbles to himself about Jennifer Aniston and falls into a drunken slumber. " + 
				"<br>You dart away down the sewer, feeling awkward. Maybe you should go back and apologize to the homeless man. " + 
				"<br>He seems like he's in a bad place.", 
		"choices" : [23]
	},
	//28 Angrily decline to commit credit card fraud and the Homeless Man kills you. [LOSE]
	"28" : {
		"title" : "Angrily tell the homeless man that credit card fraud is illegal, immoral, and something you want no part of.",
		"text" : "The homeless man, who is already kinda unstable if you haven't noticed, gets upset and kills you." + 
				"<br>" + 
				"<br>You lose.", 
		"choices" : []
	},

	//Tunnel Two: Subway (Wide Tunnel)

	//Tunnel Two: On the train.
	//29 Choose the wide tunnel at the beginning of the game. (2>29, 2)
	"29" : {
		"title" : "Onward into the wide tunnel.",
		"text" : "This tunnel is pretty loud. It leads into a subway tunnel. " + 
				"<br>You wander around on the tracks near a platform when you hear a train coming." + 
				"<br>Oh snap.", 
		"choices" : [30, 31, 32]
	},
	//30 Face down the train and get crushed. [LOSE]
	"30" : {
		"title" : "Stand your ground. You're not afraid!",
		"text" : "The train crushes you and you die. " + 
				"<br>What did you think was going to happen?" + 
				"<br>" + 
				"<br>You lose.", 
		"choices" : []
	},
	//31 Jump out of the train's way, still get lost and die. [LOSE]
	"31" : {
		"title" : "Jump out of the train's way.",
		"text" : "You survive and keep wandering down the tunnel via many twists and turns. " + 
				"<br>Unfortunately, you have no idea where you're going, and you find yourself hopelessly lost. " + 
				"<br>You're a rat, it's a sewer...but things have really spiraled out of your control here, " + 
				"<br>and the whole almost being killed by a massive oncoming train thing has you a little shook up. " + 
				"<br>You wander, and as you get tired, choose sludge-covered tunnel paths at random." + 
				"<br>" + 
				"<br>You get lost and die. And you were so careful to get out of that train's way! Drat.", 
		"choices" : []
	},
};