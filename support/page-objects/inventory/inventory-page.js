let inventory = require(`../base-page`);
let Locators = require(`./inventory-locators`);

class InventoryPage extends inventory{

  async addItemsToCart(products){
    await this.selectProduct(products);
    await this.clickCartCTA();
  };

  async selectProduct(products){
    await products.forEach(element => {
      return this.clickBtn(Locators.addToCartBtnItems[element]);
    });
  };

  async clickCartCTA(){
    await this.clickBtn(Locators.addToCartCta);
  };

}

module.exports = new InventoryPage();

