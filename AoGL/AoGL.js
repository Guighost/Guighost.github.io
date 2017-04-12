//Globals
var clickx = {};
var clicky = {};
var oldx = {};
var interact1 = false;
var west = false;
// Create the canvas
var i = 0;
//var canvas = document.createElement("canvas");
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 725;
canvas.className = 'inventoryBorder';
var style = canvas.style;
style.marginLeft = "auto";
style.marginRight = "auto";
var parentStyle = canvas.parentElement.style;
parentStyle.textAlign = "center";
parentStyle.width = "100%";

var timer;
// Background image

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/background.png";

//manorImage
var manorReady = false;
var manorImage = new Image();
manorImage.onload = function () {
    manorReady = true;
}
manorImage.src = "images/manor.png";

//fenceImage
var fenceReady = false;
var fenceImage = new Image();
fenceImage.onload = function () {
    fenceReady = true;
}
fenceImage.src = "images/fence.png";

//centerwell
var centerWellReady = false;
var centerWellImage = new Image();
centerWellImage.onload = function () {
    centerWellReady = true;
}
centerWellImage.src = "images/centerwell.png";



//roadVirtImage
var roadVirtReady = false;
var roadVirtImage = new Image();
roadVirtImage.onload = function () {
    roadVirtReady = true;
}
roadVirtImage.src = "images/roadVirt.png";
//roadHorizImage
var roadHorizReady = false;
var roadHorizImage = new Image();
roadHorizImage.onload = function () {
    roadHorizReady = true;
}
roadHorizImage.src = "images/roadHoriz.png";
// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = "images/knt1_fr1.png";
heroImage.id = heroImage;


// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = "images/monster.png";
// Guard right image
var guardReady = false;
var guardImage = new Image();
guardImage.onload = function () {
    guardReady = true;
};
guardImage.src = "images/grd_rt1.png";
guardImage.className = "tossing";


// Guard left image
var guardLReady = false;
var guardLImage = new Image();
guardLImage.onload = function () {
    guardLReady = true;
    guardLImage.className = "moveLeft";
};
guardLImage.src = "images/grd_lf1.png";

// Guard l1 image
var guardL1Ready = false;
var guardL1Image = new Image();
guardL1Image.onload = function () {
    guardL1Ready = true;
    guardL1Image.className = "moveLeft";
};
guardL1Image.src = "images/grd_lf1.png";

//Tree Image//
var treeReady = false;
var treeImage = new Image();

treeImage.onload = function () {
    treeReady = true;
}
treeImage.src = "images/tree.JPG";

//ForestImage
var forestReady = false;
var forestImage = new Image();

forestImage.onload = function () {
    forestReady = true;
}
forestImage.src = "images/forest.png";


//HouseImage//
var houseReady = false;
var houseImage = new Image();

houseImage.onload = function () {
    houseReady = true;
}
houseImage.src = "images/house.png";

//SideHouse
var sideBuildReady = false;
var sideBuildImage = new Image();

sideBuildImage.onload = function () {
    sideBuildReady = true;
}
sideBuildImage.src = "images/sideBuilding.png";

//Tower
var towerReady = false;
var towerImage = new Image();

towerImage.onload = function () {
    towerReady = true;
}
towerImage.src = "images/tower.png";


//rockImage
var rockReady = false;
var rockImage = new Image();

rockImage.onload = function () {
    rockReady = true;
}
rockImage.src = "images/rocks.png";

//Mountain Image
var mountainReady = false;
var mountainImage = new Image();
mountainImage.onload = function () {
    mountainReady = true;
};
mountainImage.src = "images/mountain.png";

//Grass1
var grassReady = false;
var grassImage = new Image();
grassImage.onload = function () {
    grassReady = true;
};
grassImage.src = "images/grass-tile.png";

//wallVirt
var wallVirtReady = false;
var wallVirtImage = new Image();
wallVirtImage.onload = function () {
    wallVirtReady = true;
};
wallVirtImage.src = "images/wall1.png";

//wallHoriz
var wallHorizReady = false;
var wallHorizImage = new Image();
wallHorizImage.onload = function () {
    wallHorizReady = true;
};
wallHorizImage.src = "images/wall2.png";

//Low Towers
var lowTowerReady = false;
var lowTowerImage = new Image();
lowTowerImage.onload = function () {
    lowTowerReady = true;
};
lowTowerImage.src = "images/lowTower.png";

// Game objects
var hero = {
    speed: 128 // movement in pixels per second
};
var monster = {};

var monstersCaught = 0;
var tree = {};
var sideBuild = {};
var guardL1 = {};

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
    hero.x = (canvas.width / 2) - 10;
    hero.y = 400 ;

    // Throw the monster somewhere on the screen randomly
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
};


// Update game objects
var update = function (modifier) {
    if (west) { return; }
    if (38 in keysDown) { // Player holding up
        hero.y -= hero.speed * modifier;
        if (heroImage.src = "Images/knt1_bk1.png") { heroImage.src = "Images/knt1_bk2.png" }
        else { heroImage.src = "Images/knt1_bk1.png" }
        backImgswap();
        var timeoutID;
        
        function backImgswap() {
            timeoutID = window.setTimeout(backImg1, 100);
            //timeoutID2 = window.setTimeout(backImg2,1000); }

            function backImg1() {
                if (heroImage.src = "Images/knt1_bk2.png") { heroImage.src = "Images/knt1_bk1.png" }
                

            }
            //function backImg2 () { heroImage.src = "Images/knt1_bk2.png"}

        }
       
    }
    if (!(38 in keysDown )) {
        window.clearTimeout(timeoutID)
    }

    
    
    if (40 in keysDown) { // Player holding down
        hero.y += hero.speed * modifier;
        if (heroImage.src = "Images/knt1_fr1.png") { heroImage.src = "Images/knt1_fr2.png" }
        frontImgswap();
        var timeoutID2;

        function frontImgswap() {
            timeoutID2 = window.setTimeout(frImg1, 100);
           

            function frImg1() {
                if (heroImage.src = "Images/knt1_fr2.png") { heroImage.src = "Images/knt1_fr1.png" }
                            }
                   }
        
    }
    if (!(40 in keysDown)) {
        window.clearTimeout(timeoutID2)
    }


    if (37 in keysDown) { // Player holding left
        oldx = hero.x;
        oldy = hero.y;
        hero.x -= hero.speed * modifier;
        if (heroImage.src = "Images/knt1_lf2.png") { heroImage.src = "Images/knt1_lf1.png" }
      leftImgswap();
        var timeoutID3;

        function leftImgswap() {
            timeoutID3 = window.setTimeout(lfImg1, 100);


            function lfImg1() {
                if (heroImage.src = "Images/knt1_lf1.png") { heroImage.src = "Images/knt1_lf2.png" }
            }
        }
    }
    if (!(37 in keysDown)) {
        window.clearTimeout(timeoutID3)
    }
    if (39 in keysDown) { // Player holding right
        hero.x += hero.speed * modifier;
        if (heroImage.src = "Images/knt1_rt2.png") { heroImage.src = "Images/knt1_rt1.png" }
        rightImgswap();
        var timeoutID4;

        function rightImgswap() {
            timeoutID4 = window.setTimeout(rtImg1, 100);


            function rtImg1() {
                if (heroImage.src = "Images/knt1_rt1.png") { heroImage.src = "Images/knt1_rt2.png" }
            }
        }
        
    }
    if (!(39 in keysDown)) {
        window.clearTimeout(timeoutID4)
    }


// Are hero and monster touching?
    if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
        ++monstersCaught;
        reset();

    }
