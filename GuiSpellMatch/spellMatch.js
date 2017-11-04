// ------------------------------------------------------------------------

// GuiGhost Games 2017 
//


//globals///
var newGameLoad = 0;
var enemyNameGlobal = "Arcannus";
var playerNameGlobal = "GuiMage";
var difficulty = 1;

var cupWon = 0;
var selectedCup = 0;
var lockedStat1 = "???";
var lockedStat2 = "???";
var lockedName = "Silver Cup Champ";
var lockedName2 = "Gold Cup Champ";
var lockedStory = "Win the tournament to unlock";
var playerClusterCount = 0;
var enemyClusterCount = 0;
var animTimer;
var animTimer2;

var soundOn = true;
var enemies = ['Arcannus', 'ElfWiz', 'ArticMage', 'Acidious', 'Blazaron', 'Sylvana', 'Toxigam', 'HarmBringer', 'Invertus', 'DeathMage', 'Milfohim', 'Zerlin', 'Yisenda',
    'Arcannus', 'ElfWiz', 'ArticMage', 'Acidious', 'Blazaron', 'Sylvana', 'Toxigam', 'HarmBringer', 'Invertus', 'DeathMage', 'Milfohim', 'Zerlin', 'Yisenda', 'Firetta',
    'Arcannus', 'ElfWiz', 'ArticMage', 'Acidious', 'Blazaron', 'Sylvana', 'Toxigam', 'HarmBringer', 'Invertus', 'DeathMage', 'Milfohim', 'Zerlin', 'Yisenda', 'Firetta','Magentra', 'Undadish'];
var enemyStats = {
    lvl1: { name: "Arcannus", health: 100, defense: 100, status: 0, story: 'Lives in a volcano, apprentice of Blazaron.'    },
    lvl2: { name: 'ElfWiz', health: 150, defense: 150, status: 0, story: 'Apprentice of Yisenda, from elven Caras Galadhon'    },
    lvl3: { name: 'ArticMage', health: 200, defense: 200, status: 0, story: 'From the far north; cold hearted power.'    },
    lvl4: { name: 'Acidious', health: 250, defense: 250, status: 0,  story: 'Some people say he is a bitter man!'    },
    lvl5: { name: 'Blazaron', health: 300, defense: 300, status: 0,  story: 'Expert at Fire attacks, master of Arcannus'    },
    lvl6: { name: 'Sylvana', health: 350, defense: 350, status: 0,  story: 'She studies to harness the power of crystals'    },
    lvl7: { name: 'Toxigam', health: 400, defense: 400, status: 0, story: 'Alchemy and gases consume him'    },
    lvl8: { name: 'Harmion', health: 450, defense: 450, status: 0,  story: 'Focused on pain of others; not a nice guy!'    },
    lvl9: { name: 'Invertus', health: 500, defense: 500, status: 0,  story: 'Master of the negative dimension'    },
    lvl10: { name: 'DeathMage', health: 550, defense: 500, status: 0,  story: 'Battle Master of the dark arts'    },
    lvl11: { name: 'Milfohim', health: 600, defense: 500, status: 0, story: 'Wise Headmaster of the Mage school'    },
    lvl12: { name: 'Zerlin', health: 650, defense: 500, status: 0,  story: 'Ancient mage of legend, master of many arts'    },
    lvl13: { name: 'Yisenda', health: 700, defense: 500, status: 0, story: 'Elven princess of poweful light magic' },

    ///silver
    lvl14: { name: "Arcannus", health: 1100, defense: 1100, status: 0, story: 'Back for more ' },
    lvl15: { name: 'ElfWiz', health: 1150, defense: 1150, status: 0, story: 'Apprentice of Yisenda, from elven Caras Galadhon' },
    lvl16: { name: 'ArticMage', health: 1200, defense: 1200, status: 0, story: 'From the far north; cold hearted power.' },
    lvl17: { name: 'Acidious', health: 1250, defense: 1250, status: 0, story: 'Some people say he is a bitter man!' },
    lvl18: { name: 'Blazaron', health: 1300, defense: 1300, status: 0, story: 'Expert at Fire attacks, master of Arcannus' },
    lvl19: { name: 'Sylvana', health: 1350, defense: 1350, status: 0, story: 'She studies to harness the power of crystals' },
    lvl20: { name: 'Toxigam', health: 1400, defense: 1400, status: 0, story: 'Alchemy and gases consume him' },
    lvl21: { name: 'Harmion', health: 1450, defense: 1450, status: 0, story: 'Focused on pain of others; not a nice guy!' },
    lvl22: { name: 'Invertus', health: 1500, defense: 1500, status: 0, story: 'Master of the negative dimension' },
    lvl23: { name: 'DeathMage', health: 1550, defense: 1500, status: 0, story: 'Battle Master of the dark arts' },
    lvl24: { name: 'Milfohim', health: 1600, defense: 1500, status: 0, story: 'Wise Headmaster of the Mage school' },
    lvl25: { name: 'Zerlin', health: 1650, defense: 1500, status: 0, story: 'Ancient mage of legend, master of many arts' },
    lvl26: { name: 'Yisenda', health: 1700, defense: 1500, status: 0, story: 'Elven princess of poweful light magic' },
    lvl27: { name: 'Firetta', health: 1850, defense: 1500, status: 0, story: 'Demon raised by Blazaron from the 9 hells' },

    ///gold
    lvl28: { name: "Arcannus", health: 2100, defense: 2100, status: 0, story: 'Lives in a volcano, apprentice of Blazaron.' },
    lvl29: { name: 'ElfWiz', health: 2150, defense: 2150, status: 0, story: 'Apprentice of Yisenda, from elven Caras Galadhon' },
    lvl30: { name: 'ArticMage', health: 2200, defense: 2200, status: 0, story: 'From the far north; cold hearted power.' },
    lvl31: { name: 'Acidious', health: 2250, defense: 2250, status: 0, story: 'Some people say he is a bitter man!' },
    lvl32: { name: 'Blazaron', health: 2300, defense: 2300, status: 0, story: 'Expert at Fire attacks, master of Arcannus' },
    lvl33: { name: 'Sylvana', health: 2350, defense: 2350, status: 0, story: 'She studies to harness the power of crystals' },
    lvl34: { name: 'Toxigam', health: 2400, defense: 2400, status: 0, story: 'Alchemy and gases consume him' },
    lvl35: { name: 'Harmion', health: 2450, defense: 2450, status: 0, story: 'Focused on pain of others; not a nice guy!' },
    lvl36: { name: 'Invertus', health: 2500, defense: 2500, status: 0, story: 'Master of the negative dimension' },
    lvl37: { name: 'DeathMage', health: 2550, defense: 2500, status: 0, story: 'Battle Master of the dark arts' },
    lvl38: { name: 'Milfohim', health: 2600, defense: 2500, status: 0, story: 'Wise Headmaster of the Mage school' },
    lvl39: { name: 'Zerlin', health: 2650, defense: 2500, status: 0, story: 'Ancient mage of legend, master of many arts' },
    lvl40: { name: 'Yisenda', health: 2700, defense: 2500, status: 0, story: 'Elven princess of poweful light magic' },
    lvl41: { name: 'Firetta', health: 2850, defense: 2500, status: 0, story: 'Demon raised by Blazaron from the 9 hells' },
    lvl42: { name: 'Magentra', health: 3000, defense: 2500, status: 0, story: 'Evil Mastermind bent on world domination' },
    lvl43: { name: 'Malfibo', health: 4000, defense: 3500, status: 0, story: 'The secret evil summoner behind the tournament' } ///////secretboss
   
};


////player object
var player1 = {
    health: 100,
    healthMax: 100,
    damage: 0,
    defense: 100,
    defenseMax: 100,
    defenseDrop: 0,
    power: 100,
    playerLevel: 1,
    firePower: 1,
    earthPower: 1,
    airPower: 1,
    arcanePower: 1,
    swordPower: 1,
    meteorPower: 1,
    sparkPower: 1,

    name: "GuiMage"
}
///

////enemy object
var enemy = {
    health: 100,
    healthMax: 100,
    damage: 0,
    defense: 100,
    defenseMax: 100,
    defenseDrop: 0,
    power: 100,
    playerLevel: 1,
    firePower: 1,
    earthPower: 1,
    windPower: 1,
    mysticPower: 1,
    name: "Arcanus"
}

var starCash = 0;
if (typeof localStorage["starCash"] === "undefined") { localStorage["starCash"] = 0; starCash = 0; };
starCash = parseInt(localStorage["starCash"]);

if (typeof localStorage["spellMatch_cupWon"] === "undefined") { localStorage["spellMatch_cupWon"] = 0; cupWon = 0; };
cupWon = parseInt(localStorage["spellMatch_cupWon"]);


///////////hide Load Saved Game if no local storage of player
if (typeof localStorage["spellMatch_Player"] === "undefined") {
    document.getElementById('btnImage2').style.display = 'none';
    document.getElementById('btn2Text').style.display = 'none';
};

//Images
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'Images/0.png';

imgArray[1] = new Image();
imgArray[1].src = 'Images/1.png';

imgArray[2] = new Image();
imgArray[2].src = 'Images/2.png';

imgArray[3] = new Image();
imgArray[3].src = 'Images/3.png';

imgArray[4] = new Image();
imgArray[4].src = 'Images/4.png';

imgArray[5] = new Image();
imgArray[5].src = 'Images/5.png';

imgArray[6] = new Image();
imgArray[6].src = 'Images/6.png';

imgArray[7] = new Image();
imgArray[7].src = 'Images/7.png';

imgArray[8] = new Image();
imgArray[8].src = 'Images/8.png';

imgArray[9] = new Image();
imgArray[9].src = 'Images/9.png';

////////////imgArray2
var imgArray2 = new Array();

imgArray2[0] = new Image();
imgArray2[0].src = 'Images/gabbyLogo.png';

imgArray2[1] = new Image();
imgArray2[1].src = 'Images/HUD/levelUp1.png';

imgArray2[2] = new Image();
imgArray2[2].src = 'Images/starCashBack.png';

imgArray2[3] = new Image();
imgArray2[3].src = 'Images/bigButton.png';

imgArray2[4] = new Image();
imgArray2[4].src = 'Images/star.png';

imgArray2[5] = new Image();
imgArray2[5].src = 'Images/3rdStar.png';

imgArray2[6] = new Image();
imgArray2[6].src = 'Images/hudLevel.png';

imgArray2[7] = new Image();
imgArray2[7].src = 'Images/HUD/loss.png';

imgArray2[8] = new Image();
imgArray2[8].src = 'Images/HUD/newGame.png';

imgArray2[9] = new Image();
imgArray2[9].src = 'Images/HUD/buyNow.png';

imgArray2[10] = new Image();
imgArray2[10].src = 'Images/HUD/levelBonus.png';

imgArray2[11] = new Image();
imgArray2[11].src = 'Images/HUD/awesome2.gif';

imgArray2[12] = new Image();
imgArray2[12].src = 'Images/HUD/levelUp1.png';

imgArray2[13] = new Image();
imgArray2[13].src = 'Images/Hero/idle_1.png';

imgArray2[14] = new Image();
imgArray2[14].src = 'Images/HUD/healthContainer.png';

imgArray2[15] = new Image();
imgArray2[15].src = 'Images/HUD/healthBar.png';

imgArray2[16] = new Image();
imgArray2[16].src = 'Images/HUD/defenseContainer.png';

imgArray2[17] = new Image();
imgArray2[17].src = 'Images/HUD/defenseBar2.png';

imgArray2[18] = new Image();
imgArray2[18].src = 'Images/Enemy/lvl1.png';

imgArray2[19] = new Image();
imgArray2[19].src = 'Images/HUD/bottomBar.png';

imgArray2[20] = new Image();
imgArray2[20].src = 'Images/HUD/powerBack.png';

imgArray2[21] = new Image();
imgArray2[21].src = 'Images/HUD/powerBackEnemy.png';

imgArray2[22] = new Image();
imgArray2[22].src = 'Images/HUD/powerInnerBar.png';

imgArray2[23] = new Image();
imgArray2[23].src = 'Images/HUD/bronzeTrophyWon.png';

imgArray2[24] = new Image();
imgArray2[24].src = 'Images/HUD/silverTrophyWon.png';

imgArray2[25] = new Image();
imgArray2[25].src = 'Images/HUD/goldTrophyWon.png';

////////////imgArray3
var imgArray3 = new Array();

imgArray3[0] = new Image();
imgArray3[0].src = 'Images/buttons/greyGear.png';

imgArray3[1] = new Image();
imgArray3[1].src = 'Images/buttons/greenHouse.png';

