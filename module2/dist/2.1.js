"use strict";
{
    //
    //type assertion: if i understand the type better than typescript it's called time assertion.
    let anything;
    anything = "Next level web development";
    anything = 222;
    anything; //this is type assertion
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000); //this is type assertion
    const result2 = kgToGm("1000"); //this is type assertion
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
