// > fizzBuzz(3); 
// 'Fizz'

// > fizzBuzz(5);
// 'Buzz'

// > fizzBuzz(8);
// 8

// > fizzBuzz(15);
// 'FizzBuzz'

// > fizzBuzz(18);
// 'Fizz'

// > fizzBuzz(20);
// 'Buzz'

const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('3 returns Fizz', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  })

  it('5 returns Buzz', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  })

  it('8 returns 8', () => {
    expect(fizzbuzz(8)).toBe(8);
  })

  it('15 returns FizzBuzz', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  })

  it('18 returns Fizz',() => {
    expect(fizzbuzz(18)).toBe('Fizz');
  })

  it('20 returns Buzz', () => {
    expect(fizzbuzz(20)).toBe('Buzz');
  })
})
