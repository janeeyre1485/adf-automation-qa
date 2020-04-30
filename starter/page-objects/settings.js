var SettingsPage = function() {
  var providerDropdown =  element(by.id('adf-provider-selector'));
  var applyButton = element(by.id('host-button'));

 this.get = async function() {
    await browser.get('http://qaexercise.envalfresco.com/settings');
  };

 this.selectOption = async function(option) {
  await providerDropdown.click();
  await element(by.cssContainingText('mat-option', option)).click();
 };

 this.clickApply = async function(option) {
   await applyButton.click();
  };

};
module.exports = new SettingsPage();
