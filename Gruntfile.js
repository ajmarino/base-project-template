module.exports = function (grunt) {

	// Initialize config.
	grunt.initConfig({
		assetDir  : "resources/assets",
		outputDir : "public",
		pkg: require('./package.json'),

		/**
		 * Creates a banner at the top of compiled files
		 * can use keywords from pkg
		 */
		banner : "/*\n" +
				 " * <%= pkg.name %>\n" +
				 " * <%= pkg.version %> | <%= grunt.template.today('yyyy-mm-dd') %>\n" +
				 " */\n"
	});

	// Load all our tasks from dir ./grunt
	grunt.loadTasks('resources/grunt/tasks');
	grunt.loadTasks('resources/grunt/options');


	/**
	 * Runs all grunt tasks when using `grunt`
	 */
	grunt.registerTask("default", "Compile all the things!",[
		'clean',
		'concat:bower_css',
		'sass',
		'autoprefixer',
		'csso',
		'concat:dev',
		'concat:admin',
		'uglify',
		'jshint',
		'shell',
		'sassdoc',
		'cache-bust:css'
	]);
	
};