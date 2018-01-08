let canvasCreator = {
    id: 'canvas',
    zIndex: 0,
    contextMode: '2d',
    width: WIDTH,
    height: HEIGHT,

    create: function () {
        canvas = document.createElement("canvas");
       
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.id = this.id;
        canvas.style.zIndex = this.zIndex;
        //console.log((this.height / this.width) + " ratio");
        //if (window.innerWidth <= 570) {
        //    viewport = document.querySelector("meta[name=viewport]");
        //    viewport.setAttribute('content', 'width=device-width, initial-scale= 0.6, maximum-scale= 0.6, user-scalable=0');
        //}
        //if (window.innerHeight < canvas.height) {
        //    canvas.height = (window.innerHeight - 15);
        //    canvas.width = (canvas.height * 1.5);
        //    viewport = document.querySelector("meta[name=viewport]");
        //    viewport.setAttribute('content', 'width=device-width, initial-scale= 0.9, maximum-scale= 0.9, user-scalable=0');
        //}
        //if (window.innerWidth < canvas.width) {
        //    canvas.width = (window.innerHeight - 15);
        //    canvas.height = (canvas.width * 0.6666);
        //    viewport = document.querySelector("meta[name=viewport]");
        //    viewport.setAttribute('content', 'width=device-width, initial-scale= 0.9, maximum-scale= 0.9, user-scalable=0');
        //}
        context = canvas.getContext(this.contextMode);
        document.body.appendChild(canvas);



        return context;
        
    }
     
 
};
