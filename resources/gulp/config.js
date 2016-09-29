/**
 * Stores all config options used for Gulp Tasks
 * 
 * @return {Object}
 */

var sassVendor = "./resources/assets/sass/vendor";

module.exports = {

	// Attach compiled js to window
	exposeApp: true,


	// Custom Sass
	sass : {
		// Source folder
		source : './resources/assets/sass/**/*.scss',

		// Main files, default path relative to `./resources/assets/sass/`
		appSass: 'app.scss',
	},


	// Sass documentation options
	sassDoc: {
		options : {
			dest: './public/docs/sass',
			display: {
				access: ['public'],
			}
		}
	},

	
	// Custom js
	js : {
		// JS source folders
		source  : './resources/assets/js/**/*.js',

		// Main files, default path relative to `./resources/assets/js/`
		appJs: 'app.js',
		appOutput: './public/js/app.js',
		
		
		// Plugins added via Bower
		plugins : [
			"./bower_components/jquery/dist/jquery.js",
			"./bower_components/bootstrap-sass/assets/javascripts/bootstrap.js",
			"./bower_components/sweetalert2/src/sweetalert2.js",
		],
	},



	// Copies assets from Bower components
	copyFiles : {
		"bower_components/font-awesome/fonts/*" : 'public/fonts',
	}
};