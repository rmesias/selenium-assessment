const {By} = require(`selenium-webdriver`);

module.exports = {
  usernameInput: By.id(`user-name`),
  passwordInput: By.id(`password`),
  loginBtn: By.id(`login-button`),
};