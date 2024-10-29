let loginpage = require(`../base-page`);
let Locators = require(`./login-locators`);

class LoginPage extends loginpage{

  async usernameInput(username){
    await this.enterTextById(Locators.usernameInput,username);
  }

  async passwordInput(password){
    await this.enterTextById(Locators.passwordInput,password);
  }

  async loginBtn(){
    await this.clickBtn(Locators.loginBtn);
  }

  async login(username,password){
    await this.enterTextById(Locators.usernameInput,username);
    await this.enterTextById(Locators.passwordInput,password);
    await this.clickBtn(Locators.loginBtn);
  }
}
module.exports = new LoginPage();


