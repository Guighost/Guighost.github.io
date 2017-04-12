 

var playerScore = 0;
var turns = 0;
var rowAdjust = 0;
var rowReplaceStart = 0;
var replaceCount = 0;
var matchCountEach = 0;
var countdownTimer;
var currentLevel = 1;
var paused = false;
var over10k = false;
var over25k = false;
var over50k = false;
var over100k = false;
var over150k = false;
var over200k = false;
var over300k = false;
var over400k = false;
var over500k = false;
var over750k = false;
var gemBack = 7;

//gem1Image
var gem1Ready = false;
var gem1Image = new Image();
gem1Image.onload = function () {
    gem1Ready = true;
}
gem1Image.src = "images/Gem1.png";
//gem2Image
var gem2Ready = false;
var gem2Image = new Image();
gem2Image.onload = function () {
    gem2Ready = true;
}
gem2Image.src = "images/Gem2.png";
//gem3Image
var gem3Ready = false;
var gem3Image = new Image();
gem3Image.onload = function () {
    gem3Ready = true;
}
gem3Image.src = "images/Gem3.png";

//bonus5Image
var bonus5Ready = false;
var bonus5Image = new Image();
bonus5Image.onload = function () {
    bonus5Ready = true;
}
bonus5Image.src = "images/under5Bonus.png";

function MainStart() {
    var currentLevel = 1;
    randomGems();
   
}
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//click variables//
var click1 = true;
var click2 = false;
var itemclicked1 = "";
var item1source2 = "";

