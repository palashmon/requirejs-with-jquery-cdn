define(function () {
	
	console.log("JS : print");
	
	var printLocal = function (msg) {			
		console.log(msg);
	};

    return {	    
        print: printLocal
    };
});
