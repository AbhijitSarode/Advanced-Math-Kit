const { BasicMath } = require('advanced-math-kit')

describe('add function', () => { 
    test('should add two numbers correctly', () => { 
        expect(BasicMath.add(2, 3)).toHaveProperty('result', 5);
    })

    test('should add multiple numbers correctly', () => { 
        expect(BasicMath.add(1, 2, 3, 4)).toHaveProperty('result', 10);
    })

    test('should add two negative numbers correctly', () => { 
        expect(BasicMath.add(-2, -3)).toHaveProperty('result', -5);
    })

    test('should add multiple negative numbers correctly', () => { 
        expect(BasicMath.add(-1, 2, 3, -4, 5, -6)).toHaveProperty('result', -1);
    })

    test('should add decimal numbers correctly', () => { 
        expect(BasicMath.add(1.0, 2.0, 3.0, -4.0, 5.0, -6.0)).toHaveProperty('result', 1.0);
    })

    test('should throw an error if no argument is provided', () => { 
        expect(() => BasicMath.add()).toThrow('At least two arguments must be provided')
    })

    test('shouldthrow an error if any one argument is not valid number', () => { 
        expect(() => BasicMath.add(-1, 'foo', 5)).toThrow('Invalid input. Please provide a valid number');
    })

    test('should throw an error if one of the arguments is NaN', () => { 
        expect(() => BasicMath.add(-1, NaN, 2)).toThrow('Invalid input. Please provide a valid number')
    })

    test('should throw an error if one of the arguments is undefined', () => { 
        expect(() => BasicMath.add(10, undefined, 2)).toThrow('Invalid input. Please provide a valid number')
    })

    test('should throw an error if one of the arguments is Infinity', () => { 
        expect(() => BasicMath.add(10, Number.POSITIVE_INFINITY, 2)).toThrow('Invalid input. Please provide a valid number')
    })
    
    test('should log a warning for Infinity result', () => { 
        const originalConsoleWarn = console.warn;
        let consoleOutput = [];

        console.warn = (message) => consoleOutput.push(message)

        BasicMath.add(Number.MAX_VALUE, Number.MAX_VALUE);

        console.warn = originalConsoleWarn;

        expect(consoleOutput.length).toBe(1);
        expect(consoleOutput[0]).toContain('Warning: add() answer is Infinity');
    });
})

