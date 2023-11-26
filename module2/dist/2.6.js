"use strict";
{
    // constrains
    const course = "Next level web development";
    const addCourseToStudent = (student) => {
        const course = "Next level web development";
        return Object.assign(Object.assign({}, student), { course });
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
