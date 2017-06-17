
// This program is free software: you can redistribute it and/or modify  
// it under the terms of the GNU General Public License as published by  
// the Free Software Foundation, either version 3 of the License, or  
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,  
// but WITHOUT ANY WARRANTY; without even the implied warranty of  
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the  
// GNU General Public License for more details.  
// 
// You should have received a copy of the GNU General Public License  
// along with this program.  If not, see http://www.gnu.org/licenses/.

//Globals
 // Score
    var score = 0;
	var savedGameLoad = 0;
	var levelcount = 1;
	var levelbump = 0;
	var levelShotCount = 0;
	var fromLoadMenu = 0;
	var inStreakCount = 0;
	var inStreak = 0;
	var inStreakScore = 0;
	var specialShot = 0;
	var specialShot2 = 0;
	var fromSpecial = false;
	var specialActive = 0;
	var icyCount = 0;
	var shockCount = 1;
	var starCash = 0;
	var cashUp = 0;
	var storySeen = 0;
	if (typeof localStorage["storySeen"] === "undefined") {localStorage["storySeen"] = 0; starCash = 0;};
	if (typeof localStorage["starCash"] === "undefined") {localStorage["starCash"] = 0; starCash = 0;};
	starCash = parseInt(localStorage["starCash"]);
	if (typeof localStorage["icyCount"] === "undefined") {localStorage["icyCount"] = 0; icyCount= 0;};
	icyCount = parseInt(localStorage["icyCount"]);
	// if (typeof localStorage["cashUp"] === "undefined") {localStorage["cashUp"] = 0; cashUp= 0;};
	// cashUp = parseInt(localStorage["cashUp"]);
	
	//sounds
	var snd2 = new Audio("Sounds/nice.mp3"); // plays on the Nice Move message
		snd2.load();
    var snd3 = new Audio("Sounds/JingleWinSynth0.mp3"); // plays on the AWESOME message
		snd3.load();
	var snd4 = new Audio("Sounds/dropped.mp3"); // plays when floating items are dropped
		snd4.load();
    var snd5 = new Audio("Sounds/levelUp.mp3"); // level up sound
		snd5.load();
	var snd6 = new Audio("Sounds/fireBurning.mp3"); // level up sound
		snd6.loop = true;
		snd6.load();
		
//images to add on top
//swap icon		
	var swapReady = false;
var swapImage = new Image();
swapImage.onload = function () {
    swapReady = true;
}
swapImage.src = "newswap.png"; 
// Save Icon Image
	var saveImgReady = false;
var saveImage = new Image();
saveImage.onload = function () {
    saveImgReady = true;
}
saveImage.src = "Menu.png"; 

// Game Over Image
	var gameOverReady = false;
var gameOverImage = new Image();
gameOverImage.onload = function () {
    gameOverReady = true;
}
gameOverImage.src = "gameOver.png"; 

var starRatingReady = false;
var starRatingImage = new Image();
starRatingImage.onload = function () {
    starRatingReady = true;
}
starRatingImage.src = "stars1.png"; 

////// Special Shot Images
//Icy Blast
var icyReady = false;
var icyImage = new Image();
icyImage.onload = function () {
    icyImgReady = true;
}
icyImage.src = "Effects/icyBlast.png"; 
//Shocking Sphere Blast
var shockReady = false;
var shockImage = new Image();
shockImage.onload = function () {
    shockImgReady = true;
}
shockImage.src = "Effects/shockAttack.png"; 

// power move activate button
	var specialMenuReady = false;
var specialMenuImage = new Image();
specialMenuImage.onload = function () {
    specialMenuReady = true;
}
specialMenuImage.src = "Effects/specialMenuActivate.png"; 

// // starCash count
	// var starCashReady = false;
// var starCashImage = new Image();
// starCashImage.onload = function () {
    // starCashReady = true;
// }
// starCashImage.src = "Effects/starCashBack.png"; 
// play Next Level image
	var playNextReady = false;
var playNextImage = new Image();
playNextImage.onload = function () {
   playNextReady = true;
}
playNextImage.src = "Hud/playNext.png"; 

	
// The function gets called when the window is fully loaded
window.onload = function() {
	// change start//
	
	document.getElementById("playGame").addEventListener("click", newGameEvent);
	document.getElementById("loadSaved").addEventListener("click", loadGameEvent);
	
	if (typeof localStorage["Score"] === "undefined") {
	document.getElementById("loadSaved").style.display = 'none';	}
// add event listener logic for level select	
document.getElementById("lvlSelectParent").addEventListener("click", detectTile);
	function detectTile(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
		if(!e.target.id) {return;}
		var numOnly = clickedItem.substring(4);
		if (isNaN(parseInt(numOnly))) { return} 
		var numOnlyAdj = parseInt(numOnly) - 1;
		var lvlScoreCheck = "LvlScore" + numOnly;
		var lastcheck = 0;
		
		//block click if have not saved a score for the level 
		if (typeof localStorage[lvlScoreCheck] === "undefined" ) {
			if (lastcheck == 0) {
				lastcheck = 1;}
			else if (lastcheck > 0) {return;}
			}
		// alert(lvlScoreCheck);
		if (typeof localStorage[lvlScoreCheck] === "undefined" ) { levelcount = 1 }
		levelcount = parseInt(numOnly);
		score = localStorage["Score"];
		// alert(levelcount);
		savedGameLoad = 1;
		fromLoadMenu = 1;
    }
    e.stopPropagation();
	loadGameEvent();
	loadSavedLevel();
	closeLvlSelect();
	hideIntro();
	
}
		// detect clicked and load game to that level
	// function loadSelectedLvl(){
		// var clicked;
		
		// levelcount = parseInt(clicked);
		// loadGameEvent();
		// alert (clicked);
	// };	
	// Load New Game//
	function newGameEvent() { 
	// call old onLoad event
	loadOnLoad();	};
	
	// Load Saved game//
	function loadGameEvent() {
        // call old onLoad event with a timeout to let loadSavedLevel time to set the images
		
		 setTimeout(function(){		loadOnLoad();    },500);}
	
	

		
}

	// end of onload



