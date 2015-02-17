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
				"<%= outputDir %>/js/vendor/jquery.min.js"    : "bower_components/jquery/dist/jquery.js",
				"<%= outputDir %>/js/vendor/bootstrap.min.js" : "bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js",
				"<%= outputDir %>/js/vendor/modernizr.min.js" : "bower_components/modernizr/modernizr.js",
				// "<%= outputDir %>/js/plugins.min.js"          : "<%= outputDir %>/js/plugins.js",
			}
		},
		admin : {
			options : {
				mangle        : true,
				compressed    : true,
				banner        : "<%= banner %>",
				sourceMap     : true
			},
			files : {
				"<%= outputDir %>/js/admin.min.js" : ["<%= assetDir %>/js/admin/*.js"]
			}
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('uglify', uglify);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-uglify');
}