{
  //
  // union types : or er moto

  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper"; //string literal type
  type FullStackDeveloper = "frontEndDeveloper" | "expertDeveloper"; //string literal type

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+";
  };

  const user1: User = {
    name: "persian",
    gender: "male",
    bloodGroup: "B+",
  };

  // intersection and er moto

  type NewFrontEndDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type NewBackEndDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type NewFullStackDeveloper = NewFrontEndDeveloper & NewBackEndDeveloper;

  const fullStackDeveloper: NewFullStackDeveloper = {
    skills: ["Html", "Css", "node"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}
