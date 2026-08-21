import { Payment } from "./Payment";

export class Ticket extends Payment{
    public process(): void {
        console.log(`Payment via bank slip`);
    }
}