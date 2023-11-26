"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 11;
    if (age >= 18) {
        // console.log("adult");
    }
    else {
        // console.log("not adult");
    }
    //ternary operator
    const isAdult = age >= 18 ? "adult" : "not adult";
    //   console.log({ isAdult });
    //nullish coalescing operator (in case of null / undefined --> decision)
    const isAuthentic = null;
    const result1 = isAuthentic !== null && isAuthentic !== void 0 ? isAuthentic : "Guest"; // only works when null or undefined
    const result2 = isAuthentic ? isAuthentic : "Guest"; // works with truthy or falsy value
    const user22 = {
        name: "Messi",
        address: {
            city: "Ctg",
            road: "Awesome Road",
            presentAddress: "ct ctiye",
        },
    };
    const permanentAddress = (_b = (_a = user22 === null || user22 === void 0 ? void 0 : user22.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No permanent address";
    console.log(permanentAddress);
    //
}
