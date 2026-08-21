"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = require("./Payment");
const CreditCard_1 = require("./CreditCard");
const Ticket_1 = require("./Ticket");
let paymentMethods = [new Payment_1.Payment(), new CreditCard_1.CreditCard(), new Ticket_1.Ticket()];
paymentMethods.forEach(pay => { pay.process(); });
