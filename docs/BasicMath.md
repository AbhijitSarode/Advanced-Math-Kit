# BasicMath Module

The `BasicMath` module provides basic arithmetic operations.

## Contents
- [add()](#addnumbers)
- [subtract()](#subtractnumbers)
- [divide()](#dividenumbers)
- [multiply()](#multiplynumbers)

## Methods

### `add(...numbers)`

Adds two or more numbers and returns the result.

**Parameters:**
- `numbers` (number[]): The numbers to be added.

**Example:**

```javascript
const sum = BasicMath.add(2, 3, 5);
console.log(sum); // Output: 10
```

### `subtract(...numbers)`

Subtracts two or more numbers and returns the result.

**Parameters:**
- `numbers` (number[]): The numbers to be subtracted.

**Example:**

```javascript
const difference = BasicMath.subtract(10, 5, 3);
console.log(difference); // Output: 2
```

### `divide(...numbers)`

Divides two or more numbers and returns the result.

**Parameters:**

- `numbers` (number[]): The numbers to be divided.

**Example:**

```javascript
const quotient = BasicMath.divide(120, 2, 5);
console.log(quotient); // Output: 12
```

### multiply(...numbers)
Multiplies two or more numbers and returns the result.

**Parameters:**

- `numbers` (number[]): The numbers to be multiplied.

**Example:**

```javascript
const product = BasicMath.multiply(2, 3, 4);
console.log(product); // Output: 24
```