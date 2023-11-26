{
  //conditional type

  type a1 = null;
  type b1 = undefined;

  type x = a1 extends null ? true : false; //conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  //ex2

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  // keyof Sheikh === "bike" | "car" | "ship"

  // bike ase kina, car ase kina, ship ase ki na, tractor ase ki na
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"car">;

  //
}
