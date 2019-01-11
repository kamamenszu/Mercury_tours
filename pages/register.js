var Register = function () {

    this.topMenuItems = element(by.css('tr> .mouseOut'));
    this.firstName = element(by.css('[name="firstName"]'));
    this.lastName = element(by.css('[name="lastName"]'));
    this.phone = element(by.css('[name="phone"]'));
    this.email = element(by.css('#userName'));
    this.address = element(by.css('[name="address1"]'));
    this.city = element(by.css('[name="city"]'));
    this.state = element(by.css('[name="state"]'));
    this.postal = element(by.css('[name="postalCode"]'));
    this.country = element(by.css('[name="country"]'));
    this.userName = element(by.css('[name="email"]'));
    this.password = element(by.css('[name="password"]'));
    this.confirmPassword = element(by.css('[name="confirmPassword"]'));
    this.submitButton = element(by.css('[type="submit"]'));
    this.registerHeader = element(by.xpath('//td/table/tbody/tr/td[2]/table/tbody/tr[3]/td/p[2]/font'));
  
  
    this.get = function () {
      browser.driver.get('http://demo.guru99.com/test/newtours/register.php');
    };
  
    this.getTitle = function () {
      return browser.driver.getTitle();
    };
  
    this.clickTopMenuItemAt = function (idx) {
      this.topMenuItems.get(idx).click();
    };
  
    this.sendKeysFirstName = function (name) {
      this.firstName.sendKeys(name);
    };

    this.sendKeysLastName = function (surname) {
        this.lastName.sendKeys(surname);
    };

    this.typePhone = function (phone) {
        this.phone.sendKeys(phone);
    };
    
    this.typeEmail = function (email) {
      this.email.sendKeys(email);
    };

    this.typeAddress = function (address) {
        this.address.sendKeys(address);
    };

    this.typeCity = function (city) {
        this.city.sendKeys(city);
    };

    this.typeState = function (state) {
        this.state.sendKeys(state);
    };

    this.typePostal = function (code) {
        this.postal.sendKeys(code);
    };

    this.typeCountry = function (country) {
        this.country.sendKeys(country);
    };

    this.typeUserName = function (username) {
        this.userName.sendKeys(username);
    };

    this.typePassword = function (idx) {
        this.password.sendKeys(idx);
    };

    this.typeConfirmPassword = function (cidx) {
        this.confirmPassword.sendKeys(cidx);
    };
  
    this.submitRegister = function (name, surname, phone, email, address, city, state, code, country, username, idx, cidx) {
      this.sendKeysFirstName(name);
      this.sendKeysLastName(surname);
      this.typePhone(phone);
      this.typeEmail(email);
      this.typeAddress(address);
      this.typeCity(city);
      this.typeState(state);
      this.typePostal(code);
      this.typeCountry(country);
      this.typeUserName(username);
      this.typePassword(idx);
      this.typeConfirmPassword(cidx);
      this.submitButton.click();
    }
  
    this.getRegisterHeader = function () {
      var EC = protractor.ExpectedConditions;
          var isPresent = EC.presenceOf(this.registerHeader);
          browser.wait(isPresent, 5000)
      return this.registerHeader.getText();
    }
  };
  
  module.exports = new Register();