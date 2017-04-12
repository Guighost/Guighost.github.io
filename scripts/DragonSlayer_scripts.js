

/*--Globals--*/
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var dragonHit = Math.floor(Math.random() * 2);
var totalDamage = 0;
var playerHealth = 10;
var playerMax = 10;
var dragonHealth = 10;
var dragonMax = 10;
var battletext = " ";
var healPotNext = "HealthPotHalf.jpg";
var playerXP = 100;
var playerCoin = 100;
var turn = "player";
var playerLevel = 1;
var damagemodify = 1;
var dragonDamage = Math.floor(Math.random() * 5 + 1);
var dragonName1 = "Infernocious";
var storySong = document.getElementById("Audio1");
var round = 1


/* Global Functions*/

/*--Level 2--*/

function level2() {
    battletext = "Moving On... ";
    //document.getElementById("gameOutput").innerHTML = (" You head back to town with proof of the dragons demise" + " " + "<br />" + battletext);
    //battletext = document.getElementById("gameOutput").innerHTML;
    document.getElementById("gameOutput").innerHTML = (
        " You head back to town with proof of the dragons demise" + " " + "<br />"
        + "The town rejoices in your victory, but a dark rumor has already started."
        + "A new threat is looming. The dragon <strong>FrigidBiter</strong> is laying waste to the outer provinces."
        + " " + "<br/>"
        + " You rest up the night and then head to the outer provinces to do battle again" + " "
        + battletext);
    battletext = document.getElementById("gameOutput").innerHTML;
   
    document.getElementById("dragonName").innerHTML = ("FrigidBiter");
    document.images["bodyimageJava1"].src = "Images/Ice_Dragon.png";
    dragonName1 = "FrigidBiter";
    round++
    runGame();
    //alert("playerlevel at end of Level 2 function:" + playerLevel);
};
/*--Level 3--*/
function level3() {
    document.getElementById("dragonName").innerHTML = ("Rockasaurus");
    battletext = document.getElementById("gameOutput").innerHTML;
    document.getElementById("gameOutput").innerHTML = ("<br/>" + " You return victorious again, only to find that yet another dragon is already there." + " "+ "<br/>" + battletext);
    battletext = document.getElementById("gameOutput").innerHTML;
    document.getElementById("gameOutput").innerHTML = (" The horrible stone dragon <strong> Rockasaurus </strong> is looking for revenge for the death of his brothers" + " " + "<br/>" + battletext);
    document.getElementById("dragonName").innerHTML = ("Rockasaurus");
    document.images["bodyimageJava1"].src = "Images/Stone_Dragon.jpg";
    dragonName = "Rockasaurus";
    round++
    runGame();
};



/*--End Globals--*/



/*Set Basetext--*/
window.onload = function startText() {
    /*---start the audio--- */
    var storySong = document.getElementById("Audio1");
    storySong.play();
  
    document.getElementById("gameOutput").innerHTML = ("<strong> Our story begins:</strong>" + " " + " A local lord has brought you, the famous Lord Guiburn to save his province." + " ");
    battletext = document.getElementById("gameOutput").innerHTML;
    /*--start the canvas write for story image--*/
    var canvas = document.getElementById('viewport');
    var context = canvas.getContext('2d');
    var imgV = new Image();
    imgV.src = "images/castleintro.jpg";
    imgV.onload = function () {
        context.drawImage(imgV, 0, 0, 300, 200);
    };
    /*--end the canvas write--*/
    document.getElementById("gameOutput").innerHTML = (battletext + " It seems that a dragon has taken up residence in a cave close to the village. As a famous dragon slayer they have brought you in to handle the problem.");
    battletext = document.getElementById("gameOutput").innerHTML;
    document.getElementById("gameOutput").innerHTML = (battletext + "<br />" + " You track the Dragon on your trusty steed after he attacks the village. As you enter the beast's lair the dragon blows fire- He has detected you!");
}
/*end BaseText*/


