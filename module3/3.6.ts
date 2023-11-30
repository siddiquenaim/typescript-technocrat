{
  // getter and setter

  class BankAccount {
    public readonly id: number;
    name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    //getter
    get balance() {
      return this._balance;
    }

    // get_Balance() {
    //   return this._balance;
    // }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 50);

  //   goribManusherAccount.addDeposit(0); //function call korte hocche
  //   goribManusherAccount.get_Balance(); //function call korte hocche

  //   const my_Balance = goribManusherAccount.get_Balance();
  goribManusherAccount.deposit = 50;

  const my_Balance = goribManusherAccount.balance; //calling like a property

  console.log(my_Balance);

  //
}
