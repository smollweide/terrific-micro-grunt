(function ($) {
	'use strict';

	test('Footer', function() {

		var result,
			expected,
			message,
			TcModule = Tc.Module.Footer.prototype;

		module('install', {
			setup: function() {
				TcModule = Tc.Module.Footer.prototype;
			}, teardown: function() {
				result = null;
				expected = null;
				message = null;
				TcModule = null;
			}
		});

		// test 1
		result  = TcModule.on(function () {});
		expected = undefined;
		message = '';
		deepEqual(result, expected, message);
		// end test
	});

}(jQuery));
