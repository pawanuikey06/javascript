const p1 = {
    fname: 'Pawan',
    lname: 'Uikey',
    age: 18
};

const p1Proxy = new Proxy(p1, {
    get(target, property) { // target refers to p1
        if (property in target) {
            return target[property];
        } else {
            return false;
        }
    },

    set(target, property, value) {
        if (property in target) {
            switch (property) {
                case 'fname':
                case 'lname':
                    if (typeof value !== 'string') {
                        throw new Error(`${property} must be a string!`);
                    }
                    break;
                case 'age':
                    if (typeof value !== 'number') {
                        throw new Error(`${property} must be a number!`);
                    }
                    if (value <= 0) {
                        throw new Error("Invalid age || age must be greater than '0'.");
                    }
                    break;
            }
            
            target[property] = value; // Set the value if all checks pass
            return true; // Indicate successful assignment
        } else {
            throw new Error(`${property} does not exist.`);
        }
    }
});

// Test the proxy
try {
    p1Proxy.age = 1; // Valid assignment
    console.log(p1Proxy.age); // Should log: 3

    p1Proxy.fname = 'jai ho'; // Valid assignment
    console.log(p1Proxy.fname); // Should log: "John"

    // Uncomment these to test the errors:
    // p1Proxy.lname = 123;      // Throws: lname must be a string!
    // p1Proxy.age = -1;         // Throws: Invalid age || age must be greater than '0'.
    // p1Proxy.height = 180;     // Throws: height does not exist.
} catch (error) {
    console.error(error.message);
}


console.log(p1)