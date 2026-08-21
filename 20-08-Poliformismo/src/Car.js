"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const Vehicle_1 = require("./Vehicle");
class Car extends Vehicle_1.Vehicle {
    move() {
        console.log(`The car is moving...`);
    }
}
exports.Car = Car;
