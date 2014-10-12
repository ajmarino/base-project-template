module.exports = function (grunt) {

	// Initialize config.
	grunt.initConfig({
		assetDir  : "assets",
		outputDir : "public",
		pkg: require('./package.json'),

		/**
		 * Creates a banner at the top of compiled files
		 * can use keywords from pkg
		 */
		banner : "/*\n" +
				 " * <%= pkg.name %>\n" +
				 " * <%= pkg.version %> | <%= grunt.template.today('yyyy-mm-dd') %>\n" +
				 " */\n",

		/**
		 * Watches files in /src for changes and runs the appriopate tasks
		 */
		watch : {
			scripts : {
				files : ["<%= assetDir %>/js/*.js"],
				tasks : ["js"]
			},
			sass : {
				files : ["<%= assetDir %>/sass/main.scss", "<%= assetDir %>/sass/**/*.scss"],
				tasks : ["css"]
			},
			docs : {
				files : ["<%= assetDir %>/docs/sass/docs.scss", "<%= assetDir %>/docs/sass/**/*.scss", "<%= assetDir %>/docs/js/*.js", "<%= assetDir %>/docs/docs/**/*.*"],
				tasks : ["docs"]
			}
		}
	});


	/**
	 * Creates a hash out of the compiled js or css file whenever they are changed
	 */
	grunt.registerTask('cache-bust', 'Updates asset-version.txt whenever a src js or sass file changes', function (type) {
		if (type === "css") {
			var source = grunt.file.read("public/css/main.css");
		} else {
			var source = grunt.file.read("public/js/app.js");
		}

		var hash = require('crypto').createHash('sha1').update(source).digest('hex').substr(0, 10);

		grunt.file.write("public/assets-version.txt", hash);
		grunt.log.ok("Updated cache busting to " + hash);
	});



	// Load all our tasks from dir ./grunt
	grunt.loadTasks('grunt');
	grunt.loadTasks('grunt/options');
	
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Create Tasks that link to the tasks in ./grunt
	// This is helpful because you might want to use
	// an external task like grunt-contrib-uglify
	// for two different things, and not at the 
	// same time
	grunt.registerTask("default", ['css', 'js']);
	
};