//fill the whole board with random gems
function randomGems() {
    var tbl = document.getElementById('matchTbl');
    var GemImages = tbl.getElementsByTagName('img');
    if (currentLevel == 1) {
        for (var i = 0; i < GemImages.length; i++) {
            var floor = Math.floor(Math.random() * 6);
            floor = (floor += currentLevel);
            var g = Math.round(floor)
            var gemMod2 = currentLevel + 5;
            if (g > gemMod2) { g = 6 };
            if (g == 0) { g = 1 };
            var imgSrc = 'Images/gem' + g.toString() + '.png';
            GemImages[i].src = imgSrc;
            GemImages[i].parentNode.className = 'clsGemTD';
        }
    }
    if (currentLevel == 2) {
        for (var i = 0; i < GemImages.length; i++) {
            var floor = Math.floor(Math.random() * 7);
            
            var g = Math.round(floor)
            var gemMod2 = currentLevel + 5;
            if (g > gemMod2) { g = 6 };
            if (g == 2) { g = currentLevel + 5 };
            if (g <= 1) { g = currentLevel + 6 }
            var imgSrc = 'Images/gem' + g.toString() + '.png';
            GemImages[i].src = imgSrc;
            GemImages[i].parentNode.className = 'clsGemTD';
        }
    }
    if (currentLevel == 3) {
        for (var i = 0; i < GemImages.length; i++) {
            var floor = Math.floor(Math.random() * 8);
            
            var g = Math.round(floor)
            var gemMod2 = currentLevel + 5;
            if (g > gemMod2) { g = 8 };
            if (g == 3) { g = 5 }
            if (g == 2) { g = 6 }
            if (g <= 1) { g = 7 }
            var imgSrc = 'Images/gem' + g.toString() + '.png';
            GemImages[i].src = imgSrc;
            GemImages[i].parentNode.className = 'clsGemTD';
        }
    }
    if (currentLevel == 4) {
        for (var i = 0; i < GemImages.length; i++) {
            var floor = Math.floor(Math.random() * 9);
            
            var g = Math.round(floor)
            var gemMod2 = currentLevel + 5;
            if (g > gemMod2) { g = 9 };
            if (g == 4) { g = 5 }
            if (g == 3) { g = 6 }
            if (g == 2) { g = 7 }
            if (g <= 1) { g = 8 }
            //if (g == 0) { g = 1 };
            var imgSrc = 'Images/gem' + g.toString() + '.png';
            GemImages[i].src = imgSrc;
            GemImages[i].parentNode.className = 'clsGemTD';
        }
    }
    if (currentLevel == 5) {
        for (var i = 0; i < GemImages.length; i++) {
            var floor = Math.floor(Math.random() * 9);

            var g = Math.round(floor)
            var gemMod2 = currentLevel + 5;
            if (g > gemMod2) { g = 10};
            //if (g == 0) { g = 1 };
            if (g == 4) { g = 6 }
            if (g == 3) { g = 7 }
            if (g == 2) { g = 8 }
            if (g <= 1) { g = 9 }
            var imgSrc = 'Images/gem' + g.toString() + '.png';
            GemImages[i].src = imgSrc;
            GemImages[i].parentNode.className = 'clsGemTD';
        }
    }
    if (currentLevel >= 6) {
        for (var i = 0; i < GemImages.length; i++) {
            var floor = Math.floor(Math.random() * 9);

            var g = Math.round(floor)
            var gemMod2 = currentLevel + 5;
            if (g > gemMod2) { g = 11 };
            //if (g == 0) { g = 1 };
            if (g == 5) { g = 6 }
            if (g == 4) { g = 7 }
            if (g == 3) { g = 8 }
            if (g == 2) { g = 9 }
            if (g <= 1) { g = 10 }
            var imgSrc = 'Images/gem' + g.toString() + '.png';
            GemImages[i].src = imgSrc;
            GemImages[i].parentNode.className = 'clsGemTD';
        }
    }
    if (currentLevel >= 7) {
        for (var i = 0; i < GemImages.length; i++) {
            var floor = Math.floor(Math.random() * 9);

            var g = Math.round(floor)
            var gemMod2 = currentLevel + 5;
            if (g > gemMod2) { g = 12 };
            //if (g == 0) { g = 1 };
            if (g == 6) { g = 7 }
            if (g == 5) { g = 8 }
            if (g == 4) { g = 9 }
            if (g == 3) { g = 10 }
            if (g == 2) { g = 11 }
            if (g <= 1) { g = 12 }
            var imgSrc = 'Images/gem' + g.toString() + '.png';
            GemImages[i].src = imgSrc;
            GemImages[i].parentNode.className = 'clsGemTD';
        }
    }
    if (currentLevel >= 9) {
        for (var i = 0; i < GemImages.length; i++) {
            var floor = Math.floor(Math.random() * 9);

            var g = Math.round(floor)
            var gemMod2 = currentLevel + 5;
            if (g > gemMod2) { g = 13 };
            //if (g == 0) { g = 1 };
            if (g == 7) { g = 8 }
            if (g == 6) { g = 9 }
            if (g == 5) { g = 10 }
            if (g == 4) { g = 11 }
            if (g == 3) { g = 12 }
            if (g == 2) { g = 13 }
            if (g <= 1) { g = 10 }
            var imgSrc = 'Images/gem' + g.toString() + '.png';
            GemImages[i].src = imgSrc;
            GemImages[i].parentNode.className = 'clsGemTD';
        }
    }
}
function randomGems2() {
    var tbl = document.getElementById('matchTbl');
    var GemImages = tbl.getElementsByTagName('img');
    for (var i = 0; i < GemImages.length; i++) {

        var floor = Math.floor(Math.random() * 8);
        var g = Math.round(floor)
        if (g > 7) { g = 7 }
        if (g == 0) { g = 1 };
        var imgSrc = 'Images/gem' + g.toString() + '.png';
        GemImages[i].src = imgSrc;
        GemImages[i].parentNode.className = 'clsGemTD';
    }
}

