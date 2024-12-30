// Getting a property value
const obj = { name: "Pawan", age: 25 };
console.log(Reflect.get(obj, "name")); // Output: "Pawan"

// Setting a property value
Reflect.set(obj, "age", 26);
console.log(obj.age); // Output: 26

// Checking if a property exists
console.log(Reflect.has(obj, "name")); // Output: true

// Deleting a property
Reflect.deleteProperty(obj, "age");
console.log(obj); // Output: { name: "Pawan" }



// Introspecting an object
const obj1 = { name: "Pawan", age: 25 };
console.log(Object.keys(obj1)); // Output: [ "name", "age" ]
console.log(Object.values(obj1)); // Output: [ "Pawan", 25 ]
console.log(Object.entries(obj1)); // Output: [ ["name", "Pawan"], ["age", 25] ]

// Defining a property
Object.defineProperty(obj1, "country", {
  value: "India",
  writable: false,
  enumerable: true,
  configurable: true,
});
console.log(obj1.country); // Output: "India"



const code = "const x = 10; x + 5;";
console.log(eval(code)); // Output: 15
