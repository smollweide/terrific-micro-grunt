(function ($) {
	'use strict';

	test('ModuleName', function() {

		var result,
			expected,
			message,
			TcModule = Tc.Module.ModuleName.prototype;

		module('install', {
			setup: function() {
				TcModule = Tc.Module.ModuleName.prototype;
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