//handle clicks//
function ClickGem() {
    
    if (click1) {
        matchCountEach = 0;
        click1 = false;
        var target = event.target || event.srcElement;
        itemclicked1 = target.id;
        
        var item1source = target.src;
        item1source2 = item1source;
        document.getElementById(itemclicked1).className = "pulse";
        swapSound.pause();
        swapSound.load();
        blastSound.pause();
        blastSound.load();
        click2 = true;


    }
    else if (click2) {
        turns++;
        click1 = true;
        click2 = false;
        var target2 = event.target || event.srcElement;
        var itemclicked2 = target2.id;
       
        click2 = false;
        swapSound.play();
        item2source = target2.src;
        document.getElementById(itemclicked2).className = "";
        document.getElementById(itemclicked1).className = "";
        document.getElementById(itemclicked2).className = "fadeIn";
        document.getElementById(itemclicked1).className = "fadeIn";
            document.getElementById(itemclicked2).src = item1source2;
            document.getElementById(itemclicked1).src = item2source;
            horizMatch();
            window.setTimeout(vertMatch, 1000);
           
        }
    
    
}
//check for matching horizontal rows
function horizMatch() {
    var matchCount = 0;
    var theTbl = document.getElementById('matchTbl');
    var toMatch = document.getElementById("img1").src;
    var matchArray = matchTbl.rows;
    
    //set item to match for each row//
    for (z = 0; z <= 7; z++) {
        if (z === 0) {
            var elementExistsR1 = document.getElementById("img1");
            if (elementExists = null) { rowReplaceStart = 1; resetRow(); }
            else { toMatch = document.getElementById("img1").src; rowAdjust = 1; };
        }
        if (z === 1) { toMatch = document.getElementById("img9").src; rowAdjust = 9; }
        if (z === 2) { toMatch = document.getElementById("img17").src; rowAdjust = 17; }
        if (z === 3) { toMatch = document.getElementById("img25").src; rowAdjust = 25; }
        if (z === 4) { toMatch = document.getElementById("img33").src; rowAdjust = 33; }
        if (z === 5) { toMatch = document.getElementById("img41").src; rowAdjust = 41; }
        if (z === 6) { toMatch = document.getElementById("img49").src; rowAdjust = 49; }
        if (z === 7) { toMatch = document.getElementById("img57").src; rowAdjust = 57; }
    
    //do the compare///
            for (i = 0; i <= 7; i++) {
                var tdMatch = "img" + (i + rowAdjust)
                //alert(tdMatch);
                var matchCompare = document.getElementById(tdMatch).src;
                if (matchCompare === toMatch) { matchCount++; }
                else { matchCount = 0; }
            };
        ///matched entire row //
           
            if (matchCount >= 8) {
                playerScore = playerScore += 1000;
                document.getElementById("Score").innerHTML = "Score" + " " + playerScore;
               
                if (turns < 6) { showBonus(); window.setTimeout(hideBonus, 1500);; turns = 0; seconds = seconds + 10; };
                //if (turns < 3) { showBonus2(); setTimeout(hideBonus2, 1500); turns = 0; };
                for (m = 0; m <= 7; m++) {
                    blastSound.play();
                    var image_x = document.getElementById('img' + (m + rowAdjust));
                    image_x.parentNode.removeChild(image_x);
                    document.getElementById("td" + (m + rowAdjust)).className = "bomb clsGemTD";
                    rowReplaceStart = rowAdjust;                        
                };
                //window.setTimeout("resetRow()", 1600);
                
        };
    }
    levelUpCheck();
    //if (parseInt(playerScore, 10) >= 10000 && over10k == false) { UpTheLevel(); over10k = true; };
    //if (parseInt(playerScore, 10) >= 25000 && over25k == false) { UpTheLevel(); over25k = true; };
    //if (parseInt(playerScore, 10) >= 50000 && over50k == false) { UpTheLevel(); over50k = true; };
    //if (parseInt(playerScore, 10) >= 100000 && over100k == false) { UpTheLevel(); over100k = true; };
    //if (parseInt(playerScore, 10) >= 150000 && over150k == false) { UpTheLevel(); over150k = true; };
    //if (parseInt(playerScore, 10) >= 200000 && over200k == false) { UpTheLevel(); over200k = true; };
    //if (parseInt(playerScore, 10) >= 300000 && over300k == false) { UpTheLevel(); over300k = true; };
    //if (parseInt(playerScore, 10) >= 400000 && over400k == false) { UpTheLevel(); over400k = true; };
    //if (parseInt(playerScore, 10) >= 500000 && over500k == false) { UpTheLevel(); over500k = true; };
}
//refill the matched row//
function resetRow() {
    turns = 0;
    hideBonus();
    
   for (i = 0; i <= 7; i++) {
       if (rowReplaceStart < 1) { rowReplaceStart = 1; };
      
       var h = (i + rowReplaceStart);
       h = h.toString();
        var baseImage = "<img id ='img" + h + "' src='Images/AquamarineGem05.png'onclick ='ClickGem();'/>";
        //alert(baseImage);

        
        var tdNode = document.getElementById("td" + (i + rowReplaceStart));
       
        tdNode.innerHTML = baseImage;
        tdNode.className = "clsGemTD slideRight";
        var levelMod1 = 6 + currentLevel;
        levelMod1 = parseInt(levelMod1, 10);
        var floor = Math.floor(Math.random() * levelMod1);
        
        floor = (floor += currentLevel);
        var g = Math.round(floor);
        var gemMod2 = currentLevel + 5;
        if (g > gemMod2) { g = 1 };
        if (g == 0) { g = 5 };

        var imgSrc = 'Images/gem' + g.toString() + '.png';
        var yy = i + rowReplaceStart;
        var currentImageId = "img" + yy.toString();
       
        document.getElementById(currentImageId).src = imgSrc;
        levelUpCheck();
        //if (parseInt(playerScore, 10) >= 10000 && over10k == false) { UpTheLevel(); over10k = true; };
        //if (parseInt(playerScore, 10) >= 25000 && over25k == false) { UpTheLevel(); over25k = true; };
        //if (parseInt(playerScore, 10) >= 50000 && over50k == false) { UpTheLevel(); over50k = true; };
        //if (parseInt(playerScore, 10) >= 100000 && over100k == false) { UpTheLevel(); over100k = true; };
        //if (parseInt(playerScore, 10) >= 150000 && over150k == false) { UpTheLevel(); over150k = true; };
        //if (parseInt(playerScore, 10) >= 200000 && over200k == false) { UpTheLevel(); over200k = true; };
        //if (parseInt(playerScore, 10) >= 300000 && over300k == false) { UpTheLevel(); over300k = true; };
        //if (parseInt(playerScore, 10) >= 400000 && over400k == false) { UpTheLevel(); over400k = true; };
        //if (parseInt(playerScore, 10) >= 500000 && over500k == false) { UpTheLevel(); over500k = true; };
        handleLeftovers();
    };
  
}
///check for more than one row///
function resetMore() {
    replaceCount++
  
    var moreRows = rowReplaceStart + 8;
    if (moreRows < 1) { moreRows = 1; }
    if (moreRows > 59) { rowReplaceStart = 57; return; }
    if (replaceCount > 7) {
        rowReplaceStart = rowReplaceStart - 8;
        replaceCount = 0;
    };
    var moreRows2 = "td" + moreRows.toString();
    //alert("moreRows2:" + moreRows2);
    var moreRows3 = document.getElementById(moreRows2).className;
    //rowReplaceStart = moreRows - 8;

    if (moreRows3 == "bomb clsGemTD slideRight") {
        rowReplaceStart = moreRows;
        handleLeftovers();
        //resetRow();
    }
};

