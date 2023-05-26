const Candy = require('./candy');

describe('Candy', () => {
  it('returns the correct name for a candy', () => {
    candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toEqual('Mars');
  })

  it('returns the correct price for a candy', () => {
    candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toBe(4.99);
  })
})
