/**
 * Combines idnv js files into a single combined file
 */
module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var concat = grunt.config('concat') || {};


	concat = {
		dev : {
			options : {
				seperator : ";",
				banner    : "<%= banner %>\n"
			},
			src  : ["<%= assetDir %>/js/*.js"],
			dest : "<%= outputDir %>/js/app.js"
		},
		admin : {
			options : {
				seperator : ";",
				banner    : "<%= banner %>\n"
			},
			src  : ["<%= assetDir %>/js/admin/*.js"],
			dest : "<%= outputDir %>/js/admin.js"
		}
		/*
		plugins : {
			options : {
				seperator : ";"
			},
			files : {
				"<%= outputDir %>/js/plugins.js" : ["path/to/file"],
			}
		}
		*/
	}


	// Puts the original or modified object back into the config
	grunt.config('concat', concat);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-concat');
}