///Mute//
function muteSound() {
    var themesong = document.getElementById("gameSoundLoop");
    var btnMute = document.getElementById("mute");
    if (themesong.muted) { themesong.muted = false; document.getElementById("mute").innerhtml = "Mute"; btnMute.style.backgroundColor = 'antiquewhite'; }
    else { themesong.muted = true;  btnMute.innerhtml = "un-mute"; btnMute.style.backgroundColor = 'blue';}
}

/////INtro Div//////
var didClickIt = false;
document.getElementById("submitter").addEventListener("click", function () {
    // same as onclick, keeps the JS and HTML separate
    didClickIt = true;
});
document.getElementById('userInput').onkeypress = function (e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;

    if (charCode == '13') {
        didClickIt = true;
    }
}
setInterval(function () {
    // this is the closest you get to an infinite loop in JavaScript
    if (didClickIt) {
        didClickIt = false;

        var o = document.getElementById("playerName"), v = document.getElementById("userInput").value;
        document.getElementById("userInput").style.display = 'none';
        document.getElementById("submitter").style.display = 'none';
        document.getElementById("introDiv").style.display = 'none';
        document.getElementById("matchTbl").style.display = 'block';
        document.getElementById("Score").innerHTML = "Score" + " " + playerScore;
        countdownTimer = setInterval('secondPassed()', 1000);
        if (o.textContent !== undefined) {
            o.textContent = v;
        } else {
            o.innerText = v;
        }
    }
}, 500);


function newPlyr1() {
    document.getElementById("userInput").style.display = 'block';
    document.getElementById("submitter").style.display = 'block';
    document.getElementById("introDiv").style.display = 'block';
    document.getElementById("Score").innerHTML = "Score" + " "
    document.getElementById("matchTbl").style.display = 'none';
    randomGems();
    turns = 0;
}

///Bonus Divs//
function showBonus() {
    document.getElementById("bonusUnder5").style.display = 'block';
    playerScore = (playerScore + 500);
    turns = 0;
    document.getElementById("Score").innerHTML = "Score" + " " + playerScore;
};
function hideBonus() { document.getElementById("bonusUnder5").style.display = 'none'; };

