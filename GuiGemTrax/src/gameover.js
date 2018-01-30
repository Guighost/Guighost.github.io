/*

This is the state which will handle game over situation

It has three functions:

* init: to be automatically executed once the state is called

* create: to be automatically executed once the state is finally created

* playTheGame: to let the player play again
  
We also need a variable
  
* saveScore to handle score passed from the game state    

*/

var savedScore;

gameOver = {

	/*
	
	init function is automatically executed once the state is called
	
	we just call game.log function you will find in main.js to output 
	on the console the game state you are currently on.
	
	Also, this is where passed score variable is managed
	
	*/
	
	init: function(){
     	game.log();
     	
     	/*
     	
     	we are displaying the score with eight digits, as seen before
     	
     	*/
     	
		savedScore = ("        "+score).slice(-8); 
	},

     /*
     
     create: to be automatically executed once the state is finally created
     
     we have to build the game over screen
	
	*/
	
  	create: function(){
	  
	   	/*
	   	
	   	adding the background, once more
	   	
	   	*/
	          
  		this.add.image(0,0,"background");
          
          /*
          
          creating the same particle effect seen in game title
          
          */
          
          var particleArray = [];
          for(var i = 0; i < game.global.tileTypes; i ++){
			particleArray.push(i)
		}
          var bubblesEmitter = game.add.emitter(160, -30, 50);
          bubblesEmitter.makeParticles("tiles", particleArray);
          bubblesEmitter.maxParticleScale = 1;
          bubblesEmitter.minParticleScale = 0.7;
          bubblesEmitter.setYSpeed(30, 40);
          bubblesEmitter.setXSpeed(-3, 3);
          bubblesEmitter.gravity = 0;
          bubblesEmitter.width = 320;
          bubblesEmitter.minRotation = 0;
          bubblesEmitter.maxRotation = 40;
          bubblesEmitter.flow(15000, 2000)
		
		/*
            db- adding high score
        */
          var oldScore = game.global.highScore;
          //try { oldScore = JSON.parse(localStorage.getItem("GuiGemTrax_HighScore"));}
          //catch (error) {
          //    console.log(error);
          //    oldScore.savedScore = 0;
          //        }
        
          console.log("oldScore = " + game.global.highScore);
          if (game.global.highScore < savedScore) {
              localStorage.setItem("GuiGemTrax_HighScore", JSON.stringify( savedScore ))            
          };
          highscoreTextM = game.add.bitmapText(40, 270, "systemfont", "Best: ", 36);
          highscoreText = game.add.bitmapText(155, 270, "scorefont", oldScore, 36);
          highscoreText.align = "center";
          highscoreText.x = ((game.width - scoreText.textWidth) / 2) + 20;

          if (oldScore < savedScore) {
              highscoreText.bitmapText = (155, 270, "scorefont", savedScore, 36);
          }


        /*
		showing and centering the score bitmap text as seen before
		
		*/
		
          scoreText = game.add.bitmapText(160, 180, "scorefont", savedScore, 48);
          scoreText.align = "center";
          scoreText.x = ((game.width - scoreText.textWidth) / 2) -20;
          
		/*
		
		placing game over title, and setting its anchor, as seen before
		
		*/
		   		
  		var gameOverTitle = game.add.image(160, 70, "gameover");
          gameOverTitle.anchor.setTo(0.5);    
		
		/*
		
		adding "play" button like in game title, calling playTheGame function
		when touched/clicked
		
		*/
		        
  		var playButton = game.add.button(160, 360, "playbutton", this.playTheGame, this).anchor.setTo(0.5);
  		playButton.clicked = false;
	},
	
	/* 
     
     playTheGame: to be executed when the player presses "Play" button
     
     it has an argument, which is the button that called the function itself, and
     it is exactly the same as the playTheGame function in game title state
     
     */
     
	playTheGame: function(button){
		if(!button.cliked){
			button.cliked = true;
			var blackFade = game.add.sprite(0 ,0, "blackfade");
			blackFade.alpha = 0;
			var fadeTween = game.add.tween(blackFade);
			fadeTween.to({
				alpha: 1
			}, 500, Phaser.Easing.Cubic.Out, true);
			fadeTween.onComplete.add(function(){
				game.state.start("TheGame");
			}, this);	
		}
	}
}