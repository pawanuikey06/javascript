function add(a) {
    return function (b) {
        if (b !== undefined) {
            return add(a + b); // Return a new function to continue currying
        } else {
            return a; // Return the result when no argument is passed
        }
    };
}

// Usage
console.log(add(1)(2)(3)(4)()); // Output: 10
console.log(add(5)(10)(15)());  // Output: 30
