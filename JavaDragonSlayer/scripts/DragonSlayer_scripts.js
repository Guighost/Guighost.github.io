

/*--Globals--*/
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var dragonHit = Math.floor(Math.random() * 2);
var totalDamage = 0;
var playerHealth = 100;
var playerMax = 100;
var dragonHealth = 100;
var dragonMax = 100;
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
var stamVar = 10;
var magicVar = 5;
var attackVar = 5;
var armorVar = 8;
var fireVar = 5;
var coldVar = 4;
var blockVar = 3;
var damRflctVar = 0;
var stamCurrent = 10;
var armorCurrent = 5;
var attackCurrent = 5;
var magicCurrent = 8;
var fireCurrent = 5;
var coldCurrent = 4;
var blockCurrent = 3;
var damRflctCurrent = 0;

/*--End Globals--*/

/* Global Functions*/



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

function level3() {
    document.getElementById("dragonName").innerHTML = ("Rockasaurus");
    battletext = " ";
    document.getElementById("gameOutput").innerHTML = ("<br/>" + " You return victorious again, only to find that yet another dragon is already there." + " "+ "<br/>" + battletext);
    battletext = document.getElementById("gameOutput").innerHTML;
    document.getElementById("gameOutput").innerHTML = (battletext +" The horrible stone dragon <strong> Rockasaurus </strong> is looking for revenge for the death of his brothers" + " " + "<br/>");
    document.getElementById("dragonName").innerHTML = ("Rockasaurus");
    document.images["bodyimageJava1"].src = "Images/Stone_Dragon.png";
    dragonName = "Rockasaurus";
    round++
    runGame();
};
function level4() {
    document.getElementById("dragonName").innerHTML = ("Hydra");
    battletext = " ";
    document.getElementById("gameOutput").innerHTML = ("<br/>" + " The town pulls back together after the ferocious attack. Eveyone hails you as a hero." + " " +  battletext);
    battletext = document.getElementById("gameOutput").innerHTML;
    document.getElementById("gameOutput").innerHTML = (battletext + " A new rumor comes your way of an even stronger Dragon to test your mettle. <strong> Hydra </strong> is Lurking in a nearby loch and needs killing" + " " + "<br/>" + " You journey to the loch and soon encounter <strong>Hydra</strong>" );
    document.getElementById("dragonName").innerHTML = ("Hydra");
    document.images["bodyimageJava1"].src = "Images/Hydra.jpg";
    dragonName = "Hydra";
    round++
    runGame();
};






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
        context.drawImage(imgV, 40, 5, 225, 150);
        context.font = "10pt Calibri ";
        context.fillStyle = 'blue';
        context.fillText(" The Story Begins " , 20, 20);
        context.fillText
    };
    /*--end the canvas write--*/
    document.getElementById("gameOutput").innerHTML = (battletext + " It seems that a dragon has taken up residence in a cave close to the village. As a famous dragon slayer they have brought you in to handle the problem.");
    battletext = document.getElementById("gameOutput").innerHTML;
    document.getElementById("gameOutput").innerHTML = (battletext + "<br />" + " You track the Dragon on your trusty steed after he attacks the village. As you enter the beast's lair the dragon blows fire- He has detected you!");
}
/*end BaseText*/


