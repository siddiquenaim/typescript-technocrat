"use strict";
{
    const person1 = "car";
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const res1 = getPropertyValue({
        name: "Mr. Naim",
        age: 36,
        address: "Uttara, Dhaka",
    }, "age");
    // user['age'] ==> 36
    //
}
