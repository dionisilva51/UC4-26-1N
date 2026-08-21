import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
    public move(): void {
        console.log(`The car is moving...`);
    }
}