imgArray3[2] = new Image();
imgArray3[2].src = 'Images/buttons/greySound.png';

imgArray3[3] = new Image();
imgArray3[3].src = 'Images/buttons/greyMenu.png';

imgArray3[4] = new Image();
imgArray3[4].src = 'Images/buttons/greenTrophy.png';

imgArray3[5] = new Image();
imgArray3[5].src = 'Images/buttons/greyThumbUp.png';

imgArray3[6] = new Image();
imgArray3[6].src = 'Images/HUD/HorizLevelUp.png';

imgArray3[7] = new Image();
imgArray3[7].src = 'Images/HUD/ButtonPlus.png';

imgArray3[8] = new Image();
imgArray3[8].src = 'Images/HUD/darkGreenSave.png';

imgArray3[9] = new Image();
imgArray3[9].src = 'Images/HUD/spellLevelUp.png';

////////////imgArray4
imgArray4 = new Array();

imgArray4[0] = new Image();
imgArray4[0].src = 'Images/Enemy/lvl1.png';

imgArray4[1] = new Image();
imgArray4[1].src = 'Images/Enemy/lvl2.png';

imgArray4[2] = new Image();
imgArray4[2].src = 'Images/Enemy/lvl3.png';

imgArray4[3] = new Image();
imgArray4[3].src = 'Images/Enemy/lvl4.png';

imgArray4[4] = new Image();
imgArray4[4].src = 'Images/Enemy/lvl5.png';

imgArray4[5] = new Image();
imgArray4[5].src = 'Images/Enemy/lvl6.png';

imgArray4[6] = new Image();
imgArray4[6].src = 'Images/Enemy/lvl7.png';

imgArray4[7] = new Image();
imgArray4[7].src = 'Images/Enemy/lvl8.png';

imgArray4[8] = new Image();
imgArray4[8].src = 'Images/Enemy/lvl9.png';

imgArray4[9] = new Image();
imgArray4[9].src = 'Images/Enemy/lvl10.png';

imgArray4[10] = new Image();
imgArray4[10].src = 'Images/Enemy/lvl11.png';

imgArray4[11] = new Image();
imgArray4[11].src = 'Images/Enemy/lvl12.png';

imgArray4[12] = new Image();
imgArray4[12].src = 'Images/Enemy/lvl13.png';

imgArray4[13] = new Image();
imgArray4[13].src = 'Images/Enemy/lvl14.png';

imgArray4[14] = new Image();
imgArray4[14].src = 'Images/Enemy/lvl15.png';

imgArray4[15] = new Image();
imgArray4[15].src = 'Images/Enemy/lvl16.png';

imgArray4[16] = new Image();
imgArray4[16].src = 'Images/Enemy/lvl17.png';

imgArray4[17] = new Image();
imgArray4[17].src = 'Images/Enemy/lvl18.png';

imgArray4[18] = new Image();
imgArray4[18].src = 'Images/Enemy/lvl19.png';

imgArray4[19] = new Image();
imgArray4[19].src = 'Images/Enemy/lvl20.png';

imgArray4[20] = new Image();
imgArray4[20].src = 'Images/Enemy/lvl21.png';


imgArray4[21] = new Image();
imgArray4[21].src = 'Images/Enemy/lvl22.png';

imgArray4[22] = new Image();
imgArray4[22].src = 'Images/Enemy/lvl23.png';

imgArray4[23] = new Image();
imgArray4[23].src = 'Images/Enemy/lvl24.png';

imgArray4[24] = new Image();
imgArray4[24].src = 'Images/Enemy/lvl25.png';

imgArray4[25] = new Image();
imgArray4[25].src = 'Images/Enemy/lvl26.png';

imgArray4[26] = new Image();
imgArray4[26].src = 'Images/Enemy/lvl27.png';


imgArray4[27] = new Image();
imgArray4[27].src = 'Images/Enemy/lvl28.png';

imgArray4[28] = new Image();
imgArray4[28].src = 'Images/Enemy/lvl29.png';

imgArray4[29] = new Image();
imgArray4[29].src = 'Images/Enemy/lvl30.png';



imgArray4[30] = new Image();
imgArray4[30].src = 'Images/Enemy/lvl31.png';

imgArray4[31] = new Image();
imgArray4[31].src = 'Images/Enemy/lvl32.png';

imgArray4[32] = new Image();
imgArray4[32].src = 'Images/Enemy/lvl33.png';

imgArray4[33] = new Image();
imgArray4[33].src = 'Images/Enemy/lvl34.png';

imgArray4[34] = new Image();
imgArray4[34].src = 'Images/Enemy/lvl35.png';

imgArray4[35] = new Image();
imgArray4[35].src = 'Images/Enemy/lvl36.png';

imgArray4[36] = new Image();
imgArray4[36].src = 'Images/Enemy/lvl37.png';


imgArray4[37] = new Image();
imgArray4[37].src = 'Images/Enemy/lvl38.png';

imgArray4[38] = new Image();
imgArray4[38].src = 'Images/Enemy/lvl39.png';

imgArray4[39] = new Image();
imgArray4[39].src = 'Images/Enemy/lvl40.png';


imgArray4[40] = new Image();
imgArray4[40].src = 'Images/Enemy/lvl41.png';


imgArray4[41] = new Image();
imgArray4[41].src = 'Images/Enemy/lvl42.png';

imgArray4[42] = new Image();
imgArray4[42].src = 'Images/Enemy/lvl43.png';

imgArray4[43] = new Image();
imgArray4[43].src = 'Images/Enemy/lvl44.png';



