/*--Start the game--*/
function runGame() {
    /*--start the canvas write for story image--*/
    var canvas = document.getElementById('viewport');
    var context = canvas.getContext('2d');
    var imgV = new Image();
    imgV.src = "images/castleintro.jpg";
    imgV.onload = function () {
        context.drawImage(imgV, 0, 0, 150, 100);
    };
    /*--end the canvas write--*/
    youHit = Math.floor(Math.random() * 2);
    damageThisRound = Math.floor(Math.random() * 5 + 1);
    dragonHit = Math.floor(Math.random() * 2);
    damagemodify = (playerLevel)
    playerHealth = playerMax;
    dragonHealth = dragonMax;
    document.getElementById("gameOutput").style.color = "Black";
    
       
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
    //document.getElementById("gameOutput").innerHTML = (battletext + " " + " You find" + " " + "<strong>" + dragonName1 + "</strong>" + " <br/>");

    /*-- show and hide the buttons and images--*/
    document.getElementById("button1").style.visibility = "hidden";
    document.getElementById("potion").style.visibility = "visible";
    document.getElementById("swordsIcon").style.visibility = "visible";
    document.getElementById("shieldIcon").style.visibility = "visible";
    document.getElementById("holyFire").style.visibility = "visible";
    document.getElementById("holyFire").className = "readySpell";
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
        document.getElementById("holyFire").className = "readySpell";
        if (turn === "player") {
            battletext = document.getElementById("gameOutput").innerHTML;

            /* ----Players Turn--*/
            /*--start the canvas write for player turn--*/

            var canvas = document.getElementById('viewport');
            var context = canvas.getContext('2d');
            
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            
            var imgH = new Image();
            imgH.src = "images/Hero1.png";
            imgH.onload = function drawhero () {
               
                    context.drawImage(imgH, 40, 40, 150, 100);
                
            };

            /*--end the canvas write--*/
            if (youHit) {
                damagemodify = parseInt(damagemodify, 10) + parseInt(attackCurrent, 10);
                damageThisRound = Math.floor(Math.random() * 5 + 1);
                damageThisRound = (damageThisRound + (damagemodify * 1.25));
                damageThisRound = parseInt(damageThisRound, 10);
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
                context.drawImage(imgD, 20, 0, 250, 160);
            };
            /*--end the canvas write--*/

            if (dragonHit) {
                dragonHitMod = (dragonMax / 5) - (armorCurrent);
                damagemodify = parseInt(damageThisRound,10) + parseInt(dragonHitMod, 10);
                damageThisRound = Math.floor(Math.random() * 5 + 1);
                damageThisRound = (damageThisRound + damagemodify );
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
        /*--start the canvas write for block image--*/
        var canvas = document.getElementById('viewport');
        var context = canvas.getContext('2d');
        var imgHD = new Image();
        imgHD.src = "images/shieldBlock.jpg";
        imgHD.onload = function () {
            context.drawImage(imgHD, 0, 0, 300, 200);
        };
        /*--end the canvas write--*/
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
            /*--start the canvas write for block image--*/
            var canvas = document.getElementById('viewport');
            var context = canvas.getContext('2d');
            var imgHD = new Image();
            imgHD.src = "images/shieldBlock.jpg";
            imgHD.onload = function () {
                context.drawImage(imgHD, 0, 0, 300, 200);
            };
            /*--end the canvas write--*/
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
        document.getElementById("holyFire").className = "coolDownSpell";
    damageThisRound = Math.floor(Math.random() * 5 + 1);
    /*--start the canvas write for dragon turn--*/
    var canvas = document.getElementById('viewport');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    var imgD = new Image();
    imgD.src = "Images/HeroSpell.png";
    imgD.id = "spellImage";
    imgD.onload = function () {
        context.drawImage(imgD, 40, 40, 150, 100);
    };
    /*--end the canvas write--*/
    if (youHit) {
        var spellSound1 = document.getElementById("spellSound1");
        spellSound1.play();
        damagemodify = (playerLevel + magicCurrent)
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
        advanceLevel();
    };
    function advanceLevel() {
        whatlevel = round;
        document.getElementById("treasure1").style.visibility = "hidden";
        switch (whatlevel) {
            case 1: level2();
                break;
            case 2: level3();
                break;
            case 3: level4();
                break;
            default: alert(whatlevel + " " + dragonName1)
                break;
        };
        //if (dragonName1 = "Infernocious") {

        //    level2();

        //}
        //else if (dragonName1 = "FrigidBiter") {
        //    level3();
        //}
        //else {
        //    document.getElementById("dragonName").innerHTML = ("More Dragons");
        //    runGame();
        //};
    };
    function dragonDeath() { /*write dragon death to storyline--*/
        battletext = document.getElementById("gameOutput").innerHTML;
        document.getElementById("gameOutput").innerHTML = (
                                "<h3>You killed the dragon </h3>" + "<br />"
                                //+ '<img id ="neck3" src="Images/icon_necklace3.png" title="Tooth of Power --- Defense +1, FireDamage +2" />' + " "
                                //+ '<img id ="money" src="Images/money.jpg" alt="alternate" />'
                                //+ "<p>Picked up DragonTooth necklace</p>" + " "
                                //  + "Found 100 Gold" + " "
                                 + "<p> Experience increased by 200</p>"
                                   + "<br />" + battletext);
        battletext = document.getElementById("gameOutput").innerHTML;
        //document.getElementById("neck3").className = "slideDown";
        //document.getElementById("slot1").src = "Images/icon_necklace3.png";
        //document.getElementById("slot1").title = "Tooth of Power --- Defense +1, FireDamage +2";
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
       
        playerLevel = (playerLevel + 1);
        
        /* --Update the player stats*/
        document.getElementById("LevelValue").innerHTML = ("Level" + " " + playerLevel);
        playerXP = (playerXP + 200);
        document.getElementById("XPValue").innerHTML = (playerXP);
        
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
        document.getElementById("treasure1").style.visibility = "visible";
        document.getElementById("treasure1").className = "pulse";
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
        document.getElementById("chestStats2").style.display = "none";
        document.getElementById("helmStats").style.display = "none";
        document.getElementById("swordStats").style.display = "none";
        document.getElementById("neckStats").style.display = "none";
        document.getElementById("neckStats2").style.display = "none";
        document.getElementById("gauntStats").style.display = "none";
        document.getElementById("invTitle").style.visibility = "visible";
        document.getElementById("inventory").style.visibility = "visible";
        document.getElementById("bagInv").style.visibility = "visible";
        document.getElementById("neckSlot").style.display = "block";
        document.getElementById("chestSlot").style.display = "block";
        document.getElementById("neckSlot").className = document.getElementById("neckSlot").className.replace
              (/(?:^|\s)slideUp(?!\S)/g, '');
    };
    function showChestStats() {
        
            var currentChest = document.getElementById("chestSlot").title;

            switch (currentChest) {
                case 'Leather Jerkin': {
                    document.getElementById("chestStats").style.display = "block";
                    document.getElementById("inventory").style.visibility = "hidden";
                    document.getElementById("invTitle").style.visibility = "hidden";
                    document.getElementById("bagInv").style.visibility = "visible";
                }
                    break;
                case 'ChainMail Chest': {
                    document.getElementById("chestStats2").style.display = "block";
                    document.getElementById("inventory").style.visibility = "hidden";
                    document.getElementById("invTitle").style.visibility = "hidden";
                    document.getElementById("chestSlot").style.display = "none";
                    document.getElementById("chestSlot").className = document.getElementById("chestSlot").className.replace
              (/(?:^|\s)slideUp(?!\S)/g, '');
                }
                    break;

                default: alert("no div associated");
                    break;
            }

        
        //document.getElementById("chestStats").style.display = "block";
        //document.getElementById("inventory").style.visibility = "hidden";
        //document.getElementById("invTitle").style.visibility = "hidden";
        //document.getElementById("bagInv").style.visibility = "hidden";
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
        var currentNeck = document.getElementById("neckSlot").title;
      
        switch (currentNeck) {
            case  'Stone Necklace': {document.getElementById("neckStats").style.display = "block";
                    document.getElementById("inventory").style.visibility = "hidden";
                    document.getElementById("invTitle").style.visibility = "hidden";
                    document.getElementById("neckSlot").style.display = "none";}
                break;
            case 'Tooth of Power': {
                document.getElementById("neckStats2").style.display = "block";
                document.getElementById("inventory").style.visibility = "hidden";
                document.getElementById("invTitle").style.visibility = "hidden";
                document.getElementById("neckSlot").style.display = "none";
            }
                break;
            
            default: alert("no div associated");
                break;
        }
            
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
        
        
        document.getElementById("XPImage").className = "pulse";
        


        }
    function getLoot() {
        whatlevel = round;
        document.getElementById("treasure1").style.visibility = "hidden";
        document.getElementById("treasure1").className = document.getElementById("treasure1").className.replace
              (/(?:^|\s)pulse(?!\S)/g, '');
        switch (whatlevel) {
            case 1:
                document.getElementById("gameOutput").innerHTML = ('<img id ="neck3" src="Images/icon_necklace3.png" title="Tooth of Power --- Defense +1, FireDamage +2" />' + " "
                                + '<img id ="money" src="Images/money.jpg" alt="alternate" />' + " You search the dragons lair and find a necklace "
                                + "  "               
                                + "<p>Picked up DragonTooth necklace</p>" + " "
                                  + "and 100 Gold" + " ");
                playerCoin = (playerCoin + 100);
                document.getElementById("CoinValue").innerHTML = (playerCoin);
                document.getElementById("coin").className = "pulse";
                document.getElementById("neck3").className = "slideDown";
                document.getElementById("slot1").src = "Images/icon_necklace3.png";
                document.getElementById("slot1").title = "Tooth of Power";
                document.getElementById("btnNextRound").style.visibility = "visible";
                document.getElementById("backPack").className = "pulse";
                document.getElementById("slot1").className = "pulse";
                
                break;
            case 2:
                document.getElementById("gameOutput").innerHTML = ( "  " + '<img id ="chest2" src="Images/chest_chain.png" title="ChainMailChest --- Defense +10" />' + " "
                               + '<img id ="money" src="Images/money.jpg" alt="alternate" />' + " You search the dragons lair and find some armor "                            
                                 + "and 200 Gold" + " ");
                playerCoin = (playerCoin + 200);
                document.getElementById("CoinValue").innerHTML = (playerCoin);
                document.getElementById("coin").className = "pulse";
                document.getElementById("chest2").className = "slideDown";
                document.getElementById("slot2").src = "Images/chest_chain.png";
                document.getElementById("slot2").title = "ChainMail Chest";
                document.getElementById("btnNextRound").style.visibility = "visible";
                document.getElementById("backPack").className = "pulse";
                document.getElementById("slot2").className = "pulse";
                break;
            case 3:
                document.getElementById("gameOutput").innerHTML = ('<img id ="boots2" src="Images/boots_chain.png" title="ChainMail Boots  -- Defense +5" />' + " "
                               + '<img id ="money" src="Images/money.jpg" alt="alternate" />'
                               + " You search the dragons lair and find some boots " + "  "
                               + "and 300 Gold" + " ");
                playerCoin = (playerCoin + 300);
                document.getElementById("CoinValue").innerHTML = (playerCoin);
                document.getElementById("coin").className = "pulse";
                document.getElementById("boots2").className = "slideDown";
                document.getElementById("slot3").src = "Images/boots_chain.png";
                document.getElementById("slot3").title = "ChainMail Boots  -- Defense +5";
                document.getElementById("btnNextRound").style.visibility = "visible";
                document.getElementById("backPack").className = "pulse";
                document.getElementById("slot3").className = "pulse";
                break;
            default: alert(whatlevel + " " + dragonName1)
                break;

        };
    }
    function swapEquip1() {
        
        var equipItem = document.getElementById("slot1").src;
        var equipStat = document.getElementById("slot1").title;
        var swapItem = document.getElementById("neckSlot").src;
        var swapStat = document.getElementById("neckSlot").title;

        document.getElementById("slot1").src = swapItem;
        document.getElementById("slot1").title = swapStat;
        document.getElementById("neckSlot").src = equipItem;
        document.getElementById("neckSlot").title = equipStat;
        
        document.getElementById("neckSlot").className = "slideUp";
        document.getElementById("slot1").className = "slideDown";
        updatePlyrStats();
            };
    function swapEquip2() {

        var equipItem = document.getElementById("slot2").src;
        var equipStat = document.getElementById("slot2").title;
        var swapItem = document.getElementById("chestSlot").src;
        var swapStat = document.getElementById("chestSlot").title;

        document.getElementById("slot2").src = swapItem;
        document.getElementById("slot2").title = swapStat;
        document.getElementById("chestSlot").src = equipItem;
        document.getElementById("chestSlot").title = equipStat;
        document.getElementById("chestSlot").className = "slideUp";
        document.getElementById("slot2").className = "slideDown";
        updatePlyrStats2();

    };
   
    function updatePlyrStats() {
        var eqpdNeckName = document.getElementById("neckSlot").title;
        switch (eqpdNeckName) {
            case 'Stone Necklace':
                var armorNeck = document.getElementById("neckArmor1").innerHTML;
                var attackNeck = document.getElementById("neckAttack1").innerHTML;
                var magicNeck = document.getElementById("neckMagic1").innerHTML;
                var armorNew = parseInt(armorVar, 10) + parseInt(armorNeck, 10);
                var attackNew = parseInt(attackVar, 10) + parseInt(attackNeck, 10);
                var magicNew = parseInt(magicVar, 10) + parseInt(magicNeck, 10);
                document.getElementById("plyrArmorStat").innerHTML = armorNew;
                document.getElementById("plyrAttackStat").innerHTML = attackNew;
                document.getElementById("plyrMagicStat").innerHTML = magicNew;
                document.getElementById("plyrArmorStat").className = "clsPlyrStatNorm";
                document.getElementById("plyrAttackStat").className = "clsPlyrStatNorm";
                document.getElementById("plyrMagicStat").className = "clsPlyrStatNorm";
                armorCurrent = armorNew;
                attackCurrent = attackNew;
                magicCurrent = magicNew;
                break;
            case 'Tooth of Power':
                var armorNeck = document.getElementById("neckArmor2").innerHTML;
                var attackNeck = document.getElementById("neckAttack2").innerHTML;
                var magicNeck = document.getElementById("neckMagic2").innerHTML;
                var armorNew = parseInt(armorVar,10) + parseInt(armorNeck,10);
                var attackNew = parseInt(attackVar,10) + parseInt(attackNeck,10);
                var magicNew = parseInt(magicVar,10) + parseInt(magicNeck,10);

                document.getElementById("plyrArmorStat").innerHTML = armorNew
                document.getElementById("plyrAttackStat").innerHTML = attackNew;
                document.getElementById("plyrMagicStat").innerHTML = magicNew;
                document.getElementById("plyrArmorStat").className = "clsPlyrStatMod";
                document.getElementById("plyrAttackStat").className = "clsPlyrStatMod";
                document.getElementById("plyrMagicStat").className = "clsPlyrStatMod";
                armorCurrent = armorNew;
                attackCurrent = attackNew;
                magicCurrent = magicNew;
                break;
            default: alert("Armorneck=" + armorneck);

        };
    };
    function updatePlyrStats2() {
        var eqpdChestName = document.getElementById("chestSlot").title;
        switch (eqpdChestName) {
            case 'Leather Jerkin':
                var armorChest = document.getElementById("chestArmor1").innerHTML;
                var armorOld = document.getElementById("chestArmor2").innerHTML;
                armorCurrent = parseInt(armorCurrent, 10) - parseInt(armorOld, 10)
                var armorNew = parseInt(armorCurrent, 10) + parseInt(armorChest, 10);

                var fireChest = document.getElementById("chestFire1").innerHTML;
                var fireOld = document.getElementById("chestFire2").innerHTML;
                fireCurrent = parseInt(fireCurrent, 10) - parseInt(fireOld, 10);
                var fireNew = parseInt(fireCurrent, 10) + parseInt(fireChest, 10);

                var coldChest = document.getElementById("chestCold1").innerHTML;
                var coldOld = document.getElementById("chestCold2").innerHTML;
                coldCurrent = parseInt(coldCurrent, 10) - parseInt(coldOld, 10);
                var coldNew = parseInt(coldCurrent, 10) + parseInt(coldChest, 10);

                document.getElementById("plyrArmorStat").innerHTML = armorNew;
                document.getElementById("plyrFireStat").innerHTML = fireNew;
                document.getElementById("plyrColdStat").innerHTML = coldNew;
                document.getElementById("plyrArmorStat").className = "clsPlyrStatNorm";
                document.getElementById("plyrAttackStat").className = "clsPlyrStatNorm";
                document.getElementById("plyrMagicStat").className = "clsPlyrStatNorm";
                armorCurrent = armorNew;
                fireCurrent = fireNew;
                coldCurrent = coldNew;
                break;
            case 'ChainMail Chest':
                var armorChest = document.getElementById("chestArmor2").innerHTML;
                var armorOld = document.getElementById("chestArmor1").innerHTML;
                armorCurrent = parseInt(armorCurrent, 10) - parseInt(armorOld, 10)
                var armorNew = parseInt(armorCurrent, 10) + parseInt(armorChest, 10);

                var fireChest = document.getElementById("chestFire2").innerHTML;
                var fireOld = document.getElementById("chestFire1").innerHTML;
                fireCurrent = parseInt(fireCurrent, 10) - parseInt(fireOld, 10);
                var fireNew = parseInt(fireCurrent, 10) + parseInt(fireChest, 10);

                var coldChest = document.getElementById("chestCold2").innerHTML;
                var coldOld = document.getElementById("chestCold1").innerHTML;
                coldCurrent = parseInt(coldCurrent, 10) - parseInt(coldOld, 10);                     
                var coldNew = parseInt(coldCurrent, 10) + parseInt(coldChest, 10);

                document.getElementById("plyrArmorStat").innerHTML = armorNew;
                document.getElementById("plyrFireStat").innerHTML = fireNew;
                document.getElementById("plyrColdStat").innerHTML = coldNew;
                document.getElementById("plyrArmorStat").className = "clsPlyrStatMod";
                document.getElementById("plyrAttackStat").className = "clsPlyrStatMod";
                document.getElementById("plyrMagicStat").className = "clsPlyrStatMod";
                armorCurrent = armorNew;
                fireCurrent = fireNew;
                coldCurrent = coldNew;
                break;
            default: alert("Armor chest=" + armorChest);

        };
    };