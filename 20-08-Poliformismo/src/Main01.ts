import { Vehicle } from "./Vehicle";
import { Car } from "./Car";
import { Bicycle } from "./Bicycle";

let Vehicles: Vehicle[] = [new Vehicle(), new Car(), new Bicycle()];

Vehicles.forEach(vehicle => {
    vehicle.move();
});
