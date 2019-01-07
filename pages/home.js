var HomePage = function() {

  this.footer = element(by.css('td > .footer'));
  this.logo = element(by.css("[alt='Mercury Tours']"));
  this.specialOffers = element.all(by.css("table[width='270'] tbody > tr td[width='80%']"));
  this.leftMenu = element.all(by.css('tbody > .mouseOut'));
  this.topMenu = element.all(by.css('tr > .mouseOut'));

  /*this.menuItems = element.all(by.css('ul.nav > li > a')); 
  this.nextArrow = element(by.css('a.right'));
  this.header = element(by.xpath('//div[2]/div/div/div[1]/div/h1'));
  this.drop = element(by.xpath('//ul/li[2]/a/b'));
  this.menuAbout = element(by.css('ul.dropdown-menu'));*/

  this.get = function() {
    browser.driver.get('http://demo.guru99.com/test/newtours/index.php');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.getText = function() {
    return this.footer.getText();
  };

  this.visableLogo = function() {
    return this.logo.isPresent();
  };

  this.getLeftMenuAtIdx = function(idx) {
    return this.leftMenu.get(idx);
  };

  this.getTopMenuAtIdx = function(idx) {
    return this.topMenu.get(idx);
  }

  this.getSpecialOffersAtIdx = function(idx) {
    return this.specialOffers.get(idx);
  };
  
  /*this.clickArrow = function() {
    this.nextArrow.click();
    browser.sleep(1000);
  }

  this.getHeadline2 = function () {
    return this.header.getText();
  }

  this.clickDropAndCheck = function() {
    this.drop.click();
    var EC = protractor.ExpectedConditions;
		var isPresent = EC.presenceOf(this.menuAbout);
		browser.wait(isPresent, 5000)
  }

  this.getMenuAbout = function() {
    return this.menuAbout.isDisplayed();
  }*/
};

module.exports = new HomePage();
