const wrapWithResources = require('../utils/resourceWrapper')

const add = wrapWithResources((...numbers) => {
    // Throw error if arguments are less than 2
        if (numbers.length < 2) {
        throw new Error('At least two arguments must be provided')
    }

    // Throw error if arguments type is not valid Number 
    const result = numbers.reduce((acc, curr) => {
        if (isNaN(curr) || !isFinite(curr)) {
            throw new Error('Invalid input. Please provide a valid number')
        }

        return acc + curr
    },0)

    // Warn user if result is Infinity
    if (!isFinite(result)) {
        console.warn('Answer is Infinity')
    }

    return result
})


const subtract = wrapWithResources((...numbers) => {
    // Throw error if arguments are less than 2
        if (numbers.length < 2) {
        throw new Error('At least two arguments must be provided')
    }

    // Throw error if arguments type is not valid Number 
    const result = numbers.reduce((acc, curr) => {
        if (isNaN(curr) || !isFinite(curr)) {
            throw new Error('Invalid input. Please provide a valid number')
        }

        return acc - curr
    })

    return result
})

module.exports = { add, subtract }