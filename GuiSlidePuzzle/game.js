//GuiSlide Puzzle - GuiGhost Games 2018
//Credits to http://www.emanueleferonato.com/ for the tuturial on the javascript that started this project

var game;
var gameOptions = {
    gameWidth: 320,
    gameHeight: 420,
    spritesheetSize: 50,
    tileSize: 45,
    fieldSize: 6,
    tileTypes: 6,
    offsetX: 25,
    offsetY: 72,
    tweenSpeed: 25,
    fadeSpeed: 300,
    fallSpeed: 80
}
var NO_DRAG = 0;
var HORIZONTAL_DRAG = 1;
var VERTICAL_DRAG = 2;
var GAME_STATE_IDLE = 0;
var GAME_STATE_DRAG = 1;
var GAME_STATE_STOP = 2;



var roundTime = 30;
var playerLevel = 1;
var playerScore = 0;

var matchesThisTime = 0;
var roundOver = false;
var starCash = 0;
if (typeof localStorage["starCash"] === "undefined") { localStorage["starCash"] = 0; starCash = 0; };
starCash = parseInt(localStorage["starCash"]);
var highScore = 0;
if (typeof localStorage["GuiPuzzleSlide_highScore"] === "undefined") { localStorage["GuiPuzzleSlide_highScore"] = 0; highScore = 0; };
highScore = parseInt(localStorage["GuiPuzzleSlide_highScore"]);



window.onload = function() {
    game = new Phaser.Game(gameOptions.gameWidth, gameOptions.gameHeight);
    game.state.add("PlayGame", playGame)
    game.state.add("LevelUp", levelUp)
    game.state.start("PlayGame");
    
}
var playGame = function(game) {}
var levelUp = function(game) {}
var themeSong;
var hideCover = false;




