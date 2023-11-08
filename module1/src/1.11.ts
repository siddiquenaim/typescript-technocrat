{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 11;

  if (age >= 18) {
    // console.log("adult");
  } else {
    // console.log("not adult");
  }

  //ternary operator
  const isAdult = age >= 18 ? "adult" : "not adult";

  //   console.log({ isAdult });

  //nullish coalescing operator (in case of null / undefined --> decision)

  const isAuthentic = null;

  const result1 = isAuthentic ?? "Guest"; // only works when null or undefined
  const result2 = isAuthentic ? isAuthentic : "Guest"; // works with truthy or falsy value
  //   console.log({ result1 }, { result2 });

  // optional chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user22: User = {
    name: "Messi",
    address: {
      city: "Ctg",
      road: "Awesome Road",
      presentAddress: "ct ctiye",
    },
  };

  const permanentAddress =
    user22?.address?.permanentAddress ?? "No permanent address";

  console.log(permanentAddress);

  //
}
