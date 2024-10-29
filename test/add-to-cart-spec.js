const loginpage = require(`../support/page-objects/login/login-page`);
const inventory = require(`../support/page-objects/inventory/inventory-page`);
const cart = require(`../support/page-objects/cart/cart-page`);

describe(`Customer add and remove item from Cart`,async ()=>{
  beforeEach(async () => {
    await loginpage.goToUrl(`https://www.saucedemo.com/`);
  });

  //After all scenario is done, close driver
  after(async () => {
    await loginpage.endSession()
  });

  //Scenario: User login
  it(`Scenario 1: User login`, async ()=>{
    await loginpage.usernameInput(`standard_user`); //For security purposes, Credential can be stored at dotEnv
    await loginpage.passwordInput(`secret_sauce`);
    await loginpage.loginBtn();
  });

  it(`Scenario 2: Add to Cart`,async () => {
    const products = [`backPack`,`bike`,`tShirt`];
  
    loginpage.login(`standard_user`,`secret_sauce`);
    //Product are categorized by [backPack, bike, tShirt, jacket, onesie,redTShirt:
    inventory.selectProduct(products);
    inventory.clickCartCTA();
    await cart.assertCartProducts(`backPack`);
    await cart.assertCartProducts(`bike`);
    await cart.assertCartProducts(`tShirt`);
  });

  it(`Scenario 3: Removed item from Cart`, async ()=>{
    const products = [`jacket`,`onesie`,`redTShirt`];
    await loginpage.login(`standard_user`,`secret_sauce`);
    await inventory.selectProduct(products);
    await inventory.clickCartCTA();
    await cart.removeItem(`bike`,`redTShirt`);
    await cart.assertCartProducts(`redTShirt`);
    await cart.assertCartProducts(`bike`);
  });
});

