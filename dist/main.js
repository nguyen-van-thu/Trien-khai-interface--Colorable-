"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Cylinder_1 = require("./Cylinder");
const Rectangle_1 = require("./Rectangle");
const Shape_1 = require("./Shape");
const Square_1 = require("./Square");
let cricle = new Circle_1.Circle('hinh tron', 5);
let cylinder = new Cylinder_1.Cylinder('hinh tron moi', 6, 12);
let retangle = new Rectangle_1.Rectangle(10, 12, 'hinh chu nhat');
let shape = new Shape_1.Shape('thu');
let square = new Square_1.Square('khah', 20);
// console.log(cricle.calculateArea());
// console.log(cylinder.calculateVolume());
// console.log(shape.show());
// console.log(retangle.calculatePerimeter())
console.log(`die tich phan tu sau tang kich thuoc la ${cricle.resize()}`);
console.log(`dien tich hinh chu nhat khi tang kich thuoc la ${retangle.resize()}`);
