var registerPage = require('./pages/register');

describe('Mercury Tours demo site', function() {

	beforeEach(function () {
		registerPage.get();
	});

	it('hould have Register page with title "Register: Mercury Tours"', function(){
		expect(registerPage.getTitle()).toEqual("Register: Mercury Tours");
	});

	it('should display text "Thank you for registering."', function(){
		registerPage.submitRegister("Ania", "Aniak", "123123123", "ania@op.pl", "Kopernika 36", "Łódź", "łódzkie", "90-100", "Poland", "AAA", "valid", "valid");
		expect(registerPage.getRegisterHeader()).toBe("Thank you for registering. You may now sign-in using the user name and password you've just entered.");
	});

});