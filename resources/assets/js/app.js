const config = require('../../gulp/config');

const app = new Vue({
    el: 'main',

    data: {

    },


    mounted() {
    	console.log('App started');


        // Prevents links starting with # from moving page
		$('a[href^="#"]').click(function (e) {
			e.preventDefault();
		});


        
    },


    methods: {

    }
});


// Attach instance to window for debugging 
if (config.exposeApp) {
	window.App = app;
}