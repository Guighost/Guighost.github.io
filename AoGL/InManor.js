function level2() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var i = 0;
    var canvas2 = document.createElement("canvas2");
    var ctx2 = canvas.getContext("2d");
    canvas2.width = 500;
    canvas2.height = 300;
    var style = canvas2.style;
    style.marginLeft = "auto";
    style.marginRight = "auto";
    var parentStyle = canvas.parentElement.style;
    parentStyle.textAlign = "center";
    parentStyle.width = "100%";


    document.body.appendChild(canvas2, 100, 100);
    var timer;

    //Images//

    //Background
    var bg2Ready = false;
    var bg2Image = new Image();
    bg2Image.onload = function () {
        bg2Ready = true;
    };
    bg2Image.src = "images/InManor.png";

    //Hero Image
    // Hero image
    var heroReady = false;
    var heroImage = new Image();
    heroImage.onload = function () {
        heroReady = true;
    };
    heroImage.src = "images/knt1_fr1.png";




    ///////////////////////////////////////////////////////////




    /////////////////////////////////



    // Stop movement code:

    if (hero.x >= canvas.width - 25) { hero.x = canvas.width - 25; }
    if (hero.x <= 5) { hero.x = 5; }
    if (hero.y >= canvas.height - (heroImage.height + 10)) { hero.y = canvas.height - (heroImage.height + 10); }
    else if (hero.y <= 10) { hero.y = 10; }
    if (hero.y >= canvas.height - (heroImage.height + 100) && hero.x >= 260 && hero.x <= 350) { hero.x = oldx; }



    //////////////////////////////////////////////////////////////////
    var render2 = function () {

        ////draw Background ////
        if (bg2Ready) {
            ctx2.drawImage(bg2Image, 0, 0, [500], [300]);
        };

        //draw Hero///
        if (heroReady) {
            hero.x = canvas2.width / 2;
            hero.y = canvas2.height - 30;
        }
    }

    var main2 = function () {
        var now = Date.now();
        var delta = now - then;


        render2();



        then = now;
        i++;
        // Request to do this again ASAP
        requestAnimationFrame(main2);
    };
};