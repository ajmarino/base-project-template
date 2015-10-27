'use strict';

// -----------------------------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------------------------
var gulp    = require('gulp'),
	config  = require('./resources/assets/gulp/config'),
	elixir  = require('laravel-elixir'),
	jshint  = require('gulp-jshint'),
	eslint  = require('gulp-eslint'),
	sassdoc = require('sassdoc');





// -----------------------------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------------------------
elixir.config.css.sass.pluginOptions.outputStyle = 'compact';




// -----------------------------------------------------------------------------------------------
// Sass Documentation
// -----------------------------------------------------------------------------------------------
gulp.task('sassdocs', function () {
	gulp.src(config.sass.source)
		.pipe(sassdoc(config.sass.options));
});
	




// -----------------------------------------------------------------------------------------------
// JS Lint
// -----------------------------------------------------------------------------------------------
gulp.task('js-lint', function () {
	return gulp.src('resources/assets/js/**/*.js')
				.pipe( jshint() );
});





// -----------------------------------------------------------------------------------------------
// ES Lint
// -----------------------------------------------------------------------------------------------
gulp.task('es-lint', function () {
	return gulp.src(config.js.source)
				.pipe( eslint() )
				.pipe( eslint.format() )
				.pipe( eslint.failOnError() );
});






// -----------------------------------------------------------------------------------------------
// Main task - `gulp` or `gulp watch`
// 
// `gulp`       - runs all commands
// `gulp watch` - runs all commands and re-runs filetype specific task when they change
// 
// 1.  copy assets
// 	   - bower components
// 	   - pixel admin js
// 2.  generate main sass file
// 3.  compile pixel admin theme css
// 4.  compile custom admin scss
// 5.  generate sassdocs
// 6.  compile custom js
// 7.  compile admin js
// 8.  compile js plugins
// 9.  lint js files
// 10. update cache bust
// -----------------------------------------------------------------------------------------------
elixir(function(mix) {

/*[1]*/
	for ( var file in config.copyFiles ) {
		mix.copy( file, config.copyFiles[file] );
	}


// Front end
// 	mix.sass('app.scss', 'public/css/app.css')
// 		.task('sassdocs', config.sass.source)
// 		.browserify('main.js', 'public/js/app.js')
// 		.scripts(jsPlugins, 'public/js/plugins.js')
// 		.task('js-lint', config.js.source);


// // Admin
// 	mix.styles(config.pixel_admin.css, 'public/css/admin/pixel-admin.css')
// 		.sass('admin.scss', 'public/css/admin.css')
// 		.browserify('public/js/admin.js');
		

// 	mix.version([
// 		'public/css/app.css',
// 		'public/js/app.js',
// 		'public/css/admin.css',
// 		'public/js/admin.js'
// 	]);


/*[2]*/
	mix.sass('app.scss', 'public/css/app.css');

/*[3]*/
	mix.styles(config.pixel_admin.css, 'public/css/admin/pixel-admin.css');

/*[4]*/
	mix.sass('admin.scss', 'public/css/admin.css');

/*[5]*/
	mix.task('sassdocs', config.sass.source);

/*[6]*/
	mix.browserify('main.js', 'public/js/app.js');

/*[7]*/
	mix.browserify('resources/assets/js/admin/admin.js', 'public/js/admin.js');

/*[8]*/
	mix.scripts(config.js.plugins, 'public/js/plugins.js');

/*[9]*/
	// mix.task('js-lint', 'resources/assets/js/**/*.js');
	mix.task('es-lint', config.js.source);

/*[10]*/
	mix.version([
		'public/css/app.css',
		'public/js/app.js',
		'public/css/admin.css',
		'public/js/admin.js'
	]);
});

