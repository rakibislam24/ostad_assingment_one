class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited amount $${amount}. Balance $${this.balance}.`);
    }

    withdraw(amount){
        if(this.balance>=amount){
            this.balance -= amount;
            console.log(`Withdrwan amount $${amount}. Balance $${this.balance}.`);
        }else{
            console.log(`Insufficient funds`);
        }
    }

    getBalance(){
        console.log(`Current balance is $${this.balance}.`);
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

//Instance One//
const account1 = new BankAccount(1872901197, "Rakibul Islam", 100);
account1.deposit(1500);
account1.withdraw(800);
account1.getBalance();
account1.displayAccountInfo();

//Instance Two//
const account2 = new BankAccount(1922872056, "Shahidul Islam", 300);
account2.deposit(500);
account2.withdraw(200);
account1.getBalance();
account2.displayAccountInfo();
