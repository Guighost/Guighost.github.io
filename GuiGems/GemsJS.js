 
window.onload = MainStart();
var playerScore = 0;
var turns = 0;
var rowAdjust = 0;
var rowReplaceStart = 0;
var replaceCount = 0;
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
    randomGems();
   
}
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//click variables//
var click1 = true;
var click2 = false;
var itemclicked1 = "";
var item1source2 = "";

function randomGems() {
    var tbl = document.getElementById('matchTbl');
    var GemImages = tbl.getElementsByTagName('img');
    for (var i = 0; i < GemImages.length; i++) {
       
        var floor = Math.floor(Math.random() * 6);
        var g = Math.round(floor)
        if (g > 6) { g = 1 }
        if (g == 0) { g = 5 };
        var imgSrc = 'Images/gem' + g.toString() + '.png';
        GemImages[i].src = imgSrc;
    }
}


function ClickGem() {
    
    if (click1) {
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
        }
    
    
}

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
                document.getElementById("Score").innerHTML = "Current Score" + " " + playerScore;
               
                if (turns < 6) { showBonus(); turns = 0; };
                //if (turns < 3) { showBonus2(); setTimeout(hideBonus2, 1500); turns = 0; };
                for (m = 0; m <= 7; m++) {
                    blastSound.play();
                    var image_x = document.getElementById('img' + (m + rowAdjust));
                    image_x.parentNode.removeChild(image_x);
                    document.getElementById("td" + (m + rowAdjust)).className = "bomb clsGemTD";
                    rowReplaceStart = rowAdjust;                        
                };
             window.setTimeout("resetRow()", 1600);
        };
    }
}

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
        tdNode.className = "clsGemTD";

        var floor = Math.floor(Math.random() * 6);
        var g = Math.round(floor)
        if (g > 6) { g = 1 }
        if (g == 0) { g = 5 };

        var imgSrc = 'Images/gem' + g.toString() + '.png';
        var yy = i + rowReplaceStart;
        var currentImageId = "img" + yy.toString();
       
        document.getElementById(currentImageId).src = imgSrc;
       
        resetMore();
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

    if (moreRows3 == "bomb clsGemTD") {
        rowReplaceStart = moreRows;
        
        //resetRow();
    }
};

///Mute//
function muteSound() {
    var themesong = document.getElementById("gameSoundLoop");
    var btnMute = document.getElementById("mute");
    if (themesong.muted) { themesong.muted = false; document.getElementById("mute").innerhtml = "Mute"; btnMute.style.backgroundColor = 'antiquewhite'; }
    else { themesong.muted = true;  btnMute.innerhtml = "un-mute"; btnMute.style.backgroundColor = 'red';}
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
        document.getElementById("Score").innerHTML = "Current Score" + " " + playerScore;
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
    document.getElementById("Score").innerHTML = "Current Score" + " "
    document.getElementById("matchTbl").style.display = 'none';
    randomGems();
    turns = 0;
}

///Donus Divs//
function showBonus() {
    document.getElementById("bonusUnder5").style.display = 'block';
    playerScore = (playerScore + 500);
    document.getElementById("Score").innerHTML = "Current Score" + " " + playerScore;
};
function hideBonus() { document.getElementById("bonusUnder5").style.display = 'none'; };

function doubleBonus() {
    playerScore = (playerScore + 500);
    document.getElementById("doubleBonus1").style.display = 'block';
};
function hidedoubleBonus() { document.getElementById("doubleBonus1").style.display = 'none'; };

function showBonus2() {
    document.getElementById("bonusUnder3").style.display = 'block';
    playerScore = (playerScore + 1500);
    document.getElementById("Score").innerHTML = "Current Score" + " " + playerScore;
};
function hideBonus2() { document.getElementById("bonusUnder5").style.display = 'none'; };