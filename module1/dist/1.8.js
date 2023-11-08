"use strict";
{
    // object destructuring
    const user = {
        id: 345,
        name: {
            firstName: "Naim",
            middleName: "Siddique",
            lastName: "Hamza",
        },
        contactNo: "01700000000",
        address: "Uganda",
    };
    const { contactNo, name: { middleName: midName }, // cannot declare type while destructuring because it takes it as a name alias
     } = user;
    //array destructuring
    const myFriends = ["Messi", "Neymar", "Suarez", "Cristiano"];
    const [, , ...bestFriends] = myFriends; //skipped first two values
}
