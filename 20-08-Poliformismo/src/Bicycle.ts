import { Vehicle } from "./Vehicle";

export class Bicycle extends Vehicle {
    public move(): void {
        console.log(`The bicycle is moving...`);
    }
}