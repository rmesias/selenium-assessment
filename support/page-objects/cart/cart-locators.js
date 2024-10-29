const {By} = require(`selenium-webdriver`);

module.exports = {
  removeToCartBtnItems: {
    backPack: By.id(`remove-sauce-labs-backpack`), 
    bike: By.id(`remove-sauce-labs-bike-light`),
    tShirt: By.id(`remove-sauce-labs-bolt-t-shirt`),
    jacket: By.id(`remove-sauce-labs-fleece-jacket`),
    onesie: By.id(`remove-sauce-labs-onesie`),
    redTShirt: By.id(`remove-test.allthethings()-t-shirt-(red)`),
  },
  continueShoppingBtn: By.id(`continue-shopping`),
  checkoutBtn: By.id(`checkout`)
};