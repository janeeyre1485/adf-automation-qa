## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies

## Description
- run tests: `protractor conf.js`
## Explanation
- created page objects for all pages that the test interacts with for cleaner code
- the test only uses methods from the page object classes and not direct 
- used async/await to manage JavaScript asynchronous behaviour and disabled WebDriver control flow which is deprecated
- test only calls page object's methods
- used locators by id when possible and preferred by css on no id present
