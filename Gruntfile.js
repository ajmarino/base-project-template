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
		banner : "/* =======================================================================\n" +
				 " * <%= pkg.title %>\n" +
				 " * <%= pkg.version %> | <%= grunt.template.today('yyyy-mm-dd') %>\n" +
				 " * ======================================================================= */\n" 
	});

	// Load all our tasks from dir ./grunt
	grunt.loadTasks('resources/grunt/tasks');
	grunt.loadTasks('resources/grunt/options');


	/**
	 * Runs all grunt tasks when using `grunt`
	 */
	grunt.registerTask("default", "Compile all the things!",[
		// bower components
		'clean:bower',
        'concat:bower_css',
        'copy:font_awesome_fonts',
        'uglify:plugins',

        // admin css
        'clean:admin_sass',
		'sass:admin',
		'autoprefixer:admin',
		'csso:admin',

		// admin js
		'clean:admin_js',
		'concat:admin',
		'uglify:admin',

		// main css
		'clean:css',
		'sass:dev',
		'autoprefixer:dev',
		'csso:dev',

		// main js
		'clean:js',
		'concat:dev',
		'uglify:dev',
		'jshint',
		'cache-bust:js',

		// docs
		'sass:docs',
		'autoprefixer:docs',
		'csso:docs',
		'shell',
		'sassdoc'
	]);
	
};
