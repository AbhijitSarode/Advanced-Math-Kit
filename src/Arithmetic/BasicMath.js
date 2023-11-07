const wrapWithResources = require('../utils/resourceWrapper')
const warn = require('../utils/error')

const add = wrapWithResources((...numbers) => {
    // Throw error if arguments are less than 2
    if (numbers.length < 2) {
        throw new Error('At least two arguments must be provided for addition')
    }
    
    const result = numbers.reduce((acc, curr) => {
        // Throw error if arguments type is not valid Number 
        if (isNaN(curr) || !isFinite(curr)) {
            throw new Error('Invalid input. Please provide a valid number for addition')
        }
        
        return acc + curr
    },0)
    
    // Warn user if result is Infinity
    if (!isFinite(result)) {
        warn('add() answer is Infinity')
    }

    return result
})


const subtract = wrapWithResources((...numbers) => {
        // Throw error if arguments are less than 2
        if (numbers.length < 2) {
        throw new Error('At least two arguments must be provided for subtraction')
    }

    const result = numbers.reduce((acc, curr) => {
        // Throw error if arguments type is not valid Number 
        if (isNaN(curr) || !isFinite(curr)) {
            throw new Error('Invalid input. Please provide a valid number for subtraction')
        }

        return acc - curr
    })

    return result
})


const divide = wrapWithResources((...numbers) => {
        // Throw error if arguments are less than 2
        if (numbers.length < 2) {
        throw new Error('At least two arguments must be provided for division')
    }

    const result = numbers.reduce((acc, curr) => {
        // Throw an error if denominator is 0
        if (curr === 0) {
            throw new Error('Cannot divide by 0')
        }
        
        // Throw error if arguments type is not valid Number 
        if (isNaN(curr) || !isFinite(curr)) {
            throw new Error('Invalid input. Please provide a valid number for division')
        }

        return acc / curr
    })

    // Warn user if result is Infinity
    if (!isFinite(result)) {
        warn('divide() answer is Infinity')
    }

    return result
})

module.exports = { add, subtract, divide }