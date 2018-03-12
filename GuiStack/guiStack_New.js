//GuiStack - Tower of Balance - GuiGhost Games 2018
//Credits to http://www.emanueleferonato.com/ for the tuturial on the javascript that started this project
var game;
var levelScore = 0;
var oldLevelScore = 0;
var LEVEL = 1;
var gameOptions = {
    timeLimit: 60,
    gravity: 2000,
    crateSpeed: 700,
    crateHorizontalRange: 540,
    fallingHeight: 650,
    localStorageName: "GuiStack_HighScore",
    gameWidth: 640,
    gameHeight: 960
}

var GROUNDHEIGHT;
var CRATEHEIGHT;
var CrateSrc = 'crate1';
var alreadyclicked = false;
window.onload = function () {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var ratio = windowHeight / windowWidth;
    if (ratio >= 1) {
        if (ratio < 1.3) {
            gameOptions.gameWidth = gameOptions.gameHeight / ratio;
        }
        else {
            gameOptions.gameHeight = gameOptions.gameWidth * ratio;
        }
    }
    game = new Phaser.Game(gameOptions.gameWidth, gameOptions.gameHeight, Phaser.CANVAS);
    game.state.add("introToGame", introScene);
    game.state.add("PlayGame", playGame);
    game.state.start("introToGame");
    //game.state.add("PlayGame", playGame);
    //game.state.start("PlayGame");
    document.getElementById("loadingGG").style.display = 'none';
}


var introScene = function () { };
var levelUpScene = function () { };
var timerI = 0;
introScene.prototype = {
   
    preload: function () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.disableVisibilityChange = true;
        game.load.image("intro", "images/introBack.png");
        game.load.image("playBtn1", "images/playButton.png");
        game.load.image("tut1", "images/intro1.png");
        game.load.image("tut2", "images/intro2.png");
        game.load.image("tut3", "images/intro3.png");
        game.load.audio("gameover", ["assets/sounds/gameover.mp3", "assets/sounds/gameover.ogg"]);
        game.load.bitmapFont("font", "assets/fonts/font.png", "assets/fonts/font.xml");
        game.load.bitmapFont("smallfont", "assets/fonts/smallfont.png", "assets/fonts/smallfont.xml");
    },
    create: function () {
        var introBackS = game.add.image(0, 0, 'intro');
        introBackS.width = game.width;
        introBackS.height = game.height;
        var playBtn = game.add.image(game.width / 2 - 100, game.height/2 + 100, 'playBtn1');
        playBtn.width = 200;
        playBtn.height = 100;
        game.input.onDown.add(this.loadGame1, playBtn);
        //this.cameraGroup = game.add.group();
        //this.crateGroup = game.add.group();},

    },
    loadGame1: function () {
        //introBackS.destroy();
        if (alreadyclicked == false) {
            alreadyclicked = true;
        var tut1 = game.add.image(game.width / 2 - 150, game.height / 2 - 20, 'tut1');
        var tut2 = game.add.image(game.width / 2 - 155, game.height / 2 - 20, 'tut2');
        tut2.visible = false;
        tut1.width = 300;
        tut1.height = 300;
        var timer1 = setTimeout(function () {
            tut1.visible = false;
            tut2.visible = true;
          
            tut2.width = 300;
            tut2.height = 300;

        }, 1500);
        var timer2 = setTimeout(function () {
            tut2.visible = false;
            var tut3 = game.add.image(game.width / 2 - 155, game.height / 2 - 20, 'tut3');
            tut3.width = 300;
            tut3.height = 300;

        }, 3000);
        var timer3 = setTimeout(function () {
           
            game.state.start("PlayGame");
        }, 5000);

      }      
    },


}

    var playGame = function () { };
