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

	// Load all our tasks from dir ./grunt
	grunt.loadTasks('resources/grunt/tasks');
	grunt.loadTasks('resources/grunt/options');
	
	grunt.loadNpmTasks('grunt-contrib-watch');


	/**
	 * Runs all grunt tasks when using `grunt`
	 */
	grunt.registerTask("default", "Runs all grunt tasks",[
		'clean',
		'sass',
		'autoprefixer',
		'csso',
		'concat',
		'uglify',
		'jshint',
		'shell',
		'sassdoc',
		'cache-bust:css'
	]);
	
};