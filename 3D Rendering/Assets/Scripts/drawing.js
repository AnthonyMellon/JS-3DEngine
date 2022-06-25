import { face } from "./classes/face.js";

export const drawer = class{

    ctx = null;
    myFace = null;

    constructor(ctx) {
        this.ctx = ctx;
    }

    drawObject(object) {
        let faces = object.getFaces();        

        //Draw each face
        faces.forEach(face => {
            this.ctx.fillStyle = face.getColor();
            let edges = face.getEdges();
            this.ctx.beginPath();

            //Get the starting position (the first point of the first edge)
            let startPoint = edges[0].getPoints()[0].getPosition();  
            this.ctx.moveTo(startPoint[0], startPoint[1]);

            //Loop through each edge and trace a path to its end point
            edges.forEach(edge => {
                let points = edge.getPoints();
                let position = points[1].getPosition();
                this.ctx.lineTo(position[0], position[1]);
            }); 
            
            //Fill the face after tracing all the edges
            this.ctx.fill();                      
        });
    }
}