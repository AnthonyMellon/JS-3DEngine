export const point = class {

    #position = [];

    constructor(x, y, z) {
        this.#position = [];
        this.#position.push(x);
        this.#position.push(y);
        this.#position.push(z);
    }

    getPosition() {
        return this.#position;
    }

    setPosition(x, y, z) {
        this.#position[0] = x;
        this.#position[1] = y;
        this.#position[2] = z;
    }
}