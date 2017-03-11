define(["jquery"], function($) {
	$.fn.alpha = function() {
		return this.append('<p style="color:green">Alpha is Go!</p>');
	};
});