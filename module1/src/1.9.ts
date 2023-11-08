{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Naim",
    age: 50,
    gender: "Male",
    contactNo: "3475027509",
    address: "Dhaka",
  };

  const student2: Student = {
    name: "Mir",
    age: 40,
    gender: "Male",
    address: "Chittagong",
  };

  type UserName = string;
  type IsAdmin = boolean;
  type Add = (num1: number, num2: number) => number;

  const userName: UserName = "Naim";
  const isAdmin: IsAdmin = true;

  const add: Add = (num1, num2) => num1 + num2;
}
