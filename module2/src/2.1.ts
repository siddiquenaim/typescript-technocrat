{
  //

  //type assertion: if i understand the type better than typescript it's called time assertion.

  let anything: any;

  anything = "Next level web development";

  anything = 222;

  anything as number; //this is type assertion

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }

    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number; //this is type assertion
  const result2 = kgToGm("1000") as string; //this is type assertion

  //try-catch

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
