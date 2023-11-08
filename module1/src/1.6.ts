{
  // Learning function

  // 1. Normal function

  function add(num1: number, num2: number = 10): number {
    //10 is default value for num2
    return num1 + num2;
  }

  add(2, 3);

  // 2. Arrow function

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // object --> function --> method

  const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(balance: number): string {
      return `my new balance is ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 4, 10];

  const newArray: number[] = arr.map((elem: number): number => elem * elem);
}
