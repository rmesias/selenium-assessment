require('chromedriver');
const { Builder,until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
        chromeOptions.addArguments('--headless');
        chromeOptions.addArguments('--no-sandbox'); 
        chromeOptions.addArguments('--disable-dev-shm-usage');
        chromeOptions.addArguments('--disable-gpu');
var driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

class BasePage{
  constructor(){
      global.driver = driver;
  }

  async goToUrl(baseURL){
      await driver.get(baseURL);
  }

  async endSession(){
      await driver.quit();
  }

  async enterTextById(element,text){
      await driver.wait(until.elementLocated(element),5000);
      await driver.findElement(element).sendKeys(text);
      return;
  }

  async clickBtn(element){
      await driver.wait(until.elementLocated(element),5000);
      await driver.findElement(element).click();
      return;
  }


  async findElement(element,product){
    try {
      await driver.findElement(element);
      return false;
    }catch (error) {
      if(error.name === "NoSuchElementError") {
        console.log(`     Item "${product}" successfully remove from cart`);
          return true; // Element does not exist
      }else {
        throw error; // Rethrow if it’s a different error
      }
    }
  }
}

module.exports = BasePage;