function loadOnLoad() {
	
	//play backgroundmyAudio = new Audio('someSound.ogg'); 
	myAudio = new Audio('guifruity.mp3'); 
	myAudio.volume = 0.3;
	if (typeof myAudio.loop == 'boolean')
	{    myAudio.loop = true;	}
	else
	{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
	}
	myAudio.play();
	
	
    // Get the canvas and context
    var canvas = document.getElementById("viewport");
    var context = canvas.getContext("2d");
  
    // Timing and frames per second
    var lastframe = 0;
    
    var framecount = 0;
	var playrun= 1;
    var newRowCounter = 10;
    var initialized = false;
	
	
	document.getElementById("saveAndLoad").style.display = 'none';
	// alert (localStorage.Score + " " + localStorage.Level);
	
    // Level
    var level = {
        x: 4,           // X position
        y: 83,          // Y position
        width: 0,       // Width, gets calculated
        height: 0,      // Height, gets calculated
        columns: 9,    // Number of tile columns---was originally 15
        rows: 14,       // Number of tile rows--was 14
        tilewidth: 40,  // Visual width of a tile
        tileheight: 40, // Visual height of a tile
        rowheight: 34,  // Height of a row
        radius: 18,     // Bubble collision radius
        tiles: []       // The two-dimensional tile array
    };

    // Define a tile class
    var Tile = function(x, y, type, shift) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.removed = false;
        this.shift = shift;
        this.velocity = 0;
        this.alpha = 1;
        this.processed = false;
    };
    
    // Player
    var player = {
        x: 0,
        y: 0,
        angle: 0,
        tiletype: 0,
        bubble: {
                    x: 0,
                    y: 0,
                    angle: 0,
                    speed: 1000,
                    dropspeed: 50,
                    tiletype: 0,
                    visible: false
                },
        nextbubble: {
                        x: 0,
                        y: 0,
                        tiletype: 0
                    }
    };
    
    // Neighbor offset table
    var neighborsoffsets = [[[1, 0], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1]], // Even row tiles
                            [[1, 0], [1, 1], [0, 1], [-1, 0], [0, -1], [1, -1]]];  // Odd row tiles
    
    // Number of different colors
    var bubblecolors = 7;
    
    // Game states
    var gamestates = { init: 0, ready: 1, shootbubble: 2, removecluster: 3, gameover: 4, levelUp: 5 };
    var gamestate = gamestates.init;
    
   
    
    var turncounter = 0;
    var rowoffset = 0;
    
    // Animation variables
    var animationstate = 0;
    var animationtime = 0;
    
    // Clusters
    var showcluster = false;
    var cluster = [];
    var floatingclusters = [];
    
    // Images
    var images = [];
    var bubbleimage;
    
    // Image loading global variables
    var loadcount = 0;
    var loadtotal = 0;
    var preloaded = false;
    
    // Load images
    function loadImages(imagefiles) {
        // Initialize variables
        loadcount = 0;
        loadtotal = imagefiles.length;
        preloaded = false;
        
        // Load the images
        var loadedimages = [];
        for (var i=0; i<imagefiles.length; i++) {
            // Create the image object
            var image = new Image();
            
            // Add onload event handler
            image.onload = function () {
                loadcount++;
                if (loadcount == loadtotal) {
                    // Done loading
                    preloaded = true;
                }
            };
            
            // Set the source url of the image
            image.src = imagefiles[i];
            
            // Save to the image array
            loadedimages[i] = image;
        }
        
        // Return an array of images
        return loadedimages;
    }
    
    // Initialize the game
    function init() {
        
		
		images = loadImages(["Bubbles/fruitbubbles.png"]);
	        		
		///////
        bubbleimage = images[0];
    
        // Add mouse events
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mouseup", onMouseUp);
        
        // Initialize the two-dimensional tile array
        for (var i=0; i<level.columns; i++) {
            level.tiles[i] = [];
            for (var j=0; j<level.rows; j++) {
                // Define a tile type and a shift parameter for animation
                level.tiles[i][j] = new Tile(i, j, 0, 0);
            }
        }
        
        level.width = level.columns * level.tilewidth + level.tilewidth/2;
	
        level.height = (level.rows-1) * level.rowheight + level.tileheight;
        
        // Init the player
        player.x = level.x + level.width/2 - level.tilewidth/2;
        player.y = level.y + level.height;
        player.angle = 90;
        player.tiletype = 0;
        
        player.nextbubble.x = player.x - 2.3 * level.tilewidth;
        player.nextbubble.y = player.y + 7;
        
        // New game
        newGame();
        
        // Enter main loop
        main(0);
    }
    
    // Main loop
    function main(tframe) {
        // Request animation frames
        window.requestAnimationFrame(main);
		
        if (!initialized) {
            // Preloader
            
            // Clear the canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw the frame
            drawFrame();
            
            // Draw a progress bar
            // var loadpercentage = loadcount/loadtotal;
            // context.strokeStyle = "#ff8080";
            // context.lineWidth=3;
            // context.strokeRect(18.5, 0.5 + canvas.height - 51, canvas.width-277, 32);
            // context.fillStyle = "#ff8080";
            // context.fillRect(18.5, 0.5 + canvas.height - 51, loadpercentage*(canvas.width-277), 32);
            
            // // Draw the progress text
            // var loadtext = "Loaded " + loadcount + "/" + loadtotal + " images";
            // context.fillStyle = "#000000";
            // context.font = "16px Verdana";
            // context.fillText(loadtext, 18, 0.5 + canvas.height - 63);
            
            if (preloaded) {
                // Add a delay for demonstration purposes
                setTimeout(function(){initialized = true;}, 2000);
            }
        } else {
            // Update and render the game
            update(tframe);
            render();
        }
    }
    
    // Update the game state
    function update(tframe) {
        var dt = (tframe - lastframe) / 1000;
        lastframe = tframe;
        
        
        
        if (gamestate == gamestates.ready) {
            // Game is ready for player input
        } else if (gamestate == gamestates.shootbubble) {
            // Bubble is moving
            stateShootBubble(dt);
        } else if (gamestate == gamestates.removecluster) {
            // Remove cluster and drop tiles
            stateRemoveCluster(dt);
        }
    }
    
    function setGameState(newgamestate) {
        gamestate = newgamestate;
        
        animationstate = 0;
        animationtime = 0;
    }

	
    function stateShootBubble(dt) {
        // Bubble is moving
      
        // Move the bubble in the direction of the mouse
        player.bubble.x += dt * player.bubble.speed * Math.cos(degToRad(player.bubble.angle));
        player.bubble.y += dt * player.bubble.speed * -1*Math.sin(degToRad(player.bubble.angle));
       
		//begin special shot addtion
		if (specialShot == 2) {
			
		}
		//end special shot addition
		
        // Handle left and right collisions with the level
        if (player.bubble.x <= level.x) {
            // Left edge
			            			
			player.bubble.angle = 180 - player.bubble.angle;
            player.bubble.x = level.x;
        } else if (player.bubble.x + level.tilewidth >= level.x + level.width) {
            // Right edge
			
            player.bubble.angle = 180 - player.bubble.angle;
            player.bubble.x = level.x + level.width - level.tilewidth;
        }
 
        // Collisions with the top of the level
        if (player.bubble.y <= level.y) {
            // Top collision
            player.bubble.y = level.y;
            snapBubble();
            return;
        }
        
        // Collisions with other tiles
        for (var i=0; i<level.columns; i++) {
            for (var j=0; j<level.rows; j++) {
                var tile = level.tiles[i][j];
                
                // Skip empty tiles
                if (tile.type < 0) {
                    continue;
                }
                
                // Check for intersections
                var coord = getTileCoordinate(i, j);
                if (circleIntersection(player.bubble.x + level.tilewidth/2,
                                       player.bubble.y + level.tileheight/2,
                                       level.radius,
                                       coord.tilex + level.tilewidth/2,
                                       coord.tiley + level.tileheight/2,
                                       level.radius)) {
                                        
                    // Intersection with a level bubble
                    snapBubble();
                    return;
                }
            }
        }
    }
    
    function stateRemoveCluster(dt) {
        if (animationstate == 0) {
            resetRemoved();
			//show nice pop
            if (cluster.length > 3 && cluster.length <= 6 ){ 
			score += 250;
			showBonus(); window.setTimeout(hideBonus, 1500);
			}
				//show awesome pop
			if (cluster.length > 6){ 
			score += 500;
			showBonus2(); window.setTimeout(hideBonus, 1500);
			}
            // Mark the tiles as removed
            for (var i=0; i<cluster.length; i++) {
                // Set the removed flag
                cluster[i].removed = true;
            }
            
            // Add cluster score
            score += cluster.length * 100;
			inStreakCount ++;
			
			//DB  ---check for streak
			if (inStreakCount >= 5) {
				inStreak = 1;
				inStreakScore = parseInt(inStreakScore) + (cluster.length * 100);
				document.getElementById("hotstreak").style.display = 'block';
				snd6.play();
				
			
			}
			//from special addition
						if (fromSpecial == true && specialShot2 == 0){
							
							var icyX2 = tile.x - 30;
							var icyY2 = tile.y - 40;
							alert (icyX + " = x " + icyY  + " = y");
							context.drawImage(icyImage, icyX2, icyY2 );
							document.getElementById("icyBlast").style.display = 'block';
							window.setTimeout(hideBonus, 1500 );
							fromSpecial = false;
							// specialShot = 0;
						}
						//end from special	
            
            // Find floating clusters
            floatingclusters = findFloatingClusters();
            
            if (floatingclusters.length > 0) {
				//play drop sound
				if (specialActive = 0){
				snd4.volume = 0.8;
				snd4.play();}
					
                // Setup drop animation
                for (var i=0; i<floatingclusters.length; i++) {
                    for (var j=0; j<floatingclusters[i].length; j++) {
                        var tile = floatingclusters[i][j];
                        tile.shift = 0;
                        tile.shift = 1;
                        tile.velocity = player.bubble.dropspeed;
						
						
						
                        score += 100;
						//DB - add floating to streak Score
						if (inStreakCount >= 5) {
						inStreakScore = parseInt(inStreakScore) + 100;
						}
                    }
                }
            }
            animationstate = 1;	
            
        }
		
        
        if (animationstate == 1) {
            // Pop bubbles
            var tilesleft = false;
            for (var i=0; i<cluster.length; i++) {
                var tile = cluster[i];
                
                if (tile.type >= 0) {
                    tilesleft = true;
                    
                    // Alpha animation
                    tile.alpha -= dt * 15;
                    if (tile.alpha < 0) {
                        tile.alpha = 0;
                    }

                    if (tile.alpha == 0) {
                        tile.type = -1;
                        tile.alpha = 1;
                    }
                }                
            }
            
            // Drop bubbles
            for (var i=0; i<floatingclusters.length; i++) {
                for (var j=0; j<floatingclusters[i].length; j++) {
                    var tile = floatingclusters[i][j];
                    
                    if (tile.type >= 0) {
                        tilesleft = true;
                        
                        // Accelerate dropped tiles
                        tile.velocity += dt * 700;
                        tile.shift += dt * tile.velocity;
                        
                        // Alpha animation
                        tile.alpha -= dt * 8;
                        if (tile.alpha < 0) {
                            tile.alpha = 0;
                        }

                        // Check if the bubbles are past the bottom of the level
                        if (tile.alpha == 0 || (tile.y * level.rowheight + tile.shift > (level.rows - 1) * level.rowheight + level.tileheight + 250)) {
                            tile.type = -1;
                            tile.shift = 0;
                            tile.alpha = 1;
                        }
                    }

                }
            }
            
            if (!tilesleft) {
                // Next bubble
                nextBubble();
                
                // Check for game over
                var tilefound = false
                for (var i=0; i<level.columns; i++) {
                    for (var j=0; j<level.rows; j++) {
                        if (level.tiles[i][j].type != -1) {
                            tilefound = true;
                            break;
                        }
                    }
                }
                
                if (tilefound) {
                    setGameState(gamestates.ready);
                } else {
                    // No tiles left, level up
					levelbump ++;
                    setGameState(gamestates.levelUp);
					playrun = 1;
                }
            }
        }
		
    }
    
    // Snap bubble to the grid
    function snapBubble() {
        // Get the grid position
        var centerx = player.bubble.x + level.tilewidth/2;
        var centery = player.bubble.y + level.tileheight/2;
        var gridpos = getGridPosition(centerx, centery);

        // Make sure the grid position is valid
        if (gridpos.x < 0) {
            gridpos.x = 0;
        }
            
        if (gridpos.x >= level.columns) {
            gridpos.x = level.columns - 1;
        }

        if (gridpos.y < 0) {
            gridpos.y = 0;
        }
            
        if (gridpos.y >= level.rows) {
            gridpos.y = level.rows - 1;
        }

        // Check if the tile is empty
        var addtile = false;
        if (level.tiles[gridpos.x][gridpos.y].type != -1) {
            // Tile is not empty, shift the new tile downwards
            for (var newrow=gridpos.y+1; newrow<level.rows; newrow++) {
                if (level.tiles[gridpos.x][newrow].type == -1) {
                    gridpos.y = newrow;
                    addtile = true;
                    break;
                }
            }
        } else {
            addtile = true;
        }

        // Add the tile to the grid
        if (addtile) {
            // Hide the player bubble
            player.bubble.visible = false;
        // add to shot count//
		 levelShotCount = parseInt(levelShotCount) + 1;
            // Set the tile
            level.tiles[gridpos.x][gridpos.y].type = player.bubble.tiletype;
            
            // Check for game over
            if (checkGameOver()) {
				// add to shot count//
				levelShotCount = 0;
                return;
            }
            
            // Find clusters
            cluster = findCluster(gridpos.x, gridpos.y, true, true, false);
            
            if (cluster.length >= 3) {
                // Remove the cluster
                setGameState(gamestates.removecluster);
                return;
            }
        }
        
        // No clusters found- take a turn, end any streaks, and add streak score if any
        turncounter++;
		var oldInStreak = inStreak;
		inStreakCount = 0;
		if (inStreak == 1) {
		
		document.getElementById("hotstreak").className = "clsInStreakUp";
		document.getElementById("hotstreakTotal").style.display = "block";
		snd6.pause();
		document.getElementById("hotstreakScore").innerHTML = inStreakScore;
		document.getElementById("hotstreakTotal").className = "clsHotIn";
		setTimeout(function () { snd3.play();},1000);
		setTimeout(function(){	document.getElementById("hotstreakTotal").className = "clsHotOut";   },2500);
		
		document.getElementById("hotstreak").style.display = "none";
		setTimeout(function(){	document.getElementById("hotstreakTotal").style.display = "none";  score = parseInt(score) + parseInt(inStreakScore); inStreakScore = 0;},3600);
		inStreak = 0;
		
		inStreakCount = 0;
		}
        if (turncounter >= newRowCounter ) {
            // Add a row of bubbles
            addBubbles();
            turncounter = 0;
            rowoffset = (rowoffset + 1) % 2;
            
            if (checkGameOver()) {
				
                return;
            }
        }
		
	
        // Next bubble
        nextBubble();
        setGameState(gamestates.ready);
    }
    
    function checkGameOver() {
        // Check for game over
        for (var i=0; i<level.columns; i++) {
            // Check if there are bubbles in the bottom row
            if (level.tiles[i][level.rows-1].type != -1) {
                // Game over
                nextBubble();
				
                setGameState(gamestates.gameover);
                return true;
            }
        }
        
        return false;
    }
    
    function addBubbles() {
        // Move the rows downwards
        for (var i=0; i<level.columns; i++) {
            for (var j=0; j<level.rows-1; j++) {
                level.tiles[i][level.rows-1-j].type = level.tiles[i][level.rows-1-j-1].type;
            }
        }
        
        // Add a new row of bubbles at the top
        for (var i=0; i<level.columns; i++) {
            // Add random, existing, colors
            level.tiles[i][0].type = getExistingColor();
        }
    }
    
    // Find the remaining colors
    function findColors() {
        var foundcolors = [];
        var colortable = [];
        for (var i=0; i<bubblecolors; i++) {
            colortable.push(false);
        }
        
        // Check all tiles
        for (var i=0; i<level.columns; i++) {
            for (var j=0; j<level.rows; j++) {
                var tile = level.tiles[i][j];
                if (tile.type >= 0) {
                    if (!colortable[tile.type]) {
                        colortable[tile.type] = true;
                        foundcolors.push(tile.type);
                    }
                }
            }
        }
        
        return foundcolors;
    }
    
    // Find cluster at the specified tile location
    function findCluster(tx, ty, matchtype, reset, skipremoved) {
        // Reset the processed flags
        if (reset) {
            resetProcessed();
        }
        
        // Get the target tile. Tile coord must be valid.
        var targettile = level.tiles[tx][ty];
        
        // Initialize the toprocess array with the specified tile
        var toprocess = [targettile];
        targettile.processed = true;
        var foundcluster = [];

        while (toprocess.length > 0) {
            // Pop the last element from the array
            var currenttile = toprocess.pop();
            
            // Skip processed and empty tiles
            if (currenttile.type == -1) {
                continue;
            }
            
            // Skip tiles with the removed flag
            if (skipremoved && currenttile.removed) {
                continue;
            }
            
            // Check if current tile has the right type, if matchtype is true
            if (!matchtype || (currenttile.type == targettile.type) || specialShot > 0 && specialShot <= 12) {
                // Add current tile to the cluster
					foundcluster.push(currenttile);
					 //auto increment and display if from special
               		if (specialShot >= 1){ 
					specialShot = specialShot += 1;
					fromSpecial = true;
					if(specialShot2 == 0){
					document.getElementById("icyBlast").style.display = 'block';
					document.getElementById("icyBlastBack").style.display = 'block';}
					if(specialShot2 == 1){ document.getElementById("shockingBlast").style.display = 'block';
					document.getElementById("lightningFullBack").style.display = 'block';
					}
					
					document.getElementById("awesome").style.display = 'none';
					specialActive = specialActive += 1;
					 var sndI = new Audio("Sounds/freezeSnd.mp3"); // buffers automatically when created
							sndI.volume = 1.0;
							sndI.play();
					window.setTimeout(hideBonus, 2000);
					};
					if(specialShot >= 7 && specialShot <= 9 && specialShot2 == 0) {specialShot = 0; fromSpecial = false;};
					if(specialShot >= 11 && specialShot2 == 1) {specialShot = 0; fromSpecial = false; specialShot2 = 0};
                // Get the neighbors of the current tile
				
		         var neighbors = getNeighbors(currenttile);
				
					
                // Check the type of each neighbor
                for (var i=0; i<neighbors.length; i++) {
                    if (!neighbors[i].processed) {
                        // Add the neighbor to the toprocess array
                        toprocess.push(neighbors[i]);
                        neighbors[i].processed = true;
                    }
					
                }
				
            }
        }
        
        // Return the found cluster
        return foundcluster;
    }
    
    // Find floating clusters
    function findFloatingClusters() {
        // Reset the processed flags
        resetProcessed();
        
        var foundclusters = [];
        
        // Check all tiles
        for (var i=0; i<level.columns; i++) {
            for (var j=0; j<level.rows; j++) {
                var tile = level.tiles[i][j];
                if (!tile.processed) {
                    // Find all attached tiles
                    var foundcluster = findCluster(i, j, false, false, true);
                    
                    // There must be a tile in the cluster
                    if (foundcluster.length <= 0) {
                        continue;
                    }
                    
                    // Check if the cluster is floating
                    var floating = true;
                    for (var k=0; k<foundcluster.length; k++) {
                        if (foundcluster[k].y == 0) {
                            // Tile is attached to the roof
                            floating = false;
                            break;
                        }
                    }
                    
                    if (floating) {
                        // Found a floating cluster
                        foundclusters.push(foundcluster);
                    }
                }
            }
        }
        
        return foundclusters;
    }
    
    // Reset the processed flags
    function resetProcessed() {
        for (var i=0; i<level.columns; i++) {
            for (var j=0; j<level.rows; j++) {
                level.tiles[i][j].processed = false;
            }
        }
    }
    
    // Reset the removed flags
    function resetRemoved() {
        for (var i=0; i<level.columns; i++) {
            for (var j=0; j<level.rows; j++) {
                level.tiles[i][j].removed = false;
            }
        }
    }
    
    // Get the neighbors of the specified tile
    function getNeighbors(tile) {
        var tilerow = (tile.y + rowoffset) % 2; // Even or odd row
        var neighbors = [];
        
        // Get the neighbor offsets for the specified tile
        var n = neighborsoffsets[tilerow];
        
        // Get the neighbors
        for (var i=0; i<n.length; i++) {
            // Neighbor coordinate
            var nx = tile.x + n[i][0];
            var ny = tile.y + n[i][1];
            
            // Make sure the tile is valid
            if (nx >= 0 && nx < level.columns && ny >= 0 && ny < level.rows) {
                neighbors.push(level.tiles[nx][ny]);
            }
        }
        
        return neighbors;
    }
    
   
    
    // Draw text that is centered
    function drawCenterText(text, x, y, width) {
        var textdim = context.measureText(text);
        context.fillText(text, x + (width-textdim.width)/2, y);
    }
    
    // Render the game
    function render() {
        // Draw the frame around the game
        drawFrame();
        
        var yoffset =  level.tileheight/2;
        
        // Draw level background
		// add linear gradient based on level range
		var backcolor1 = '#006622';
		var backcolor2 = '#00ff55';
		var backcolor3 = '#003311';
		
	//range color changes
		//candy Background colors
		if (parseInt(levelcount) >= 7 && (parseInt(levelcount) <= 12)) {
			 backcolor1 = '#ff66ff';
			backcolor2 = '#ff99cc';
			backcolor3 = '#ff66ff';
		}
		//ghost background colors
		if (parseInt(levelcount) >= 13 && (parseInt(levelcount) <= 18)) {
			 backcolor1 = '#3d3d29';
			backcolor2 = '#996600';
			backcolor3 = '#3d3d29';
		}
		//space background colors
		if (parseInt(levelcount) >= 19 && (parseInt(levelcount) <= 24)) {
			 backcolor1 = '#3d3d29';
			backcolor2 = '#000066';
			backcolor3 = '#3d3d29';
		}
		//water world background colors
		if (parseInt(levelcount) >= 25 && (parseInt(levelcount) <= 30)) {
			 backcolor1 = '#000066';
			backcolor2 = '#3366ff';
			backcolor3 = '#000066';
		}
		//spaceship world background colors
		if (parseInt(levelcount) >= 31 && (parseInt(levelcount) <= 36)) {
			 backcolor1 = '#3d3d29';
			backcolor2 = '#000066';
			backcolor3 = '#3d3d29';
		}
		//gummy world background colors
		if (parseInt(levelcount) >= 37 && (parseInt(levelcount) <= 42)) {
			 backcolor1 = '#ff66ff';
			backcolor2 = '#ff99cc';
			backcolor3 = '#ff66ff';
		}
		//gummy castle background colors
		if (parseInt(levelcount) >= 43 && (parseInt(levelcount) <= 48)) {
			 backcolor1 = '#990033';
			backcolor2 = '#ff66ff';
			backcolor3 = '#ff0066';
		}
		//lava cavern background colors
		if (parseInt(levelcount) >= 49 && (parseInt(levelcount) <= 54)) {
			 backcolor1 = '#2e2e1f';
			backcolor2 = '#990000';
			backcolor3 = '#14141f';
		}
		//wizard world background colors
		if (parseInt(levelcount) >= 55 && (parseInt(levelcount) <= 60)) {
			 backcolor1 = '#2e2e1f';
			backcolor2 = '#9999ff';
			backcolor3 = '#14141f';
		}
		//arcane planet background colors
		if (parseInt(levelcount) >= 61 && (parseInt(levelcount) <= 66)) {
			 backcolor1 = '#660033';
			backcolor2 = '#9999ff';
			backcolor3 = '#660033';
		}
		//Donut planet background colors
		if (parseInt(levelcount) >= 67 && (parseInt(levelcount) <= 72)) {
			 backcolor1 = '#990033';
			backcolor2 = '#ff66ff';
			backcolor3 = '#ff0066';
		}
	//draw the level background with the level specific ranges
		var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
		// light blue
		grd.addColorStop(0, backcolor1);   
		// dark blue
		grd.addColorStop(0.5, backcolor2);
		grd.addColorStop(1, backcolor3);
		context.fillStyle = grd;
        context.fillRect(level.x - 4, level.y - 4, level.width + 8, level.height + 4 - yoffset);
        // ^^ end level background
		
		
        // Render tiles
        renderTiles();
        
        // Draw level bottom
		var grd2 = context.createLinearGradient(0, 0, canvas.width, canvas.height);
		// light green
		grd.addColorStop(0, '#00ff55');   
		// dark blue
		grd.addColorStop(1, '#66a3ff');
		context.fillStyle = grd2;
       
        context.fillRect(level.x - 4, level.y - 4 + level.height + 4 - yoffset, level.width + 8, 2 * level.tileheight + 3);
        
		//draw score
		 
        var scorex = level.x + level.width - 150;
        var scorey = level.y+level.height + level.tileheight - yoffset - 8;
        
		context.fillStyle = "#668cff";
		context.font = "16px Verdana";
		drawCenterText("Score: " + score, scorex, scorey -14, 150);
		
		//draw level
		context.fillStyle = "#ffffff";
        context.font = "14px Verdana";
        drawCenterText("Level " + levelcount , scorex + 10, scorey +15, 150);
     
		
		// draw High score
		context.fillStyle = "#ffffff";
        context.font = "12px Verdana";
        var hscorex = level.x + level.width - 130;
        var hscorey = level.y+level.height + level.tileheight - yoffset +30;
		var HighScoreLocal = localStorage.HighScore;
		
		if (typeof localStorage["HighScore"] === "undefined") {localStorage["HighScore"] = 0;};
		if ( score > localStorage.HighScore) { HighScoreLocal = score};
        drawCenterText("High: " + HighScoreLocal, hscorex, hscorey  , 150);
        
		
		
        // Draw next row counter
		var tillNextRow = newRowCounter - turncounter;
        context.fillStyle = "#ffffff";
        context.font = "12px Verdana";
        var nextrowx = level.x + level.width - 400;
        var nextrowy = level.y+level.height + level.tileheight - yoffset - 8;
        drawCenterText(tillNextRow +" until next row", nextrowx, nextrowy -18, 150);
        
		
		// draw swap control
		if (swapReady) {
			var swaprowx = level.x + level.width - 272;
			var swaprowy = level.y+level.height + level.tileheight - yoffset -20;
        context.drawImage(swapImage, swaprowx, swaprowy )
    }
		// draw save control
		if (saveImgReady) {
			var savex = level.x + 5;
			var savey = level.y+level.height + level.tileheight - yoffset - 22;
        context.drawImage(saveImage, savex, savey + 10)
    }
	// draw power move control
		if (specialMenuReady) {
			var specialMenux = level.x + 225;
			var specialMenuy = level.y+level.height + level.tileheight - yoffset - 28;
        context.drawImage(specialMenuImage, specialMenux  , specialMenuy + 2)
    }
	
        // Render cluster
        if (showcluster) {
            renderCluster(cluster, 255, 128, 128);
            
            for (var i=0; i<floatingclusters.length; i++) {
                var col = Math.floor(100 + 100 * i / floatingclusters.length);
                renderCluster(floatingclusters[i], col, col, col);
            }
        }
        
        
        // Render player bubble
        renderPlayer();
    	
        // Game Over overlay
        if (gamestate == gamestates.gameover) {
            context.fillStyle = "rgba(0, 0, 0, 0.9)";
            context.fillRect(level.x - 4, level.y - 4, level.width + 8, level.height + 2 * level.tileheight + 8 - yoffset);
            if (gameOverReady) {
			var goverx = level.x + 10;
			var govery = level.y+ 10;
        context.drawImage(gameOverImage, goverx, govery)
    }
            context.fillStyle = "#ff0000";
			context.font = "24px Comic Sans MS";
			drawCenterText("Final Score: " + score, level.x, level.y + level.height / 2 + 25, level.width);
			if (score == localStorage.HighScore){
				context.fillStyle = "#0000ff";
				context.font = "20px Comic Sans MS";
			drawCenterText("New High Score!", level.x, level.y + level.height / 2 + 50, level.width);
			}	
			//draw the play again circle
			context.strokeStyle = '#660033';
			var centerX = level.width / 2 +5;
			var centerY = level.y + level.height / 2 + 130;
			var radius = 60;

			context.beginPath();
			context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
			context.fillStyle = '#660033';
			context.fill();
			context.lineWidth = 5;
			context.strokeStyle = '#003300';
			context.stroke();
			//text on the circle
			context.fillStyle = "#ff3399";
			context.font = "36px Comic Sans MS";
            drawCenterText("Play", level.x, level.y + level.height / 2 + 115, level.width);
			drawCenterText("Again", level.x, level.y + level.height / 2 + 155, level.width);
			if (score > localStorage.HighScore) {	
			localStorage.HighScore = score;}
			
			
					
        }
		
		/////// GG- beat the level- create another
		 if (gamestate == gamestates.levelUp) {
			 //add streak score and reset variables
			 if (inStreak == 1) {
				 snd6.pause();
				inStreakCount = 0;
				inStreak = 0;
				score = parseInt(score) + parseInt(inStreakScore); 
				inStreakScore = 0;
				document.getElementById("hotstreak").style.display = "none";
			 }
			snd5.play({	volume  : "0.6"});
			context.fillStyle = "rgba(0, 204, 0, 0.9)";
            context.fillRect(level.x - 4, level.y - 4, level.width + 8, level.height + 2 * level.tileheight + 8 - yoffset);
            // draw win image
			// document.getElementById("levelUpBack").style.display = "block";
			
			var d = document.getElementById('levelUpBack');
			d.style.position = "absolute";
			d.style.display = "block";
					
			// var scX = level.x + (level.width / 2) - 80;
			// var scY = level.y + 280 ;
			// context.drawImage(starCashImage, scX, scY );
			
			 
            context.fillStyle = "#e6e600";
            context.font = "40px Comic Sans MS";
            // drawCenterText("Level Complete!", level.x, level.y + level.height / 2 + 100, level.width);
			context.drawImage(playNextImage, level.x + 35, level.y + level.height / 2 + 155 );
			var NextLevelBtn = new String( "Next Level")
			nextLevelBtn = NextLevelBtn.bold();
            drawCenterText(NextLevelBtn, level.x, level.y + level.height / 2 + 225, level.width);
			
			
			//Do 1 time Level up functions
			if (levelbump >= 1) {
					if (typeof localStorage["starCash"] === "undefined") {localStorage["starCash"] = 0; starCash = 0;};
			 
			 
			//Rate number of shots to complete, save to local storage
			var lvlRating = "LvlRating" + levelcount;
			var lvlScore = "LvlScore" + levelcount;
			if (typeof localStorage[lvlRating] === "undefined") {localStorage[lvlRating] = 0;};
			cashUp = parseInt(localStorage[lvlRating]) + 2;
			
			// localStorage["starCash"] = parseInt(localStorage["starCash"]) + cashUp;	
			starCash = parseInt(localStorage["starCash"]);
			document.getElementById("lvlUpStarCash").innerHTML = " + " + cashUp;
			document.getElementById("LevelDisplay").innerHTML = levelcount;
				// adjust level progrression tiles
			// alert(parseInt(levelcount));
			if (parseInt(levelcount) == 1 || parseInt(levelcount) == 7 || parseInt(levelcount) == 13 || parseInt(levelcount)== 19 || parseInt(levelcount) == 25 || parseInt(levelcount) == 31){
				document.getElementById("lvlStatus1").src = "Hud/redTrophy.png";
				} 
			else if (parseInt(levelcount) == 2 || parseInt(levelcount) == 8 || parseInt(levelcount) == 14 || parseInt(levelcount) == 20 || parseInt(levelcount) == 26 || parseInt(levelcount) == 32){
				document.getElementById("lvlStatus1").src = "Hud/redTrophy.png"; document.getElementById("lvlStatus2").src = "Hud/redTrophy.png";
					}
			else if (parseInt(levelcount) == 3 || parseInt(levelcount) == 9 || parseInt(levelcount) == 15 || parseInt(levelcount) == 21 || parseInt(levelcount) == 27 || parseInt(levelcount) == 33){
				document.getElementById("lvlStatus1").src = "Hud/redTrophy.png"; document.getElementById("lvlStatus2").src = "Hud/redTrophy.png";
				document.getElementById("lvlStatus3").src = "Hud/redTrophy.png";
			}
			else if (parseInt(levelcount) == 4 || parseInt(levelcount) == 10 || parseInt(levelcount) == 16 || parseInt(levelcount) == 22 || parseInt(levelcount) == 28 || parseInt(levelcount) == 34){
				document.getElementById("lvlStatus1").src = "Hud/redTrophy.png"; document.getElementById("lvlStatus2").src = "Hud/redTrophy.png";
				document.getElementById("lvlStatus3").src = "Hud/redTrophy.png"; document.getElementById("lvlStatus4").src = "Hud/redTrophy.png";
			} 
			else if (parseInt(levelcount) == 5 || parseInt(levelcount) == 11 || parseInt(levelcount) == 17 || parseInt(levelcount) == 23 || parseInt(levelcount) == 29 || parseInt(levelcount) == 35){
				document.getElementById("lvlStatus1").src = "Hud/redTrophy.png"; document.getElementById("lvlStatus2").src = "Hud/redTrophy.png";
				document.getElementById("lvlStatus3").src = "Hud/redTrophy.png"; document.getElementById("lvlStatus4").src = "Hud/redTrophy.png";
				document.getElementById("lvlStatus5").src = "Hud/redTrophy.png";
			} 
			else if (parseInt(levelcount) == 37 || parseInt(levelcount) == 43 || parseInt(levelcount) == 49 || parseInt(levelcount) == 55 || parseInt(levelcount) == 61 || parseInt(levelcount) == 67){
				document.getElementById("lvlStatus1").src = "Hud/redTrophy.png";
				} 
			else if (parseInt(levelcount) == 38 || parseInt(levelcount) == 44 || parseInt(levelcount) == 50 || parseInt(levelcount) == 56 || parseInt(levelcount) == 62 || parseInt(levelcount) == 68){
				document.getElementById("lvlStatus1").src = "Hud/redTrophy.png"; document.getElementById("lvlStatus2").src = "Hud/redTrophy.png";
					}
			else if (parseInt(levelcount) == 39 || parseInt(levelcount) == 45 || parseInt(levelcount) == 51 || parseInt(levelcount) == 57 || parseInt(levelcount) == 63 || parseInt(levelcount) == 69){
				document.getElementById("lvlStatus1").src = "Hud/redTrophy.png"; document.getElementById("lvlStatus2").src = "Hud/redTrophy.png";
				document.getElementById("lvlStatus3").src = "Hud/redTrophy.png";
			}
			else if (parseInt(levelcount) == 40 || parseInt(levelcount) == 46 || parseInt(levelcount) == 52 || parseInt(levelcount) == 58 || parseInt(levelcount) == 64 || parseInt(levelcount) == 70){
				document.getElementById("lvlStatus1").src = "Hud/redTrophy.png"; document.getElementById("lvlStatus2").src = "Hud/redTrophy.png";
				document.getElementById("lvlStatus3").src = "Hud/redTrophy.png"; document.getElementById("lvlStatus4").src = "Hud/redTrophy.png";
				
			} 
			else if (parseInt(levelcount) == 41 || parseInt(levelcount) == 47 || parseInt(levelcount) == 53 || parseInt(levelcount) == 59 || parseInt(levelcount) == 65 || parseInt(levelcount) == 71){
				 document.getElementById("lvlStatus1").src = "Hud/redTrophy.png"; document.getElementById("lvlStatus2").src = "Hud/redTrophy.png";
				document.getElementById("lvlStatus3").src = "Hud/redTrophy.png"; document.getElementById("lvlStatus4").src = "Hud/redTrophy.png";
				document.getElementById("lvlStatus5").src = "Hud/redTrophy.png";
			}
			else { 1==1;}			
			
			//adjust level Up badge based on level
			
			
			
			var ratingx = level.x + 200;
			var ratingy = level.height - 100;
			var chkForHigher = parseInt(localStorage[lvlRating]);
			
			
			
			//3 stars
		
			if (parseInt(levelShotCount) <= 35) {
				document.getElementById("starPop1").src ="Hud/stars3.png";
				document.getElementById("starPop1").style.display = "block";
				//check for higher level rating in past
				
				if (chkForHigher <= 3){	localStorage[lvlRating] = 3;  localStorage[lvlScore] = score;}
				drawCenterText("Shots: " + levelShotCount, level.x, level.y + level.height / 2 + 125, level.width);	
				cashUp = 5;
				localStorage["starCash"] = parseInt(localStorage["starCash"]) + cashUp;	
				starCash = parseInt(localStorage["starCash"]);				
				}
			//2 stars
			else if (parseInt(levelShotCount) > 35 && parseInt(levelShotCount) <= 45) {
				document.getElementById("starPop1").src ="Hud/stars2.png";
				document.getElementById("starPop1").style.display = "block";
				if (chkForHigher <= 2){	localStorage[lvlRating] = 2; localStorage[lvlScore] = score;}
				drawCenterText("Shots: " + levelShotCount, level.x, level.y + level.height / 2 + 125, level.width);
				cashUp = 4;
				localStorage["starCash"] = parseInt(localStorage["starCash"]) + cashUp;	
				starCash = parseInt(localStorage["starCash"]);		
				}
			//1 star
			else {
				document.getElementById("starPop1").src ="Hud/stars1.png";
				document.getElementById("starPop1").style.display = "block";
				localStorage[lvlRating] = 1;
				localStorage[lvlScore] = score;
				drawCenterText("Shots: " + levelShotCount, level.x, level.y + level.height / 2 + 125, level.width);
				cashUp = 3;
				localStorage["starCash"] = parseInt(localStorage["starCash"]) + cashUp;	
				starCash = parseInt(localStorage["starCash"]);		
			}
			// alert(localStorage[lvlRating] + "x=" + ratingx + " y=" + ratingy );
			levelcount ++;
			levelbump = 0;
			levelShotCount = 0;
			// end if levelbump //
			
			}
			// context.fillStyle = "#00ffff";
            // context.font = "24px Verdana";
			// drawCenterText("+ " + cashUp, scX -88 , scY + 37, level.width);
			
			////////Load images based on level 1-6 = fruit, 7-12 = candy, 13-18 = Ghosts, 19+ space Orbs
        var badge = document.getElementById("lvlImageTile");
		if (parseInt(levelcount) >= 7 && parseInt(levelcount) <=12 ) {
		//change bubbles 
		images = loadImages(["Bubbles/newcandy.png"]);
		//change background 
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = "url('Backgrounds/newcandyBack.png')";
		// change level up badge image display
		badge.style.backgroundImage = "url('candyTownm.png')";
		}
		else if (parseInt(levelcount) >= 13 && parseInt(levelcount) <= 17) {
		images = loadImages(["Bubbles/ghostbubbles.png"]);
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = "url('Backgrounds/spookyBack.jpg')";
		// change level up badge image display
		badge.style.backgroundImage = "url('graveBadge.png')";
				}
		else if (parseInt(levelcount) == 18) {
		images = loadImages(["Bubbles/bossBubbles.png"]);
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = "url('Backgrounds/bossBack.gif')";
		// change level up badge image display
		badge.style.backgroundImage = "url('candyTownm.png')";
				}
		else if (parseInt(levelcount) >= 19 && parseInt(levelcount) <= 24) {
		images = loadImages(["Bubbles/orbBubbles.png"]);
		document.body.style.backgroundImage = "url('space_bg.gif')";
		// change level up badge image display
		badge.style.backgroundImage = "url('crazyCosmos.png')";
				}
		else if (parseInt(levelcount) >= 25 && parseInt(levelcount) <= 30 ) {
		images = loadImages(["Bubbles/seaBubbles.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/oceanWorldBack.png')";
		// change level up badge image display
		badge.style.backgroundImage = "url('oceanWorld.png')";
		
		}
		else if (parseInt(levelcount) >= 31 && parseInt(levelcount) <= 36 ) {
		images = loadImages(["Bubbles/space2Bubbles2.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/space_bg.gif')";
		// change level up badge image display
		badge.style.backgroundImage = "url('spaceshipStorm.png')";
		
		}
		else if (parseInt(levelcount) >= 37 && parseInt(levelcount) <= 42 ) {
		images = loadImages(["Bubbles/gummyBubbles2.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/gummyBack.png')";
		// change level up badge image display
		badge.style.backgroundImage = "url('gummyPlanet.png')";
		}
		else if (parseInt(levelcount) >= 43 && parseInt(levelcount) <= 48) {
		images = loadImages(["Bubbles/gummyBubbles.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/gummyBack.png')";
		// change level up badge image display
		badge.style.backgroundImage = "url('gummyCastle.png')";
		}
		else if (parseInt(levelcount) >= 49 && parseInt(levelcount) <= 54) {
		images = loadImages(["Bubbles/invertedBubbles.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/lavaBack.jpg')";
		// change level up badge image display
		badge.style.backgroundImage = "url('lavaCaverns.png')";
		}
		else if (parseInt(levelcount) >= 55 && parseInt(levelcount) <= 60) {
		images = loadImages(["Bubbles/spellBubbles1.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/wizardworldBack.png')";
		// change level up badge image display
		badge.style.backgroundImage = "url('wizardWorld.png')";
		}
		else if (parseInt(levelcount) >= 61 && parseInt(levelcount) <= 66) {
		images = loadImages(["Bubbles/spellBubbles2.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/guardtower.png')";
		// change level up badge image display
		badge.style.backgroundImage = "url('arcanePlanet.png')";
		}
		else if (parseInt(levelcount) >= 67 && parseInt(levelcount) <= 72) {
		images = loadImages(["Bubbles/donutBubbles.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/gummyBack.png')";
		// change level up badge image display
		badge.style.backgroundImage = "url('donutWorld.png')";
		}
		
		
		///////
        bubbleimage = images[0];
			
        }
		
		///////
		
    }
    
    // Draw a frame around the game
    function drawFrame() {
        // Draw background
        context.fillStyle = "#303030";
        context.fillRect(0, 0, (canvas.width - 240), canvas.height);
		
        
        // Draw header
        context.fillStyle = "#660033";
        context.fillRect(0, 0, (canvas.width - 240), 79);  //was originally 79
        
        // Draw title
        context.fillStyle = "#ffd1b3";
        context.font = "20px Comic Sans MS";
        context.fillText("Gui Bubble Story" , 222, 25);
		//draw subtitle
		  context.fillStyle = "#ffffff";
        context.font = "12px Verdana";
        context.fillText("Made for Lee Burnett", 250, 70);
		//draw shot count
		 context.fillStyle = "#ffffff";
        context.font = "12px Verdana";
        context.fillText("Shots: " + levelShotCount, 10, 70);
        
       
     
    }
    
    // Render tiles
    function renderTiles() {
        // Top to bottom
        for (var j=0; j<level.rows; j++) {
            for (var i=0; i<level.columns; i++) {
                // Get the tile
                var tile = level.tiles[i][j];
            
                // Get the shift of the tile for animation
                var shift = tile.shift;
                
                // Calculate the tile coordinates
                var coord = getTileCoordinate(i, j);
                
                // Check if there is a tile present
                if (tile.type >= 0) {
                    // Support transparency
                    context.save();
                    context.globalAlpha = tile.alpha;
                    
                    // Draw the tile using the color
                    drawBubble(coord.tilex, coord.tiley + shift, tile.type);
                    
                    context.restore();
                }
            }
        }
    }
    
    // Render cluster
    function renderCluster(cluster, r, g, b) {
        for (var i=0; i<cluster.length; i++) {
            // Calculate the tile coordinates
            var coord = getTileCoordinate(cluster[i].x, cluster[i].y);
            
            // Draw the tile using the color
            context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            context.fillRect(coord.tilex+level.tilewidth/4, coord.tiley+level.tileheight/4, level.tilewidth/2, level.tileheight/2);
        }
    }
    
    // Render the player bubble
    function renderPlayer() {
        var centerx = player.x + level.tilewidth/2;
        var centery = player.y + level.tileheight/2;
        
        // Draw player background circle
        context.fillStyle = "#7a7a7a";
        context.beginPath();
        context.arc(centerx, centery, level.radius+12, 0, 2*Math.PI, false);
        context.fill();
        context.lineWidth = 6;
        context.strokeStyle = "#8c8c8c";
        context.stroke();

        // Draw the angle
        context.lineWidth = 5;
        context.strokeStyle = "#0000ff";
        context.beginPath();
		context.lineCap = "round";
        context.moveTo(centerx, centery);
        context.lineTo(centerx + 2.5*level.tilewidth * Math.cos(degToRad(player.angle)), centery - 2 *level.tileheight * Math.sin(degToRad(player.angle)));
        context.stroke();
        
        // Draw the next bubble
        drawBubble(player.nextbubble.x -15, player.nextbubble.y, player.nextbubble.tiletype);
        
        // Draw the bubble
        if (player.bubble.visible) {
            drawBubble(player.bubble.x, player.bubble.y, player.bubble.tiletype);
        }
        //draw graphic over bubble
		    //specialShots
	if ( specialShot == 1 && specialShot2 == 0) {
		// alert ("triggered");
			var icyX = player.bubble.x - 30;
			var icyY = player.bubble.y - 40;
			// alert (icyX + " = x " + icyY  + " = y");
        context.drawImage(icyImage, icyX, icyY );
				
		}
		if ( specialShot == 1 && specialShot2 == 1) {
		// alert ("triggered");
			var shockX = player.bubble.x - 125;
			var shockY = player.bubble.y - 148;
			// alert (icyX + " = x " + icyY  + " = y");
        context.drawImage(shockImage, shockX, shockY );
				
		}
	
    }
    
    // Get the tile coordinate
    function getTileCoordinate(column, row) {
        var tilex = level.x + column * level.tilewidth;
        
        // X offset for odd or even rows
        if ((row + rowoffset) % 2) {
            tilex += level.tilewidth/2;
        }
        
        var tiley = level.y + row * level.rowheight;
        return { tilex: tilex, tiley: tiley };
    }
    
    // Get the closest grid position
    function getGridPosition(x, y) {
        var gridy = Math.floor((y - level.y) / level.rowheight);
        
        // Check for offset
        var xoffset = 0;
        if ((gridy + rowoffset) % 2) {
            xoffset = level.tilewidth / 2;
        }
        var gridx = Math.floor(((x - xoffset) - level.x) / level.tilewidth);
        
        return { x: gridx, y: gridy };
    }

    
    // Draw the bubble
    function drawBubble(x, y, index) {
        if (index < 0 || index >= bubblecolors)
            return;
        
        // Draw the bubble sprite
        context.drawImage(bubbleimage, index * 40, 0, 40, 40, x, y, level.tilewidth, level.tileheight);
    }
    
    // Start a new game
    function newGame() {
		// alert(levelcount);
        // // reset score
		if (savedGameLoad == 0) {
		 score = 0;
		levelcount = 1;}
					
					
		if (savedGameLoad == 1 && fromLoadMenu == 0){
			savedGameLoad = 0;
			fromLoadMenu = 0;
			levelcount = 1;
			score = 0;
			score = score + parseInt(localStorage.Score);
			
			levelcount = levelcount + (parseInt(localStorage.Level) -1);
		}
		if (savedGameLoad == 1 && fromLoadMenu == 1){
			savedGameLoad = 0;
			fromLoadMenu = 0;
		}
		// alert(levelcount);
		// Do load of correct images here
			////////Load images based on level 1-6 = fruit, 7-12 = candy, 13-18 = Ghosts, 19+ space Orbs
        
		if (parseInt(levelcount) >= 7 && parseInt(levelcount) <=12 ) {
		images = loadImages(["Bubbles/newcandy.png"]);
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = "url('Backgrounds/newcandyBack.png')";
		lvlUp();
		//do background 
		// do color scheme
		}
		else if (parseInt(levelcount) >= 13 && parseInt(levelcount) <= 17) {
		images = loadImages(["Bubbles/ghostbubbles.png"]);
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = "url('Backgrounds/spookyBack.jpg')";
		
		}
		else if (parseInt(levelcount) == 18) {
		images = loadImages(["Bubbles/bossBubbles.png"]);
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = "url('Backgrounds/bossBack.gif')";
		}
		else if (parseInt(levelcount) >= 19 && parseInt(levelcount) <= 24 ) {
		images = loadImages(["Bubbles/orbBubbles.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/space_bg.gif')";
		}
		else if (parseInt(levelcount)>= 25 && parseInt(levelcount) <= 30 ) {
		images = loadImages(["Bubbles/seaBubbles.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/oceanWorldBack.png')";
		}
		else if (parseInt(levelcount) >= 31 && parseInt(levelcount) <= 36) {
		images = loadImages(["Bubbles/space2Bubbles2.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/space_bg.gif')";
		}
		else if (parseInt(levelcount) >= 37 && parseInt(levelcount) <= 42) {
		images = loadImages(["Bubbles/gummyBubbles2.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/gummyBack.png')";
		}
		else if (parseInt(levelcount) >= 43 && parseInt(levelcount) <= 48) {
		images = loadImages(["Bubbles/gummyBubbles.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/gummyBack.png')";
		}
		else if (parseInt(levelcount) >= 49 && parseInt(levelcount) <= 54) {
		images = loadImages(["Bubbles/invertedBubbles.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/lavaBack.jpg')";
		}
		else if (parseInt(levelcount) >= 55 && parseInt(levelcount) <= 60) {
		images = loadImages(["Bubbles/spellBubbles1.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/wizardworldBack.png')";
		}
		else if (parseInt(levelcount) >= 61 && parseInt(levelcount) <= 66) {
		images = loadImages(["Bubbles/spellBubbles2.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/guardtower.png')";
		}
		else if (parseInt(levelcount) >= 67 && parseInt(levelcount) <= 72) {
		images = loadImages(["Bubbles/donutBubbles.png"]);
		document.body.style.backgroundImage = "url('Backgrounds/gummyBack.png')";
		document.body.style = "background-size: 100% 100%";
		}
//adjust levelnew row
		 if (parseInt(levelcount)> 6 && parseInt(levelcount) <= 11){	newRowCounter = 9; 	}
		if (parseInt(levelcount) >=12 && parseInt(levelcount) <= 17){	newRowCounter = 8;	}
		if (parseInt(levelcount) >= 18 && parseInt(levelcount) <= 24){ newRowCounter = 7; }
		if (parseInt(levelcount) >= 25 && parseInt(levelcount) <= 30){ newRowCounter = 6; }
		if (parseInt(levelcount) >= 31 && parseInt(levelcount) <= 36){ newRowCounter = 5;	}
		if (parseInt(levelcount) >= 37){	newRowCounter = 4;	}
		
		
		///////
        bubbleimage = images[0];
		
		//
        turncounter = 0;
        rowoffset = 0;
        
        // Set the gamestate to ready
        setGameState(gamestates.ready);
        
        // Create the level
        createLevel();

        // Init the next bubble and set the current bubble
        nextBubble();
        nextBubble();
    }
	//Start the next level when level up
    function lvlUp() {
        
        icyCount = parseInt(icyCount) + 1;
		localStorage["icyCount"] = parseInt(icyCount);
		// document.getElementById("levelup1").style.display = "none";
		document.getElementById("starPop1").style.display = "none";
		document.getElementById("levelUpBack").style.display = "none";
        turncounter = 0;
        rowoffset = 0;
		
		//adjust frequency of new rows based on the level
        if (parseInt(levelcount)> 6 && parseInt(levelcount) <= 11){	newRowCounter = 9; 	}
		if (parseInt(levelcount) >= 12 && parseInt(levelcount) <= 17){	newRowCounter = 8;	}
		if (parseInt(levelcount) >= 18 && parseInt(levelcount) <= 24){ newRowCounter = 7; }
		if (parseInt(levelcount) >= 25 && parseInt(levelcount) <= 30){ newRowCounter = 6; }
		if (parseInt(levelcount) >= 31 && parseInt(levelcount) <= 36){ newRowCounter = 5;	}
		if (parseInt(levelcount) >= 37){	newRowCounter = 4;	}
		
        // Set the gamestate to ready
		
        setGameState(gamestates.ready);
		
        // Create the level
        createLevel();

        // Init the next bubble and set the current bubble
        nextBubble();
        nextBubble();
    }
	
    // Create a random level
    function createLevel() {
        // Create a level with random tiles
        for (var j=0; j<level.rows; j++) {
            var randomtile = randRange(0, bubblecolors-1);
            var count = 0;
            for (var i=0; i<level.columns; i++) {
                if (count >= 2) {
                    // Change the random tile
                    var newtile = randRange(0, bubblecolors-1);
                    
                    // Make sure the new tile is different from the previous tile
                    if (newtile == randomtile) {
                        newtile = (newtile + 1) % bubblecolors;
                    }
                    randomtile = newtile;
                    count = 0;
                }
                count++;
                
                if (j < level.rows/2) {
                    level.tiles[i][j].type = randomtile;
                } else {
                    level.tiles[i][j].type = -1;
                }
            }
        }
    }
    
    // Create a random bubble for the player
    function nextBubble() {
        // Set the current bubble
        player.tiletype = player.nextbubble.tiletype;
        player.bubble.tiletype = player.nextbubble.tiletype;
        player.bubble.x = player.x;
        player.bubble.y = player.y;
        player.bubble.visible = true;
        
        // Get a random type from the existing colors
        var nextcolor = getExistingColor();
        
        // Set the next bubble
        player.nextbubble.tiletype = nextcolor;
    }
    
    // Get a random existing color
    function getExistingColor() {
        existingcolors = findColors();
        
        var bubbletype = 0;
        if (existingcolors.length > 0) {
            bubbletype = existingcolors[randRange(0, existingcolors.length-1)];
        }
        
        return bubbletype;
    }
    
    // Get a random int between low and high, inclusive
    function randRange(low, high) {
        return Math.floor(low + Math.random()*(high-low+1));
    }
    
    // Shoot the bubble
    function shootBubble() {
        // Shoot the bubble in the direction of the mouse
        var snd = new Audio("Sounds/Gum_Bubble_Pop.mp3"); // buffers automatically when created
		snd.volume = 0.8;
		snd.play();
		player.bubble.x = player.x;
        player.bubble.y = player.y;
        player.bubble.angle = player.angle;
        player.bubble.tiletype = player.tiletype;
		

        // Set the gamestate
        setGameState(gamestates.shootbubble);
    }
    
    // Check if two circles intersect
    function circleIntersection(x1, y1, r1, x2, y2, r2) {
        // Calculate the distance between the centers
        var dx = x1 - x2;
        var dy = y1 - y2;
        var len = Math.sqrt(dx * dx + dy * dy);
        
        if (len < r1 + r2) {
            // Circles intersect
            return true;
        }
        
        return false;
    }
    
    // Convert radians to degrees
    function radToDeg(angle) {
        return angle * (180 / Math.PI);
    }
    
    // Convert degrees to radians
    function degToRad(angle) {
        return angle * (Math.PI / 180);
    }

    // On mouse movement
    function onMouseMove(e) {
        // Get the mouse position
        var pos = getMousePos(canvas, e);

        // Get the mouse angle
        var mouseangle = radToDeg(Math.atan2((player.y+level.tileheight/2) - pos.y, pos.x - (player.x+level.tilewidth/2)));

        // Convert range to 0, 360 degrees
        if (mouseangle < 0) {
            mouseangle = 180 + (180 + mouseangle);
        }

        // Restrict angle to 8, 172 degrees
        var lbound = 8;
        var ubound = 172;
        if (mouseangle > 90 && mouseangle < 270) {
            // Left
            if (mouseangle > ubound) {
                mouseangle = ubound;
            }
        } else {
            // Right
            if (mouseangle < lbound || mouseangle >= 270) {
                mouseangle = lbound;
            }
        }

        // Set the player angle
        player.angle = mouseangle;
    }
    
    // On mouse button click
    function onMouseUp(e) {
        // Get the mouse position
        var pos = getMousePos(canvas, e);
		
		if ((pos.x > 5  && pos.x <= 80) && (pos.y >= 530 && pos.y <= 625)) {
			
			showSaveLoad();
		}
		
		else if ((pos.x >= 60  && pos.x <= 185) && (pos.y >= 530 && pos.y <= 635)) {
			
			swapBubble();
		}
		else if ((pos.x > 220  && pos.x <= 300) && (pos.y >= 530 && pos.y <= 635) ){
			
			showSpecialSelect();
		}
        else if (gamestate == gamestates.ready) {
            shootBubble();
        }
		else if (gamestate == gamestates.gameover) {
			score = 0;
			levelcount = 0;
            newGame();
        }
		///// GG Level UP
		if (gamestate == gamestates.levelUp) {
			score = score + 1000;
			levelbump ++;
			//show map if lvl 6, 12, 18, or 24 was just completed
			if (parseInt(levelcount) == 7) {
				document.getElementById("warp").style.display = 'block';
				setTimeout(function(){document.getElementById("warp").style.display = 'none';}, 2000)
				document.getElementById("mapImg").src="Maps/mapCandyTown.png";
				document.getElementById("story").innerHTML = "You made it to <b>Candy Town</b>! Collect candies to proceed.";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			else if (parseInt(levelcount) == 13) {
				document.getElementById("warp").style.display = 'block';
				setTimeout(function(){document.getElementById("warp").style.display = 'none';}, 2000)
				document.getElementById("mapImg").src="Maps/mapGraveyard.png";
				document.getElementById("story").innerHTML = "Danger, entering the Ghostly Graveyard. beat 5 levels to reach the boss.";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			else if (parseInt(levelcount) == 19) {
				document.getElementById("warp").style.display = 'block';
				setTimeout(function(){document.getElementById("warp").style.display = 'none';}, 2000)
				document.getElementById("mapImg").src="Maps/mapCosmos.png";
				document.getElementById("story").innerHTML = "You have defeated the aliens, and take the ship. <b>Blast off</b>!";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			else if (parseInt(levelcount) == 25) {
				document.getElementById("warp").style.display = 'block';
				setTimeout(function(){document.getElementById("warp").style.display = 'none';}, 2000)
				document.getElementById("mapImg").src="Maps/mapOceanWorld.png";
				document.getElementById("story").innerHTML = "Fiesty fish and crabby crabs await on <b>Ocean World</b>!";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			else if (parseInt(levelcount) == 31) {
				document.getElementById("warp").style.display = 'block';
				setTimeout(function(){document.getElementById("warp").style.display = 'none';}, 2000)
				document.getElementById("mapImg").src="Maps/mapSpaceship.png";
				document.getElementById("story").innerHTML = "You blast off again and aliens attack";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			else if (parseInt(levelcount) == 37) {
				document.getElementById("warp").style.display = 'block';
				setTimeout(function(){document.getElementById("warp").style.display = 'none';}, 2000)
				document.getElementById("mapImg").src="Maps/mapGummy1.png";
				document.getElementById("story").innerHTML = "You land on the world of Gummies";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			else if (parseInt(levelcount) == 43) {
				document.getElementById("warp").style.display = 'block';
				setTimeout(function(){document.getElementById("warp").style.display = 'none';}, 2000)
				document.getElementById("mapImg").src="Maps/mapGummy2.png";
				document.getElementById("story").innerHTML = "Defeat the Royal Gummies";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			else if (parseInt(levelcount) == 49) {
				document.getElementById("warp").style.display = 'block';
				setTimeout(function(){document.getElementById("warp").style.display = 'none';}, 2000)
				document.getElementById("mapImg").src="Maps/mapLava.png";
				document.getElementById("story").innerHTML = "Just as you defeat the gummies, the floor opens and you fall into a fiery carvern";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			else if (parseInt(levelcount) == 55) {
				document.getElementById("warp").style.display = 'block';
				setTimeout(function(){document.getElementById("warp").style.display = 'none';}, 2000)
				document.getElementById("mapImg").src="Maps/mapWizard1.png";
				document.getElementById("story").innerHTML = "A portal pulls you into another world";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			else if (parseInt(levelcount) == 61) {
				document.getElementById("warp").style.display = 'block';
				setTimeout(function(){document.getElementById("warp").style.display = 'none';}, 2000)
				document.getElementById("mapImg").src="Maps/mapArcane.png";
				document.getElementById("story").innerHTML = "Defeat the Master Mage to escape";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			else if (parseInt(levelcount) == 67) {
				document.getElementById("warp").style.display = 'block';
				setTimeout(function(){document.getElementById("warp").style.display = 'none';}, 2000)
				document.getElementById("mapImg").src="Maps/mapDonut.png";
				document.getElementById("story").innerHTML = "Don't get a belly ache!";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			lvlUp();
		}
		
		/////
    }
    
    // Get the mouse position
    function getMousePos(canvas, e) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: Math.round((e.clientX - rect.left)/(rect.right - rect.left)*canvas.width),
            y: Math.round((e.clientY - rect.top)/(rect.bottom - rect.top)*canvas.height)
        };
    }
    
	function swapBubble() {
		//get values
		var snd7 = new Audio("Sounds/swap.mp3"); // buffers automatically when created
		snd7.volume = 1.0;
		snd7.play();
		var oldPlayer =  player.tiletype
		var oldPlayerBubble = player.bubble.tiletype
        // Set the current bubble
        player.tiletype = player.nextbubble.tiletype;
        player.bubble.tiletype = player.nextbubble.tiletype;
        player.bubble.x = player.x;
        player.bubble.y = player.y;
        player.bubble.visible = true;
        
        // Get a random type from the existing colors
        var nextcolor = getExistingColor();
        
        // Set the next bubble
        player.nextbubble.tiletype = oldPlayerBubble;
    }
	


	
    // Call init to start the game
    init();
};
function hideIntro() {
	document.getElementById("intro").style.display = 'none'; 
	document.getElementById("mapDiv").style.display = 'block'; 
	storySeen = parseInt(localStorage["storySeen"]);
	if (storySeen == 0){
		document.getElementById("mapImg").src="Story/story1.gif";
		setTimeout(function(){
			document.getElementById("mapImg").src="Maps/mapForest.png"; storySeen = 1; localStorage["storySeen"] = 1;
			document.getElementById("warp").style.display = 'block';
							}, 25000)
		setTimeout(function(){
			document.getElementById("warp").style.display = 'none';
							}, 28000)
	}
	
	};
function showBonus() {
		if(specialActive == 0){	snd2.volume = 1.0;
		snd2.play();
		document.getElementById("nice").style.display = 'block';} 
		};
function showBonus2() { 
		
	if(specialActive == 0){	
	document.getElementById("awesome").style.display = 'block';
	document.getElementById("nice").style.display = 'none'; 
	snd3.volume = 1.0;
		snd3.play();
	}
	};
function hideBonus() {
		document.getElementById("awesome").style.display = 'none';
		document.getElementById("nice").style.display = 'none';
		document.getElementById("icyBlast").style.display = 'none';
		document.getElementById("icyBlastBack").style.display = 'none';
		document.getElementById("shockingBlast").style.display = 'none';
		document.getElementById("lightningFullBack").style.display = 'none'
		specialActive = 0;
		};
		
	//save and load screens
			
function showSaveLoad() {
	
	document.getElementById("saveAndLoad").style.display = 'block'; 
	
	};
function hideSaveLoad() {
	document.getElementById("saveAndLoad").style.display = 'none'; 
	};
function saveLevelAndScore() {
	localStorage["Level"] = levelcount;
			localStorage["Score"] = score;
			
	document.getElementById("saveAndLoad").style.display = 'none'; 
	document.getElementById("intro").style.display = 'block';
	document.getElementById("loadSaved").style.display = 'block';
	score = 0;
	levelcount = 1;
	window.location.reload();
	};	
function Quit() {
	localStorage["Level"] = levelcount;
			localStorage["Score"] = score;
			score = 0;
	document.getElementById("saveAndLoad").style.display = 'none'; 
	window.location.reload();
		};
function clearStats1() {
			localStorage["Level"] = 1;
			localStorage["Score"] = 0;
			window.location.reload();
}	
	//load saved level
function loadSavedLevel() {
	if (parseInt(fromLoadMenu) == 0){
		levelcount = parseInt(localStorage.Level);
		if (typeof localStorage["Level"] === "undefined") {levelcount = 1};
		}
score = parseInt(localStorage.Score);
if (typeof localStorage["Score"] === "undefined") {score = 0;};
if (typeof localStorage["starCash"] === "undefined") {localStorage["starCash"] = 0; starCash = 0;};
savedGameLoad = 1;
document.getElementById("saveAndLoad").style.display = 'none'; 
document.getElementById("intro").style.display = 'none';

if (parseInt(levelcount) >= 7 && parseInt(levelcount) <=12 ) {
				document.getElementById("mapImg").src="Maps/mapCandyTown.png";
				document.getElementById("story").innerHTML = "Zone 2";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
	else if (parseInt(levelcount) >= 13 && parseInt(levelcount) <= 17) {
				document.getElementById("mapImg").src="Maps/mapGraveyard.png";
				document.getElementById("story").innerHTML = "Zone 3";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
	else if (parseInt(levelcount) >= 19 && parseInt(levelcount) <= 24 ) {
				document.getElementById("mapImg").src="Maps/mapCosmos.png";
				document.getElementById("story").innerHTML = "Zone 4";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
	else if (parseInt(levelcount) >= 25 && parseInt(levelcount) <= 30 ) {
				document.getElementById("mapImg").src="Maps/mapOceanWorld.png";
				document.getElementById("story").innerHTML = "Zone 5";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
	else if (parseInt(levelcount) >= 31 && parseInt(levelcount) <= 36 ) {
				document.getElementById("mapImg").src="Maps/mapSpaceship.png";
				document.getElementById("story").innerHTML = "Zone 6";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
	else if (parseInt(levelcount) >= 37 && parseInt(levelcount) <= 42 ) {
				document.getElementById("mapImg").src="Maps/mapGummy1.png";
				document.getElementById("story").innerHTML = "Zone 7";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
	else if (parseInt(levelcount) >= 43 && parseInt(levelcount) <= 48 ) {
				document.getElementById("mapImg").src="Maps/mapGummy2.png";
				document.getElementById("story").innerHTML = "Zone 8";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
	else if (parseInt(levelcount) >= 49 && parseInt(levelcount) <= 54 ) {
				document.getElementById("mapImg").src="Maps/mapLava.png";
				document.getElementById("story").innerHTML = "Zone 9";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
	else if (parseInt(levelcount) >= 55 && parseInt(levelcount) <= 60 ) {
				document.getElementById("mapImg").src="Maps/mapWizard1.png";
				document.getElementById("story").innerHTML = "Zone 10";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
	else if (parseInt(levelcount) >= 61 && parseInt(levelcount) <= 66 ) {
				document.getElementById("mapImg").src="Maps/mapArcane.png";
				document.getElementById("story").innerHTML = "Zone 11";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
	else if (parseInt(levelcount) >= 67 && parseInt(levelcount) <= 72 ) {
				document.getElementById("mapImg").src="Maps/mapDonut.png";
				document.getElementById("story").innerHTML = "Zone 12";
			document.getElementById("mapDiv").style.display = 'block'; 
			}		
	else if (parseInt(levelcount) >= 1 && parseInt(levelcount) <= 6 ) {
				document.getElementById("mapImg").src="Maps/mapForest.png";
				document.getElementById("story").innerHTML = "Zone 1";
			document.getElementById("mapDiv").style.display = 'block'; 
			}			
		
		turncounter = 0;
		// //adjust levelnew row
		 // if (parseInt(levelcount)> 1 && parseInt(levelcount) <= 4){	newRowCounter = 9; 	}
		// if (parseInt(levelcount) >=5 && parseInt(levelcount) <= 7){	newRowCounter = 8;	}
		// if (parseInt(levelcount) >= 8 && parseInt(levelcount) <= 10){ newRowCounter = 7; }
		// if (parseInt(levelcount) > 10 && parseInt(levelcount) <= 13){ newRowCounter = 6; }
		// if (parseInt(levelcount) > 13 && parseInt(levelcount) <=16){ newRowCounter = 5;	}
		// if (parseInt(levelcount) > 16 ){	newRowCounter = 4;	}
		
				
}	

function closeSave () {
	document.getElementById("saveAndLoad").style.display = 'none';
	
}

function closeMap () {
	document.getElementById("mapDiv").style.display = 'none';
	
}


     // Level Select functions
function loadLevelSelect(){
	 
	var leftA = document.getElementsByName("leftarrow");
		var leftA2 = leftA[0];
	leftA2.style.display = 'none';
	adjustStarImages();
	document.getElementById("lvlSelectParent").style.display = 'block';
	closeSave();
	}	
function closeLvlSelect() {document.getElementById("lvlSelectParent").style.display = 'none';}
function clickRight(){
	var leftA = document.getElementsByName("leftarrow");
		var leftA2 = leftA[0];
	if (document.getElementById("grid1").offsetWidth > 0 && document.getElementById("grid1").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'block';
		var leftA = document.getElementsByName("leftarrow");
		var leftA2 = leftA[0];
		leftA2.style.display = 'block'
		}
		
	else if (document.getElementById("grid2").offsetWidth > 0 && document.getElementById("grid2").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'block';
		leftA2.style.display = 'block'
		}
	else if (document.getElementById("grid3").offsetWidth > 0 && document.getElementById("grid3").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'block';
		leftA2.style.display = 'block'
		}
	else if (document.getElementById("grid4").offsetWidth > 0 && document.getElementById("grid4").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'block';
		leftA2.style.display = 'block'
		}
	else if (document.getElementById("grid5").offsetWidth > 0 && document.getElementById("grid5").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'none';
		document.getElementById("grid6").style.display = 'block';
		leftA2.style.display = 'block'
		}
		
	else if (document.getElementById("grid6").offsetWidth > 0 && document.getElementById("grid6").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'none';
		document.getElementById("grid6").style.display = 'none';
		document.getElementById("grid7").style.display = 'block';
		leftA2.style.display = 'block'
		}
	else if (document.getElementById("grid7").offsetWidth > 0 && document.getElementById("grid7").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'none';
		document.getElementById("grid6").style.display = 'none';
		document.getElementById("grid7").style.display = 'none';
		document.getElementById("grid8").style.display = 'block';
		leftA2.style.display = 'block'
		}
	else if (document.getElementById("grid8").offsetWidth > 0 && document.getElementById("grid8").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'none';
		document.getElementById("grid6").style.display = 'none';
		document.getElementById("grid7").style.display = 'none';
		document.getElementById("grid8").style.display = 'none';
		document.getElementById("grid9").style.display = 'block';
		leftA2.style.display = 'block'
		}
	else if (document.getElementById("grid9").offsetWidth > 0 && document.getElementById("grid9").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'none';
		document.getElementById("grid6").style.display = 'none';
		document.getElementById("grid7").style.display = 'none';
		document.getElementById("grid8").style.display = 'none';
		document.getElementById("grid9").style.display = 'none';
		document.getElementById("grid10").style.display = 'block';
		leftA2.style.display = 'block'
		}
	else if (document.getElementById("grid10").offsetWidth > 0 && document.getElementById("grid10").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'none';
		document.getElementById("grid6").style.display = 'none';
		document.getElementById("grid7").style.display = 'none';
		document.getElementById("grid8").style.display = 'none';
		document.getElementById("grid9").style.display = 'none';
		document.getElementById("grid10").style.display = 'none';
		document.getElementById("grid11").style.display = 'block';
		
		leftA2.style.display = 'block'
		}	
	else if (document.getElementById("grid11").offsetWidth > 0 && document.getElementById("grid11").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'none';
		document.getElementById("grid6").style.display = 'none';
		document.getElementById("grid7").style.display = 'none';
		document.getElementById("grid8").style.display = 'none';
		document.getElementById("grid9").style.display = 'none';
		document.getElementById("grid11").style.display = 'none';
		document.getElementById("grid12").style.display = 'block';
		leftA2.style.display = 'block'
		}		
	else { return;}
	}
	
function clickLeft(){
	if (document.getElementById("grid1").offsetWidth > 0 && document.getElementById("grid1").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'block';
		document.getElementsByName("leftarrow").style.display = 'block';
		}
		
	else if (document.getElementById("grid2").offsetWidth > 0 && document.getElementById("grid2").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'block';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		var leftA = document.getElementsByName("leftarrow");
		var leftA2 = leftA[0];
		leftA2.style.display = 'none';
		}
	else if (document.getElementById("grid3").offsetWidth > 0 && document.getElementById("grid3").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'block';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		}
	else if (document.getElementById("grid4").offsetWidth > 0 && document.getElementById("grid4").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'block';
		document.getElementById("grid4").style.display = 'none';
		}
	else if (document.getElementById("grid5").offsetWidth > 0 && document.getElementById("grid5").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'block';
		document.getElementById("grid5").style.display = 'none';
		}
	else if (document.getElementById("grid6").offsetWidth > 0 && document.getElementById("grid6").offsetHeight > 0){
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'block';
		document.getElementById("grid6").style.display = 'none';
		}
	else if (document.getElementById("grid7").offsetWidth > 0 && document.getElementById("grid7").offsetHeight > 0){
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'none';
		document.getElementById("grid6").style.display = 'block';
		document.getElementById("grid7").style.display = 'none';
		}
	else if (document.getElementById("grid8").offsetWidth > 0 && document.getElementById("grid8").offsetHeight > 0){
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'none';
		document.getElementById("grid6").style.display = 'none';
		document.getElementById("grid7").style.display = 'block';
		document.getElementById("grid8").style.display = 'none';
		}
	else if (document.getElementById("grid9").offsetWidth > 0 && document.getElementById("grid9").offsetHeight > 0){
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'none';
		document.getElementById("grid6").style.display = 'none';
		document.getElementById("grid7").style.display = 'none';
		document.getElementById("grid8").style.display = 'block';
		document.getElementById("grid9").style.display = 'none';
		}
	else if (document.getElementById("grid10").offsetWidth > 0 && document.getElementById("grid10").offsetHeight > 0){
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'none';
		document.getElementById("grid7").style.display = 'none';
		document.getElementById("grid8").style.display = 'none';
		document.getElementById("grid9").style.display = 'block';
		document.getElementById("grid10").style.display = 'none';
		}
	else if (document.getElementById("grid11").offsetWidth > 0 && document.getElementById("grid11").offsetHeight > 0){
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid7").style.display = 'none';
		document.getElementById("grid8").style.display = 'none';
		document.getElementById("grid9").style.display = 'none';
		document.getElementById("grid10").style.display = 'block';
		document.getElementById("grid11").style.display = 'none';
		}
	else if (document.getElementById("grid12").offsetWidth > 0 && document.getElementById("grid12").offsetHeight > 0){
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid7").style.display = 'none';
		document.getElementById("grid8").style.display = 'none';
		document.getElementById("grid9").style.display = 'none';
		document.getElementById("grid11").style.display = 'block';
		document.getElementById("grid12").style.display = 'none';
		}
	else { return;}
	}

	//apply the clicked	
function closeLvlSelect() {
	document.getElementById("lvlSelectParent").style.display = 'none';
	
}
var checkStarBefore = 0;
//adjust Level Select Stars
function adjustStarImages() {
	for (var i=1; i<=72; i++) {
		var iName = "starImg" + i ;
		var tileImg = "smg-" + i;
		var lvlToCheck = "LvlScore" + i;
		var checkItem = document.getElementById(iName);
		var ilvlCompleted = 0;
		
		//lock levels not yet achieved
				
		//adjust stars
		
		var lvlRatingCheck = "LvlRating" + i;
		var checklvlRating	= localStorage[lvlRatingCheck];
		if (checklvlRating == 1 ) { 
			ilvlCompleted = 1;			
			checkItem.src = "stars1.png";
			checkStarBefore += 1;
			}
		if (checklvlRating == 2 ) { 
			ilvlCompleted = 1;			
			checkItem.src = "stars2.png";
			checkStarBefore += 1;
			}
		if (checklvlRating == 3 ) { 
			ilvlCompleted = 1;			
			checkItem.src = "stars3.png";
			checkStarBefore += 1;
			}	
			// alert (i +" " + localStorage[lvlRatingCheck] + " = lvlRatingCheck");
		if (typeof localStorage[lvlRatingCheck] === "undefined") {
			var k = parseInt(i) + 1;
			var imgBefore = document.getElementById(tileImg);
			var imageBeforePath = imgBefore.src; 
			// alert (tileImg + " = TileImg before checkstar " + imageBeforePath + " = image before" );
			
			if (i <= 72) {tileImg = "smg-" + i;}
			var tileToChange = document.getElementById(tileImg);
			tileToChange.src = "lock.png";
			// alert("check star before = " + checkStarBefore);
			if (checkStarBefore > 0 || i == 1) {	
			 tileToChange.src = imageBeforePath;
			 checkStarBefore = 0;
			 // alert (tileImg + " = TileImg AFTER checkstar");
			}
			
			 }
			 
		
	}
	
	//end stars adjust
}

//close special powers
function hideSpecialSelect(){
	
	document.getElementById("selectPowerMove").style.display = 'none';
	checkVisSpecial = 0;
}
// open special powers
var checkVisSpecial = 0;
function showSpecialSelect(){
	
	if (checkVisSpecial == 1) {hideSpecialSelect(); checkVisSpecial = 0;}
	else {document.getElementById("pwr1Txt2").innerHTML = icyCount;
	document.getElementById("pwr2Txt2").innerHTML = shockCount;
	starCash = parseInt(localStorage["starCash"]);
	// alert(starCash);
	document.getElementById("specialstarCash").innerHTML = starCash;
	document.getElementById("selectPowerMove").style.display = 'block'; 

	checkVisSpecial = 1;}
}
//activate Special1 IcyBlast
function activateIcy(){
	
	if (icyCount < 1) { return;}
	specialShot = 1;
	icyCount = icyCount -= 1;
	document.getElementById("selectPowerMove").style.display = 'none';
	document.getElementById("pwr1Txt2").innerHTML = icyCount;
	localStorage["icyCount"] = parseInt(icyCount);
	 
}
function buyIcySpecial(){
	starCash = parseInt(localStorage["starCash"]);
	if(starCash >= 15) {
		starCash = starCash - 15;
		document.getElementById("specialstarCash").innerHTML = starCash;
		localStorage["starCash"] = starCash;
		icyCount = parseInt(icyCount + 1);
		localStorage["icyCount"] = parseInt(icyCount);
		document.getElementById("pwr1Txt2").innerHTML = icyCount;
	}
}
function buyShockSpecial(){
	starCash = parseInt(localStorage["starCash"]);
	if(starCash >= 15) {
		starCash = starCash - 15;
		document.getElementById("specialstarCash").innerHTML = starCash;
		localStorage["starCash"] = starCash;
		shockCount = parseInt(shockCount + 1);
		localStorage["shockCount"] = parseInt(shockCount);
		document.getElementById("pwr2Txt2").innerHTML = shockCount;
	
}
}


function activateShock(){
	
	if (shockCount < 1) { return;}
	specialShot = 1;
	specialShot2 = 1;
	shockCount = shockCount -= 1;
	document.getElementById("selectPowerMove").style.display = 'none';
	document.getElementById("pwr2Txt2").innerHTML = shockCount;
	localStorage["shockCount"] = parseInt(shockCount);
	 
}
	// // spritesheet animation attempt
	// function lightningTiming() {lightningBall();}
	// function lightningBall() {
	// var canvas = document.querySelector("#viewport");
	// var context = canvas.getContext("2d");
	 // document.getElementById("selectPowerMove").style.display = 'none';
	// var myImage = new Image();
	// myImage.src = "Effects/lightning150.png"; 
	// myImage.addEventListener("load", loadImage, false);
	 
	// function loadImage(e) {
	  // animate();
	// }
	// var shift = 0;
	// var frameWidth = 50;
	// var frameHeight = 50;
	// var totalFrames = 3;
	// var currentFrame = 0;
	 
	// function animate() {
	 // clearCircle(195,586, 21);	 
	   // //draw each frame + place them in the middle
	  // context.drawImage(myImage, shift, 0, frameWidth, frameHeight, 169, 560, frameWidth, frameHeight);
	   // shift += frameWidth + 1;
	   // if (currentFrame == totalFrames) {shift = 0; currentFrame = 0;  }
	  // currentFrame++;
	  // requestAnimationFrame(animate);  
	  // }
	  // var clearCircle = function(x, y, radius){
		// context.beginPath();
		// context.arc(x, y, radius, 0, 2 * Math.PI, false);
		// context.clip();
		// context.clearRect(x - radius - 1, y - radius - 1,
						  // radius * 2 + 2, radius * 2 + 2);
	// };
	// }





// end of script	
