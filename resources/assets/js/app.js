const config = require('../../gulp/config');

require('./utilities/Util');


const app = new Vue({
    el: 'body',

    data: {

    },


    ready() {
    	// Prevents links starting with # from moving page
		$('a[href^=#]').click(function (e) {
			e.preventDefault();
		});


    },


    methods: {

    }
});


// Attach instance to window for debugging 
if (config.exposeApp) {
	window.app = app;
}