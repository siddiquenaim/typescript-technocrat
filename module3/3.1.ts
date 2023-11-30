{
  // oop - class
  class Animal {
    //property
    // name: string;
    // species: string;
    // sound: string;

    //parameter properties

    //constructor
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    //function
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("dog", "gheu doggo", "gheu");
  const cat = new Animal("cat", "orange", "meow");

  dog.makeSound();

  //
}

//npx ts-node-dev --respawn your-file.ts
