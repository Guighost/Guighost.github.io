/*

This is the state which will preload all graphic and sound assets

It has three functions:

* init: to be automatically executed once the state is called

* preload: to be automatically executed once the state is being preloaded

* create: to be automatically executed once the state is finally created

*/

loading = {

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
	
	*/
     
	preload: function(){
	
		/* 
		
		do you remember the developer logo and the loading bar we loaded in
		Boot state? It's time to place them on the stage.
		
		With game.add.sprite(160, 340, "loading") we place a sprite on the state
		using these parameters:
		
		160: horizontal coordinate, in pixels
		340: vertical coordinate, in pixels
		"loading": the name we gave to the resource
		
		*/
	
          var loadingBar = game.add.sprite(160, 340, "loading");
          
          /*
          
          normally sprites anchor point is on the upper left corner but we can
          change it with anchor.setTo method.
          
          This way we place it in the centre of the image. Your image could look
          blurry if its horizontal or vertical size is not an even number
          
          */
		
		loadingBar.anchor.setTo(0.5);
		
		/*
		
		Phaser has a built in method to turn any image into a loading bar.
		
		This is how we set it:
		
		game.load.setPreloadSprite(loadingBar)
		
		*/
		
          game.load.setPreloadSprite(loadingBar);
          
          /*
          
          In the same way we add the logo. Also notice how we can set the anchor
          on the fly while declaring the variable
          
          */
          
          var logo = game.add.sprite(160, 240, "logo").anchor.setTo(0.5);
          
		/*
		
		Done with the logo, here we are preloading the remaining images in the
		same way explained in Boot state
		
		let's have a look at the assets we preload:
		
		background.png: game backgound
		
		gametitle.png: game title "Globez"
		
		playbutton.png: "play" button
		
		blackfade.png: black image to fake stage fade in/out effect
		
		timebar.png: colored time bar
		
		gameover.png: game over title
		
		*/
		
		game.load.image("background","assets/sprites/background2.png");
        game.load.image("gametitle", "assets/sprites/gametitle2.png");
        game.load.image("gametitle3", "assets/sprites/gametitle3.png");
        game.load.image("logo50", "assets/sprites/logo50.png");
        game.load.image("levelUp", "assets/sprites/levelUp.png");
        game.load.image("gamefoot", "assets/sprites/footerImg.png");
          game.load.image("playbutton","assets/sprites/playbutton.png");
          game.load.image("blackfade","assets/sprites/blackfade.png");
          game.load.image("timebar", "assets/sprites/timebar2.png");
          game.load.image("multiBack", "assets/sprites/multiplierBack.png");
          game.load.image("gameover","assets/sprites/gameover.png");
          
          /*
          
          sprite sheets are images with several images in them, carefully placed in a grid.
          
          We can load a sprite sheet with
		
		game.load.spritesheet("settings","assets/sprites/settings.png",24,24)
		
		"settings" is the internal name we will be using to reference such image
     	"assets/sprites/settings.png" is the path where the image is located
		24 is the horizontal size of each sprite inside the sprite sheet
		24 is the vertical size of each sprite inside the sprite sheet
		
		starting from the top left ending to bottom right, each sprite will be identified
		with a frame number, with the first frame marked as zero
		
		the images are:
		
		tiles.png: all globes, with different colors
		
		arrows.png: left and upper left arrows, to be rotated to generate all arrows
		
		points.png: the points given for each column
		
		settings.png: sound on/off button
		
		instructions.png: instructions picture	
          
		*/
          
          game.load.spritesheet("tiles","assets/sprites/tiles3.png",game.global.tileSize,game.global.tileSize);
		game.load.spritesheet("arrows","assets/sprites/arrows.png",game.global.tileSize*3,game.global.tileSize*3);
		game.load.spritesheet("points","assets/sprites/points.png",game.global.tileSize,game.global.tileSize);
          game.load.spritesheet("settings","assets/sprites/settings.png",24,24);
          game.load.spritesheet("instructions","assets/sprites/instructions.png",160,160);
          
          /*
          
          here we are loading the audio, with
          
          game.load.audio("pop_1",["assets/sounds/pop_1.mp3","assets/sounds/pop_1.ogg"]);
          
          "pop_1" is the internal name we will be using to reference such sound
          ["assets/sounds/pop_1.mp3","assets/sounds/pop_1.ogg"] is the array containing various
          (actually two) file types of the given sound. I would suggest to include at least
          mp3 and ogg files in order to have your sounds compatible with as much devices
		as possible.
		
		We are loading three "pop" sounds, three "remove" sounds and three "tick sounds".
		
		Each category will play a random sound when needed          
          
          */
          
          game.load.audio("pop_1",["assets/sounds/pop_1.mp3","assets/sounds/pop_1.ogg"]);
          game.load.audio("pop_2",["assets/sounds/pop_2.mp3","assets/sounds/pop_2.ogg"]);
          game.load.audio("pop_3",["assets/sounds/pop_3.mp3","assets/sounds/pop_3.ogg"]);
          game.load.audio("remove_1",["assets/sounds/remove_1.mp3","assets/sounds/remove_1.ogg"]);
          game.load.audio("remove_2",["assets/sounds/remove_2.mp3","assets/sounds/remove_2.ogg"]);
          game.load.audio("remove_3",["assets/sounds/remove_3.mp3","assets/sounds/remove_3.ogg"]);
          game.load.audio("tick_1",["assets/sounds/tick_1.mp3","assets/sounds/tick_1.ogg"]);
          game.load.audio("tick_2",["assets/sounds/tick_2.mp3","assets/sounds/tick_2.ogg"]);
          game.load.audio("tick_3",["assets/sounds/tick_3.mp3","assets/sounds/tick_3.ogg"]);
          
          /*
          
          Although Phaser supports direct text output, it's recommended to use bitmap fonts,
          especially if you plan to port your game into a native application.
          
          The creation of a bitmap font is very easy and I higly recommend the
          FREE online tool Littera: http://kvazars.com/littera/
          
          Then you load a bitmap font this way:
          
          game.load.bitmapFont("systemfont", "assets/fonts/systemfont.png", "assets/fonts/systemfont.fnt");
          
          "systemfont" is the internal name we will be using to reference such font
          "assets/fonts/systemfont.png" is the path where the font image is located
          "assets/fonts/systemfont.fnt" is the path where the font information is located
          
          don't worry about the creation of .png and .fnt files, Littera handles everything for you
          
          systemfont is the font used to display instructions how to play
          
          scorefont is the font used to display the score 
          
          */
          
          game.load.bitmapFont("systemfont", "assets/fonts/systemfont.png", "assets/fonts/systemfont.xml");
		game.load.bitmapFont("scorefont", "assets/fonts/scorefont.png", "assets/fonts/scorefont.xml");    
	},
	
	/*
     
     create: to be automatically executed once the state is finally created
     
     here we just switch to GameTitle state, moving to gametitle.js
	
	*/
	
  	create: function(){
		game.state.start("GameTitle");
	}
}     