import {Bank} from './Bank'

let bnl = new Bank("bnl", 1000);

bnl.addAccount("Carlo", 100);
bnl.addAccount("Steve",  100);
bnl.addAccount("Mario",  50);

let creditAgricole = new Bank("creditAgricole", 2000);

creditAgricole.addAccount("Pippo", 100);
creditAgricole.addAccount("Caio",  200);
creditAgricole.addAccount("Sempronio",  50);

let account1 = bnl.getAccount("Carlo");
let account2 = creditAgricole.getAccount("Pippo");

console.log("bnl:", bnl.getAccountsCredits());
console.log("bnl.credit:", bnl.credit);
console.log("creditAgricole:", creditAgricole.getAccountsCredits());
account1.sendMoney(20, account2);
console.log("bnl:", bnl.getAccountsCredits());
console.log("bnl.credit:", bnl.credit);
console.log("creditAgricole:", creditAgricole.getAccountsCredits());