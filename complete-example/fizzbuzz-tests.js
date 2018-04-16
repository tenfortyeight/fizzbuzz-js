const fizzBuzz = require("./fizzbuzz")

describe("FizzBuzz:", () => {
  it("1 should be empty", () => {
    expect(fizzBuzz.try(1)).toEqual("1 is 1")
  })

  it("3 should be Fizz", () => {
    expect(fizzBuzz.try(3)).toEqual("Fizz")
  })

  it("5 should be Buzz", () => {
    expect(fizzBuzz.try(5)).toEqual("Buzz")
  })

  it("15 should be FizzBuzz!", () => {
    expect(fizzBuzz.try(15)).toEqual("FizzBuzz!")
  })
})
