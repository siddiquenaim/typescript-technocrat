{
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 2, 5];
  const rollNumbers: GenericArray<number> = [3, 2, 5];

  //   const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Naim",
      age: 100,
    },
    {
      name: "Jhankar",
      age: 110,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  interface User {
    name: string;
    email: string;
  }

  const userWithId: GenericTuple<number, User> = [
    1234,
    {
      name: "Naim Siddique",
      email: "siddiquenaim26@gmail.com",
    },
  ];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const add = (x: number, y: number) => x + y;
  //
}
