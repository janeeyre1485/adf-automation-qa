var NewFolderDialog = function() {
  var nameInput =  element(by.tagName('adf-folder-dialog')).element(by.id('adf-folder-name-input'));
  var createButton =  element(by.id('adf-folder-create-button'));
  var cancelButton =  element(by.id('adf-folder-cancel-button'));

  this.setName = async function(name) {
    await nameInput.sendKeys(name);
   };


  this.clickCreate = async function(){
    await createButton.click();
  }

    this.clickCancel = async function(){
      await cancelButton.click();
    }

  this.isDisplayed = async function(){
    return await nameInput.isDisplayed();
  }

};
module.exports = new NewFolderDialog();
