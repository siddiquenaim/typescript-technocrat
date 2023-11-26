{
  // mapped types

  const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];

  const arrayOfStrings: Array<string> = arrayOfNumbers.map((number) => {
    return number.toString();
  });

  console.log(arrayOfStrings);

  //ex2

  type AreaNumber = {
    height: number;
    width: number;
  };

  //   type AreaString = {
  //     height: string;
  //     width: string
  //   } ... in other way by map:

  //keyof AreaNumber ===> "height" | "width"

  //T ===> { height: string; width: number }

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  type Height = AreaNumber["height"]; // look up type

  const area1: AreaString<{ height: string; width: number }> = {
    height: "99",
    width: 99,
  };

  //
}

//npx ts-node-dev --respawn your-file.ts
