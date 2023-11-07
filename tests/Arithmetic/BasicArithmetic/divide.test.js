const { BasicMath } = require('advanced-math-kit')

describe('divide function', () => {
    test('should divide two numbers correctly', () => {
        expect(BasicMath.divide(6, 2)).toHaveProperty('result', 3)
    });

    test('should divide multiple numbers correctly', () => {
        expect(BasicMath.divide(60, 2, 3)).toHaveProperty('result', 10)
    });
    test('should divide two negative numbers correctly', () => {
        expect(BasicMath.divide(-10, -2)).toHaveProperty('result', 5);
    });

    test('should divide multiple negative numbers correctly', () => {
        expect(BasicMath.divide(-60, -2, -3)).toHaveProperty('result',-10);
    });

    test('should divide decimal numbers correctly', () => {
        expect(BasicMath.divide(5.5, 2.5)).toHaveProperty('result', 2.2);
    });

    test('should throw an error if denominator is 0', () => {
        expect(() => BasicMath.divide(5, 0)).toThrow('Cannot divide by 0');
    });

    test('should throw an error if no arguments are provided', () => {
        expect(() => BasicMath.divide(5)).toThrow('At least two arguments must be provided');
    });

    test('should throw an error if any one argument is not valid number', () => {
        expect(() => BasicMath.divide(1, 'foo', 5)).toThrow('Invalid input. Please provide a valid number');
    });

    test('should throw an error if one of the arguments is NaN', () => {
        expect(() => BasicMath.divide(1, NaN, 2)).toThrow('Invalid input. Please provide a valid number');
    });

    test('should throw an error if one of the arguments is undefined', () => {
        expect(() => BasicMath.divide(10, undefined, 2)).toThrow('Invalid input. Please provide a valid number');
    });

    test('should throw an error if one of the arguments is Infinity', () => {
        expect(() => BasicMath.divide(10, Number.POSITIVE_INFINITY, 2)).toThrow('Invalid input. Please provide a valid number');
    });

    test('should log a warning for Infinity result when dividing by a very small number', () => { 
        const originalConsoleWarn = console.warn;
        let consoleOutput = [];

        console.warn = (message) => consoleOutput.push(message)

        BasicMath.divide(1, Number.MIN_VALUE);

        console.warn = originalConsoleWarn;

        expect(consoleOutput.length).toBe(1);
        expect(consoleOutput[0]).toContain('Answer is Infinity');
    });
});
