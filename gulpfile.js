//
// Sets up short paths for bower components 
//
var paths = {
	'bootstrap'   : "./bower_components/bootstrap-sass-official/assets/stylesheets",
	'bourbon'     : "./bower_components/bourbon/app/assets/stylesheets",
	'breakpoint'  : "./bower_components/compass-breakpoint/stylesheets",
	'singularity' : "./bower_components/singularity/stylesheets",
};


// 
// Dependencies
// 
var elixir = require('laravel-elixir');
var gulp   = require('gulp');





elixir(function(mix) {
    mix.sass('main.scss', 'public/css/app.css', {
    	includePaths: [
    		paths.bootstrap,
    		paths.bourbon,
    		paths.breakpoint,
    		paths.singularity
    	]
    });
});
