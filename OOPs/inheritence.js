class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speakk() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent class constructor
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks`);
    }
  }
  
  const dog = new Dog('Rex', 'German Shepherd');
  dog.speakk(); // Output: Rex barks
  