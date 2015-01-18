/**
 * Deletes old versions of files to help with cache busting
 */
module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var clean = grunt.config('clean') || {};



	clean.css  = ['<%= outputDir %>/css/main.css', '<%= outputDir %>/css/main.min.css'];
	clean.js   = ['<%= outputDir %>/js/*.js', '<%= outputDir %>/js/*.map', '!<%= outputDir %>/js/vendor'];
	clean.docs = ['docs/sass'];
	// clean.docs = ['docs/**/*.*'];


	// Puts the original or modified object back into the config
	grunt.config('clean', clean);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-clean');
}