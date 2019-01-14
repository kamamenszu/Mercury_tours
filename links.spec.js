var linksPage = require('./pages/links');

describe('Mercury Tours demo site', function () {

	beforeEach(function () {
		linksPage.get();
	});

	it('should move us to page with title "404 Not Found" after clicking on first link', function () {
		expect(linksPage.clickFirstLinkMenu()).toBe("404 Not Found");
	});

	it('should move us to page with title "Trip Advisor:..." after clicking on second link', function () {
		expect(linksPage.clickSecondLinkMenu()).toBe("TripAdvisor: Read Reviews, Compare Prices & Book");
	});

	it('should check links', function () {
		expect(linksPage.getLinksMenu(1).getText()).toBe("Salon Travel");
	});

});
