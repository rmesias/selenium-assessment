let cart = require(`../base-page`);
let Locators = require(`./cart-locators`);

class CartPage extends cart{

  async removeItem(...items){
    items.forEach(element => {
      return this.clickBtn(Locators.removeToCartBtnItems[element]);
    });
  }
  
  async clickCartCTA(){
    await this.clickBtn(Locators.addToCartCta);
  }

  async assertCartProducts(product){
    await driver.sleep(500);
    await this.findElement(Locators.removeToCartBtnItems[product],product);
  }
}

module.exports = new CartPage();
