const { BasicMath } = require('advanced-math-kit')

describe('multiply function', () => {
    test('should multiply two numbers correctly', () => {
        expect(BasicMath.multiply(6, 2)).toHaveProperty('result', 12)
    })

    test('should multiply multiple numbers correctly', () => {
        expect(BasicMath.multiply(60, 2, 3)).toHaveProperty('result', 360)
    })

    test('should multiply two negative numbers correctly', () => {
        expect(BasicMath.multiply(-10, -2)).toHaveProperty('result', 20)
    })

    test('should multiply multiple negative numbers correctly', () => {
        expect(BasicMath.multiply(-60, -2, -3)).toHaveProperty('result', -360)
    })

    test('should multiply decimal numbers correctly', () => {
        expect(BasicMath.multiply(5.5, 2.5)).toHaveProperty('result', 13.75)
    })

    test('should throw an error if no arguments are provided', () => {
        expect(() => BasicMath.multiply()).toThrow('At least two arguments must be provided for multiplication')
    })

    test('should throw an error if any one argument is not a valid Number', () => {
        expect(() => BasicMath.multiply(1, 'foo', 5)).toThrow('Invalid input. Please provide a valid number for multiplication')
    })

    test('should throw an error if one of the arguments is NaN', () => {
        expect(() => BasicMath.multiply(1, NaN, 2)).toThrow('Invalid input. Please provide a valid number for multiplication')
    })

    test('should log a warning if one of the arguments is null', () => {
        const originalConsoleWarn = console.warn
        let consoleOutput = []

        console.warn = (message) => consoleOutput.push(message)

        BasicMath.multiply(Number.MAX_VALUE, null)

        console.warn = originalConsoleWarn

        expect(consoleOutput.length).toBe(1)
        expect(consoleOutput[0]).toContain('Warning: One of the values is null')
    })

    test('should log a warning for Infinity result', () => {
        const originalConsoleWarn = console.warn
        let consoleOutput = []

        console.warn = (message) => consoleOutput.push(message)

        BasicMath.multiply(Number.MAX_VALUE, Number.MAX_VALUE)

        console.warn = originalConsoleWarn

        expect(consoleOutput.length).toBe(1)
        expect(consoleOutput[0]).toContain('Warning: multiply() answer is Infinity')
    })
})
