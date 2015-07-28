'use strict';

// -----------------------------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------------------------
var gulp         = require('gulp');
var elixir       = require('laravel-elixir');
var jshint       = require('gulp-jshint');
var sassdoc      = require('sassdoc');





// -----------------------------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------------------------
var sassdocInput   = './resources/assets/sass/**/*.scss';
var sassdocOptions = { dest: './public/sassdocs' };

// relative to `resources/assets/js`
var jsSource  = './resources/assets/js/**/*.js';
var jsPlugins = [
	"../../../bower_components/jquery/dist/jquery.js",
	"../../../bower_components/modernizr/modernizr.js",
	"../../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js",
];
var sassVendor = "resources/assets/sass/vendor";





// -----------------------------------------------------------------------------------------------
// Sass Documentation
// -----------------------------------------------------------------------------------------------
gulp.task('sassdocs', function () {
	gulp.src(sassdocInput)
		.pipe(sassdoc(sassdocOptions));
});
	




// -----------------------------------------------------------------------------------------------
// JS Lintint
// -----------------------------------------------------------------------------------------------
gulp.task('js-lint', function () {
	return gulp.src('resources/assets/js/**/*.js')
				.pipe( jshint() );
});






// -----------------------------------------------------------------------------------------------
// Main task - `gulp` or `gulp watch`
// 
// `gulp`       - runs all commands
// `gulp watch` - runs all commands and re-runs filetype specific task when they change
// 
// 1. copy bower components
// 2. generate main sass file
// 3. generate sassdocs
// 4. compile custom js
// 5. compile admin js
// 6. compile js plugins
// 7. lint js files
// 8. update cache bust
// -----------------------------------------------------------------------------------------------
elixir(function(mix) {

/*[1]*/
	mix.copy('bower_components/fontawesome/fonts/', 'public/fonts')
		.copy('bower_components/normalize.css/normalize.css',                   sassVendor + '/_normalize.scss')
		.copy('bower_components/normalize-opentype.css/normalize-opentype.css', sassVendor + '/_normalize-opentype.scss')
		.copy('bower_components/fontawesome/css/font-awesome.css',              sassVendor + '/_font-awesome.scss');


/*[2]*/
	mix.sass('main.scss', 'public/css/app.css');

/*[3]*/
	mix.task('sassdocs', 'resources/assets/sass/**/*.scss');

/*[4]*/
	mix.browserify('main.js', 'public/js/app.js');

/*[5]*/
	mix.babel(['resources/assets/js/admin/*.js'], 'public/js/admin.js');

/*[6]*/
	mix.scripts(jsPlugins, 'public/js/plugins.js');

/*[7]*/
	mix.task('js-lint', 'resources/assets/js/**/*.js');

/*[8]*/
	mix.version([
		'public/css/app.css',
		'public/js/app.js'
	]);
});

