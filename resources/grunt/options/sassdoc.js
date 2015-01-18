/**
 * Creates docs based on source sass files
 */
module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var sassdoc = grunt.config('sassdoc') || {};

	sassdoc = {
		default : {
			src  : ["<%= assetDir %>/sass/"],
			dest : "docs/sass",
			options : {
				package : "package.json",
				basePath : "https://github.com/ajmarino/base-project-template"
			}			
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('sassdoc', sassdoc);


	// Loads the task files
	grunt.loadNpmTasks('grunt-sassdoc');
}