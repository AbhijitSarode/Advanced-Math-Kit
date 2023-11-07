const warn = (message) => {
    // \x1b[35m ANSI code sets text color to Magenta
    // \x1b[0m ANSI code resets text color to default
    console.warn(`\x1b[35mWarning: ${message}\x1b[0m`) 
}
  
module.exports = warn