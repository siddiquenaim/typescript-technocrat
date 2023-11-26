"use strict";
{
    // Learning function
    // 1. Normal function
    function add(num1, num2 = 10) {
        //10 is default value for num2
        return num1 + num2;
    }
    add(2, 3);
    // 2. Arrow function
    const addArrow = (num1, num2) => num1 + num2;
    // object --> function --> method
    const poorUser = {
        name: "Mezba",
        balance: 0,
        addBalance(balance) {
            return `my new balance is ${this.balance + balance}`;
        },
    };
    const arr = [1, 4, 10];
    const newArray = arr.map((elem) => elem * elem);
}
