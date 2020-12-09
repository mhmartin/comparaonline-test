const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should check for results", function() {
    var coTest = null;

    coTest = new CarInsurance(
            [
              new Product('Medium Coverage', 10, 20),
              new Product('Full Coverage', 2, 0),
              new Product('Low Coverage', 5, 7),
              new Product('Mega Coverage', 0, 80),
              new Product('Special Full Coverage', 15, 20),
              new Product('Special Full Coverage', 10, 49),
              new Product('Special Full Coverage', 5, 49),
              new Product('Super Sale', 3, 6),
              new Product('New Coverage', 10, 8),
              new Product('New Coverage', 10, 80)
            ]
            );
    var products = null;
    for (let i = 1; i <= 30; i += 1) {
      products = coTest.updatePrices();
    }
    expect(products[0].price).equal(0);
    expect(products[0].sellIn).equal(-20);
    expect(products[1].price).equal(50);
    expect(products[1].sellIn).equal(-28);
    expect(products[2].price).equal(0);
    expect(products[2].sellIn).equal(-25);
    expect(products[3].price).equal(80);
    expect(products[3].sellIn).equal(0);
    expect(products[4].price).equal(0);
    expect(products[4].sellIn).equal(-15);
    expect(products[5].price).equal(0);
    expect(products[5].sellIn).equal(-20);
    expect(products[6].price).equal(0);
    expect(products[6].sellIn).equal(-25);
    expect(products[7].price).equal(0);
    expect(products[7].sellIn).equal(-27);
    expect(products[8].price).equal(0);
    expect(products[8].sellIn).equal(-20);
    expect(products[9].price).equal(80);
    expect(products[9].sellIn).equal(-20);
  });

});
