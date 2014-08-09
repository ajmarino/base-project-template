module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var uglify = grunt.config('uglify') || {};



	/**
	 * Combines, minifies, and creates a source map for the js files
	 * dev - main js files
	 * scrollbar - 3 librarys used to create stylized scrollbar in modals
	 */
	uglify = {
		dev : {
			options : {
				mangle        : true,
				compressed    : true,
				banner        : "<%= banner %>",
				sourceMap     : true
			},
			files : {
				"<%= assetDir %>/js/app.min.js" : ["src/js/*.js"]
			}
		},
		plugins : {
			options : {
				compressed : true,
				sourceMap  : true
			},
			files : {
				"<%= assetDir %>/js/jquery.min.js"    : "bower_components/jquery/dist/jquery.js"
			}
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('uglify', uglify);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-uglify');
}