// Stop movement code:
    
    if (hero.x >= canvas.width - 25) { hero.x = canvas.width - 25; }
    if (hero.x <= 5 && hero.y <= 395) { hero.x = 5; }
    if (hero.x <= 5 && hero.y <= 425) { hero.x = 5; }
    if (hero.y >= canvas.height - (heroImage.height + 10)) { hero.y = canvas.height - (heroImage.height + 10); }
    else if (hero.y <= 10) { hero.y = 10; }
    if (hero.y >= canvas.height - (heroImage.height + 100) && hero.x >= 260 && hero.x <= 350) { hero.x = oldx; }
    //stop movement MANOR //
    if (hero.x <= 370 && hero.x >= 260 && hero.y <= 140 && hero.y >= 125) { hero.y = 140; }
    if (hero.x <= 500 && hero.x >= 410 && hero.y <= 140 && hero.y >= 125) { hero.y = 140; }
    if (hero.x <= 270 && hero.x >= 260 && hero.y <= 140 && hero.y >= 20) { hero.x = 260; }
    if (hero.x <= 515 && hero.x >= 505 && hero.y <= 140 && hero.y >= 20) { hero.x = 515; }

    //stop movement Houses left
    
    if (hero.x <= 305 && hero.x >= 58 && hero.y >= 520 && hero.y <= 540) { hero.y = 540; }
    if (hero.x <= 300 && hero.x >= 58 && hero.y <= 535 && hero.y >= 450) { hero.x = 300; }
    if (hero.y >= 420 && hero.y <= 430 && hero.x >= 5 && hero.x <= 299) { hero.y = 420; }
   
    //stop movement Houses right

    if (hero.x <= 775 && hero.x >= 470 && hero.y >= 520 && hero.y <= 540) { hero.y = 540; }
    if (hero.x <= 700 && hero.x >= 470 && hero.y <= 535 && hero.y >= 450) { hero.x = 470; }
    if (hero.y >= 420 && hero.y <= 425 && hero.x >= 471 && hero.x <= 775) { hero.y = 420; }
    //stop movement BigBuilding left
    if (hero.x >= 5 && hero.x <= 160 && hero.y <= 398 && hero.y >= 380) { hero.y = 400; }
    if (hero.x <= 245 && hero.x >= 161 && hero.y <= 380 && hero.y >= 375) { hero.y = 380; }
    if (hero.x >= 246 && hero.x <= 320 && hero.y <= 398 && hero.y >= 390) { hero.y = 400; }
    if (hero.x >= 85 && hero.x <= 320 && hero.y >= 215 && hero.y <= 220) { hero.y = 214; }
    if (hero.x <= 325 && hero.x >= 315 && hero.y <= 390 && hero.y >= 221) { hero.x = 325; }
    if (hero.x >= 85 && hero.x <= 95 && hero.y <= 390 && hero.y >= 215) { hero.x = 84; }

    //stop movement Big Building right
    if (hero.x >= 445 && hero.x <= 524 && hero.y <= 398 && hero.y >= 380) { hero.y = 400; }
    if (hero.x <= 605 && hero.x >= 525 && hero.y <= 380 && hero.y >= 365) { hero.y = 380; }
    if (hero.x >= 606 && hero.x <= 775 && hero.y <= 398 && hero.y >= 380) { hero.y = 400; }
    if (hero.x >= 445 && hero.x <= 775 && hero.y >= 215 && hero.y <= 220) { hero.y = 214; }
    if (hero.x <= 455 && hero.x >= 446 && hero.y <= 390 && hero.y >= 221) { hero.x = 445; }
    if (hero.x >= 680 && hero.x <= 690 && hero.y <= 390 && hero.y >= 215) { hero.x = 690; }

    // stop movement SideBuild top Left
    if (hero.x >= 90 && hero.x <= 95 && hero.y <= 194 && hero.y >= 45) { hero.x = 95; }
    if (hero.x >= 0 && hero.x <= 95 && hero.y <= 195 && hero.y >= 180) { hero.y = 195; }

    // stop movement SideBuild top Right
    if (hero.x >= 670 && hero.x <= 750 && hero.y <= 193 && hero.y >= 45) { hero.x = 670; }
    if (hero.x >= 671 && hero.x <= 750 && hero.y <= 199 && hero.y >= 194) { hero.y = 199; }

    // stop movement fences Top
    //if (hero.y <= 50) { hero.y = 50; }

    //Go Inside Manor
    if (hero.x <= 409 && hero.x >= 371 && hero.y <= 140 && hero.y >= 135) {
        manorInterior();
        var lvl2 = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }
    // Go West from town
    if (hero.x <= 5 && hero.y >= 395 && hero.y <= 420) {
        westWoods();
        west = true;
        return;
    }
};



