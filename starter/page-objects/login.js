var LoginPage = function() {
  var username =  element(by.id('username'));
  var password = element(by.id('password'));
  var signInButton = element (by.id("login-button"));

 this.get = async function() {
    await browser.get('http://qaexercise.envalfresco.com/login');
  };

 this.setUsername = async function(username1) {
  await username.sendKeys(username1);
 };

  this.setPassword = async function(password1) {
   await password.sendKeys(password1);
  };

 this.clickSignIn = async function() {
   await signInButton.click();
  };

};
module.exports = new LoginPage();
