define(["require", "jquery", "jquery.alpha", "jquery.beta", "app/messages", "print", "app/console"], function (require, $) {

	//debugger;
	console.log("JS : main");
	
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');
	
	/*
	// If this code is not in a define call,
	// DO NOT use require('foo'), but use the async
	// callback version:
	require(['foo'], function (foo) {
		//foo is now loaded.
	});
	*/
	
    // Load library/vendor modules using
    // full IDs, like:
    var p = require('print');
	var c = require('./console');
    
	var msg = messages.getHello();
    p.print(msg);

	//the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {		
        $('body').alpha().beta();
    });
});
