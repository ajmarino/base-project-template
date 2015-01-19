/**
 * Watches files for changes, runs grunt task based on file-type
 */
module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var watch = grunt.config('watch') || {};

	watch = {
		scripts : {
			files : ["<%= assetDir %>/js/*.js"],
			tasks : ["js"]
		},
		sass : {
			files : ["<%= assetDir %>/sass/main.scss", "<%= assetDir %>/sass/**/*.scss"],
			tasks : ["css"]
		},
		docs : {
			files : ["<%= assetDir %>/docs/sass/docs.scss", "<%= assetDir %>/docs/sass/**/*.scss", "<%= assetDir %>/docs/js/*.js", "<%= assetDir %>/docs/docs/**/*.*"],
			tasks : ["docs"]
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('watch', watch);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-watch');
}