function doubleBonus() {
    playerScore = (playerScore + 500);
    if (currentLevel == 1) { seconds = seconds + 10; playerScore = (playerScore + 500); };
    if (currentLevel == 2) { seconds = seconds + 13; playerScore = (playerScore + 600); };
    if (currentLevel == 3) { seconds = seconds + 15; playerScore = (playerScore + 700); };
    if (currentLevel == 4) { seconds = seconds + 17; playerScore = (playerScore + 800); };
    if (currentLevel == 5) { seconds = seconds + 20; playerScore = (playerScore + 900); };
    if (currentLevel == 6) { seconds = seconds + 20; playerScore = (playerScore + 1000); };
    if (currentLevel >= 7) { seconds = seconds + 20; playerScore = (playerScore + 1100); };
    if (currentLevel >= 8) { seconds = seconds + 20; playerScore = (playerScore + 1200); };

    document.getElementById("doubleBonus1").style.display = 'block';
};
function hidedoubleBonus() { document.getElementById("doubleBonus1").style.display = 'none'; };

function showBonus2() {
    document.getElementById("bonusUnder3").style.display = 'block';
    playerScore = (playerScore + 1500);
    document.getElementById("Score").innerHTML = "Score" + " " + playerScore;
};
function hideBonus2() {
    document.getElementById("bonusUnder3").style.display = 'none';
};

//handle second row scenarios//
function handleLeftovers() {
    var tbl = document.getElementById('matchTbl');
    var tableDatas = tbl.getElementsByTagName('td');
    var floor = Math.floor(Math.random() * 6);
   
    
    for (var t = 0; t <= tableDatas.length; t++) {
        var levelMod1 = 6 + currentLevel;
        levelMod1 = parseInt(levelMod1, 10);
        var floor = Math.floor(Math.random() * levelMod1);
        //floor = floor += currentLevel;
        
        var g = Math.round(floor)
        var gemMod2 = currentLevel + 5;
        if (currentLevel == 1) {
            if (g > gemMod2) { g = 6 };
            if (g == 0) { g = 2 };
        }
       
        if (currentLevel == 2) {
            if (g > gemMod2) { g = 6 };
            if (g == 2) { g = currentLevel + 5 };
            if (g <= 1) { g = currentLevel + 6 }
        };
        if (currentLevel == 3) {
            if (g > gemMod2) { g = 8 };
            if (g == 3) { g = 5 }
            if (g == 2) { g = 6 }
            if (g <= 1) { g = 7 }
        };
        if (currentLevel == 4) {
            if (g > gemMod2) { g = 9 };
            if (g == 4) { g = 5 }
            if (g == 3) { g = 6 }
            if (g == 2) { g = 7 }
            if (g <= 1) { g = 8 }
        };
        if (currentLevel == 5) {
            if (g > gemMod2) { g = 10 };
            //if (g == 0) { g = 1 };
            if (g == 4) { g = 6 }
            if (g == 3) { g = 7 }
            if (g == 2) { g = 8 }
            if (g <= 1) { g = 9 }
        };
        if (currentLevel == 6) {
            if (g > gemMod2) { g = 10 };
            if (g == 5) { g = 6 }
            if (g == 4) { g = 7 }
            if (g == 3) { g = 8 }
            if (g == 2) { g = 9 }
            if (g <= 1) { g = 10 }
        };
        if (currentLevel == 7) {
            if (g > gemMod2) { g = 11 };
            if (g == 6) { g = 7 }
            if (g == 5) { g = 8 }
            if (g == 4) { g = 9 }
            if (g == 3) { g = 10 }
            if (g == 2) { g = 11 }
            if (g <= 1) { g = 12 }
        };
        if (currentLevel == 8) {
            if (g > gemMod2) { g = 12 };
            if (g == 7) { g = 8 }
            if (g == 6) { g = 9 }
            if (g == 5) { g = 10 }
            if (g == 4) { g = 11}
            if (g == 3) { g = 12 }
            if (g == 2) { g = 13 }
            if (g <= 1) { g = 9 }
        };
        if (currentLevel == 9) {
            if (g > gemMod2) { g = 14 };
            if (g == 7) { g = 8 }
            if (g == 6) { g = 9 }
            if (g == 5) { g = 10 }
            if (g == 4) { g = 11 }
            if (g == 3) { g = 12 }
            if (g == 2) { g = 13 }
            if (g <= 1) { g = 9 }
        };
        var imgSrc2 = 'Images/gem' + g.toString() + '.png';
        
        var whatTD = t + 1;
        if (t >= 64) { return;}
        whatRow = "td" + whatTD.toString();
        
        if (document.getElementById(whatRow).children.length <= 0) {
            matchCountEach++;
            var imageToSet = '<img id = "img' + [whatTD] + '" ' + 'src ="' + imgSrc2 + '" ' +'onclick ="ClickGem();"/>';
           
            document.getElementById(whatRow).innerHTML = imageToSet;
            var tdNode2 = document.getElementById(whatRow);
                       
            tdNode2.className = "clsGemTD slideRight";
            if (document.getElementById(whatRow).style.height != '64px') { document.getElementById(whatRow).style.height = '64px'; };
            //if (document.getElementById('td1').children.length <= 0) { document.getElementById('td1').innerHTML = imageToSet;}
            
        }
        if (matchCountEach === 9) { doubleBonus(); window.setTimeout(hidedoubleBonus, 1500); matchCountEach = 0; turns = 0; seconds = (seconds + 10); playerScore = playerScore + 1500;}
        if (matchCountEach > 9) { handleLeftovers();}
    }

    
    
};

