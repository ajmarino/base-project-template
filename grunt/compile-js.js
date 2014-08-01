module.exports = function(grunt) {  
	/*
	 * Incase another task loaded grunt-contrib-cssmin 
	 * and inserted the definition into the config first,
	 * we use the existingObj || {} technique here.
	 * This allows us to extend and run different custom
	 * tasks on the same external task!
	 */
	var clean  = grunt.config('clean')  || {},
		concat = grunt.config('concat') || {},
		jshint = grunt.config('jshint') || {},
		uglify = grunt.config('uglify') || {};

		

	/**
	 * Deletes old versions of files to help with cache busting, at least i think so
	 */
	clean.js = ['public/js/*.js', 'public/js/*.map', '!public/js/vendor']


	/**
	 * Combines all js files into a single file
	 */
	concat = {
		options : {
			seperator : ";",
			banner    : "<%= banner %>\n"
		},
		js : {
			src  : ["src/js/*.js"],
			dest : "public/js/app.js"	
		}
	}



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
			jshintrc : ".jshintrc"
		},
		target: {
			src : ['src/js/*.js']
		}
	}


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
				"public/js/app.min.js" : ["src/js/*.js"]
			}
		},
		libraries : {
			options : {
				compressed : true,
				sourceMap  : true
			},
			files : {
				"public/js/vendor/jquery.min.js"    : "bower_components/jquery/dist/jquery.js",
				"public/js/vendor/bootstrap.min.js" : "bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js",
			}
		}
	}



	// Put the modified (or new) cssmin object (back)
	// into the Grunt config
	grunt.config('concat', concat);
	grunt.config('clean', clean);
	grunt.config('jshint', jshint);
	grunt.config('uglify', uglify);


	// Make sure to load the Npm Task module
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	


};