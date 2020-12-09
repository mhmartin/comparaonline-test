class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    const productTypeClasses = [
     {"name": "Medium Coverage", "class": "CarInsuranceMediumCoverage"},
     {"name": "Full Coverage", "class": "CarInsuranceFullCoverage"},
     {"name": "Low Coverage", "class": "CarInsuranceLowCoverage"},
     {"name": "Mega Coverage", "class": "CarInsuranceMegaCoverage"},
     {"name": "Special Full Coverage", "class": "CarInsuranceSpecialFullCoverage"},
     {"name": "Super Sale", "class": "CarInsuranceSuperSale"}
    ];

    // create an object's array to call each updatePrice method
    this.products = [];
    for (var i in products) {
      var found = false;
      for (var j in productTypeClasses) {
        if (products[i]['name'] === productTypeClasses[j].name) {
          found = true;
          let createClassStr = 'new ' + productTypeClasses[j].class + '("' + products[i]['name'] + '",' + products[i]['sellIn'] + ',' + products[i]['price'] + ')';
          this.products.push(eval(createClassStr));
        }
      }
      if (!found) {
        this.products.push(new CarInsuranceGenericCoverage(products[i]['name'], products[i]['sellIn'], products[i]['price']));
      }
    }
  }
  updatePrices() {
    for (var i = 0; i < this.products.length; i++) {
      this.products[i].updatePrice();
    }
    return this.products;
  }
  updatePrice(product, decrease = 1) {
    product.sellIn = product.sellIn - 1;
    if (product.price > 0 && product.price < 50) {
      product.price = product.price - decrease;
      if (product.sellIn < 0) {
        product.price = product.price - decrease;
      }
    }
  }
}

module.exports = {
  Product,
  CarInsurance
};


class CarInsuranceGenericCoverage extends CarInsurance {
  constructor(name, sellIn, price) {
    super();
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  updatePrice() {
    super.updatePrice(this);
  }
};

class CarInsuranceMediumCoverage extends CarInsurance {
  constructor(name, sellIn, price) {
    super();
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  updatePrice() {
    super.updatePrice(this);
  }
};

class CarInsuranceFullCoverage extends CarInsurance {
  constructor(name, sellIn, price) {
    super();
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  updatePrice() {
    this.sellIn = this.sellIn -1;
    if (this.price < 50) {
      if (this.sellIn < 0) {
        this.price = this.price + 1;
      }
      this.price = this.price + 1;
    }
  }
};

class CarInsuranceLowCoverage extends CarInsurance {
  constructor(name, sellIn, price) {
    super();
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  updatePrice() {
    super.updatePrice(this);
  }
};

class CarInsuranceMegaCoverage extends CarInsurance {
  constructor(name, sellIn, price) {
    super();
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  updatePrice() {
  }
};

class CarInsuranceSpecialFullCoverage extends CarInsurance {
  constructor(name, sellIn, price) {
    super();
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  updatePrice() {
    this.sellIn = this.sellIn -1;
    if (this.sellIn > -1) {
      if (this.price < 50) {
        if (this.sellIn < 10 && this.price < 50) {
          this.price = this.price + 1;
          if (this.sellIn < 5 && this.price < 50) {
            this.price = this.price + 1;
          }
        }
        if (this.price < 50) {
          this.price = this.price + 1;
        }
      }
    } else {
      this.price = this.price - this.price;
    }
  }
};

class CarInsuranceSuperSale extends CarInsurance {
  constructor(name, sellIn, price) {
    super();
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  updatePrice() {
    super.updatePrice(this, 2);
  }
};
