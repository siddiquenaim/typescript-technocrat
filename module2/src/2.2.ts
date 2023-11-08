{
  //interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  const user1: User2 = {
    name: "Naim Siddique",
    age: 26,
  };
}
