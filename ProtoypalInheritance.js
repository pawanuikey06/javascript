let animal={
    eats:true,
    walk() {
        console.log("Animal walk");
      }

}

let rabbit={
    jumps:true,
    __proto__: animal
}

// rabbit.__proto__=animal;

let longEar = {
    earLength: 10,
    __proto__: rabbit
  };

rabbit.walk();
longEar.walk();
console.log(rabbit.eats)
// true;