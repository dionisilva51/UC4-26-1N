"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicycle = void 0;
const Vehicle_1 = require("./Vehicle");
class Bicycle extends Vehicle_1.Vehicle {
    move() {
        console.log(`The bicycle is moving...`);
    }
}
exports.Bicycle = Bicycle;
