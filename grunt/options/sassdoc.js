module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var sassdoc = grunt.config('sassdoc') || {};



	/**
	 * Compiles sass files
	 * only need to compile 1 file as that should include everything else
	 *
	 *  styles: nested, compact, compressed, expanded.
	 */
	sassdoc = {
		default : {
			src  : "src/sass/helpers",
			dest : "docs",
			options : {
				display : ["public"],
				package : "./package.json",
				basePath : "https://github.com/ajmarino/base-project-template"
			}			
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('sassdoc', sassdoc);


	// Loads the task files
	grunt.loadNpmTasks('grunt-sassdoc');
}