// Draw everything
var render = function () {
    if (west) { return;};
    ////draw Background ////
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0, [800], [750]);
    }
    //roadVirt
    if (roadVirtReady) {
        ctx.drawImage(roadVirtImage, 105, 465, [40], [100])
        ctx.drawImage(roadVirtImage, 375, 175, [50], [100])
        ctx.drawImage(roadVirtImage, 375, 250, [50], [100])
        ctx.drawImage(roadVirtImage, 375, 350, [50], [100])
        ctx.drawImage(roadVirtImage, 375, 450, [50], [100])
        ctx.drawImage(roadVirtImage, 375, 550, [50], [100])
        ctx.drawImage(roadVirtImage, 375, 650, [50],[100])
    }
    //roadHoriz
    if (roadHorizReady) {
        ctx.drawImage(roadHorizImage, 50, 160)
        ctx.drawImage(roadHorizImage, 150, 170)
        ctx.drawImage(roadHorizImage, 250, 180)
        ctx.drawImage(roadHorizImage, 350, 190)
        ctx.drawImage(roadHorizImage, 450, 180)
        ctx.drawImage(roadHorizImage, 550, 170)
        ctx.drawImage(roadHorizImage, 650, 160)

        ctx.drawImage(roadHorizImage, 0, 425)
        ctx.drawImage(roadHorizImage, 0, 565)
        ctx.drawImage(roadHorizImage, 100, 425)
        ctx.drawImage(roadHorizImage, 100, 565)
        ctx.drawImage(roadHorizImage, 200, 425)
        ctx.drawImage(roadHorizImage, 200, 565)
        ctx.drawImage(roadHorizImage, 300, 425)
        ctx.drawImage(roadHorizImage, 300, 565)
        ctx.drawImage(roadHorizImage, 400, 425)
        ctx.drawImage(roadHorizImage, 400, 565)
        ctx.drawImage(roadHorizImage, 500, 425)
        ctx.drawImage(roadHorizImage, 500, 565)
        ctx.drawImage(roadHorizImage, 600, 425)
        ctx.drawImage(roadHorizImage, 600, 565)
        ctx.drawImage(roadHorizImage, 700, 425)
        ctx.drawImage(roadHorizImage, 700, 565)
    }
    if (centerWellReady) {
        ctx.drawImage(centerWellImage, 305, 414)
    }
   
    //draw monster//
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }
   

    
   
    //sideBuildings
    if (sideBuildReady) {
        
        ctx.drawImage(sideBuildImage, 30, 25)
        ctx.drawImage(sideBuildImage, 695, 25)

        ctx.drawImage(sideBuildImage, 100, 225)
        ctx.drawImage(sideBuildImage, 265, 225)
        ctx.drawImage(houseImage, 170, 250, [95], [150])
        ctx.drawImage(sideBuildImage, 465, 225)
        
        ctx.drawImage(sideBuildImage, 625, 225)
        ctx.drawImage(houseImage, 535, 250, [95], [150])
    }
    //houses
    if (houseReady) {
        ctx.drawImage(houseImage, 80, 450, [100],[120])
        ctx.drawImage(houseImage, 205, 450, [100], [120])
        
        ctx.drawImage(houseImage, 495, 450, [100], [120])
        ctx.drawImage(houseImage, 620, 450, [100], [120])
    }
    //Mountains
    if (mountainReady) {
        
        ctx.drawImage(mountainImage, 0, 625, [200], [140])
        ctx.drawImage(forestImage, 50, 615, [75], [75])
        ctx.drawImage(mountainImage, 615, 625, [200], [140])
        ctx.drawImage(forestImage, 660, 615, [75], [75])


    }

    //Towers
    if (towerReady) {
        ctx.drawImage(towerImage, 0, 275, [75], [150])
        ctx.drawImage(towerImage, 0, 450, [75], [150])
        
        ctx.drawImage(wallHorizImage, 460, 690, [50], [50])
        ctx.drawImage(wallHorizImage, 500, 690)
        ctx.drawImage(wallHorizImage, 250, 690)
        ctx.drawImage(towerImage, 725, 275, [75], [150])
        ctx.drawImage(towerImage, 725, 450, [75], [150])

        ctx.drawImage(towerImage, 280, 600, [75], [125])
        ctx.drawImage(towerImage, 450, 600, [75], [125])
    }
    //Walls Virt
    if (wallVirtReady) {
        ctx.drawImage(wallVirtImage, 770, 0)
        ctx.drawImage(wallVirtImage, 770, 50)
        ctx.drawImage(wallVirtImage, 770, 100)
        ctx.drawImage(wallVirtImage, 770, 150)
        ctx.drawImage(wallVirtImage, 770, 215)
        ctx.drawImage(wallVirtImage, 0, 0)
        ctx.drawImage(wallVirtImage, 0, 75)
        ctx.drawImage(wallVirtImage, 0, 150)
        ctx.drawImage(wallVirtImage, 0, 200)
        ctx.drawImage(wallVirtImage, 180, 585)
        ctx.drawImage(wallVirtImage, 180, 660)
        ctx.drawImage(wallVirtImage, 585, 600)
        ctx.drawImage(wallVirtImage, 585, 670)
        
    }
    
    //Walls Horiz
    if (wallHorizReady) {
        ctx.drawImage(wallHorizImage, 0, 0)
        ctx.drawImage(wallHorizImage, 75, 0)
        ctx.drawImage(wallHorizImage, 150, 0)
        ctx.drawImage(wallHorizImage, 225, 0)
        ctx.drawImage(wallHorizImage, 300, 0)
        ctx.drawImage(wallHorizImage, 375, 0)
        ctx.drawImage(wallHorizImage, 450, 0)
        ctx.drawImage(wallHorizImage, 525, 0)
        ctx.drawImage(wallHorizImage, 600, 0)
        ctx.drawImage(wallHorizImage, 690, 0)
        ctx.drawImage(wallHorizImage, 0, 585)
        ctx.drawImage(wallHorizImage, 75, 585)
        ctx.drawImage(wallHorizImage, 125, 585)
        ctx.drawImage(wallHorizImage, 585, 585)
        ctx.drawImage(wallHorizImage, 655, 585)
        ctx.drawImage(wallHorizImage, 720, 585)

        ctx.drawImage(wallHorizImage, 200, 690)
    }
    //guards right
    if (guardReady) {
        ctx.drawImage(guardImage, 350, 190)
        ctx.drawImage(guardImage, 350, 690)
        ctx.drawImage(guardImage, 700, 390)
        ctx.drawImage(guardImage, 700, 430)
    }
    //guards Left
    
    if (guardLReady) {
        ctx.drawImage(guardLImage, 420, 190)
        ctx.drawImage(guardLImage, 70, 390)
        ctx.drawImage(guardLImage, 70, 420)
        guardL1.x = 420;
        guardL1.y = 690;
        ctx.drawImage(guardL1Image, guardL1.x, guardL1.y)
    }
    // manor
    if (manorReady) {
        ctx.drawImage(manorImage, 280, 25)
    }
    //manorTowers
    if (lowTowerReady) {
        ctx.drawImage(lowTowerImage, 282, 12)
        ctx.drawImage(lowTowerImage, 390, 39, [31], [50])
        ctx.drawImage(lowTowerImage, 465, 12)
    }
    //fence
    if (fenceReady) {
        ctx.drawImage(fenceImage, 100, 30)
        
        
        
        ctx.drawImage(fenceImage, 600, 30)
        
    }
   
    
    //draw Hero///
    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }
    //draw monster//
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }
    // Text at top
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica ";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("GuiTown" + " X="+ parseInt(hero.x, 10) + " "+" "+"Y=" + parseInt(hero.y, 10) + "  "+"  "+"Goblins Caught: " + monstersCaught, 15, 8);


 
    
    
};



