'use strict';

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
var gulp         = require('gulp');
var elixir       = require('laravel-elixir');
var sassdoc      = require('sassdoc');
var Notification = require('laravel-elixir/ingredients/commands/Notification');





// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------
var sassPaths = {
	'bootstrap'   : "./bower_components/bootstrap-sass-official/assets/stylesheets",
	'bourbon'     : "./bower_components/bourbon/app/assets/stylesheets",
	'breakpoint'  : "./bower_components/compass-breakpoint/stylesheets",
	'singularity' : "./bower_components/singularity/stylesheets",
};
var sassdocInput   = './resources/assets/sass/**/*.scss';
var sassdocOptions = { dest: './public/sassdoc' };





// -----------------------------------------------------------------------------
// Sass Documentation
// -----------------------------------------------------------------------------
elixir.extend('sassdocs', function() {
	gulp.task('sassdocs', function () {
		return gulp.src(sassdocInput)
					.pipe(sassdoc(sassdocOptions))
					.pipe(new Notification().message('Sass Documentation Generated!'))
					.resume();
	});

	return this.queueTask('sassdocs').registerWatcher('sassdocs', sassdocInput);
});





// -----------------------------------------------------------------------------
// Main task - `gulp`
// 
// 1. generates main sass file
// 2. generates sassdocs
// 3. versions files
// -----------------------------------------------------------------------------
elixir(function(mix) {
	mix.sass('main.scss', 'public/css/app.css', {       // [1]
		includePaths: [
			sassPaths.bootstrap,
			sassPaths.bourbon,
			sassPaths.breakpoint,
			sassPaths.singularity
		]
	   })
	   .sassdocs()                                      // [2]
	   .version('public/css/app.css');                  // [3]
});

