const Basket = require('./basket');

describe('basket', () => {
  it('initialises an empty shopping basket with a total price of 0', () => {
    let basket = new Basket;
    expect(basket.items.length).toBe(0);
    expect(basket.getTotalPrice()).toBe(0);
  })
})


// > const candy = new Candy('Mars', 4.99);

// > candy.getName();
// 'Mars'
// > candy.getPrice();
// 4.99

// > const basket = new ShoppingBasket();
// > basket.getTotalPrice();
// 0

// > basket.addItem(candy);

// > basket.getTotalPrice();
// 4.99

// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));

// > basket.getTotalPrice();
// 12.97