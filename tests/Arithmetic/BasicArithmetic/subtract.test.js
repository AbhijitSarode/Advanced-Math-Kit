const { BasicMath } = require('advanced-math-kit')

describe('subtract function', () => {
    test('should subtract two numbers correctly', () => {
        expect(BasicMath.subtract(5, 3)).toHaveProperty('result', 2);
    })

    test('should subtract multiple numbers correctly', () => {
        expect(BasicMath.subtract(10, 2, 3, 1)).toHaveProperty('result', 4);
    })

    test('should subtract two negative numbers correctly', () => {
        expect(BasicMath.subtract(-5, -3)).toHaveProperty('result', -2);
    })

    test('should subtract multiple negative numbers correctly', () => {
        expect(BasicMath.subtract(-10, 2, -3, 1, -4)).toHaveProperty('result', -6);
    })

    test('should subtract decimal numbers correctly', () => {
        expect(BasicMath.subtract(5.5, 2.5, 1.5)).toHaveProperty('result', 1.5);
    })

    test('should throw an error if no argument is provided', () => {
        expect(() => BasicMath.subtract()).toThrow('At least two arguments must be provided');
    })

    test('should throw an error if any one argument is not valid number', () => {
        expect(() => BasicMath.subtract(1, 'foo', 5)).toThrow('Invalid input. Please provide a valid number');
    })

    test('should throw an error if one of the arguments is NaN', () => {
        expect(() => BasicMath.subtract(1, NaN, 2)).toThrow('Invalid input. Please provide a valid number');
    })

    test('should throw an error if one of the arguments is undefined', () => {
        expect(() => BasicMath.subtract(10, undefined, 2)).toThrow('Invalid input. Please provide a valid number');
    })

    test('should throw an error if one of the arguments is Infinity', () => {
        expect(() => BasicMath.subtract(10, Number.POSITIVE_INFINITY, 2)).toThrow('Invalid input. Please provide a valid number');
    })
});
