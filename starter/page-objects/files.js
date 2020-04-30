var FilesPage = function() {
  var newFolderButton =  element(by.css('[data-automation-id="create-new-folder"]'));
  var namesGrid = element(by.id('document-list-container'));
  var toast = element(by.cssContainingText('cdk-live-announcer-element'));

   this.clickNewFolder = async function(option) {
     await newFolderButton.click();
   };

   this.getNameRow =  function(username){
      return  namesGrid.element(by.cssContainingText('adf-datatable-row', username));
   }

   this.clickContextualMenu = async function(username){
     await this.getNameRow(username).element(by.id('action_menu_right_2')).click();
   }

   this.clickDelete = async function(){
     await element(by.css("[class='mat-menu-content']")).element(by.css("[aria-label='Delete']")).click();
   }

   this.getToast = function(){
      return element(by.tagName('simple-snack-bar'));
   }
};
module.exports = new FilesPage();
