//GuiStack - Tower of Balance - GuiGhost Games 2018
//Credits to http://www.emanueleferonato.com/ for the tuturial on the javascript that started this project
var game;
var levelScore = 0;
var oldLevelScore = 0;
var LEVEL = 1;
var gameOptions = {
    timeLimit: 30,
    gravity: 2000,
    crateSpeed: 1500,
    crateHorizontalRange: 540,
    fallingHeight: 620,
    localStorageName: "Stacker_HighScore",
    gameWidth: 620,
    gameHeight: 900
}
var playAdTime = 0;
var GROUNDHEIGHT;
var CRATEHEIGHT;
var CrateSrc = 'crate1';
var alreadyclicked = false;
var gameDiv = document.getElementById('gameDiv')
var timeBetweenAds = 120;
var selfAd1time = 1;
//document.getElementById('gameDiv').style["top"] = 0;

window.onload = function () {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight ;
    var ratio = windowHeight/ windowWidth;
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
   

    if (localStorage.getItem("showSelfAd") == null) {
        localStorage.setItem("showSelfAd", 0);
    }
    else { localStorage.setItem("showSelfAd", 0); }

    if (localStorage.getItem("stackerLevel") == null) {
        LEVEL = 1;
        localStorage.setItem("stackerLevel", LEVEL);
    }
    else LEVEL = localStorage.getItem("stackerLevel");
    //console.log("Player is level " + LEVEL);
    game.state.start("introToGame");
    localStorage.setItem("showInterstatial", 0);

    //game.state.add("PlayGame", playGame);
    //game.state.start("PlayGame");
    document.getElementById("loadingGG").style.display = 'none';
    //document.getElementById("loadingGG").style.display = 'none';

    myAudio = new Audio("assets/sounds/loops/OveMelaa-ItaloUnlimited.mp3" ); // game music loop
    myAudio.load();
    myAudioUplifting = new Audio("assets/sounds/loops/Cafofo_Uplifting.mp3"); // game music loop
    myAudioUplifting.load();
    myAudioMystery = new Audio("assets/sounds/loops/Cafofo_ MysteryMenu.mp3"); // game music loop
    myAudioMystery.load();
    myAudioCSI = new Audio("assets/sounds/loops/Cafofo_CSI_Variation.mp3"); // game music loop
    myAudioCSI.load();
    myAudioTension = new Audio("assets/sounds/loops/Cafofo_TensionMix.mp3"); // game music loop
    myAudioTension.load();
    myAudioElements = new Audio("assets/sounds/loops/OveMelaa_Elements.mp3"); // game music loop
    myAudioElements.load();
 
  
    myAudio.volume = 0.2;
    if (typeof myAudio.loop == 'boolean')
    { myAudio.loop = true; }
    else {
        myAudio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }

    myAudioCSI.volume = 0.2;
    if (typeof myAudioCSI.loop == 'boolean')
    { myAudioCSI.loop = true; }
    else {
        myAudioCSI.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }

    myAudioTension.volume = 0.2;
    if (typeof myAudioTension.loop == 'boolean')
    { myAudioTension.loop = true; }
    else {
        myAudioTension.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }

    myAudioElements.volume = 0.2;
    if (typeof myAudioElements.loop == 'boolean')
    { myAudioElements.loop = true; }
    else {
        myAudioElements.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }

    myAudioMystery.volume = 0.2;
    if (typeof myAudioMystery.loop == 'boolean')
    { myAudioMystery.loop = true; }
    else {
        myAudioMystery.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }

    myAudioUplifting.volume = 0.2;
    if (typeof myAudioUplifting.loop == 'boolean')
    { myAudioUplifting.loop = true; }
    else {
        myAudioUplifting.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    pauseAllAudio();
    //myAudio.pause();

    //var playTime = setInterval(updateplayAdTime, 1000)
    //function updateplayAdTime() { playAdTime++; }

    ///mute sound if minimized	
    function handleVisibilityChange() {
        if (document.hidden) {
            pauseAllAudio();
            //myAudio.pause();
        } else {
            //myAudio.play();
            switchAndPlayTheme(LEVEL)
        }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange, false);



 

   

                              ///end of window.load
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
        game.load.image("intro", "images/introBack4.png");
        game.load.image("playBtn1", "images/playButton.png");
        game.load.image("playBtnNew", "images/playButtonNew.png");
        game.load.image("continueBtn", "images/continueButton.png");
        game.load.image("tut1", "images/intro1.png");
        game.load.image("tut2", "images/intro2.png");
        game.load.image("tut3", "images/intro3.png");
        game.load.audio("gameover", ["assets/sounds/gameover.mp3", "assets/sounds/gameover.ogg"]);
        game.load.bitmapFont("font", "assets/fonts/font.png", "assets/fonts/font.xml");
        game.load.bitmapFont("font2", "assets/fonts/font2.png", "assets/fonts/font.xml");
        game.load.bitmapFont("smallfont", "assets/fonts/smallfont.png", "assets/fonts/smallfont.xml");

        ///


    },
    create: function () {
        var introBackS = game.add.image(0, 0, 'intro');
        introBackS.width = game.width;
        introBackS.height = game.height;
          
        //this.cameraGroup = game.add.group();
        //this.crateGroup = game.add.group();},
    
        if (LEVEL == 1) {
         
            var playBtn = game.add.image(game.width / 2 - 90, game.height / 2, 'playBtn1');
            playBtn.width = 200;
            playBtn.height = 100;
            playBtn.inputEnabled = true;
            playBtn.input.PriorityID = 1;
            game.input.onDown.add(this.loadGame1, playBtn);

        

  
        }
        if (LEVEL > 1) {
                
            var continueBtn = game.add.sprite(game.width / 2 - 90, game.height / 2 + 5, 'continueBtn');
            continueBtn.name = 'continueBtn'
            continueBtn.width = 200;
            continueBtn.height = 100;
            continueBtn.inputEnabled = true;
            continueBtn.events.onInputDown.add(this.loadGame1, this);

            var playNew = game.add.sprite(game.width / 2 - 90, game.height / 2 + 130, 'playBtnNew');
            playNew.name = 'playBtnNew'
            playNew.width = 200;
            playNew.height = 100;
            playNew.inputEnabled = true;
            playNew.events.onInputDown.add(this.loadGameNew, this);
                 
           
        }
     
       
    },
    loadGameNew: function(sprite) {
        text = sprite.name
        //console.log(text)
        LEVEL = 1;
 
        localStorage.setItem("stackerScore", 0);
        localStorage.setItem(gameOptions.localStorageName, JSON.stringify({
            score: 0
        }));
        localStorage.setItem("timesPlayed", 0)
        localStorage.setItem("stackerLevel", 1);
        localStorage.setItem("showSelfAd", 0);
        localStorage.setItem("showInterstatial", 0)
        this.loadGame1()
   
},
    loadGame1: function () {
   

        //introBackS.destroy(); 
        //console.log("loadexist")
        if (alreadyclicked == false) {
            //console.log("alreadyclicked == false loadgame1")
            if (LEVEL == 1) {
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

                }, 1250);
                var timer2 = setTimeout(function () {
                    tut2.visible = false;
                    var tut3 = game.add.image(game.width / 2 - 155, game.height / 2 - 20, 'tut3');
                    tut3.width = 300;
                    tut3.height = 300;

                }, 2500);
                var timer3 = setTimeout(function () {
                    //generic AD CALL
                    showAd();
                    game.state.start("PlayGame");
                    document.getElementById("loadingGG").style.display = 'block';
                  
                }, 4000);

            }
            else {
                LEVEL = localStorage.getItem("stackerLevel");
                alreadyclicked = true;
                showAd();
                game.state.start("PlayGame");
                document.getElementById("loadingGG").style.display = 'block';

      
            }
        }
        function unPause() {
            //var rateVisible = document.getElementById("rateMe").style.display;
            //if (rateVisible == 'none') { game.paused = false; clearInterval(playTime2) }
        }
                            //document.querySelector('canvas').style.marginTop = "-20px";
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
        game.load.image("ground10", "assets/sprites/ground10.png");
        game.load.image("ground11", "assets/sprites/ground11.png");
        game.load.image("ground12", "assets/sprites/ground12.png");
        game.load.image("ground13", "assets/sprites/ground13.png");
        game.load.image("ground14", "assets/sprites/ground14.png");
        game.load.image("ground15", "assets/sprites/ground15.png");
        game.load.image("ground16", "assets/sprites/ground16.png");
        game.load.image("ground17", "assets/sprites/ground17.png");
        game.load.image("ground18", "assets/sprites/ground18.png");
        game.load.image("ground19", "assets/sprites/ground19.png");
        game.load.image("ground20", "assets/sprites/ground20.png");
        game.load.image("ground21", "assets/sprites/ground21.png");
        game.load.image("ground22", "assets/sprites/ground22.png");
        game.load.image("ground23", "assets/sprites/ground23.png");
        game.load.image("ground24", "assets/sprites/ground24.png");
        game.load.image("ground25", "assets/sprites/ground25.png");
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
        game.load.image("plat11", "assets/sprites/plat11.png");
        game.load.image("plat12", "assets/sprites/plat12.png");
        game.load.image("plat13", "assets/sprites/plat13.png");
        game.load.image("plat14", "assets/sprites/plat14.png");
        game.load.image("plat15", "assets/sprites/plat15.png");
        game.load.image("plat16", "assets/sprites/plat16.png");
        game.load.image("plat17", "assets/sprites/plat17.png");
        game.load.image("plat18", "assets/sprites/plat18.png");
        game.load.image("plat19", "assets/sprites/plat19.png");
        game.load.image("plat20", "assets/sprites/plat20.png");
        game.load.image("plat21", "assets/sprites/plat21.png");
        game.load.image("plat22", "assets/sprites/plat22.png");
        game.load.image("plat23", "assets/sprites/plat23.png");
        game.load.image("plat24", "assets/sprites/plat24.png");
        game.load.image("plat25", "assets/sprites/plat25.png");
        game.load.image("sky1", "assets/sprites/sky1.png");
        game.load.image("sky2", "assets/sprites/sky2.png");
        game.load.image("sky3", "assets/sprites/sky3.png");
        game.load.image("sky4", "assets/sprites/sky4.png");
        game.load.image("sky5", "assets/sprites/sky5.png");
        game.load.image("sky6", "assets/sprites/sky6.png");
        game.load.image("sky7", "assets/sprites/sky7-2.png");
        game.load.image("sky8", "assets/sprites/sky8.png");
        game.load.image("sky9", "assets/sprites/sky9.png");
        game.load.image("sky10", "assets/sprites/sky10.png");
        game.load.image("sky11", "assets/sprites/sky11.png");
        game.load.image("sky12", "assets/sprites/sky12.png");
        game.load.image("sky13", "assets/sprites/sky13.png");
        game.load.image("sky14", "assets/sprites/sky14.png");
        game.load.image("sky15", "assets/sprites/sky15.png");
        game.load.image("sky16", "assets/sprites/sky16.png");
        game.load.image("sky17", "assets/sprites/sky17.png");
        game.load.image("sky18", "assets/sprites/sky18.png");
        game.load.image("sky19", "assets/sprites/sky19.png");
        game.load.image("sky20", "assets/sprites/sky20.png");
        game.load.image("sky21", "assets/sprites/sky21.png");
        game.load.image("sky22", "assets/sprites/sky22.png");
        game.load.image("sky23", "assets/sprites/sky23.png");
        game.load.image("sky24", "assets/sprites/sky24.png");
        game.load.image("sky25", "assets/sprites/sky20.png");
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
        game.load.image("crate11", "assets/sprites/crate11.png");
        game.load.image("crate12", "assets/sprites/crate12.png");
        game.load.image("crate13", "assets/sprites/crate13.png");
        game.load.image("crate14", "assets/sprites/crate14.png");
        game.load.image("crate15", "assets/sprites/crate15.png");
        game.load.image("crate16", "assets/sprites/crate16.png");
        game.load.image("crate17", "assets/sprites/crate17.png");
        game.load.image("crate18", "assets/sprites/crate18.png");
        game.load.image("crate19", "assets/sprites/crate19.png");
        game.load.image("crate20", "assets/sprites/crate20.png");
        game.load.image("crate21", "assets/sprites/crate21.png");
        game.load.image("crate22", "assets/sprites/crate22.png");
        game.load.image("crate23", "assets/sprites/crate23.png");
        game.load.image("crate24", "assets/sprites/crate24.png");
        game.load.image("crate25", "assets/sprites/crate25.png");
        game.load.image("title", "assets/sprites/title7.png");
        game.load.image("title2", "assets/sprites/title6.png");
        game.load.image("tap", "assets/sprites/tap.png");
        game.load.audio("hit01", ["assets/sounds/hit01.mp3"]);
        game.load.audio("hit02", ["assets/sounds/hit02.mp3"]);
        game.load.audio("hit03", ["assets/sounds/hit03.mp3"]);
        game.load.audio("remove", ["assets/sounds/remove.mp3"]);
        game.load.audio("gameover", ["assets/sounds/Evil_laugh.mp3"]);
        game.load.audio("victory", ["assets/sounds/levelup2.mp3"]);
        game.load.bitmapFont("font", "assets/fonts/font.png", "assets/fonts/font.xml");
        game.load.bitmapFont("font2", "assets/fonts/font2.png", "assets/fonts/font.xml");
        game.load.bitmapFont("smallfont", "assets/fonts/smallfont.png", "assets/fonts/smallfont.xml");

     
    
        
    },
    create: function () {
        document.getElementById("loadingGG").style.display = 'none';
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
        this.victorySound = game.add.audio("victory");
        this.removeSound = game.add.audio("remove");
        this.score = 0;
        if (LEVEL > 1) { this.score = levelScore; oldLevelScore = this.score; }

        if (localStorage.getItem("stackerScore") == null) {
            localStorage.setItem("stackerScore", this.score);
        }
        else {
            this.score = JSON.parse(localStorage.getItem("stackerScore"));
            oldLevelScore = JSON.parse(localStorage.getItem("stackerScore"));
            //console.log("score is " + this.score);
        }
        
        GROUNDHEIGHT = game.cache.getImage("ground1").height;
        CRATEHEIGHT = game.cache.getImage("crate1").height;
        this.firstCrate = true;
        var ImgBase = LEVEL;
        if (ImgBase > 25 && ImgBase <= 50) { ImgBase = ImgBase - 24; }
        if (ImgBase > 50 && ImgBase <= 75) { ImgBase = ImgBase - 49; }
        if (ImgBase > 75 && ImgBase <= 100) { ImgBase = ImgBase - 74; }
       

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

        var randomSpot1 = Math.floor((Math.random() * 9) + 2);
        if (randomSpot1 <= (gameOptions.width / 2)) { randomSpot1 = randomSpot1 - 150; /*console.log("plat1 moved back x = " + randomSpot1)*/ }
        var randomSpot2 = Math.floor(Math.random() * 9);
    
        var ground = game.add.sprite(game.width / 2, game.height, "ground1");
        ground.y = (game.height - ground.height / 2) -70;
        ground.loadTexture(groundSrc);

       
        game.add.bitmapText(game.width - (game.width / 4) + 15 , 50, "smallfont", "Score", 46);
        game.add.bitmapText(game.width - (game.width / 4) + 40 , 110, "smallfont", "" + this.score, 40);
        game.add.bitmapText(10, 50, "smallfont", "Level" , 46);
        game.add.bitmapText(55, 110, "smallfont", "" + LEVEL, 40);
        var platform1 = game.add.sprite(game.width / randomSpot1, game.height, platSrc);
        platform1.y = ground.y - 267;
        if (platform1.x > 250) { platform1.x = 35; }
        var calcPlat2 = (game.width / randomSpot2);

        if (calcPlat2 < (game.width / 2) + 45) {
            calcPlat2 = (game.width / 2) + 145;
            //console.log("less than 1/2 gamewidth")
        }
        if (calcPlat2 > (game.width -100)) { calcPlat2 = (game.width / 2) + 210;  }
        if (calcPlat2 < ((game.width / randomSpot1) + 96)) { calcPlat2 = ((game.width ) - 96);   }
        //console.log("calPlat2 = " + calcPlat2)
        var platform2 = game.add.sprite(calcPlat2, game.height, platSrc);
        platform2.y = ground.y - 185;
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

        ///handle level for timer
        if (LEVEL > 4 && LEVEL <= 6) { gameOptions.timeLimit = 35; }
        if (LEVEL >= 7 && LEVEL <= 10) { gameOptions.timeLimit = 45; }
        if (LEVEL >= 11 && LEVEL <= 15) { gameOptions.timeLimit = 60; }
        if (LEVEL >= 16 && LEVEL <= 20) { gameOptions.timeLimit = 75; }
        if (LEVEL >= 21 ) { gameOptions.timeLimit = 90; }
       
        


        this.menuGroup = game.add.group();
        var tap = game.add.sprite(game.width / 2, game.height - 300, "tap");
        tap.anchor.set(0.5);
        this.menuGroup.add(tap);
        if (LEVEL <= 1) {
            var title = game.add.image(game.width / 2, tap.y - 610, "title");
            title.anchor.set(0.5, 0);
            this.menuGroup.add(title);
        }
        else {
            var title2 = game.add.image(game.width / 2, tap.y - 580, "title2");
            title2.anchor.set(0.5, 0);
            this.menuGroup.add(title2);
        }
        var hiScoreText = game.add.bitmapText(game.width / 2, game.height - 174, "smallfont", "YOUR TOP SCORE", 24);
        hiScoreText.anchor.set(0.5);
        this.menuGroup.add(hiScoreText);
        var hiScore = game.add.bitmapText(game.width / 2, game.height - 120, "font", this.savedData.score.toString(), 72);
        hiScore.anchor.set(0.5);
        this.menuGroup.add(hiScore);
        var tapTween = game.add.tween(tap).to({
            alpha: 0
        }, 250, Phaser.Easing.Cubic.InOut, true, 0, -1, true);
        var levelGoalText = (LEVEL * 5) + 10;
        if (LEVEL > 21) {    levelGoalText = 125;        }
        this.levelText = game.add.bitmapText((game.width / 4 + 32), tap.y - 395, "font2", "Level " + LEVEL.toString(), 72);
        this.levelText2 = game.add.bitmapText((game.width / 4 - 25), tap.y - 285, "font2", "Goal: " + levelGoalText.toString() +  " points", 48);
        this.levelText3 = game.add.bitmapText((game.width / 4 + 20 ), tap.y - 195, "font2",   gameOptions.timeLimit.toString() + " seconds", 48);
    },
    dropCrate: function () {
        
        if (this.firstCrate) {
            this.firstCrate = false;
            this.menuGroup.destroy();
            this.levelText.destroy();
            this.levelText2.destroy();
            this.levelText3.destroy();

            this.timer = 0;
            this.timerEvent = game.time.events.loop(Phaser.Timer.SECOND, this.tick, this);
            this.timeText = game.add.bitmapText(game.width - (game.width / 2) - 70, 60, "font", gameOptions.timeLimit.toString(), 84);
            switchAndPlayTheme(LEVEL)
            
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
                    console.log("maybe missed?")
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
        }, 350, Phaser.Easing.Quadratic.IN, true);
        var scaleTween = game.add.tween(this.cameraGroup.scale).to({
            x: cameraScale,
            y: cameraScale,
        }, 350, Phaser.Easing.Quadratic.IN, true);
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
        this.movingCrate.y = game.height - GROUNDHEIGHT - maxHeight * CRATEHEIGHT - gameOptions.fallingHeight + 1;
        
        var newHeight = game.height + CRATEHEIGHT * maxHeight ;
        var ratio = game.height / newHeight ;
        this.scaleCamera(ratio);
    },
    tick: function () {
        this.timer++;
        timeLeft = gameOptions.timeLimit - this.timer
        playAdTime++;
        this.timeText.text = (gameOptions.timeLimit - this.timer).toString()
   
        if (timeLeft == 9) {                      
            this.timeText.x = (game.width / 2) - 45;
            this.timeText.size + 10;
           
        }
        if (timeLeft < 8) {
        this.timeText.y = this.timeText.y + 25;      
           
            
        }
     
        if (this.timer > gameOptions.timeLimit) {
            
            game.time.events.remove(this.timerEvent);
            this.movingCrate.destroy();
            this.timeText.destroy();
           
            game.time.events.add(Phaser.Timer.SECOND * 2, function () {
                pauseAllAudio();
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
            pauseAllAudio();
            var title3 = game.add.image(game.width / 2, 170, "title2");
            title3.anchor.set(0.5, 0);
            //var scoreText = game.add.bitmapText(game.width / 2, game.height / 4 - 60, "font", "Your Total Score", 56);
            //scoreText.anchor.set(0.5);
            //var scoreDisplayText = game.add.bitmapText(game.width / 2, game.height / 4 + 20, "font", this.score.toString(), 78);
            //scoreDisplayText.anchor.set(0.5);
            var scoreText2 = game.add.bitmapText(game.width / 2, game.height / 4 + 140 , "font2", "Level Score", 56);
            scoreText2.anchor.set(0.5);
            var scoreDisplayText2 = game.add.bitmapText(game.width / 2, game.height / 4 + 220 , "font2", scoreCheck.toString(), 64);
            scoreDisplayText2.anchor.set(0.5);
            localStorage.setItem(gameOptions.localStorageName, JSON.stringify({
                score: Math.max(this.score, this.savedData.score)
            }));

          

            var levelCheck = (LEVEL * 5 ) + 10;
            if (LEVEL > 21) {
                levelcheck = 125;
            }
            //if (LEVEL > 6 && LEVEL <= 8) { levelCheck = 55 }
            //if (LEVEL >= 9 && LEVEL <= 10) { levelCheck = 70 }
            //if (LEVEL > 20) { levelCheck = 150; }
            if (scoreCheck >= levelCheck) {
                
                //myAudio.pause();
                this.victorySound.play();
                var lvlUpDisplayText = game.add.bitmapText(game.width / 2, game.height / 4 + 320, "font2", "Level Up", 78);
                lvlUpDisplayText.anchor.set(0.5);
				
                localStorage.setItem("stackerScore", this.score);
                LEVEL++;
                localStorage.setItem("stackerLevel", LEVEL);
                levelScore = this.score;
                oldlevelScore = this.score;

                //console.log("playAdTime = " + playAdTime);
				game.time.events.add(Phaser.Timer.SECOND * 3, function () {
                    if (playAdTime > timeBetweenAds) {

                        playAdTime = 0;
                        //console.log("show an ad")
                        localStorage.setItem("showInterstatial", 1);
                        gameOptions.crateSpeed = gameOptions.crateSpeed - 25;
                        gameOptions.gravity = gameOptions.gravity + 50;
                        if (gameOptions.crateSpeed <= 749) { gameOptions.crateSpeed = 750; }
                        if (gameOptions.fallingHeight >= 700) { gameOptions.fallingHeight = 700; }
                        if (gameOptions.gravity >= 2500) { gameOptions.gravity = 2500; }
                    }
                    else { game.state.start("PlayGame"); }
				}, this);
				
                //game.time.events.add(Phaser.Timer.SECOND * 6, function () {
                   
                //    localStorage.setItem("showInterstatial", 0);

                //    //gameOptions.fallingHeight = gameOptions.fallingHeight + 25;
                //    gameOptions.crateSpeed = gameOptions.crateSpeed - 25;
                //    gameOptions.gravity = gameOptions.gravity + 50;
                //    if (gameOptions.crateSpeed <= 749) { gameOptions.crateSpeed = 750; }
                //    if (gameOptions.fallingHeight >= 700) { gameOptions.fallingHeight = 700; }
                //    if (gameOptions.gravity >= 2500) { gameOptions.gravity = 2500; }
            
                //    game.state.start("PlayGame"); 
			
                //    //switchAndPlayTheme(LEVEL)
                //}, this);
            }
           
            else {
                pauseAllAudio();
                //myAudio.pause();
                this.gameOverSound.play();
                //var lvlUpDisplayText = game.add.bitmapText(game.width / 2, game.height / 4 + 330, "smallfont", "Get " + (levelCheck) + " to Level Up", 48);
                //lvlUpDisplayText.anchor.set(0.5);
                var levelEndModal2 = document.getElementById("levelComplete");
           
                var levelEndModal2Goal = document.getElementById("goalHtml");
                levelEndModal2Goal.innerHTML = levelCheck;
                var levelEndModal2Score = document.getElementById("scoreHtml");
                levelEndModal2Score.innerHTML = scoreCheck;
                //console.log("playAdTime = " + playAdTime);
                document.getElementById("levelComplete").style.display = 'block'
                if (playAdTime > timeBetweenAds - 45) {
                    playAdTime = 0;

                    game.time.events.add(Phaser.Timer.SECOND * 2, function () {
                        var selfAdVal = localStorage.getItem("showSelfAd");
                        if (selfAdVal == 0) { pauseAllAudio(); localStorage.setItem("showInterstatial", 1); }
                        else if (selfAd1time == 1 && selfAdVal == 1) {
                            pauseAllAudio();
                            selfAd1time = 0;
                            localStorage.setItem("showSelfAd", 1);  localStorage.setItem("showInterstatial", 1);
                        }
                        else { localStorage.setItem("showSelfAd", 0);  localStorage.setItem("showInterstatial", 1);}     
                           
                       
                        //setTimeout(function () { localStorage.setItem("showInterstatial", 0); pauseAllAudio(); }, 8000); 
                      
                    }, this);

                }
				
				
                game.time.events.add(Phaser.Timer.SECOND * 5, function () {
                    game.state.start("PlayGame");
                    pauseAllAudio();
				
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

function switchAndPlayTheme(levelPassed) {
    pauseAllAudio();
    levelPassed = parseInt(levelPassed, 10)
    if (levelPassed > 24) { levelPassed = levelPassed - 24 };
    switch (levelPassed) {
        case 1:
            myAudio.play();
            break;
        case 2:
            myAudioCSI.play();
            break;
        case 3:
            myAudioElements.play();
            break;
        case 4:
            myAudioMystery.play();
            break;
        case 5:
            myAudioUplifting.play();
            break;
        case 6:
            myAudioTension.play();
           
            break;
        case 7:
            myAudioCSI.play();
            break;
        case 8:
            myAudio.play();
            break;
        case 9:
            myAudioUplifting.play();
            break;
        case 10:
            myAudioMystery.play();
            break;
        case 11:
            myAudioElements.play();
            break;
        case 12:
            myAudioCSI.play();
            break;
        case 13:
            myAudioUplifting.play();
            break;
        case 14:
            myAudioTension.play();
            break;
        case 15:
            myAudioMystery.play();
            break;
        case 16:
            myAudio.play();
            break;
        case 17:
            myAudioElements.play();
            break;
        case 18:
            myAudioMystery.play();
            break;

        case 19:
            myAudioUplifting.play();
            break;
        case 20:
            myAudioTension.play();
            break;
        case 21:
            myAudioUplifting.play();
            break;
        case 22:
            myAudioCSI.play();
            break;
        case 23:
            myAudioElements.play();
            break;
        case 24:
            myAudioMystery.play();
            break;
        default:
            myAudio.play();
    }
  }
function pauseAllAudio() {
    myAudio.pause()
    myAudioMystery.pause();
    myAudioCSI.pause();
    myAudioTension.pause();
    myAudioUplifting.pause();
    myAudioElements.pause();
};


//var tryAgain = document.getElementById("continueBtnHtml")
//tryAgain.addEventListener("click", handleLevelPopup(1));
   
var startup = true;
//levelEndModal.style.display = 'none'
window.SDK_OPTIONS = {
    gameId: "ynab9d02pytlmj0g17seumlmdqrst51s",
    onEvent: function (a) {
        switch (a.name) {
            case "SDK_GAME_PAUSE":
                // pause game logic / mute audio
                pauseAllAudio();
                game.paused = true;
                break;
            case "SDK_GAME_START":
                // advertisement done, resume game logic and unmute audio
                game.paused = false;
                if (startup) { startup = false }
                else {
                    pauseAllAudio();
                    switchAndPlayTheme(LEVEL)
                    game.state.start("PlayGame");
                }
              
                break;
            case "SDK_READY":
                // when sdk is ready
                console.log("sdk ready fired")
                break;
            
        }
    }
};
(function (a, b, c) {
    var d = a.getElementsByTagName(b)[0];
    a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d))
})(document, "script", "gamemonetize-sdk");

function showAd() {
    console.log("try show ad before if")
    if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
        sdk.showBanner();
        console.log("after showBanner called")
    }else{
        console.log("sdk detect failed tryign to show ad")
    }


}