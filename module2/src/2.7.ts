{
  // generic constrains with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually

  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "car";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const res1 = getPropertyValue(
    {
      name: "Mr. Naim",
      age: 36,
      address: "Uttara, Dhaka",
    },
    "age"
  );

  // user['age'] ==> 36
  //
}
