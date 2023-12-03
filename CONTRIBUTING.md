# Contributing to Advanced Math Kit

Thank you for considering contributing to Advanced Math Kit! We welcome your contributions.

## Contents

<details>
  <summary>Introduction - For Beginners</summary>

  [Project Nature ](#project-nature---for-beginners)

  [Why Functional Programming?](#why-functional-programming)
  
  [Functional Programming Methods](#functional-programming-methods)
  
  1. [Map](#1-map)
  
  2. [Filter](#2-filter)
  
  3. [Reduce](#3-reduce)
  
  4. [Currying](#4-currying)
</details>

<details>
  <summary>Getting Started - For Everyone</summary>
  
  [Making Changes](#making-changes)
  
  [Development Flow](#development-flow)
  
  [Writing Tests](#writing-tests)
  
  [Running Tests](#running-tests)
  
  [Guidelines For Testing](#guidelines-for-testing)
  
  [Submitting Changes](#submitting-changes)
  
  [Code of Conduct](#code-of-conduct)
</details>

## Project Nature - For Beginners

> Note: If you are not a beginner then please skip to [getting started](#getting-started---for-everyone)

`Advanced Math Kit` follows **functional programming** principles to enhance code readability, maintainability, and predictability. Functional programming promotes immutability, pure functions, and the avoidance of side effects, which can lead to more robust and scalable code.

### Why Functional Programming?

1. **Immutability:** Functions in Advanced Math Kit do not mutate data. Instead, they return new data structures, promoting immutability and reducing unintended side effects.

2. **Pure Functions:** Functions are designed to be pure, meaning they produce the same output for the same input and have no side effects. This makes code more predictable and testable.

3. **Composition:** Functions can be composed to create more complex functionality, allowing for modular and reusable code.

### Functional Programming Methods
Below JS methods & techniques adhere to functional programming paradigms which prioritize immutability and avoid side effects. Methods such as `map`, `filter`, and `reduce`, help us craft code that fosters a robust foundation for building sophisticated applications.

### 1. Map

The `map` method applies a function to each element of a collection, producing a new collection without modifying the original one.

```javascript
const numbers = [1, 2, 3, 4];

const squaredNumbers = numbers.map((num) => num ** 2);

console.log(squaredNumbers); // Output: [1, 4, 9, 16]
```

### 2. Filter

The `filter` method selects elements from a collection based on a condition, creating a new collection with only the elements that meet the criteria.

```javascript
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
```

### 3. Reduce
The `reduce` method applies a function to the elements of a collection, reducing them to a single value.

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // Output: 10
```

### 4. Currying
Currying is a technique where a function with multiple parameters is transformed into a series of functions, each taking a single parameter.

```javascript
const add = (a) => (b) => a + b;

const add2 = add(2);
console.log(add2(3)); // Output: 5
```

Incorporating these methods and concepts into the codebase promotes a functional programming style, leading to more maintainable and scalable solutions.

## Getting Started - For Everyone

- Fork the repository and clone it to your local machine.
- Create a new branch for your changes.

## Making Changes

### Code Structure

Before diving into changes, familiarize yourself with the code structure:

- `Arithmetic/`: Contains modules for basic arithmetic operations.
- `utils/`: Houses utility functions used across the library.
- `tests/`: Stores test files for the library.
- `wrapWithResources.js`: The utility for measuring code performance.
- `CODE_OF_CONDUCT.md`: Contributor Code of Conduct.
- `README.md`: Documentation for the library.

### Development Workflow

1. **Branch Naming:**
   - Name your branch descriptively, reflecting the nature of your changes.
   - Use hyphens to separate words (e.g., `feature-update-docs`).

2. **Coding Standards:**
   - Follow the established coding standards in the project.
   - Ensure your code is well-formatted and readable.

3. **Commit Messages:**
   - Write clear and concise commit messages.
   - Use present tense and imperative mood (e.g., "Add feature" instead of "Added feature").

   ```bash
   git commit -m "Add feature"
   ```
4. **Documentation:**

    - Update the documentation to reflect your changes.
    - If you modify the public API, ensure the documentation is accurate and up-to-date.

5. **Performance Measurement:**

    If your changes involve performance improvements or measurements, utilize the `wrapWithResources` utility.

    ```javascript
    const wrapWithResources = require('../utils/resourceWrapper');

    const functionName = wrapWithResources(/* your function */);
    ```

6. **Custom Warnings, Errors & Logs:**

    - Utilize the custom color-coded warnings, errors and logs available in `utils/errors.js`.
    - Ensure that your warnings and logs provide clear and informative messages.

    ```javascript
    const { warn } = require('../utils/errors');

    // Example usage
    warn('This is a warning message');
    ```

## Writing Tests

When adding new features or fixing bugs, please include relevant tests in the `test` directory. Tests are essential to maintain code quality and ensure the stability of the library.

Follow these guidelines when writing tests:

- Write clear and descriptive test names.
- Include tests for edge cases and potential error scenarios.
- Ensure that tests cover all code paths in your changes.
- Aim for high test coverage to catch regressions.

## Running Tests

We use Jest for testing. To run the tests, follow these steps:

1. Switch to the `development` branch:

    ```bash
    git checkout development
    ```

2. Set the environment to `development`:

    ```bash
    export NODE_ENV=development
    ```
3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the test suite:

    ```bash
    npm test
    ```

This will run all the test cases in the `test` directory. Setting `NODE_ENV=development` is **crucial** to enable the logging and measurement features provided by the `wrapWithResources` utility.

## Guidelines for Testing

1. **Test Coverage:** Strive for high test coverage. Aim to cover as many code paths as possible to ensure the reliability of the library.

2. **Edge Cases:** Identify and test edge cases to verify that the library behaves correctly under different scenarios.

3. **Error Handling:** Include tests for error scenarios. Ensure that the library throws appropriate errors and handles them gracefully.

4. **Documentation:** If your changes impact the public API, update the relevant documentation to reflect the changes.

## Submitting Changes

- Push your changes to your fork.
- Submit a pull request to the `development` branch.


## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project, you agree to abide by its terms. Please see [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details.