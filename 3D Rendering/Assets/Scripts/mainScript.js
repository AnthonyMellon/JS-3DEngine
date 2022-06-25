import { setCanvas, setCanvasSize, clearCanvasDef, clearCanvas, getCtx } from "./canvasManager.js";
import { drawer } from "./drawing.js";
import { object } from "./classes/object.js";

let myObject;
let myDrawer;
let frameCount = 1;

const setup = () => {

    //Canvas setup
    setCanvas(document.querySelector('.mainCanvas'));
    setCanvasSize(window.innerWidth, window.innerHeight);
    clearCanvasDef();    

    myDrawer = new drawer(getCtx())
    myObject = new object([300, 300]);
    //myDrawer.drawObject(myObject);
    //myDrawer.drawFace();
    


    loop();
}

const loop = () => {
    clearCanvasDef();


    let myPoint = myObject.getFaces()[1].getEdges()[0].getPoints()[1];
    myPoint.setPosition(Math.sin(frameCount/500)*450 + 450, Math.cos(frameCount/500)*150 + 150);

    //clearCanvasDef();
    myDrawer.drawObject(myObject);    


    frameCount++;
    requestAnimationFrame(loop);
}


setup();
