var HomePage = function() {

  this.footer = element(by.css('td > .footer'));
  this.logo = element(by.css("[alt='Mercury Tours']"));
  this.specialOffers = element.all(by.css("table[width='270'] tbody > tr td[width='80%']"));
  this.leftMenuItems = element(by.xpath('//a[text()="Home"]/../../../../..')).all(by.css('a'));
  this.topMenuItems = element(by.xpath('//a[text()="SIGN-ON"]/../../../..')).all(by.css('a'));
  



  this.get = function() {
    browser.driver.get('http://demo.guru99.com/test/newtours/index.php');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.checkFooterText = function() {
    return this.footer.getText();
  };

  this.isVisableLogo = function() {
    return this.logo.isPresent();
  };

  this.getLeftMenuItems = function(){
    return this.leftMenuItems.map(function(elm, index) {
      return { 
        index: index,
        name: elm.getText()
      };
    });
  };

  this.getTopMenuItems = function(){
    return this.topMenuItems.map(function(elm, index) {
      return {
        index: index,
        name: elm.getText()
      };

    });
  };

  this.getSpecialOffersAtIdx = function(idx) {
    return this.specialOffers.get(idx);
  };
};

module.exports = new HomePage();
