const { BasicMath } = require('advanced-math-kit')

// Implementations

// Add
const addition = BasicMath.add(25, 25, 50)
const addInfinity = BasicMath.add(Number.MAX_VALUE, Number.MAX_VALUE)
console.log(`addition: Sum is ${addition} of type ${typeof addition}`);
console.log(`addition: Sum is ${addInfinity} of type ${typeof addInfinity}\n`);

// Subtract
const subtraction = BasicMath.subtract(50, 12, 34, 0, 123)
console.log(`subtraction: Difference is ${subtraction} of type ${typeof subtraction}\n`);

// Divide
const division = BasicMath.divide(64, 4, 2)
const divisionInfinity = BasicMath.divide(1, Number.MIN_VALUE)
console.log(`division: Remainder is ${division} of type ${typeof division}`);
console.log(`division: Remainder is ${divisionInfinity} of type ${typeof divisionInfinity}\n`);

// Multiply
const multiplication = BasicMath.multiply(123, 345, 312.0)
console.log(`multiplication: Product is ${multiplication} of type ${typeof multiplication}\n`);