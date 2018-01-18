function drawScore() {
    context.fillStyle = "azure";
    context.font = "50px Arial";

    if (currentState == states.playing) {
        context.fillText(chicken.score, 15, 48);
        lifemeter0 = new Sprite(0, 0, 400, 128, "src/sprites/heart.png");
        lifemeter1 = new Sprite(0, 0, 400, 128, "src/sprites/heart.png");
        lifemeter2 = new Sprite(0, 0, 400, 128, "src/sprites/heart.png");
        lifemeter3 = new Sprite(0, 0, 400, 128, "src/sprites/heart.png");
        lifemeter4 = new Sprite(0, 0, 400, 128, "src/sprites/heart.png");
        lifemeter5 = new Sprite(0, 0, 400, 128, "src/sprites/heart.png");
        lifemeter6 = new Sprite(0, 0, 400, 128, "src/sprites/heart.png");
        lifemeter7 = new Sprite(0, 0, 32, 32, "src/sprites/heart.png");
        if (hitCount < 8 ){ lifemeter0.draw(lifemeterContext, 150, 55);}
        if (hitCount < 7) { lifemeter1.draw(lifemeterContext, 190, 55); }
        if (hitCount < 6) { lifemeter2.draw(lifemeterContext, 230, 55); }
        if (hitCount < 5) { lifemeter3.draw(lifemeterContext, 270, 55); }
        if (hitCount < 4) { lifemeter4.draw(lifemeterContext, 310, 55); }
        if (hitCount < 3) { lifemeter5.draw(lifemeterContext, 350, 55); }
        if (hitCount < 2) { lifemeter6.draw(lifemeterContext, 390, 55); }
        if (hitCount < 1) { lifemeter7.draw(lifemeterContext, 430, 55); }
       
    }

    if (currentState == states.lost) {
        hitCount = 0;
        facebook.style.display = "block";
        logo.style.display = "none";

        context.fillStyle = "#8a2be2";
        context.fillRect(Math.floor(WIDTH / 2 - 50), Math.floor(HEIGHT / 2 - 130), 100, 100);
        context.save();
        context.translate(Math.floor(WIDTH / 2), Math.floor(HEIGHT / 2 - 80));
        context.fillStyle = "#fff";

        if (chicken.score > rank) {
            context.fillText("New record!", -145, -65);
        }
        else if (rank < 10) {
            context.fillText("Best score " + rank, -135, -65);
        }
        else if (rank >= 10 && rank < 100) {
            context.fillText("Best score " + rank, -150, -65);
        } else {
            context.fillText("Best score " + rank, -165, -65);
        }

        if (chicken.score < 10) {
            context.fillText(chicken.score, -13, 19);
        }
        else if (chicken.score >= 10 && chicken.score < 100) {
            context.fillText(chicken.score, -26, 19);
        }
        else {
            context.fillText(chicken.score, -39, 19);
        }
        context.restore();
    }
}
