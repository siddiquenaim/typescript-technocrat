{
  //spread operator

  const bros1: string[] = ["Ador", "Rakib", "Roman"];
  const bros2: string[] = ["Tonmoy", "Shakib", "Shakil"];

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

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //rest operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hello ${friend}`));
  };

  //destructuring
}
