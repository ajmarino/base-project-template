module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var autoprefixer = grunt.config('autoprefixer') || {};


	// Custom options
	autoprefixer = {
		main : {
			options : {
				browsers : ['last 2 versions', 'ie 9']
			},
			src : "<%= assetDir %>/css/main.css"
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('autoprefixer', autoprefixer);


	// Loads the task files
	grunt.loadNpmTasks('grunt-autoprefixer');
}