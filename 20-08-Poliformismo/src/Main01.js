"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = require("./Vehicle");
const Car_1 = require("./Car");
const Bicycle_1 = require("./Bicycle");
let Vehicles = [new Vehicle_1.Vehicle(), new Car_1.Car(), new Bicycle_1.Bicycle()];
Vehicles.forEach(vehicle => {
    vehicle.move();
});
