import { Payment } from "./Payment";
import { CreditCard } from "./CreditCard";
import { Ticket } from "./Ticket";

let paymentMethods: Payment[] = [new Payment(), new CreditCard(), new Ticket()];

paymentMethods.forEach(pay => { pay.process()});