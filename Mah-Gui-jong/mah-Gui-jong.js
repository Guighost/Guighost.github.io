

//main array//
var memory_array = ['mah1', 'mah1', 'mah1', 'mah1',
        'mah2', 'mah2', 'mah2', 'mah2',
        'mah3', 'mah3', 'mah3', 'mah3',
        'mah4', 'mah4', 'mah4', 'mah4',
        'mah5', 'mah5', 'mah5', 'mah5',
        'mah6', 'mah6', 'mah6', 'mah6',
        'mah7', 'mah7', 'mah7', 'mah7',
        'mah8', 'mah8', 'mah8', 'mah8',
        'mah9', 'mah9', 'mah9', 'mah9',
        'mah10', 'mah10', 'mah10', 'mah10',
        'mah1', 'mah1', 
        'mah2', 'mah2', 'mah2', 'mah2',
        'mah3', 'mah3', 'mah3', 'mah3',
        'mah4', 'mah4', 'mah4', 'mah4',
        'mah5', 'mah5', 'mah5', 'mah5',
        'mah6', 'mah6', 'mah6', 'mah6',
        'mah7', 'mah7', 'mah7', 'mah7',
        'mah8', 'mah8', 'mah8', 'mah8',
        'mah9', 'mah9', 'mah9', 'mah9',
        'mah10', 'mah10', 'mah10', 'mah10',
       
    ];
//end main array//
//begin globals//
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var turns = 0;
var playerName = '';
var high1Val = 0;
var high1Name = '';
var high2Val = 0;
var high2Name = '';
var high3Val = 0;
var high3Name = '';
var high4Val = 0;
var high4Name = '';
var high5Val = 0;
var high5Name = '';
var click1 = true;
var backgroundAudio = document.getElementById("gameSoundLoop");
var matchSound1 = document.getElementById("MatchSound");
var invalidSound1 = document.getElementById("invalidSound");
var blockedLeft = true;
var blockedRight = true;
//end globals//

