
loading = {

	/*
		init function is automatically executed once the state is called
		we just call game.log function you will find in main.js to output 
	on the console the game state you are currently on.
		*/

     init: function() {
          game.log();
     },
            
	preload: function(){
	
          var loadingBar = game.add.sprite(160, 340, "loading");
                 
		loadingBar.anchor.setTo(0.5);
					
          game.load.setPreloadSprite(loadingBar);
                           
          var logo = game.add.sprite(160, 240, "logo").anchor.setTo(0.5);
          		
		
		game.load.image("background","assets/sprites/background2.png");
        game.load.image("gametitle", "assets/sprites/gametitle2.png");
        game.load.image("gametitle3", "assets/sprites/gametitle3.png");
        game.load.image("logo50", "assets/sprites/logo50.png");
        game.load.image("levelUp", "assets/sprites/levelUp.png");
        game.load.image("gamefoot", "assets/sprites/footerImg.png");
        game.load.image("playbutton", "assets/sprites/playbutton2.png");
        game.load.image("morebutton", "assets/sprites/morebutton.png");
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
          
          /*     loading the audio        */
          
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
             
          systemfont is the font used to display instructions how to play
          
          scorefont is the font used to display the score 
          
          */
          
          game.load.bitmapFont("systemfont", "assets/fonts/systemfont.png", "assets/fonts/systemfont.xml");
		game.load.bitmapFont("scorefont", "assets/fonts/scorefont.png", "assets/fonts/scorefont.xml");    
	},
	
	
	
  	create: function(){
		game.state.start("GameTitle");
	}
}     