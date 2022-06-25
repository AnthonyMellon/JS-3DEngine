import { point } from "./point.js";
import { edge } from "./edge.js";
import { face } from "./face.js";


export const object = class{
    
    #faces = [];
    
    constructor(startPos) {

        //Create an initial face at the starting position
        let p1 = new point(startPos[0] - 150, startPos[1] - 150, 0);
        let p2 = new point(startPos[0] + 150, startPos[1] - 150, 0);
        let p3 = new point(startPos[0], startPos[1] + 150, 0);   
        
        let e1 = new edge(p1, p2);
        let e2 = new edge(p2, p3);
        let e3 = new edge(p3, p1);        

        //Adding another face for testing
        let p4 = new point(startPos[0] + 1000, startPos[1] + 50)

        let e4 = new edge(p3, p4);
        let e5 = new edge(p4, p2);

        let e6 = new edge(p1, p4);


        this.#faces.push(new face(e3, e4, e6, 'rgb(0, 0, 255'));
        this.#faces.push(new face(e1, e2, e3, 'rgb(0, 0, 0)'));
        this.#faces.push(new face(e2, e4, e5, 'rgba(255, 0, 0'));
    }

    addFace() {
        
    }

    getFaces() {
        return this.#faces;
    }
}