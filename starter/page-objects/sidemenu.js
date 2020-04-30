var SideMenu = function() {
  var filesButton =  element(by.css('[data-automation-id="Content Services"]'));

 this.clickContentServices = async function(option) {
   await filesButton.click();
  };

};
module.exports = new SideMenu();
