// import using require

// declare class


// export class using module.exportsconst Shape = require('./shape');
const Shape = require('./shape');

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    calculateArea() {
        console.log("Calculating area of Circle");
    }
}

module.exports = Circle;


