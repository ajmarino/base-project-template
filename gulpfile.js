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
gulp.task('sassdoc', function () {
  return gulp
    .src(sassdocInput)
    .pipe(sassdoc(sassdocOptions))
    .pipe(new Notification().message('Sass Documentation Generated!'))
    .resume();
});





// -----------------------------------------------------------------------------
// Main task
// -----------------------------------------------------------------------------
elixir(function(mix) {
    mix.sass('main.scss', 'public/css/app.css', {
    	includePaths: [
    		sassPaths.bootstrap,
    		sassPaths.bourbon,
    		sassPaths.breakpoint,
    		sassPaths.singularity
    	]
       })
       .task('sassdoc')
       .version('public/css/app.css');
});
