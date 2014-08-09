module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var jshint = grunt.config('jshint') || {};



	/**
	 * Validates our JS with JSHint
	 *   curly   : Requires bracers around loops and conditionals
	 *   es3     : Code needs to adhere to ECMAScript 3 specification. Useful for older browers like IE 6/7/8/9
	 *   eqeqeq  : Forces '===' and '!==' instead of '==' and '!='
	 *   undef   : Prohibits the use of explicitly undeclared variables.
	 *   unsused : Warns when you define and never use your variables.
	 *   browser : Defines globals exposed by modern browsers: all the way from good old document and navigator to the HTML5 FileReader and others
	 *   devel   : Defines globals that are usually used for logging poor-man's debugging: console, alert, etc.
	 *   globals : Defines globals loaded outside of app.js
	 */
	jshint = {
		options : {
			"curly"   : true,		
			"es3"     : true,		
			"undef"   : true,
			"browser" : true,
			"devel"   : true,
			"globals" : {
				"jQuery"   : true,
				"$"        : true,
				"App"      : true,
				"IconicJS" : true
			}
		},
		target: {
			src : ['src/js/*.js']
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('jshint', jshint);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-jshint');
}