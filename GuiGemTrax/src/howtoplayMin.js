var infoText;var infoImage;howToPlay={init:function(){game.log();},create:function(){game.add.image(0,0,"background");infoText=game.add.bitmapText(0,240,"systemfont",game.global.texts.howToPlay[0],24);infoText.page=0;infoText.align="center";infoText.x=(game.width-infoText.textWidth)/2;infoImage=game.add.image(80,40,"instructions");game.input.onDown.add(this.nextPage,this);},nextPage:function(){if(infoText.page<game.global.texts.howToPlay.length-1){infoText.page++;infoImage.frame=infoText.page;infoText.text=game.global.texts.howToPlay[infoText.page]
infoText.updateText();infoText.x=(game.width-infoText.textWidth)/2;}else{var blackFade=game.add.sprite(0,0,"blackfade");blackFade.alpha=0;var fadeTween=game.add.tween(blackFade);fadeTween.to({alpha:1},500,Phaser.Easing.Cubic.Out,true);fadeTween.onComplete.add(function(){game.state.start("TheGame");},this);}}}