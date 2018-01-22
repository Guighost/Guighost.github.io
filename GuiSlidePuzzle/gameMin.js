var game, gameOptions = { gameWidth: 320, gameHeight: 420, spritesheetSize: 50, tileSize: 45, fieldSize: 6, tileTypes: 6, offsetX: 25, offsetY: 72, tweenSpeed: 25, fadeSpeed: 300, fallSpeed: 80 }, NO_DRAG = 0, HORIZONTAL_DRAG = 1, VERTICAL_DRAG = 2, GAME_STATE_IDLE = 0, GAME_STATE_DRAG = 1, GAME_STATE_STOP = 2, roundTime = 30, playerLevel = 1, playerScore = 0, matchesThisTime = 0, roundOver = !1, starCash = 0; void 0 === localStorage.starCash && (localStorage.starCash = 0, starCash = 0), starCash = parseInt(localStorage.starCash); var highScore = 0; void 0 === localStorage.GuiPuzzleSlide_highScore && (localStorage.GuiPuzzleSlide_highScore = 0, highScore = 0), highScore = parseInt(localStorage.GuiPuzzleSlide_highScore), window.onload = function () { (game = new Phaser.Game(gameOptions.gameWidth, gameOptions.gameHeight)).state.add("PlayGame", playGame), game.state.add("LevelUp", levelUp), game.state.start("PlayGame") }; var playGame = function (e) { }, levelUp = function (e) { }, themeSong, hideCover = !1; playGame.prototype = { preload: function () { game.load.spritesheet("tiles", "tiles.png", gameOptions.spritesheetSize, gameOptions.spritesheetSize), game.load.spritesheet("title", "title5.png", 300, 420), game.load.image("multiBonus", "multiMatch.png", 128, 128), game.load.image("levelUpPop", "levelUp.png", 150, 131), game.load.image("timeUp", "timeUp2.png", 128, 128), game.load.image("cover1", "borderedFull.png", gameOptions.gameWidth, gameOptions.gameHeight), game.load.image("slide1", "slide1.png", gameOptions.gameWidth, gameOptions.gameHeight), game.load.image("slide2", "slide2.png", gameOptions.gameWidth, gameOptions.gameHeight), game.load.image("slide3", "slide3.png", gameOptions.gameWidth, gameOptions.gameHeight), game.load.image("newGame", "newGame.png", 110, 45), game.load.audio("themeSong", "audio/gameLoop.mp3"), game.load.audio("wrongSnd", "audio/wrong.mp3"), game.load.audio("matchSnd", "audio/matched.mp3"), game.load.audio("bonusSnd", "audio/bonus.mp3"), game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, game.scale.pageAlignHorizontally = !0, game.scale.pageAlignVertically = !0 }, create: function () { function e() { setTimeout(function () { l.text = "Columns and Rows wrap around for you to make optimal matches" }, 3500), setTimeout(function () { l.text = "WATCH YOUR TIME - Earn the Level Goal at the bottom to gain Bonus Time" }, 7500), setTimeout(function () { l.text = "Earn GuiGhost STARCASH for each level you achieve!" }, 11e3), setTimeout(function () { l.text = "WHAT ARE YOU WAITING FOR?" }, 14e3), setTimeout(function () { l.text = "PLAY NOW!", e() }, 15600), setTimeout(function () { l.text = "Unique Match 3 Play  where players can slide blocks as far as they want" }, 17e3) } game.add.sprite(10, 0, "title"), themeSong = game.add.audio("themeSong"), matchSnd = game.add.audio("matchSnd"), wrongSnd = game.add.audio("wrongSnd"), bonusSnd = game.add.audio("bonusSnd"), sounds = [themeSong], game.sound.setDecodedCallback(sounds, function () { sounds.shift(), themeSong.loopFull(.4) }, this), timer = game.time.create(!1), timer.loop(1e3, this.updateCounter, this); var i = { font: "24px Arial", fill: "Yellow", align: "center" }; this.textStyle2 = { font: "18px Arial", fill: "Azure", align: "center" }, this.textStyle3 = { font: "28px Comic Sans MS", fill: "Black", align: "center" }, this.textStyle4 = { font: "16px Comic Sans MS", fill: "Green", align: "center" }, this.textStyle4 = { font: "12px Comic Sans MS", fill: "Yellow", align: "center" }, this.textStyle5 = { font: "20px Comic Sans MS", fill: "Yellow", align: "center", align: "center", wordWrap: !0, wordWrapWidth: 250 }; game.add.text(20, 345, "Level", i); this.levelScore = game.add.text(40, 371, playerLevel, i); game.add.text(235, 345, "Score", i); this.scoreScore = game.add.text(250, 371, playerScore, i), this.timerText = game.add.text(125, 46, "Time: " + roundTime, this.textStyle2); var t = 75 * playerLevel - playerScore; this.LevelUpText = game.add.text(106, 345, t + " pts to gain time ", this.textStyle4), this.tileArray = [], this.tilePool = [], this.tileGroup = game.add.group(), this.tileGroup.x = gameOptions.offsetX, this.tileGroup.y = gameOptions.offsetY, this.tileMask = game.add.graphics(this.tileGroup.x, this.tileGroup.y), this.tileMask.beginFill(16777215), this.tileMask.drawRect(0, 0, gameOptions.fieldSize * gameOptions.tileSize, gameOptions.fieldSize * gameOptions.tileSize), this.tileGroup.mask = this.tileMask, this.tileMask.visible = !0; for (var a = 0; a < gameOptions.fieldSize; a++)for (this.tileArray[a] = [], j = 0; j < gameOptions.fieldSize; j++)this.addTile(a, j); this.addTempTile(), game.input.onDown.add(this.pickTile, this), this.bonusGraphic = game.add.sprite(95, 50, "multiBonus"), this.bonusGraphic.visible = !1, this.gameCover = game.add.sprite(0, 0, "cover1"); var l = game.add.text(162, 190, "Unique Match 3 Play  where players can slide blocks as far as they want", this.textStyle5); e(), l.anchor.set(.5); var s = game.add.sprite(105, 255, "newGame"); s.inputEnabled = !0, s.events.onInputDown.add(function () { s.destroy(), this.gameCover.destroy(), l.destroy(), game.input.onDown.add(this.pickTile, this), timer.start() }, this), this.gameState = GAME_STATE_IDLE }, updateCounter: function () { (roundTime -= 1) <= 0 && (this.timeUp(), timer.destroy()), this.timerText.text = "Time: " + roundTime }, addTile: function (e, i) { var t = game.add.sprite(i * gameOptions.tileSize, e * gameOptions.tileSize, "tiles"); t.width = gameOptions.tileSize, t.height = gameOptions.tileSize; do { var a = game.rnd.integerInRange(0, gameOptions.tileTypes - 1); this.tileArray[e][i] = { tileSprite: t, tileValue: a, isEmpty: !1 } } while (this.isMatch(e, i)); t.frame = a, this.tileGroup.add(t) }, addTempTile: function () { this.tempTile = game.add.sprite(0, 0, "tiles"), this.tempTile.width = gameOptions.tileSize, this.tempTile.height = gameOptions.tileSize, this.tempTile.visible = !1, this.tileGroup.add(this.tempTile) }, pickTile: function (e) { this.movingRow = Math.floor((e.position.y - gameOptions.offsetY) / gameOptions.tileSize), this.movingCol = Math.floor((e.position.x - gameOptions.offsetX) / gameOptions.tileSize), this.movingRow >= 0 && this.movingCol >= 0 && this.movingRow < gameOptions.fieldSize && this.movingCol < gameOptions.fieldSize && (this.dragDirection = NO_DRAG, game.input.onDown.remove(this.pickTile, this), game.input.onUp.add(this.releaseTile, this), game.input.addMoveCallback(this.moveTile, this)) }, update: function () { switch (this.gameState) { case GAME_STATE_DRAG: this.handleDrag(); break; case GAME_STATE_STOP: this.handleStop() }this.gameState = GAME_STATE_IDLE }, handleDrag: function () { switch (this.dragDirection) { case HORIZONTAL_DRAG: this.tempTile.visible = !1, this.tempTile.y = this.movingRow * gameOptions.tileSize; var e = Math.floor(this.distX / gameOptions.tileSize) % gameOptions.fieldSize; e >= 0 ? this.tempTile.frame = this.tileArray[this.movingRow][gameOptions.fieldSize - 1 - e].tileValue : (e = -1 * e - 1, this.tempTile.frame = this.tileArray[this.movingRow][e].tileValue); for (a = 0; a < gameOptions.fieldSize; a++)this.tileArray[this.movingRow][a].tileSprite.x = (a * gameOptions.tileSize + this.distX) % (gameOptions.tileSize * gameOptions.fieldSize), this.tileArray[this.movingRow][a].tileSprite.x < 0 && (this.tileArray[this.movingRow][a].tileSprite.x += gameOptions.tileSize * gameOptions.fieldSize); var i = this.distX % gameOptions.tileSize; i > 0 && (this.tempTile.x = i - gameOptions.tileSize, this.tempTile.visible = !0), i < 0 && (this.tempTile.x = i, this.tempTile.visible = !0); break; case VERTICAL_DRAG: this.tempTile.visible = !1, this.tempTile.x = this.movingCol * gameOptions.tileSize; var t = Math.floor(this.distY / gameOptions.tileSize) % gameOptions.fieldSize; t >= 0 ? this.tempTile.frame = this.tileArray[gameOptions.fieldSize - 1 - t][this.movingCol].tileValue : (t = -1 * t - 1, this.tempTile.frame = this.tileArray[t][this.movingCol].tileValue); for (var a = 0; a < gameOptions.fieldSize; a++)this.tileArray[a][this.movingCol].tileSprite.y = (a * gameOptions.tileSize + this.distY) % (gameOptions.tileSize * gameOptions.fieldSize), this.tileArray[a][this.movingCol].tileSprite.y < 0 && (this.tileArray[a][this.movingCol].tileSprite.y += gameOptions.tileSize * gameOptions.fieldSize); var l = this.distY % gameOptions.tileSize; l > 0 && (this.tempTile.y = l - gameOptions.tileSize, this.tempTile.visible = !0), l < 0 && (this.tempTile.y = l, this.tempTile.visible = !0) } }, handleStop: function () { switch (this.dragDirection) { case HORIZONTAL_DRAG: var e = Math.floor(this.distX / (gameOptions.tileSize / 2)), i = []; if ((e = Math.ceil(e / 2) % gameOptions.fieldSize) > 0) for (a = 0; a < gameOptions.fieldSize; a++)i[(e + a) % gameOptions.fieldSize] = this.tileArray[this.movingRow][a].tileValue; else for (a = 0; a < gameOptions.fieldSize; a++)i[a] = this.tileArray[this.movingRow][(Math.abs(e) + a) % gameOptions.fieldSize].tileValue; t = this.distX % gameOptions.tileSize; for (Math.abs(t) > gameOptions.tileSize / 2 && (t < 0 ? t += gameOptions.tileSize : t -= gameOptions.tileSize), a = 0; a < gameOptions.fieldSize; a++)this.tileArray[this.movingRow][a].tileValue = i[a], this.tileArray[this.movingRow][a].tileSprite.frame = i[a], this.tileArray[this.movingRow][a].tileSprite.x = a * gameOptions.tileSize + t, game.add.tween(this.tileArray[this.movingRow][a].tileSprite).to({ x: a * gameOptions.tileSize }, gameOptions.tweenSpeed, Phaser.Easing.Cubic.Out, !0); l = -gameOptions.tileSize; t < 0 && (this.tempTile.x += gameOptions.tileSize * gameOptions.fieldSize, l = gameOptions.fieldSize * gameOptions.tileSize), (s = game.add.tween(this.tempTile).to({ x: l }, gameOptions.tweenSpeed, Phaser.Easing.Cubic.Out, !0)).onComplete.add(function () { if (this.matchInBoard()) this.handleMatches(); else if (wrongSnd.play(), 0 != e) { if (e *= -1, i = [], e > 0) for (t = 0; t < gameOptions.fieldSize; t++)i[(e + t) % gameOptions.fieldSize] = this.tileArray[this.movingRow][t].tileValue; else for (var t = 0; t < gameOptions.fieldSize; t++)i[t] = this.tileArray[this.movingRow][(Math.abs(e) + t) % gameOptions.fieldSize].tileValue; for (t = 0; t < gameOptions.fieldSize; t++) { this.tileArray[this.movingRow][t].tileValue = i[t], this.tileArray[this.movingRow][t].tileSprite.frame = i[t], this.tileArray[this.movingRow][t].tileSprite.x = t * gameOptions.tileSize; var a = game.add.tween(this.tileArray[this.movingRow][t].tileSprite).to({ alpha: .5 }, gameOptions.tweenSpeed / 8, Phaser.Easing.Bounce.Out, !0, 0, 8, !0) } a.onComplete.add(function () { 1 == a.manager.getAll().length && game.input.onDown.add(this.pickTile, this) }, this) } else game.input.onDown.add(this.pickTile, this) }, this); break; case VERTICAL_DRAG: var e = Math.floor(this.distY / (gameOptions.tileSize / 2)), i = []; if ((e = Math.ceil(e / 2) % gameOptions.fieldSize) > 0) for (a = 0; a < gameOptions.fieldSize; a++)i[(e + a) % gameOptions.fieldSize] = this.tileArray[a][this.movingCol].tileValue; else for (a = 0; a < gameOptions.fieldSize; a++)i[a] = this.tileArray[(Math.abs(e) + a) % gameOptions.fieldSize][this.movingCol].tileValue; var t = this.distY % gameOptions.tileSize; Math.abs(t) > gameOptions.tileSize / 2 && (t < 0 ? t += gameOptions.tileSize : t -= gameOptions.tileSize); for (var a = 0; a < gameOptions.fieldSize; a++)this.tileArray[a][this.movingCol].tileValue = i[a], this.tileArray[a][this.movingCol].tileSprite.frame = i[a], this.tileArray[a][this.movingCol].tileSprite.y = a * gameOptions.tileSize + t, game.add.tween(this.tileArray[a][this.movingCol].tileSprite).to({ y: a * gameOptions.tileSize }, gameOptions.tweenSpeed, Phaser.Easing.Cubic.Out, !0); var l = -gameOptions.tileSize; t < 0 && (this.tempTile.y += gameOptions.tileSize * gameOptions.fieldSize, l = gameOptions.fieldSize * gameOptions.tileSize); var s = game.add.tween(this.tempTile).to({ y: l }, gameOptions.tweenSpeed, Phaser.Easing.Cubic.Out, !0); s.onComplete.add(function () { if (this.matchInBoard()) this.handleMatches(); else if (wrongSnd.play(), 0 != e) { if (e *= -1, i = [], e > 0) for (t = 0; t < gameOptions.fieldSize; t++)i[(e + t) % gameOptions.fieldSize] = this.tileArray[t][this.movingCol].tileValue; else for (t = 0; t < gameOptions.fieldSize; t++)i[t] = this.tileArray[(Math.abs(e) + t) % gameOptions.fieldSize][this.movingCol].tileValue; for (var t = 0; t < gameOptions.fieldSize; t++) { this.tileArray[t][this.movingCol].tileValue = i[t], this.tileArray[t][this.movingCol].tileSprite.frame = i[t], this.tileArray[t][this.movingCol].tileSprite.y = t * gameOptions.tileSize; var a = game.add.tween(this.tileArray[t][this.movingCol].tileSprite).to({ alpha: .5 }, gameOptions.tweenSpeed / 8, Phaser.Easing.Bounce.Out, !0, 0, 8, !0) } a.onComplete.add(function () { 1 == a.manager.getAll().length && game.input.onDown.add(this.pickTile, this) }, this) } else game.input.onDown.add(this.pickTile, this) }, this) }this.dragDirection = NO_DRAG }, handleMatches: function () { this.tilesToRemove = []; for (e = 0; e < gameOptions.fieldSize; e++) { this.tilesToRemove[e] = []; for (i = 0; i < gameOptions.fieldSize; i++)this.tilesToRemove[e][i] = 0 } this.handleHorizontalMatches(), this.handleVerticalMatches(), this.checkMultiMatch(matchesThisTime); for (var e = 0; e < gameOptions.fieldSize; e++)for (var i = 0; i < gameOptions.fieldSize; i++)if (0 != this.tilesToRemove[e][i]) { var t = game.add.tween(this.tileArray[e][i].tileSprite).to({ alpha: 0 }, gameOptions.fadeSpeed, Phaser.Easing.Linear.None, !0); this.tilePool.push(this.tileArray[e][i].tileSprite), t.onComplete.add(function (e) { 1 == t.manager.getAll().length && this.fillVerticalHoles() }, this), this.tileArray[e][i].isEmpty = !0 } }, fillVerticalHoles: function () { for (var e = gameOptions.fieldSize - 2; e >= 0; e--)for (var i = 0; i < gameOptions.fieldSize; i++)if (!this.tileArray[e][i].isEmpty) { var t = this.countSpacesBelow(e, i); t && this.moveDownTile(e, i, e + t, !1) } for (e = 0; e < gameOptions.fieldSize; e++) { var a = this.countSpacesBelow(-1, e); for (i = a - 1; i >= 0; i--) { var l = this.tilePool.shift(); l.y = (i - a) * gameOptions.tileSize, l.x = e * gameOptions.tileSize, l.alpha = 1; var s = game.rnd.integerInRange(0, gameOptions.tileTypes - 1); l.frame = s, this.tileArray[i][e] = { tileSprite: l, tileValue: s, isEmpty: !1 }, this.moveDownTile(0, e, i, !0) } } }, moveDownTile: function (e, i, t, a) { if (!a) { var l = this.tileArray[e][i].tileSprite, s = this.tileArray[e][i].tileValue; this.tileArray[t][i] = { tileSprite: l, tileValue: s, isEmpty: !1 }, this.tileArray[e][i].isEmpty = !0 } var o = t - this.tileArray[t][i].tileSprite.y / gameOptions.tileSize, n = game.add.tween(this.tileArray[t][i].tileSprite).to({ y: t * gameOptions.tileSize }, o * gameOptions.fallSpeed, Phaser.Easing.Linear.None, !0); n.onComplete.add(function () { 1 == n.manager.getAll().length && (this.matchInBoard() ? this.handleMatches() : game.input.onDown.add(this.pickTile, this)) }, this) }, handleHorizontalMatches: function () { for (var e = 0; e < gameOptions.fieldSize; e++)for (var i = 1, t = -1, a = 0, l = 0; l < gameOptions.fieldSize; l++)if (this.tileAt(e, l).tileValue == t && i++ , this.tileAt(e, l).tileValue != t || l == gameOptions.fieldSize - 1) { if (i > 2) { var s = l - 1; this.tileAt(e, l).tileValue == t && (s = l); for (var o = a; o <= s; o++)this.tilesToRemove[e][o]++ , playerScore += 1; matchesThisTime++ } 4 == i && (playerScore += 1), 5 == i && (playerScore += 5), 6 == i && (playerScore += 14), this.scoreScore.text = playerScore, this.checkLevelUp(playerScore), pointsToGo = 75 * playerLevel - playerScore, this.LevelUpText.text = pointsToGo + " pts to gain time ", t = this.tileAt(e, l).tileValue, i = 1, a = l } }, handleVerticalMatches: function () { for (var e = 0; e < gameOptions.fieldSize; e++)for (var i = 1, t = -1, a = 0, l = 0; l < gameOptions.fieldSize; l++)if (this.tileAt(l, e).tileValue == t && i++ , this.tileAt(l, e).tileValue != t || l == gameOptions.fieldSize - 1) { if (i > 2) { var s = l - 1; this.tileAt(l, e).tileValue == t && (s = l); for (var o = a; o <= s; o++)this.tilesToRemove[o][e]++ , playerScore += 1; matchesThisTime++ } 4 == i && (playerScore += 1), 5 == i && (playerScore += 5), 6 == i && (playerScore += 14), this.scoreScore.text = playerScore, this.checkLevelUp(playerScore), pointsToGo = 75 * playerLevel - playerScore, this.LevelUpText.text = pointsToGo + " pts to gain time ", t = this.tileAt(l, e).tileValue, i = 1, a = l } }, moveTile: function (e) { if (this.gameState = GAME_STATE_DRAG, this.distX = e.position.x - e.positionDown.x, this.distY = e.position.y - e.positionDown.y, this.dragDirection == NO_DRAG && e.position.distance(e.positionDown) > 5) { var i = Math.abs(Math.atan2(this.distY, this.distX)); i > Math.PI / 4 && i < 3 * Math.PI / 4 ? this.dragDirection = VERTICAL_DRAG : this.dragDirection = HORIZONTAL_DRAG } }, releaseTile: function () { this.gameState = GAME_STATE_STOP, game.input.onUp.remove(this.releaseTile, this), game.input.deleteMoveCallback(this.moveTile, this) }, tileAt: function (e, i) { return !(e < 0 || e >= gameOptions.fieldSize || i < 0 || i >= gameOptions.fieldSize) && this.tileArray[e][i] }, isHorizontalMatch: function (e, i) { return this.tileAt(e, i).tileValue == this.tileAt(e, i - 1).tileValue && this.tileAt(e, i).tileValue == this.tileAt(e, i - 2).tileValue }, isVerticalMatch: function (e, i) { return this.tileAt(e, i).tileValue == this.tileAt(e - 1, i).tileValue && this.tileAt(e, i).tileValue == this.tileAt(e - 2, i).tileValue }, isMatch: function (e, i) { return this.isHorizontalMatch(e, i) || this.isVerticalMatch(e, i) }, matchInBoard: function () { for (var e = 0; e < gameOptions.fieldSize; e++)for (var i = 0; i < gameOptions.fieldSize; i++)if (this.isMatch(e, i)) return !0; return !1 }, countSpacesBelow: function (e, i) { for (var t = 0, a = e + 1; a < gameOptions.fieldSize; a++)this.tileArray[a][i].isEmpty && t++; return t }, checkLevelUp: function (e) { if (e >= 75 * playerLevel) { var i = game.add.sprite(80, 275, "levelUpPop"); setTimeout(function () { i.alpha = .8 }, 900), setTimeout(function () { i.alpha = .4 }, 1400), setTimeout(function () { i.visible = !1 }, 1500), playerLevel += 1, roundTime += 30, this.levelScore.text = playerLevel } }, checkMultiMatch: function (e) { e >= 2 ? (bonusSnd.play(), this.showBonus(matchesThisTime), matchesThisTime = 0) : (matchesThisTime = 0, matchSnd.play()) }, showBonus: function (e) { this.bonusGraphic.visible = !0, this.bonusGraphic.y = 10, playerScore += 5; var i = this.bonusGraphic; setTimeout(function () { i.alpha = .8 }, 900), setTimeout(function () { i.alpha = .4 }, 1400), setTimeout(function () { i.visible = !1, playerScore += 5 }, 1500) }, timeUp: function () { roundOver = !0, this.tileGroup.visible = !1; game.add.sprite(35, 80, "timeUp"); var e = game.add.sprite(105, 285, "newGame"); e.inputEnabled = !0, e.events.onInputDown.add(function () { location.reload() }, this), hiScore = parseInt(localStorage.GuiPuzzleSlide_highScore), levelTxtOver = game.add.text(150, 180, "+" + (playerLevel - 1), this.textStyle3), playerLevel > 1 && (starCash += playerLevel - 1, localStorage.starCash = starCash), playerScore >= highScore && (highScore = playerScore, highScoreTxt2 = game.add.text(100, 260, "A New High Score! ", this.textStyle4), localStorage.setItem("GuiPuzzleSlide_highScore", highScore)), highScoreTxt = game.add.text(90, 240, "Previous Best: " + hiScore, this.textStyle2) } };