//shuffle the pics//
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
//reset the game//
var tileToMake = 0;
backgroundAudio.play();
backgroundAudio.volume -= 0.7;
function newBoard() {
    document.getElementById('memory_board').innerHTML = '';
    backgroundAudio.play();
        
    
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    tileToMake = 0;
    for (var i = 0; i < memory_array.length; i++) {
        var tileid = [i];
        output += '<div id="tile_' + i + '" ><img class="onBottom" id="img_' + i + '" onclick ="ClickTile();" src="Images/' + memory_array[i] + '.png" /></div>';
        tileToMake++;
    }
    var origDivs = document.getElementById('memory_board').innerHTML
    output = origDivs += output;
    document.getElementById('memory_board').innerHTML = output;
    newBoard2();
}
function newBoard2() {
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for (var i = 0; i < memory_array.length; i++) {
        var tileid = (i + 78);
        output += '<div id="tile_' + tileid + '" ><img class="onTop" id="img_' + tileid + '" onclick ="ClickTile();"src="Images/' + memory_array[i] + '.png" /></div>';
        tileToMake++;
    }
    var origDivs = document.getElementById('memory_board').innerHTML
    output = origDivs += output;
    document.getElementById('memory_board').innerHTML = output;
    newBoard3();
}
function newBoard3() {
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for (var i = 0; i < memory_array.length; i++) {
        var tileid = (i + 156);
        output += '<div id="tile_' + tileid + '" ><img class="onTop2" id="img_' + tileid + '" onclick ="ClickTile();"src="Images/' + memory_array[i] + '.png" /></div>';
        tileToMake++;
    }
    var origDivs = document.getElementById('memory_board').innerHTML
    output = origDivs += output;
    document.getElementById('memory_board').innerHTML = output;
    newBoard4();
}
function newBoard4() {
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for (var i = 0; i < memory_array.length; i++) {
        var tileid = (i + 235);
        output += '<div id="tile_' + tileid + '" ><img class="onTop3" id="img_' + tileid + '" onclick ="ClickTile();"src="Images/' + memory_array[i] + '.png" /></div>';
    }
    var origDivs = document.getElementById('memory_board').innerHTML
    output = origDivs += output;
    document.getElementById('memory_board').innerHTML = output;

}
//handle the flip//
function memoryFlipTile(tile, val) {
    turns++;
    if(tile.innerHTML == "" && memory_values.length < 2){
        tile.style.background = '#FFF';
        switch (val) {
            case "mah1":
                tile.style.background = 'url(Images/mah1.png)  no-repeat';
                break;
            case "mah2":
                tile.style.background = 'url(Images/mah2.png)  no-repeat';
                break;
            case "mah3":
                tile.style.background = 'url(Images/mah3.png)  no-repeat';
                break;
            case "mah4":
                tile.style.background = 'url(Images/mah4.png)  no-repeat';
                break;
            case "mah5":
                tile.style.background = 'url(Images/mah5.png)  no-repeat';
                break;
            case "mah6":
                tile.style.background = 'url(Images/mah6.png)  no-repeat';
                break;
            case "mah7":
                tile.style.background = 'url(Images/mah7.png)  no-repeat';
                break;
            case "mah8":
                tile.style.background = 'url(Images/mah8.png)  no-repeat';
                break;
            case "mah9":
                tile.style.background = 'url(Images/mah9.png)  no-repeat';
                break;
            case "mah10":
                tile.style.background = 'url(Images/mah10.png)  no-repeat';
                break;
           
            default:
                tile.style.background = '#FFF';
        }
        tile.innerHTML = val;
        if (turns % 2 == 0) {
            document.getElementById("Score").innerHTML = "Current Score" + " " + turns / 2;
        }
        if(memory_values.length == 0){
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if(memory_values.length == 1){
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if (memory_values[0] == memory_values[1]) {
                //Match was found///
                tiles_flipped += 2;
                var matchSound1 = document.getElementById("MatchSound");
                matchSound1.play();
                // Clear both arrays
                memory_values = [];
                memory_tile_ids = [];
                // Check to see if the whole board is cleared
                if (tiles_flipped == memory_array.length) {
                    var victorySound1 = document.getElementById("victorySound");
                    victorySound1.play();
                    alert("Board cleared... generating new board and writing high scores");
                    var victorySound1 = document.getElementById("victorySound");
                    victorySound1.play();
                    playerName = document.getElementById('playerName').innerHTML;
                    high1Val = document.getElementById('best1Val').innerHTML;
                    high2Val = document.getElementById('best2Val').innerHTML;
                    high3Val = document.getElementById('best3Val').innerHTML;
                    high4Val = document.getElementById('best4Val').innerHTML;
                    high5Val = document.getElementById('best5Val').innerHTML;
                    
                    
                    if (parseInt(turns, 10) <= (parseInt(high1Val, 10) * 2)) {
                        var old1Name = document.getElementById('best1Name').innerHTML;
                        
                        document.getElementById('best1Name').innerHTML = playerName;
                        document.getElementById('best1Val').innerHTML = Math.round(turns / 2);
                        document.getElementById('best2Name').innerHTML = old1Name;
                        document.getElementById('best2Val').innerHTML = high1Val;
                    };
                    if (parseInt(turns, 10) > (parseInt(high1Val, 10) * 2) && (parseInt(turns, 10) <= (parseInt(high2Val, 10) * 2))) {
                        var old2Name = document.getElementById('best2Name').innerHTML;
                        document.getElementById('best2Name').innerHTML = playerName;
                        document.getElementById('best2Val').innerHTML = Math.round(turns / 2);
                        document.getElementById('best3Name').innerHTML = old2Name;
                        document.getElementById('best3Val').innerHTML = high2Val;
                    };
                    if (parseInt(turns, 10) > (parseInt(high2Val, 10) * 2) && (parseInt(turns, 10) <= (parseInt(high3Val, 10) * 2))) {
                        var old3Name = document.getElementById('best3Name').innerHTML;
                        document.getElementById('best3Name').innerHTML = playerName;
                        document.getElementById('best3Val').innerHTML = Math.round(turns / 2);
                        document.getElementById('best4Name').innerHTML = old3Name;
                        document.getElementById('best4Val').innerHTML = high3Val;
                    };
                    if (parseInt(turns, 10) > (parseInt(high3Val, 10) * 2) && (parseInt(turns, 10) <= (parseInt(high4Val, 10) * 2))) {
                        var old4Name = document.getElementById('best4Name').innerHTML;
                        document.getElementById('best4Name').innerHTML = playerName;
                        document.getElementById('best4Val').innerHTML = Math.round(turns / 2);
                        document.getElementById('best5Name').innerHTML = old4Name;
                        document.getElementById('best5Val').innerHTML = high4Val;
                    };
                    document.getElementById('memory_board').innerHTML = "";
                    newBoard();
                    turns = 0;
                }
            } else {
                //No Match Made///
                function flip2Back() {
                    var invalidSound1 = document.getElementById("invalidSound");
                    invalidSound1.play();
                    // Flip the 2 tiles back over
                    var tile_1 = document.getElementById(memory_tile_ids[0]);
                    var tile_2 = document.getElementById(memory_tile_ids[1]);
                    tile_1.style.background = 'url(tile_bg.jpg) no-repeat';
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(tile_bg.jpg) no-repeat';
                    tile_2.innerHTML = "";
                    // Clear both arrays
                    memory_values = [];
                    memory_tile_ids = [];
                }
                setTimeout(flip2Back, 700);
            }
        }
    }
}

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
        document.getElementById("memory_board").style.display = 'block';
        
        
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
    document.getElementById('memory_board').innerHTML = "";
    document.getElementById("Score").innerHTML = "Current Score" + " "
    document.getElementById("memory_board").style.display = 'none';
    newBoard();
    turns = 0;
}
function muteSound() {
    var themesong = document.getElementById("gameSoundLoop");
    var btnMute = document.getElementById("mute");
    if (themesong.muted) { themesong.muted = false; document.getElementById("mute").innerhtml = "Mute"; btnMute.style.backgroundColor = 'antiquewhite'; }
    else { themesong.muted = true; btnMute.innerhtml = "un-mute"; btnMute.style.backgroundColor = 'blue'; }
}

