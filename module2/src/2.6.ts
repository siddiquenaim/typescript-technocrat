{
  // constrains
  const course = "Next level web development";
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
    //Here, extends = constrains
  >(
    student: T
  ) => {
    const course = "Next level web development";
    return { ...student, course };
  };

  const student3 = addCourseToStudent({
    id: 3,
    name: "Zayn",
    email: "z@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent({
    id: 1,
    name: "Mr. X",
    email: "x@email.com",
    devType: "Next level",
  });

  const student2 = addCourseToStudent({
    id: 2,
    name: "Mr. Y",
    email: "y@email.com",
    hasWatch: "Apple Watch",
  });

  //
}
