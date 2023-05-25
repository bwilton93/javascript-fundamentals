class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(candy) {
    this.basket.push(candy);
  }

  getTotalPrice() {
    return this.basket.reduce
    ((totalPrice, candy) => totalPrice + candy.getPrice(), 
    0,
    );
  }
}

module.exports = ShoppingBasket;
