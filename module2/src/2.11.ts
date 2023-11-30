{
  // utility types
  //Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contact: number;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //Omit

  type ContactInfo = Omit<Person, "name" | "age">;

  //Required

  type PersonRequired = Required<Person>;

  //Partial

  type PersonPartial = Partial<Person>;

  //ReadOnly
  //if we want to stop the property from changing we can use the ReadOnly utility

  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "Hamza",
    age: 500,
    contact: 17,
  };

  //   person1.name = "Yimmim"; //changing name

  //Record Type

  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, number>; // so that we can add as many properties as possible

  const object1: MyObj = {
    a: 1,
    b: 2,
  };

  //
}
