"use strict";
{
    // function with generics
    const createArray = (params) => {
        return [params];
    };
    const createArrayWithGeneric = (params) => {
        return [params];
    };
    const res2 = createArrayWithGeneric(true);
    const res1 = createArray("Bangladesh");
    const res3 = createArrayWithGeneric({
        name: "Naim",
        age: 57,
    });
    //Create generic array with tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res4 = createArrayWithTuple("Bangladesh", 1971);
    const res5 = createArrayWithTuple("Naim", {
        name: "Naim",
        details: {
            age: 55,
            married: false,
        },
    });
    const addCourseToStudent = (student) => {
        const course = "Next level web development";
        return Object.assign(Object.assign({}, student), { course });
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
