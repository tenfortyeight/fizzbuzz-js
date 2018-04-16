// säg "fizz" om det är delbart med 3
// säg "buzz" om det är delbar med 5
// om talet är delbart med både 3 och 5, säg "FizzBuzz!"
// annars säg bara talet

module.exports.try = (number) => {
  if ((number % 3) === 0 && (number % 5) === 0) {
    return "FizzBuzz!"
  }

  if ((number % 3) === 0) {
    return "Fizz"
  }

  if ((number % 5) === 0) {
    return "Buzz"
  }

  return `${number} is ${number}`
}

const consoleRun = () => {
  for (let i = 0; i < 100; i++) {
    console.log(this.try(i))
  }
}

consoleRun()
