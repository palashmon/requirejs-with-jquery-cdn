define(function () {
	
	console.log("JS : messages");
	
	var getHelloLocal = function () {			
		return 'Hello World';
	};
	
    return {
        getHello: getHelloLocal
    };
});
