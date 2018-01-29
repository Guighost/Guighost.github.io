/*

This the game itlself, the core of the project

It has nineteen functions:

* init: to be automatically executed once the state is called

* preload: to be automatically executed once the state is being preloaded

* create: to be automatically executed once the state is finally created

* createLevel: to create the level

* addTile: to add a new globe to the stage

* pickTile: to be called when the player picks a globe with the mouse or the finger

* moveTile: to be called once the player picked a globe, to see player's next moves

* releaseTile: to be called when the player releases the mouse/finger

* tilesFallDown: to handle globes falling down once the player removed some of them

* fallDownComplete: to call when no more tiles fall down

* createNewTiles: to call when it's time to create new tiles to replenish the stage

* isTilePicked: to check if a globe has already been picked

* placeArrow: to place an arrow on the state, connecting two globes

* removeLastArrow: to remove the latest arrow placed, to allow backtrack

* holesBelow: to count how many holes we have under a given globe

* updateCounter: to update time counter

* gameOver: to be called to switch to game over status

* shufflePoints: to shuffle column points

* toggleSound: to toggle sound on/off

We also need some global variables:

* tileGroup is the group which will contain all globes

* arrowGroup is the group which will contain all arrows

* pointsGroup is the group which will contain all points at the end of each column

* tileArray is the array with the tiles in the game field

* pointsSpriteArray is the array with all sprites of the points at the end of each column

* pointsInternalArray is the array with the actual value of each column

* timeBar is the time bar which will show how much time left we have to play

* timeLeft is the time left to play

* arrowArray is the array which will contain all arrows connecting two globes

* visitedTiles is the array containing all visited tiles

* operationsInQueue is a temporary variable to manage particle explosions

* scoreText is the text which will show the score

* score is the score

* emitter is the emitter of globes explosion particles

* pop is the array of all pop sounds

* remove is the array of all remove sounds

* tick is the array with all clock sounds

*/

var tileGroup;
var arrowGroup;
var pointsGroup;
var tileArray = [];
var pointsSpriteArray = [];
var pointsInternalArray = [];
var timeBar;
var timeLeft;
var arrowArray = [];
var visitedTiles = [];
var operationsInQueue = 0;
var scoreText;
var score;
var highScore2;
var emitter;
var pop = [];
var remove = [];
var tick = [];
var levelText2;



