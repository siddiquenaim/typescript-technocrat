// Reference Type -->

const user: {
  company: "AWTTN"; // type --> literal type
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "AWTTN",
  firstName: "Naim",
  middleName: "Siddique",
  lastName: "Hamza",
  isMarried: false,
};

console.log(user.lastName);
