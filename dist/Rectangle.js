"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(width, height, name) {
        super(name);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.width + this.height) * 2;
    }
    resize() {
        return this.width + this.height + Math.floor(Math.random() * 100 + 1);
    }
}
exports.Rectangle = Rectangle;
