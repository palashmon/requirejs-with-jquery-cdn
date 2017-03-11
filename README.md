# Example of using require.js to load jQuery from a CDN
Simplest case example of RequireJS

### Project structure

This web project has the following setup:

* www/ - the web assets for the project
    * index.html - the entry point into the app.
    * app.js - the top-level config script used by index.html
    * app/ - the directory to store project-specific scripts.
    * lib/ - the directory to hold third party scripts.

	
### How it's set up

The main file of this setup is www/app.js. It is loaded from `index.html` by this line:

```html
<script data-main="app" src="lib/require.js"></script>
```

App.js is mainly about path configuration. We point out the special paths to our app code, and to the google CDN for jQuery. Finally, our main code is loaded at the bottom of the file:

```javascript
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
		jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
```

app/main.js is where the app logic is:

```javascript
define(["require", "jquery", "jquery.alpha", "jquery.beta", "app/messages", "print", "app/console"], function (require, $) {

    // Load any app-specific modules
    // with a relative require call, like:
    var messages = require('./messages');

    // Load library/vendor modules using full IDs, like:
    var p = require('print');
	var c = require('./console');
    
	var msg = messages.getHello();
    p.print(msg);

	//the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {		
        $('body').alpha().beta();
    });
});
```

### More information
	
For more information on using requirejs:
http://requirejs.org/docs/api.html
