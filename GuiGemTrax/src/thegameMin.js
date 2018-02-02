var tileGroup, arrowGroup, pointsGroup, tileArray = [], pointsSpriteArray = [], pointsInternalArray = [], timeBar, timeLeft, arrowArray = [], visitedTiles = [], operationsInQueue = 0, scoreText, score, highScore2, emitter, pop = [], remove = [], tick = [], levelText2; theGame = { init: function () { game.log() }, create: function () { this.savedData = null == localStorage.getItem("GuiGemTrax_BestScore") ? { savedScore: 0 } : localStorage.getItem("GuiGemTrax_BestScore"), console.log(this.savedData), highScore2 = this.savedData.savedScore, console.log("highscore = " + highScore2), game.global.highScore = highScore2, game.add.image(0, 0, "background"); var e = game.add.button(286, 446, "settings", this.toggleSound, this); game.global.playSounds ? e.frame = 0 : e.frame = 1, this.createLevel(); var a = game.add.image(10, 0, "gametitle3"); a.x = game.width / 2 - a.width / 2; game.add.image(10, 0, "logo50"), game.add.bitmapText(259, 7, "systemfont", "Level", 18); levelText2 = game.add.bitmapText(273, 27, "scorefont", game.global.playerLevel, 22); var l = game.add.image(10, 412, "timebar"); game.add.image(10, 352, "multiBack").alpha = .7, l.alpha = .2, (timeBar = game.add.image(10, 412, "timebar")).cropEnabled = !0, pop[0] = game.add.audio("pop_1", 1), pop[1] = game.add.audio("pop_2", 1), pop[2] = game.add.audio("pop_3", 1), remove[0] = game.add.audio("remove_1", 1), remove[1] = game.add.audio("remove_2", 1), remove[2] = game.add.audio("remove_3", 1), tick[0] = game.add.audio("tick_1", 1), tick[1] = game.add.audio("tick_2", 1), tick[2] = game.add.audio("tick_3", 1), (scoreText = game.add.bitmapText(130, 440, "scorefont", "        ", 36)).align = "center", scoreText.x = (game.width - scoreText.textWidth) / 2 - 40, game.input.onDown.add(this.pickTile, this) }, createLevel: function () { score = 0, timeLeft = game.global.gameTime, tileGroup = game.add.group(), arrowGroup = game.add.group(), pointsGroup = game.add.group(), (emitter = game.add.emitter(0, 0, 100)).gravity = 300, emitter.minParticleScale = .3, emitter.maxParticleScale = .45; for (var e = 0; e < game.global.fieldSize; e++) { tileArray[e] = []; for (var a = 0; a < game.global.fieldSize; a++)this.addTile(e, a) } for (e = 0; e < game.global.fieldSize; e++) { var l = game.global.offsetX + e * game.global.tileSize + game.global.tileSize / 2, i = game.global.offsetY + game.global.fieldSize * game.global.tileSize + game.global.tileSize / 2, t = game.add.image(l, i, "points"); t.anchor.setTo(.5), pointsSpriteArray[e] = t, pointsGroup.add(t) } this.shufflePoints(), game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this) }, addTile: function (e, a) { var l = game.rnd.between(0, game.global.tileTypes - 1), i = game.global.offsetX + a * game.global.tileSize + game.global.tileSize / 2, t = game.global.offsetY + e * game.global.tileSize + game.global.tileSize / 2, o = game.add.sprite(i, t, "tiles"); o.frame = l, o.angle = game.rnd.between(-20, 20), o.anchor.setTo(.5), tileArray[e][a] = o, tileGroup.add(o) }, pickTile: function () { arrowArray = [], visitedTiles = [], startX = game.input.worldX - game.global.offsetX, startY = game.input.worldY - game.global.offsetY; var e = Math.floor(startY / game.global.tileSize), a = Math.floor(startX / game.global.tileSize); if (timeLeft > 0 && e >= 0 && a >= 0 && e < game.global.fieldSize && a < game.global.fieldSize) { if (game.global.playSounds) { var l = game.rnd.between(0, pop.length - 1); pop[l].play("", 0, 1, !1) } startColor = tileArray[e][a].frame, tileArray[e][a].alpha = .5, visitedTiles.push({ row: e, col: a }), game.input.onDown.remove(this.pickTile, this), game.input.onUp.add(this.releaseTile, this), moveIndex = game.input.addMoveCallback(this.moveTile, this) } }, moveTile: function () { var e = game.input.worldX - game.global.offsetX, a = game.input.worldY - game.global.offsetY, l = Math.floor(a / game.global.tileSize), i = Math.floor(e / game.global.tileSize); if (timeLeft > 0 && l >= 0 && i >= 0 && l < game.global.fieldSize && i < game.global.fieldSize) { var t = e - (i * game.global.tileSize + game.global.tileSize / 2), o = a - (l * game.global.tileSize + game.global.tileSize / 2); if (t * t + o * o < game.global.tolerance && (l != visitedTiles[visitedTiles.length - 1].row || i != visitedTiles[visitedTiles.length - 1].col)) if (this.isTilePicked({ row: l, col: i })) { if (l == visitedTiles[visitedTiles.length - 2].row && i == visitedTiles[visitedTiles.length - 2].col) { if (tileArray[visitedTiles[visitedTiles.length - 1].row][visitedTiles[visitedTiles.length - 1].col].alpha = 1, this.removeLastArrow(), game.global.playSounds) { g = game.rnd.between(0, pop.length - 1); pop[g].play("", 0, 1, !1) } visitedTiles.pop() } } else if (Math.abs(l - visitedTiles[visitedTiles.length - 1].row) <= 1 && Math.abs(i - visitedTiles[visitedTiles.length - 1].col) <= 1) { var r = tileArray[l][i].frame; if (startColor == r) { if (game.global.playSounds) { var g = game.rnd.between(0, pop.length - 1); pop[g].play("", 0, 1, !1) } tileArray[l][i].alpha = .5, this.placeArrow(l, i), arrowArray.length > 1 && (arrowArray[arrowArray.length - 2].frame -= 2), visitedTiles.push({ row: l, col: i }) } } } }, releaseTile: function () { game.input.onUp.remove(this.releaseTile, this), game.input.deleteMoveCallback(this.moveTile, this); for (var e = 0; e < arrowArray.length; e++)arrowArray[e].destroy(); for (e = 0; e < visitedTiles.length; e++)tileArray[visitedTiles[e].row][visitedTiles[e].col].alpha = 1; if (timeLeft > 0 && visitedTiles.length > 2) { if (game.global.playSounds) { var a = game.rnd.between(0, remove.length - 1); remove[a].play("", 0, 1, !1) } for (e = 0; e < visitedTiles.length; e++) { if (emitter.x = visitedTiles[e].col * game.global.tileSize + game.global.tileSize / 2 + game.global.offsetX, emitter.y = visitedTiles[e].row * game.global.tileSize + game.global.tileSize / 2 + game.global.offsetY, emitter.makeParticles("tiles", startColor), emitter.start(!0, 2e3, 250, 2), emitter.update(), (score += game.global.pointsArray[pointsInternalArray[visitedTiles[e].col]] * visitedTiles.length) >= 1e5 * game.global.playerLevel && score <= 1e5 * (game.global.playerLevel + 1)) { game.global.playerLevel += 1, 3 != game.global.playerLevel && 6 != game.global.playerLevel && 9 != game.global.playerLevel && 12 != game.global.playerLevel || (console.log("%c  level up 3 - Add a new Tile ", "color:white;background:blue"), game.global.tileTypes += 1, game.global.tileTypes > 8 && (game.global.tileTypes = 8)), levelText2.text = game.global.playerLevel, (timeLeft += 30) > game.global.gameTime && (timeLeft = game.global.gameTime); var l = game.add.image(game.width / 2 - 75, 310, "levelUp"); game.time.events.add(1 * Phaser.Timer.SECOND, function () { game.add.tween(l).to({ alpha: 0 }, 2e3, Phaser.Easing.Linear.None, !0) }, this), game.time.events.add(3 * Phaser.Timer.SECOND, function () { l.destroy() }, this) } scoreText.text = ("        " + score).slice(-8), tileArray[visitedTiles[e].row][visitedTiles[e].col].destroy(), tileArray[visitedTiles[e].row][visitedTiles[e].col] = null } this.tilesFallDown() } else this.input.onDown.add(this.pickTile, this) }, tilesFallDown: function () { for (var e = game.global.fieldSize - 1; e >= 0; e--)for (var a = 0; a < game.global.fieldSize; a++)if (null != tileArray[e][a]) { var l = this.holesBelow(e, a); if (l > 0) { operationsInQueue++; var i = game.add.tween(tileArray[e][a]); i.to({ y: game.global.offsetY + (e + l) * game.global.tileSize + game.global.tileSize / 2 }, game.global.tweenSpeed, Phaser.Easing.Cubic.Out, !0), i.onComplete.add(this.fallDownComplete, this), tileArray[e + l][a] = tileArray[e][a], tileArray[e][a] = null } } this.createNewTiles() }, fallDownComplete: function () { 0 == --operationsInQueue && game.input.onDown.add(this.pickTile, this) }, createNewTiles: function () { for (var e = 0; e < game.global.fieldSize; e++)for (var a = this.holesBelow(-1, e), l = 0; l < a; l++) { var i = game.rnd.between(0, game.global.tileTypes - 1), t = game.global.offsetX + e * game.global.tileSize + game.global.tileSize / 2, o = game.global.offsetY - (a - l) * game.global.tileSize - game.global.tileSize / 2; theTile = game.add.sprite(t, o, "tiles"), theTile.frame = i, theTile.angle = game.rnd.between(-20, 20), theTile.anchor.setTo(.5), tileArray[l][e] = theTile, tileGroup.add(theTile), operationsInQueue++; var r = game.add.tween(tileArray[l][e]); r.to({ y: game.global.offsetY + l * game.global.tileSize + game.global.tileSize / 2 }, game.global.tweenSpeed, Phaser.Easing.Cubic.Out, !0), r.onComplete.add(this.fallDownComplete, this) } pointsTween = game.add.tween(pointsGroup), pointsTween.to({ alpha: 0 }, 400, Phaser.Easing.Cubic.Out, !0), pointsTween.onComplete.add(function () { this.shufflePoints(), pointsGroup.alpha = 1 }, this) }, isTilePicked: function (e) { for (var a = 0; a < visitedTiles.length; a++)if (e.col == visitedTiles[a].col && e.row == visitedTiles[a].row) return !0; return !1 }, placeArrow: function (e, a) { var l = game.global.offsetX + visitedTiles[visitedTiles.length - 1].col * game.global.tileSize + game.global.tileSize / 2, i = game.global.offsetY + visitedTiles[visitedTiles.length - 1].row * game.global.tileSize + game.global.tileSize / 2, t = game.add.sprite(l, i, "arrows"); t.anchor.setTo(.5); var o = visitedTiles[visitedTiles.length - 1].row - e, r = visitedTiles[visitedTiles.length - 1].col - a; Math.abs(o) + Math.abs(r) == 1 ? t.frame = 2 : t.frame = 3; var g = 10 * o + r; 10 != g && 9 != g || (t.angle = 90), -10 != g && -9 != g || (t.angle = 270), -1 != g && -11 != g || (t.angle = 180), arrowGroup.add(t), arrowArray.push(t) }, removeLastArrow: function () { arrowArray[arrowArray.length - 1].destroy(), arrowArray.pop(), arrowArray.length > 0 && (arrowArray[arrowArray.length - 1].frame += 2) }, holesBelow: function (e, a) { for (var l = 0, i = e + 1; i < game.global.fieldSize; i++)null == tileArray[i][a] && l++; return l }, updateCounter: function () { if (timeLeft-- , timeBar.cropRect = new Phaser.Rectangle(0, 0, 5 * timeLeft, 12), timeBar.updateCrop(), timeLeft <= 0 && this.gameOver(), timeLeft <= 9 && game.global.playSounds) { var e = game.rnd.between(0, tick.length - 1); tick[e].play("", 0, 1, !1) } }, gameOver: function () { var e = this.add.sprite(0, 0, "blackfade"); e.alpha = 0; var a = this.add.tween(e); a.to({ alpha: 1 }, 500, Phaser.Easing.Cubic.Out, !0), a.onComplete.add(function () { game.state.start("GameOver", !0, !1, score) }, this) }, shufflePoints: function () { pointsInternalArray = []; for (var e = 0; e < game.global.pointsArray.length; e++)pointsInternalArray.push(e); for (e = 0; e < game.global.pointsArray.length; e++) { var a = game.rnd.between(0, pointsInternalArray.length - 1), l = game.rnd.between(0, pointsInternalArray.length - 1), i = pointsInternalArray[a]; pointsInternalArray[a] = pointsInternalArray[l], pointsInternalArray[l] = i } for (e = 0; e < game.global.pointsArray.length; e++)pointsSpriteArray[e].frame = pointsInternalArray[e] }, toggleSound: function (e) { e.frame = 1 - e.frame, game.global.playSounds = !game.global.playSounds } };