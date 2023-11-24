{
  // generic interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmailabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  type AppleWatch = {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  };

  interface YamahaBike {
    model: string;
    engine: string;
  }

  const poorDeveloper: Developer<EmailabWatch> = {
    name: "Naim",
    computer: {
      brand: "Asus",
      model: "6937U",
      releaseYear: 2033,
    },
    smartWatch: {
      brand: "Emailab",
      model: "6597h",
      display: "OLED",
    },
  };
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Mona",
    computer: {
      brand: "Jasus",
      model: "JJ45",
      releaseYear: 2034,
    },
    smartWatch: {
      brand: "Apple",
      model: "AW21",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engine: "100cc",
    },
  };

  //
}
