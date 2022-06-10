import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";
import {Rectangle} from "./Rectangle";
import {Shape} from "./Shape";
import {Square} from "./Square";
 let cricle = new Circle('hinh tron',5);
 let cylinder = new Cylinder('hinh tron moi',6,12);
 let retangle = new Rectangle(10,12,'hinh chu nhat');
 let  shape = new Shape('thu');
 let square = new Square('khah',20);
// console.log(cricle.calculateArea());
// console.log(cylinder.calculateVolume());
// console.log(shape.show());
// console.log(retangle.calculatePerimeter())
console.log(`die tich phan tu sau tang kich thuoc la ${cricle.resize()}`)
console.log(`dien tich hinh chu nhat khi tang kich thuoc la ${retangle.resize()}`)






