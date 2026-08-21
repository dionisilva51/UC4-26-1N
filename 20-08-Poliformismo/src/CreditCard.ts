import { Payment } from "./Payment";

export class CreditCard extends Payment{
    public process(): void {
        console.log(`Credit card payment`);
    }
}