playGame.prototype = {
    preload: function() {
        game.load.spritesheet("tiles", "tiles.png", gameOptions.spritesheetSize, gameOptions.spritesheetSize);
        game.load.spritesheet("title", "title5.png", 300, 420);
        game.load.image("multiBonus", "multiMatch.png", 128, 128);
        game.load.image("levelUpPop", "levelUp.png", 150, 131);
        game.load.image("timeUp", "timeUp2.png", 128, 128);
        game.load.image("cover1", "borderedFull.png", gameOptions.gameWidth, gameOptions.gameHeight);
        game.load.image("slide1", "slide1.png", gameOptions.gameWidth, gameOptions.gameHeight);
        game.load.image("slide2", "slide2.png", gameOptions.gameWidth, gameOptions.gameHeight);
        game.load.image("slide3", "slide3.png", gameOptions.gameWidth, gameOptions.gameHeight);

        game.load.image("newGame", "newGame.png", 110, 45);
        game.load.audio('themeSong', 'audio/gameLoop.mp3');
        game.load.audio('wrongSnd', 'audio/wrong.mp3');
        game.load.audio('matchSnd', 'audio/matched.mp3');
        game.load.audio('bonusSnd', 'audio/bonus.mp3');
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
   
    create: function () {
        game.add.sprite(10, 0, "title");
        
        
        
        themeSong = game.add.audio('themeSong');
        matchSnd = game.add.audio('matchSnd');
        wrongSnd = game.add.audio('wrongSnd');
        bonusSnd = game.add.audio('bonusSnd');
        sounds = [themeSong];
        game.sound.setDecodedCallback(sounds, start, this);
        function start() {

            sounds.shift();

            themeSong.loopFull(0.4);
             

        }

  // make a game timer
        timer = game.time.create(false);
        timer.loop(1000, this.updateCounter, this);
            
          
       var textStyle = { font: "24px Arial", fill: "Yellow", align: "center" };
       this.textStyle2 = { font: "18px Arial", fill: "Azure", align: "center" };
       this.textStyle3 = { font: "28px Comic Sans MS", fill: "Black", align: "center" };
       this.textStyle4 = { font: "16px Comic Sans MS", fill: "Green", align: "center" };
       this.textStyle4 = { font: "12px Comic Sans MS", fill: "Yellow", align: "center" };
       this.textStyle5 = { font: "20px Comic Sans MS", fill: "Yellow", align: "center", align: 'center', wordWrap: true, wordWrapWidth: 250  };
      
       var leveltext = game.add.text(20, 345, "Level", textStyle);
       this.levelScore = game.add.text(40, 371, playerLevel, textStyle);
       var scoretext = game.add.text(235, 345, "Score", textStyle);
       this.scoreScore = game.add.text(250, 371, playerScore, textStyle);
       this.timerText = game.add.text(125, 46, "Time: " + roundTime, this.textStyle2);
       var pointsToGo = (playerLevel * 75) - playerScore;
       this.LevelUpText = game.add.text(106, 345, pointsToGo + " pts to gain time ", this.textStyle4);


        this.tileArray = [];
        this.tilePool = [];
        this.tileGroup = game.add.group();
        this.tileGroup.x = gameOptions.offsetX;
        this.tileGroup.y = gameOptions.offsetY;
        this.tileMask = game.add.graphics(this.tileGroup.x, this.tileGroup.y);
        this.tileMask.beginFill(0xffffff);
        this.tileMask.drawRect(0, 0, gameOptions.fieldSize * gameOptions.tileSize, gameOptions.fieldSize * gameOptions.tileSize);
        this.tileGroup.mask = this.tileMask;
        this.tileMask.visible = true;

        for(var i = 0; i < gameOptions.fieldSize; i++) {
            this.tileArray[i] = [];
            for(j = 0; j < gameOptions.fieldSize; j++) {
                this.addTile(i, j);
            }
        }
        this.addTempTile();
        game.input.onDown.add(this.pickTile, this);
        this.bonusGraphic = game.add.sprite(95, 50, "multiBonus");
        this.bonusGraphic.visible = false;
        

        this.gameCover = game.add.sprite(0, 0, "cover1");
        var tutText = game.add.text(162, 190, "Unique Match 3 Play  where players can slide blocks as far as they want", this.textStyle5);
       
        function scrollText() {
            
            setTimeout(function () { tutText.text = "Columns and Rows wrap around for you to make optimal matches"; }, 3500);
            setTimeout(function () { tutText.text = "WATCH YOUR TIME - Earn the Level Goal at the bottom to gain Bonus Time"; }, 7500);
            setTimeout(function () { tutText.text = "Earn GuiGhost STARCASH for each level you achieve!"; }, 11000);
            setTimeout(function () { tutText.text = "WHAT ARE YOU WAITING FOR?"; }, 14000);
            setTimeout(function () { tutText.text = "PLAY NOW!"; scrollText(); }, 15600);
            setTimeout(function () { tutText.text = "Unique Match 3 Play  where players can slide blocks as far as they want"; }, 17000);
        };
        scrollText();
      
        tutText.anchor.set(0.5);
        var newBtn1 = game.add.sprite(105, 255, "newGame");
        newBtn1.inputEnabled = true;
        newBtn1.events.onInputDown.add(startIt, this);
        function startIt() {
            newBtn1.destroy(); this.gameCover.destroy(); tutText.destroy();
            game.input.onDown.add(this.pickTile, this);
            timer.start();
        }
        //this.animateCover();
        this.gameState = GAME_STATE_IDLE;
    },

 
    updateCounter: function() {
        roundTime = roundTime - 1;
        //check for time up
        if (roundTime <= 0) {
            this.timeUp();
            timer.destroy()
        }
        this.timerText.text = "Time: " + roundTime;
       
        
    },
    addTile: function(row, col) {
        var theTile = game.add.sprite(col * gameOptions.tileSize, row * gameOptions.tileSize, "tiles");
        theTile.width = gameOptions.tileSize;
        theTile.height = gameOptions.tileSize;
        do {
            var randomTile = game.rnd.integerInRange(0, gameOptions.tileTypes - 1);
            this.tileArray[row][col] = {
                tileSprite: theTile,
                tileValue: randomTile,
                isEmpty: false
            };
        } while (this.isMatch(row, col));
        theTile.frame = randomTile;
        this.tileGroup.add(theTile);
    },
    addTempTile: function() {
        this.tempTile = game.add.sprite(0, 0, "tiles");
        this.tempTile.width = gameOptions.tileSize;
        this.tempTile.height = gameOptions.tileSize;
        this.tempTile.visible = false;
        this.tileGroup.add(this.tempTile);
    },
    pickTile: function(e) {
        this.movingRow = Math.floor((e.position.y - gameOptions.offsetY) / gameOptions.tileSize);
        this.movingCol = Math.floor((e.position.x - gameOptions.offsetX) / gameOptions.tileSize);
        if(this.movingRow >= 0 && this.movingCol >= 0 && this.movingRow < gameOptions.fieldSize && this.movingCol < gameOptions.fieldSize) {
            this.dragDirection = NO_DRAG;
            game.input.onDown.remove(this.pickTile, this);
            game.input.onUp.add(this.releaseTile, this);
            game.input.addMoveCallback(this.moveTile, this);
        }
    },
    update: function () {
      
        switch(this.gameState) {
            case GAME_STATE_DRAG:
                this.handleDrag();
                break;
            case GAME_STATE_STOP:
                this.handleStop();
                break;
        }
        this.gameState = GAME_STATE_IDLE;
    },
    handleDrag: function() {
        switch(this.dragDirection) {
            case HORIZONTAL_DRAG:
                this.tempTile.visible = false;
                this.tempTile.y = this.movingRow * gameOptions.tileSize;
                var deltaX = (Math.floor(this.distX / gameOptions.tileSize) % gameOptions.fieldSize);
                if(deltaX >= 0) {		
                    this.tempTile.frame = this.tileArray[this.movingRow][gameOptions.fieldSize - 1 - deltaX].tileValue;
                }
                else {
                    deltaX = deltaX * -1 - 1;
                    this.tempTile.frame = this.tileArray[this.movingRow][deltaX].tileValue;
                }
                for(var i = 0; i < gameOptions.fieldSize; i++) {
                    this.tileArray[this.movingRow][i].tileSprite.x = (i * gameOptions.tileSize + this.distX) % (gameOptions.tileSize * gameOptions.fieldSize);
                    if(this.tileArray[this.movingRow][i].tileSprite.x < 0) {
                        this.tileArray[this.movingRow][i].tileSprite.x += gameOptions.tileSize * gameOptions.fieldSize;
                    }
                }
                var tileX = this.distX % gameOptions.tileSize;
                if(tileX > 0) {
                    this.tempTile.x = tileX - gameOptions.tileSize;
                    this.tempTile.visible = true;
                }
                if(tileX < 0) {
                    this.tempTile.x = tileX;
                    this.tempTile.visible = true;
                }
                break;
            case VERTICAL_DRAG:
                this.tempTile.visible = false;
                this.tempTile.x = this.movingCol * gameOptions.tileSize;
                var deltaY = (Math.floor(this.distY / gameOptions.tileSize) % gameOptions.fieldSize);
                if(deltaY >= 0) {
                    this.tempTile.frame = this.tileArray[gameOptions.fieldSize - 1 - deltaY][this.movingCol].tileValue;
                } else {
                    deltaY = deltaY * -1 - 1;
                    this.tempTile.frame = this.tileArray[deltaY][this.movingCol].tileValue;
                }
                for(var i = 0; i < gameOptions.fieldSize; i++) {
                    this.tileArray[i][this.movingCol].tileSprite.y = (i * gameOptions.tileSize + this.distY) % (gameOptions.tileSize * gameOptions.fieldSize);
                    if(this.tileArray[i][this.movingCol].tileSprite.y < 0) {
                        this.tileArray[i][this.movingCol].tileSprite.y += gameOptions.tileSize * gameOptions.fieldSize;
                    }
                }
                var tileY = this.distY % gameOptions.tileSize;
                if(tileY > 0) {
                    this.tempTile.y = tileY - gameOptions.tileSize;
                    this.tempTile.visible = true;
                }
                if(tileY < 0) {
                    this.tempTile.y = tileY;
                    this.tempTile.visible = true;
                }
                break;
        }
    },
    handleStop: function() {
        switch(this.dragDirection) {
            case HORIZONTAL_DRAG:
                var shiftAmount = Math.floor(this.distX / (gameOptions.tileSize / 2));
                shiftAmount = Math.ceil(shiftAmount / 2) % gameOptions.fieldSize;
                var tempArray = [];
                if(shiftAmount > 0) {
                    for(var i = 0; i < gameOptions.fieldSize; i++) {
                        tempArray[(shiftAmount + i) % gameOptions.fieldSize] = this.tileArray[this.movingRow][i].tileValue;
                    }
                }
                else {
                    for(var i = 0; i < gameOptions.fieldSize; i++) {
                        tempArray[i] = this.tileArray[this.movingRow][(Math.abs(shiftAmount) + i) % gameOptions.fieldSize].tileValue;
                    }
                }
                var offset = this.distX % gameOptions.tileSize;
                if(Math.abs(offset) > gameOptions.tileSize / 2) {
                    if(offset < 0) {
                        offset = offset + gameOptions.tileSize;
                    } else {
                        offset = offset - gameOptions.tileSize;
                    }
                }
                for(i = 0; i < gameOptions.fieldSize; i++) {
                    this.tileArray[this.movingRow][i].tileValue = tempArray[i];
                    this.tileArray[this.movingRow][i].tileSprite.frame = tempArray[i];
                    this.tileArray[this.movingRow][i].tileSprite.x = i * gameOptions.tileSize + offset;
                    game.add.tween(this.tileArray[this.movingRow][i].tileSprite).to({
                        x: i * gameOptions.tileSize
                    }, gameOptions.tweenSpeed, Phaser.Easing.Cubic.Out, true);
                }
                var tempDestination = -gameOptions.tileSize
                if(offset < 0) {
                    this.tempTile.x += gameOptions.tileSize * gameOptions.fieldSize;
                    tempDestination = gameOptions.fieldSize * gameOptions.tileSize;
                }
                var tween = game.add.tween(this.tempTile).to({
                    x: tempDestination
                }, gameOptions.tweenSpeed, Phaser.Easing.Cubic.Out, true);
                tween.onComplete.add(function() {
                    if(this.matchInBoard()) {
                        this.handleMatches();
                    } else {
                        wrongSnd.play(); 
                        if(shiftAmount != 0) {
                            shiftAmount *= -1;
                            tempArray = [];
                            if(shiftAmount > 0) {
                                for(var i = 0; i < gameOptions.fieldSize; i++) {
                                    tempArray[(shiftAmount + i) % gameOptions.fieldSize] = this.tileArray[this.movingRow][i].tileValue;
                                }
                            } else {
                                for(var i = 0; i < gameOptions.fieldSize; i++) {
                                    tempArray[i] = this.tileArray[this.movingRow][(Math.abs(shiftAmount) + i) % gameOptions.fieldSize].tileValue;
                                }
                            }
                            for(i = 0; i < gameOptions.fieldSize; i++) {
                                this.tileArray[this.movingRow][i].tileValue = tempArray[i];
                                this.tileArray[this.movingRow][i].tileSprite.frame = tempArray[i];
                                this.tileArray[this.movingRow][i].tileSprite.x = i * gameOptions.tileSize;
                                var tween = game.add.tween(this.tileArray[this.movingRow][i].tileSprite).to({
                                    alpha: 0.5
                                }, gameOptions.tweenSpeed / 8, Phaser.Easing.Bounce.Out, true, 0, 8, true);
                            }
                            tween.onComplete.add(function() {
                                if(tween.manager.getAll().length == 1) {
                                    game.input.onDown.add(this.pickTile, this);
                                }
                            }, this)
                        } else {
                            game.input.onDown.add(this.pickTile, this);
                        }
                    }
                }, this)
                break;
            case VERTICAL_DRAG:
                var shiftAmount = Math.floor(this.distY / (gameOptions.tileSize / 2));
                shiftAmount = Math.ceil(shiftAmount / 2) % gameOptions.fieldSize;
                var tempArray = [];
                if(shiftAmount > 0) {
                    for(var i = 0; i < gameOptions.fieldSize; i++) {
                        tempArray[(shiftAmount + i) % gameOptions.fieldSize] = this.tileArray[i][this.movingCol].tileValue;
                    }
                } else {
                    for(var i = 0; i < gameOptions.fieldSize; i++) {
                        tempArray[i] = this.tileArray[(Math.abs(shiftAmount) + i) % gameOptions.fieldSize][this.movingCol].tileValue;
                    }
                }
                var offset = this.distY % gameOptions.tileSize;
                if(Math.abs(offset) > gameOptions.tileSize / 2) {
                    if(offset < 0) {
                        offset = offset + gameOptions.tileSize;
                    } else {
                        offset = offset - gameOptions.tileSize;
                    }
                }
                for(var i = 0; i < gameOptions.fieldSize; i++) {
                    this.tileArray[i][this.movingCol].tileValue = tempArray[i];
                    this.tileArray[i][this.movingCol].tileSprite.frame = tempArray[i];
                    this.tileArray[i][this.movingCol].tileSprite.y = i * gameOptions.tileSize + offset;
                    game.add.tween(this.tileArray[i][this.movingCol].tileSprite).to({
                        y: i * gameOptions.tileSize
                    }, gameOptions.tweenSpeed, Phaser.Easing.Cubic.Out, true);
                }
                var tempDestination = -gameOptions.tileSize
                if(offset < 0) {
                    this.tempTile.y += gameOptions.tileSize * gameOptions.fieldSize;
                    tempDestination = gameOptions.fieldSize * gameOptions.tileSize;
                }
                var tween = game.add.tween(this.tempTile).to({
                    y: tempDestination
                }, gameOptions.tweenSpeed, Phaser.Easing.Cubic.Out, true);
                tween.onComplete.add(function() {
                    if(this.matchInBoard()) {
                        this.handleMatches();
                    } else {
                        wrongSnd.play(); 
                        if(shiftAmount != 0) {
                            shiftAmount *= -1;
                            tempArray = [];
                            if(shiftAmount > 0) {
                                for(var i = 0; i < gameOptions.fieldSize; i++) {
                                    tempArray[(shiftAmount + i) % gameOptions.fieldSize] = this.tileArray[i][this.movingCol].tileValue;
                                }
                            } else {
                                for(var i = 0; i < gameOptions.fieldSize; i++) {
                                    tempArray[i] = this.tileArray[(Math.abs(shiftAmount) + i) % gameOptions.fieldSize][this.movingCol].tileValue;
                                }
                            }
                            for(var i = 0; i < gameOptions.fieldSize; i++) {
                                this.tileArray[i][this.movingCol].tileValue = tempArray[i];
                                this.tileArray[i][this.movingCol].tileSprite.frame = tempArray[i];
                                this.tileArray[i][this.movingCol].tileSprite.y = i * gameOptions.tileSize;
                                var tween = game.add.tween(this.tileArray[i][this.movingCol].tileSprite).to({
                                    alpha: 0.5
                                }, gameOptions.tweenSpeed / 8, Phaser.Easing.Bounce.Out, true, 0, 8, true);
                            }
                            tween.onComplete.add(function() {
                                if(tween.manager.getAll().length == 1) {
                                    game.input.onDown.add(this.pickTile, this);
                                }
                            }, this)
                        } else {
                            game.input.onDown.add(this.pickTile, this);
                        }
                    }
                }, this)
                break;
        }
        this.dragDirection = NO_DRAG;
    },
    handleMatches: function() {
        this.tilesToRemove = [];
        for(var i = 0; i < gameOptions.fieldSize; i++) {
            this.tilesToRemove[i] = [];
            for(var j = 0; j < gameOptions.fieldSize; j++) {
                this.tilesToRemove[i][j] = 0;
            }
        }
        this.handleHorizontalMatches();
        this.handleVerticalMatches();
        this.checkMultiMatch(matchesThisTime);
        for(var i = 0; i < gameOptions.fieldSize; i++) {
            for(var j = 0; j < gameOptions.fieldSize; j++) {
                if(this.tilesToRemove[i][j] != 0) {
                    var tween = game.add.tween(this.tileArray[i][j].tileSprite).to({
                        alpha: 0
                    }, gameOptions.fadeSpeed, Phaser.Easing.Linear.None, true);
                    this.tilePool.push(this.tileArray[i][j].tileSprite);
                    tween.onComplete.add(function(e) {
                        if(tween.manager.getAll().length == 1) {
                            this.fillVerticalHoles();
                        }
                    }, this);
                    this.tileArray[i][j].isEmpty = true;
                }
            }
        }
    },
    fillVerticalHoles: function() {
        for(var i = gameOptions.fieldSize - 2; i >= 0; i--) {
            for(var j = 0; j < gameOptions.fieldSize; j++) {
                if(!this.tileArray[i][j].isEmpty) {
                    var holesBelow = this.countSpacesBelow(i, j);
                    if(holesBelow) {
                        this.moveDownTile(i, j, i + holesBelow, false);
                    }
                }
            }
        }
        for(i = 0; i < gameOptions.fieldSize; i++) {
            var topHoles = this.countSpacesBelow(-1, i);
            for(j = topHoles - 1; j >= 0; j--) {
                var reusedTile = this.tilePool.shift();
                reusedTile.y = (j - topHoles) * gameOptions.tileSize;
                reusedTile.x = i * gameOptions.tileSize;
                reusedTile.alpha = 1;
                var randomTile = game.rnd.integerInRange(0, gameOptions.tileTypes - 1);
                reusedTile.frame = randomTile;
                this.tileArray[j][i] = {
                    tileSprite: reusedTile,
                    tileValue: randomTile,
                    isEmpty: false
                }
                this.moveDownTile(0, i, j, true);
            }
        }
    },
    moveDownTile: function(fromRow, fromCol, toRow, justMove) {
        if(!justMove) {
            var spriteSave = this.tileArray[fromRow][fromCol].tileSprite;
            var valueSave = this.tileArray[fromRow][fromCol].tileValue;
            this.tileArray[toRow][fromCol] = {
                tileSprite: spriteSave,
                tileValue: valueSave,
                isEmpty: false
            };
            this.tileArray[fromRow][fromCol].isEmpty = true;
        }
        var distanceToTravel = toRow - this.tileArray[toRow][fromCol].tileSprite.y / gameOptions.tileSize
        var tween = game.add.tween(this.tileArray[toRow][fromCol].tileSprite).to({
            y: toRow * gameOptions.tileSize
        }, distanceToTravel * gameOptions.fallSpeed, Phaser.Easing.Linear.None, true);
        tween.onComplete.add(function() {
            if(tween.manager.getAll().length == 1) {
                if(this.matchInBoard()) {
                    this.handleMatches();
                } else {
                    game.input.onDown.add(this.pickTile, this);
                }
            }
        }, this)
    },
    handleHorizontalMatches: function() {
        for(var i = 0; i < gameOptions.fieldSize; i++) {
            var colorStreak = 1;
            var currentColor = -1;
            var startStreak = 0;
            for(var j = 0; j < gameOptions.fieldSize; j++) {
                if(this.tileAt(i, j).tileValue == currentColor) {
                    colorStreak++;
                }
                if (this.tileAt(i, j).tileValue != currentColor || j == gameOptions.fieldSize - 1) {

                    if(colorStreak > 2) {
                        var endStreak = j - 1
                        if(this.tileAt(i, j).tileValue == currentColor) {
                            endStreak = j;
                        }
                        for(var k = startStreak; k <= endStreak; k++) {
                            this.tilesToRemove[i][k]++;
                            playerScore = playerScore + 1;
                         
                            
                        }
                        matchesThisTime++
                        //console.log("matches " + matchesThisTime);
                      
                    }
                    if (colorStreak == 4) { playerScore = playerScore + 1; }
                    if (colorStreak == 5) { playerScore = playerScore + 5; }
                    if (colorStreak == 6) { playerScore = playerScore + 14; }
                    this.scoreScore.text = playerScore;
                    this.checkLevelUp(playerScore);
                    pointsToGo = (playerLevel * 75) - playerScore;
                    this.LevelUpText.text = pointsToGo + " pts to gain time "

                    currentColor = this.tileAt(i, j).tileValue
                    colorStreak = 1;
                    startStreak = j;
                }
            }
        }
    },
    handleVerticalMatches: function() {
        for(var i = 0; i < gameOptions.fieldSize; i++) {
            var colorStreak = 1;
            var currentColor = -1;
            var startStreak = 0;
            for(var j = 0; j < gameOptions.fieldSize; j++) {
                if(this.tileAt(j, i).tileValue == currentColor) {
                    colorStreak++;
                }
                if(this.tileAt(j, i).tileValue != currentColor || j == gameOptions.fieldSize - 1) {
                    if(colorStreak > 2) {
                        var endStreak = j - 1
                        if(this.tileAt(j, i).tileValue == currentColor) {
                            endStreak = j;
                        }
                        for(var k = startStreak; k <= endStreak; k++) {
                            this.tilesToRemove[k][i]++;
                            playerScore = playerScore + 1;
                           
                        }
                        matchesThisTime++
                        //console.log("matches " + matchesThisTime);
                        
                    }
                    if (colorStreak == 4) { playerScore = playerScore + 1; }
                    if (colorStreak == 5) { playerScore = playerScore + 5; }
                    if (colorStreak == 6) { playerScore = playerScore + 14; }
                    this.scoreScore.text = playerScore;
                    this.checkLevelUp(playerScore);
                    pointsToGo = (playerLevel * 75) - playerScore;
                    this.LevelUpText.text = pointsToGo + " pts to gain time "

                    
                    currentColor = this.tileAt(j, i).tileValue
                   
                    colorStreak = 1;
                    startStreak = j;
                }
            }
        }
    },
    moveTile: function(e) {
        this.gameState = GAME_STATE_DRAG;
        this.distX = e.position.x - e.positionDown.x;
        this.distY = e.position.y - e.positionDown.y;
        if(this.dragDirection == NO_DRAG) {
            var distance = e.position.distance(e.positionDown);
            if(distance > 5) {
                var dragAngle = Math.abs(Math.atan2(this.distY, this.distX));
                if((dragAngle > Math.PI / 4 && dragAngle < 3 * Math.PI / 4)) {
                    this.dragDirection = VERTICAL_DRAG;
                } else {
                    this.dragDirection = HORIZONTAL_DRAG;
                }
            }
        }
    },
    releaseTile: function() {
        this.gameState = GAME_STATE_STOP;
        game.input.onUp.remove(this.releaseTile, this);
        game.input.deleteMoveCallback(this.moveTile, this);
    },
    tileAt: function(row, col) {
        if(row < 0 || row >= gameOptions.fieldSize || col < 0 || col >= gameOptions.fieldSize) {
            return false;
        }
        return this.tileArray[row][col];
    },
    isHorizontalMatch: function(row, col) {
        return this.tileAt(row, col).tileValue == this.tileAt(row, col - 1).tileValue && this.tileAt(row, col).tileValue == this.tileAt(row, col - 2).tileValue;
    },
    isVerticalMatch: function(row, col) {
        return this.tileAt(row, col).tileValue == this.tileAt(row - 1, col).tileValue && this.tileAt(row, col).tileValue == this.tileAt(row - 2, col).tileValue;
    },
    isMatch: function(row, col) {
        return this.isHorizontalMatch(row, col) || this.isVerticalMatch(row, col);
    },
    matchInBoard: function() {
        for(var i = 0; i < gameOptions.fieldSize; i++) {
            for(var j = 0; j < gameOptions.fieldSize; j++) {
                if (this.isMatch(i, j)) {
                    
                    return true;
                } /*else { wrongSnd.play();}*/
            }
        }
        return false;
    },
    countSpacesBelow: function(row, col) {
        var result = 0;
        for(var i = row + 1; i < gameOptions.fieldSize; i++) {
            if(this.tileArray[i][col].isEmpty) {
                result++;
            }
        }
        return result;
    },
    
    checkLevelUp: function(playerScore) {
        if (playerScore >= playerLevel * 75) {
            var notifLvlUp = game.add.sprite(80, 275, "levelUpPop");
            setTimeout(function () { notifLvlUp.alpha = 0.8 }, 900);
            setTimeout(function () { notifLvlUp.alpha = 0.4 }, 1400);
            setTimeout(function () { notifLvlUp.visible = false; }, 1500);

            playerLevel = playerLevel + 1;
            roundTime = roundTime + 30;
            this.levelScore.text = playerLevel;
            //console.log("LevelUp")
           
        }
    },
    checkMultiMatch: function (x) {
        if (x >= 2) {
            //console.log("multiMatch");
          
            bonusSnd.play();
            this.showBonus(matchesThisTime);
            matchesThisTime = 0;
        } else { matchesThisTime = 0; matchSnd.play();}
    },
    showBonus: function (n) {
        this.bonusGraphic.visible = true;
        this.bonusGraphic.y = 10;
        playerScore = playerScore + 5
        //console.log("multimatch is " + n)
        var bonus = this.bonusGraphic;
        setTimeout(function () { bonus.alpha = 0.8 }, 900);
        setTimeout(function () { bonus.alpha = 0.4 }, 1400);
        setTimeout(function () { bonus.visible = false; playerScore = playerScore + 5 }, 1500);
    
      


    },
    timeUp: function () {
        roundOver = true;
        this.tileGroup.visible = false;
        var timeUpBack = game.add.sprite(35, 80, "timeUp");
        var newBtn = game.add.sprite(105, 285, "newGame");
        newBtn.inputEnabled = true;
        newBtn.events.onInputDown.add(listener, this);
        hiScore = parseInt(localStorage["GuiPuzzleSlide_highScore"]);
        levelTxtOver = game.add.text(150, 180, "+" + (playerLevel - 1), this.textStyle3);
        if (playerLevel > 1) {
            starCash = starCash + (playerLevel - 1);
            localStorage["starCash"] = starCash;
        }
        if (playerScore >= highScore) {
            highScore = playerScore;
            highScoreTxt2 = game.add.text(100, 260, "A New High Score! ", this.textStyle4);
            localStorage.setItem("GuiPuzzleSlide_highScore", highScore);
            
        }
        highScoreTxt = game.add.text(90, 240, "Previous Best: " + hiScore, this.textStyle2);
        function listener() {
          
            location.reload();


                                }
        
    }


    ///end of playGame object
}