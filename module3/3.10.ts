{
  //Encapsulation: to hide
  //follow 3.5, 3.6

  {
    // access modifiers: public, readonly, private, protected

    class BankAccount {
      public readonly id: number;
      private name: string;
      protected _balance: number;

      constructor(id: number, name: string, _balance: number) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
      }

      addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }

      get_Balance() {
        return this._balance;
      }
    }

    class StudentAccount extends BankAccount {
      test() {
        return this._balance;
      }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20);

    goribManusherAccount.addDeposit(0);
    goribManusherAccount.get_Balance();

    const my_Balance = goribManusherAccount.get_Balance();

    console.log(my_Balance);

    //
  }

  //
}
