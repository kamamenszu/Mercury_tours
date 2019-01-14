# Mercury_tours - demo site

## General info
Project for begginers. This little project is made to fix my elementary knowledge about running tests in Protractor. We use here basic knowledge to test simple website. We can get acquainted with css selectors, xpth method to find element on website, also we use function such get(); getText(); click() to make first basic test to vheck footer, headline or menu items on website.

## Setup

Clone this repo to your desktop and run npm install to install all the dependencies. Then npm start.

Start the test application http://demo.guru99.com/test/newtours/index.php.

You might want to look into config.json to make some changes.

## Code Examples
this.getRegisterHeader = function () {
      var EC = protractor.ExpectedConditions;
          var isPresent = EC.presenceOf(this.registerHeader);
          browser.wait(isPresent, 5000)
      return this.registerHeader.getText();
    };

## Features
* Learn about synchronization with website and use smart waits with Protractor.
* Learn map funkction to creste new table of context.
* Learn how to export and require page object pattern You will use in Your tests.

## Status
Project is: _in progress_.

## Inspiration
Project inspired by Selenium Learning Course from www.guru99.com. The couse were designed for those who has little or none Selenium experience. I've changed tasks to make some tests in Protractor which I start to learn.  

## Contact
Feel free to contact me!
