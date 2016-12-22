'use strict';

// -----------------------------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------------------------
const config = require('./resources/gulp/config');
const elixir = require('laravel-elixir');

// require('laravel-elixir-vue');
require('./resources/gulp/elixir-extensions');





// -----------------------------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------------------------
// asset paths for sass imports
elixir.config.css.sass.pluginOptions.includePaths = [
	'./node_modules/bourbon/app/assets/stylesheets/',
	'./node_modules/normalize-css/',
	'./node_modules/normalize-opentype.css/',
	'./node_modules/include-media/dist/',
	// './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/',
	// './node_modules/font-awesome/css/',
	// './node_modules/sweetalert2/src/',
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
elixir(mix => {

	// Copy Assets
	for ( var file in config.copyFiles ) {
		mix.copy( file, config.copyFiles[file] );
	}

	// Components / Plugins
	mix.webpack('bootstrap.js', 'public/js/plugins.js');


	// Front end Assets
	mix.sass(config.sass.appSass)                // Front end css
	   .webpack(config.js.appJs);             // Front end js


	// Cache Busting, Docs, Linting, Tests
	mix.version([
			'css/app.css',
			'js/app.js',
		])
	   .sassdocs();                               // Documents our sass
	   // .sassLint()                               // Lints our sass
	   // .jsLint()                                 // Lints our js
	   // .phpUnit();                               // Runs test suite


	// Auto page refresh, set to docker container ip
	mix.browserSync({
		proxy: '192.168.99.100'
	});
});