/*--Start the game--*/
function runGame() {
    youHit = Math.floor(Math.random() * 2);
    damageThisRound = Math.floor(Math.random() * 5 + 1);
    dragonHit = Math.floor(Math.random() * 2);
    damagemodify = (playerLevel)
    playerHealth = playerMax;
    dragonHealth = dragonMax;
    document.getElementById("gameOutput").style.color = "Blue";
    document.getElementById("gameOutput").style.backgroundColor = "AntiqueWhite";
       
    /*--set Base health Bars--*/
    document.getElementById("plyrinnerbar").style.width = ("99%");
    document.getElementById("plyrHPcount").innerHTML = (playerHealth + "/" + playerMax);
    document.getElementById("drgninnerbar").style.width = ("99%");
    document.getElementById("drgnHPcount").innerHTML = (dragonHealth + "/" + dragonMax);
    playerHealth = playerMax;
    dragonHealth = dragonMax;

    /*--reset health potion--*/
    healPotNext = "HealthPotHalf.jpg";
    document.images["potion"].src = "Images/HealthPotFull.JPG";
    document.images["shieldIcon"].src = "Images/homemadeshield.jpg";
    /* --Start the Text--*/
    battletext = document.getElementById("gameOutput").innerHTML;
    document.getElementById("gameOutput").innerHTML = (battletext + " " + " You find" + " " + "<strong>" + dragonName1 + "</strong>" + " <br/>");

    /*-- show and hide the buttons and images--*/
    document.getElementById("button1").style.visibility = "hidden";
    document.getElementById("potion").style.visibility = "visible";
    document.getElementById("swordsIcon").style.visibility = "visible";
    document.getElementById("shieldIcon").style.visibility = "visible";
    document.getElementById("holyFire").style.visibility = "visible";
    document.getElementById("btnNextRound").style.visibility = "hidden";

    /* --End the Text--*/
    
    /*- Start the music again-*/
    function Battle() {
        var storySong = document.getElementById("Audio1");
        storySong.play();
        var victorySong = document.getElementById("AudioVictory");
        victorySong.pause();
    };
    Battle();
};


