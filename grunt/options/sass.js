module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var sass = grunt.config('sass') || {};



	/**
	 * Compiles sass files
	 * only need to compile 1 file as that should include everything else
	 *
	 *  styles: nested, compact, compressed, expanded.
	 */
	sass = {
		dist : {
			options : {
				style  : "compact",
				banner : "<%= banner %>"
			},
			files : {
				"<%= assetDir %>/css/main.css" : "src/sass/main.scss"
			}
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('sass', sass);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-sass');
}