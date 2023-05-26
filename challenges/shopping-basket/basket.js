class Basket {
  constructor() {
    this.items = [];
  }

  getTotalPrice() {
    return this.items.reduce
    ((totalPrice, item) => totalPrice + item.getPrice(), 
    0,
    );
  }
}

module.exports = Basket;
