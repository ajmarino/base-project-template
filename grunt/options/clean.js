module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var clean = grunt.config('clean') || {};


	/**
	 * Deletes old versions of files to help with cache busting, at least i think so
	 */
	clean.css  = ['<%= assetDir %>/css/main.css', '<%= assetDir %>/css/main.min.css'];
	clean.js   = ['<%= assetDir %>/js/*.js', '<%= assetDir %>/js/*.map', '!<%= assetDir %>/js/vendor'];
	clean.docs = ['docs/sass', 'docs/main/**/*.*'];

	// Puts the original or modified object back into the config
	grunt.config('clean', clean);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-clean');
}