window.onload = function () {
    // Get the canvas and context
    var canvas = document.getElementById("viewport1");


    //setup touch event handles
    function touchHandler(event) {
        var touches = event.changedTouches,
            first = touches[0],
            type = "";
        switch (event.type) {
            case "touchstart": type = "mousedown"; break;
            case "touchmove": type = "mousemove"; break;
            case "touchend": type = "mouseup"; break;
            default: return;
        }

        // initMouseEvent(type, canBubble, cancelable, view, clickCount, 
        //                screenX, screenY, clientX, clientY, ctrlKey, 
        //                altKey, shiftKey, metaKey, button, relatedTarget);

        var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent(type, true, true, window, 1,
            first.screenX, first.screenY,
            first.clientX, first.clientY, false,
            false, false, false, 0/*left*/, null);

        first.target.dispatchEvent(simulatedEvent);
        event.preventDefault();
    }

    //add listerner for touch handlers
    function init() {
        document.addEventListener("touchstart", touchHandler, true);
        document.addEventListener("touchmove", touchHandler, true);
        document.addEventListener("touchend", touchHandler, true);
        document.addEventListener("touchcancel", touchHandler, true);
    }

    
    canvas.width = window.innerWidth;
    if (canvas.width > 565) { canvas.width = 565 };
    canvas.height = window.innerHeight;
    if (canvas.height > 318) { canvas.height = 318 };
    canvas.style.width = canvas.width.toString() + "px";
    canvas.style.height = canvas.height.toString() + "px";

   
    var context = canvas.getContext("2d");
    context.webkitImageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
   
    //game sound loop
    var soundLoop = document.getElementById("gameSoundLoop");
    soundLoop.volume = 0.3;
    // Timing and frames per second
    var lastframe = 0;
    var fpstime = 0;
    var framecount = 0;
    var fps = 0;
    var levelUpScore = 2000;
    var matchCount = 0;
    var levelCount = 1;
    var levelBump = 0;
    var levelBump2 = 0;
    var levelRating = 0;
    var previousScore = 0;
    var levelScoreProgress = 0;
    var shuffleTiles = false;
    var playOnce = 0;
    var addSpecialHoriz = false;
    var addSpecialVert = false;
    var totalSeconds = 0;
    var enemyName = "ARCANUS"
    var enemyTurn = false;
    var plyrLvlUp = false;
    var skillPoints = 0;
    var heroBonus = 0;
    var showPlyrDamage = false;
    var showEnemyDamage = false;
    var damageToShowP = 0;
    var damageToShowE = 0;
    var swapTileTriggered = 10;
    var firstTimeOnly = true;
    var PowerToApply = [
        ["arcanePower"],
        ["sparkPower"],
        ["firePower"],
        ["swordPower"],
        ["meteorPower"],
        ["earthPower"],
        ["airPower"]
    ];
    var spellBonus = 0;

    

    // Mouse dragging
    var drag = false;

    // Level object
    var level = {
        x: 63,         // X position
        y: 35,         // Y position
        columns: 9,     // Number of tile columns
        rows: 5,        // Number of tile rows
        tilewidth: 49,  // Visual width of a tile
        tileheight: 49, // Visual height of a tile
        tiles: [],    // The two-dimensional tile array
        tileImage: [],  //DB addition for images

        selectedtile: { selected: false, column: 0, row: 0 }
    };


    //resize handling
    window.addEventListener('resize', resizeGame(), false);
    window.addEventListener('orientationchange', resizeGame(), false);




    //orig below
  
    var tilecolors = [
    [255, 128, 128, 0],
    [128, 255, 128, 1],
    [128, 128, 255, 2],
    [255, 255, 128, 3],
    [255, 128, 255, 4],
    [128, 255, 255, 5],
    [255, 255, 255, 6]
    ];
    //orig above

    //////player object
    //var player1 = {
    //    health: 100,
    //    healthMax: 100,
    //    damage: 0,
    //    defense: 100,
    //    defenseMax: 100,
    //    defenseDrop: 0,
    //    power: 100,
    //    playerLevel: 1,
    //    firePower: 1,
    //    earthPower: 1,
    //    airPower: 1,
    //    arcanePower: 1,
    //    swordPower: 1,
    //    meteorPower: 1,
    //    sparkPower: 1,

    //    name: "GuiMage"
    //}
    /////

    //////enemy object
    //var enemy = {
    //    health: 100,
    //    healthMax: 100,
    //    damage: 0,
    //    defense: 100,
    //    defenseMax: 100,
    //    defenseDrop: 0,
    //    power: 100,
    //    playerLevel: 1,
    //    firePower: 1,
    //    earthPower: 1,
    //    windPower: 1,
    //    mysticPower: 1,
    //    name: "Arcanus"
    //}
    ///
    // Clusters and moves that were found
    var clusters = [];  // { column, row, length, horizontal }
    var moves = [];     // { column1, row1, column2, row2 }

    // Current move
    var currentmove = { column1: 0, row1: 0, column2: 0, row2: 0 };

    var gemcolors = 5;
    // Game states
    var gamestates = { init: 0, ready: 1, resolve: 2, levelUp: 3, almostOver: 4, aiTurn: 5, levelUpPlyr: 6 };
    var gamestate = gamestates.init;

    // Score
    var score = 0;

    // Animation variables
    var animationstate = 0;
    var animationtime = 0;
    var animationtimetotal = 0.9;

    // Show available moves
    var showmoves = false;
    var timer;
    resetInterval();
    function resetInterval() {
        clearInterval(timer);
        showmoves = false;



        timer = setInterval(function () {

            showmoves = !showmoves;
            playeranimSwap1();
            setTimeout(function () { stopanimSwap1(); }, 2000);    
        }, 6000);
    }
    //var showMoveTimer = setInterval(function () {

    //    showmoves = !showmoves
    //}, 4000);
    // The AI bot
    var aibot = false;
    var oneTimeE = 0;
    // Game Over
    var gameover = false;


  

    drawPlayer();

    //////////////////////////////////////////////idle animations
    var swapImage = 1;
    var attackImage = 1;
        
   
    function playeranimSwap1() {
        animTimer = setInterval(function () { 
            var swapImage2 = 0;
            swapImage2 = swapImage;
            if (swapImage == 5) { swapImage2 = 3; }
            if (swapImage == 6) { swapImage2 = 2; }
            if (swapImage == 7) { swapImage2 = 1; }
            imgArray2[13].src = 'Images/Hero/idle_' + swapImage2 + '.png';
            swapImage = swapImage + 1;
            if (swapImage > 7) { swapImage = 1; }
            
        }, 250);
              
    }
    function stopanimSwap1() {
        clearInterval(animTimer);
    }
   
    //}
    //function playeranimSwap2() {
    //    stopanimSwap1();
    //    animTimer2 = setInterval(function () {
    //        var attackImage2 = 0;
    //        attackImage2 = attackImage;
            
    //        imgArray2[13].src = 'Images/Hero/attack_' + attackImage2 + '.png';
    //        attackImage = attackImage + 1;
    //        if (attackImage > 3) { attackImage = 1; }  

    //    }, 250);

    //    setTimeout(function () { stopanimSwap2(); }, 750);
    //}
    function stopanimSwap2() {
        clearInterval(animTimer2);
    }
    function drawPlayer() {
        var plx = -2;
        var ply = 6;
        var plwidth = 62;
        var plheight = 67;
        

        //draw background for player
        var centerX = plx + (plwidth / 2);
        var centerY = ply +(plheight / 2);
        var radius = 45;

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = '#00000F';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();

        //health bubble
        radius = 15;
        context.beginPath();
        context.arc(15, centerY + 50, radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'red';
        context.fill();
        context.lineWidth = 3;
        context.strokeStyle = '#003300';
        context.stroke();
        context.fillStyle = '#FFFFFF';
        context.font = "10px Comic Sans MS";
        drawCenterText(Math.round(player1.health), 4, 93, 20);

        //defense bubble
        radius = 15;
        context.beginPath();
        context.arc(45, centerY + 50, radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'grey';
        context.fill();
        context.lineWidth = 3;
        context.strokeStyle = '#003300';
        context.stroke();
        context.fillStyle = '#FFFFFF';
        context.font = "10px Comic Sans MS";
        drawCenterText(Math.round(player1.defense), 34, 93, 20);

        //player image
        context.drawImage(imgArray2[13], plx, ply, plwidth, plheight);

        //player power bar
        var powerAdjustment = 0;
        powerAdjustment = (playerClusterCount * 12);
        if (powerAdjustment < 1) { powerAdjustment = 1; };
        context.drawImage(imgArray2[20], plx + 56, ply - 4);
        context.drawImage(imgArray2[22], plx + 83, ply + 4, powerAdjustment, 13);

        //health bars
        var playerhealthHeight = 100 - ((player1.health / player1.healthMax) * 100);
        if (playerhealthHeight > 100) { playerhealthHeight = 100;}
        context.drawImage(imgArray2[14], plx + 1, ply + 105, 30, 145);
        if (player1.health < 0) { player1.health = 0; }
        context.drawImage(imgArray2[15], plx + 9, ply + 117 + playerhealthHeight, 14, ((player1.health) / player1.healthMax) * 100);
        //defense bars
        var playerDefenseHeight = 100 - ((player1.defense / player1.defenseMax) * 100);
        if (playerDefenseHeight > 100) { playerDefenseHeight = 100; }
        context.drawImage(imgArray2[16], plx + 31, ply + 105, 30, 145);
        if (player1.defense < 0) { player1.defense = 0; }
        context.drawImage(imgArray2[17], plx + 38, ply + 117 + playerDefenseHeight, 14, ((player1.defense) / player1.defenseMax) * 100);

        //player damage during battle
        if (showPlyrDamage) {
            context.fillStyle = '#FF0000';
            context.font = "18px Comic Sans MS Bold";
            drawCenterText("- " + Math.round(damageToShowP), 5, 15, 50)
        }

    }
    function drawEnemy() {
        
        var enx = 508;
        var eny = 6;
        var enwidth = 62;
        var enheight = 67;

        //draw background for enemy
        var centerX = enx + (enwidth / 2);
        var centerY = eny + (enheight / 2) -3;
        var radius = 45;
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = '#000003';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();

        //defense bubble
        radius = 14;
        context.beginPath();
        context.arc(523, centerY + 50, radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'grey';
        context.fill();
        context.lineWidth = 3;
        context.strokeStyle = '#003300';
        context.stroke();
        context.fillStyle = '#FFFFFF';
        context.font = "10px Comic Sans MS";
        drawCenterText(Math.round(enemy.defense), 512, 90, 20);


        //health bubble
        radius = 14;
        context.beginPath();
        context.arc(552, centerY + 50, radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'red';
        context.fill();
        context.lineWidth = 3;
        context.strokeStyle = '#003300';
        context.stroke();
        context.fillStyle = '#FFFFFF';
        context.font = "10px Comic Sans MS";
        drawCenterText(Math.round(enemy.health), 540, 90, 20);




        //enemyimage
        var enemythisTime = enemy.playerLevel - 1;
        //console.log(enemythisTime);
        context.drawImage(imgArray4[enemythisTime], enx, eny, enwidth, enheight);
        //enemy power bar
        context.drawImage(imgArray2[21], enx - 114, eny -4  );
        context.drawImage(imgArray2[22], enx - 107, eny +4);
      
        //enemy defense baars
        var defensebarHeight = 100 - ((enemy.defense / enemy.defenseMax) * 100);
        //if (defensebarHeight > 100) { defensebarHeight = 100; }
        context.drawImage(imgArray2[16], enx + 3, eny + 105, 28, 148);
        if (enemy.defense < 0) { enemy.defense = 0 }
        context.drawImage(imgArray2[17], enx + 9, eny + 116 + defensebarHeight, 14, ((enemy.defense) / enemy.defenseMax) * 100);

        //enemy health bars
        var healthBarHeight = 100 - ((enemy.health / enemy.healthMax) * 100);
        //if (healthBarHeight > 100) { healthBarHeight = 100; }
        context.drawImage(imgArray2[14], enx + 29, eny + 106, 28, 148);
        //console.log("enemyHealth= " + enemy.health)
        if (enemy.health < 0) { enemy.health = 0; }
        context.drawImage(imgArray2[15], enx + 35, eny + 116 + healthBarHeight, 14, (enemy.health / enemy.healthMax) * 100) ;

        //enemy damage during battle
        if (showEnemyDamage) {
            context.fillStyle = '#FF0000';
            context.font = "18px Comic Sans MS";
            drawCenterText("- " + Math.round(damageToShowE), 509, 15, 50);
        }
    }
   
    setInterval(setTime, 2000);

    function setTime() {
        if (newGameLoad == 1) { totalSeconds = 0; newGameLoad = 0; }
        ++totalSeconds;
        context.fillStyle = "#ffff00";
        context.font = "22px Comic Sans MS";

    }

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) { return "0" + valString; }
        else { return valString; }
    }




    var swapSound = new Howl({
        src: ['Sounds/gametinywarp.mp3'],
        volume: 0.5,
        preload: true,

    });
    swapSound.play();

    var levelUpSound = new Howl({
        src: ['Sounds/victory_fanfare.mp3'],
        volume: 0.9,
        preload: true,

    });
    levelUpSound.play();

    var gameOverSound = new Howl({
        src: ['Sounds/Evil_laugh.mp3'],
        volume: 0.9,
        preload: true,

    });
    gameOverSound.play();

    var spellUpSound = new Howl({
        src: ['Sounds/spellUp.mp3'],
        volume: 0.9,
        preload: true,

    });
    spellUpSound.play();

    //end  howl based sounds

    // Gui buttons
    var buttons = [{ x: 130, y: 285, width: 50, height: 35, text: "New" },
        { x: 390, y: 285, width: 50, height: 35, text: "Next" }
         ];

    // Initialize the game
    function init() {



        // Add mouse events
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", onMouseDown);
        canvas.addEventListener("mouseup", onMouseUp);
        canvas.addEventListener("mouseout", onMouseOut);

        // Initialize the two-dimensional tile array
        for (var i = 0; i < level.columns; i++) {
            level.tiles[i] = [];
            // level.tileImage[i] = [];
            for (var j = 0; j < level.rows; j++) {
                // Define a tile type and a shift parameter for animation
                level.tiles[i][j] = { type: 0, shift: 0 }

            }
        }

        // New game
        newGame();
        totalSeconds = 0;
        // Enter main loop
        main(0);
    }

    // Main loop
    function main(tframe) {
        // Request animation frames
        window.requestAnimationFrame(main);

        // Update and render the game
        update(tframe);
        render();
    }

    // Update the game state
    function update(tframe) {
        var dt = (tframe - lastframe) / 100;
        lastframe = tframe;


        // Update the fps counter
        updateFps(dt);

        if (gamestate == gamestates.ready) {
            // Game is ready for player input
            

            // Check for game over
            if (moves.length <= 0) {
                shuffleTiles = true;
                if (playOnce >= 2) { playOnce++; }
                else { playOnce = 1; }
                // document.getElementById("gameOverBack").style.display = 'block';



                //GG -swap tiles automatically until there are moves
                if (shuffleTiles) { shuffle(); }
                function shuffle() {
                    createLevel();
                    var rowcount1 = level.rows;
                    var colCount1 = level.columns;
                    // alert(rowcount1 + " and " + colCount1);
                    for (var r = 0; r < rowcount1; r++) {
                        for (var c = 0; c < colCount1; c++) {
                            matchlength = 3;
                            clusters.push({ column: r, row: c + 1 - matchlength, length: matchlength, horizontal: false });
                        }
                    }
                    shuffleTiles = false;

                    findMoves();
                    gamestate = gamestates.resolve;
                    animationstate = 0;
                    animationtime = 0;

                }



            }

            // Let the AI bot make a move, if enabled
            
            if (aibot) {
                animationtime += dt;
                if (animationtime > animationtimetotal) {
                    // Check if there are moves available
                    findMoves();

                    if (moves.length > 0 && oneTimeE == 0) {
                        // Get a random valid move
                        var move = moves[Math.floor(Math.random() * moves.length)];

                        // Simulate a player using the mouse to swap two tiles
                        mouseSwap(move.column1, move.row1, move.column2, move.row2);
                        //aibot = false;
                        oneTimeE = 1;
                    } else {
                        // No moves left, Game Over. We could start a new game.

                        aibot = false;
                        oneTimeE = 0;
                        resetInterval();
                    }
                    animationtime = 0;
                   
                }
            }
        } else if (gamestate == gamestates.resolve) {
            // Game is busy resolving and animating clusters
            animationtime += dt;

            if (animationstate == 0) {
                // Clusters need to be found and removed
                if (animationtime > animationtimetotal) {
                    // Find clusters
                    findClusters();
                    console.log("# of clusters =====" + clusters.length);
                    if (clusters.length > 0) {
                        // Add points to the score
                        swapSound.stop();

                        if (soundOn == true) { swapSound.play(); };
                        
                        for (var i = 0; i < clusters.length; i++) {
                         
                            // Add extra points for longer clusters
                            score += 100 * (clusters[i].length - 2);
                         
                            levelScoreProgress = levelScoreProgress + (100 * (clusters[i].length - 2));
                            matchCount = matchCount + (clusters[i].length - 2);
                            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////!!!!!!!!!!!!!!!
                            //enemy health and defense adjustment
                            if (aibot === false) {
                               
                                //playeranimSwap2();
                                //setTimeout(function () {
                                //    stopanimSwap2();
                                //    playeranimSwap1();
                                //}, 1000);
                                //hit enemy//
                                var damageThisTime = (player1.playerLevel * 6) + (1 * (clusters[i].length - 2));
                                playerClusterCount = playerClusterCount + 1;
                                
                                var clusterType = level.tiles[clusters[i].column][clusters[i].row].type;
                                console.log("cluster type " + clusterType);
                                var getSpellPower = PowerToApply[clusterType];    
                                console.log("power to apply= " + getSpellPower);
                               
                                var getSpellPowerVal = read_prop(player1, getSpellPower);
                                spellBonus = getSpellPowerVal;
                                console.log("getSpellPowerVal = " + getSpellPowerVal);
                                /////power adjust////////////
                                firstTimeOnly = true;
                                if (swapTileTriggered < 10 && swapTileTriggered >= 0) {
                                    //console.log("swapTileTriggered2= " + swapTileTriggered);
                                    //var damageModifierName = PowerToApply[swapTileTriggered];
                                    //console.log("damageModiferName = " + damageModifierName);
                                    //var spellModifier = read_prop(player1, damageModifierName)
                                    //console.log("spellModifier = " + spellModifier);
                                    //console.log(spellBonus + "= spellBonus");
                                    console.log(damageThisTime + "= DamageThisTime");
                                    damageThisTime = damageThisTime + spellBonus;
                                    console.log("AdjustedDamage= " + damageThisTime);

                                    ////animation
                                    console.log("********************PCLUSTERCOUNT " + playerClusterCount);
                                    if (playerClusterCount >= 8) {
                                        if (getSpellPower == "sparkPower") {
                                            document.getElementById("lightningFullBack").style.display = 'block';
                                            setTimeout(function () {
                                                document.getElementById("lightningFullBack").style.display = 'none';
                                            }, 900);
                                        }

                                        if (getSpellPower == "arcanePower") {
                                            document.getElementById("arcaneFullBack").style.display = 'block';
                                            setTimeout(function () {
                                                document.getElementById("arcaneFullBack").style.display = 'none';
                                            }, 900);
                                        }

                                        if (getSpellPower == "firePower") {
                                            document.getElementById("fireFullBack").style.display = 'block';
                                            setTimeout(function () {
                                                document.getElementById("fireFullBack").style.display = 'none';
                                            }, 900);
                                        }
                                        if (getSpellPower == "meteorPower") {
                                            document.getElementById("meteorFullBack").style.display = 'block';
                                            setTimeout(function () {
                                                document.getElementById("meteorFullBack").style.display = 'none';
                                            }, 900);
                                        }
                                        if (getSpellPower == "swordPower") {
                                            document.getElementById("swordFullBack").style.display = 'block';
                                            setTimeout(function () {
                                                document.getElementById("swordFullBack").style.display = 'none';
                                            }, 1000);
                                        }
                                        if (getSpellPower == "earthPower") {
                                            document.getElementById("earthFullBack").style.display = 'block';

                                            setTimeout(function () {
                                                document.getElementById("earthFullBack").style.display = 'none';
                                            }, 1000);
                                        }
                                        if (getSpellPower == "airPower") {
                                            document.getElementById("airFullBack").style.display = 'block';
                                            setTimeout(function () {
                                                document.getElementById("airFullBack").style.display = 'none';
                                            }, 1000);
                                        }
                                        playerClusterCount = 0;
                                    }

                                    ///cleanup
                                    spellBonus = 0;
                                    swapTileTriggered = 10;
                                }


                                enemy.defenseDrop = enemy.defenseDrop + damageThisTime;
                                if (enemy.defenseDrop >= enemy.defenseMax) { enemy.defenseDrop = enemy.defenseMax };
                                enemy.defense = enemy.defenseMax - enemy.defenseDrop;
                                if (enemy.defense <= 0) { enemy.defense = 0 };
                              
                                var defenseAdjust = (enemy.defense / enemy.defenseMax) ;
                                
                                if (defenseAdjust > 0) { damageThisTime = damageThisTime * defenseAdjust; };
                                //console.log("damage this time2: " + damageThisTime);
                                                            
                                damageToShowE = damageThisTime;
                                showEnemyDamage = true;
                                setTimeout(function () {
                                    showEnemyDamage = false;
                                }, 1000);

                                enemy.damage = enemy.damage + damageThisTime;
                                enemy.health = enemy.healthMax - enemy.damage;


                                ////////////////////////////////////////////////////future heal of enemy
                                //if (enemy.health < 150 && enemy.level > 14) {
                                //    enemy.health = enemy.health + (enemy.healthMax / 2);
                                //}


                                if (enemy.health <= 0) { levelUp(); };
                                enemyTurn = true;
                              
                            }
                            //enemy attacking player////////////////////////////////////////////////////////////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                            if (aibot) { //hit player//

                                stopanimSwap1();

                                var damageThisTime = (enemy.playerLevel * 5) + (1 * (clusters[i].length - 2)) + (difficulty * 2);
                                enemyClusterCount = enemyClusterCount + 1; 
                                //(player1.playerLevel * 6) + (1 * (clusters[i].length - 2));

                                player1.defenseDrop = player1.defenseDrop + damageThisTime;
                                if (player1.defenseDrop >= player1.defenseMax) { player1.defenseDrop = player1.defenseMax };
                                player1.defense = player1.defenseMax - player1.defenseDrop;
                                if (player1.defense <= 0) { player1.defense = 0 };
                                //console.log("Player Defense " + player1.defense);
                                var defenseAdjust = (player1.defense / player1.defenseMax);
                                //console.log("defenseAdjust " + defenseAdjust);
                                if (defenseAdjust > 0) { damageThisTime = damageThisTime * defenseAdjust; };
                                //console.log("damage this time2: " + damageThisTime);

                                damageToShowP = damageThisTime;
                                showPlyrDamage = true;
                                setTimeout(function () {
                                    showPlyrDamage = false;
                                }, 1000);
                               

                                player1.damage = player1.damage + damageThisTime;
                                player1.health = player1.healthMax - player1.damage;
                                //console.log("player health: " + player1.health);
                                aibot = false;
                                enemyTurn = false;
                                
                                if (player1.health <= 0) { player1.health = 0; gameover = true; playOnce = 0; };

                            }
                            //show and hide player turn message once all clusters resolved

                            if (clusters.length == 1 && !aibot && enemy.health > 0 ) {
                                
                                     document.getElementById("message").style.display = 'block';
                                   
                                setTimeout(function () {
                                         aibot = true;
                                         enemyTurn = true;
                                         showmoves = false;
                                         resetInterval();
                                        
                                     }, 1200);
                                setTimeout(function () {
                                    document.getElementById("message").style.display = 'none';
                                    aibot = false;
                                    enemyTurn = false;
                                    showmoves = false;
                                    resetInterval();
                                }, 1500);
                                //setTimeout(function () {
                                    
                                //    aibot = false;
                                //}, 1200);
                            }
                        }

                        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
                        //GG add - specials for 5 or greater
                       

                        // Clusters found, remove them
                        removeClusters();

                        // Tiles need to be shifted
                        animationstate = 1;
                    } else {
                        // No clusters found, animation complete
                        gamestate = gamestates.ready;
                    }
                    animationtime = 0;
                    //clearInterval(showMoveTimer);
                    showmoves = false;
                }
            } else if (animationstate == 1) {
                // Tiles need to be shifted
                if (animationtime > animationtimetotal) {
                    // Shift tiles
                    shiftTiles();

                    // New clusters need to be found
                    animationstate = 0;
                    animationtime = 0;

                    // Check if there are new clusters
                    findClusters();
                    if (clusters.length <= 0) {
                        // Animation complete
                        gamestate = gamestates.ready;
                    }
                }
            } else if (animationstate == 2) {
                // Swapping tiles animation

                if (animationtime > animationtimetotal) {
                    // Swap the tiles
                    swap(currentmove.column1, currentmove.row1, currentmove.column2, currentmove.row2);

                    // Check if the swap made a cluster
                    findClusters();
                    if (clusters.length > 0) {
                        // Valid swap, found one or more clusters
                        // Prepare animation states
                        animationstate = 0;
                        animationtime = 0;
                        gamestate = gamestates.resolve;



                    } else {
                        // Invalid swap, Rewind swapping animation
                        animationstate = 3;
                        animationtime = 0;
                    }

                    // Update moves and clusters
                    findMoves();
                    findClusters();
                }
            } else if (animationstate == 3) {
                // Rewind swapping animation
                if (animationtime > animationtimetotal) {
                    // Invalid swap, swap back
                    swap(currentmove.column1, currentmove.row1, currentmove.column2, currentmove.row2);

                    // Animation complete
                    gamestate = gamestates.ready;
                }
            }

            // Update moves and clusters
            findMoves();
            findClusters();
        }
    }

    function updateFps(dt) {
        if (fpstime > 0.50) {
            // Calculate fps
            fps = Math.round(framecount / fpstime);

            // Reset time and framecount
            fpstime = 0;
            framecount = 0;
        }

        // Increase time and framecount
        fpstime += dt;
        framecount++;

    }

    // Draw text that is centered
    function drawCenterText(text, x, y, width) {
        var textdim = context.measureText(text);
        context.fillText(text, x + (width - textdim.width) / 2, y);
    }

    // Render the game
    function render() {
        // Draw the frame
        drawFrame();
        
        // Draw score
        context.fillStyle = "blue";
        context.font = "8px Comic Sans MS";
        drawEnemy();
        drawCenterText("Score", 261, level.y + 135 , 40);
        context.font = "8px Comic Sans MS";
        drawCenterText(score, 244, level.y + 145, 75);


        // Draw buttons
        drawButtons();
     

        // Draw level background
        var levelwidth = level.columns * level.tilewidth;
        var levelheight = level.rows * level.tileheight;
        context.fillStyle = "#000000";
        context.fillRect(level.x - 2, level.y - 4, levelwidth + 8, levelheight + 8);

        // Render tiles
        renderTiles();
        //drawPlayerLvlup();
        // Render clusters
        renderClusters();
        
        // Render moves, when there are no clusters
        if (showmoves && clusters.length <= 0 && gamestate == gamestates.ready) {
            renderMoves();
           

        }

        ////spell casting ///////

      



        // Game Over overlay
        if (gameover) {
            
            if (playOnce == 0) {
                gameSoundLoop.pause();
                if (soundOn) { gameOverSound.play(); };
                
                playOnce++;

            }
            context.fillStyle = "rgba(0, 0, 0, 0.8)";
            context.fillRect(level.x, level.y, levelwidth, levelheight);
            //img overlay
            context.drawImage(imgArray2[7], 60, 5);

            context.drawImage(imgArray2[8], 110, 230);
            context.drawImage(imgArray2[9], 315, 230);
        
            gamestate = gamestates.almostOver;
      
        }
        //level Up overlay
        if (gamestate == gamestates.levelUp) {
            context.fillStyle = "rgba(22, 30, 29, 0.9)";
            context.fillRect(level.x, level.y, levelwidth, levelheight);
            if (player1.playerLevel == 14 ) {
                context.drawImage(imgArray2[23], 6, 8);
            }
            if (player1.playerLevel == 28) {
                context.drawImage(imgArray2[24], 6, 8);
            }
            if (player1.playerLevel == 43) {
                context.drawImage(imgArray2[25], 6, 8);
            }

            context.drawImage(imgArray2[1], 170, 20); // level up back
            //context.drawImage(imgArray2[10], 150, 50); // star cash1
            context.drawImage(imgArray2[2], 235, 135); // star cash2
            context.drawImage(imgArray2[3], 245, 200); //Next Button
            context.drawImage(imgArray2[4], 200, 55); //star1
            if (levelRating >= 4) { context.drawImage(imgArray2[4], 305, 55); } //star2
            if (levelRating >= 5) { context.drawImage(imgArray2[5], 246, 35); }//star3 Bonus star}


            if (levelBump >= 1) { levelBump2 = 1; }
            context.font = "14px Comic Sans MS";
            context.fillStyle = "#cc00cc";
            drawCenterText("YOU  WIN", 250, 40, 70);
            context.font = "16px Comic Sans MS";
            context.fillStyle = "#cc00cc";
            drawCenterText(" +" + levelRating, 270, 130, 50);
            drawCenterText(starCash, 270, 159, 50);
            
            drawCenterText(enemy.name + " loses "  , 260, 192, 50);
            context.font = "22px Comic Sans MS";
            drawCenterText("Next", level.x + 1, level.y + levelheight - 55, levelwidth);
            if (levelBump == 1) {
                levelCount++; levelBump = 0;
                levelUpScore = (levelCount * 1000);
                player1.playerLevel = player1.playerLevel + 1;
                //check level Rating
                levelRating = 3;
                if (totalSeconds <= 45) {
                    levelRating = 5;
                     context.drawImage(imgArray2[4], 305, 65);  //star2
                     context.drawImage(imgArray2[5], 246, 45); //star3 Bonus star
                }
                else if (totalSeconds <= 60) {
                    levelRating = 4;
                    context.drawImage(imgArray2[4], 305, 65);  //star2
                }
                else if (totalSeconds >= 61) { levelRating = 3; }
                starCash = starCash + levelRating;
                localStorage["starCash"] = starCash;
                context.font = "30px Comic Sans MS";
                context.fillStyle = "#cc00cc";
                drawCenterText(" +" + levelRating, 210, 159, 50);

                ///store levelrating for starcount
                localStorage.setItem('spellMatch_lvlRating_lvl' + (player1.playerLevel - 1), (levelRating -2));


            }
             
            //document.getElementById("progressBar").style.display = 'none';
        }
        if (gamestate == gamestates.levelUpPlyr) {
            drawPlayerLvlup();
            playerLvlUp();
        }
            
    }

    // Draw a frame with a border
    function drawFrame() {
        // Draw background and a border
        context.fillStyle = "#996600";
        context.fillRect(0, 0, canvas.width , canvas.height);
        context.fillStyle = "#660033";
        context.fillRect(1, 1, canvas.width - 2, canvas.height - 2);

        // Draw header
        //context.fillStyle = "#cc00cc";
        //context.fillRect(0, 0, canvas.width, 65);

        // Draw title
        //context.fillStyle = "#ffffff";
        //context.font = "24px Comic Sans MS";
        //context.fillText("Gui Match", 5, 20);

        //context.drawImage(imgArray2[6], 10, 142)
        
  
        
        //context.fillText(levelCount, 12, level.y + 110);

        

        //draw the titlebackground       
        context.drawImage(imgArray2[6], 175, -2);
        context.font = "14px Comic Sans MS";
        //context.fillText("GuiSpellMatch", 238, 20);
        //draw level count
        var levelCountNew = player1.playerLevel;
        context.fillStyle = "blue";
        context.font = "12px Comic Sans MS";
        context.fillText("Level: ", 192, level.y - 8);
        context.fillText(levelCountNew, 357, level.y - 8);

        //draw the bottom bar
        context.drawImage(imgArray2[19], 180, 282);
        context.fillStyle = "Red";
        context.font = "10px Comic Sans MS";
        context.fillText(player1.name.toUpperCase() + "  Vs.  " + enemy.name.toUpperCase(), 210, 305);

        //draw the left and right bars
        context.drawImage(imgArray2[19], 440, 287, 125, 30);
        context.drawImage(imgArray2[19], 0, 287, 125, 30);

        //draw current starcash
        context.drawImage(imgArray2[2], 2, 258, 60, 30);
        context.fillStyle = "green";
        context.font = "16px Comic Sans MS";
        context.fillText( starCash, 26, 278);
        //draw the player
        drawPlayer();


        // Display Time
        //context.fillStyle = "#ffffff";
        //context.font = "14px Comic Sans MS";
        //if (newGameLoad == 1) { totalSeconds = 0; }
        //context.fillText("Time:" + totalSeconds, 2, 62);
    }

    //draw player images
   

    // Draw buttons
    function drawButtons() {
        for (var i = 0; i < buttons.length; i++) {
            // Draw button shape
            context.fillStyle = "#cc00cc";
            context.fillRect(buttons[i].x, buttons[i].y, buttons[i].width, buttons[i].height);

            // Draw button text
            context.fillStyle = "#ffffff";
            context.font = "16px Times New Roman";
            var textdim = context.measureText(buttons[i].text);
            context.fillText(buttons[i].text, buttons[i].x + (buttons[i].width - textdim.width) / 2, buttons[i].y + 23);

            //draw button images
            context.drawImage(imgArray3[0], 12, 288);       //gear - difficulty modal
            context.drawImage(imgArray3[1], 47, 288);       //house - go home
            context.drawImage(imgArray3[2], 82, 288);       //sound - volume modal
            context.drawImage(imgArray3[3], 452, 288);      //Menu - Power modal
            context.drawImage(imgArray3[4], 487, 288);      // Trophy - ladder modal
            context.drawImage(imgArray3[5], 522, 288);      //Thumb  - facebook Like
        }
    }
    


    // Render tiles
     function renderTiles() {
        for (var i = 0; i < level.columns; i++) {
            for (var j = 0; j < level.rows; j++) {
                // Get the shift of the tile for animation
                var shift = level.tiles[i][j].shift;

                // Calculate the tile coordinates
                var coord = getTileCoordinate(i, j, 0, (animationtime / animationtimetotal) * shift);

                // Check if there is a tile present
                if (level.tiles[i][j].type >= 0) {
                    // Get the color of the tile
                    var col = tilecolors[level.tiles[i][j].type];
                    var q = tilecolors[level.tiles[i][j]]
                    // Draw the tile using the color
                    drawTile(coord.tilex, coord.tiley, col[0], col[1], col[2], col[3]);


                }

                // Draw the selected tile
                if (level.selectedtile.selected) {
                    if (level.selectedtile.column == i && level.selectedtile.row == j) {
                        // Draw a selected image
                        drawTile(coord.tilex - 3, coord.tiley - 3, 255, 0, 0, 7);


                    }
                }
            }
        }

        // Render the swap animation
        if (gamestate == gamestates.resolve && (animationstate == 2 || animationstate == 3)) {
            // Calculate the x and y shift
            var shiftx = currentmove.column2 - currentmove.column1;
            var shifty = currentmove.row2 - currentmove.row1;

            // First tile
            var coord1 = getTileCoordinate(currentmove.column1, currentmove.row1, 0, 0);
            var coord1shift = getTileCoordinate(currentmove.column1, currentmove.row1, (animationtime / animationtimetotal) * shiftx, (animationtime / animationtimetotal) * shifty);
            var col1 = tilecolors[level.tiles[currentmove.column1][currentmove.row1].type];
            var col1Image = [level.tiles[currentmove.column1][currentmove.row1].type];
            // alert (col1Image);
            // Second tile
            var coord2 = getTileCoordinate(currentmove.column2, currentmove.row2, 0, 0);
            var coord2shift = getTileCoordinate(currentmove.column2, currentmove.row2, (animationtime / animationtimetotal) * -shiftx, (animationtime / animationtimetotal) * -shifty);
            var col2 = tilecolors[level.tiles[currentmove.column2][currentmove.row2].type];
            var col2Image = [level.tiles[currentmove.column1][currentmove.row1].type];


            // Draw a black background
            drawTile(coord1.tilex, coord1.tiley, 0, 0, 0, 8);
            drawTile(coord2.tilex, coord2.tiley, 0, 0, 0, 8);

            // Change the order, depending on the animation state
            if (animationstate == 2) {
                // Draw the tiles
                drawTile(coord1shift.tilex, coord1shift.tiley, col1[0], col1[1], col1[2], col1[3]);
                drawTile(coord2shift.tilex, coord2shift.tiley, col2[0], col2[1], col2[2], col2[3]);


            } else {
                // Draw the tiles
                drawTile(coord2shift.tilex, coord2shift.tiley, col2[0], col2[1], col2[2], col1[3]);
                drawTile(coord1shift.tilex, coord1shift.tiley, col1[0], col1[1], col1[2], col2[3]);

            }
        }
    }
    function drawPlayerLvlup() {
        context.fillStyle = "#996600";
        context.fillRect(0, 0, canvas.width, canvas.height);

       

        context.font = "18px Times New Roman";
        //background
        context.drawImage(imgArray3[6], 90, 10);
        drawCenterText("Level " + player1.playerLevel, 235, 40, 100);

        context.fillStyle = "#ffffff";


        drawCenterText("Arcane", 130, 118, 100);
        //context.drawImage(imgArray3[7], 205, 93);
        context.drawImage(imgArray[0], 121, 100, 30, 30);

        drawCenterText("Spark", 340, 119, 95);
        context.drawImage(imgArray[1], 415, 101, 30, 30);

        drawCenterText("Fire", 130, 165, 100);
        context.drawImage(imgArray[2], 121, 146, 30, 30);


        drawCenterText("Sword", 340, 165, 100);
        context.drawImage(imgArray[3], 415, 146, 30, 30);

        drawCenterText("Meteor", 130, 205, 100);
        context.drawImage(imgArray[4], 121, 187, 30, 30);

        drawCenterText("Earth", 340, 205, 100);
        context.drawImage(imgArray[5], 415, 186, 30, 30);

        drawCenterText("Air", 260, 245, 50);
        context.drawImage(imgArray[6], 313, 226, 30, 30);

        ///show or hide the plus button based on skill points > 0
        if (skillPoints > 0) {
            context.drawImage(imgArray3[7], 205, 93);   //arcane addbtn
            context.drawImage(imgArray3[7], 327, 95);  //spark addbtn
            context.drawImage(imgArray3[7], 205, 139); //fire addbtn
            context.drawImage(imgArray3[7], 328, 140); //sword addbtn
            context.drawImage(imgArray3[7], 206, 181); //Meteor add btn
            context.drawImage(imgArray3[7], 328, 181); //earth addbtn
            context.drawImage(imgArray3[7], 220, 220); //Air addbtn
        }


        //skill points
        context.fillStyle = "#ffffff";
        context.font = "30px Times New Roman";
        drawCenterText(skillPoints, 273, 105, 20);

        //Save Button (tied to click)
        context.font = "20px Times New Roman";
        context.drawImage(imgArray3[8], 0, 250, 75, 75);
        context.fillText("SAVE", 12, 310, 60);

        //hero points
        context.fillStyle = "#000000";
        context.font = "24px Times New Roman";
        drawCenterText(heroBonus, 258, 300, 60);

        

        //health points
        context.fillStyle = "#000000";
        context.font = "18px Times New Roman";
        drawCenterText(player1.healthMax, 163, 295, 60);
        
        //defense points
        context.fillStyle = "#000000";
        context.font = "18px Times New Roman";
        drawCenterText(player1.defenseMax, 347, 295, 60);
        
        if (heroBonus > 0) {
            context.drawImage(imgArray3[7], 220, 275, 25, 25);
            context.drawImage(imgArray3[7], 330, 275, 25, 25);
        }

        //label
        context.font = "20px Times New Roman";
        context.fillStyle = "red";
        context.fillText("Increase your spells", 245, 142, 80);


       
    }
    // Get the tile coordinate
    function getTileCoordinate(column, row, columnoffset, rowoffset) {
        var tilex = level.x + (column + columnoffset) * level.tilewidth;
        var tiley = level.y + (row + rowoffset) * level.tileheight;
        return { tilex: tilex, tiley: tiley };
    }

    // Draw a tile with a color
    function drawTile(x, y, r, g, b, i) {
        // context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        // context.fillRect(x + 2, y + 2, level.tilewidth - 4, level.tileheight - 4);

        var imgVar1 = imgArray[i];
        imgVar1.height = level.tileheight;
        context.drawImage(imgVar1, x + 1, y + 1);

    }

    // Render clusters
    function renderClusters() {
        for (var i = 0; i < clusters.length; i++) {
            // Calculate the tile coordinates
            var coord = getTileCoordinate(clusters[i].column, clusters[i].row, 0, 0);

            if (clusters[i].horizontal) {
                // Draw a horizontal line
                context.fillStyle = "#00ff00";
                context.fillRect(coord.tilex + level.tilewidth / 2, coord.tiley + level.tileheight / 2 - 2, (clusters[i].length - 1) * level.tilewidth, 4);
            } else {
                // Draw a vertical line
                context.fillStyle = "#0000ff";
                context.fillRect(coord.tilex + level.tilewidth / 2 - 2, coord.tiley + level.tileheight / 2, 4, (clusters[i].length - 1) * level.tileheight);
            }
        }
    }

    // Render moves
    function renderMoves() {
        for (var i = 0; i < moves.length; i++) {
            // Calculate coordinates of tile 1 and 2
            var coord1 = getTileCoordinate(moves[i].column1, moves[i].row1, 0, 0);
            var coord2 = getTileCoordinate(moves[i].column2, moves[i].row2, 0, 0);

            // Draw a line from tile 1 to tile 2
            context.strokeStyle = "#ebf100";
            context.lineWidth = 3;
            context.beginPath();
            context.moveTo(coord1.tilex + level.tilewidth / 2, coord1.tiley + level.tileheight / 2);
            context.lineTo(coord2.tilex + level.tilewidth / 2, coord2.tiley + level.tileheight / 2);
            context.stroke();
        }
    }

    

    // Start a new game
    function newGame(i) {
        // Reset score

        if (i < 1) {
            score = 0; levelUpScore = 2000;
            levelScoreProgress = 0; levelCount = 1;
            playOnce = 0; totalSeconds = 0;
            levelScoreProgress = 1;
            //progressBar(1, 1)
            for (var q = 0; q <= 6; q++) {
                var newsource = imgArray[q].src;
                newsource = "Images/" + q + ".png";
                imgArray[q].src = newsource;
            }
        }

        levelUpSound.stop();
        gameOverSound.stop();
        gameSoundLoop.pause();
        if (soundOn) { gameSoundLoop.play();}
        

        enemy.health = enemy.healthMax;
        enemy.defense = enemy.defenseMax;
        enemy.defenseDrop = 0;
        enemy.damage = 0;
        player1.health = player1.healthMax;
        player1.defense = player1.defenseMax;
        player1.defenseDrop = 0;
        player1.damage = 0;
        playerClusterCount = 0;
        enemyClusterCount = 0;




        //progressBar(1, levelCount);
        //document.getElementById("progressBar").style.display = 'block';
        // Set the gamestate to ready
        gamestate = gamestates.ready;

        // Reset game over
        gameover = false;

        // Create the level
        createLevel();

        // Find initial clusters and moves
        findMoves();
        findClusters();
    }

    // Create a random level
    function createLevel() {
        var done = false;

        // Keep generating levels until it is correct
        while (!done) {

            // Create a level with random tiles
            for (var i = 0; i < level.columns; i++) {
                for (var j = 0; j < level.rows; j++) {
                    level.tiles[i][j].type = getRandomTile();
                }
            }

            // Resolve the clusters
            resolveClusters();

            // Check if there are valid moves
            findMoves();

            // Done when there is a valid move
            if (moves.length > 0) {
                done = true;
                gameOver = false;
            }
        }
    }

    // Get a random tile
    function getRandomTile() {
        return Math.floor(Math.random() * tilecolors.length);
    }

    // Remove clusters and insert tiles
    function resolveClusters() {
        // Check for clusters
        findClusters();

        if (clusters.length > 1) {

            context.drawImage(imgArray2[11], 50, 65);

        }
        // While there are clusters left
        while (clusters.length > 0) {
            console.log(" cluster length = " + clusters.length);
            // Remove clusters
            removeClusters();

            // Shift tiles
            shiftTiles();

            // Check if there are clusters left
            findClusters();
        }
    }

    // Find clusters in the level
    function findClusters() {
        // Reset clusters
        clusters = []

        // Find horizontal clusters
        for (var j = 0; j < level.rows; j++) {
            // Start with a single tile, cluster of 1
            var matchlength = 1;
            for (var i = 0; i < level.columns; i++) {
                var checkcluster = false;

                if (i == level.columns - 1) {
                    // Last tile
                    checkcluster = true;
                } else {
                    // Check the type of the next tile
                    if (level.tiles[i][j].type == level.tiles[i + 1][j].type &&
                        level.tiles[i][j].type != -1) {
                        // Same type as the previous tile, increase matchlength
                        matchlength += 1;
                    } else {
                        // Different type
                        checkcluster = true;
                    }
                }

                // Check if there was a cluster
                if (checkcluster) {
                    if (matchlength >= 3) {
                        // Found a horizontal cluster
                        clusters.push({
                            column: i + 1 - matchlength, row: j,
                            length: matchlength, horizontal: true
                            
                        });
                        
                    }
                    //GG add special for a horiz 5 match
                    if (matchlength >= 4) {
                        addSpecialHoriz = true;

                    }
                    matchlength = 1;
                }
            }
        }

        // Find vertical clusters
        for (var i = 0; i < level.columns; i++) {
            // Start with a single tile, cluster of 1
            var matchlength = 1;
            for (var j = 0; j < level.rows; j++) {
                var checkcluster = false;

                if (j == level.rows - 1) {
                    // Last tile
                    checkcluster = true;
                } else {
                    // Check the type of the next tile
                    if (level.tiles[i][j].type == level.tiles[i][j + 1].type &&
                        level.tiles[i][j].type != -1) {
                        // Same type as the previous tile, increase matchlength
                        matchlength += 1;
                    } else {
                        // Different type
                        checkcluster = true;
                    }
                }

                // Check if there was a cluster
                if (checkcluster) {
                    if (matchlength >= 3) {
                        // Found a vertical cluster
                        clusters.push({
                            column: i, row: j + 1 - matchlength,
                            length: matchlength, horizontal: false
                        });
                    }
                    //GG add special for a Vert 5 match
                    if (matchlength >= 5) {
                        addSpecialVert = true;

                    }
                    matchlength = 1;
                }
            }
        }

    }

    // Find available moves
    function findMoves() {
        // Reset moves
        moves = []

        // Check horizontal swaps
        for (var j = 0; j < level.rows; j++) {
            for (var i = 0; i < level.columns - 1; i++) {
                // Swap, find clusters and swap back
                swap(i, j, i + 1, j);
                findClusters();
                swap(i, j, i + 1, j);

                // Check if the swap made a cluster
                if (clusters.length > 0) {
                    // Found a move
                    moves.push({ column1: i, row1: j, column2: i + 1, row2: j });
                }
            }
        }

        // Check vertical swaps
        for (var i = 0; i < level.columns; i++) {
            for (var j = 0; j < level.rows - 1; j++) {
                // Swap, find clusters and swap back
                swap(i, j, i, j + 1);
                findClusters();
                swap(i, j, i, j + 1);

                // Check if the swap made a cluster
                if (clusters.length > 0) {
                    // Found a move
                    moves.push({ column1: i, row1: j, column2: i, row2: j + 1 });
                }
            }
        }

        // Reset clusters
        clusters = []
    }

    // Loop over the cluster tiles and execute a function
    function loopClusters(func) {
        for (var i = 0; i < clusters.length; i++) {
            //  { column, row, length, horizontal }

            var cluster = clusters[i];
            var coffset = 0;
            var roffset = 0;
            for (var j = 0; j < cluster.length; j++) {
                if (level.tiles[cluster.column][cluster.row].type > -1) {
                    if (firstTimeOnly) {
                        swapTileTriggered = level.tiles[cluster.column][cluster.row].type;
                        console.log("Loop Clusters tile= " + swapTileTriggered);
                        var damageModifierName = PowerToApply[swapTileTriggered];
                        console.log("damageModiferName = " + damageModifierName);
                       
                        var spellModifier = read_prop(player1, damageModifierName);
                        console.log("spellModifier = " + spellModifier);
                        spellBonus = spellModifier;
                        firstTimeOnly = false;
                    }
                }
                func(i, cluster.column + coffset, cluster.row + roffset, cluster);

                if (cluster.horizontal) {
                    coffset++;
                } else {
                    roffset++;
                }

            }

        }
    }

    // Remove the clusters   
    function removeClusters() {
        /////////////
        /////GG add check for and set specials
        //if (addSpecialVert) {

        //    level.tiles[i][j].type = 8;
        //    addSpecialVert = false;
        //}
        //else if (addSpecialHoriz) {
        //    level.tiles[i][j].type = 8;
        //    addSpecialHoriz = false;
        //}


        //////////
        ////// Orig  Change the type of the tiles to -1, indicating a removed tile


        loopClusters(function (index, column, row, cluster) { level.tiles[column][row].type = -1; });

        // Calculate how much a tile should be shifted downwards
        for (var i = 0; i < level.columns; i++) {
            var shift = 0;
            for (var j = level.rows - 1; j >= 0; j--) {
                // Loop from bottom to top
                if (level.tiles[i][j].type == -1) {
                    // Tile is removed, increase shift
                    shift++;
                    level.tiles[i][j].shift = 0;
                } else {
                    // Set the shift
                    level.tiles[i][j].shift = shift;
                }
            }
        }
    }

    // Shift tiles and insert new tiles
    function shiftTiles() {
        // Shift tiles
        for (var i = 0; i < level.columns; i++) {
            for (var j = level.rows - 1; j >= 0; j--) {
                // Loop from bottom to top
                if (level.tiles[i][j].type == -1) {

                    // Insert new random tile
                    level.tiles[i][j].type = getRandomTile();
                }

                else {
                    // Swap tile to shift it
                    var shift = level.tiles[i][j].shift;
                    if (shift > 0) {
                        swap(i, j, i, j + shift)
                    }
                }

                // Reset shift
                level.tiles[i][j].shift = 0;
            }
        }
    }

    // Get the tile under the mouse
    function getMouseTile(pos) {
        // Calculate the index of the tile
        var tx = Math.floor((pos.x - level.x) / level.tilewidth);
        var ty = Math.floor((pos.y - level.y) / level.tileheight);

        // Check if the tile is valid
        if (tx >= 0 && tx < level.columns && ty >= 0 && ty < level.rows) {
            // Tile is valid
            return {
                valid: true,
                x: tx,
                y: ty
            };
        }

        // No valid tile
        return {
            valid: false,
            x: 0,
            y: 0
        };
    }

    // Check if two tiles can be swapped
    function canSwap(x1, y1, x2, y2) {
        // Check if the tile is a direct neighbor of the selected tile
        if ((Math.abs(x1 - x2) == 1 && y1 == y2) ||
            (Math.abs(y1 - y2) == 1 && x1 == x2)) {
            return true;
        }

        return false;
    }






    // Swap two tiles in the level
    function swap(x1, y1, x2, y2) {
        var typeswap = level.tiles[x1][y1].type;
        level.tiles[x1][y1].type = level.tiles[x2][y2].type;
        level.tiles[x2][y2].type = typeswap;
    }

    // Swap two tiles as a player action
    function mouseSwap(c1, r1, c2, r2) {
        // Save the current move
        currentmove = { column1: c1, row1: r1, column2: c2, row2: r2 };

        // Deselect
        level.selectedtile.selected = false;

        // Start animation
        animationstate = 2;
        animationtime = 0;
        gamestate = gamestates.resolve;
    }

    // On mouse movement
    function onMouseMove(e) {
        // Get the mouse position
        var pos = getMousePos(canvas, e);

        // Check if we are dragging with a tile selected
        if (drag && level.selectedtile.selected) {
            // Get the tile under the mouse
            mt = getMouseTile(pos);
            if (mt.valid) {
                // Valid tile

                // Check if the tiles can be swapped
                if (canSwap(mt.x, mt.y, level.selectedtile.column, level.selectedtile.row)) {
                    // Swap the tiles
                    mouseSwap(mt.x, mt.y, level.selectedtile.column, level.selectedtile.row);
                    
                }
            }
        }
    }

    // On mouse button click
    function onMouseDown(e) {
        // Get the mouse position
        var pos = getMousePos(canvas, e);

        // Start dragging
        if (!drag) {
            // Get the tile under the mouse
            mt = getMouseTile(pos);
            if (gamestate != gamestates.levelUpPlyr) {
            if (mt.valid) {
                // Valid tile
                var swapped = false;
                if (level.selectedtile.selected) {
                    if (mt.x == level.selectedtile.column && mt.y == level.selectedtile.row) {
                        // Same tile selected, deselect
                        level.selectedtile.selected = false;
                        drag = true;
                        return;
                    } else if (canSwap(mt.x, mt.y, level.selectedtile.column, level.selectedtile.row)) {
                        // Tiles can be swapped, swap the tiles
                        mouseSwap(mt.x, mt.y, level.selectedtile.column, level.selectedtile.row);
                       
                        swapped = true;
                    }
                }

                if (!swapped) {
                    // Set the new selected tile
                    level.selectedtile.column = mt.x;
                    level.selectedtile.row = mt.y;
                    level.selectedtile.selected = true;
                }
            } else {
                // Invalid tile
                level.selectedtile.selected = false;
            }
            }
            // Start dragging
            drag = true;
        }

        // Check if a button was clicked
        for (var i = 0; i < buttons.length; i++) {
            if (pos.x >= buttons[i].x && pos.x < buttons[i].x + buttons[i].width &&
                pos.y >= buttons[i].y && pos.y < buttons[i].y + buttons[i].height) {

                // Button i was clicked
                if (i == 0) {
                    // New Game
                    newGame(0);
                    totalSeconds = 0;
                }  else if (i == 1) {
                    // AI Bot
                    aibot = !aibot;
                    buttons[i].text = "Next" ;
                }
            }
        }
        ///GG buttons
        if (pos.x >= 12 && pos.x < 44 && pos.y >= 1 && pos.y < 100) {
            var checkMe = document.getElementById('playerStatsParent').style.display;
            console.log(checkMe);
            if (checkMe == 'block') { document.getElementById('playerStatsParent').style.display = 'none' }
            else { document.getElementById('playerStatsParent').style.display = 'block'; } ////clicked Plyer icon  -- show stats modal
            updateStats();

        }

        if (pos.x >= 12 && pos.x < 44 && pos.y >= 288 && pos.y < 308) {
            var checkMe = document.getElementById('difficulty').style.display;
            console.log(checkMe);
            if ( checkMe == 'block') { document.getElementById('difficulty').style.display = 'none' }
            else { document.getElementById('difficulty').style.display = 'block'; } ////gear icon --- show difficulty modal
            
        }
        if (pos.x >= 47 && pos.x < 79 && pos.y >= 288 && pos.y < 308) {
            var checkMe = document.getElementById('goHome').style.display;
            if (checkMe == 'block') { document.getElementById('goHome').style.display = 'none' }
            else { document.getElementById('goHome').style.display = 'block'; }  ////home icon --- Save and Quit Menu
            checkMe = document.getElementById('goHome').style.display;
            
        }
        ////sound icon --- volume control modal
        if (pos.x >= 82 && pos.x < 112 && pos.y >= 288 && pos.y < 308) {
            if (soundOn) {
                //turn sounds off
                swapSound.pause();
                gameSoundLoop.pause();
                soundOn = false;
                imgArray3[2].src = 'Images/buttons/greySoundOff.png';

            }
            else {
                //turn sounds back on
                soundOn = true;
                gameSoundLoop.play();
                imgArray3[2].src = 'Images/buttons/greySound.png';
            }
        }
        ////Menu icon --- Inventory Modal
        if (pos.x >= 452 && pos.x < 482 && pos.y >= 288 && pos.y < 308) {
            var checkMe = document.getElementById('inventoryParent').style.display; ///Menu icon --- show inventory/store modal
            if (checkMe == 'block') { document.getElementById('inventoryParent').style.display = 'none' }
            else { document.getElementById('inventoryParent').style.display = 'block';}
            
              
        }
        ////trophy icon --- trophy Modal
        if (pos.x >= 487 && pos.x < 518 && pos.y >= 288 && pos.y < 308) {
            var checkMe = document.getElementById('trophyParent').style.display; ///Trophy icon --- show ladder modal
            if (checkMe == 'block') { document.getElementById('trophyParent').style.display = 'none' }
            else {
                document.getElementById('trophyParent').style.display = 'block';
                if (cupWon > 0) { document.getElementById('trophyLock1').style.display = 'none'}
                if (cupWon > 1) { document.getElementById('trophyLock2').style.display = 'none' }
            }
                
        }
        if (pos.x >= 522 && pos.x < 555 && pos.y >= 288 && pos.y < 308) {
            document.getElementById('difficulty').style.display = 'block';    ////Thumb icon --- Like and Share to Facebook
        }

        if (gamestate == gamestates.levelUp) {
            playerLvlUp();
            plyrLvlUp = true;
            skillPoints = skillPoints + 1;
            heroBonus = heroBonus + 1;
            gamestate = gamestates.levelUpPlyr;            
            if (player1.playerLevel == 14) {
                ///show bronze Trophy win

                //adjust the stats on the enemies to Silver Cup
                ////////?????

                //adjust cupWon
                cupWon = 1;
                localStorage.setItem('spellMatch_cupWon', cupWon);

            }
                //alert(" hit" + plyrLvlUp);
            
        }
        if (gamestate == gamestates.levelUpPlyr) {
            ////////////////////////////////
            //player level up clicks
            if (plyrLvlUp) {

                if (skillPoints <= 0){}
                if (skillPoints > 0) {
                    //arcane click
                    if (pos.x >= 100 && pos.x < 250 && pos.y >= 90 && pos.y < 130) {
                        if (player1.arcanePower < 5) {
                            console.log("clicked arcane");
                            skillPoints = skillPoints - 1;
                            player1.arcanePower = player1.arcanePower + 1;
                            var srcName = player1.arcanePower + '0.png';
                            if (soundOn) { spellUpSound.play(); };
                            setTimeout(function () { imgArray[0].src = 'Images/HUD/spellLevelUp.png' }, 100);
                            setTimeout(function () { imgArray[0].src = 'Images/' + srcName; }, 500);
                        }

                    }
                    /////Spark click
                    if (pos.x >= 323 && pos.x < 400 && pos.y >= 90 && pos.y < 130) {
                        if (player1.sparkPower < 5) {
                            console.log("clicked spark");
                            skillPoints = skillPoints - 1;
                            player1.sparkPower = player1.sparkPower + 1;
                            var srcName = player1.sparkPower + '1.png';
                            if (soundOn) { spellUpSound.play(); };
                            setTimeout(function () { imgArray[1].src = 'Images/HUD/spellLevelUp.png' }, 100);
                            setTimeout(function () { imgArray[1].src = 'Images/' + srcName; }, 500);
                        }
                    }
                    //fire click
                    if (pos.x >= 100 && pos.x < 250 && pos.y >= 135 && pos.y < 175) {
                        if (player1.firePower < 5) {
                            console.log("clicked fire");
                            skillPoints = skillPoints - 1;
                            player1.firePower = player1.firePower + 1;
                            var srcName = player1.firePower + '2.png';
                            if (soundOn) { spellUpSound.play(); };
                            setTimeout(function () { imgArray[2].src = 'Images/HUD/spellLevelUp.png' }, 100);
                            setTimeout(function () { imgArray[2].src = 'Images/' + srcName; }, 500);
                        }
                    }
                    /////Sword click
                    if (pos.x >= 323 && pos.x < 400 && pos.y >= 135 && pos.y < 175) {
                        if (player1.swordPower < 5) {
                            console.log("clicked sword");
                            skillPoints = skillPoints - 1;
                            player1.swordPower = player1.swordPower + 1;
                            var srcName = player1.swordPower + '3.png';
                            if (soundOn) { spellUpSound.play(); };
                            setTimeout(function () { imgArray[3].src = 'Images/HUD/spellLevelUp.png' }, 100);
                            setTimeout(function () { imgArray[3].src = 'Images/' + srcName; }, 500);
                        }
                    }
                    //Meteor click
                    if (pos.x >= 100 && pos.x < 250 && pos.y >= 180 && pos.y < 225) {
                        if (player1.meteorPower < 5) {
                            console.log("clicked Meteor");
                            skillPoints = skillPoints - 1;
                            player1.meteorPower = player1.meteorPower + 1;
                            var srcName = player1.meteorPower + '4.png';
                            if (soundOn) { spellUpSound.play(); };
                            setTimeout(function () { imgArray[4].src = 'Images/HUD/spellLevelUp.png' }, 100);
                            setTimeout(function () { imgArray[4].src = 'Images/' + srcName; }, 500);
                        }
                    }
                    //Earth click
                    if (pos.x >= 323 && pos.x < 400 && pos.y >= 180 && pos.y < 225) {
                        if (player1.earthPower < 5) {
                            console.log("clicked earth");
                            skillPoints = skillPoints - 1;
                            player1.earthPower = player1.earthPower + 1;
                            var srcName = player1.earthPower + '5.png';
                            if (soundOn) { spellUpSound.play(); };
                            setTimeout(function () { imgArray[5].src = 'Images/HUD/spellLevelUp.png' }, 100);
                            setTimeout(function () { imgArray[5].src = 'Images/' + srcName; }, 500);
                        }
                    }
                    //Air click
                    if (pos.x >= 218 && pos.x < 300 && pos.y >= 222 && pos.y < 265) {
                        if (player1.airPower < 5) {
                            console.log("clicked air");
                            skillPoints = skillPoints - 1;
                            player1.airPower = player1.airPower + 1;
                            var srcName = player1.airPower + '6.png';
                            if (soundOn) { spellUpSound.play(); };
                            setTimeout(function () { imgArray[6].src = 'Images/HUD/spellLevelUp.png' }, 100);
                            setTimeout(function () { imgArray[6].src = 'Images/' + srcName; }, 500);
                        }
                    }

                }
                if (heroBonus > 0) {
                    //Health click
                    if (pos.x >= 100 && pos.x < 260 && pos.y >= 270 && pos.y < 310) {
                        console.log("clicked health");
                        if (soundOn) { spellUpSound.play(); };
                        heroBonus = heroBonus - 1;
                        var healthAdj = (player1.playerLevel * 10);
                        player1.healthMax = player1.healthMax + healthAdj;
                        player1.health = player1.healthMax;
                    }
                    //Defense click
                    if (pos.x >= 320 && pos.x < 400 && pos.y >= 270 && pos.y < 310) {
                        console.log("clicked defense");
                        if (soundOn) { spellUpSound.play(); };
                        heroBonus = heroBonus - 1;
                        var defenseAdj = (player1.playerLevel * 10);
                        player1.defenseMax = player1.defenseMax + defenseAdj;
                        player1.defense = player1.defenseMax;

                    }
                }

              

                //save and close this modal,  start new game with level and change enemy
                if (pos.x >= 0 && pos.x < 80 && pos.y >= 250 && pos.y <=320) {
                    console.log("clicked save");
                    newGame(1); levelScoreProgress = 0; totalSeconds = 0;
                    //enemy.healthMax = player1.healthMax;
                    //enemy.defenseMax = player1.defenseMax;
                   //dd
                    enemy.playerLevel = enemy.playerLevel + 1;
                    getNextEnemy(enemy.playerLevel);
                    enemy.health = enemy.healthMax;
                    enemy.defense = enemy.defenseMax;
                    enemy.defenseDrop = 0;
                    enemy.damage = 0;
                    showVS();

                }
             }
            /////////////////////////////

        }
        if (gamestate == gamestates.almostOver) {
            //context.drawImage(imgArray2[8], 110, 230);
            if (pos.x >= 110 && pos.x < 220 && pos.y >= 230 && pos.y < 280) {
                newGame(0);
                gamestate = gamestates.ready;
                gameOver = false;
                playOnce = 0;
                totalSeconds = 0;
                resizeGame();
                            
            }
            
            if (pos.x >= 185 && pos.x < 310 && pos.y >= 545 && pos.y < 591) {
                //check to see if enough StarCash
                var currentcash = localStorage["starCash"];
                if (currentcash >= 15) {
                    starCash = starCash - 15;
                    localStorage["starCash"] = starCash;
                    newGame(2);
                    shuffleTiles = true;
                    gameover = false;
                    playOnce = 0;
                }
                else { return; }
            }
        }
    }

    function onMouseUp(e) {
        // Reset dragging
        drag = false;
    }

    function onMouseOut(e) {
        // Reset dragging
        drag = false;
    }

    // Get the mouse position
    function getMousePos(canvas, e) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: Math.round((e.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
            y: Math.round((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
        };
    }

    function getNextEnemy(lvl) {
        var newName = '';
        
        newName = enemies[enemy.playerLevel - 1];
              
        var imageUpgrade = "Images/Enemy/lvl" + enemy.playerLevel + ".png";
        console.log("image upgrade = " + imageUpgrade);
        document.getElementById('vsEnemy').src = imageUpgrade;
        enemy.name = newName;
        enemyNameGlobal = newName;

        /////////modify enemy stats
        var newEnemyHealthMax = 0;
        var newEnemyDefenseMax = 0;
        var modifierLevel = '';
             
        newEnemyHealthMax = enemyStats["lvl" + lvl]['health'];
        newEnemyDefenseMax = enemyStats["lvl" + lvl]['defense'];;
       
        enemy.healthMax = newEnemyHealthMax;
        enemy.defenseMax = newEnemyDefenseMax;
     
        ;
        
    }

    function levelUp() {
        gamestate = gamestates.levelUp;
        soundLoop.pause();
        gameSoundLoop.pause();
        if (soundOn) { levelUpSound.play(); };
        
        document.getElementById('message').style.display = 'none';
        levelBump = 1;
        var levelAdjust = levelCount + 1;
        //console.log("level adjust" + levelAdjust);
    
    }
    function playerLvlUp() {
        
        plyrLvlUp = true;
               
    }
 


    // Call init to start the game
    init();

};
////////////////////////////Boosts application
function clkBoostPotion(num) {
    var healthMod = 0;
    var defMod = 0;
    console.log("potion clicked = " + num);
    if (num == 1) {                                         ///////clicked Health Potion/////////
        starCash = starCash - 25;
        localStorage["starCash"] = starCash;
        healthMod = player1.healthMax / 2;
        console.log("healthMod = " + healthMod);
        player1.health = player1.health + healthMod;
        if (player1.health > player1.healthMax) { player1.health = player1.healthMax; }
                };
    if (num == 2) {                                     ///////clicked power orb/////////
        starCash = starCash - 25;
        localStorage["starCash"] = starCash;
        playerClusterCount = 7;

                };
    if (num == 3) {                                    ///////clicked tome of defense/////////
         starCash = starCash - 25;
         localStorage["starCash"] = starCash;
         defMod = player1.defenseMax - player1.defense;
         player1.defenseMax = player1.defenseMax + 50;
         player1.defense = player1.defenseMax - defMod;
         if (player1.defense > player1.defenseMax) { player1.defense = player1.defenseMax; }
                };
}
function hideIntro() {

    var cover = document.getElementById("landingCover");
    cover.style.display = 'none';
    


    newGameLoad = 1;
    newGame(0);
}

function resizeGame() {
    //alert("resize");
    var gameBoard = document.getElementById('viewport1');
    var widthToHeight = 5.68 / 3.2;

    var newWidth = window.innerWidth - 10;
    if (newWidth > 900) { newWidth = 900 }
    var newHeight = window.innerHeight - 10;
    if (newHeight > 619) { newHeight = 620 }
    var newWidthToHeight = newWidth / newHeight;

    if (newWidthToHeight > widthToHeight) {  // window width is too wide relative to desired game width
        gameBoard.style.height = newHeight + 'px';
        newWidth = newHeight * widthToHeight;
        gameBoard.style.width = newWidth + 'px';
    } else {  // window height is too high relative to desired game height
        gameBoard.style.width = newWidth + 'px';
        newHeight = newWidth / widthToHeight;
        gameBoard.style.height = newHeight + 'px';
    }

    // center the canvas
    gameBoard.style.marginTop = (-newHeight / 2) + 'px';
    console.log(-newHeight / 2);
    gameBoard.style.marginLeft = (-newWidth / 2) + 'px';
};	

function hideTitlePage(num) {
    console.log("num = " + num);
    if (num == 1) {
       
        document.getElementById("helpGif").style.display = 'block';
        document.getElementById("skipMe").style.display = 'block';
    }
    if (num == 2) {
        /////get values from local storage
              

        player1 = JSON.parse(localStorage.getItem('spellMatch_Player'));
        enemy = JSON.parse(localStorage.getItem('spellMatch_Enemy'));
        cupWon = localStorage.getItem('spellMatch_cupWon');

        var newName = '';

        newName = enemies[enemy.playerLevel - 1];
        var imageUpgrade = "Images/Enemy/lvl" + enemy.playerLevel + ".png";
        console.log("Loaded image upgrade = " + imageUpgrade);
        document.getElementById('vsEnemy').src = imageUpgrade;
        enemy.name = newName;
        enemyNameGlobal = newName;

        document.getElementById('titleCover').style.display = 'none';
        document.getElementById("helpGif").style.display = 'none';
        document.getElementById('coverWrapper').style.display = 'block';
        showVS();
        var srcName = '';
        console.table(player1);
        function adjustSpellsOnLoad() {
            if (player1.arcanePower > 1) {
                srcName = player1.arcanePower + '0.png';
                imgArray[0].src = 'Images/' + srcName;
            }

            if (player1.sparkPower > 1) {
                srcName = player1.sparkPower + '1.png';
                imgArray[1].src = 'Images/' + srcName;
            }
            if (player1.firePower > 1) {
                srcName = player1.firePower + '2.png';
                imgArray[2].src = 'Images/' + srcName;
            }
            if (player1.swordPower > 1) {
                srcName = player1.swordPower + '3.png';
                imgArray[3].src = 'Images/' + srcName;
            }
            if (player1.meteorPower > 1) {
                srcName = player1.meteorPower + '4.png';
                imgArray[4].src = 'Images/' + srcName;
            }
            if (player1.earthPower > 1) {
                srcName = player1.earthPower + '5.png';
                imgArray[5].src = 'Images/' + srcName;
            }
            if (player1.airPower > 1) {
                srcName = player1.airPower + '6.png';
                imgArray[6].src = 'Images/' + srcName;
            }

        }
        adjustSpellsOnLoad();
        
    }
      
}

function showVS() {
    document.getElementById('titleCover').style.display = 'none';
    document.getElementById("helpGif").style.display = 'none';
    document.getElementById("skipMe").style.display = 'none';
    document.getElementById('coverWrapper').style.display = 'block';
    document.getElementById('vsCover').style.display = 'block';
    document.getElementById('goHome').style.display = 'none';
    document.getElementById("playerNameP").innerHTML = playerNameGlobal;
    document.getElementById("enemyNameP").innerHTML = enemyNameGlobal;
    document.getElementById("countDown").innerHTML = " ";
    var timeLeft = 4;
    var timertick = setInterval(function () {
        timeLeft = timeLeft - 1;
        
        document.getElementById("countDown").innerHTML = timeLeft;
        if (timeLeft == 0) { document.getElementById("countDown").innerHTML = "Go"; }
        if (timeLeft <= 0) {
            clearInterval(timertick);

        }

    }, 1000);

    setTimeout(function () {
        document.getElementById("vsCover").style.display = 'none';
        document.getElementById('coverWrapper').style.display = 'none';
        document.getElementById('goHome').style.display = 'none';
        document.getElementById('difficulty').style.display = 'none';
    }, 5000);
}

function read_prop(obj, prop) {
    return obj[prop];
}


///////////difficulty modal////////////////////////////////////////
function changeDifficulty(num) {
    difficulty = num;
    var slectAdjust = '';
    if (num == 2) { selectAdjust = '47%' }
    else if (num == 3) { selectAdjust = '65%' }
    else { selectAdjust = '30%' };
    document.getElementById("selectedDiff").style.top = selectAdjust;
}
function saveDifficulty() {
    document.getElementById('difficulty').style.display = 'none';
}


////////////Home Modal////////////////////////////////////////////////


function homeSave() {               ////save values to local storage
    document.getElementById('goHome').style.display = 'none';
    //if (typeof localStorage["spellMatchPlayer"] === "undefined") { localStorage["spellMatchPlayer"] = player1.;  };
    localStorage.setItem('spellMatch_Player', JSON.stringify(player1));
    localStorage.setItem('spellMatch_Enemy', JSON.stringify(enemy));
    localStorage.setItem('spellMatch_cupWon', cupWon);
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('spellMatch_Player');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));


}
function gameReturn1() {
    document.getElementById('goHome').style.display = 'none';
    document.getElementById('inventoryParent').style.display = 'none'; 
    document.getElementById('trophyParent').style.display = 'none';
    document.getElementById('playerStatsParent').style.display = 'none';
    selectedCup = 0;
}
function swapEnemyStatsView(lvl) {
    cupWon = localStorage.getItem('spellMatch_cupWon');
    var enemyNameNew = enemyStats["lvl" + lvl]['name'];
    var newImageLocation = "url('Images/Enemy/lvl" + lvl + ".png')";
    //console.log(enemyStats["lvl" + lvl]['name']);
    //console.log(enemyStats["lvl" + lvl]['health']);
    //console.log(enemyStats["lvl" + lvl]['defense']);
    //console.log(enemyStats["lvl" + lvl]['story']);
    if (cupWon >= 1 && selectedCup == 1) { lvl = lvl + 13 };
    if (cupWon == 2 && selectedCup == 2){ lvl = lvl + 27 };

    document.getElementById("enemyNameCenter").innerHTML = enemyNameNew;//enemyNameCenter
    document.getElementById("innerStat1").innerHTML = enemyStats["lvl" + lvl]['health'];
    document.getElementById("innerStat3").innerHTML = enemyStats["lvl" + lvl]['defense'];
    document.getElementById("innerStory").innerHTML = enemyStats["lvl" + lvl]['story'];
    document.getElementById("centerTrophyMiddleLeft").style.backgroundImage = newImageLocation;

   

    if (selectedCup == 0) {
        document.getElementById("r5-c2").style.backgroundImage = "url('Images/buttons/goldLock.png')";
        document.getElementById("r5-c3").style.backgroundImage = "url('Images/buttons/goldLock.png')";
        if (lvl >= 14){
            document.getElementById("centerTrophyMiddleLeft").style.backgroundImage = "url('Images/buttons/goldLock.png')";
        document.getElementById("enemyNameCenter").innerHTML = lockedName;
        document.getElementById("innerStat1").innerHTML = lockedStat1;
        document.getElementById("innerStat3").innerHTML = lockedStat2;
        document.getElementById("innerStory").innerHTML = lockedStory;
        if (lvl == 15) { document.getElementById("enemyNameCenter").innerHTML = lockedName2; }
    }
    }

    if (cupWon == 1 && selectedCup == 1) { document.getElementById("r5-c2").style.backgroundImage = "url('Images/Enemy/lvl27.png')"; }
    if (cupWon == 2 && selectedCup == 3) {
        document.getElementById("r5-c2").style.backgroundImage = "url('Images/Enemy/lvl27.png')";
        document.getElementById("r5-c3").style.backgroundImage = "url('Images/Enemy/lvl42.png')";
    }
    console.log("level at click " + lvl);
    console.log("cup won " + cupWon);
    console.log("selected cup " + selectedCup);
    if (cupWon == 1 && lvl == 27 && selectedCup == 1) {
        document.getElementById("centerTrophyMiddleLeft").style.backgroundImage = "url('Images/Enemy/lvl27.png')";
        document.getElementById("r5-c2").style.backgroundImage = "url('Images/Enemy/lvl27.png')";
        document.getElementById("r5-c3").style.backgroundImage = "url('Images/buttons/goldLock.png')";
        document.getElementById("enemyNameCenter").innerHTML = enemyNameNew;                                                                        ////////Silver Cup
        document.getElementById("innerStat1").innerHTML = enemyStats["lvl" + lvl]['health'];
        document.getElementById("innerStat3").innerHTML = enemyStats["lvl" + lvl]['defense'];
        document.getElementById("innerStory").innerHTML = enemyStats["lvl" + lvl]['story'];
        document.getElementById("centerTrophyMiddleLeft").style.backgroundImage = newImageLocation;

    }
    if (cupWon > 1 && lvl == 42 && selectedCup == 2) {
        document.getElementById("centerTrophyMiddleLeft").style.backgroundImage = "url('Images/Enemy/lvl42.png')";
        document.getElementById("r5-c3").style.backgroundImage = "url('Images/Enemy/lvl42.png')";
        document.getElementById("enemyNameCenter").innerHTML = enemyNameNew;                                                                        ////////Gold Cup
        document.getElementById("innerStat1").innerHTML = enemyStats["lvl" + lvl]['health'];
        document.getElementById("innerStat3").innerHTML = enemyStats["lvl" + lvl]['defense'];
        document.getElementById("innerStory").innerHTML = enemyStats["lvl" + lvl]['story'];
        document.getElementById("centerTrophyMiddleLeft").style.backgroundImage = newImageLocation;////////Gold Cup

    }

}
    //
    //innerStat3
    //innerStory
    //centerTrophyMiddleLeft

function hideCountDown() {
    //coverWrapper
    document.getElementById('coverWrapper').style.display = 'none';
    
}
function selectCup(cupArg) {
    //cupGuiName
    
    selectedCup = cupArg;
    if (selectedCup == 0) {
        document.getElementById("r5-c3").style.backgroundImage = "url('Images/buttons/goldLock.png')";
        document.getElementById("r5-c3").style.backgroundImage = "url('Images/buttons/goldLock.png')";
        document.getElementById("cupGuiName").innerHTML = "Bronze Cup"
        document.getElementById('trophyLock3').style.display = 'none';
        
    }
    if (selectedCup == 1 && cupWon < 1) {

    }
    if (selectedCup == 1) {
        document.getElementById("r5-c3").style.backgroundImage = "url('Images/buttons/goldLock.png')";
        document.getElementById("cupGuiName").innerHTML = "Silver Cup"
        document.getElementById('trophyLock3').style.display = 'none';
    }
    if (selectedCup == 3) {
        document.getElementById("cupGuiName").innerHTML = "Gold Cup"
        document.getElementById('trophyLock3').style.display = 'none';
    }
    if (selectedCup == 2) {
        document.getElementById("cupGuiName").innerHTML = "Star Tracking"
        document.getElementById('trophyLock3').style.display = 'none';
    }
   
    swapEnemyStatsView(1);

    if (selectedCup == 4) {
        document.getElementById("centerTrophyMiddleLeft").style.backgroundImage = "url('Images/buttons/goldLock.png')";
        document.getElementById("cupGuiName").innerHTML = "Win Bronze tournament to unlock";
        document.getElementById('trophyLock3').style.display = 'block';
        document.getElementById("centerTrophyMiddleLeft").style.backgroundImage = "url('Images/buttons/goldLock.png')";
        document.getElementById("enemyNameCenter").innerHTML = lockedName;
        document.getElementById("innerStat1").innerHTML = lockedStat1;
        document.getElementById("innerStat3").innerHTML = lockedStat2;
        document.getElementById("innerStory").innerHTML = lockedStory;
    }
    if (selectedCup == 5) {
        document.getElementById("centerTrophyMiddleLeft").style.backgroundImage = "url('Images/buttons/goldLock.png')";
        document.getElementById("cupGuiName").innerHTML = "Win Silver tournament to unlock";
        document.getElementById('trophyLock3').style.display = 'block';
        document.getElementById("centerTrophyMiddleLeft").style.backgroundImage = "url('Images/buttons/goldLock.png')";
        document.getElementById("enemyNameCenter").innerHTML = lockedName2;
        document.getElementById("innerStat1").innerHTML = lockedStat1;
        document.getElementById("innerStat3").innerHTML = lockedStat2;
        document.getElementById("innerStory").innerHTML = lockedStory;
    }

}
function updateStats() {
    document.getElementById("healthInnerStat").innerHTML = player1.health;
    document.getElementById("defInnerStat").innerHTML = player1.defense;
    document.getElementById("playerLevelTitle").innerHTML = "Level " + player1.playerLevel;
    var tempA = localStorage.getItem('spellMatch_cupWon');
    console.log("tempA ===" + tempA);
    document.getElementById("playerCupStats").style.backgroundImage = "url('Images/Hero/trophy" + tempA +".png')";
    document.getElementById("starCashStat").innerHTML = starCash;

    document.getElementById("arcaneStatVal").innerHTML = player1.arcanePower;
    document.getElementById("sparkStatVal").innerHTML = player1.sparkPower;
    document.getElementById("fireStatVal").innerHTML = player1.firePower;
    document.getElementById("swordStatVal").innerHTML = player1.swordPower;
    document.getElementById("meteorStatVal").innerHTML = player1.meteorPower;
    document.getElementById("earthStatVal").innerHTML = player1.earthPower;
    document.getElementById("airStatVal").innerHTML = player1.airPower;

}