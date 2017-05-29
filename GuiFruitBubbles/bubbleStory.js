
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
	var fromLoadMenu = 0;
	var inStreakCount = 0;
	var inStreak = 0;
	var inStreakScore = 0;
	
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
swapImage.src = "swap3.png"; 
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

	
// The function gets called when the window is fully loaded
window.onload = function() {
	// change start//
	
	document.getElementById("playGame").addEventListener("click", newGameEvent);
	document.getElementById("loadSaved").addEventListener("click", loadGameEvent);
	document.getElementById("lvlSelectParent").addEventListener("click", detectTile);
	if (typeof localStorage["Score"] === "undefined") {
	document.getElementById("loadSaved").style.display = 'none';	}
	
	function detectTile(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
		if(!e.target.id) {return;}
		var numOnly = clickedItem.substring(4)
       
		levelcount = parseInt(numOnly);
	
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
                    dropspeed: 900,
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
        
		
		images = loadImages(["fruitbubbles.png"]);
	        		
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
            if (cluster.length > 3 ){ 
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
			if (inStreakCount >= 2) {
				inStreak = 1;
				inStreakScore = parseInt(inStreakScore) + (cluster.length * 100);
				document.getElementById("hotstreak").style.display = 'block';
				snd6.play();
				
			
			}
				
            
            // Find floating clusters
            floatingclusters = findFloatingClusters();
            
            if (floatingclusters.length > 0) {
				//play drop sound
				snd4.volume = 0.8;
				snd4.play();
					
                // Setup drop animation
                for (var i=0; i<floatingclusters.length; i++) {
                    for (var j=0; j<floatingclusters[i].length; j++) {
                        var tile = floatingclusters[i][j];
                        tile.shift = 0;
                        tile.shift = 1;
                        tile.velocity = player.bubble.dropspeed;
                        
                        score += 100;
						//DB - add floating to streak Score
						if (inStreakCount >= 2) {
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
                        if (tile.alpha == 0 || (tile.y * level.rowheight + tile.shift > (level.rows - 1) * level.rowheight + level.tileheight)) {
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
        
            // Set the tile
            level.tiles[gridpos.x][gridpos.y].type = player.bubble.tiletype;
            
            // Check for game over
            if (checkGameOver()) {
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
            if (!matchtype || (currenttile.type == targettile.type)) {
                // Add current tile to the cluster
                foundcluster.push(currenttile);
                
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
		// add linear gradient
		var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
		// light blue
		grd.addColorStop(0, '#cc0066');   
		// dark blue
		grd.addColorStop(1, '#33001a');
		context.fillStyle = grd;
        context.fillRect(level.x - 4, level.y - 4, level.width + 8, level.height + 4 - yoffset);
        
        // Render tiles
        renderTiles();
        
        // Draw level bottom
		var grd2 = context.createLinearGradient(0, 0, canvas.width, canvas.height);
		// light blue
		grd.addColorStop(0, '#ff0080');   
		// dark blue
		grd.addColorStop(1, '#668cff');
		context.fillStyle = grd2;
       
        context.fillRect(level.x - 4, level.y - 4 + level.height + 4 - yoffset, level.width + 8, 2*level.tileheight + 3);
        
		//draw score
		 
        var scorex = level.x + level.width - 150;
        var scorey = level.y+level.height + level.tileheight - yoffset - 8;
        
		context.fillStyle = "#668cff";
		context.font = "16px Verdana";
		drawCenterText("Score: " + score, scorex, scorey -10, 150);
		
		//draw level
		context.fillStyle = "#ffffff";
        context.font = "14px Verdana";
        drawCenterText("Level " + levelcount , scorex, scorey +15, 150);
     
		
		// draw High score
		context.fillStyle = "#ffffff";
        context.font = "12px Verdana";
        var hscorex = level.x + level.width - 150;
        var hscorey = level.y+level.height + level.tileheight - yoffset +20;
		var HighScoreLocal = localStorage.HighScore;
		
		if (typeof localStorage["HighScore"] === "undefined") {localStorage["HighScore"] = 0;};
		if ( score > localStorage.HighScore) { HighScoreLocal = score};
        drawCenterText("High Score: " + HighScoreLocal, scorex, scorey +40, 150);
        
		
		
        // Draw next row counter
		var tillNextRow = newRowCounter - turncounter;
        context.fillStyle = "#ffffff";
        context.font = "12px Verdana";
        var nextrowx = level.x + level.width - 400;
        var nextrowy = level.y+level.height + level.tileheight - yoffset - 8;
        drawCenterText(tillNextRow +" until next row", nextrowx, nextrowy -18, 150);
        
		
		// draw swap control
		if (swapReady) {
			var swaprowx = level.x + level.width - 255;
			var swaprowy = level.y+level.height + level.tileheight - yoffset - 8;
        context.drawImage(swapImage, swaprowx, swaprowy + 10)
    }
		// draw save control
		if (saveImgReady) {
			var savex = level.x + 5;
			var savey = level.y+level.height + level.tileheight - yoffset - 22;
        context.drawImage(saveImage, savex, savey + 10)
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
			context.fillStyle = "rgba(255, 0, 0, 0.8)";
            context.fillRect(level.x - 4, level.y - 4, level.width + 8, level.height + 2 * level.tileheight + 8 - yoffset);
            // draw win image
			document.getElementById("levelup1").style.display = "block";
            context.fillStyle = "#e6e600";
            context.font = "24px Verdana";
            drawCenterText("Level Complete!", level.x, level.y + level.height / 2 + 40, level.width);
			var NextLevelBtn = new String( "Start Next Level")
			nextLevelBtn = NextLevelBtn.bold();
            drawCenterText(NextLevelBtn, level.x, level.y + level.height / 2 + 85, level.width);
			
			if (levelbump >= 1) {
			levelcount ++;
			levelbump = 0;
			}
			////////Load images based on level 1-6 = fruit, 7-12 = candy, 13-18 = Ghosts, 19+ space Orbs
        
		if (parseInt(levelcount) >= 7 && parseInt(levelcount) <=12 ) {
		images = loadImages(["newcandy.png"]);
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = "url('newcandyBack.png')";
		//do background 
		// do color scheme
		}
		else if (parseInt(levelcount) >= 13 && parseInt(levelcount) <= 17) {
		images = loadImages(["ghostbubbles.png"]);
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = "url('spookyBack.jpg')";
		
		}
		else if (parseInt(levelcount) == 18) {
		images = loadImages(["bossBubbles.png"]);
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = "url('bossBack.gif')";
		
		}
		else if (levelcount >= 19 ) {
		images = loadImages(["orbBubbles.png"]);
		document.body.style.backgroundImage = "url('space_bg.gif')";
		
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
        context.fillText("Gui Bubble Story" , 210, 25);
		//draw subtitle
		  context.fillStyle = "#ffffff";
        context.font = "12px Verdana";
        context.fillText("Made for Lee Burnett", 250, 50);
        
       
     
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
        context.lineWidth = 2;
        context.strokeStyle = "#8c8c8c";
        context.stroke();

        // Draw the angle
        context.lineWidth = 2;
        context.strokeStyle = "#0000ff";
        context.beginPath();
        context.moveTo(centerx, centery);
        context.lineTo(centerx + 2.5*level.tilewidth * Math.cos(degToRad(player.angle)), centery - 2 *level.tileheight * Math.sin(degToRad(player.angle)));
        context.stroke();
        
        // Draw the next bubble
        drawBubble(player.nextbubble.x, player.nextbubble.y, player.nextbubble.tiletype);
        
        // Draw the bubble
        if (player.bubble.visible) {
            drawBubble(player.bubble.x, player.bubble.y, player.bubble.tiletype);
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
		images = loadImages(["newcandy.png"]);
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = "url('newcandyBack.png')";
		lvlUp();
		//do background 
		// do color scheme
		}
		else if (parseInt(levelcount) >= 13 && parseInt(levelcount) <= 17) {
		images = loadImages(["ghostbubbles.png"]);
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = "url('spookyBack.jpg')";
		
		}
		else if (parseInt(levelcount) == 18) {
		images = loadImages(["bossBubbles.png"]);
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = "url('bossBack.gif')";
		}
		else if (levelcount >= 19 && parseInt(levelcount) <= 24 ) {
		images = loadImages(["orbBubbles.png"]);
		document.body.style.backgroundImage = "url('space_bg.gif')";
		}
		else if (levelcount >= 25 && parseInt(levelcount) <= 30 ) {
		images = loadImages(["seaBubbles.png"]);
		document.body.style.backgroundImage = "url('oceanWorldBack.png')";
		}
		else if (levelcount >= 31) {
		images = loadImages(["space2Bubbles2.png"]);
		document.body.style.backgroundImage = "url('space_bg.gif')";
		}
//adjust levelnew row
		 if (parseInt(levelcount)> 1 && parseInt(levelcount) <= 4){	newRowCounter = 9; 	}
		if (parseInt(levelcount) >=5 && parseInt(levelcount) <= 7){	newRowCounter = 8;	}
		if (parseInt(levelcount) >= 8 && parseInt(levelcount) <= 10){ newRowCounter = 7; }
		if (parseInt(levelcount) > 10 && parseInt(levelcount) <= 13){ newRowCounter = 6; }
		if (parseInt(levelcount) > 13 && parseInt(levelcount) <=16){ newRowCounter = 5;	}
		if (parseInt(levelcount) > 16 ){	newRowCounter = 4;	}
		
		
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
        
        
		document.getElementById("levelup1").style.display = "none";
        turncounter = 0;
        rowoffset = 0;
		
		//adjust frequency of new rows based on the level
        if (levelcount > 1 && levelcount <= 4){	newRowCounter = 9;	}
		if (levelcount >=5 && levelcount <= 7){	newRowCounter = 8;	}
		if (levelcount >= 8 && levelcount <= 10){ newRowCounter = 7; }
		if (levelcount > 10 && levelcount <= 13){ newRowCounter = 6; }
		if (levelcount > 13 && levelcount <=16){ newRowCounter = 5;	}
		if (levelcount > 16 ){	newRowCounter = 4;	}
		
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
		
		if ((pos.x > 5  && pos.x <= 80) && (pos.y >= 570 && pos.y <= 625)) {
			
			showSaveLoad();
		}
		
		else if ((pos.x >= 125  && pos.x <= 185) && (pos.y >= 570 && pos.y <= 625)) {
			
			swapBubble();
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
			//show map if lvl 6 or 12 was just completed
			if (parseInt(levelcount) == 7) {
				document.getElementById("mapImg").src="mapTown.png";
				document.getElementById("story").innerHTML = "You made it to <b>Candy Town</b>! Collect candies to proceed.";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			else if (parseInt(levelcount) == 13) {
				document.getElementById("mapImg").src="mapGhost.png";
				document.getElementById("story").innerHTML = "Danger, entering the Ghostly Graveyard. beat 5 levels to reach the boss.";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
			else if (parseInt(levelcount) == 19) {
				document.getElementById("mapImg").src="spaceMapMin.png";
				document.getElementById("story").innerHTML = "You have defated the aliens, and take the ship. <b>Blast off</b>!";
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
	};
function showBonus() {
		snd2.volume = 1.0;
		snd2.play();
	document.getElementById("nice").style.display = 'block'; };
function showBonus2() { 
		snd3.volume = 1.0;
		snd3.play();
	document.getElementById("awesome").style.display = 'block';
document.getElementById("nice").style.display = 'none'; };
function hideBonus() {
		document.getElementById("awesome").style.display = 'none';
		document.getElementById("nice").style.display = 'none';
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
	if (parseInt(fromLoadMenu) == 0){levelcount = parseInt(localStorage.Level);}
score = parseInt(localStorage.Score);

savedGameLoad = 1;
document.getElementById("saveAndLoad").style.display = 'none'; 
document.getElementById("intro").style.display = 'none';

if (parseInt(levelcount) >= 7 && parseInt(levelcount) <=12 ) {
				document.getElementById("mapImg").src="mapTown.png";
				document.getElementById("story").innerHTML = "You made it to <b>Candy Town</b>! Collect candies to proceed.";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
	else if (parseInt(levelcount) >= 13 && parseInt(levelcount) <= 17) {
				document.getElementById("mapImg").src="mapGhost.png";
				document.getElementById("story").innerHTML = "Danger, entering the Ghostly Graveyard. beat 5 levels to reach the boss.";
			document.getElementById("mapDiv").style.display = 'block'; 
			}
	else if (parseInt(levelcount) >= 19 && parseInt(levelcount) <= 25 ) {
				document.getElementById("mapImg").src="spaceMapMin.png";
				document.getElementById("story").innerHTML = "You have defated the aliens, and take the ship. <b>Blast off</b>!";
			document.getElementById("mapDiv").style.display = 'block'; 
			}	
		document.getElementById("mapDiv").style.display = 'block';
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
	document.getElementById("lvlSelectParent").style.display = 'block'; 
	var leftA = document.getElementsByName("leftarrow");
		var leftA2 = leftA[0];
	leftA2.style.display = 'none';
	}	
function closeLvlSelect() {document.getElementById("lvlSelectParent").style.display = 'none';}
function clickRight(){
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
		}
	else if (document.getElementById("grid3").offsetWidth > 0 && document.getElementById("grid3").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'block';
		}
	else if (document.getElementById("grid4").offsetWidth > 0 && document.getElementById("grid4").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'block';
		}
	else if (document.getElementById("grid5").offsetWidth > 0 && document.getElementById("grid5").offsetHeight > 0){
		document.getElementById("grid1").style.display = 'none';
		document.getElementById("grid2").style.display = 'none';
		document.getElementById("grid3").style.display = 'none';
		document.getElementById("grid4").style.display = 'none';
		document.getElementById("grid5").style.display = 'none';
		document.getElementById("grid6").style.display = 'block';
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
	else { return;}
	}

	//apply the clicked	
function closeLvlSelect() {
	document.getElementById("lvlSelectParent").style.display = 'none';
	
}


// end of script	
