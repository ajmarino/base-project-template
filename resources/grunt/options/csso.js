/**
 * Optimizes and minifies css
 * 
 * CSSO - http://bem.info/tools/optimizers/csso/description/
 * Grunt-Csso - https://npmjs.org/package/grunt-csso
 */
module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var csso = grunt.config('csso') || {};

	csso = {
		dev : {
			options : {
				report : 'min',
				banner : '<%= banner %>'
			},
			files : {
				'<%= outputDir %>/css/main.min.css' : ['<%= outputDir %>/css/main.css']
			}
		},
		docs : {
			options : {
				report : 'min'
			},
			files : {
				'<%= assetDir %>/docs/css/daux-black.min.css' : ['<%= assetDir %>/docs/css/main-docs.css']
			}
		},
		admin : {
			options : {
				report : 'min',
				banner : '<%= banner %>'
			},
			files : {
				'<%= outputDir %>/css/admin.min.css'  : ['<%= outputDir %>/css/admin.css'],
			}
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('csso', csso);


	// Loads the task files
	grunt.loadNpmTasks('grunt-csso');
}