{
  // nullable types / unknown type

  //nullable type

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName(null);

  //unknown typeof

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [valueInNumber, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(valueInNumber) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("Wrong Input");
    }
  };

  getSpeedInMeterPerSecond(`11 kmh^-1`);

  //never type

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  //   throwError("ERrrrrrrrrrrrrrrrrrrrrrrrrroRRRrrrrrrrrrrrrrrrrrrrr");
  // since this function is never returning anything this is a never function
}
