/**
 * Compiles sass files
 * only need to compile 1 file as that should include everything else
 *
 *  styles: nested, compact, compressed, expanded.
 */
module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var sass = grunt.config('sass') || {};

	sass = {
		dev : {
			options : {
				style  : "compact",
				loadPath: [
					"bower_components/bootstrap-sass-official/assets/stylesheets",
					"bower_components/bourbon/app/assets/stylesheets",
					"bower_components/compass-breakpoint/stylesheets",
					"bower_components/singularity/stylesheets",
					"bower_components/susy/sass",
				]
			},
			files : {
				"<%= outputDir %>/css/main.css" : "<%= assetDir %>/sass/main.scss",
			}
		},
		docs : {
			options : {
				style  : "compressed",
				loadPath: [
					"bower_components/bootstrap-sass-official/assets/stylesheets",
					"bower_components/bourbon/app/assets/stylesheets",
					"bower_components/compass-breakpoint/stylesheets",
					"bower_components/singularity/stylesheets",
					"bower_components/susy/sass",
				]
			},
			files : {
				"<%= assetDir %>/docs/css/site.css"      : "<%= assetDir %>/sass/main.scss",
				"<%= assetDir %>/docs/css/main-docs.css" : "<%= assetDir %>/docs/sass/docs.scss"
			}
		},
		admin : {
			options : {
				style  : "compact",
			},
			files : {
				"<%= outputDir %>/css/admin.css" : "resources/assets/sass/admin.scss",
			}
		}
	}


	// Puts the original or modified object back into the config
	grunt.config('sass', sass);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-sass');
}
