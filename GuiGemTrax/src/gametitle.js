/*

This is the state which will handle the game title

It has three functions:

* init: to be automatically executed once the state is called

* create: to be automatically executed once the state is finally created

* playTheGame: to be executed when the player presses "Play" button

*/

gameTitle = {

	/*
	
	init function is automatically executed once the state is called
	
	we just call game.log function you will find in main.js to output 
	on the console the game state you are currently on.
	
	*/
	
	init: function() {
          game.log();
     },
     
     /*
     
     create: to be automatically executed once the state is finally created
     
     we have to build the game title screen itself
	
	*/
     
  	create: function(){
  	
  		/*
  		
  		first, we add the background image which will cover the entire
  		screen. Since it will cover the entire screen and won't be moved,
		no anchor point is needed
		
		*/
  	
		game.add.image(0, 0, "background");
         
		/*
		
		since a plain background isn't that nice to see, we are going to a particle
		effect with globes falling from the top of the stage to the bottom.
		
		First, we declare an array called particleArray which will contain all
		different sprites to be used in the particle effect
		
		*/
         
          var particleArray = [];
          
          /*
          
          we are going to add in particleArray array all globes types, in a numeric
          format which will represent actual globe frame for each particle. So if
          game.global.tileTypes = 6, our particleArray will be [0, 1, 2, 3, 4, 5]
          
		*/
          
		for(var i = 0; i < game.global.tileTypes; i ++){
			particleArray.push(i)
		}
		
		/*
		
		game.add.emitter adds the emitter to the stage
		
		160 is the x position, in pixels (in the horizontal center of the stage)
		-30 is the y position, in pixels (above the top of the stage)
		50 is the maximum number of particles we can have at the same time
		
		obviously, the higher the amount of particles, the more CPU consuming the game
		
		*/
		
          var bubblesEmitter = game.add.emitter(160, -30, 25);
          
          /*
          
          now it's time to decide which particles to create. As said, we are going
          to use the globez.
          
          "tiles" is the reference to the sprite sheet with all globez
          particleArray is the previously created array with all frames we want
          
		*/
          
          bubblesEmitter.makeParticles("tiles", particleArray);
          
          /*
          
          each particle can have a different scale, here is how we say we want
          particles to range from 70% to 100% of the original sprite size
          
          */
          
          bubblesEmitter.maxParticleScale = 1;
          bubblesEmitter.minParticleScale = 0.7;
          
          /*
          
          each particle can have a different vertical speed, here is how we say we want
          particles to range from 30 to 40. Although it's not explained anywhere, I believe
		it's pixels per second 
          
          */
          
          bubblesEmitter.setYSpeed(30, 40);
          
          /*
          
          same thing for the horizontal speed, ranging from -3 to 3
          
          */
          
          bubblesEmitter.setXSpeed(-3, 3);
          
          /*
          
          no need to set the gravity this time since we already set vertical speed,
          but just in case, here is how you would set the gravity
          
          */
          
          bubblesEmitter.gravity = 0;
          
          /*
          
          the emitter could be a single point, so all particles will spread from
          such point, or could be some kind of a line, like in this case.
          The emitter has a width of 320 pixels, which is game width.
          
          */
          
          bubblesEmitter.width = 320;
          
          /*
          
          particles can move while keeping their default rotation (0 degrees) or
          have a rotation speed. minRotation and maxRotation properties handle
          particle angular velocity.
          
          */
          
          bubblesEmitter.minRotation = -40;
          bubblesEmitter.maxRotation = 40;
          
          /*
          
          and finally this is how we fire particles from the emitter: bubblesEmitter.flow(15000, 2000)
          
          15000 is the lifespan of a particle, in milliseconds. Our particles will die after 15 seconds
          2000 is the frequency, in milliseconds, of particle generation. We will create a new particle
          every two seconds.
          
          */
          
          bubblesEmitter.flow(15000, 2000);
		
          /*
  		
  		done with the particles, we add game title in front of them
		
		*/
                    
          game.add.image(160, 70, "gametitle").anchor.setTo(0.5);
          game.add.image(160,420, "gamefoot").anchor.setTo(0.5);
		
          /*
          
          This is the first interactive thing we meet in the game: a button.
          Basically the button acts just like an image, but it also reacts to clicks
          and touches firing a callback function.
          
          As if it was an image, next line places "playbutton" graphic assets at 160,280
          and sets its anchor point to the centre of the image, but it will also call
          playTheGame function if it's clicked or touched.
          
          */
                   
  		playButton = game.add.button(160, 210, "playbutton", this.playTheGame, this).anchor.setTo(0.5);

            /* GG add for More Games button when touched/clicked        	            */
            var moreButton1 = game.add.button(160, 340, "morebutton", function () { window.location.href = "../index.html" }, this).anchor.setTo(0.5);
            moreButton1.clicked = false;

         
          /*
          
          we can also set custom attributes like in this case, where a Boolean
          custom attribute "clicked" is set to false. All in all, it hasn't been
          clicked yet, we just created it.
          
          */  
             
          playButton.clicked = false;
		
          /* 
          
          at this time the title screen is ready. we have a background, a title,
          a "play" button and even some particles to eye candy effects.
          
          since we want more, we want all these element to fade from black rather
          than suddenly appear on the screen, and in order to do this, we'll make
          a dirty trick: we place a completely opaque black image in front of all 
          elements and we'll fade it out.
          
          First, we need the black image, you should already know how to do it since
          you already placed the background image
          
          */
          
          var blackFade = game.add.image(0 ,0, "blackfade");
          
          /*
          
          we will be using a tween to fade out the black image, and you can declare a
          tween this way:
          
          var fadeTween = game.add.tween(blackFade);
          
          where blackFade is the black image previously declared
          
          */
          
          var fadeTween = game.add.tween(blackFade);
          
          /*
          
          once the tween has been declared, we have to tell which property (or properties)
          to tween, the tween time and the easing.
          
          fadeTween.to does the job.
          
          {alpha:0} is the object with all properties to tween, in this case we'll bring alpha
          to zero, making it completely transparent
          
          2000 is the duration of the tween, in milliseconds
          
          Phaser.Easing.Linear.Out is the easing of the tween
          
          true means "start the tween now" 
          
          */
          
		fadeTween.to({
			alpha: 0
		}, 2000, Phaser.Easing.Linear.Out, true);  
	},
     
     /* 
     
     playTheGame: to be executed when the player presses "Play" button
     
     it has an argument, which is the button that called the function itself
     
     */
    loadGG1: function(button) {
            
    window.open("http://guighostgames.com/", "_self")

    },
	playTheGame: function(button){
     
          /*
          
          we want to execute the content of the function only once, so the first thing
          is to check if "clicked" property of the button is false. Do you remember?
          We set this property when we added the "play" button on the screen
          
          */
     
		if(!button.cliked){
          
               /*
               
               we said we wanted to execute the content of the function only once,
               so to prevent it to be executed again, the first thing to do is setting
               "clicked" property to true.
               
               */
               
			button.cliked = true;
               
               /*
               
               just like we placed a fully opaque black image to turn it transparent before,
               now we'll fake a fade out effect of the screen by adding a completely transparent
               black image, then tween it to fully opaque. Basically the complementary operation
               of what we've seen before
               
               */
               
			var blackFade = game.add.image(0 ,0, "blackfade");
			
               /*
               
               See it? We start with alpha = 0 this time, to tween it to 1
               
               */
               
               blackFade.alpha = 0;
               
               /*
               
               here is the tween itself, notice we changed the easing to
               Phaser.Easing.Cubic.Out
               this is just to show you another easing, you can use the linear easing
               as seen before
               
               */
               
			var fadeTween = game.add.tween(blackFade);
			fadeTween.to({
				alpha: 1
			}, 500, Phaser.Easing.Cubic.Out, true);
               
               /*
               
               when the player presses "play" we want to load next state, but only
               after the title screen has completely faded out. So we need to set the
               onComplete event on the tween, to call a callback function.
               
               */
               
			fadeTween.onComplete.add(function(){
                    
                    /*
                    
                    time to switch to HowToPlay state, which will show you how to play the game,
                    time to move to howtoplay.js
                    
                    */
               
				game.state.start("HowToPlay");
			}, this);	
		}
	}
}