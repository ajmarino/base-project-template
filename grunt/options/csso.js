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
		minify : {
			options : {
				report : 'min',
				banner : '<%= banner %>'
			},
			files : {
				'public/css/main.min.css' : ['public/css/main.css']
			}
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('csso', csso);


	// Loads the task files
	grunt.loadNpmTasks('grunt-csso');
}