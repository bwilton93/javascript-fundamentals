const multiply = require('./multiply');

describe('multiply', () => {
  // test cases
  it('multiplies 1 and 2', () => {
    expect(1 * 2).toBe(2);
  })

  it('multiplies 2 and 4', () => {
    expect(2 * 4).toBe(8);
  })

  it('multiplies -1 and 1', () => {
    expect(-1 * 1).toBe(-1);
  })

  it('multiplies -2 and -2', () => {
    expect(-2 * -2).toBe(4);
  })
});
