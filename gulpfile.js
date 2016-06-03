'use strict';

// -----------------------------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------------------------
var gulp    = require('gulp'),
	config  = require('./resources/gulp/config'),
	elixir  = require('laravel-elixir');


require('./resources/gulp/elixir-extensions');





// -----------------------------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------------------------
// asset paths for sass imports
elixir.config.css.sass.pluginOptions.includePaths = [
	'./bower_components/bourbon/app/assets/stylesheets/',
	'./bower_components/bootstrap-sass/assets/stylesheets/bootstrap/',
	'./bower_components/normalize-css/',
	'./bower_components/normalize-opentype.css/',
	'./bower_components/fontawesome/css/',
	'./bower_components/include-media/dist/',
	'./bower_components/sweetalert2/src/',
];

// alters style of default compiled css
elixir.config.css.sass.pluginOptions.outputStyle = 'compact';





// -----------------------------------------------------------------------------------------------
// Main task - `gulp` or `gulp watch`
// 
// `gulp`               - runs all commands
// `gulp --production`  - same as above but minifies css/js and no source maps
// `gulp watch`         - runs all commands and re-runs filetype specific task when they change
// -----------------------------------------------------------------------------------------------
elixir(function(mix) {

	// Assets
	for ( var file in config.copyFiles ) {
		mix.copy( file, config.copyFiles[file] );
	}

	// Components and Plugins
	mix.scripts(config.js.plugins, 'public/js/plugins.js');


	// Front end
	mix.sass(config.sass.appSass)                                   // Front end css
	   .browserify(config.js.appJs, config.js.appOutput);           // Front end js

	// Back end
	// mix.sass(config.sass.adminSass)                                   // Back end css
	   // .browserify(config.js.adminJs, config.js.adminOutput);           // Back end js


	// Cache busting and Documentation
	mix.version([
		'public/css/app.css',
		'public/js/app.js',
	])
	   .sassdocs()                    // Documents our sass
	   .sassLint()                    // Lints our sass
	   .jsLint()                      // Lints our js
	   .phpUnit();                    // Runs test suite


	// Auto page refresh, set to docker container ip
	mix.browserSync({
		proxy: '192.168.99.100'
	});
});

