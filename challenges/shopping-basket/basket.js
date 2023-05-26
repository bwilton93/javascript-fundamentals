class Basket {
  constructor() {
    this.items = [];
  }

  addItem(candy) {
    this.items.push(candy);
  }

  getTotalPrice() {
    return this.items.reduce
    ((totalPrice, item) => totalPrice + item.getPrice(), 
    0,
    );
  }
}

module.exports = Basket;
