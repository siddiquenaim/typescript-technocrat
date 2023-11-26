"use strict";
{
    //spread operator
    const bros1 = ["Ador", "Rakib", "Roman"];
    const bros2 = ["Tonmoy", "Shakib", "Shakil"];
    bros1.push(...bros2); //spread operator
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentors2 = {
        prisma: "Feroz",
        next: "Tonmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    //rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hello ${friend}`));
    };
    //destructuring
}
