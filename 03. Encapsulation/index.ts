class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number) {
    if (this.balance > 0 && this.balance < amount) {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);

// account.balance