//handle the clicks///
var clickTile2 = false;
var item1source = "";
var itemclicked1 = "";
function ClickTile() {
    if (click1) {
             
        var target = event.target || event.srcElement;
        itemclicked1 = target.id;

        item1source = target.src;
        item1source2 = item1source;
        
        
        function checkSides() {
            var currentTileClicked = itemclicked1.substr(4);
            currentTileClicked = parseInt(currentTileClicked, 10);

            var leftTile = currentTileClicked - 1;
            var rightTile = currentTileClicked + 1;
            var leftTileID = "img_" + leftTile.toString();
            var rightTileID = "img_" + rightTile.toString();
            var leftTileToCheck = document.getElementById(leftTileID);
            var rightTileToCheck = document.getElementById(rightTileID);

            //alert(leftTileID);

            //check visibility of left img//
            if (leftTileToCheck) {
                var leftStyle = document.getElementById(leftTileID).className;
                if (leftStyle == 'matchedTile') { blockedLeft = false }
                if (leftStyle != 'matchedTile') { blockedLeft = true }
               
                if (currentTileClicked == 300 || currentTileClicked == 287 || currentTileClicked == 274 || currentTileClicked == 261 || currentTileClicked == 248
                || currentTileClicked == 235 || currentTileClicked == 221 || currentTileClicked == 208 || currentTileClicked == 195 || currentTileClicked == 182
                || currentTileClicked == 169 || currentTileClicked == 156 || currentTileClicked == 143 || currentTileClicked == 130 || currentTileClicked == 117
                || currentTileClicked == 104 || currentTileClicked == 91 || currentTileClicked == 78 || currentTileClicked == 65 || currentTileClicked == 52
                || currentTileClicked == 39 || currentTileClicked == 26 || currentTileClicked == 13) {
                    blockedLeft = false;
                }
                //check visibility of right img//
                if (rightTileToCheck) {
                    
                    var rightStyle = document.getElementById(rightTileID).className;
                    if (rightStyle == 'matchedTile') { blockedRight = false; }
                    if (rightStyle != 'matchedTile') { blockedRight = true; }
                    //check to see if they are side images//
                    if (currentTileClicked == 299 || currentTileClicked == 286 || currentTileClicked == 273 || currentTileClicked == 260 || currentTileClicked == 247
                            || currentTileClicked == 234 || currentTileClicked == 220 || currentTileClicked == 207 || currentTileClicked == 194 || currentTileClicked == 181
                            || currentTileClicked == 168 || currentTileClicked == 155 || currentTileClicked == 142 || currentTileClicked == 129 || currentTileClicked == 116
                            || currentTileClicked == 103 || currentTileClicked == 90 || currentTileClicked == 77 || currentTileClicked == 64 || currentTileClicked == 51
                            || currentTileClicked == 38 || currentTileClicked == 25 || currentTileClicked == 12 || currentTileClicked == 312) {
                        blockedRight = false;
                    }
                    
                }
                else { blockedRight = false;}
            };
            //alert(leftTileID + " = left Tile" + " current Tile is  " + currentTileClicked + "     " + rightTileID + " = Right Tile" + " Blocked Right = " + blockedRight + " and BlockedLeft= " + blockedLeft )

           
            
        }
        checkSides();
        //alert('blockedLeft = ' + blockedLeft + "   blocked right = " + blockedRight);
        if (blockedLeft && blockedRight) {
            invalidSound1.play();
            click1 = true;
            clickTile2 = false;
            return;
        }
        else {
            clickTile2 = true;
            click1 = false;
            matchSound1.pause();
            return;
        }
    };

    if (clickTile2 == true && click1 == false) {
        
        var target2 = event.target;
        var itemclicked2 = target2.id;
        var item2source = target2.src;
        //alert('2nd click=' + item2source)

        //do they match?//
        if (item2source == item1source) {
            //is it the same one?//
            if (itemclicked1 == itemclicked2) { clickTile2 = false; click1 = true; return; }
            //alert(itemclicked2);

            //does it have one on both sides//
            var currentTileClicked2 = itemclicked2.substr(4);
            //alert(currentTileClicked2);
            function checkSides2() {
                
                currentTileClicked2 = parseInt(currentTileClicked2, 10);
                
                var leftTile = currentTileClicked2 - 1;
                var rightTile = currentTileClicked2 + 1;
                var leftTileID = "img_" + leftTile.toString();
                var rightTileID = "img_" + rightTile.toString();
                
                var leftTileToCheck = document.getElementById(leftTileID);
                var rightTileToCheck = document.getElementById(rightTileID);
              
                //check visibility of left img//
                if (leftTileToCheck) {
                    
                    var leftStyle = document.getElementById(leftTileID).className;
                    //alert(leftStyle);
                    if (leftStyle == 'matchedTile') { blockedLeft = false };
                    if (leftStyle != 'matchedTile') { blockedLeft = true;}

                    if (currentTileClicked2 == 300 || currentTileClicked2 == 287 || currentTileClicked2 == 274 || currentTileClicked2 == 261 || currentTileClicked2 == 248
                  || currentTileClicked2 == 235 || currentTileClicked2 == 221 || currentTileClicked2 == 208 || currentTileClicked2 == 195 || currentTileClicked2 == 182
                  || currentTileClicked2 == 169 || currentTileClicked2 == 156 || currentTileClicked2 == 143 || currentTileClicked2 == 130 || currentTileClicked2 == 117
                  || currentTileClicked2 == 104 || currentTileClicked2 == 91 || currentTileClicked2 == 78 || currentTileClicked2 == 65 || currentTileClicked2 == 52
                  || currentTileClicked2 == 39 || currentTileClicked2 == 26 || currentTileClicked2 == 13) {
                        blockedLeft = false;

                    };

                    

                   
                    //alert(leftStyle + " = LeftStyle");
                    //check visibility of right img//
                    if (rightTileToCheck) {
                        
                        var rightStyle = document.getElementById(rightTileID).className;
                        if (rightStyle == 'matchedTile') { blockedRight = false };
                        if (rightStyle != 'matchedTile') { blockedRight = true };
                        //alert("current clicked = " + currentTileClicked2 + " and rightsyle = " + rightStyle);
                        if (currentTileClicked2 == 299 || currentTileClicked2 == 286 || currentTileClicked2 == 273 || currentTileClicked2 == 260 || currentTileClicked2 == 247
                     || currentTileClicked2 == 234 || currentTileClicked2 == 220 || currentTileClicked2 == 207 || currentTileClicked2 == 194 || currentTileClicked2 == 181
                     || currentTileClicked2 == 168 || currentTileClicked2 == 155 || currentTileClicked2 == 142 || currentTileClicked2 == 129 || currentTileClicked2 == 116
                     || currentTileClicked2 == 103 || currentTileClicked2 == 90 || currentTileClicked2 == 77 || currentTileClicked2 == 64 || currentTileClicked2 == 51
                     || currentTileClicked2 == 38 || currentTileClicked2 == 25 || currentTileClicked2 == 12 || currentTileClicked2 == 312) {
                            blockedRight = false;
                           
                        };
                        //alert('After Right check   blockedLeft = ' + blockedLeft + "   blocked right = " + blockedRight);
                    }
                    else { blockedRight = false; }
                }
                //alert(leftTileID + " = left Tile" + " current Tile is  " + currentTileClicked2 + "     " + rightTileID + " = Right Tile")
                
                //alert('After Right check 2   blockedLeft = ' + blockedLeft + "   blocked right = " + blockedRight);
                
            }
            checkSides2();
            //alert(' After All - blockedLeft = ' + blockedLeft + "   blocked right = " + blockedRight + "tile clicked = " + currentTileClicked2);
            //the images on both sides exist- do not hide tiles//
            if (blockedLeft && blockedRight) {
                
                invalidSound1.play();
                click1 = true;
                clickTile2 = false;
            }
                //they match and are not blocked on both sides- hide them//
            else {
                document.getElementById(itemclicked1).className = '';
                document.getElementById(itemclicked2).className = '';
                document.getElementById(itemclicked1).className = 'matchedTile';
                document.getElementById(itemclicked2).className = 'matchedTile';
                matchSound1.pause();
                matchSound1.play();
                click1 = true;
                clickTile2 = false;
                checkTilesAllCleared();
            }
            
        }
        else { click1 = true; clickTile2 = false; return;}
    };
    
}
function checkTilesAllCleared() {
    var tileArraySet = document.getElementById("memory_board").getElementsByTagName("img");
    var ImgSetCount = document.getElementById("memory_board").getElementsByTagName("img").length;
    //alert(ImgSetCount);
    var noImageVisible = false;
    var countCleared = 0

    //count number cleared images by class check and iterate countCleared//

    for (var i = 0; i < ImgSetCount; i++)  {
        var checkTileI = "img_" + i.toString();

        var tileIstyle = document.getElementById(checkTileI).className;
        
        if (tileIstyle == "onTop3" || tileIstyle == "onTop2" || tileIstyle == "onTop" || tileIstyle == "onBottom") { return; break; }
        
        if (tileIstyle == "matchedTile") { countCleared++ }
        //alert(tileIstyle);
        //alert(countCleared);
    };    //end of For
    
    //check to see if all cleared
    if (countCleared = 311) {
        
        levelUp();
        countCleared = 0;//all cleared- go to next level//
        //alert(countCleared);
    }
   
};
function levelUp() {
    backgroundAudio.pause();
    var el = document.getElementById('memory_board');
    while (el.firstChild) { el.removeChild(el.firstChild) };
    document.getElementById('memory_board').innerHTML = '<div id="LevelUpDiv1" class = "levelUpClass"> <a onclick ="newBoard()">Go to Next</a>  </div>';
};

function sideBySide() {
    function newBoardP1() {

        
        var leftDivlvl2 =  '<div id = "lvl2Left"></div>'
        var rightDivlvl2 = '<div id = "lvl2Right"></div>'
        var lvl2Start = leftDivlvl2 + rightDivlvl2;

        document.getElementById('memory_board').innerHTML = lvl2Start;


        tiles_flipped = 0;
        var output = '';
        memory_array.memory_tile_shuffle();
        tileToMake = 0;
        for (var i = 0; i < 20; i++) {
            var tileid = [i];
            output += '<div id="tile_' + i + '" ><img class="onBottomLeft" id="img_' + i + '" onclick ="ClickTile();" src="Images/' + memory_array[i] + '.png" /></div>';
            tileToMake++;
        }
        
        var origDivs = document.getElementById('memory_board').innerHTML
        output = origDivs += output;
        document.getElementById('lvl2Left').innerHTML = output;
        
    }
    newBoardP1();
};