theGame = {
    
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
     
     here we start to make the game run
	
	*/
	
  	create: function(){
            this.savedData = localStorage.getItem("GuiGemTrax_HighScore") == null ? { savedScore: 0 } : JSON.parse(localStorage.getItem("GuiGemTrax_HighScore"));
            console.log(this.savedData);
            highScore2 = this.savedData.savedScore;
            console.log("highscore = " + highScore2);
            game.global.highScore = highScore2;

          /*
          
          here we are just adding the background image as seen before
          
          */
			   
	  	game.add.image(0, 0, "background");  
  	
  	     /*
          
          placing the sound on/off button in the bottom right of the screen. When
          clicked/touched, it will call toggleSound function
          
          */
  	
          var soundButton = game.add.button(286,446,"settings",this.toggleSound,this);
          
	     /*
	     
	     if game.global.playSounds is true, then show frame zero - the one which
	     represents the sound is on
	     
	     */
	
          if(game.global.playSounds){
               soundButton.frame = 0;
          }
          
          /*
	     
	     if game.global.playSounds is not true, then show frame one - the one which
	     represents the sound is off
	     
	     */
          
          else{
               soundButton.frame = 1;
          } 
          
          /*
          
          at this time we have to create the level, we delegate createLevel function
          to do it
          
          */
          
  		this.createLevel(); 
  		
  		/*
  		
  		the timebar is made by two instance of the same image placed one above another.
  		The timebar in front is the one which will reduce at each second to show you
  		the time is running, while the other timebar will just stand in the back with
  		a low opacity.
  		
  		The resulting effect is interesting as it gives a clear idea of time running out
  		
  		Since images added later in the script will appear on the top of the stage, we first
  		add the background time bar
  		
  		*/
            var title2 = game.add.image(10, 0, "gametitle3");
            title2.x = (game.width / 2) - (title2.width / 2);
            var logo2 = game.add.image(10, 0, "logo50");
            var levelText = game.add.bitmapText(259, 7, "systemfont", "Level", 18);
            levelText2 = game.add.bitmapText(273, 27, "scorefont", game.global.playerLevel, 22);


		var backTimeBar = game.add.image(10, 412, "timebar");

        var multiBack = game.add.image(10, 352, "multiBack");
        multiBack.alpha = 0.7;

		/*
		
		once added, we set it to almost transparent
		
		*/
		
		backTimeBar.alpha = 0.2;
		
		/*
		
		then, in the same position, we add the main time bar, the one which will 
		get shorter and shorter as time runs out
		
		*/
		    
  		timeBar = game.add.image(10, 412, "timebar");
  		
  		/*
  		
  		to show how time is running, we need to reduce timeBar size, by cropping it.
  		
  		Setting cropEnabled property to true will allow us to crop an image.
  		
  		*/
  		
		timeBar.cropEnabled = true;
  	 
  	 	/*
  	 	
  	 	here we are just populating pop, remove and tick arrays with the proper sounds.
  	 	
  	 	To add a sound we use
  	 	
  	 	game.add.audio("pop_1", 1);
  	 	
  	 	"pop_1": the name we gave to the resource
  	 	
  	 	1: the volume, ranging from 0 to 1. This means "full volume"		     	 	
  	 	
  	 	*/
          
		pop[0] = game.add.audio("pop_1", 1);
          pop[1] = game.add.audio("pop_2", 1);
          pop[2] = game.add.audio("pop_3", 1);
          remove[0] = game.add.audio("remove_1", 1);
          remove[1] = game.add.audio("remove_2", 1);
          remove[2] = game.add.audio("remove_3", 1);
          tick[0] = game.add.audio("tick_1", 1);
          tick[1] = game.add.audio("tick_2", 1);
          tick[2] = game.add.audio("tick_3", 1);
          
          /*
          
          in the same way we added instructions text in HowToPlay state, we are adding
          and horizontally centering a bitmap text with the current score. 
          
          */
          
          scoreText = game.add.bitmapText(130, 440, "scorefont", "        ",36);
          scoreText.align = "center";
          scoreText.x = ((game.width - scoreText.textWidth) / 2) - 40;
          
          /*
		
		time to let players play! we are waiting for any input type, both a click
		or a touch, to call pickTile function. This is the same concept we saw
		during the creation of HowToPlay state when we acceted any click/input to
		show next instructions page
		
		*/
		
		game.input.onDown.add(this.pickTile, this);
		   
  	},
  	
  	/*
  	
  	createLevel function will place the tiles on the stage, ready to be picked 
  	by the player. The function will also set all game values such as score and
  	time left to their own default values
  	
  	*/
  	
	createLevel: function(){
	
		/*
		
		setting score to zero
		
		
		*/
	
          score = 0;
          
          /*
          
          setting time left to its default value
          
          */
          
		timeLeft = game.global.gameTime;  
		
		/*
		
		the game has three groups. Think about a group as a layer where you can place
		as much sprites as you want, or as a Display Object container if you are used
		to AS3.
		
		The game has three layers, one over the top of another:
		
		* tileGroup will contain all globes
				
		* arrowGroup will contain the arrows the player will draw
		
		* pointsGroup will contain score information
		
		we can add a group with game.add.group();								
		
		*/
		
		tileGroup = game.add.group();
		arrowGroup = game.add.group();
		pointsGroup = game.add.group();
		
		/*
		
		we also want some particle effects in the main game. Unlike the title
		screen where vertical speed was set with setYSpeed, now we are going
		to use the gravity to handle particle movement.
		
		*/
		
		emitter = game.add.emitter(0,0,100);
		
		/*
		
		this is how you set the gravity. Unity of measurement is unclear,
		just play with it until you get the results you want
		
		*/
		
		emitter.gravity = 250;
		
		/*
		
		setting particle scale range, as seen before
		
		*/
		
		emitter.minParticleScale = 0.30;
		emitter.maxParticleScale = 0.45;
		
		/*
		
		these two "for" loops will create the game field itself, iterating
		through all rows and columns according to field size
		
		*/
		    			
  		for(var i = 0; i < game.global.fieldSize; i ++){
			tileArray[i] = [];
			for(var j = 0;j < game.global.fieldSize; j ++){
				
				/*
				
				the creation of the globe itself is made by addTile function,
				which takes as arguments the row and the column where to place
				the tile
				
				*/
				
				this.addTile(i, j);
			} 
		}
		
		/*
		
		this "for" loop just places the score images under each game field column
		
		*/
		
		for(i = 0; i < game.global.fieldSize; i ++){
		
		     /*
		     
		     determining score image position according to tile size and offset
		     
		     */
		
			var pointsXPos = game.global.offsetX + i * game.global.tileSize + game.global.tileSize / 2;
			var pointsYPos = game.global.offsetY + game.global.fieldSize * game.global.tileSize + game.global.tileSize / 2;
			
			/*
			
			adding score image
			
			*/
			
			var thePoints = game.add.image(pointsXPos, pointsYPos, "points");
			
			/*
			
			setting the anchor in the center
			
			*/
			
			thePoints.anchor.setTo(0.5);
			
			/*
			
			placing the newly created score image into pointsSpriteArray array
			
			*/
			
			pointsSpriteArray[i] = thePoints;
			
			/*
			
			we said we would be using groups, and that's how you place an image
			into a group: with
			
			pointsGroup.add(thePoints); 
			
			you move to pointsGroup previously added thePoints image
			
			*/
			
			pointsGroup.add(thePoints); 
		}
		
		/*
		
		once all score images have been placed, we call shufflePoints function
		to assign each column a random score
		
		*/
		
		this.shufflePoints();
		
		/*
		
		since it's a game against time, and every second we have to update time
		bar to show players how much time left they have to play, we have to schedule
		a function to be executed at every second.
		
		We can do it with
		
		game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
		
		which will call updateCounter function every Phaser.Timer.SECOND which actually
		is one second	 
		
		*/
		
		game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);		
	},
	
	/*
  	
  	addTile function will add a tile (actually a globe) on the stage, given a row
  	and a column
  	
  	*/
	
	addTile: function(row, col){
	
	     /*
	     
	     We have to generate a random number to decide which color to assign to
	     the newly created globe
	     
	     Phaser has a nice way to generate random integer numbers. Just use
	     
	     game.rnd.between(0, game.global.tileTypes - 1)
	     
	     and you will have an integer number between 0 and game.global.tileTypes-1
	     
	     To achieve the same result with pure JavaScript, you would have to write
	     
	     Math.floor(Math.random()*game.global.tileTypes)
	     
	     */
	     
		var randomTile = game.rnd.between(0, game.global.tileTypes - 1);
		
		/*
		
		determining globe x and y position according to tile size and offset
		
		*/
		
		var tileXPos = game.global.offsetX + col*game.global.tileSize + game.global.tileSize / 2;
		var tileYPos = game.global.offsetY + row*game.global.tileSize + game.global.tileSize / 2;
		
		/*
		
		adding the globe itself. Look. This is not an image. It's a sprite.
		
		What's the difference between an image and a sprite?
		
		The difference between an image and a sprite is that you cannot animate
		or add a physics body to an image
		
		Actually, this game could be done using images only, but I wanted you
		to know there are also sprites, and in more complex situations you may
		want to use sprites rather than images
		
		I would suggest to use images for logos, menus and screens, and sprites
		for the game itself
				
		*/
		
		var theTile = game.add.sprite(tileXPos, tileYPos, "tiles");
		
		/*
		
		assigning the randomly chosen frame to the sprite
		
		*/
		
		theTile.frame = randomTile;
		
		/*
		
		we don't want all globes to look the same, so we are rotating it a bit
		by a random angle. This will improve how the game looks
		
		*/
		
		theTile.angle = game.rnd.between(-20, 20);
		
		/*
		
		placing the anchor point in the center of the sprite. Notice everything you
		learned about images applies to sprites too
		
		*/
		
		theTile.anchor.setTo(0.5);
		
		/*
		
		placing the globe in tile array
		
		*/
		
		tileArray[row][col] = theTile;
		
		/*
		
		and finally adding it to tileGroup group
		
		*/
		
	     tileGroup.add(theTile);
	},
	
	/*
  	
  	pickTile is the function called by game.input.onDown listener and will allow
  	the player to pick the first globe
  	
  	*/
	
	pickTile: function(){ 
	
		/*
		
		since this is supposed to be the first globe we pick, we are going to
		empty both arrows and visited tiles arrays
		
		*/	
	                                                          
		arrowArray = [];
          visitedTiles = [];
          
          /*
          
          we have to calculate the starting point of the click/touch, according
          to offsetX and offsetY values
          
          the interesting thing to notice is we can get touch/click coordinates with
          
          game.input.worldX and game.input.worldY
          
          */
          
		startX = game.input.worldX - game.global.offsetX;
		startY = game.input.worldY - game.global.offsetY;	
		
		/*
		
		since it's basically a tile based game, we have to convert x and y 
		touch/click coordinate into a row and a column, according to tile size
		
		*/
			
		var pickedRow = Math.floor(startY / game.global.tileSize);
		var pickedCol = Math.floor(startX / game.global.tileSize);
		
		/*
		
		it's not just a matter of "picking one tile", some other conditions must be satisfied,
		let's see them all:
		
		timeleft > 0, that is the time is not over and we are still playing
		
		pickedRow >=0, that is we picked a valid row, we have to check it because
		               this function is called anyway no matter where the player
		               clicked/touched
		               
		pickedRow < game.global.fieldSize, same concepts as before
		
		pickedCol >= 0, same concept as before applied to a column
		
		pickedCol < game.global.fieldSize, same concepts as before
		
		*/
		
		if(timeLeft > 0 && pickedRow >= 0 && pickedCol >= 0 && pickedRow < game.global.fieldSize && pickedCol < game.global.fieldSize){
			
			/*
			
			checking if we have to play a pop sound, if sound is enabled
			
			*/
			
			if(game.global.playSounds){
			
				/*
				
				choosing a random pop sound into pop array
				
				*/
			
          		var randomPop = game.rnd.between(0, pop.length - 1);
          		
          		/*
          		
          		playing the random pop sound with "play" method
          		
          		pop[randomPop].play("", 0, 1, false);
          		
          		"" is the name of the marker where to start playing the sound, if any
				   leaving it at "" will make Phaser play the full sound 
          		
          		0 is the starting position to play the sound from. From the beginning
          		  in this case
          		
          		1 is the volume (full volume)
          		
          		false means we won't loop the sound
          		
				*/
          		
          		pop[randomPop].play("", 0, 1, false);
    			}
    			
    			/*
    			
    			setting the start color, which is the globe frame. From now on,
    			all other globes must have the same color/frame to be picked
    			
    			*/
    			
			startColor = tileArray[pickedRow][pickedCol].frame;
			
			/*
			
			setting the picked globe half transparent, to give a visual feedback
			
			*/
			               
               tileArray[pickedRow][pickedCol].alpha = 0.5;
               
               /*
               
               pushing into visitedTiles array an object with row and column coordinates
               of the picked globe
               
               */
			
			visitedTiles.push({
				row: pickedRow,
				col: pickedCol
			}); 
			
			/*
			
			now we have to update the listeners. We don't have to wait anymore
			for input.onDown, so we remove it
			
			*/
			
			game.input.onDown.remove(this.pickTile, this);
			
			/*
			
			we are now waiting for input.onUp to be triggered when the player
			releases the mouse/finger, to call "releaseTile" function.
			
			*/
			
			game.input.onUp.add(this.releaseTile, this);
			
			/*
			
			to trigger mouse/finger movement we use
			
			game.input.addMoveCallback(this.moveTile, this) 
			
			which will call moveTile function
			
			*/
			
			moveIndex = game.input.addMoveCallback(this.moveTile, this)             
		}  
	},
	
	/*
	
	moveTile is the function called when the player moves the mouse/finger after
	a tile has been successfully picked
	
	*/
	
	moveTile: function(){
	
		/*
		
		retrieving row and column as we did in pickTile function
		
		*/ 
		
		var currentX = game.input.worldX - game.global.offsetX;
		var currentY = game.input.worldY - game.global.offsetY;
		var currentRow = Math.floor(currentY/game.global.tileSize);
		var currentCol = Math.floor(currentX/game.global.tileSize);
		
		/*
		
		same conditions as before: still time to play and legal row and column number
		
		*/
		
		if(timeLeft > 0 && currentRow >= 0 && currentCol >= 0 && currentRow < game.global.fieldSize && currentCol < game.global.fieldSize){		
			
			/*
			
			now that we know we picked a legal row and column, we calculate the 
			x and y coordinates of the center of the globe.
			
			*/
			
			var centerX = currentCol * game.global.tileSize + game.global.tileSize / 2;
			var centerY = currentRow * game.global.tileSize + game.global.tileSize / 2;
			
			/*
			
			then, we calculate the x and y distance from current input position
			to the center of the globe
			
			*/
			
			var distX = currentX - centerX;
			var distY = currentY - centerY;
			
			/*
			
			do you remember the tolerance we talked about in main.js? This is
			where it comes into play. If the sum of the power of two of distX
			plus the power of two of distY is less than tolerance, this means
			we are close enough to the center of the tile to say "ok we selected
			a tile"	
			
			*/
			
			if(distX * distX + distY * distY < game.global.tolerance){
			
			     /*
			     
			     next thing we have to check is: are we still inside the latest selected
			     globe? We can be sure we moved from the latest selected tile when current
			     tile row is different than latest selected tile row OR current tile column
				is different than latest selected tile column
			     
			     */
			     
				if(currentRow != visitedTiles[visitedTiles.length - 1].row || currentCol != visitedTiles[visitedTiles.length - 1].col){
					
					/*
					
					once we have quickly determined we aren't in the latest selected
					tile, we also have to see if we aren't in a previously selected
					tile.
					
					isTilePicked function works with an object argument containing the
					row the column of the tile we are checking. It will return true if
					the tile has already been picked or false if the tile hasn't aready
					been picked
					
					*/
					
					if(!this.isTilePicked({row: currentRow, col: currentCol})){
					
						/*
						
						this is the case thecurrent tile hasn't already been picked,
						that is we are going to see if we can add this tile.
						
						we have to check if this tile is adjacent to latest picked tile,
						because moving the mouse/finger very fast, the player could "jump"
						over a tile and land on another tile which is not adjacent.
						
						This is an illegal move and we have to prevent it.
						
						To check if a tile is adjacent to another, the difference between one
						column and another must range from -1 to 1, and same thing goes for the 
						rows	
						
						*/
					
						if(Math.abs(currentRow - visitedTiles[visitedTiles.length - 1].row) <= 1 && Math.abs(currentCol - visitedTiles[visitedTiles.length - 1].col) <= 1){
							
							/*
							
							retrieving the color (frame) or the newly selected tile
							
							*/
							
							var currentColor = tileArray[currentRow][currentCol].frame;
							
							/*
							
							time to make a small recap. We arrived here if:
							
							1 - current tile is not the latest selected tile
							
							2 - current tile is not one of the tiles already selected
							
							3 - current tile is adjacent to the latest selected tile
							
							the last thing to check is to see if current tile has the same
							color (frame) of the first selected tile
							
							*/
							
							if(startColor == currentColor){
							
							     /*
								
								playing a random pop sound just like before 
							     
							     */
							
                                        if(game.global.playSounds){
                                   		var randomPop = game.rnd.between(0, pop.length - 1);
                                   		pop[randomPop].play("", 0, 1, false);
                             			}
                             			
                             			/*
                             			
                             			setting the globe semi transparent just like before
                             			
                             			*/
                             			
                                        tileArray[currentRow][currentCol].alpha = 0.5;
                                        
                                        /*
                                        
                                        we will add arrows to show the path made by the
                                        player.
                                        
                                        placeArrow function will handle this, with current row
                                        and column as arguments
                                        
                                        */
                                        
								this.placeArrow(currentRow, currentCol);
	                                   if(arrowArray.length > 1){
									arrowArray[arrowArray.length - 2].frame -= 2;
								}
								
								/*
								
								pushing the coordinate object into visitedTiles
								array just like before
								
								*/
								
	                                   visitedTiles.push({
									row:currentRow,
									col:currentCol
								});	
							}
						}
					}
					else{
					
					     /*
					     
					     this is the case we moved on a tile we already picked, but it's not
					     the latest tile. Probably the player wants to backtrack the selection
					     to try another path, so we have to check if the tile we are on is the
					     penultimate we selected, in order to remove the latest and make the 
					     penultimate be the latest.
					     
					     So we are checking if current row and column match to penultimate item
					     in visitedTiles array
					     
					     */
					     
						if(currentRow == visitedTiles[visitedTiles.length - 2].row && currentCol == visitedTiles[visitedTiles.length - 2].col){
                                   
                                   /*
                                   
                                   ok, time to backtrack the move so we are going to bring
                                   the latest selected tile to full opacity to give a visual
                                   feedback we don't want to select it anymore
                                   
                                   */
							
							tileArray[visitedTiles[visitedTiles.length - 1].row][visitedTiles[visitedTiles.length - 1].col].alpha = 1;
                                   
							/*
							
							then we call removeLastArrow function which will remove
							the last arrow
							
							*/
							
							this.removeLastArrow();
							
							/*
								
							playing a random pop sound just like before 
							     
							*/
							
                                   if(game.global.playSounds){
                                   	var randomPop = game.rnd.between(0, pop.length - 1);
                                   	pop[randomPop].play("", 0, 1, false);
                             		}
                             		
                             		/*
                             		
                             		finally, we remove the latest item from visitedTiles array.
                             		
                             		Backtrack completed!!
                             		
                             		*/
                             		
                             		visitedTiles.pop();
						}		
					}
				}
			}
		}  
	},
	
	/*
	
	releaseTile is the function called when the player releases the mouse/finger.
	
	It's time to remove some globes, if the player made a successful move.
	
	*/
	
	releaseTile:function(){ 
	
	 	/*
	 	
	 	first, we remove both "up" and "move" callbacks
	 	
	 	*/
	 
		game.input.onUp.remove(this.releaseTile, this);
		game.input.deleteMoveCallback(this.moveTile, this);
          
		/*
		
		now we have to remove all arrows. The safest way to remove a sprite is
		destroy method. With 
		
		arrowArray[i].destroy();
		
		we not just remove the sprite itself but we also free some memory because
		destroys the input, event and animation handlers if present and nulls
		its reference to game, freeing it up for garbage collection
		
		*/
		
		for(var i = 0; i < arrowArray.length; i ++){
               arrowArray[i].destroy();     
          }
          
          /*
          
          since all tiles will be deselected, we bring back their alpha to 1
          
          */
          
          for(i = 0;i < visitedTiles.length; i ++){
               tileArray[visitedTiles[i].row][visitedTiles[i].col].alpha = 1;
          }
          
          /*
          
          now it's time to destroy some globes, but only if we still have time
          to play and at least three globes have been selected
          
          */
          
		if(timeLeft > 0 && visitedTiles.length > 2){
               
			/*
			
			play a random "remove" sound effect just like we played the pop
			sound before
			
			*/
			
			if(game.global.playSounds){
                    var randomRemove = game.rnd.between(0, remove.length - 1);
                    remove[randomRemove].play("", 0, 1, false);
               }
			
			/*
			
			now it's time to loop through all visited tiles, destroy them, create
			a particle effect and update the score			
			
			*/
			  
			for(i = 0; i < visitedTiles.length; i ++){
			
				/*
				
				placing the emitter in the center of the globe we are about to remove
				
				*/
							
				emitter.x = visitedTiles[i].col * game.global.tileSize + game.global.tileSize / 2 + game.global.offsetX;
				emitter.y = visitedTiles[i].row * game.global.tileSize + game.global.tileSize / 2 + game.global.offsetY;
				
				/*
				
				we will create particles of the same sprite and frame (color) of
				the globe we are removing. This will help us to achieve some kind
				of "explosion" effect.				
				
				*/
				
				emitter.makeParticles("tiles", startColor);
				
				/*
				
				here is how we will make our particle explosion:
				
				emitter.start(true, 5000, 250, 5);
				
				true means it's an explosion, all particles will burst out at once
				
				5000 is particle lifespan, in milliseconds (5 seconds)
				
				*/
				                            
		          emitter.start(true, 4000, 250, 5);
				
				/*
				
				with update method we can have the same emitter burst more than once
				in the same frame. Don't forget we need at least three explosions since
				we are removing at least three globes
				
				*/
				 
				emitter.update(); 
				
				/*
				
				once the player did a successful move, it's time to update the score adding to it
				the value of each globe column multiplied by the amount of globes removed
				
				*/
				
				score += game.global.pointsArray[pointsInternalArray[visitedTiles[i].col]] * visitedTiles.length;

                	/*
				
				DB add for Level up
                adds level
				
				*/

                if (score >= (game.global.playerLevel * 100000) && score <= (game.global.playerLevel  + 1) * 100000) {
                    game.global.playerLevel += 1;
                    levelText2.text = game.global.playerLevel;
                    timeLeft += 30;
                    if (timeLeft > game.global.gameTime) {
                        timeLeft = game.global.gameTime;

                    }
                    console.log(timeLeft);
                    var levelNotif = game.add.image((game.width / 2) - 75, 212, "levelUp");
                    game.time.events.add(Phaser.Timer.SECOND * 1, fadePicture, this);
                    game.time.events.add(Phaser.Timer.SECOND * 3, removeBonus, this);
                }
                function fadePicture() {
                    game.add.tween(levelNotif).to({ alpha: 0}, 2000, Phaser.Easing.Linear.None, true);
                 
                }
                function removeBonus() {
                    levelNotif.destroy();

                }


				/*
				
				we always want the score to be shown with 8 digits
				
				*/
				
				scoreText.text = ("        " + score).slice(-8);
				
				/*
				
				now we have to destroy globe sprite and set to null their respective
				tileArray item
				
				*/
				
				tileArray[visitedTiles[i].row][visitedTiles[i].col].destroy();
				tileArray[visitedTiles[i].row][visitedTiles[i].col] = null;	
			}
			
			/*
			
			in match-3 games you never run out of tiles: once you remove some of them,
			new ones will fall to replenish the stage.
			
			tilesFallDown function will handle this process
			
			*/
			
               this.tilesFallDown();	
		}
		
		/*
		
		this is the case we don't have to remove tiles, because the player did
		not select at least three tiles.
		
		in this case we just re-enable onDown listener to call again pickTile function
		and start the process of selecting a globe again
		
		*/
		
		else{
			this.input.onDown.add(this.pickTile, this);
		}       
	},
	
	/*
	
	tilesFallDown function will make tiles fall down when the player removed some tiles
	
	*/
	
     tilesFallDown:function(){ 
	
		/*
		
		these two "for" loops will scan the entire game field starting from
		the bottom-most row to the top-most row
		
		*/
	  
          for(var i = game.global.fieldSize -1; i >= 0; i --){
			for(var j = 0; j < game.global.fieldSize; j ++){
			
			     /*
			     
			     tileArray[i][j] != null means the tile we are looking at still
			     exists, that is it has not been removed from the stage
			     
			     */			
			
				if(tileArray[i][j] != null){
				
				     /*
				     
				     in this case, we save on a variable called "delta" the number
				     of empty tiles below current tile
				     
				     holesBelow function wants row and column as arguments and
				     returns the number of empty tiles below the given tile
				     
				     */
				
                         var delta = this.holesBelow(i,j);
                         
                         /*
                         
                         if delta is greater than zero, this means there are empty
                         spots below the current tile, and this means we have to make
                         such tile fall down by "delta" rows
                         
                         */
                         
                         if(delta > 0){
                         
                              /*
                              
                              now I am about to use some tweens to make globes fall down.
                              
                              since they all start at the same time, they SHOULD end at the
                              same time too.
                              
                              just in case, I am using a variable called operationsInQueue
                              to keep track of how many tweens I am executing.
                              
                              */
                              
                         	operationsInQueue ++;
                         	
                         	/*
                         	
                         	and this is the tween itself, you should know it at this time.
                         	
                         	I am moving down the tile by "delta" rows in game.global.tweenSpeed milliseonds.
                         	
                         	The interesting thing is I am calling fallDownComplete function once the
                         	tween is complete.
                         	
                         	*/
                         	
                         	var tileTween = game.add.tween(tileArray[i][j]);
						tileTween.to({
							y: game.global.offsetY + (i + delta) * game.global.tileSize + game.global.tileSize / 2
						},game.global.tweenSpeed,Phaser.Easing.Cubic.Out,true);
						tileTween.onComplete.add(this.fallDownComplete, this)	
                              
						/*
						
						phyiscally moving down globes means nothing if I do not
						also update tileArray array 
						
						*/
						
						tileArray[i + delta][j] = tileArray[i][j];
                              tileArray[i][j] = null;
                         }
				}	
			}
		}
		
		/*
		
		once you moved down all globes with holes below them, you will remain
		without globes at the top of the stage.
		
		createNewTiles function will create new globes to replenish the stage.
		
		*/
		
		this.createNewTiles();	  
     },
     
     /*
     
     fallDownComplete function is called when each globe fall down tween is completed
     
     */
     
     fallDownComplete:function(){   
	
	     /*
		
		this function is really simple: once a tween is completed, we decrease
		operationsInQueue variable, and once it reaches zero, we know there aren't
		tweens still running and we can re-enable onDown listener to call again
		pickTile function and start the process of selecting a globe again
		
		*/
		        
     	operationsInQueue --;
     	if(operationsInQueue == 0){
     		game.input.onDown.add(this.pickTile, this);
          }         
	},
	
	/*
	
	createNewTiles function populates the stage with new tiles once the player
	removed some of them
	
	*/
	
     createNewTiles:function(){ 
	
	 	/*
	 	
	 	looping through all COLUMNS - read carefully: COLUMNS
	 	
	 	*/
	 
          for(var i = 0; i < game.global.fieldSize; i ++){
			
			/*
			
			determining how many globes are missing from current column by
			calling holesBelow function with row argument at -1
			
			*/
			
			var holes = this.holesBelow(-1, i);
			
			/*
			
			repeating the process of creating a new globe "holes" times
			
			*/
			
			for(var j = 0; j < holes; j ++){
			
				/*
				
				now it's time to create a new globe. You could say "why don't
				you use addTile function?" and you are right, it's just we aren't placing
				the globe in its position as we did when we created the level, we
				are shifting it up by "holes" row in order to give the impression
				new tiles are falling from the top of the stage.
				
				This is the only reason I am not using addTile function.
				
				*/
			
				var randomTile = game.rnd.between(0, game.global.tileTypes - 1);
				var tileXPos = game.global.offsetX + i * game.global.tileSize + game.global.tileSize / 2;
				
				/*
				
				see it? unlike addTile function, I am placing the globe much higher,
				according to the number of holes to fill.
				
				The rest of the code remains the same
				
				*/
				
				var tileYPos = game.global.offsetY - (holes - j) * game.global.tileSize - game.global.tileSize / 2;
				theTile = game.add.sprite(tileXPos, tileYPos, "tiles");
				theTile.frame = randomTile;
				theTile.angle = game.rnd.between(-20, 20)
				theTile.anchor.setTo(0.5);
				tileArray[j][i] = theTile;
                    tileGroup.add(theTile);
				
				/*
				
				now we are adding a tween to bring the globe in its final place,
				inside the stage.
				
				we are increasing operationsInQueue again 
				
				*/
					
				operationsInQueue++;	
                    var tileTween = game.add.tween(tileArray[j][i]);
				tileTween.to({
					y: game.global.offsetY + j*game.global.tileSize + game.global.tileSize/2
				}, game.global.tweenSpeed,Phaser.Easing.Cubic.Out, true);
				tileTween.onComplete.add(this.fallDownComplete, this)		
			}
		}
		
		/*
		
		in this function we also act on score images placed on the bottom
		of each column. First, hide points by tweening their group to fully
		transparent (yes, you can use tweens on groups too!)		
		
		*/
			
		pointsTween = game.add.tween(pointsGroup);
		pointsTween.to({
			alpha: 0
		}, 400, Phaser.Easing.Cubic.Out, true);
		
		/*
		
		once the tween has finished, we call shufflePoints to randomly shuffle
		the points, then turn them to full opacity again
		
		*/
		 
		pointsTween.onComplete.add(function(){
	  		this.shufflePoints();
			pointsGroup.alpha = 1;	
		}, this);   
     },
     
     /*
     
     isTilePicked function returns true if the tile at the coordinates passed in
     tileObject argument has already been picked - that is it's already in visitedTiles
     array - or false if it's a tile yet to be picked
     
     */
     
	isTilePicked:function(tileObject){ 
	
	     /*
	     
	     it's just a for loop scanning through all visitedTiles items looking
	     for an item with the same row and col attributes as the object passed as argument
	     
	     */
	     
		for(var i = 0; i < visitedTiles.length; i ++){
			if(tileObject.col == visitedTiles[i].col && tileObject.row == visitedTiles[i].row){
				
				/*
				
				found it! return true and exit the function
				
				*/
				
				return true;
			}
		}
		
		/*
		
		did not found
		
		*/
		
		return false;   
	},
	
	/*
	
	placeArrow function will place an arrow joining two selected globes
	at a given row and column
	
	*/
	
	placeArrow:function(row,col){ 
	
		/*
		
		determining arrow x and y position
		
		*/
	   
	     var arrowX = game.global.offsetX + visitedTiles[visitedTiles.length - 1].col * game.global.tileSize + game.global.tileSize / 2;	     
		var arrowY = game.global.offsetY + visitedTiles[visitedTiles.length - 1].row * game.global.tileSize + game.global.tileSize / 2;
		
		/*
		
		creating, placing and setting the anchor point to center of the arrow itself
		
		*/
		
		var theArrow = game.add.sprite(arrowX, arrowY, "arrows");
          theArrow.anchor.setTo(0.5);
          
          /*
          
          in order to know which arrow frame to show, we have to calculate the
          difference from current globe row and column and previous globe row and 
          column
          
          */
          
		var rowDiff = visitedTiles[visitedTiles.length - 1].row - row; 
     	var colDiff = visitedTiles[visitedTiles.length - 1].col - col;
     	
     	/*
     	
     	next step is to see if it's an horizontal/vertical arrow or a diagonal
     	arrow.
     	
     	We know it's a diagonal arrow when the sum of the absolute values of 
     	row and column differences is greater than 1 (actually, it's 2)
     	
     	*/
     	
          if(Math.abs(rowDiff)+Math.abs(colDiff)==1){
          	
          	/*
          	
          	show frame 2 if it's an horizontal/vertical arrow
          	
          	*/
          	
               theArrow.frame = 2;
          }
          else{
          
          	/*
          	
          	show frame 3 if it's a diagonal arrow
          	
          	*/
          
               theArrow.frame = 3;
          }
          
          /*
          
          baseTenDiff  will be used to determine how to rotate the arrow according
          to row and column difference, following this table
          
          rowDiff | colDiff | baseTenDiff | rotation
          --------+---------+-------------+-----------
              0        1           1           0
              0       -1          -1           180
              1        0          10           90
              1        1          11           0
              1       -1           9           90
              -1       0         -10           270
              -1       1          -9           270
              -1      -1         -11           180
          
          */
          
          var baseTenDiff = rowDiff*10+colDiff;
          if(baseTenDiff==10 || baseTenDiff == 9){
               theArrow.angle = 90;
          }
          if(baseTenDiff==-10 || baseTenDiff == -9){
               theArrow.angle = 270;
          }
          if(baseTenDiff==-1 || baseTenDiff == -11){
               theArrow.angle = 180;
          }
          
          /*
          
          assigning the arrow to arrowGroup group
          
          */
          
          arrowGroup.add(theArrow);
          
          /*
          
          inserting the arrow into arrowArray array
          
          */
          
          arrowArray.push(theArrow);
	},
	
	/*
	
	removeLastArrow function just removes the last added arrow image and its
	reference in arrowArray array	
	
	*/
	
	removeLastArrow: function(){   
	
	     /*
	     
	     destroying the image and freeing memory
	     
	     */
	  
          arrowArray[arrowArray.length - 1].destroy();
          
          /*
          
          removing latest element from arrowArray array
          
          */
          
          arrowArray.pop();
          
          /*
          
          changing the latest arrow - if any - to an actual arrow by changing its frame
          
          */
          
          if(arrowArray.length > 0){
			arrowArray[arrowArray.length - 1].frame += 2;
		}                 
	},
	
	/*
	
	holesBelow function, given a row and a column, determines the number of 
	empty tiles below
	
	*/
	
	holesBelow: function(row,col){ 
	
		/*
		
		default value = no holes
		
		*/
	   
		var holes = 0;
		
		/*
		
		looping from the row immediatly below the given tile down until
		the bottom-most row
		
		*/
		
		for(var i = row + 1; i < game.global.fieldSize; i ++){
			
			/*
			
			if we find an empty tile, that is a null item in tileArray array,
			then increment "holes" value
			
			*/
			
			if(tileArray[i][col] == null){
				holes ++;
			}		
		}
		
		/*
		
		return the number of holes
		
		*/
		
		return holes;				
	},
	
	/*
	
	updateCounter function is called by
	game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
	and handles time as passes by 
	
	*/
	
	updateCounter: function(){
	
	  	/*
	  	
	  	first, we decrease timeLeft
	  	
	  	*/
	  
          timeLeft --;
          
          /*
          
          to visually show time left, we crop the full opaque time bar.
          
          This is how we crop an image:
          
          timeBar.cropRect = new Phaser.Rectangle(0,0,timeLeft*5,12);
          
          basically we define its crop area rectangle, this way:
          
          new Phaser.Rectangle(0,0,timeLeft*5,12);
          
          0: upper left corner x coordinate
          
          0: upper left corner y coordinate
          
          timeLeft*5: bottom right corner x coordinate
          
          12: bottom right corner y coordinate
          
          */
          
          timeBar.cropRect = new Phaser.Rectangle(0,0,timeLeft*5,12);
          
		/*
		
		once the crop rectangle is defined, we apply it with updateCrop method
		
		*/
		
		timeBar.updateCrop();
		
		/*
		
		if timeLeft reaches zero, it's game over!
		
		*/
		
		if(timeLeft<=0){
               this.gameOver(); 
          } 
          
          /*
          
          we will play a tick sound in the way we have seen before during the last
          five seconds of the game
          
          */
          
          if(timeLeft<=9){    
               if(game.global.playSounds){
                    var randomTick = game.rnd.between(0, tick.length - 1);
                    tick[randomTick].play("", 0, 1, false);
               }
          }                 
	},
     
     /*
     
     gameOver function will handle the saddest game event: the game is over!     
     
     */
             
     gameOver: function(){
          
          /*
          
          this is just a fake fade out like you saw a million times, which calls
          GameOver state, which you can see at gameover.js 
          
          */ 
               
          var blackFade = this.add.sprite(0,0,"blackfade");
		blackFade.alpha=0;
		var fadeTween = this.add.tween(blackFade);
		fadeTween.to({
			alpha:1
		},500,Phaser.Easing.Cubic.Out,true);
		fadeTween.onComplete.add(function(){
		
		   /*
		   
		   in this case we are passing a variable through states, which is the score.
		   
		   I could have used another game.global variable but I wanted to show how
		   to pass variables through states.
		   
		   In this case,
		   
		   game.state.start("GameOver",true,false,score); 
		   
		   "GameOver": the key of the state you want to start
		   
		   true: clear everything in the world?
		   
		   false: clear game cache and purge loaded assets?
		   
		   score: variable passed to state.init function
		   
		   */
		   
		   game.state.start("GameOver",true,false,score);
		},this);  
     },
     
     /*
     
     shufflePoints shuffles column values at each successful move
     
     */
     
	shufflePoints: function(){ 
     
          /*
          
          first, we reset pointsInternalArray array, ready to be filled with
          new points values
          
          */
     
		pointsInternalArray = [];
          
          /*
          
          this is just a temporary variable which will be used to swap array
          elements
          
          */
          
		var temp;
          
          /*
          
          copying game.global.pointsArray items into pointsInternalArray.
          
          At the end of the loop,  pointsInternalArray has the same content
          of game.global.pointsArray
          
          */
          
		for(var i = 0; i < game.global.pointsArray.length; i ++){
			pointsInternalArray.push(i);
		}
          
          /*
          
          now we swap two pointsInternalArray elements for "game.global.pointsArray.length" times
          
          at the end of the loop, pointsInternalArray will be a shuffled version of
          game.global.pointsArray
          
          */
          
		for(i = 0; i < game.global.pointsArray.length; i ++){
			var from = game.rnd.between(0, pointsInternalArray.length -1);
			var to = game.rnd.between(0, pointsInternalArray.length -1);
			var temp = pointsInternalArray[from];
			pointsInternalArray[from] = pointsInternalArray[to];
			pointsInternalArray[to] = temp;		
		}
          
          /*
          
          finally, we assign each score sprite its proper frame according to
          pointsInternalArray content
          
          */
          
		for(i = 0; i < game.global.pointsArray.length; i++){
			pointsSpriteArray[i].frame = pointsInternalArray[i];
		}    
	},
     
     /*
     
     toggleSound function is called when the player clicks on sound on/off button.
     
     It just switches sound button frame from 0 to 1 (or from 1 to zero) and
     game.global.playSounds from true to false (or from false to true)
     
     */
     
     toggleSound: function(button){                                                              
          button.frame = 1 - button.frame;
          game.global.playSounds = !game.global.playSounds     
     }
}