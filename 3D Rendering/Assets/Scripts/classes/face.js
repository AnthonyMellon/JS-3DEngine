export const face = class {

    #edges = [];
    #color;

    constructor(e1, e2, e3, color) {
        this.#edges = [];
        this.#edges.push(e1);
        this.#edges.push(e2);
        this.#edges.push(e3);
        this.#color = color;
    }

    getEdges() {
        return this.#edges;
    }

    getColor() {
        return this.#color;
    }
}