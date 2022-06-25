let canvas = null;
let ctx = null;
let width = 0;
let height = 0;

const DEFAULTCOLOUR = 'rgb(255, 255, 255)'

/**
 * Set the canvas object
 * @param {canvas} myCanvas 
 */
export const setCanvas = (myCanvas) => {    
    canvas = myCanvas;    
    setCtx();
}

/**
 * Set the ctx to be 2d
 */
const setCtx = () => {
    ctx = canvas.getContext('2d');
}

/**
 * Set the width and height of the canvas
 * @param {number} sizeX 
 * @param {number} sizeY 
 */
export const setCanvasSize = (sizeX, sizeY) => {
    if(typeof(sizeX) != 'number') throw 'Please use a number for sizeX'
    if(typeof(sizeY) != 'number') throw 'Please use a number for sizeY' 
    
    canvas.width = width = sizeX;
    canvas.height = height = sizeY;   
    setCtx();
}

/**
 * Clears the canvas to the given color
 * @param {string 'rgb(r, g, b)'} color 
 */
export const clearCanvas = (color) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height)
}
/**
 * clears the canvas to the default color
 */
export const clearCanvasDef = () => {
    ctx.fillStyle = DEFAULTCOLOUR;
    ctx.fillRect(0, 0, width, height);
}

/**
 * 
 * @returns the ctx to which everything should be drawn
 */
export const getCtx = () => {
    return ctx;
}