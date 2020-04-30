// spec.js
var settingsPage = require('./page-objects/settings.js');
var loginPage = require('./page-objects/login.js');
var filesPage = require('./page-objects/files.js');
var sideMenu = require('./page-objects/sideMenu.js');
var newFolderDialog = require('./page-objects/newfolderdialog.js');
describe('ADF Demo App', function() {

  it('test',  async function() {
      await settingsPage.get();

      await settingsPage.selectOption('ECM');

      await settingsPage.clickApply();

      await loginPage.setUsername("guest@example.com");
      await loginPage.setPassword("Password");
      await loginPage.clickSignIn();

      await sideMenu.clickContentServices();

      await filesPage.get();
      await filesPage.clickNewFolder();

      expect(newFolderDialog.isDisplayed()).toBe(true);

      await newFolderDialog.setName("JaneEyre1485");
      await newFolderDialog.clickCreate();

      expect(filesPage.getNameRow("JaneEyre1485").isDisplayed()).toBe(true);

      await filesPage.clickNewFolder();
      expect(newFolderDialog.isDisplayed()).toBe(true);
      await newFolderDialog.setName("JaneEyre1485");
      await newFolderDialog.clickCreate();
      expect(filesPage.getToast().getText()).toEqual("There's already a folder with this name. Try a different name.");

      await newFolderDialog.clickCancel();

      await filesPage.clickContextualMenu("JaneEyre1485");
      await filesPage.clickDelete();
  });

});
