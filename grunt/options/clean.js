module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var clean = grunt.config('clean') || {};


	/**
	 * Deletes old versions of files to help with cache busting, at least i think so
	 */
	clean.css = ['public/css/']
	clean.js  = ['public/js/*.js', 'public/js/*.map', '!public/js/vendor']


	// Puts the original or modified object back into the config
	grunt.config('clean', clean);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-clean');
}