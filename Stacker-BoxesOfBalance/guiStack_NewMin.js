﻿function menuFunction(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}function changeActive(){var e=document.getElementById(this);"active"===e.className?e.className+="":e.className="active"}function switchAndPlayTheme(e){switch((e=parseInt(e,10))>24&&(e-=24),e){case 1:myAudio.play();break;case 2:myAudioCSI.play();break;case 3:myAudioElements.play();break;case 4:myAudioMystery.play();break;case 5:myAudioUplifting.play();break;case 6:myAudioTension.play();break;case 7:myAudioCSI.play();break;case 8:myAudio.play();break;case 9:myAudioUplifting.play();break;case 10:myAudioMystery.play();break;case 11:myAudioElements.play();break;case 12:myAudioCSI.play();break;case 13:myAudioUplifting.play();break;case 14:myAudioTension.play();break;case 15:myAudioMystery.play();break;case 16:myAudio.play();break;case 17:myAudioElements.play();break;case 18:myAudioMystery.play();break;case 19:myAudioUplifting.play();break;case 20:myAudioTension.play();break;case 21:myAudioUplifting.play();break;case 22:myAudioCSI.play();break;case 23:myAudioElements.play();break;case 24:myAudioMystery.play();break;default:myAudio.play()}}function pauseAllAudio(){myAudio.pause(),myAudioMystery.pause(),myAudioCSI.pause(),myAudioTension.pause(),myAudioUplifting.pause(),myAudioElements.pause()}var game,levelScore=0,oldLevelScore=0,LEVEL=1,gameOptions={timeLimit:30,gravity:2e3,crateSpeed:1500,crateHorizontalRange:540,fallingHeight:500,localStorageName:"Stacker_HighScore",gameWidth:640,gameHeight:960},playAdTime=0,GROUNDHEIGHT,CRATEHEIGHT,CrateSrc="crate1",alreadyclicked=!1,gameDiv=document.getElementById("gameDiv"),timeBetweenAds=120,selfAd1time=1;window.onload=function(){function e(){document.hidden?pauseAllAudio():switchAndPlayTheme(LEVEL)}var a=window.innerWidth,t=(window.innerHeight-40)/a;t>=1&&(t<1.3?gameOptions.gameWidth=gameOptions.gameHeight/t:gameOptions.gameHeight=gameOptions.gameWidth*t),(game=new Phaser.Game(gameOptions.gameWidth,gameOptions.gameHeight,Phaser.CANVAS)).state.add("introToGame",introScene),game.state.add("PlayGame",playGame),localStorage.getItem("showSelfAd"),localStorage.setItem("showSelfAd",0),null==localStorage.getItem("stackerLevel")?(LEVEL=1,localStorage.setItem("stackerLevel",LEVEL)):LEVEL=localStorage.getItem("stackerLevel"),game.state.start("introToGame"),localStorage.setItem("showInterstatial",0),document.getElementById("loadingGG").style.display="none",myAudio=new Audio("assets/sounds/loops/OveMelaa-ItaloUnlimited.mp3"),myAudio.load(),myAudioUplifting=new Audio("assets/sounds/loops/Cafofo_Uplifting.mp3"),myAudioUplifting.load(),myAudioMystery=new Audio("assets/sounds/loops/Cafofo_ MysteryMenu.mp3"),myAudioMystery.load(),myAudioCSI=new Audio("assets/sounds/loops/Cafofo_CSI_Variation.mp3"),myAudioCSI.load(),myAudioTension=new Audio("assets/sounds/loops/Cafofo_TensionMix.mp3"),myAudioTension.load(),myAudioElements=new Audio("assets/sounds/loops/OveMelaa_Elements.mp3"),myAudioElements.load(),myAudio.volume=.2,"boolean"==typeof myAudio.loop?myAudio.loop=!0:myAudio.addEventListener("ended",function(){this.currentTime=0,this.play()},!1),myAudioCSI.volume=.2,"boolean"==typeof myAudioCSI.loop?myAudioCSI.loop=!0:myAudioCSI.addEventListener("ended",function(){this.currentTime=0,this.play()},!1),myAudioTension.volume=.2,"boolean"==typeof myAudioTension.loop?myAudioTension.loop=!0:myAudioTension.addEventListener("ended",function(){this.currentTime=0,this.play()},!1),myAudioElements.volume=.2,"boolean"==typeof myAudioElements.loop?myAudioElements.loop=!0:myAudioElements.addEventListener("ended",function(){this.currentTime=0,this.play()},!1),myAudioMystery.volume=.2,"boolean"==typeof myAudioMystery.loop?myAudioMystery.loop=!0:myAudioMystery.addEventListener("ended",function(){this.currentTime=0,this.play()},!1),myAudioUplifting.volume=.2,"boolean"==typeof myAudioUplifting.loop?myAudioUplifting.loop=!0:myAudioUplifting.addEventListener("ended",function(){this.currentTime=0,this.play()},!1),pauseAllAudio(),document.addEventListener("visibilitychange",e,!1)};var introScene=function(){},levelUpScene=function(){},timerI=0;introScene.prototype={preload:function(){game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,game.scale.pageAlignHorizontally=!0,game.scale.pageAlignVertically=!0,game.stage.disableVisibilityChange=!0,game.load.image("intro","images/introBack4.png"),game.load.image("playBtn1","images/playButton.png"),game.load.image("playBtnNew","images/playButtonNew.png"),game.load.image("continueBtn","images/continueButton.png"),game.load.image("tut1","images/intro1.png"),game.load.image("tut2","images/intro2.png"),game.load.image("tut3","images/intro3.png"),game.load.audio("gameover",["assets/sounds/gameover.mp3","assets/sounds/gameover.ogg"]),game.load.bitmapFont("font","assets/fonts/font.png","assets/fonts/font.xml"),game.load.bitmapFont("font2","assets/fonts/font2.png","assets/fonts/font.xml"),game.load.bitmapFont("smallfont","assets/fonts/smallfont.png","assets/fonts/smallfont.xml")},create:function(){var e=game.add.image(0,0,"intro");if(e.width=game.width,e.height=game.height,1==LEVEL){var a=game.add.image(game.width/2-90,game.height/2,"playBtn1");a.width=200,a.height=100,a.inputEnabled=!0,a.input.PriorityID=1,game.input.onDown.add(this.loadGame1,a)}if(LEVEL>1){var t=game.add.sprite(game.width/2-90,game.height/2+5,"continueBtn");t.name="continueBtn",t.width=200,t.height=100,t.inputEnabled=!0,t.events.onInputDown.add(this.loadGame1,this);var s=game.add.sprite(game.width/2-90,game.height/2+130,"playBtnNew");s.name="playBtnNew",s.width=200,s.height=100,s.inputEnabled=!0,s.events.onInputDown.add(this.loadGameNew,this)}},loadGameNew:function(e){text=e.name,LEVEL=1,localStorage.setItem("stackerScore",0),localStorage.setItem(gameOptions.localStorageName,JSON.stringify({score:0})),localStorage.setItem("timesPlayed",0),localStorage.setItem("stackerLevel",1),localStorage.setItem("showSelfAd",1),localStorage.setItem("showInterstatial",0),this.loadGame1()},loadGame1:function(){function e(){"none"==document.getElementById("rateMe").style.display&&(game.paused=!1,clearInterval(playTime2))}if(0==alreadyclicked)if(1==LEVEL){alreadyclicked=!0;var a=game.add.image(game.width/2-150,game.height/2-20,"tut1"),t=game.add.image(game.width/2-155,game.height/2-20,"tut2");t.visible=!1,a.width=300,a.height=300;setTimeout(function(){a.visible=!1,t.visible=!0,t.width=300,t.height=300},1250),setTimeout(function(){t.visible=!1;var e=game.add.image(game.width/2-155,game.height/2-20,"tut3");e.width=300,e.height=300},2500),setTimeout(function(){game.state.start("PlayGame"),document.getElementById("loadingGG").style.display="block"},4e3)}else{LEVEL=localStorage.getItem("stackerLevel"),alreadyclicked=!0,game.state.start("PlayGame"),document.getElementById("loadingGG").style.display="block";var s=localStorage.getItem("rateMeNever"),i=localStorage.getItem("timesPlayed");0==s&&i>=3?(localStorage.setItem("timesPlayed",0),setTimeout(function(){var a=document.getElementById("rateMeBtnYes");a.classList.remove("zoomInRight"),a.classList.remove("heartBeat"),a.classList.add("zoomInUp"),document.getElementById("rateMe").style.display="block",document.getElementById("rateMeInner").style.display="block",document.getElementById("loadingGG").style.display="none",game.paused=!0;setInterval(e,1e3)},500)):(document.getElementById("rateMe").style.display="none",game.paused=!1)}}};var playGame=function(){};playGame.prototype={preload:function(){game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,game.scale.pageAlignHorizontally=!0,game.scale.pageAlignVertically=!0,game.stage.disableVisibilityChange=!0,game.load.image("ground1","assets/sprites/ground1.png"),game.load.image("ground2","assets/sprites/ground2.png"),game.load.image("ground3","assets/sprites/ground3.png"),game.load.image("ground4","assets/sprites/ground4.png"),game.load.image("ground5","assets/sprites/ground5.png"),game.load.image("ground6","assets/sprites/ground6.png"),game.load.image("ground7","assets/sprites/ground7.png"),game.load.image("ground8","assets/sprites/ground8.png"),game.load.image("ground9","assets/sprites/ground9.png"),game.load.image("ground10","assets/sprites/ground10.png"),game.load.image("ground11","assets/sprites/ground11.png"),game.load.image("ground12","assets/sprites/ground12.png"),game.load.image("ground13","assets/sprites/ground13.png"),game.load.image("ground14","assets/sprites/ground14.png"),game.load.image("ground15","assets/sprites/ground15.png"),game.load.image("ground16","assets/sprites/ground16.png"),game.load.image("ground17","assets/sprites/ground17.png"),game.load.image("ground18","assets/sprites/ground18.png"),game.load.image("ground19","assets/sprites/ground19.png"),game.load.image("ground20","assets/sprites/ground20.png"),game.load.image("ground21","assets/sprites/ground21.png"),game.load.image("ground22","assets/sprites/ground22.png"),game.load.image("ground23","assets/sprites/ground23.png"),game.load.image("ground24","assets/sprites/ground24.png"),game.load.image("ground25","assets/sprites/ground25.png"),game.load.image("plat1","assets/sprites/plat1.png"),game.load.image("plat2","assets/sprites/plat2.png"),game.load.image("plat3","assets/sprites/plat3.png"),game.load.image("plat4","assets/sprites/plat4.png"),game.load.image("plat5","assets/sprites/plat5.png"),game.load.image("plat6","assets/sprites/plat6.png"),game.load.image("plat7","assets/sprites/plat7.png"),game.load.image("plat8","assets/sprites/plat8.png"),game.load.image("plat9","assets/sprites/plat9.png"),game.load.image("plat10","assets/sprites/plat10.png"),game.load.image("plat11","assets/sprites/plat11.png"),game.load.image("plat12","assets/sprites/plat12.png"),game.load.image("plat13","assets/sprites/plat13.png"),game.load.image("plat14","assets/sprites/plat14.png"),game.load.image("plat15","assets/sprites/plat15.png"),game.load.image("plat16","assets/sprites/plat16.png"),game.load.image("plat17","assets/sprites/plat17.png"),game.load.image("plat18","assets/sprites/plat18.png"),game.load.image("plat19","assets/sprites/plat19.png"),game.load.image("plat20","assets/sprites/plat20.png"),game.load.image("plat21","assets/sprites/plat21.png"),game.load.image("plat22","assets/sprites/plat22.png"),game.load.image("plat23","assets/sprites/plat23.png"),game.load.image("plat24","assets/sprites/plat24.png"),game.load.image("plat25","assets/sprites/plat25.png"),game.load.image("sky1","assets/sprites/sky1.png"),game.load.image("sky2","assets/sprites/sky2.png"),game.load.image("sky3","assets/sprites/sky3.png"),game.load.image("sky4","assets/sprites/sky4.png"),game.load.image("sky5","assets/sprites/sky5.png"),game.load.image("sky6","assets/sprites/sky6.png"),game.load.image("sky7","assets/sprites/sky7-2.png"),game.load.image("sky8","assets/sprites/sky8.png"),game.load.image("sky9","assets/sprites/sky9.png"),game.load.image("sky10","assets/sprites/sky10.png"),game.load.image("sky11","assets/sprites/sky11.png"),game.load.image("sky12","assets/sprites/sky12.png"),game.load.image("sky13","assets/sprites/sky13.png"),game.load.image("sky14","assets/sprites/sky14.png"),game.load.image("sky15","assets/sprites/sky15.png"),game.load.image("sky16","assets/sprites/sky16.png"),game.load.image("sky17","assets/sprites/sky17.png"),game.load.image("sky18","assets/sprites/sky18.png"),game.load.image("sky19","assets/sprites/sky19.png"),game.load.image("sky20","assets/sprites/sky20.png"),game.load.image("sky21","assets/sprites/sky21.png"),game.load.image("sky22","assets/sprites/sky22.png"),game.load.image("sky23","assets/sprites/sky23.png"),game.load.image("sky24","assets/sprites/sky24.png"),game.load.image("sky25","assets/sprites/sky20.png"),game.load.image("crate1","assets/sprites/crate1.png"),game.load.image("crate2","assets/sprites/crate2.png"),game.load.image("crate3","assets/sprites/crate3.png"),game.load.image("crate4","assets/sprites/crate4.png"),game.load.image("crate5","assets/sprites/crate5.png"),game.load.image("crate6","assets/sprites/crate6.png"),game.load.image("crate7","assets/sprites/crate7.png"),game.load.image("crate8","assets/sprites/crate8.png"),game.load.image("crate9","assets/sprites/crate9.png"),game.load.image("crate10","assets/sprites/crate10.png"),game.load.image("crate11","assets/sprites/crate11.png"),game.load.image("crate12","assets/sprites/crate12.png"),game.load.image("crate13","assets/sprites/crate13.png"),game.load.image("crate14","assets/sprites/crate14.png"),game.load.image("crate15","assets/sprites/crate15.png"),game.load.image("crate16","assets/sprites/crate16.png"),game.load.image("crate17","assets/sprites/crate17.png"),game.load.image("crate18","assets/sprites/crate18.png"),game.load.image("crate19","assets/sprites/crate19.png"),game.load.image("crate20","assets/sprites/crate20.png"),game.load.image("crate21","assets/sprites/crate21.png"),game.load.image("crate22","assets/sprites/crate22.png"),game.load.image("crate23","assets/sprites/crate23.png"),game.load.image("crate24","assets/sprites/crate24.png"),game.load.image("crate25","assets/sprites/crate25.png"),game.load.image("title","assets/sprites/title7.png"),game.load.image("title2","assets/sprites/title6.png"),game.load.image("tap","assets/sprites/tap.png"),game.load.audio("hit01",["assets/sounds/hit01.mp3"]),game.load.audio("hit02",["assets/sounds/hit02.mp3"]),game.load.audio("hit03",["assets/sounds/hit03.mp3"]),game.load.audio("remove",["assets/sounds/remove.mp3"]),game.load.audio("gameover",["assets/sounds/Evil_laugh.mp3"]),game.load.audio("victory",["assets/sounds/levelup2.mp3"]),game.load.bitmapFont("font","assets/fonts/font.png","assets/fonts/font.xml"),game.load.bitmapFont("font2","assets/fonts/font2.png","assets/fonts/font.xml"),game.load.bitmapFont("smallfont","assets/fonts/smallfont.png","assets/fonts/smallfont.xml")},create:function(){document.getElementById("loadingGG").style.display="none",!Phaser.Device.desktop&&gameOptions.gameHeight<768&&(game.scale.forceOrientation(!1,!0),game.scale.enterIncorrectOrientation.add(function(){game.paused=!0,document.querySelector("canvas").style.display="none",document.getElementById("wrongorientation").style.display="block"}),game.scale.leaveIncorrectOrientation.add(function(){game.paused=!1,document.querySelector("canvas").style.display="block",document.getElementById("wrongorientation").style.display="none"})),this.lastSoundPlayed=Date.now(),this.savedData=null==localStorage.getItem(gameOptions.localStorageName)?{score:0}:JSON.parse(localStorage.getItem(gameOptions.localStorageName)),this.hitSound=[game.add.audio("hit01"),game.add.audio("hit02"),game.add.audio("hit03")],this.gameOverSound=game.add.audio("gameover"),this.victorySound=game.add.audio("victory"),this.removeSound=game.add.audio("remove"),this.score=0,LEVEL>1&&(this.score=levelScore,oldLevelScore=this.score),null==localStorage.getItem("stackerScore")?localStorage.setItem("stackerScore",this.score):(this.score=JSON.parse(localStorage.getItem("stackerScore")),oldLevelScore=JSON.parse(localStorage.getItem("stackerScore"))),GROUNDHEIGHT=game.cache.getImage("ground1").height,CRATEHEIGHT=game.cache.getImage("crate1").height,this.firstCrate=!0;var e=LEVEL;e>25&&e<=50&&(e-=24),e>50&&e<=75&&(e-=49),e>75&&e<=100&&(e-=74);var a="sky"+e,t=game.add.image(0,0,a);t.width=game.width,t.height=game.height,this.cameraGroup=game.add.group(),this.crateGroup=game.add.group(),this.cameraGroup.add(this.crateGroup),game.physics.startSystem(Phaser.Physics.BOX2D),game.physics.box2d.gravity.y=gameOptions.gravity,this.canDrop=!0;var s="ground"+e,i="plat"+e;CrateSrc="crate"+e;var o=Math.floor(9*Math.random()+2);o<=gameOptions.width/2&&(o-=150);var m=Math.floor(9*Math.random()),g=game.add.sprite(game.width/2,game.height,"ground1");g.y=game.height-g.height/2-70,g.loadTexture(s),game.add.bitmapText(game.width-game.width/4+15,50,"smallfont","Score",46),game.add.bitmapText(game.width-game.width/4+40,110,"smallfont",""+this.score,40),game.add.bitmapText(10,50,"smallfont","Level",46),game.add.bitmapText(55,110,"smallfont",""+LEVEL,40);var n=game.add.sprite(game.width/o,game.height,i);n.y=g.y-267,n.x>250&&(n.x=35);var d=game.width/m;d<game.width/2+45&&(d=game.width/2+145),d>game.width-100&&(d=game.width/2+210),d<game.width/o+96&&(d=game.width-96);var l=game.add.sprite(d,game.height,i);l.y=g.y-185,this.movingCrate=game.add.sprite((game.width-gameOptions.crateHorizontalRange)/2,game.height-game.height/3.25-gameOptions.fallingHeight-50,"crate1"),this.movingCrate.loadTexture(CrateSrc),this.movingCrate.anchor.set(.5),this.cameraGroup.add(this.movingCrate);game.add.tween(this.movingCrate).to({x:(game.width+gameOptions.crateHorizontalRange)/2},gameOptions.crateSpeed,Phaser.Easing.Linear.None,!0,0,-1,!0);game.physics.box2d.enable(g),g.body.friction=1,g.body.static=!0,g.body.setCollisionCategory(1),this.cameraGroup.add(g),game.physics.box2d.enable(n),n.body.friction=1,n.body.static=!0,n.body.setCollisionCategory(1),this.cameraGroup.add(n),game.physics.box2d.enable(l),l.body.friction=1,l.body.static=!0,l.body.setCollisionCategory(1),this.cameraGroup.add(l),game.input.onDown.add(this.dropCrate,this),LEVEL>4&&LEVEL<=6&&(gameOptions.timeLimit=35),LEVEL>=7&&LEVEL<=10&&(gameOptions.timeLimit=45),LEVEL>=11&&LEVEL<=15&&(gameOptions.timeLimit=60),LEVEL>=16&&LEVEL<=20&&(gameOptions.timeLimit=75),LEVEL>=21&&(gameOptions.timeLimit=90),this.menuGroup=game.add.group();var r=game.add.sprite(game.width/2,game.height-300,"tap");if(r.anchor.set(.5),this.menuGroup.add(r),LEVEL<=1){var p=game.add.image(game.width/2,r.y-610,"title");p.anchor.set(.5,0),this.menuGroup.add(p)}else{var c=game.add.image(game.width/2,r.y-580,"title2");c.anchor.set(.5,0),this.menuGroup.add(c)}var h=game.add.bitmapText(game.width/2,game.height-174,"smallfont","YOUR TOP SCORE",24);h.anchor.set(.5),this.menuGroup.add(h);var u=game.add.bitmapText(game.width/2,game.height-120,"font",this.savedData.score.toString(),72);u.anchor.set(.5),this.menuGroup.add(u);game.add.tween(r).to({alpha:0},250,Phaser.Easing.Cubic.InOut,!0,0,-1,!0);var y=5*LEVEL+10;LEVEL>21&&(y=125),this.levelText=game.add.bitmapText(game.width/4+32,r.y-395,"font2","Level "+LEVEL.toString(),72),this.levelText2=game.add.bitmapText(game.width/4-25,r.y-285,"font2","Goal: "+y.toString()+" points",48),this.levelText3=game.add.bitmapText(game.width/4+20,r.y-195,"font2",gameOptions.timeLimit.toString()+" seconds",48)},dropCrate:function(){if(this.firstCrate&&(this.firstCrate=!1,this.menuGroup.destroy(),this.levelText.destroy(),this.levelText2.destroy(),this.levelText3.destroy(),this.timer=0,this.timerEvent=game.time.events.loop(Phaser.Timer.SECOND,this.tick,this),this.timeText=game.add.bitmapText(game.width-game.width/2-70,60,"font",gameOptions.timeLimit.toString(),84),switchAndPlayTheme(LEVEL)),this.canDrop&&this.timer<=gameOptions.timeLimit){this.canDrop=!1,this.movingCrate.alpha=0;var e=game.add.sprite(this.movingCrate.x,this.movingCrate.y,"crate1");e.hit=!1,e.loadTexture(CrateSrc),game.physics.box2d.enable(e),e.body.friction=1,e.body.bullet=!0,this.crateGroup.add(e),e.body.setCollisionCategory(1),e.body.setCategoryContactCallback(1,function(e,a,t,s,i,o){Date.now()-this.lastSoundPlayed>200&&this.timer<=gameOptions.timeLimit&&(this.lastSoundPlayed=Date.now(),Phaser.ArrayUtils.getRandomItem(this.hitSound).play()),e.sprite.hit||(e.sprite.hit=!0,e.bullet=!1,this.getMaxHeight())},this)}},update:function(){this.crateGroup.forEach(function(e){e.y>game.height+e.height&&(e.hit||this.getMaxHeight(),e.destroy())},this)},scaleCamera:function(e){game.add.tween(this.cameraGroup).to({x:(game.width-game.width*e)/2,y:game.height-game.height*e},350,Phaser.Easing.Quadratic.IN,!0);game.add.tween(this.cameraGroup.scale).to({x:e,y:e},350,Phaser.Easing.Quadratic.IN,!0).onComplete.add(function(){this.canDrop=!0,this.movingCrate.alpha=1},this)},getMaxHeight:function(){var e=0;this.crateGroup.forEach(function(a){if(a.hit){var t=Math.round((game.height-GROUNDHEIGHT-a.y-CRATEHEIGHT/2)/CRATEHEIGHT)+1;e=Math.max(t,e)}},this),this.movingCrate.y=game.height-GROUNDHEIGHT-e*CRATEHEIGHT-gameOptions.fallingHeight+1;var a=game.height+CRATEHEIGHT*e,t=game.height/a;this.scaleCamera(t)},tick:function(){this.timer++,timeLeft=gameOptions.timeLimit-this.timer,playAdTime++,this.timeText.text=(gameOptions.timeLimit-this.timer).toString(),9==timeLeft&&(this.timeText.x=game.width/2-45,this.timeText.size),timeLeft<8&&(this.timeText.y=this.timeText.y+25),this.timer>gameOptions.timeLimit&&(game.time.events.remove(this.timerEvent),this.movingCrate.destroy(),this.timeText.destroy(),game.time.events.add(2*Phaser.Timer.SECOND,function(){pauseAllAudio(),this.crateGroup.forEach(function(e){e.body.static=!0},!0),this.removeEvent=game.time.events.loop(Phaser.Timer.SECOND/10,this.removeCrate,this)},this))},removeCrate:function(){if(this.crateGroup.children.length>0){var e=this.crateGroup.getChildAt(0),a=Math.round((game.height-GROUNDHEIGHT-e.y-CRATEHEIGHT/2)/CRATEHEIGHT)+1;this.score+=a,this.removeSound.play();var t=game.add.bitmapText(e.x,e.y,"smallfont",a.toString(),36);t.anchor.set(.5),this.cameraGroup.add(t),e.destroy()}else{var s=this.score-oldLevelScore;game.time.events.remove(this.removeEvent),pauseAllAudio(),game.add.image(game.width/2,170,"title2").anchor.set(.5,0),game.add.bitmapText(game.width/2,game.height/4+140,"font2","Level Score",56).anchor.set(.5),game.add.bitmapText(game.width/2,game.height/4+220,"font2",s.toString(),64).anchor.set(.5),localStorage.setItem(gameOptions.localStorageName,JSON.stringify({score:Math.max(this.score,this.savedData.score)}));var i=5*LEVEL+10;if(LEVEL>21&&(levelcheck=125),s>=i)this.victorySound.play(),game.add.bitmapText(game.width/2,game.height/4+320,"font2","Level Up",78).anchor.set(.5),localStorage.setItem("stackerScore",this.score),LEVEL++,localStorage.setItem("stackerLevel",LEVEL),levelScore=this.score,oldlevelScore=this.score,game.time.events.add(3*Phaser.Timer.SECOND,function(){playAdTime>timeBetweenAds&&(playAdTime=0,localStorage.setItem("showInterstatial",1))},this),game.time.events.add(6*Phaser.Timer.SECOND,function(){gameOptions.crateSpeed=gameOptions.crateSpeed-25,localStorage.setItem("showInterstatial",0),gameOptions.gravity=gameOptions.gravity+50,gameOptions.crateSpeed<=749&&(gameOptions.crateSpeed=750),gameOptions.fallingHeight>=700&&(gameOptions.fallingHeight=700),gameOptions.gravity>=2500&&(gameOptions.gravity=2500),game.state.start("PlayGame")},this);else{pauseAllAudio(),this.gameOverSound.play();document.getElementById("levelComplete");document.getElementById("goalHtml").innerHTML=i,document.getElementById("scoreHtml").innerHTML=s,document.getElementById("levelComplete").style.display="block",playAdTime>timeBetweenAds-45&&(playAdTime=0,game.time.events.add(2*Phaser.Timer.SECOND,function(){var e=localStorage.getItem("showSelfAd");0==e?(pauseAllAudio(),localStorage.setItem("showInterstatial",1)):1==selfAd1time&&1==e?(pauseAllAudio(),selfAd1time=0,localStorage.setItem("showSelfAd",1),localStorage.setItem("showInterstatial",1)):(localStorage.setItem("showSelfAd",0),localStorage.setItem("showInterstatial",1)),setTimeout(function(){localStorage.setItem("showInterstatial",0),pauseAllAudio()},8e3)},this)),game.time.events.add(5*Phaser.Timer.SECOND,function(){game.state.start("PlayGame"),pauseAllAudio()},this)}}}};