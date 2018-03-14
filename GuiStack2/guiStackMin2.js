var game, GROUNDHEIGHT, CRATEHEIGHT, levelScore = 0, oldLevelScore = 0, LEVEL = 1, gameOptions = { timeLimit: 60, gravity: 2e3, crateSpeed: 700, crateHorizontalRange: 540, fallingHeight: 650, localStorageName: "GuiStack_HighScore", gameWidth: 640, gameHeight: 960 }, CrateSrc = "crate1", alreadyclicked = !1; window.onload = function () { var e = window.innerWidth, a = window.innerHeight / e; a >= 1 && (a < 1.3 ? gameOptions.gameWidth = gameOptions.gameHeight / a : gameOptions.gameHeight = gameOptions.gameWidth * a), (game = new Phaser.Game(gameOptions.gameWidth, gameOptions.gameHeight, Phaser.CANVAS)).state.add("introToGame", introScene), game.state.add("PlayGame", playGame), game.state.start("introToGame"), document.getElementById("loadingGG").style.display = "none" }; var introScene = function () { }, levelUpScene = function () { }, timerI = 0; introScene.prototype = { preload: function () { game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, game.scale.pageAlignHorizontally = !0, game.scale.pageAlignVertically = !0, game.stage.disableVisibilityChange = !0, game.load.image("intro", "images/introBack.png"), game.load.image("playBtn1", "images/playButton.png"), game.load.image("tut1", "images/intro1.png"), game.load.image("tut2", "images/intro2.png"), game.load.image("tut3", "images/intro3.png"), game.load.audio("gameover", ["assets/sounds/gameover.mp3", "assets/sounds/gameover.ogg"]), game.load.bitmapFont("font", "assets/fonts/font.png", "assets/fonts/font.xml"), game.load.bitmapFont("smallfont", "assets/fonts/smallfont.png", "assets/fonts/smallfont.xml") }, create: function () { var e = game.add.image(0, 0, "intro"); e.width = game.width, e.height = game.height; var a = game.add.image(game.width / 2 - 100, game.height / 2 + 100, "playBtn1"); a.width = 200, a.height = 100, game.input.onDown.add(this.loadGame1, a) }, loadGame1: function () { if (0 == alreadyclicked) { alreadyclicked = !0; var e = game.add.image(game.width / 2 - 150, game.height / 2 - 20, "tut1"), a = game.add.image(game.width / 2 - 155, game.height / 2 - 20, "tut2"); a.visible = !1, e.width = 300, e.height = 300; setTimeout(function () { e.visible = !1, a.visible = !0, a.width = 300, a.height = 300 }, 1500), setTimeout(function () { a.visible = !1; var e = game.add.image(game.width / 2 - 155, game.height / 2 - 20, "tut3"); e.width = 300, e.height = 300 }, 3e3), setTimeout(function () { game.state.start("PlayGame") }, 5e3) } } }; var playGame = function () { }; function menuFunction() { var e = document.getElementById("myTopnav"); "topnav" === e.className ? e.className += " responsive" : e.className = "topnav" } function changeActive() { var e = document.getElementById(this); "active" === e.className ? e.className += "" : e.className = "active" } playGame.prototype = { preload: function () { game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, game.scale.pageAlignHorizontally = !0, game.scale.pageAlignVertically = !0, game.stage.disableVisibilityChange = !0, game.load.image("ground1", "assets/sprites/ground1.png"), game.load.image("ground2", "assets/sprites/ground2.png"), game.load.image("ground3", "assets/sprites/ground3.png"), game.load.image("ground4", "assets/sprites/ground4.png"), game.load.image("ground5", "assets/sprites/ground5.png"), game.load.image("ground6", "assets/sprites/ground6.png"), game.load.image("ground7", "assets/sprites/ground7.png"), game.load.image("ground8", "assets/sprites/ground8.png"), game.load.image("ground9", "assets/sprites/ground9.png"), game.load.image("ground10", "assets/sprites/ground9.png"), game.load.image("plat1", "assets/sprites/plat1.png"), game.load.image("plat2", "assets/sprites/plat2.png"), game.load.image("plat3", "assets/sprites/plat3.png"), game.load.image("plat4", "assets/sprites/plat4.png"), game.load.image("plat5", "assets/sprites/plat5.png"), game.load.image("plat6", "assets/sprites/plat6.png"), game.load.image("plat7", "assets/sprites/plat7.png"), game.load.image("plat8", "assets/sprites/plat8.png"), game.load.image("plat9", "assets/sprites/plat9.png"), game.load.image("plat10", "assets/sprites/plat10.png"), game.load.image("sky1", "assets/sprites/sky1.png"), game.load.image("sky2", "assets/sprites/sky2.png"), game.load.image("sky3", "assets/sprites/sky3.png"), game.load.image("sky4", "assets/sprites/sky4.png"), game.load.image("sky5", "assets/sprites/sky5.png"), game.load.image("sky6", "assets/sprites/sky6.png"), game.load.image("sky7", "assets/sprites/sky7.png"), game.load.image("sky8", "assets/sprites/sky8.png"), game.load.image("sky9", "assets/sprites/sky9.png"), game.load.image("sky10", "assets/sprites/sky10.png"), game.load.image("crate1", "assets/sprites/crate1.png"), game.load.image("crate2", "assets/sprites/crate2.png"), game.load.image("crate3", "assets/sprites/crate3.png"), game.load.image("crate4", "assets/sprites/crate4.png"), game.load.image("crate5", "assets/sprites/crate5.png"), game.load.image("crate6", "assets/sprites/crate6.png"), game.load.image("crate7", "assets/sprites/crate7.png"), game.load.image("crate8", "assets/sprites/crate8.png"), game.load.image("crate9", "assets/sprites/crate9.png"), game.load.image("crate10", "assets/sprites/crate10.png"), game.load.image("title", "assets/sprites/title.png"), game.load.image("title2", "assets/sprites/title2.png"), game.load.image("tap", "assets/sprites/tap.png"), game.load.audio("hit01", ["assets/sounds/hit01.mp3", "assets/sounds/hit01.ogg"]), game.load.audio("hit02", ["assets/sounds/hit02.mp3", "assets/sounds/hit02.ogg"]), game.load.audio("hit03", ["assets/sounds/hit03.mp3", "assets/sounds/hit03.ogg"]), game.load.audio("remove", ["assets/sounds/remove.mp3", "assets/sounds/remove.ogg"]), game.load.audio("gameover", ["assets/sounds/gameover.mp3", "assets/sounds/gameover.ogg"]), game.load.bitmapFont("font", "assets/fonts/font.png", "assets/fonts/font.xml"), game.load.bitmapFont("smallfont", "assets/fonts/smallfont.png", "assets/fonts/smallfont.xml") }, create: function () { !Phaser.Device.desktop && gameOptions.gameHeight < 768 && (game.scale.forceOrientation(!1, !0), game.scale.enterIncorrectOrientation.add(function () { game.paused = !0, document.querySelector("canvas").style.display = "none", document.getElementById("wrongorientation").style.display = "block" }), game.scale.leaveIncorrectOrientation.add(function () { game.paused = !1, document.querySelector("canvas").style.display = "block", document.getElementById("wrongorientation").style.display = "none" })), this.lastSoundPlayed = Date.now(), this.savedData = null == localStorage.getItem(gameOptions.localStorageName) ? { score: 0 } : JSON.parse(localStorage.getItem(gameOptions.localStorageName)), this.hitSound = [game.add.audio("hit01"), game.add.audio("hit02"), game.add.audio("hit03")], this.gameOverSound = game.add.audio("gameover"), this.removeSound = game.add.audio("remove"), this.score = 0, LEVEL > 1 && (this.score = levelScore, oldLevelScore = this.score), GROUNDHEIGHT = game.cache.getImage("ground1").height, CRATEHEIGHT = game.cache.getImage("crate1").height, this.firstCrate = !0; var e = LEVEL; e > 10 && e < 21 && (e -= 10), e > 20 && e < 31 && (e -= 20), e > 30 && e < 41 && (e -= 30), e > 40 && e < 51 && (e -= 40), e > 50 && e < 61 && (e -= 50); var a = "sky" + e, t = game.add.image(0, 0, a); t.width = game.width, t.height = game.height, this.cameraGroup = game.add.group(), this.crateGroup = game.add.group(), this.cameraGroup.add(this.crateGroup), game.physics.startSystem(Phaser.Physics.BOX2D), game.physics.box2d.gravity.y = gameOptions.gravity, this.canDrop = !0; var s = "ground" + e, i = "plat" + e; CrateSrc = "crate" + e; var g = Math.floor(9 * Math.random() + 2), o = (Math.floor(9 * Math.random()), game.add.sprite(game.width / 2, game.height, "ground1")); o.y = game.height - o.height / 2, o.loadTexture(s), game.add.bitmapText(game.width - game.width / 4, 70, "font", "Score", 45), game.add.bitmapText(game.width - game.width / 4 + 50, 105, "font", "" + this.score, 40), game.add.bitmapText(10, 70, "font", "Level", 45), game.add.bitmapText(55, 110, "font", "" + LEVEL, 40); var m = game.add.sprite(game.width / g, game.height, i); m.y = game.height - game.height / 2.6; var r = game.add.sprite(game.width - game.width / g, game.height, i); r.y = game.height - game.height / 2.8, this.movingCrate = game.add.sprite((game.width - gameOptions.crateHorizontalRange) / 2, game.height - GROUNDHEIGHT - gameOptions.fallingHeight, "crate1"), this.movingCrate.loadTexture(CrateSrc), this.movingCrate.anchor.set(.5), this.cameraGroup.add(this.movingCrate); game.add.tween(this.movingCrate).to({ x: (game.width + gameOptions.crateHorizontalRange) / 2 }, gameOptions.crateSpeed, Phaser.Easing.Linear.None, !0, 0, -1, !0); game.physics.box2d.enable(o), o.body.friction = 1, o.body.static = !0, o.body.setCollisionCategory(1), this.cameraGroup.add(o), game.physics.box2d.enable(m), m.body.friction = 1, m.body.static = !0, m.body.setCollisionCategory(1), this.cameraGroup.add(m), game.physics.box2d.enable(r), r.body.friction = 1, r.body.static = !0, r.body.setCollisionCategory(1), this.cameraGroup.add(r), game.input.onDown.add(this.dropCrate, this), this.menuGroup = game.add.group(); var n = game.add.sprite(game.width / 2, game.height - 240, "tap"); if (n.anchor.set(.5), this.menuGroup.add(n), LEVEL <= 1) { var d = game.add.image(game.width / 2, n.y - 470, "title"); d.anchor.set(.5, 0), this.menuGroup.add(d) } else { var h = game.add.image(game.width / 2, n.y - 470, "title2"); h.anchor.set(.5, 0), this.menuGroup.add(h) } var l = game.add.bitmapText(game.width / 2, game.height - 74, "smallfont", "YOUR TOP SCORE", 24); l.anchor.set(.5), this.menuGroup.add(l); var p = game.add.bitmapText(game.width / 2, game.height - 20, "font", this.savedData.score.toString(), 72); p.anchor.set(.5), this.menuGroup.add(p); game.add.tween(n).to({ alpha: 0 }, 150, Phaser.Easing.Cubic.InOut, !0, 0, -1, !0) }, dropCrate: function () { if (this.firstCrate && (this.firstCrate = !1, this.menuGroup.destroy(), this.timer = 0, this.timerEvent = game.time.events.loop(Phaser.Timer.SECOND, this.tick, this), this.timeText = game.add.bitmapText(game.width - game.width / 2 - 60, 60, "font", gameOptions.timeLimit.toString(), 72)), this.canDrop && this.timer <= gameOptions.timeLimit) { this.canDrop = !1, this.movingCrate.alpha = 0; var e = game.add.sprite(this.movingCrate.x, this.movingCrate.y, "crate1"); e.hit = !1, e.loadTexture(CrateSrc), game.physics.box2d.enable(e), e.body.friction = 1, e.body.bullet = !0, this.crateGroup.add(e), e.body.setCollisionCategory(1), e.body.setCategoryContactCallback(1, function (e, a, t, s, i, g) { Date.now() - this.lastSoundPlayed > 200 && this.timer <= gameOptions.timeLimit && (this.lastSoundPlayed = Date.now(), Phaser.ArrayUtils.getRandomItem(this.hitSound).play()), e.sprite.hit || (e.sprite.hit = !0, e.bullet = !1, this.getMaxHeight()) }, this) } }, update: function () { this.crateGroup.forEach(function (e) { e.y > game.height + e.height && (e.hit || this.getMaxHeight(), e.destroy()) }, this) }, scaleCamera: function (e) { game.add.tween(this.cameraGroup).to({ x: (game.width - game.width * e) / 2, y: game.height - game.height * e }, 200, Phaser.Easing.Quadratic.IN, !0); game.add.tween(this.cameraGroup.scale).to({ x: e, y: e }, 200, Phaser.Easing.Quadratic.IN, !0).onComplete.add(function () { this.canDrop = !0, this.movingCrate.alpha = 1 }, this) }, getMaxHeight: function () { var e = 0; this.crateGroup.forEach(function (a) { if (a.hit) { var t = Math.round((game.height - GROUNDHEIGHT - a.y - CRATEHEIGHT / 2) / CRATEHEIGHT) + 1; e = Math.max(t, e) } }, this), this.movingCrate.y = game.height - GROUNDHEIGHT - e * CRATEHEIGHT - gameOptions.fallingHeight; var a = game.height + CRATEHEIGHT * e, t = game.height / a; this.scaleCamera(t) }, tick: function () { this.timer++ , this.timeText.text = (gameOptions.timeLimit - this.timer).toString(), this.timer > gameOptions.timeLimit && (game.time.events.remove(this.timerEvent), this.movingCrate.destroy(), this.timeText.destroy(), game.time.events.add(2 * Phaser.Timer.SECOND, function () { this.crateGroup.forEach(function (e) { e.body.static = !0 }, !0), this.removeEvent = game.time.events.loop(Phaser.Timer.SECOND / 10, this.removeCrate, this) }, this)) }, removeCrate: function () { if (this.crateGroup.children.length > 0) { var e = this.crateGroup.getChildAt(0), a = Math.round((game.height - GROUNDHEIGHT - e.y - CRATEHEIGHT / 2) / CRATEHEIGHT) + 1; this.score += a, this.removeSound.play(); var t = game.add.bitmapText(e.x, e.y, "smallfont", a.toString(), 36); t.anchor.set(.5), this.cameraGroup.add(t), e.destroy() } else { var s = this.score - oldLevelScore; game.time.events.remove(this.removeEvent), this.gameOverSound.play(), game.add.bitmapText(game.width / 2, game.height / 4, "font", "Your Total Score", 56).anchor.set(.5), game.add.bitmapText(game.width / 2, game.height / 4 + 90, "font", this.score.toString(), 78).anchor.set(.5), game.add.bitmapText(game.width / 2, game.height / 2 - 80, "font", "Level Score", 36).anchor.set(.5), game.add.bitmapText(game.width / 2, game.height / 2 - 20, "font", this.score.toString(), 56).anchor.set(.5), localStorage.setItem(gameOptions.localStorageName, JSON.stringify({ score: Math.max(this.score, this.savedData.score) })); var i = 10 * LEVEL; if (LEVEL > 5 && (i = 50), s >= i) game.add.bitmapText(game.width / 2, game.height / 4 + 340, "smallfont", "Level Up", 48).anchor.set(.5), LEVEL += 1, levelScore = this.score, oldlevelScore = this.score, game.time.events.add(5 * Phaser.Timer.SECOND, function () { game.state.start("PlayGame") }, this); else game.add.bitmapText(game.width / 2, game.height / 4 + 330, "smallfont", "Get " + i + " to Level Up", 48).anchor.set(.5), game.time.events.add(7 * Phaser.Timer.SECOND, function () { game.state.start("PlayGame") }, this) } } };