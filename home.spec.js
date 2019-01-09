var homePage = require('./pages/home');
var leftMenu = require('./pages/leftMenu.json');
var topMenu = require('./pages/topMenu.json');

describe('Mercury Tours demo site', function () {

	beforeEach(function () {
		homePage.get();
	});

	it('hould have home page with title Welcome: Mercury Tours', function () {
		expect(homePage.getTitle()).toEqual("Welcome: Mercury Tours");
	});

	it('should have footer with © 2005, Mercury Interactive (v. 011003-1.01-058)', function () {
		expect(homePage.checkFooterText()).toEqual("© 2005, Mercury Interactive (v. 011003-1.01-058)");
	});

	it('should have visable Mercury Tours logo after entering site' , function () {
		expect(homePage.isVisableLogo()).toBe(true);
	});

	it('should have menu items, top and left', function () {
		expect(homePage.getLeftMenuItems()).toEqual(leftMenu);
		expect(homePage.getTopMenuItems()).toEqual(topMenu);
	});

	it('should have check special offers', function () {
		expect(homePage.getSpecialOffersAtIdx(2).getText()).toBe("Los Angeles to Chicago");
	});

});
