/*

This is the first state to be launched, when the game starts.

It has three functions:

* init: to be automatically executed once the state is called

* preload: to be automatically executed once the state is being preloaded

* create: to be automatically executed once the state is finally created

*/

boot = {

	/*
	
	init function is automatically executed once the state is called
	
	we just call game.log function you will find in main.js to output 
	on the console the game state you are currently on.
	
	*/

     init: function() {
          game.log();
     },
     
     /*
     
     preload: to be automatically executed once the state is being preloaded
     
     here we preload the first to images which will be displayed on the screen:
     the loading bar and the developer logo. We don't show them at the moment.
     
     With game.load.image("loading", "assets/sprites/loading.png") we preload an image
     
     "loading" is the internal name we will be using to reference such image
     "assets/sprites/loading.png" is the path where the image is located
	
	*/
     
	preload: function() {
          game.load.image("loading", "assets/sprites/loading.png");
		game.load.image("logo", "assets/sprites/logo.png"); 
     },
     
     /*
     
     create: to be automatically executed once the state is finally created
     
     here we scale the game to cover the entire screen while keeping its original
     ratio, we start a physics system to create particles later in the game,
     then we will switch to Loading state
	
	*/
     
     create: function() {
     
     	/*
     	
     	these four lines will respectively:
     	
     	* always show the entire game, never cropping it
     	
		* center the game horizontally
		
		* center the game vertically
		
		* set game size to screen size												     	
		
		*/
     
          game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.setScreenSize = true;
		
		/*
		
		setting a physics system. We will need it when we'll create particle
		effects, later in the game
		
		*/   
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		/*
		
		switch to Loading state, so move on loading.js
		
		*/
			
		game.state.start("Loading");
     }
};