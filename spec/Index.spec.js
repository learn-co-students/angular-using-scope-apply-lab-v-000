var path = require('path');

describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	it('should increment counter on keydown', function() {
		var directive = element(by.css('h3'));

		expect(directive.getText()).toEqual('0');

		element(by.css('body')).sendKeys('1');

		expect(directive.getText()).toEqual('1');
	});
});
