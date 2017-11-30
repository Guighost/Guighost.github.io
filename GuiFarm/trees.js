goog.provide('farming.trees');
goog.require('lime.Sprite');

/**
 * trees elements
 * 
 * @param {} gameObj
 */
farming.Trees = function(gameObj, playerObj) {
    goog.base(this);
    this.setAnchorPoint(0, 0);
    this.setSize(gameObj.tile_size,gameObj.tile_size);
    this.setFill('images/bare_trees.png');
    console.log(this);
    this.state = this.EMPTY;
    
    //user input
    var trees = this;
    goog.events.listen(this,['mousedown', 'touchstart'], function(e) {
        e.event.stopPropagation();        
        if(trees.state == trees.EMPTY && playerObj.money >= gameObj.costPlowing) {
            //plow trees
            trees.setFill('images/plowed.png')
            trees.state = trees.PLOWED;
            
            //update player money
            playerObj.money -= gameObj.costPlowing;
            gameObj.updateMoney();
        }
        else if(trees.state == trees.PLOWED && playerObj.money >= gameObj.crops[playerObj.currentCrop].cost) {
            //plant
            trees.setFill('images/growing.png');
            trees.state = trees.GROWING;
            
            //store crop and left time for it to be ready and to die
            trees.crop = playerObj.currentCrop;
            trees.ripeTime = gameObj.crops[playerObj.currentCrop].time_to_ripe * 1000;
            trees.deathTime = gameObj.crops[playerObj.currentCrop].time_to_death * 1000;
            
            //update player money
            playerObj.money -= gameObj.crops[playerObj.currentCrop].cost;
            gameObj.updateMoney();
        }
        else if(trees.state == trees.READY ) {
            //harvest
            trees.setFill('images/bare_trees.png');
            trees.state = trees.EMPTY;
            
            //update player money
            playerObj.money += gameObj.crops[trees.crop].revenue;
            gameObj.updateMoney();
        }        
    });
    
    //growing plants
    dt = 1000;
    lime.scheduleManager.scheduleWithDelay(function() {
        if(this.state == this.GROWING) {            
            if(this.ripeTime <= 0) {
                this.state = this.READY;
                this.setFill('images/'+gameObj.crops[this.crop].image);
            }
            else {
                this.ripeTime -= dt;
            }
        }
        else if(this.state == this.READY) {
            if(this.deathTime <= 0) {
                this.state = this.EMPTY;
                this.setFill('images/bare_trees.png');
            }
            else {
                this.deathTime -= dt;
            }
        }
    }, this, dt);
}
goog.inherits(farming.trees, lime.Sprite);

//states
farming.trees.prototype.EMPTY = 0;
farming.trees.prototype.PLOWED = 1;
farming.trees.prototype.GROWING = 2;
farming.trees.prototype.READY = 3;