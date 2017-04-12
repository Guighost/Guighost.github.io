var spriteMan = document.getElementById("spriteMan1")
var xMode = 25;
function testBtn() {
    var background = document.getElementById("gameFrame")
    background.className = ""
    xMode = xMode -= 20;
    background.className = "clsMoveBack"
    spriteMan.style.transform = "translateY(-75px) translateX(" + xMode + "px)"
    setTimeout(function () {
        background.className = ""

    }, 500);
}
function testBtn2() {
    var background = document.getElementById("gameFrame");
   
    xMode = xMode += 20;
    background.className = "";
    background.className = "clsMoveFwd";
    spriteMan.className = " ";
    spriteMan.className = "heroMoveFwd";
    spriteMan.style.transform = "translateY(420px) translateX(" + xMode + "px)";
    

    
    setTimeout(function () {
        background.className = ""

    }, 500);
    
}
function drawMan() {
        spriteMan.y = 500;
}

