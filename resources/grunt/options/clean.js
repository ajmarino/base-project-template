/**
 * Deletes old versions of files to help with cache busting
 */
module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var clean = grunt.config('clean') || {};

	// Add any files created with uglify:plugins to this obj
	clean.bower = [
		"<%= assetDir %>/sass/vendor/*.scss",

		"<%= outputDir %>/fonts/fontawesome-webfont.*",

		"<%= outputDir %>/js/vendor/bootstrap.min.js",
		"<%= outputDir %>/js/vendor/jquery.min.js",
		"<%= outputDir %>/js/vendor/modernizr.min.js",
	];

	clean.css  = [
		'<%= outputDir %>/css/main.css',
		'<%= outputDir %>/css/main.min.css'
	];

	clean.js   = [
		'<%= outputDir %>/js/app.js',
		'<%= outputDir %>/js/app.min.js',
		'<%= outputDir %>/js/app.min.js.map',
		'!<%= outputDir %>/js/vendor'
	];
	
	clean.docs = ['docs/**/*.*'];
	
	clean.admin_sass = [
		'<%= outputDir %>/css/admin.css',
		'<%= outputDir %>/css/admin.min.css',
	];

	clean.admin_js = [
		'<%= outputDir %>/js/admin.js',
		'<%= outputDir %>/js/admin.min.js',
		'<%= outputDir %>/js/admin.min.js.map',
	];


	// Puts the original or modified object back into the config
	grunt.config('clean', clean);


	// Loads the task files
	grunt.loadNpmTasks('grunt-contrib-clean');
}