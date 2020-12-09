class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    // array to match Coverage Types against classes
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
