console.log(!"sfsfd");
console.log(+true)
console.log(""==false);
console.log(""===false)
console.log(NaN ==NaN);
console.log(NaN ===NaN)
console.log(0 / 0);            // NaN: Division by zero when numerator is also zero
console.log(Math.sqrt(-1));    // NaN: Square root of a negative number
console.log(Infinity - Infinity); // NaN: Indeterminate form
console.log(parseInt("hello"));  // NaN
console.log(parseFloat("abc")); // NaN
let x;
console.log(x + 2);  // NaN: x is `undefined`
console.log("abc" - 2);     // NaN: String "abc" can't be coerced into a number
console.log(true * "hello"); // NaN: "hello" can't be coerced into a number
