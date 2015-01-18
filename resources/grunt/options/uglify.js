/**
 * Combines, minifies, and creates a source map for the js files
 *
 * dev     - indv component js
 * plugins - external plugins loaded with bower
 */
module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var uglify = grunt.config('uglify') || {};

	uglify = {
		dev : {
			options : {
				mangle        : true,
				compressed    : true,
				banner        : "<%= banner %>",
				sourceMap     : true
			},
			files : {
				"<%= outputDir %>/js/app.min.js" : ["<%= assetDir %>/js/*.js"]
			}
		},
		plugins : {
			options : {
				compressed : true,
				sourceMap  : true
			},
			files : {
				"<%= outputDir %>/js/vendor/jquery.min.js"    : "bower_components/jquery/dist/jquery.js"
			}
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('uglify', uglify);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-uglify');
}