module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var csso = grunt.config('csso') || {};



	/**
	 * Optimizes and minifies css
	 * CSSO - http://bem.info/tools/optimizers/csso/description/
	 * Grunt-Csso - https://npmjs.org/package/grunt-csso
	 */
	csso = {
		dev : {
			options : {
				report : 'min',
				banner : '<%= banner %>'
			},
			files : {
				'<%= assetDir %>/css/main.min.css' : ['<%= assetDir %>/css/main.css']
			}
		},
		docs : {
			options : {
				report : 'min'
			},
			files : {
				'src/docs/css/daux-black.min.css' : ['src/docs/css/main-docs.css']
			}
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('csso', csso);


	// Loads the task files
	grunt.loadNpmTasks('grunt-csso');
}