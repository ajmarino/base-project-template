'use strict';

// -----------------------------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------------------------
var gulp         = require('gulp');
var elixir       = require('laravel-elixir');
var sassdoc      = require('sassdoc');
var Notification = require('laravel-elixir/ingredients/commands/Notification');





// -----------------------------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------------------------
var sassPaths = {
	'bootstrap'   : "./bower_components/bootstrap-sass-official/assets/stylesheets",
	'bourbon'     : "./bower_components/bourbon/app/assets/stylesheets",
	'breakpoint'  : "./bower_components/compass-breakpoint/stylesheets",
	'singularity' : "./bower_components/singularity/stylesheets",
};
var sassdocInput   = './resources/assets/sass/**/*.scss';
var sassdocOptions = { dest: './public/sassdoc' };
var jsPlugins = [
	"../../../bower_components/jquery/dist/jquery.js",
	"../../../bower_components/modernizr/modernizr.js",
	"../../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js",
];
var sassVendor = "resources/assets/sass/vendor";





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
// Main task - `gulp` or `gulp watch`
// 
// `gulp` - runs all commands
// `gulp watch` - runs all commands and re-runs filetype specifig task when they change
// 
// 1. copy files
// 2. generate main sass file
// 3. generate sassdocs
// 4. compile custom js
// 6. compile js plugins
// 5. version files
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


/*[4]*/ mix.babel(['resources/assets/js/*.js'], 'public/js/app.js')
/*[5]*/ 	.scripts(jsPlugins, 'public/js/plugins.js');


/*[6]*/ mix.version([
			'public/css/app.css',
			'public/js/app.js'
		]);
});