/*--Battle Loop--*/
function slayingLoop() {
    slaying = true
    
    youHit = Math.floor(Math.random() * 2);
    damageThisRound = Math.floor(Math.random() * 5 + 1);
    dragonHit = Math.floor(Math.random() * 2);
    /*start the sleep*/

    /*--end the sleep--*/

    /* ----start the loop---*/
    while (slaying) {
        document.getElementById("holyFire").style.visibility = "visible";
        if (turn === "player") {
            battletext = document.getElementById("gameOutput").innerHTML;

            /* ----Players Turn--*/
            /*--start the canvas write for player turn--*/

            var canvas = document.getElementById('viewport');
            var context = canvas.getContext('2d');
            var imgH = new Image();
            imgH.src = "Images/Hero1.png";
            imgH.onload = function () {
                context.drawImage(imgH, 0, 0, 300, 200);
            };

            /*--end the canvas write--*/
            if (youHit) {
                damageThisRound = Math.floor(Math.random() * 5 + 1);
                damageThisRound = (damageThisRound + (damagemodify * 2));
                dragonHealth = (dragonHealth - damageThisRound);
                if (dragonHealth < 0) { dragonHealth = 0 }


                document.getElementById("gameOutput").innerHTML = ("<strong> Player Attacks:</strong>"+ " " + "You hit the dragon for" + " "
                    + damageThisRound + "<br />" + battletext);
                var attackSound1 = document.getElementById("Audio2");
                attackSound1.play();
                

                battletext = document.getElementById("gameOutput").innerHTML;
                turn = "dragon";
                /*-- Handle Dragon HP bar--*/
                var bardown = ((dragonHealth / dragonMax) * 100)
                document.getElementById("drgninnerbar").style.width = (bardown + "%");
                document.getElementById("drgnHPcount").innerHTML = (dragonHealth + "/"  + dragonMax);
                damageThisRound = Math.floor(Math.random() * 5 + 1);
                slaying = false;

                if (dragonHealth === 0) {
                    dragonDeath ();
                   
                }
                else {
                    youHit = Math.floor(Math.random() * 2);
                    dragonHit = Math.floor(Math.random() * 2);


                }
            }
            else {
                document.getElementById("gameOutput").innerHTML = ("<strong> Player Attacks:</strong>" + " " + "The dragon dodges your attack. You did no damage" + "<br />" + battletext);
                battletext = document.getElementById("gameOutput").innerHTML;
                turn = "dragon";
                slaying = false;

            }
            
        }
        else { 
 /* --Dragons Turn - --*/
     
       
        if (dragonHealth > 0) {
            /*--start the canvas write for dragon turn--*/
            var canvas = document.getElementById('viewport');
            var context = canvas.getContext('2d');
            var imgD = new Image();
            imgD.src = "images/dragonattack.png";
            imgD.onload = function () {
                context.drawImage(imgD, 0, 0, 300, 200);
            };
            /*--end the canvas write--*/

            if (dragonHit) {
                
                damageThisRound = Math.floor(Math.random() * 5 + 1);
                damageThisRound = (damageThisRound + (damagemodify * 2) );
                playerHealth -= damageThisRound;
                if (playerHealth < 0) { playerHealth = 0 }

                /*--dragon hit player--*/
                battletext = document.getElementById("gameOutput").innerHTML;
                document.getElementById("gameOutput").innerHTML = ("<strong> Dragon Attacks:</strong>" + " " + "The dragon hit you for" + " " + damageThisRound + "<br />" + battletext);
                /*Dragon hit sounds*/
                var attackSound2 = document.getElementById("Audio3");
                attackSound2.play();

                var painmp3 = document.getElementById("playerHurt");
                painmp3.play();

                battletext = document.getElementById("gameOutput").innerHTML;
                var bardown2 = ((playerHealth / playerMax) * 100)
                document.getElementById("plyrinnerbar").style.width = (bardown2 + "%");
                document.getElementById("plyrHPcount").innerHTML = (playerHealth + "/" + playerMax);
                slaying = false;
                turn = "player";

            }
            else {
                battletext = document.getElementById("gameOutput").innerHTML;
                document.getElementById("gameOutput").innerHTML = ("<strong> Dragon Attacks:</strong>" + " " + "You dodge the attack and take no damage" + "<br />" + battletext);

                slaying = false;
                turn = "player";

            }

            if (playerHealth === 0) {
                battletext = document.getElementById("gameOutput").innerHTML;
                document.getElementById("gameOutput").innerHTML = ("<h1>You died a blazing death </h1>" + "<br />" + battletext);
                /*--Switch the buttons--*/
                document.getElementById("button1").style.visibility = "visible";
                document.getElementById("btnNextRound").style.visibility = "hidden";
                /*--start the canvas write for hero death image--*/
                var canvas = document.getElementById('viewport');
                var context = canvas.getContext('2d');
                var imgHD = new Image();
                imgHD.src = "images/HeroDied.jpg";
                imgHD.onload = function () {
                    context.drawImage(imgHD, 0, 0, 300, 200);
                };
                /*--end the canvas write--*/
                slaying = false;
                document.getElementById("potion").style.visibility = "hidden";
                document.getElementById("swordsIcon").style.visibility = "hidden";
                document.getElementById("shieldIcon").style.visibility = "hidden";
                document.getElementById("holyFire").style.visibility = "hidden";
                //function PlayerDeath() {
                //    var storySong = document.getElementById("Audio1");
                //    storySong.pause();
                //    var deathmp3 = document.getElementById("DeathSound");
                //    deathmp3.play();
                //};
                PlayerDeath();
            }

        }
        else {
            slaying = false;
        } };
    } /*--end while slaying--*/

    
} /*--end slayloop function--*/
function funcHeal() {
    /*--Healing -handle failing scenarios--*/
    if (playerHealth <= 0) { 
            battletext = document.getElementById("gameOutput").innerHTML;
            document.getElementById("gameOutput").innerHTML = ("Potions don't cure death" + "<br />" + battletext)
    }
    else if (playerHealth === playerMax) {
        battletext = document.getElementById("gameOutput").innerHTML;
        document.getElementById("gameOutput").innerHTML = ("You don't need to heal" + "<br />" + battletext)
    }
    else {
        if (healPotNext === "none") {
            battletext = document.getElementById("gameOutput").innerHTML;
            document.getElementById("gameOutput").innerHTML = ("You are out of potions" + "<br />" + battletext)
        }
        else {
            /*--Healing -handle health bar--*/
            var healFactor = (Math.round(playerMax / 3));
            playerHealth = (playerHealth + healFactor);
            if (playerHealth > playerMax) { playerHealth = playerMax };
            battletext = document.getElementById("gameOutput").innerHTML;
            document.getElementById("gameOutput").innerHTML = ("<strong> Player Heals:</strong>" + " " + "You heal for" + " " + healFactor + " " +"HP" + "<br />" + battletext)
            /*play heal sound*/
            function Healing() {
                var healsmp3 = document.getElementById("healSound");
                healsmp3.play();
                            };
            Healing();


            /*--Update Health Bar and HP count--*/
            var barup = ((playerHealth / playerMax) * 100)
            document.getElementById("plyrinnerbar").style.width = (barup + "%");
            document.getElementById("plyrHPcount").innerHTML = (playerHealth + "/" + playerMax);
            /*--start the canvas write for hero healing image--*/
            var canvas = document.getElementById('viewport');
            var context = canvas.getContext('2d');
            var imgHD = new Image();
            imgHD.src = "images/HeroHeal.png";
            imgHD.onload = function () {
                context.drawImage(imgHD, 0, 0, 300, 200);
            };
            /*--end the canvas write--*/
            /*--Update Potion image--*/
            if (healPotNext == "HealthPotHalf.jpg") {
                document.images["potion"].src = "Images/HealthPotHalf.JPG";
                document.images["potion"].alt = "did not load";
                healPotNext = "1/2";
            }
            else {
                document.images["potion"].src = "Images/healthPotEmpty.jpg";
                document.images["potion"].alt = "did not load222";
                healPotNext = "none";
            };
        };
    };

}
function funcShield() {
    var shieldturn = Math.floor(Math.random() * 2);
    damageThisRound = Math.floor(Math.random() * 5 + 1);
    if (shieldturn) {
        battletext = document.getElementById("gameOutput").innerHTML;
        document.getElementById("gameOutput").innerHTML = ("<strong>Player raises Shield:</strong> as the dragon swipes. He stumbles back from the force of the blow, but is otherwise undamaged" + "<br />" + battletext)
        turn = "player";
    }
    else {
        battletext = document.getElementById("gameOutput").innerHTML;
        document.getElementById("gameOutput").innerHTML = ("Lord Guiburn hides behind his shield" + "<br />" + battletext)
        battletext = document.getElementById("gameOutput").innerHTML;
        document.getElementById("gameOutput").innerHTML = ("The Dragon blows fire, yet Guiburn blocks most of the dragon fire" + "<br />" + battletext)
        battletext = document.getElementById("gameOutput").innerHTML;
        damageThisRound = (damageThisRound / 2)
        if (damageThisRound > 0) {
            document.getElementById("gameOutput").innerHTML = ("<strong>Player raises Shield:</strong>Some of the fire still goes around the edges and singes Guiburn for" + "<br />" + damageThisRound + "<br />" + battletext)
            playerHealth = (playerHealth - damageThisRound)
            if (playerHealth < 0) { playerHealth = 0 }       
            battletext = document.getElementById("gameOutput").innerHTML;
            var bardown2 = ((playerHealth / playerMax) * 100)
            document.getElementById("plyrinnerbar").style.width = (bardown2 + "%");
            document.getElementById("plyrHPcount").innerHTML = (playerHealth + "/" + playerMax);
            turn = "player";
        if (playerHealth === 0) {
            battletext = document.getElementById("gameOutput").innerHTML;
            document.getElementById("gameOutput").innerHTML = ("<h1>You died a blazing death </h1>" + "<br />" + battletext);
            /*--Switch the buttons--*/
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("btnNextRound").style.visibility = "hidden";
            /*--start the canvas write for hero death image--*/
            var canvas = document.getElementById('viewport');
            var context = canvas.getContext('2d');
            var imgHD = new Image();
            imgHD.src = "images/HeroDied.jpg";
            imgHD.onload = function () {
                context.drawImage(imgHD, 0, 0, 300, 200);
            };
            /*--end the canvas write--*/
            slaying = false;
            document.getElementById("potion").style.visibility = "hidden";
            document.getElementById("swordsIcon").style.visibility = "hidden";
            document.getElementById("shieldIcon").style.visibility = "hidden";
            document.getElementById("holyFire").style.visibility = "hidden";
        }
        slaying = false;
        turn = "player";

    }

    }
};
    function funcSpell1() {
    youHit = Math.floor(Math.random() * 2);
    damageThisRound = Math.floor(Math.random() * 5 + 1);
    /*--start the canvas write for dragon turn--*/
    var canvas = document.getElementById('viewport');
    var context = canvas.getContext('2d');
    var imgD = new Image();
    imgD.src = "images/HeroSpell.png";
    imgD.onload = function () {
        context.drawImage(imgD, 0, 0, 300, 200);
    };
    /*--end the canvas write--*/
    if (youHit) {
        var spellSound1 = document.getElementById("spellSound1");
        spellSound1.play();
        damagemodify = (playerLevel)
        damageThisRound = Math.floor(Math.random() * 5 + 1);
        damageThisRound = (damageThisRound + (damagemodify * 2) );
        dragonHealth = (dragonHealth - damageThisRound);
        //document.images["holyFire"].src = "Images/Spell2.png";
        setTimeout(function () { document.images["holyFire"].src = "Images/Spell2.png"; }, 500);
        setTimeout(function () { document.images["holyFire"].src = "Images/Spell3.png"; }, 500);
        setTimeout(function () { document.images["holyFire"].src = "Images/Spell1.png"; }, 500);
        setTimeout(function () { document.images["holyFire"].src = "Images/Spell2.png"; }, 500);
        setTimeout(function () { document.images["holyFire"].src = "Images/Spell3.png"; }, 500);
        setTimeout(function () { document.images["holyFire"].src = "Images/Spell1.png"; }, 500);
        if (dragonHealth < 0) { dragonHealth = 0 }
        document.getElementById("gameOutput").innerHTML = ("<strong> Gui casts HOLY FIRE:</strong>" + " " + "You hit the dragon for" + " " + damageThisRound + "<br />" + battletext);
        var attackSound1 = document.getElementById("Audio2");
        attackSound1.play();
        battletext = document.getElementById("gameOutput").innerHTML;
        turn = "dragon";
        /*-- Handle Dragon HP bar--*/
        var bardown = ((dragonHealth / dragonMax) * 100)
        document.getElementById("drgninnerbar").style.width = (bardown + "%");
        document.getElementById("drgnHPcount").innerHTML = (dragonHealth + "/" + dragonMax);
        damageThisRound = Math.floor(Math.random() * 5 + 1);
        slaying = false;
        //document.getElementById("holyFire").style.visibility = "hidden";
        if (dragonHealth === 0) {
            dragonDeath();
        };
    }
    else {
        battletext = document.getElementById("gameOutput").innerHTML;
        turn = "dragon";
        document.getElementById("gameOutput").innerHTML = ("<strong> Gui casts HOLY FIRE:</strong>" + " " + "the Dragon dodges the blast" + "<br />" + battletext);
        slaying = false;
        //document.getElementById("holyFire").style.visibility = "hidden";
        setTimeout(function () {
            document.images["holyFire"].src = "Images/Spell2.png";
            setTimeout(function () { document.images["holyFire"].src = "Images/Spell3.png"; }, 700)

            setTimeout(function () { document.images["holyFire"].src = "Images/Spell1.png"; }, 1000)
        }, 700)
        
       
    };
}
    function nextLevel() {
        //document.getElementById("gameOutput").innerHTML = ("Moving on: ");

        //alert(playerLevel);
        /*reset the Images for next pulse---*/
        document.getElementById("coin").className = document.getElementById("coin").className.replace
              (/(?:^|\s)pulse(?!\S)/g, '');
        document.getElementById("XPImage").className = document.getElementById("XPImage").className.replace
              (/(?:^|\s)pulse(?!\S)/g, '');
        document.getElementById("backPack").className = document.getElementById("XPImage").className.replace
              (/(?:^|\s)pulse(?!\S)/g, '');

        battletext = document.getElementById("gameOutput").innerHTML;
        document.getElementById("gameOutput").innerHTML = ("<strong>Level Up</strong> - Player advances to Level" + " " + playerLevel + "<br />" + battletext);
        /* --Update the player stats*/
        document.getElementById("LevelValue").innerHTML = ("Level" + " " + playerLevel);
        dragonName1 = document.getElementById("dragonName").innerHTML;
        //alert("Start" + dragonName1 + "end");

        if (dragonName1 = "Infernocious") {

            level2();

        }
        else if (dragonName1 = "FrigidBiter") {
            level3();
        }
        else {
            document.getElementById("dragonName").innerHTML = ("More Dragons");
            runGame();
        };

    };
    function dragonDeath() { /*write dragon death to storyline--*/
        battletext = document.getElementById("gameOutput").innerHTML;
        document.getElementById("gameOutput").innerHTML = (
                                "<h1>You killed the dragon </h1>" + "<br />"
                                + '<img id ="neck3" src="Images/icon_necklace3.png" title="Tooth of Power --- Defense +1, FireDamage +2" />' + " "
                                + '<img id ="money" src="Images/money.jpg" alt="alternate" />'
                                + "<p>Picked up DragonTooth necklace</p>" + "<br />"
                                 + " " + "Player Gold increased by 100" 
                                 + "<p>Player Experience increased by 200</p>"
                                   + "<br />" + battletext);
        battletext = document.getElementById("gameOutput").innerHTML;
        document.getElementById("neck3").className = "pulse";
        document.getElementById("slot1").src = "Images/icon_necklace3.png";
        document.getElementById("slot1").title = "Tooth of Power --- Defense +1, FireDamage +2";
        function Victory() {
            var storySong = document.getElementById("Audio1");
            storySong.pause();
            var victorySong = document.getElementById("AudioVictory");
            victorySong.play();
        };
        Victory();
        doPulse();
        document.getElementById("gameOutput").style.color = "Black";
        document.getElementById("gameOutput").style.backgroundColor = "Red";
        battletext = document.getElementById("gameOutput").innerHTML;
        //alert ("Player Level before add " + playerLevel);
        playerLevel = (playerLevel + 1);
        //alert ("Player Level after add  "+ playerLevel);
        /* --Update the player stats*/
        document.getElementById("LevelValue").innerHTML = ("Level" + " " + playerLevel);
        playerXP = (playerXP + 200);
        document.getElementById("XPValue").innerHTML = (playerXP);
        playerCoin = (playerCoin + 100);
        document.getElementById("CoinValue").innerHTML = (playerCoin);
        playerMax = (playerMax + (playerLevel * 10));

        /* --Update the dragon stats*/
        dragonMax = (dragonMax + (playerLevel * 10));
        /*--start the canvas write for dragon death image--*/
        //document.getElementById("button1").style.visibility = "visible";
        //document.getElementById("btnNextRound").style.visibility = "hidden";
        var canvas = document.getElementById('viewport');
        var context = canvas.getContext('2d');
        var imgDD = new Image();
        imgDD.src = "images/killeddragon.jpg";
        imgDD.onload = function () {
            context.drawImage(imgDD, 0, 0, 300, 200);
        };
        /*--end the canvas write--*/
        slaying = false;
        document.getElementById("potion").style.visibility = "hidden";
        document.getElementById("swordsIcon").style.visibility = "hidden";
        document.getElementById("shieldIcon").style.visibility = "hidden";
        document.getElementById("holyFire").style.visibility = "hidden";
        document.getElementById("btnNextRound").style.visibility = "visible";
    };
    function showShieldStats() {
        document.getElementById("shieldStats").style.display = "block";
        document.getElementById("inventory").style.visibility = "hidden";
        document.getElementById("invTitle").style.visibility = "hidden";
    };
    function showInventory() {
        document.getElementById("shieldStats").style.display = "none";
        document.getElementById("gloveStats").style.display = "none";
        document.getElementById("chestStats").style.display = "none";
        document.getElementById("helmStats").style.display = "none";
        document.getElementById("swordStats").style.display = "none";
        document.getElementById("neckStats").style.display = "none";
        document.getElementById("gauntStats").style.display = "none";
        document.getElementById("invTitle").style.visibility = "visible";
        document.getElementById("inventory").style.visibility = "visible";
        document.getElementById("bagInv").style.visibility = "visible";
    };
    function showChestStats() {
        document.getElementById("chestStats").style.display = "block";
        document.getElementById("inventory").style.visibility = "hidden";
        document.getElementById("invTitle").style.visibility = "hidden";
        document.getElementById("bagInv").style.visibility = "hidden";
    };
    function showHelmStats() {
        document.getElementById("helmStats").style.display = "block";
        document.getElementById("inventory").style.visibility = "hidden";
        document.getElementById("invTitle").style.visibility = "hidden";
    };
    function showSwordStats() {
        document.getElementById("swordStats").style.display = "block";
        document.getElementById("inventory").style.visibility = "hidden";
        document.getElementById("invTitle").style.visibility = "hidden";
    };
    function showGloveStats() {
        document.getElementById("gloveStats").style.display = "block";
        document.getElementById("inventory").style.visibility = "hidden";
        document.getElementById("invTitle").style.visibility = "hidden";
    };
    function showNeckStats() {
        document.getElementById("neckStats").style.display = "block";
        document.getElementById("inventory").style.visibility = "hidden";
        document.getElementById("invTitle").style.visibility = "hidden";
    }
    function showGauntStats() {
        document.getElementById("gauntStats").style.display = "block";
        document.getElementById("inventory").style.visibility = "hidden";
        document.getElementById("invTitle").style.visibility = "hidden";
    }
    function PlayerDeath() {
        var storySong = document.getElementById("Audio1");
        storySong.pause();
        var deathmp3 = document.getElementById("DeathSound");
        deathmp3.play();
    };
    function doPulse() {
        //coinWid = document.getElementById("coin").width;
        //coinHeight = document.getElementById("coin").height
        //alert(coinHeight + " X " + coinWid);
        
        document.getElementById("coin").className = "pulse";
        document.getElementById("XPImage").className = "pulse";
        document.getElementById("backPack").className = "pulse";


        }
     
        