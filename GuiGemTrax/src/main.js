/*

Game declaration, it's a 320x480 game, suited for a mobile landscape game.
It will be rendered on Canvas.

*/

var game = new Phaser.Game(320, 480, Phaser.CANVAS, "");

/*

In game.global object we store the main parameters of the game.
Changing these settings will heavily change the gameplay, so act on them
wisely.

Let's have a look at them:

* tileSize: size of a tile, in pixels

* tileTypes: different kind of tiles (colors) you will find in the game

* fieldSize: the number of rows and columns. In this case, it's a 6x6 game field

* offsetX: distance, in pixels, from the left of the stage and the leftmost column

* offsetY: distance, in pixels, from the top of the stage and the upper row

* tolerance: normally, in a tile based game you can find the exact location of a
  click/touch by simply looking at the tile the touch/click falls in. And this works
  most of the times. Anyway, since this is also a drawing game, you would face a 
  lot of problems when drawing diagonals if we don't introduce tolerance. Tolerance
  means a touch/click not only has to be inside the tile, but it also has to be
  close enough to its center. How close? tolerance is the power of two of the distance
  from the centre of the tile, in pixels. In this case, (20 pixels)^2 = 400

* gameTime: amount, in seconds, of game duration

* playSounds: Boolean variable which will say if we have to play sounds

* tweenSpeed: speed, in milliseconds, of the animation which will make remaning globes
  fall down when you remove some globes below them
  
* pointsArray: array with the points to be given for each column. Play the game
  for a couple of minutes to see what I mean

* texts: keeping most of your texts in a single file will help you in the process
  of translating/changing texts. Keeping texts inside the global variable is
  even better, because you will have full control of your main game customizations
  in one single place.  

*/

game.global = {
     tileSize: 50,
     tileTypes: 4,
     fieldSize: 6,
     offsetX: 10,
     offsetY: 50,
     tolerance: 400,
     gameTime: 60,
     playSounds: true,
     tweenSpeed: 400,
     pointsArray:[10,50,100,250,500,1000],
     texts: {
		howToPlay: [
			"Draw a line to match gems\nof the same type\n\nThe longer the line,\nthe higher your score",
			"Each column has a random\n multiplier each round\nTry to match gems with\n the highest score",
			"Keep an eye out for\n the timer.\nYou wil hear a clock\n when time is almost over!\n\nEnough rules\n\n PLAY"
		]
     },
     highScore: 0,
     playerLevel: 1
}

/*

game.log function just outputs on the console the game state you are currently on.

look how I get the label of the current state with

game.state.getCurrentState().state.current 

*/

game.log = function(){
	console.log("%c  Running "+game.state.getCurrentState().state.current+" state  ","color:white;background:red");
}

/*

These are all the game states.

Each state represents a game scene. Let's see them all in detail:

* Boot: first state to be launched, when the game starts

* Loading: state which will preload all graphic and sound assets

* GameTitle: state which will handle the game title

* HowToPlay: you have to explain of to play your game, and this is the right state

* TheGame: the game itlself, the core of the project

* GameOver: game over state

*/

game.state.add("Boot", boot);
game.state.add("Loading", loading);
game.state.add("GameTitle", gameTitle); 
game.state.add("HowToPlay", howToPlay);  
game.state.add("TheGame", theGame);         
game.state.add("GameOver", gameOver);

/*

We will start with Boot state, so head on boot.js and look at the code

*/ 
  
game.state.start("Boot"); 