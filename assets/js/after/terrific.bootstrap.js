(function($) {
	$(document).ready(function() {
		var $page = $('body'),
			application = new Tc.Application();

		application.registerModules($page);
		application.start();
	});
})(Tc.$);