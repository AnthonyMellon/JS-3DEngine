export const edge = class{

    #points = [];

    constructor(p1, p2) {
        this.#points = [];
        this.#points.push(p1);
        this.#points.push(p2);
    }

    getPoints() {
        return this.#points;
    }
}