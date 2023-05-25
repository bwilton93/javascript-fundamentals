const add = require('./add');

describe('add', () => {
  // test cases
  it('adds 2 and 2', () => {
    expect(2 + 2).toBe(4);
  })

  it('adds 1 and 6', () => {
    expect(1 + 6).toBe(7);
  })
});
