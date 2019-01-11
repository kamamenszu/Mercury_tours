var Links = function () {

    this.firstLink = element(by.css('[href="http://businesstravel.about.com/mbody.htm?PM=78_101_T&cob=home"]'));
    this.secondLink = element(by.css('[href="https://www.tripadvisor.in/"]'));
    this.linksMenu = element.all(by.xpath('//tbody/tr[12]/td/table/tbody/tr/td/font/a'));;

    this.get = function () {
        browser.driver.get('http://demo.guru99.com/test/newtours/index.php');
    };

    this.clickFirstLinkMenu = function () {
        this.firstLink.click();
        return browser.driver.getTitle();
    };

    this.clickSecondLinkMenu = function () {
        this.secondLink.click();
        return browser.driver.getTitle();
    };

    this.getLinksMenu = function (idx) {
        return this.linksMenu.get(idx);
    };
};

module.exports = new Links();