//timer///
var seconds = 120;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    var tick = 0

    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
        
    }
    document.getElementById('timerID').innerHTML = minutes + ":" + remainingSeconds;
    //flash the background//
    if (seconds > 15) { document.getElementById("timerID").style.backgroundColor = 'antiquewhite'; }
    if (seconds <= 14) { document.getElementById("timerID").style.backgroundColor = 'red'; }
    if (seconds < 13) { document.getElementById("timerID").style.backgroundColor = 'antiquewhite'; }
    if (seconds < 12) { document.getElementById("timerID").style.backgroundColor = 'red'; }
    if (seconds < 11) { document.getElementById("timerID").style.backgroundColor = 'antiquewhite'; }
    if (seconds < 10) { document.getElementById("timerID").style.backgroundColor = 'red'; }
    if (seconds < 9) { document.getElementById("timerID").style.backgroundColor = 'antiquewhite'; }
    if (seconds < 8) { document.getElementById("timerID").style.backgroundColor = 'red'; }
    if (seconds < 7) { document.getElementById("timerID").style.backgroundColor = 'antiquewhite'; }
    if (seconds < 6) { document.getElementById("timerID").style.backgroundColor = 'red'; }
    if (seconds < 5) { document.getElementById("timerID").style.backgroundColor = 'antiquewhite'; }
    if (seconds < 4) { document.getElementById("timerID").style.backgroundColor = 'red'; }

    //Time is up////
    if (seconds == 0) {
        
        document.getElementById("timeUp").style.display = 'block';
        document.getElementById("matchTbl").style.display = 'none';
        document.getElementById("Score").innerHTML = "Score" + " " + playerScore;
        document.getElementById("timeUpScore").innerHTML = "Final Score" + " " + playerScore;
    } else {
        seconds--;
    }
    
}
 //new game//
