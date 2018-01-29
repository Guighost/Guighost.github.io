/*

You have to explain of to play your game, and this is the right state

It has three functions:

* init: to be automatically executed once the state is called

* create: to be automatically executed once the state is finally created

* nextPage: the game we are building is very easy to play, and instructions can
  easily fit in one single page. Anyway, to make something more universal and reusable,
  everything was made to be able to display as much instructions pages as you want,
  simply adding string elements into howToPlay array declared in main.js
  nextPage will display next instructions page, if any, or make the game start if
  you are currently displaying the last instructions page.
  
We also need a couple of global variables
  
* infoText is the instructions text to display

* infoImage is the instructions image to display     

*/

var infoText;
var infoImage;

howToPlay = {

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
     
     this is where we show the first instructions page
	
	*/
     
  	create: function(){
     
          /*
          
          here we are just adding the background image as seen in GameTitle state
          
          */
     
  		game.add.image(0, 0, "background");
          
          /*
          
          and this is how we add a bitmap text thanks to the bitmap fonts loaded in Loading
          state:
          
          game.add.bitmapText(0, 240, "systemfont", game.global.texts.howToPlay[0], 24);
          
          0: the horizontal position, in pixels
          240: the vertical position, in pixels
          "systemfont": the name we gave to the font
          game.global.texts.howToPlay[0]: the string to print
          24: the size of the font
          
          */
          
  		infoText = game.add.bitmapText(0, 240, "systemfont", game.global.texts.howToPlay[0], 24);
          
          /*
          
          to keep track of current page, e assign a custom attribute called "page"
          
          */
          
  		infoText.page = 0;
          
          /*
          
          here is how we set text alignment
          
          */
          
  		infoText.align = "center";
          
          /*
          
          once text aligment is set to "center", we can update x position to place it
          in the horizontal center of the page
         
          game.width returns the width of the game, in pixels
         
          infotext.textWidth returns the width of the text, in pixels 
          
          */
          
  		infoText.x = (game.width - infoText.textWidth) / 2;
          
          /*
          
          in the same way we already saw a lot of times, we are adding an image
          showing a picture of the game to better explain how to play
          
          */
          
          infoImage = game.add.image(80, 40, "instructions");
          
          /*
          
          we want the player to move to next page or start the game by clicking or
          tapping everywhere, so with
          
          game.input.onDown.add(this.nextPage, this);
          
          we listen for any "down" input, which can be both a click or a tap, to
          call nextPage function
          
          */
          
          game.input.onDown.add(this.nextPage, this);     
	},
     
     /*
     
     nextPage function will show next instructions page or start the game if the player
     was already looking at the last page
     
     */
     
     nextPage: function(){
     
          /*
          
          this is how I see if the player still has to reach the last instructions page
          
          */
     	if(infoText.page < game.global.texts.howToPlay.length-1){
          
               /*
               
               if the player still has to reach the last instructions page, first we
               increase "page" attribute because we are moving to next page               
               
               */
          
	     	infoText.page ++;
               
               /*
               
               we also syncronize the instructions image frame with the text
               
               */
               
               infoImage.frame = infoText.page;
               
               /*
               
               then we update "text" property to next information string               
               
               */
               
	     	infoText.text = game.global.texts.howToPlay[infoText.page]
               
               /*
               
               we have to use "updateText" method to make the engine recalculate
               text width...
               
               */
               
	          infoText.updateText();
               
               /*
               
               ... so that we can center it again like we did before
               
               */
               
	          infoText.x = (game.width - infoText.textWidth) / 2;
          }
          else{
          
               /*
               
               this is the case the player already had the latest instructions page
               on the screen, so it's time to launch the game itself.
               
               Can you recognize te code? It's just our good old fake fade to black
               effect with the callback function             
               
               */
                    	
          	var blackFade = game.add.sprite(0 ,0, "blackfade");
			blackFade.alpha = 0;
			var fadeTween = game.add.tween(blackFade);
			fadeTween.to({
				alpha: 1
			}, 500, Phaser.Easing.Cubic.Out, true);
			fadeTween.onComplete.add(function(){
               
                    /*
                    
                    and that's where we jump to "TheGame" state, located in thegame.js
                    
                    */
               
				game.state.start("TheGame");
			}, this);
		
		}
     }
}