playGame.prototype = {
    preload: function () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.disableVisibilityChange = true;
        game.load.image("ground1", "assets/sprites/ground1.png");
        game.load.image("ground2", "assets/sprites/ground2.png");
        game.load.image("ground3", "assets/sprites/ground3.png");
        game.load.image("ground4", "assets/sprites/ground4.png");
        game.load.image("ground5", "assets/sprites/ground5.png");
        game.load.image("ground6", "assets/sprites/ground6.png");
        game.load.image("ground7", "assets/sprites/ground7.png");
        game.load.image("ground8", "assets/sprites/ground8.png");
        game.load.image("ground9", "assets/sprites/ground9.png");
        game.load.image("ground10", "assets/sprites/ground9.png");
        game.load.image("plat1", "assets/sprites/plat1.png");
        game.load.image("plat2", "assets/sprites/plat2.png");
        game.load.image("plat3", "assets/sprites/plat3.png");
        game.load.image("plat4", "assets/sprites/plat4.png");
        game.load.image("plat5", "assets/sprites/plat5.png");
        game.load.image("plat6", "assets/sprites/plat6.png");
        game.load.image("plat7", "assets/sprites/plat7.png");
        game.load.image("plat8", "assets/sprites/plat8.png");
        game.load.image("plat9", "assets/sprites/plat9.png");
        game.load.image("plat10", "assets/sprites/plat10.png");
        game.load.image("sky1", "assets/sprites/sky1.png");
        game.load.image("sky2", "assets/sprites/sky2.png");
        game.load.image("sky3", "assets/sprites/sky3.png");
        game.load.image("sky4", "assets/sprites/sky4.png");
        game.load.image("sky5", "assets/sprites/sky5.png");
        game.load.image("sky6", "assets/sprites/sky6.png");
        game.load.image("sky7", "assets/sprites/sky7.png");
        game.load.image("sky8", "assets/sprites/sky8.png");
        game.load.image("sky9", "assets/sprites/sky9.png");
        game.load.image("sky10", "assets/sprites/sky10.png");
        game.load.image("crate1", "assets/sprites/crate1.png");
        game.load.image("crate2", "assets/sprites/crate2.png");
        game.load.image("crate3", "assets/sprites/crate3.png");
        game.load.image("crate4", "assets/sprites/crate4.png");
        game.load.image("crate5", "assets/sprites/crate5.png");
        game.load.image("crate6", "assets/sprites/crate6.png");
        game.load.image("crate7", "assets/sprites/crate7.png");
        game.load.image("crate8", "assets/sprites/crate8.png");
        game.load.image("crate9", "assets/sprites/crate9.png");
        game.load.image("crate10", "assets/sprites/crate10.png");
        game.load.image("title", "assets/sprites/title.png");
        game.load.image("title2", "assets/sprites/title2.png");
        game.load.image("tap", "assets/sprites/tap.png");
        game.load.audio("hit01", ["assets/sounds/hit01.mp3", "assets/sounds/hit01.ogg"]);
        game.load.audio("hit02", ["assets/sounds/hit02.mp3", "assets/sounds/hit02.ogg"]);
        game.load.audio("hit03", ["assets/sounds/hit03.mp3", "assets/sounds/hit03.ogg"]);
        game.load.audio("remove", ["assets/sounds/remove.mp3", "assets/sounds/remove.ogg"]);
        game.load.audio("gameover", ["assets/sounds/gameover.mp3", "assets/sounds/gameover.ogg"]);
        game.load.bitmapFont("font", "assets/fonts/font.png", "assets/fonts/font.xml");
        game.load.bitmapFont("smallfont", "assets/fonts/smallfont.png", "assets/fonts/smallfont.xml");
    },
    create: function () {
        if (!Phaser.Device.desktop && gameOptions.gameHeight < 768 ) {
            game.scale.forceOrientation(false, true);
            game.scale.enterIncorrectOrientation.add(function () {
                game.paused = true;
                document.querySelector("canvas").style.display = "none";
                document.getElementById("wrongorientation").style.display = "block";
            })
            game.scale.leaveIncorrectOrientation.add(function () {
                game.paused = false;
                document.querySelector("canvas").style.display = "block";
                document.getElementById("wrongorientation").style.display = "none";
            })
        }
        this.lastSoundPlayed = Date.now();
        this.savedData = localStorage.getItem(gameOptions.localStorageName) == null ? { score: 0 } : JSON.parse(localStorage.getItem(gameOptions.localStorageName));
        this.hitSound = [game.add.audio("hit01"), game.add.audio("hit02"), game.add.audio("hit03")];
        this.gameOverSound = game.add.audio("gameover");
        this.removeSound = game.add.audio("remove");
        this.score = 0;
        if (LEVEL > 1) { this.score = levelScore; oldLevelScore = this.score; }
        GROUNDHEIGHT = game.cache.getImage("ground1").height;
        CRATEHEIGHT = game.cache.getImage("crate1").height;
        this.firstCrate = true;
        var ImgBase = LEVEL;
        if (ImgBase > 10 && ImgBase < 21) { ImgBase = ImgBase - 10; }
        if (ImgBase > 20 && ImgBase < 31) { ImgBase = ImgBase - 20; }
        if (ImgBase > 30 && ImgBase < 41) { ImgBase = ImgBase - 30; }
        if (ImgBase > 40 && ImgBase < 51) { ImgBase = ImgBase - 40; }
        if (ImgBase > 50 && ImgBase < 61) { ImgBase = ImgBase - 50; }

        var skySrc = 'sky' + ImgBase;

        var sky = game.add.image(0, 0, skySrc);
        sky.width = game.width;
        sky.height = game.height;
        this.cameraGroup = game.add.group();
        this.crateGroup = game.add.group();
        this.cameraGroup.add(this.crateGroup);
        game.physics.startSystem(Phaser.Physics.BOX2D);
        game.physics.box2d.gravity.y = gameOptions.gravity;
        this.canDrop = true;

     

        var groundSrc = "ground" + ImgBase;
        var platSrc = "plat" + ImgBase;
        CrateSrc = "crate" + ImgBase;

        var randomSpot1 = Math.floor((Math.random() * 9) +2);
        var randomSpot2 = Math.floor(Math.random() * 9);
        var ground = game.add.sprite(game.width / 2, game.height, "ground1");
        ground.y = game.height - ground.height / 2;
        ground.loadTexture(groundSrc);

       
        game.add.bitmapText(game.width - (game.width / 4), 70, "font", "Score", 45);
        game.add.bitmapText(game.width - (game.width / 4) + 50  , 105, "font", "" + this.score, 40);
        game.add.bitmapText(10, 70, "font", "Level" , 45);
        game.add.bitmapText(55, 110, "font", "" + LEVEL, 40);
        var platform1 = game.add.sprite(game.width / randomSpot1, game.height, platSrc);
        platform1.y = game.height - (game.height / 2.6);
        var platform2 = game.add.sprite((game.width - (game.width / randomSpot1)), game.height, platSrc);
        platform2.y = game.height - (game.height / 2.8);
        this.movingCrate = game.add.sprite((game.width - gameOptions.crateHorizontalRange) / 2, game.height - GROUNDHEIGHT - gameOptions.fallingHeight, "crate1");
     
                
        this.movingCrate.loadTexture(CrateSrc);
        this.movingCrate.anchor.set(0.5);
        this.cameraGroup.add(this.movingCrate);
        var crateTween = game.add.tween(this.movingCrate).to({
            x: (game.width + gameOptions.crateHorizontalRange) / 2
        }, gameOptions.crateSpeed , Phaser.Easing.Linear.None, true, 0, -1, true);

        game.physics.box2d.enable(ground);
        ground.body.friction = 1;
        ground.body.static = true;
        ground.body.setCollisionCategory(1);
        this.cameraGroup.add(ground);

        game.physics.box2d.enable(platform1);
        platform1.body.friction = 1;
        platform1.body.static = true;
        platform1.body.setCollisionCategory(1);
        this.cameraGroup.add(platform1);

        game.physics.box2d.enable(platform2);
        platform2.body.friction = 1;
        platform2.body.static = true;
        platform2.body.setCollisionCategory(1);
        this.cameraGroup.add(platform2);

        game.input.onDown.add(this.dropCrate, this);

        this.menuGroup = game.add.group();
        var tap = game.add.sprite(game.width / 2, game.height - 240, "tap");
        tap.anchor.set(0.5);
        this.menuGroup.add(tap);
        if (LEVEL <= 1) {
            var title = game.add.image(game.width / 2, tap.y - 470, "title");
            title.anchor.set(0.5, 0);
            this.menuGroup.add(title);
        }
        else {
            var title2 = game.add.image(game.width / 2, tap.y - 470, "title2");
            title2.anchor.set(0.5, 0);
            this.menuGroup.add(title2);
        }
        var hiScoreText = game.add.bitmapText(game.width / 2, game.height - 74, "smallfont", "YOUR TOP SCORE", 24);
        hiScoreText.anchor.set(0.5);
        this.menuGroup.add(hiScoreText);
        var hiScore = game.add.bitmapText(game.width / 2, game.height - 20, "font", this.savedData.score.toString(), 72);
        hiScore.anchor.set(0.5);
        this.menuGroup.add(hiScore);
        var tapTween = game.add.tween(tap).to({
            alpha: 0
        }, 150, Phaser.Easing.Cubic.InOut, true, 0, -1, true);
        //this.levelText = game.add.bitmapText(game.width - (game.width - 10), 90, "font", "Level: " + LEVEL.toString(), 48);
    },
    dropCrate: function () {
        if (this.firstCrate) {
            this.firstCrate = false;
            this.menuGroup.destroy();
            this.timer = 0;
            this.timerEvent = game.time.events.loop(Phaser.Timer.SECOND, this.tick, this);
            this.timeText = game.add.bitmapText(game.width - (game.width / 2) - 60, 60, "font", gameOptions.timeLimit.toString(), 72);
           
            
        }
        if (this.canDrop && this.timer <= gameOptions.timeLimit) {
            this.canDrop = false;
            this.movingCrate.alpha = 0;
            var fallingCrate = game.add.sprite(this.movingCrate.x, this.movingCrate.y, "crate1");
            fallingCrate.hit = false;
            fallingCrate.loadTexture(CrateSrc);
                
          
            game.physics.box2d.enable(fallingCrate);
            fallingCrate.body.friction = 1;
            fallingCrate.body.bullet = true;
            this.crateGroup.add(fallingCrate);
            fallingCrate.body.setCollisionCategory(1);
            fallingCrate.body.setCategoryContactCallback(1, function (b, b2, fixture1, fixture2, contact, impulseInfo) {
                var delay = Date.now() - this.lastSoundPlayed;
                if (delay > 200 && this.timer <= gameOptions.timeLimit) {
                    this.lastSoundPlayed = Date.now();
                    Phaser.ArrayUtils.getRandomItem(this.hitSound).play();
                }
                if (!b.sprite.hit) {
                    b.sprite.hit = true;
                    b.bullet = false;
                    this.getMaxHeight();
                }
            }, this);
        }
    },
    update: function () {
        this.crateGroup.forEach(function (i) {
            if (i.y > game.height + i.height) {
                if (!i.hit) {
                    this.getMaxHeight();
                }
                i.destroy();
            }
        }, this);
    },
    scaleCamera: function (cameraScale) {
        var moveTween = game.add.tween(this.cameraGroup).to({
            x: (game.width - game.width * cameraScale) / 2,
            y: game.height - game.height * cameraScale,
        }, 200, Phaser.Easing.Quadratic.IN, true);
        var scaleTween = game.add.tween(this.cameraGroup.scale).to({
            x: cameraScale,
            y: cameraScale,
        }, 200, Phaser.Easing.Quadratic.IN, true);
        scaleTween.onComplete.add(function () {
            this.canDrop = true;
            this.movingCrate.alpha = 1;
        }, this)
    },
    getMaxHeight: function () {
        var maxHeight = 0
        this.crateGroup.forEach(function (i) {
            if (i.hit) {
                var height = Math.round((game.height - GROUNDHEIGHT - i.y - CRATEHEIGHT / 2) / CRATEHEIGHT) + 1;
                maxHeight = Math.max(height, maxHeight);
            }
        }, this);
        this.movingCrate.y = game.height - GROUNDHEIGHT - maxHeight * CRATEHEIGHT - gameOptions.fallingHeight;
        var newHeight = game.height + CRATEHEIGHT * maxHeight;
        var ratio = game.height / newHeight;
        this.scaleCamera(ratio);
    },
    tick: function () {
        this.timer++;
        this.timeText.text = (gameOptions.timeLimit - this.timer).toString()
        if (this.timer > gameOptions.timeLimit) {
            game.time.events.remove(this.timerEvent);
            this.movingCrate.destroy();
            this.timeText.destroy();
            game.time.events.add(Phaser.Timer.SECOND * 2, function () {
                this.crateGroup.forEach(function (i) {
                    i.body.static = true;
                }, true)
                this.removeEvent = game.time.events.loop(Phaser.Timer.SECOND / 10, this.removeCrate, this);
            }, this);
        }
    },
    removeCrate: function () {
        if (this.crateGroup.children.length > 0) {
            var tempCrate = this.crateGroup.getChildAt(0);
            var height = Math.round((game.height - GROUNDHEIGHT - tempCrate.y - CRATEHEIGHT / 2) / CRATEHEIGHT) + 1;
            this.score += height;
            this.removeSound.play();
            var crateScoreText = game.add.bitmapText(tempCrate.x, tempCrate.y , "smallfont", height.toString(), 36);
            crateScoreText.anchor.set(0.5);
            this.cameraGroup.add(crateScoreText);
            tempCrate.destroy();
        }
        else {
            var scoreCheck = this.score - oldLevelScore;
            game.time.events.remove(this.removeEvent);
            this.gameOverSound.play();
            var scoreText = game.add.bitmapText(game.width / 2, game.height / 4, "font", "Your Total Score", 56);
            scoreText.anchor.set(0.5);
            var scoreDisplayText = game.add.bitmapText(game.width / 2, game.height / 4 + 90, "font", this.score.toString(), 78);
            scoreDisplayText.anchor.set(0.5);
            var scoreText2 = game.add.bitmapText(game.width / 2, ((game.height / 2) -80), "font", "Level Score", 36);
            scoreText2.anchor.set(0.5);
            var scoreDisplayText2 = game.add.bitmapText(game.width / 2, game.height / 2 - 20 , "font", this.score.toString(), 56);
            scoreDisplayText2.anchor.set(0.5);
            localStorage.setItem(gameOptions.localStorageName, JSON.stringify({
                score: Math.max(this.score, this.savedData.score)
            }));
           
            var levelCheck = LEVEL * 10;
            if (LEVEL > 5) { levelCheck = 50 }
            if (scoreCheck >= levelCheck) {
                var lvlUpDisplayText = game.add.bitmapText(game.width / 2, game.height / 4 + 340, "smallfont", "Level Up", 48);
                lvlUpDisplayText.anchor.set(0.5);
                LEVEL = LEVEL + 1;
                levelScore = this.score;
                oldlevelScore = this.score;
                game.time.events.add(Phaser.Timer.SECOND * 5, function () {
                    game.state.start("PlayGame");
                }, this);
            }
           
            else {
                var lvlUpDisplayText = game.add.bitmapText(game.width / 2, game.height / 4 + 330, "smallfont", "Get " + (levelCheck) + " to Level Up", 48);
                lvlUpDisplayText.anchor.set(0.5);
                game.time.events.add(Phaser.Timer.SECOND * 7, function () {
                    game.state.start("PlayGame");
                }, this);}
           
        }
    }
}
  function menuFunction() {
              var x = document.getElementById("myTopnav");
              if (x.className === "topnav") {
                  x.className += " responsive";
              } else {
                  x.className = "topnav";
              }
        }
  function changeActive() {
              var x = document.getElementById(this);
              if (x.className === "active") {
                  x.className += "";
              } else {
                  x.className = "active";
              }
   }  