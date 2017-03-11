define(["jquery"], function($) {
	$.fn.beta = function() {
		return this.append('<p style="color:red">Beta is Go!</p>');
	};
});