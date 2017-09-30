window.onload = function () {
    // Get the canvas and context
    var canvas2 = document.getElementById("viewport2");
    var context2 = canvas2.getContext("2d");
    var imgArray3 = new Array();
    imgArray3[0] = new Image();
    imgArray3[0].src = 'Images/Hero/idle_4.png';

    drawPlayer();


    function drawPlayer() {
        var plx = 01;
        var ply = 0;
        var plwidth = 35;
        var plheight = 40;
        context2.drawImage(imgArray3[0], plx, ply, plwidth, plheight);
    }
}