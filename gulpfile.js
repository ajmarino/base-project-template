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
var sassdocOptions = {
	dest: './public/sassdocs',
	display: {
		access: ['public'],
	}
};

// relative to `resources/assets/js`
var jsSource  = './resources/assets/js/**/*.js';
var jsPlugins = [
	"../../../bower_components/jquery/dist/jquery.js",
	"../../../bower_components/modernizr/modernizr.js",
	"../../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js",
	"../../../bower_components/sweetalert/dist/sweetalert-dev.js",
];
var sassVendor = "resources/assets/sass/vendor";

// relative to `/resources/assets/sass`
var pxlAdminCss = [
	"../pixeladmin/css/bootstrap.min.css",
	"../pixeladmin/css/pixel-admin.min.css",
	"../pixeladmin/css/widgets.min.css",
	"../pixeladmin/css/pages.min.css",
	"../pixeladmin/css/rtl.min.css",
	"../pixeladmin/css/themes.min.css",
];

var copyFiles = {
	"bower_components/fontawesome/fonts"                             : 'public/fonts',
	"bower_components/normalize.css/normalize.css"                   : sassVendor + '/_normalize.scss',
	"bower_components/normalize-opentype.css/normalize-opentype.css" : sassVendor + '/_normalize-opentype.scss',
	"bower_components/fontawesome/css/font-awesome.css"              : sassVendor + '/_font-awesome.scss',
	"bower_components/sweetalert/dist/sweetalert.css"                : sassVendor + '/_sweetalert.scss',

	"resources/assets/pixeladmin/js/pixel-admin.min.js"              : 'public/js/pixel-admin.js',
};

elixir.config.css.sass.pluginOptions.outputStyle = 'compact';




// -----------------------------------------------------------------------------------------------
// Sass Documentation
// -----------------------------------------------------------------------------------------------
gulp.task('sassdocs', function () {
	gulp.src(sassdocInput)
		.pipe(sassdoc(sassdocOptions));
});
	




// -----------------------------------------------------------------------------------------------
// JS Lint
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
	for ( var file in copyFiles ) {
		mix.copy( file, copyFiles[file] );
	}


// Front end
// 	mix.sass('app.scss', 'public/css/app.css')
// 		.task('sassdocs', 'resources/assets/sass/**/*.scss')
// 		.browserify('main.js', 'public/js/app.js')
// 		.scripts(jsPlugins, 'public/js/plugins.js')
// 		.task('js-lint', 'resources/assets/js/**/*.js');


// // Admin
// 	mix.styles(pxlAdminCss, 'public/css/pixel-admin.css')
// 		.sass('admin.scss', 'public/css/admin.css')
// 		.browserify('resources/assets/js/admin/base.js', 'public/js/admin.js');
		

// 	mix.version([
// 		'public/css/app.css',
// 		'public/js/app.js',
// 		'public/css/admin.css',
// 		'public/js/admin.js'
// 	]);


/*[2]*/
	mix.sass('app.scss', 'public/css/app.css');

/*[3]*/
	mix.styles(pxlAdminCss, 'public/css/admin/pixel-admin.css');

/*[4]*/
	mix.sass('admin.scss', 'public/css/admin.css');

/*[5]*/
	mix.task('sassdocs', 'resources/assets/sass/**/*.scss');

/*[6]*/
	mix.browserify('main.js', 'public/js/app.js');

/*[7]*/
	mix.browserify('resources/assets/js/admin/base.js', 'public/js/admin.js');

/*[8]*/
	mix.scripts(jsPlugins, 'public/js/plugins.js');

/*[9]*/
	mix.task('js-lint', 'resources/assets/js/**/*.js');

/*[10]*/
	mix.version([
		'public/css/app.css',
		'public/js/app.js',
		'public/css/admin.css',
		'public/js/admin.js'
	]);
});

