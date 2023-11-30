{
  // abstraction: 1. interface 2. abstract

  //1.interface
  //idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the car1 engine");
    }

    stopEngine(): void {
      console.log("I am stopping the car1 engine");
    }

    move(): void {
      console.log("I am moving the car1");
    }

    test() {
      console.log("I am just testing");
    }
  }

  const toyotaCar1 = new Car1();
  toyotaCar1.startEngine();

  //2.abstract:

  //idea

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("I am just testing car2");
    }
  }

  //   const hondaCar = new Car2(); this won't work we cannot create an instance from abstract class but we can create a child class.

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting the car2 engine");
    }

    stopEngine(): void {
      console.log("I am stopping the car2 engine");
    }

    move(): void {
      console.log("I am moving the car2");
    }
  }

  //
}
