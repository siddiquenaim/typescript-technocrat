{
  // function with generics
  const createArray = (params: string): string[] => {
    return [params];
  };
  const createArrayWithGeneric = <T>(params: T): T[] => {
    return [params];
  };

  type User = {
    name: string;
    age: number;
  };

  const res2 = createArrayWithGeneric<boolean>(true);

  const res1 = createArray("Bangladesh");

  const res3 = createArrayWithGeneric<User>({
    name: "Naim",
    age: 57,
  });

  //Create generic array with tuple

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res4 = createArrayWithTuple<string, number>("Bangladesh", 1971);

  const res5 = createArrayWithTuple<
    string,
    { name: string; details: { age: number; married: boolean } }
  >("Naim", {
    name: "Naim",
    details: {
      age: 55,
      married: false,
    },
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web development";
    return { ...student, course };
  };

  const student1 = addCourseToStudent({
    name: "Mr. X",
    email: "x@email.com",
    devType: "Next level",
  });
  const student2 = addCourseToStudent({
    name: "Mr. Y",
    email: "y@email.com",
    hasWatch: "Apple Watch",
  });

  //
}
