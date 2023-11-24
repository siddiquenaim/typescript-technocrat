{
  //interface

  //type alias: can be used for both primitive types and objects
  type User1 = {
    name: string;
    age: number;
  };

  //interface: can be used for only object
  interface User2 {
    name: string;
    age: number;
  }

  //intersection type

  type UserWithRole1 = User1 & { role: string };

  //intersection with interface
  interface UserWithRole2 extends User2 {
    role: string;
  }

  //type can also be extended to interface
  interface UserWithRole2 extends User1 {
    address: string;
  }

  const user1: UserWithRole1 = {
    name: "Naim Siddique",
    age: 26,
    role: "Student",
  };

  const user2: UserWithRole2 = {
    name: "Siddique Hamza",
    age: 24,
    role: "Teacher",
    address: "Uttara, Dhaka-1230",
  };

  // in js: object --> object, function--> object, array--> object

  //array with type
  type Roll1 = number[];

  const rollNumber1: Roll1 = [1, 2, 3, 4, 5, 6];

  //array with interface

  interface Roll2 {
    [index: number]: number;
  }

  //
}
