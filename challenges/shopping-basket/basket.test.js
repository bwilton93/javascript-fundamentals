const exp = require('constants');
const Basket = require('./basket');

describe('basket', () => {
  it('initialises an empty shopping basket with a total price of 0', () => {
    let basket = new Basket;
    expect(basket.items.length).toBe(0);
    expect(basket.getTotalPrice()).toBe(0);
  })

  it('can add an item to the basket', () => {
    const basket = new Basket;
    let fakeCandy = {
      getName: () => 'Mars',
      getPrice: () => 4.99
    };

    basket.addItem(fakeCandy);
    expect(basket.items.length).toBe(1);
    expect(basket.getTotalPrice()).toBe(4.99);
  })

  it('can add multiple items to the basket', () => {
    const basket = new Basket;
    let fakeCandy = {
      getName: () => 'Mars',
      getPrice: () => 4.99
    };

    basket.addItem(fakeCandy);

    fakeCandy = {
      getName: () => 'Skittle',
      getPrice: () => 3.99
    };

    basket.addItem(fakeCandy);
    basket.addItem(fakeCandy);

    expect(basket.items.length).toBe(3);
    expect(basket.getTotalPrice()).toBe(12.97)
  })
})
