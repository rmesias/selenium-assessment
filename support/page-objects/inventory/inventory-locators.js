const {By} = require(`selenium-webdriver`);

module.exports = {
  addToCartBtnItems: {
    backPack: By.id(`add-to-cart-sauce-labs-backpack`), 
    bike: By.id(`add-to-cart-sauce-labs-bike-light`),
    tShirt: By.id(`add-to-cart-sauce-labs-bolt-t-shirt`),
    jacket: By.id(`add-to-cart-sauce-labs-fleece-jacket`),
    onesie: By.id(`add-to-cart-sauce-labs-onesie`),
    redTShirt: By.css(`[name='add-to-cart-test.allthethings()-t-shirt-(red)']`),
  },
  addToCartCta: By.id(`shopping_cart_container`),
};