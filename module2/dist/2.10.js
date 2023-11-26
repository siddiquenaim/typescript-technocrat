"use strict";
{
    // mapped types
    const arrayOfNumbers = [1, 2, 3, 4, 5];
    const arrayOfStrings = arrayOfNumbers.map((number) => {
        return number.toString();
    });
    console.log(arrayOfStrings);
    //
}
