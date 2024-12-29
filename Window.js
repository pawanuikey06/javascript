console.log('hello')
console.log(globalThis === globalThis.globalThis);
// console.log(self === self.self);

var greet = function greeting(name) {
    return "Hello, " + name + "!";
};

console.log(greet("Alice")); // Outputs: Hello, Alice!

