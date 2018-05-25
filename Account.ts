import {Bank} from './Bank';
interface Transaction{
    value: number,
    sender: string,
    receiver: string
}


export class Account {
    public transactions: Transaction[] = [];
    private redLimit: number = 100;
    public fiscalCode: string;
    private bank: Bank;

    constructor(public name: string, public budget: number){}
    
    sendMoney(value: number, accountReceiver: Account) {
        if ((value - this.redLimit) < this.budget) {
            this.budget -= value;
            accountReceiver.budget += value;
            let transaction = {   
                sender: this.name, 
                receiver: accountReceiver.name,
                value: value,
                data: Date.now()
            }
            this.transactions.push(transaction);
            accountReceiver.transactions.push(transaction);
            if (this.bank !== accountReceiver.bank) {
                this.budget -= 1;
                this.bank.credit += 1;
            }
        }
    }

    changeLimit(newLimit: number) {
        this.redLimit = newLimit;
    }

    setBank(bank: Bank):void{
        this.bank = bank;
    }

}