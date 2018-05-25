import {Account} from './Account';

export class Bank{
    public accounts: Account[]= [];
    
    constructor(public name: string, public credit: number){}

    public addAccount(name: string, budget: number): void {
        let account = new Account(name, budget);
        account.setBank(this);
        this.accounts.push(account);
    }

    public getAccount(name: string): Account{
        for(let i=0; i<this.accounts.length; i++) {
           if (this.accounts[i].name === name){
               return this.accounts[i];
           }    
        }
        return null;
    }

    public getAccountsCredits(): number{
        let credit = 0;
        for(let i=0; i<this.accounts.length; i++) {
            credit += this.accounts[i].budget;    
        }
        return credit;
    }

}