function newGame() {
    didClickIt = true;
    document.getElementById("timeUp").style.display = 'none';
    document.getElementById("matchTbl").style.display = 'block';
    
    
    document.getElementById("Score").innerHTML = "Score" + " " + playerScore;

    //switch High Scores
playerName = document.getElementById('playerName').innerHTML;
var high1Val = document.getElementById('best1Val').innerHTML;
var high2Val = document.getElementById('best2Val').innerHTML;
var high3Val = document.getElementById('best3Val').innerHTML;
var high4Val = document.getElementById('best4Val').innerHTML;
var high5Val = document.getElementById('best5Val').innerHTML;


if (parseInt(playerScore, 10) >= (parseInt(high1Val, 10) )) {
    var old1Name = document.getElementById('best1Name').innerHTML;

    document.getElementById('best1Name').innerHTML = playerName;
    document.getElementById('best1Val').innerHTML = Math.round(playerScore);
    document.getElementById('best2Name').innerHTML = old1Name;
    document.getElementById('best2Val').innerHTML = high1Val;
};
if (parseInt(playerScore, 10) > (parseInt(high1Val, 10) * 2) && (parseInt(playerScore, 10) <= (parseInt(high2Val, 10) * 2))) {
    var old2Name = document.getElementById('best2Name').innerHTML;
    document.getElementById('best2Name').innerHTML = playerName;
    document.getElementById('best2Val').innerHTML = Math.round(playerScore);
    document.getElementById('best3Name').innerHTML = old2Name;
    document.getElementById('best3Val').innerHTML = high2Val;
};
if (parseInt(playerScore, 10) > (parseInt(high2Val, 10) * 2) && (parseInt(playerScore, 10) <= (parseInt(high3Val, 10) * 2))) {
    var old3Name = document.getElementById('best3Name').innerHTML;
    document.getElementById('best3Name').innerHTML = playerName;
    document.getElementById('best3Val').innerHTML = Math.round(playerScore);
    document.getElementById('best4Name').innerHTML = old3Name;
    document.getElementById('best4Val').innerHTML = high3Val;
};
if (parseInt(playerScore, 10) > (parseInt(high3Val, 10) * 2) && (parseInt(playerScore, 10) <= (parseInt(high4Val, 10) * 2))) {
    var old4Name = document.getElementById('best4Name').innerHTML;
    document.getElementById('best4Name').innerHTML = playerName;
    document.getElementById('best4Val').innerHTML = Math.round(playerScore);
    document.getElementById('best5Name').innerHTML = old4Name;
    document.getElementById('best5Val').innerHTML = high4Val;
};
playerScore = 0;

seconds = 120;
turns = 0;
currentLevel = 1;
randomGems();
}

function vertMatch() {
    var emptyCheck = false;
    function checkTable(table) {
        var table = document.getElementById("matchTbl");
        var tr = table.getElementsByTagName("tr");
        var td;

        for (var i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");

            for (var j = 0; j < td.length; j++) {
                if (td[j].innerHTML == "") {
                   
                    emptyCheck = true;
                    
                    
                }
            }
        }
    }
    checkTable();
    if (emptyCheck) { handleLeftovers(); emptyCheck = false; return; }
    //var col1, col2, col3, col4, col5, col6, col7, col8;
    var colToMatch = "";
    var matchCount = 0;
    var theTbl = document.getElementById('matchTbl');
    var toMatch2 = document.getElementById("img1").src;
    7
    var virtMod = "1";
    var virtMod2 = 0;
    //start the search for matched virtical rows
    for (i = 0; i <= 7; i++) {
        if (i === 0) { toMatch2 = document.getElementById("img1").src;  }
        if (i === 1) { toMatch2 = document.getElementById("img2").src; }
        if (i === 2) { toMatch2 = document.getElementById("img3").src;  }
        if (i === 3) { toMatch2 = document.getElementById("img4").src;  }
        if (i === 4) { toMatch2 = document.getElementById("img5").src;  }
        if (i === 5) { toMatch2 = document.getElementById("img6").src;  }
        if (i === 6) { toMatch2 = document.getElementById("img7").src;  }
        if (i === 7) { toMatch2 = document.getElementById("img8").src;  }
        //alert ("first FOR - toMatch2 ="+ toMatch2);

        for (o = 1; o <= 8; o++) {
            //alert("2nd FOR start")
            var safetyCheck = "td" + virtMod;
            if (document.getElementById(safetyCheck).children.length <= 0) { handleLeftovers(); return; }
            if (document.getElementById('td1').children.length <= 0) { window.setTimeout(handleLeftovers, 1500); break; return; }
            var rowV1 = "img" + o.toString();
            var rowV1Src = document.getElementById(rowV1).src;
            if (document.getElementById('td2').children.length <= 0) { window.setTimeout(handleLeftovers, 1500); break; return; }
            var rowV2 = 'img' + (o + 8).toString();
            var rowV2Src = document.getElementById(rowV2).src;
            if (document.getElementById('td3').children.length <= 0) { window.setTimeout(handleLeftovers, 1500); break; return; }
            var rowV3 = 'img' + (o + 16).toString();
            var rowV3Src = document.getElementById(rowV3).src;
            if (document.getElementById('td4').children.length <= 0) { window.setTimeout(handleLeftovers, 1500); break; return; }
            var rowV4 = 'img' + (o + 24).toString();
            var rowV4Src = document.getElementById(rowV4).src;
            if (document.getElementById('td5').children.length <= 0) { window.setTimeout(handleLeftovers, 1500); break; return; }
            var rowV5 = 'img' + (o + 32).toString();
            var rowV5Src = document.getElementById(rowV5).src;
            if (document.getElementById('td6').children.length <= 0) { window.setTimeout(handleLeftovers, 1500); break; return; }
            var rowV6 = 'img' + (o + 40).toString();
            var rowV6Src = document.getElementById(rowV6).src;
            if (document.getElementById('td7').children.length <= 0) { window.setTimeout(handleLeftovers, 1500); break; return; }
            var rowV7 = 'img' + (o + 48).toString();
            var rowV7Src = document.getElementById(rowV7).src;
            if (document.getElementById('td8').children.length <= 0) { window.setTimeout(handleLeftovers, 1500); break; return; }
            var rowV8 = 'img' + (o + 56).toString();
            var rowV8Src = document.getElementById(rowV8).src;
            //alert("2nd FOR =" + rowV1Src);
            // check the matched cols by variables //
            if (rowV1Src === toMatch2 && rowV2Src === toMatch2 && rowV3Src === toMatch2 && rowV4Src === toMatch2 &&
                rowV5Src === toMatch2 && rowV6Src === toMatch2 && rowV7Src === toMatch2 && rowV8Src === toMatch2) {
                if (turns < 6) { showBonus(); window.setTimeout(hideBonus, 1500); turns = 0; seconds = seconds + 10; playerScore = playerScore += 500;};
                playerScore = playerScore += 1000;
                document.getElementById("Score").innerHTML = "Score" + " " + playerScore;
                
                virtMod = rowV1.substr(3);
                var virtMod2 = parseInt(virtMod, 10);
                for (m = 0; m <= 7; m++) {
                    
                    //alert("3rd FOR virtMod =" + virtMod2)
                    blastSound.play();
                    
                    //alert("3rd FOR virtMod =" + virtMod)
                    var image_x = document.getElementById('img' + virtMod2.toString());
                    image_x.parentNode.removeChild(image_x);
                    document.getElementById("td" + virtMod2).className = "bomb clsGemTD";
                   
                    virtMod2 = parseInt((virtMod2 + 8), 10);
                }
                window.setTimeout(handleLeftovers, 1500);
                
            }
            
        }
        checkTable();
        if (emptyCheck) {
            vertMatch();
            playerScore = playerScore + 1500; seconds = (seconds + 10);
            doubleBonus();
            window.setTimeout(hidedoubleBonus, 1500);
            emptyCheck = false;
        }
    }
    levelUpCheck();
}

