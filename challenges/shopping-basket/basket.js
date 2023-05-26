class Basket {
  constructor() {
    this.items = [];
    this.discount = 0;
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  addItem(candy) {
    this.items.push(candy);
  }

  getTotalPrice() {
    let totalPrice = this.items.reduce
    ((totalPrice, item) => totalPrice + item.getPrice(), 
    0,
    );

    return totalPrice - this.discount;
  }
}

module.exports = Basket;
