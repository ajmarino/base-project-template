module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var concat = grunt.config('concat') || {};



	/**
	 * Combines all js files into a single file
	 */
	concat = {
		dev : {
			options : {
				seperator : ";",
				banner    : "<%= banner %>\n"
			},
			src  : ["src/js/*.js"],
			dest : "<%= assetDir %>/js/app.js"
		},
		plugins : {
			options : {
				seperator : ";"
			},
			files : {
				"<%= assetDir %>/js/plugins.js" : ["path/to/file"],
			}
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('concat', concat);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-concat');
}