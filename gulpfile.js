'use strict';

// -----------------------------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------------------------
var gulp         = require('gulp');
var elixir       = require('laravel-elixir');
var jshint       = require('gulp-jshint');
var sassdoc      = require('sassdoc');
var Notification = require('laravel-elixir/ingredients/commands/Notification');





// -----------------------------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------------------------
var sassPaths = {
	'bootstrap'   : "bower_components/bootstrap-sass-official/assets/stylesheets",
	'bourbon'     : "bower_components/bourbon/app/assets/stylesheets",
	'breakpoint'  : "bower_components/compass-breakpoint/stylesheets",
	'singularity' : "bower_components/singularity/stylesheets",
};
var sassdocInput   = './resources/assets/sass/**/*.scss';
var sassdocOptions = { dest: './public/sassdoc' };

// relative to `resources/assets/js`
var jsSource  = './resources/assets/js/**/*.js';
var jsPlugins = [
	"../../../bower_components/jquery/dist/jquery.js",
	"../../../bower_components/modernizr/modernizr.js",
	"../../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js",
];
var sassVendor = "resources/assets/sass/vendor";





// -----------------------------------------------------------------------------------------------
// Custom messaging
// -----------------------------------------------------------------------------------------------
elixir.extend('message', function (message) {
	gulp.task('message', function () {
		return gulp.src('').pipe(new Notification().message(message))
	});

	return this.queueTask('message');
});




// -----------------------------------------------------------------------------------------------
// Sass Documentation
// -----------------------------------------------------------------------------------------------
elixir.extend('sassdocs', function() {
	gulp.task('sassdocs', function () {
		return gulp.src(sassdocInput)
					.pipe(sassdoc(sassdocOptions))
					.pipe(new Notification().message('Sass Documentation Generated!'))
					.resume();
	});

	return this.queueTask('sassdocs').registerWatcher('sassdocs', sassdocInput);
});





// -----------------------------------------------------------------------------------------------
// Sass Documentation
// -----------------------------------------------------------------------------------------------
elixir.extend('lint', function () {
	gulp.task('lint', function () {
		return gulp.src('resources/assets/js/**/*.js')
					.pipe( jshint() );
	});

	return this.queueTask('lint').registerWatcher('lint', jsSource);
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
// 7. version files
// -----------------------------------------------------------------------------------------------
elixir(function(mix) {

/*[1]*/  mix.copy('bower_components/fontawesome/fonts/', 'public/fonts')
			.copy('bower_components/normalize.css/normalize.css',                   sassVendor + '/_normalize.scss')
			.copy('bower_components/normalize-opentype.css/normalize-opentype.css', sassVendor + '/_normalize-opentype.scss')
			.copy('bower_components/fontawesome/css/font-awesome.css',              sassVendor + '/_font-awesome.scss');


/*[2]*/ mix.sass('main.scss', 'public/css/app.css', {
			includePaths: [
				sassPaths.bootstrap,
				sassPaths.bourbon,
				sassPaths.breakpoint,
				sassPaths.singularity
			]
		});
/*[3]*/ mix.sassdocs();


/*[4]*/ mix.babel(['resources/assets/js/*.js'],        'public/js/app.js')
			.babel(['resources/assets/js/admin/*.js'], 'public/js/admin.js')
/*[6]*/ 	.scripts(jsPlugins,                        'public/js/plugins.js');
		mix.lint();

/*[7]*/ mix.version([
			'public/css/app.css',
			'public/js/app.js'
		]);

		mix.message('All things compiled!');
});

