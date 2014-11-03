module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var autoprefixer = grunt.config('autoprefixer') || {};


	// Custom options
	autoprefixer = {
		dev : {
			options : {
				browsers : ['last 2 versions', 'ie 9']
			},
			src : "<%= outputDir %>/css/main.css"
		},
		docs : {
			options : {
				browsers : ['last 2 versions', 'ie 9']
			},
			src : "<%= assetDir %>/docs/css/main-docs.css"
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('autoprefixer', autoprefixer);


	// Loads the task files
	grunt.loadNpmTasks('grunt-autoprefixer');
}