// Level Up//
function UpTheLevel() {
    paused = true;
    gameSoundLoop.pause();
    document.getElementById("Score").innerHTML = "Score" + " " + playerScore;
    document.getElementById("matchTbl").style.display = 'none';
    document.getElementById("levelUp").style.display = 'block';
    seconds = seconds + 20;
    //play level up sound
    window.setTimeout(levelUpSound.load, 500);
    levelUpSound.load();
    // reset the timer

  
    
};
function NextStage() {
    paused = false;
    document.getElementById("matchTbl").style.display = 'block';
    document.getElementById("levelUp").style.display = 'none';
    //reset the board
    currentLevel++;
    document.getElementById("levelH").innerHTML = "Level" + " " + currentLevel;
    randomGems();
    seconds = 180;
    turns = 0;
    gameSoundLoop.load();
    
}

function levelUpCheck() {
    if (parseInt(playerScore, 10) >= 10000 && over10k == false) { UpTheLevel(); over10k = true; };
    if (parseInt(playerScore, 10) >= 25000 && over25k == false) { UpTheLevel(); over25k = true; };
    if (parseInt(playerScore, 10) >= 50000 && over50k == false) { UpTheLevel(); over50k = true; };
    if (parseInt(playerScore, 10) >= 100000 && over100k == false) { UpTheLevel(); over100k = true; };
    if (parseInt(playerScore, 10) >= 150000 && over150k == false) { UpTheLevel(); over150k = true; };
    if (parseInt(playerScore, 10) >= 200000 && over200k == false) { UpTheLevel(); over200k = true; };
    if (parseInt(playerScore, 10) >= 300000 && over300k == false) { UpTheLevel(); over300k = true; };
    if (parseInt(playerScore, 10) >= 400000 && over400k == false) { UpTheLevel(); over400k = true; };
    if (parseInt(playerScore, 10) >= 500000 && over500k == false) { UpTheLevel(); over500k = true; };
};
window.onload = MainStart();