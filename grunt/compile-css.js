module.exports = function(grunt) {  
	/*
	 * Incase another task loaded grunt-contrib-cssmin 
	 * and inserted the definition into the config first,
	 * we use the existingObj || {} technique here.
	 * This allows us to extend and run different custom
	 * tasks on the same external task!
	 */
	var autoprefixer = grunt.config('autoprefixer') || {},
		clean        = grunt.config('clean')        || {},
		csso         = grunt.config('csso')         || {},
		sass         = grunt.config('sass')         || {};


	// Add the config you want to run for this task
	autoprefixer = {
		main : {
			options : {
				browsers : ['last 2 versions', 'ie 9']
			},
			src : "public/css/main.css"
		}
	}

	/**
	 * Deletes old versions of files to help with cache busting, at least i think so
	 */
	clean.css = ['public/css/']


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



	/**
	 * Compiles sass files
	 * only need to compile 1 file as that should include everything else
	 */
	sass = {
		dist : {
			options : {
				style  : "compact",
				banner : "<%= banner %>"
			},
			files : {
				"public/css/main.css" : "src/sass/main.scss"
			}
		}
	}



	// Put the modified (or new) cssmin object (back)
	// into the Grunt config
	grunt.config('autoprefixer', autoprefixer);
	grunt.config('clean', clean);
	grunt.config('csso', csso);
	grunt.config('sass', sass);


	// Make sure to load the Npm Task module
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-csso');
	


};