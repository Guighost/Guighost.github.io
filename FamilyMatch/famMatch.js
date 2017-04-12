//main array//
    var memory_array = ['Gabby', 'Gabby',
        'Lee', 'Lee',
        'Duane', 'Duane',
        'Hunter', 'Hunter',
        'Lance', 'Lance',
        'Savannah', 'Savannah',
        'Peyton', 'Peyton',
        'Chad', 'Chad',
        'Molly', 'Molly',
        'Mom T', 'Mom T',
        'Dad T', 'Dad T',
        'Taylor', 'Taylor',
        'Mom B', 'Mom B',
        'Dad B', 'Dad B',
        'Rascal', 'Rascal',
        'Precious' , 'Precious'
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
function newBoard(){
    tiles_flipped = 0;
    var output = '';
    memory_array.memory_tile_shuffle();
    for(var i = 0; i < memory_array.length; i++){
        output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}
//handle the flip//
function memoryFlipTile(tile, val) {
    turns++;
    if(tile.innerHTML == "" && memory_values.length < 2){
        tile.style.background = '#FFF';
        switch (val) {
            case "Gabby":
                tile.style.background = 'url(Images/gabby.jpg)  no-repeat';
                break;
            case "Lee":
                tile.style.background = 'url(Images/Lee.jpg)  no-repeat';
                break;
            case "Duane":
                tile.style.background = 'url(Images/Duane.jpg)  no-repeat';
                break;
            case "Hunter":
                tile.style.background = 'url(Images/Hunter.jpg)  no-repeat';
                break;
            case "Lance":
                tile.style.background = 'url(Images/Lance.jpg)  no-repeat';
                break;
            case "Savannah":
                tile.style.background = 'url(Images/Savannah.jpg)  no-repeat';
                break;
            case "Peyton":
                tile.style.background = 'url(Images/Peyton.jpg)  no-repeat';
                break;
            case "Molly":
                tile.style.background = 'url(Images/Molly.jpg)  no-repeat';
                break;
            case "Chad":
                tile.style.background = 'url(Images/Chad.jpg)  no-repeat';
                break;
            case "Mom T":
                tile.style.background = 'url(Images/MomT.jpg)  no-repeat';
                break;
            case "Dad T":
                tile.style.background = 'url(Images/DadT.jpg)  no-repeat';
                break;
            case "Taylor":
                tile.style.background = 'url(Images/Taylor.jpg)  no-repeat';
                break;
            case "Mom B":
                tile.style.background = 'url(Images/MomB.jpg)  no-repeat';
                break;
            case "Dad B":
                tile.style.background = 'url(Images/DadB.jpg)  no-repeat';
                break;
            case "Rascal":
                tile.style.background = 'url(Images/rascal.jpg)  no-repeat';
                break;
            case "Precious":
                tile.style.background = 'url(Images/precious.jpg)  no-repeat';
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
        } else if(memory_values.length == 1) {
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