const wrapWithResources = (fn) => {
    return (...args) => {
      let result
      let memoryUsage
  
      if (process.env.NODE_ENV === 'development') {
        const startMemory = process.memoryUsage().heapUsed
        result = fn(...args)
        const endMemory = process.memoryUsage().heapUsed
        memoryUsage = endMemory - startMemory
        console.log(`Resource Measurement - Result: ${result},\nMemory Usage: ${memoryUsage} bytes`)
        return { result, memoryUsage }
      } else {
        result = fn(...args)
      }
  
      return result
    }
  }
  
  module.exports = wrapWithResources
  