// The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();
    if (west) { return; };
    

    then = now;
    i++;
    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////In Manor//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function manorInterior() {
    var ret = false;
    var i = 0;
    var canvas = document.getElementById('canvas');
    var ctx2 = canvas.getContext("2d");
    canvas.width = 750;
    canvas.height = 450;
    var style = canvas.style;
    style.marginLeft = "auto";
    style.marginRight = "auto";
   
    var parentStyle = canvas.parentElement.style;
    parentStyle.textAlign = "center";
    parentStyle.width = "100%";
    //exit the function
    if (ret) { return }
      

    var timer;

    //Images//

    //Background
    var bg2Ready = false;
    var bg2Image = new Image();
    bg2Image.onload = function () {
        bg2Ready = true;
    };
    bg2Image.src = "images/InManor.png";

    //Hero Image
    // Hero image
    var hero2Ready = false;
    var hero2Image = new Image();
    hero2Image.onload = function () {
        hero2Ready = true;
    };
    hero2Image.src = "images/knt1_fr1.png";

    //Lord Image
    var lord1Ready = false;
    var lord1Image = new Image();
    lord1Image.onload = function () {
        lord1Ready = true;
    }
    lord1Image.src = "images/zph1_fr1.png";

    //TextBackground
    var scrollReady = false;
    var scrollImage = new Image();
    scrollImage.onload = function () {
        scrollReady = true;}
    scrollImage.src = "images/old_scroll.jpg";
    /////

    var hero2 = {
        speed: 128 // movement in pixels per second
    };
    hero2.x = (canvas.width / 2) - 10;
    hero2.y = (canvas.height - 40);
    addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
    }, false);

    addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
    }, false);

    /////update2////

    var update2 = function (modifier) {
        //exit the function
        
        if (38 in keysDown) { // Player holding up
            hero2.y -= hero2.speed * modifier;
            if (hero2Image.src = "Images/knt1_bk1.png") { hero2Image.src = "Images/knt1_bk2.png" }
            else { hero2Image.src = "Images/knt1_bk1.png" }
            backImgswap();
            var timeoutID;

            function backImgswap() {
                timeoutID = window.setTimeout(backImg1, 100);
                //timeoutID2 = window.setTimeout(backImg2,1000); }

                function backImg1() {
                    if (hero2Image.src = "Images/knt1_bk2.png") { hero2Image.src = "Images/knt1_bk1.png" }


                }
               

            }

        }
        if (!(38 in keysDown)) {
            window.clearTimeout(timeoutID)
        }



        if (40 in keysDown) { // Player holding down
            hero2.y += hero2.speed * modifier;
            if (hero2Image.src = "Images/knt1_fr1.png") { hero2Image.src = "Images/knt1_fr2.png" }
            frontImgswap();
            var timeoutID2;

            function frontImgswap() {
                timeoutID2 = window.setTimeout(frImg1, 100);


                function frImg1() {
                    if (hero2Image.src = "Images/knt1_fr2.png") { hero2Image.src = "Images/knt1_fr1.png" }
                }
            }
          
            
        }
        if (!(40 in keysDown)) {
            window.clearTimeout(timeoutID2)
        }


        if (37 in keysDown) { // Player holding left
            oldx = hero2.x;
            oldy = hero2.y;
            hero2.x -= hero2.speed * modifier;
            if (hero2Image.src = "Images/knt1_lf2.png") { hero2Image.src = "Images/knt1_lf1.png" }
            leftImgswap();
            var timeoutID3;

            function leftImgswap() {
                timeoutID3 = window.setTimeout(lfImg1, 100);


                function lfImg1() {
                    if (hero2Image.src = "Images/knt1_lf1.png") { hero2Image.src = "Images/knt1_lf2.png" }
                }
            }
        }
        if (!(37 in keysDown)) {
            window.clearTimeout(timeoutID3)
        }
        if (39 in keysDown) { // Player holding right
            hero2.x += hero2.speed * modifier;
            if (hero2Image.src = "Images/knt1_rt2.png") { hero2Image.src = "Images/knt1_rt1.png" }
            rightImgswap();
            var timeoutID4;

            function rightImgswap() {
                timeoutID4 = window.setTimeout(rtImg1, 100);


                function rtImg1() {
                    if (hero2Image.src = "Images/knt1_rt1.png") { hero2Image.src = "Images/knt1_rt2.png" }
                }
            }

        }
        if (!(39 in keysDown)) {
            window.clearTimeout(timeoutID4)
        }
        //Exiting Manor//
        if (hero2.x >= 340 && hero2.x <= 400 && hero2.y >= 410) { hero.speed = 0; setTimeout(exitManor(), 100); ret = true; }
        if (ret) { return }
        //inside manor collisions- bottom left and right rooms
        if (hero2.x >= 330 && hero2.x <= 335 && hero2.y >= 285 && hero2.y <= 409) { hero2.x = 336; }
        if (hero2.x >= 385 && hero2.x <= 390 && hero2.y >= 285 && hero2.y <= 409) { hero2.x = 384; }
        if (hero2.x >= 390 && hero2.x <= canvas.width && hero2.y >= 275 && hero2.y <= 280) { hero2.y = 274; }
        if (hero2.x >= 0 && hero2.x <= 330 && hero2.y >= 275) { hero2.y = 274; }

        //inside manor collisions - left and right side rooms
        if (hero2.x >= 0 && hero2.x <= 230 && hero2.y <= 250) { hero2.y = 251; }
        if (hero2.x >= 570 && hero2.x <= canvas.width && hero2.y <= 250) { hero2.y = 251; }
        if (hero2.y >= 0 && hero2.y <= 250 && hero2.x >= 0 && hero2.x <= 230) { hero2.x = 231 }
        if (hero2.y >= 0 && hero2.y <= 250 && hero2.x >= 560 && hero2.x <= canvas.width) { hero2.x = 559 }


        //inside manor collisions- chairs + firepace
        if (hero2.y >= 60 && hero2.y <= 65 && hero2.x >= 305 && hero2.x <= 425) { hero2.y = 66 }
        if (hero2.y >= 0 && hero2.y <= 65 && hero2.x >= 304 && hero2.x <= 310) { hero2.x = 303 }
        if (hero2.y >= 0 && hero2.y <= 65 && hero2.x >= 420 && hero2.x <= 425) { hero2.x = 426 }

        //edge stops
        if (hero2.x >= canvas.width - 35) { hero2.x = canvas.width - 35; }
        if (hero2.x <= 5) { hero2.x = 5; }
        if (hero2.y >= canvas.height - (hero2Image.height + 10)) { hero2.y = canvas.height - (hero2Image.height + 10); }
        else if (hero2.y <= 10) { hero2.y = 10; }
        if (hero2.y >= canvas.height - (hero2Image.height + 100) && hero2.x >= 260 && hero2.x <= 350) { hero2.x = oldx; }

        //Lord1 interaction
        if (hero2.x >= 360 && hero2.x <= 375 && hero2.y >= 90 && hero2.y <= 100) { hero2.y = 100; interact1 = true; };
        if (interact1 && hero2.y >= 120) { interact1 = false; };
        if (interact1 && hero2.x <= 350) { interact1 = false; };
        if (interact1 && hero2.x >= 380) { interact1 = false; };

       
    }

    
 


        // Stop movement code:

        if (hero2.x >= canvas.width - 25) { hero2.x = canvas.width - 25; }
        if (hero2.x <= 5) { hero2.x = 5; }
        if (hero2.y >= canvas.height - (hero2Image.height + 10)) { hero2.y = canvas.height - (hero2Image.height + 10); }
        else if (hero2.y <= 10) { hero2.y = 10; }
        if (hero2.y >= canvas.height - (hero2Image.height + 100) && hero2.x >= 260 && hero2.x <= 350) { hero2.x = oldx; }
        
    
    
        
       

    //////////////////////////////////////////////////////////////////
    var render2 = function () {
        //exit the function
        if (ret) { return; }
        ////draw Background ////
        if (bg2Ready) {
            ctx2.drawImage(bg2Image, 0, 0, [750], [450]);
        };

       

        // Draw Lord
        if (lord1Ready) {
            ctx2.drawImage(lord1Image, 365, 75)
        };
        //draw Hero///
        if (hero2Ready) {
            ctx2.drawImage(hero2Image, hero2.x, hero2.y)
        };

        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica ";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("GuiTown" + " X=" + parseInt(hero2.x, 10) + " " + " " + "Y=" + parseInt(hero2.y, 10), 15, 8);

        //Lord talking
        if (interact1) {
            function lordSpeak() {
                ctx.drawImage(scrollImage, 410, 20, [350],[275] );
                ctx.fillStyle = "rgb(250, 250, 250)";
                ctx.font = "18px Helvetica ";
                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                ctx.fillText("Hello GuiLord,", 440, 50);
                ctx.fillText("I have been waiting for you. It seems", 440, 90);
                ctx.fillText(" I need your help.", 440, 110);
                ctx.fillText("My son went out to the woods to get ", 440, 130);
                ctx.fillText("some apples and has not come back. ", 440, 150);
                ctx.fillText("He has vital information to discuss. ", 440, 170);
                ctx.fillText("Go to the West and find him.", 440, 190);
                ctx.fillText("I will reward you if you do. ", 440, 230);
                
            };
            lordSpeak();
        };
        
    }
  
    var main2 = function () {
        //exit the function
        if (ret) { return; }
        var now = Date.now();
        var delta = now - then;
         function lvl2 () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
         };
         lvl2();
         update2(delta / 1000);
         if (ret) { return }
            render2();



        then = now;
        i++;
        // Request to do this again ASAP
        requestAnimationFrame(main2);
    };

    // Cross-browser support for requestAnimationFrame
    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

    // Let's play this game!
    var then = Date.now();
    main2();

    
    //Exit Manor
    function exitManor() {
        
        level1();
      

         function level1 () {
             ctx.clearRect(0, 0, canvas.width, canvas.height);
           
             canvas.width = 800;
             canvas.height = 725;
             hero.speed = 128;
             
             render();
             
        };
        
         main();
        
    };
    if (ret) { return; alert(ret + "  triggered")}
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////          West Woods             //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function westWoods() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = 800;
    canvas.height = 700;
    var interact2 = false;
    var interactRock = false;
    var rocksThere = true;
    var ret = false;
    var timer;
    var i = 0;
    var hero3 = {
        speed: 128 // movement in pixels per second
    };
    hero3.speed = 128;
    hero3.x = parseInt (canvas.width -= 40);
    hero3.y = canvas.height / 2;



    // Woods Background image

    var bg3Ready = false;
    var bg3Image = new Image();
    bg3Image.onload = function () {
        bg3Ready = true;
    };
    bg3Image.src = "images/768X720background.png";

    //hero3
    var hero3Ready = false;
    var hero3Image = new Image();
    hero3Image.onload = function () {
        hero3Ready = true;
    };
    hero3Image.src = "images/knt1_lf1.png";

    //TextBackground
    var scrollReady = false;
    var scrollImage = new Image();
    scrollImage.onload = function () {
        scrollReady = true;
    }
    scrollImage.src = "images/old_scroll.jpg";
    /////

    //Rock Image
    var rock1Ready = false;
    var rock1Image = new Image();
    rock1Image.onload = function () {
        rock1Ready = true;
    }
    rock1Image.src = "images/rock.png";

    addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
    }, false);

    addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
    }, false);
    
    
    
    






   
   var update3 = function (modifier) {
       //exit the function
       if (ret) { return;}
       if (38 in keysDown) { // Player holding up
           hero3.y -= hero3.speed * modifier;
           if (hero3Image.src = "Images/knt1_bk1.png") { hero3Image.src = "Images/knt1_bk2.png" }
           else { hero3Image.src = "Images/knt1_bk1.png" }
           backImgswap();
           var timeoutID;

           function backImgswap() {
               timeoutID = window.setTimeout(backImg1, 100);
               //timeoutID2 = window.setTimeout(backImg2,1000); }

               function backImg1() {
                   if (hero3Image.src = "Images/knt1_bk2.png") { hero3Image.src = "Images/knt1_bk1.png" }
               }
           }

       }
       if (!(38 in keysDown)) {
           window.clearTimeout(timeoutID)
       }

       if (40 in keysDown) { // Player holding down
           hero3.y += hero3.speed * modifier;
           if (hero3Image.src = "Images/knt1_fr1.png") { hero3Image.src = "Images/knt1_fr2.png" }
           frontImgswap();
           var timeoutID2;

           function frontImgswap() {
               timeoutID2 = window.setTimeout(frImg1, 100);

               function frImg1() {
                   if (hero3Image.src = "Images/knt1_fr2.png") { hero3Image.src = "Images/knt1_fr1.png" }
               }
           }
           if (hero3.x >= 340 && hero3.x <= 360 && hero3.y >= 655 && hero3.y <= 680) { hero3.speed = 0; setTimeout(SouthFarm(), 100); ret = true; }
           if (ret) { return }

       }
       if (!(40 in keysDown)) {
           window.clearTimeout(timeoutID2)
       }

       if (37 in keysDown) { // Player holding left
           oldx = hero3.x;
           oldy = hero3.y;
           hero3.x -= hero3.speed * modifier;
           if (hero3Image.src = "Images/knt1_lf2.png") { hero3Image.src = "Images/knt1_lf1.png" }
           leftImgswap();
           var timeoutID3;

           function leftImgswap() {
               timeoutID3 = window.setTimeout(lfImg1, 100);


               function lfImg1() {
                   if (hero3Image.src = "Images/knt1_lf1.png") { hero3Image.src = "Images/knt1_lf2.png" }
               }
           }
           if (hero3.x >= 0 && hero3.x <= 5 && hero3.y >= 410 && hero3.y <= 440) { hero3.speed = 0; setTimeout(westCoast1(), 100); ret = true; }
           if (ret) { return }
       }
       if (!(37 in keysDown)) {
           window.clearTimeout(timeoutID3)
       }
       if (39 in keysDown) { // Player holding right
           hero3.x += hero3.speed * modifier;
           if (hero3Image.src = "Images/knt1_rt2.png") { hero3Image.src = "Images/knt1_rt1.png" }
           rightImgswap();
           var timeoutID4;

           function rightImgswap() {
               timeoutID4 = window.setTimeout(rtImg1, 100);


               function rtImg1() {
                   if (hero3Image.src = "Images/knt1_rt1.png") { hero3Image.src = "Images/knt1_rt2.png" }
               }
           }
           if (hero3.x >= 720 && hero3.x <= 735 && hero3.y >= 340 && hero3.y <= 385) { hero3.speed = 0; setTimeout(westIntoTown(), 100); ret = true;}
           if (ret) { return }
       }
       if (!(39 in keysDown)) {
           window.clearTimeout(timeoutID4)
       }
       

          //edge stops
       if (hero3.x >= canvas.width - 35) { hero3.x = canvas.width - 35; }
       if (hero3.x <= 5) { hero3.x = 5; }
       if (hero3.y >= canvas.height - (hero3Image.height + 10)) { hero3.y = canvas.height - (hero3Image.height + 10); }
       else if (hero3.y <= 10) { hero3.y = 10; }
       if (hero3.y >= canvas.height - (hero3Image.height + 100) && hero3.x >= 260 && hero3.x <= 350) { hero3.x = oldx; }
       // east road stop
       if (hero3.y >= 385 && hero3.y <= 390 && hero3.x >= 400 && hero3.x <= canvas.width) { hero3.y = 385; }
       if (hero3.y >= 340 && hero3.y <= 345 && hero3.x >= 360 && hero3.x <= canvas.width) { hero3.y = 346; }
       //west road stop
       if (hero3.y >= 360 && hero3.y <= 375 && hero3.x >= 300 && hero3.x <= 315) { hero3.y = 375; }
       if (hero3.y >= 400 && hero3.y <= 410 && hero3.x >= 5 && hero3.x <= 175) { hero3.y = 410; }
       if (hero3.y >= 390 && hero3.y <= 400 && hero3.x >= 175 && hero3.x <= 260) { hero3.y = 400; }
       if (hero3.y >= 365 && hero3.y <= 374 && hero3.x >= 261 && hero3.x <= 299) { hero3.y = 375; }
       if (hero3.y >= 375 && hero3.y <= 400 && hero3.x >= 260 && hero3.x <= 270) { hero3.x = 271; }
       if (hero3.y >= 439 && hero3.y <= 450 && hero3.x >= 5 && hero3.x <= 250) { hero3.y = 438; }
       if (hero3.y >= 425 && hero3.y <= 435 && hero3.x >= 251 && hero3.x <= 325) { hero3.y = 424; }
       if (hero3.y >= 425 && hero3.y <= 450 && hero3.x >= 240 && hero3.x <= 250) { hero3.x = 239; }

       //South road - west
       if (hero3.y >= 430 && hero3.y <= canvas.height && hero3.x >= 325 && hero3.x <= 330) { hero3.x = 331; }

       //South road - east
       if (hero3.y >= 400 && hero3.y <= 535 && hero3.x >= 394 && hero3.x <= 400) { hero3.x = 393; }
       if (hero3.y >= 524 && hero3.y <= 541 && hero3.x >= 390 && hero3.x <= 510) { hero3.y = 542; }
       if (hero3.y >= 542 && hero3.y <= 569 && hero3.x >= 510 && hero3.x <= 520) { hero3.x = 509; }
       if (hero3.y >= 542 && hero3.y <= 569 && hero3.x >= 510 && hero3.x <= 520) { hero3.x = 509; }
       if (hero3.y >= 565 && hero3.y <= 569 && hero3.x >= 510 && hero3.x <= 570) { hero3.y = 570; }
       if (hero3.y >= 571 && hero3.y <= 585 && hero3.x >= 360 && hero3.x <= 460) { hero3.y = 570; }
       if (hero3.y >= 600 && hero3.y <= 615 && hero3.x >= 461 && hero3.x <= 615) { hero3.y = 599; }
       if (hero3.y >= 570 && hero3.y <= 615 && hero3.x >= 605 && hero3.x <= 625) { hero3.x = 604; }
       //Cabin door
       if (hero3.y >= 565 && hero3.y <= 572 && hero3.x >= 570 && hero3.x <= 604) { hero3.y = 573; interact2 = true; }
       if (interact2 && hero3.x <= 575) { interact2 = false; };
       if (interact2 && hero3.y >= 580) { interact2 = false; };

       //north side

       //north Rocks
       if (hero3.y >= 50 && hero3.y <= 60 && hero3.x >= 380 && hero3.x <= 470) { hero3.y = 61; interactRock = true; };
       if (interactRock && hero3.y >= 80) { interactRock = false; };

   }
   var renderWest = function () {
       if (ret) { return; };
    if (bg3Ready) {
    ctx.drawImage(bg3Image, 0, 0, [800], [700])}
    if (mountainReady) {
        ctx.drawImage(mountainImage, 0, 0, [400], [60])
        ctx.drawImage(mountainImage, 450, 0, [315], [60]) 
    }
    
    if (rock1Ready &&rocksThere) {
        ctx.drawImage(rock1Image, 380, 30);
        ctx.drawImage(rock1Image, 410, 30);
        ctx.drawImage(rock1Image, 440, 30);

    }
    if (hero3Ready) {
        ctx.drawImage(hero3Image, hero3.x, hero3.y)
    };

///// X Y text  ////
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica ";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("GuiTown" + " X=" + parseInt(hero3.x, 10) + " " + " " + "Y=" + parseInt(hero3.y, 10), 15, 8);

    if (interact2) {
        function doorLocked() {
            ctx.drawImage(scrollImage, 470, 20, [250], [100]);
            ctx.fillStyle = "rgb(250, 250, 250)";
            ctx.font = "18px Helvetica ";
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            ctx.fillText("The door is locked. Perhaps", 485, 50);
            ctx.fillText("someone will be home later", 485, 70);
            

        };
        doorLocked();
    };
    if (interactRock) {
        function rockBlock() {
            ctx.drawImage(scrollImage, 470, 20, [250], [100]);
            ctx.fillStyle = "rgb(250, 250, 250)";
            ctx.font = "18px Helvetica ";
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            ctx.fillText("The pass is blocked!!!", 485, 45);
            ctx.fillText("Maybe you will find a way", 485, 65);
            ctx.fillText("to clear it in your quest.", 485, 85);


        };
        rockBlock();
    };

};
   var main3 = function () {
    //exit the function
       if (ret) { return;}
    var now = Date.now();
    var delta = now - then;
    function lvl3() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    lvl3();
    //update3(delta / 1000);
    update3(delta / 1000);
    renderWest();



    then = now;
    i++;
    // Request to do this again ASAP
    requestAnimationFrame(main3);
};

    // Cross-browser support for requestAnimationFrame
    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

    // Let's play this game!
    var then = Date.now();
    main3();

    function westIntoTown() {

        level1();
        function level1() {
            canvas = document.getElementById('canvas');
            ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            canvas.width = 800;
            canvas.height = 725;
            hero.speed = 128;
            ret = false;
            west = false;
            render();
            
        };

        main();
      
    };

};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////       West Coast 1           /////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function westCoast1() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = 800;
    canvas.height = 700;
    var timer;
    var i = 0;
    var hero4 = {
        speed: 128 // movement in pixels per second
    };
    hero4.speed = 128;
    hero4.x = parseInt(canvas.width -= 40);
    hero4.y = canvas.height / 2;
    var exitWestCoast1 = false;
    var appleTreeClose = false;


    // Woods Background image

    var bg4Ready = false;
    var bg4Image = new Image();
    bg4Image.onload = function () {
        bg4Ready = true;
    };
    bg4Image.src = "images/WestCoast.png";

    //hero4
    var hero4Ready = false;
    var hero4Image = new Image();
    hero4Image.onload = function () {
        hero4Ready = true;
    };
    hero4Image.src = "images/knt1_lf1.png";
    hero4.x = 700;
    hero4.y = 375;

    //TextBackground
    var scrollReady = false;
    var scrollImage = new Image();
    scrollImage.onload = function () {
        scrollReady = true;
    }
    scrollImage.src = "images/old_scroll.jpg";

    addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
    }, false);

    addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
    }, false);

    var update4 = function (modifier) {
        
        if (exitWestCoast1) { return };
        if (38 in keysDown) { // Player holding up
            hero4.y -= hero4.speed * modifier;
            if (hero4Image.src = "Images/knt1_bk1.png") { hero4Image.src = "Images/knt1_bk2.png" }
            else { hero4Image.src = "Images/knt1_bk1.png" }
            backImgswap();
            var timeoutID;

            function backImgswap() {
                timeoutID = window.setTimeout(backImg1, 100);
                //timeoutID2 = window.setTimeout(backImg2,1000); }

                function backImg1() {
                    if (hero4Image.src = "Images/knt1_bk2.png") { hero4Image.src = "Images/knt1_bk1.png" }
                }
            }

        }
        if (!(38 in keysDown)) {
            window.clearTimeout(timeoutID)
        }

        if (40 in keysDown) { // Player holding down
            hero4.y += hero4.speed * modifier;
            if (hero4Image.src = "Images/knt1_fr1.png") { hero4Image.src = "Images/knt1_fr2.png" }
            frontImgswap();
            var timeoutID2;

            function frontImgswap() {
                timeoutID2 = window.setTimeout(frImg1, 100);

                function frImg1() {
                    if (hero4Image.src = "Images/knt1_fr2.png") { hero4Image.src = "Images/knt1_fr1.png" }
                }
            }

        }
        if (!(40 in keysDown)) {
            window.clearTimeout(timeoutID2)
        }

        if (37 in keysDown) { // Player holding left
            
            hero4.x -= hero4.speed * modifier;
            if (hero4Image.src = "Images/knt1_lf2.png") { hero4Image.src = "Images/knt1_lf1.png" }
            leftImgswap();
            var timeoutID3;

            function leftImgswap() {
                timeoutID3 = window.setTimeout(lfImg1, 100);


                function lfImg1() {
                    if (hero4Image.src = "Images/knt1_lf1.png") { hero4Image.src = "Images/knt1_lf2.png" }
                }
            }
        }
        if (!(37 in keysDown)) {
            window.clearTimeout(timeoutID3)
        }
        if (39 in keysDown) { // Player holding right
            hero4.x += hero4.speed * modifier;
            if (hero4Image.src = "Images/knt1_rt2.png") { hero4Image.src = "Images/knt1_rt1.png" }
            rightImgswap();
            var timeoutID4;

            function rightImgswap() {
                timeoutID4 = window.setTimeout(rtImg1, 100);


                function rtImg1() {
                    if (hero4Image.src = "Images/knt1_rt1.png") { hero4Image.src = "Images/knt1_rt2.png" }
                }
            }
        }
        if (!(39 in keysDown)) {
            window.clearTimeout(timeoutID4)
        }


        //edge stops
        if (hero4.x >= canvas.width - 35) { hero4.x = canvas.width - 35; }
        if (hero4.x <= 5) { hero4.x = 5; }
        if (hero4.y >= canvas.height - (hero4Image.height + 10)) { hero4.y = canvas.height - (hero4Image.height + 10); }
        else if (hero4.y <= 10) { hero4.y = 10; }
        if (hero4.y >= canvas.height - (hero4Image.height + 100) && hero4.x >= 260 && hero4.x <= 350) { hero4.x = oldx; }
       

        //// Coast stop   ////////
        if (hero4.x >= 335 && hero4.x <=341 && hero4.y >=230) { hero4.x = 342; }
        if (hero4.x >= 285 && hero4.x <= 290 && hero4.y >= 195 && hero4.y <= 230) { hero4.x = 290; }
        if (hero4.x >= 395 && hero4.x <= 405 && hero4.y >= 480) { hero4.x = 342; }

        //East Road Stop ///
        if (hero4.x >= 425 && hero4.x <= canvas.width && hero4.y >= 370 && hero4.y <= 375) { hero4.y = 376 }
        if (hero4.x >= 425 && hero4.x <= canvas.width && hero4.y >= 410 && hero4.y <= 415) { hero4.y = 409 }

        //DirtPath Stop///
        if (hero4.x >= 450 && hero4.x <= 650 && hero4.y >= 215 && hero4.y <= 220) { hero4.y = 221 }
        if (hero4.x >= 450 && hero4.x <= 660 && hero4.y >= 246 && hero4.y <= 255) { hero4.y = 245 }
        if (hero4.x >= 685 && hero4.x <= 695 && hero4.y >= 50 && hero4.y <= 250) { hero4.x = 684 }
        if (hero4.x >= 640 && hero4.x <= 649 && hero4.y >= 50 && hero4.y <= 220) { hero4.x = 650 }

        /////////   West Road    //////////
     
        if (hero4.x >= 0 && hero4.x <= 425 && hero4.y >= 75 && hero4.y <= 155) { hero4.y = 156 }
        if (hero4.x >= 0 && hero4.x <= 334 && hero4.y >= 191 && hero4.y <= 200) { hero4.y = 190 }

        // Cave entrance transition//
        if (hero4.x >= 650 && hero4.x <= 683 && hero4.y >= 50 && hero4.y <= 68) { hero4.speed = 0; Cave1(); exitWestCoast1 = true;}



    }

    var renderWestCoast1 = function () {
        if (bg4Ready) {
            ctx.drawImage(bg4Image, 0, 0, [800], [700])
        }
        

        
        if (hero4Ready) {
            ctx.drawImage(hero4Image, hero4.x, hero4.y)
        };

        ///// X Y text  ////
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica ";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("GuiTown" + " X=" + parseInt(hero4.x, 10) + " " + " " + "Y=" + parseInt(hero4.y, 10), 15, 8);

        if (appleTreeClose) {
            function appleText() {
                ctx.drawImage(scrollImage, 470, 20, [250], [125]);
                ctx.fillStyle = "rgb(250, 250, 250)";
                ctx.font = "18px Helvetica ";
                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                ctx.fillText("This must be where the Lord's sone gets the apples", 485, 45);
                ctx.fillText("I wonder where he is?", 485, 65);
                ctx.fillText("Perhaps he went into this cave", 485, 85);


            };
            appleText();
        };
        
       
        };
    var main4 = function () {
        //exit the function
        if (exitWestCoast1) { return;}
        var now = Date.now();
        var delta = now - then;
        function lvl4() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
        lvl4();
        //update4(delta / 1000);
        update4(delta / 1000);
        renderWestCoast1();



        then = now;
        i++;
        // Request to do this again ASAP
        requestAnimationFrame(main4);
    };

    // Cross-browser support for requestAnimationFrame
    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

    // Let's play this game!
    var then = Date.now();
    main4();

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////        Cave 1          /////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
function Cave1() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = 800;
    canvas.height = 700;
    var timer;
    var i = 0;
    var hero5 = {
        speed: 128 // movement in pixels per second
    };
    hero5.speed = 128;
    hero5.x = 675
    hero5.y = canvas.height -25;



    // Cave Background image

    var bg5Ready = false;
    var bg5Image = new Image();
    bg5Image.onload = function () {
        bg5Ready = true;
    };
    bg5Image.src = "images/Cave1BG.png";

    //hero5
    var hero5Ready = false;
    var hero5Image = new Image();
    hero5Image.onload = function () {
        hero5Ready = true;
    };
    hero5Image.src = "images/knt1_lf1.png";
    hero5.x = 675
    hero5.y = canvas.height - 25;

    //TextBackground
    var scrollReady = false;
    var scrollImage = new Image();
    scrollImage.onload = function () {
        scrollReady = true;
    }
    scrollImage.src = "images/old_scroll.jpg";

    addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
    }, false);

    addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
    }, false);

    var update5 = function (modifier) {


        if (38 in keysDown) { // Player holding up
            hero5.y -= hero5.speed * modifier;
            if (hero5Image.src = "Images/knt1_bk1.png") { hero5Image.src = "Images/knt1_bk2.png" }
            else { hero5Image.src = "Images/knt1_bk1.png" }
            backImgswap();
            var timeoutID;

            function backImgswap() {
                timeoutID = window.setTimeout(backImg1, 100);
                //timeoutID2 = window.setTimeout(backImg2,1000); }

                function backImg1() {
                    if (hero5Image.src = "Images/knt1_bk2.png") { hero5Image.src = "Images/knt1_bk1.png" }
                }
            }

        }
        if (!(38 in keysDown)) {
            window.clearTimeout(timeoutID)
        }

        if (40 in keysDown) { // Player holding down
            hero5.y += hero5.speed * modifier;
            if (hero5Image.src = "Images/knt1_fr1.png") { hero5Image.src = "Images/knt1_fr2.png" }
            frontImgswap();
            var timeoutID2;

            function frontImgswap() {
                timeoutID2 = window.setTimeout(frImg1, 100);

                function frImg1() {
                    if (hero5Image.src = "Images/knt1_fr2.png") { hero5Image.src = "Images/knt1_fr1.png" }
                }
            }

        }
        if (!(40 in keysDown)) {
            window.clearTimeout(timeoutID2)
        }

        if (37 in keysDown) { // Player holding left

            hero5.x -= hero5.speed * modifier;
            if (hero5Image.src = "Images/knt1_lf2.png") { hero5Image.src = "Images/knt1_lf1.png" }
            leftImgswap();
            var timeoutID3;

            function leftImgswap() {
                timeoutID3 = window.setTimeout(lfImg1, 100);


                function lfImg1() {
                    if (hero5Image.src = "Images/knt1_lf1.png") { hero5Image.src = "Images/knt1_lf2.png" }
                }
            }
        }
        if (!(37 in keysDown)) {
            window.clearTimeout(timeoutID3)
        }
        if (39 in keysDown) { // Player holding right
            hero5.x += hero5.speed * modifier;
            if (hero5Image.src = "Images/knt1_rt2.png") { hero5Image.src = "Images/knt1_rt1.png" }
            rightImgswap();
            var timeoutID4;

            function rightImgswap() {
                timeoutID4 = window.setTimeout(rtImg1, 100);


                function rtImg1() {
                    if (hero5Image.src = "Images/knt1_rt1.png") { hero5Image.src = "Images/knt1_rt2.png" }
                }
            }
        }
        if (!(39 in keysDown)) {
            window.clearTimeout(timeoutID4)
        }


        //edge stops
        if (hero5.x >= canvas.width - 35) { hero5.x = canvas.width - 35; }
        if (hero5.x <= 5) { hero5.x = 5; }
        if (hero5.y >= canvas.height - (hero5Image.height + 10)) { hero5.y = canvas.height - (hero5Image.height + 10); }
        else if (hero5.y <= 10) { hero5.y = 10; }
        if (hero5.y >= canvas.height - (hero5Image.height + 100) && hero5.x >= 260 && hero5.x <= 350) { hero5.x = oldx; }


        



    }

    var renderWestCave = function () {
        if (bg5Ready) {
            ctx.drawImage(bg5Image, 0, 0, [800], [700])
        }



        if (hero5Ready) {
            ctx.drawImage(hero5Image, hero5.x, hero5.y)
        };

        ///// X Y text  ////
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica ";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("GuiTown" + " X=" + parseInt(hero5.x, 10) + " " + " " + "Y=" + parseInt(hero5.y, 10), 15, 8);



    };

    var main5 = function () {
        //exit the function

        var now = Date.now();
        var delta = now - then;
        function lvl5() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
        lvl5();
        //update4(delta / 1000);
        update5(delta / 1000);
        renderWestCave();



        then = now;
        i++;
        // Request to do this again ASAP
        requestAnimationFrame(main5);
    };

    // Cross-browser support for requestAnimationFrame
    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

    // Let's play this game!
    var then = Date.now();
    main5();

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////        South Farm         /////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function SouthFarm() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = 800;
    canvas.height = 700;
    var timer;
    var i = 0;
    var hero6 = {
        speed: 128 // movement in pixels per second
    };
    hero6.speed = 128;
    hero6.x = 675
    hero6.y = canvas.height - 25;



    // Farm Background image

    var bg6Ready = false;
    var bg6Image = new Image();
    bg6Image.onload = function () {
        bg6Ready = true;
    };
    bg6Image.src = "images/southFarm.png";

    //hero6
    var hero6Ready = false;
    var hero6Image = new Image();
    hero6Image.onload = function () {
        hero6Ready = true;
    };
    hero6Image.src = "images/knt1_lf1.png";
    hero6.x = 350
    hero6.y =   hero6Image.height + 5;

    //TextBackground
    var scrollReady = false;
    var scrollImage = new Image();
    scrollImage.onload = function () {
        scrollReady = true;
    }
    scrollImage.src = "images/old_scroll.jpg";

    addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
    }, false);

    addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
    }, false);

    var update6 = function (modifier) {


        if (38 in keysDown) { // Player holding up
            hero6.y -= hero6.speed * modifier;
            if (hero6Image.src = "Images/knt1_bk1.png") { hero6Image.src = "Images/knt1_bk2.png" }
            else { hero6Image.src = "Images/knt1_bk1.png" }
            backImgswap();
            var timeoutID;

            function backImgswap() {
                timeoutID = window.setTimeout(backImg1, 100);
                //timeoutID2 = window.setTimeout(backImg2,1000); }

                function backImg1() {
                    if (hero6Image.src = "Images/knt1_bk2.png") { hero6Image.src = "Images/knt1_bk1.png" }
                }
            }

        }
        if (!(38 in keysDown)) {
            window.clearTimeout(timeoutID)
        }

        if (40 in keysDown) { // Player holding down
            hero6.y += hero6.speed * modifier;
            if (hero6Image.src = "Images/knt1_fr1.png") { hero6Image.src = "Images/knt1_fr2.png" }
            frontImgswap();
            var timeoutID2;

            function frontImgswap() {
                timeoutID2 = window.setTimeout(frImg1, 100);

                function frImg1() {
                    if (hero6Image.src = "Images/knt1_fr2.png") { hero6Image.src = "Images/knt1_fr1.png" }
                }
            }

        }
        if (!(40 in keysDown)) {
            window.clearTimeout(timeoutID2)
        }

        if (37 in keysDown) { // Player holding left

            hero6.x -= hero6.speed * modifier;
            if (hero6Image.src = "Images/knt1_lf2.png") { hero6Image.src = "Images/knt1_lf1.png" }
            leftImgswap();
            var timeoutID3;

            function leftImgswap() {
                timeoutID3 = window.setTimeout(lfImg1, 100);


                function lfImg1() {
                    if (hero6Image.src = "Images/knt1_lf1.png") { hero6Image.src = "Images/knt1_lf2.png" }
                }
            }
        }
        if (!(37 in keysDown)) {
            window.clearTimeout(timeoutID3)
        }
        if (39 in keysDown) { // Player holding right
            hero6.x += hero6.speed * modifier;
            if (hero6Image.src = "Images/knt1_rt2.png") { hero6Image.src = "Images/knt1_rt1.png" }
            rightImgswap();
            var timeoutID4;

            function rightImgswap() {
                timeoutID4 = window.setTimeout(rtImg1, 100);


                function rtImg1() {
                    if (hero6Image.src = "Images/knt1_rt1.png") { hero6Image.src = "Images/knt1_rt2.png" }
                }
            }
        }
        if (!(39 in keysDown)) {
            window.clearTimeout(timeoutID4)
        }


        //edge stops
        if (hero6.x >= canvas.width - 35) { hero6.x = canvas.width - 35; }
        if (hero6.x <= 5) { hero6.x = 5; }
        if (hero6.y >= canvas.height - (hero6Image.height + 10)) { hero6.y = canvas.height - (hero6Image.height + 10); }
        else if (hero6.y <= 10) { hero6.y = 10; }
        if (hero6.y >= canvas.height - (hero6Image.height + 100) && hero6.x >= 260 && hero6.x <= 350) { hero6.x = oldx; }






    }

    var renderSouthFarm = function () {
        if (bg6Ready) {
            ctx.drawImage(bg6Image, 0, 0, [800], [700])
        }



        if (hero6Ready) {
            ctx.drawImage(hero6Image, hero6.x, hero6.y)
        };

        ///// X Y text  ////
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica ";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("GuiTown" + " X=" + parseInt(hero6.x, 10) + " " + " " + "Y=" + parseInt(hero6.y, 10), 15, 8);



    };

    var main6 = function () {
        //exit the function

        var now = Date.now();
        var delta = now - then;
        function lvl6() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
        lvl6();

        update6(delta / 1000);
        renderSouthFarm();



        then = now;
        i++;
        // Request to do this again ASAP
        requestAnimationFrame(main6);
    };

    // Cross-browser support for requestAnimationFrame
    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

    // Let's play this game!
    var then = Date.now();
    main6();
};

function walkLeft() { };
function walkright() { };
function walkUp() { };
function walkDown() { };