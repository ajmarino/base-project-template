/**
 * Watches files for changes, runs grunt task based on file-type
 */
module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var watch = grunt.config('watch') || {};

	watch = {
		scripts : {
			files : ["<%= assetDir %>/js/*.js"],
			tasks : ["js"]
		},
		sass : {
			files : [
				"<%= assetDir %>/sass/main.scss",
				"<%= assetDir %>/sass/**/*.scss",
				"!<%= assetDir %>/sass/admin"
			],
			tasks : ["css"]
		},
		docs : {
			files : [
				"<%= assetDir %>/docs/sass/docs.scss",
				"<%= assetDir %>/docs/sass/**/*.scss",
				"<%= assetDir %>/docs/js/*.js",
				"<%= assetDir %>/docs/docs/**/*.*"
			],
			tasks : ["docs"]
		},
		admin_sass : {
			files: [
				"resources/assets/sass/admin.scss",
				"resources/assets/sass/admin/**/*.scss"
			],
			tasks: ["admin_sass"]
		},
		admin_js : {
			files: [
				"resources/assets/js/admin/*.js"
			],
			tasks: ["admin_js"]
		} 
	}


	// Puts the original or modified object back into the config
	grunt.config('watch', watch);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-watch');


	/**
	 * Creates a hash out of the compiled js or css file whenever they are changed
	 */
	grunt.registerTask('cache-bust', 'Updates asset-version.txt whenever a src js or sass file changes', function (type) {

		if (type === "css") {
			var source = grunt.file.read("public/css/main.css");
		} else if (type === "admin_sass") {
			var source = grunt.file.read("public/css/admin.css");
		} else if (type === "admin_js") {
			var source = grunt.file.read("public/js/admin.js");
		} else {
			var source = grunt.file.read("public/js/app.js");
		}

		var hash = require('crypto').createHash('sha1').update(source).digest('hex').substr(0, 10);

		grunt.file.write("public/assets-version.txt", hash);
		grunt.log.ok("Updated cache busting to " + hash);
	});	
};