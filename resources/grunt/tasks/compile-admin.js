module.exports = function(grunt) {  
	
	grunt.registerTask("admin", "Compile both admin source files ", [
		'admin_sass',
		'admin_js'
	]);


	grunt.registerTask("admin_sass", "Compile only the admin sass files", [
		'clean:admin_sass',
		'sass:admin',
		'autoprefixer:admin',
		'csso:admin',
		'cache-bust:admin_sass',
		'shell',
		'sassdoc'
	]);


	grunt.registerTask("admin_js", "Compile only the admin js files", [
		'clean:admin_js',
		'concat:admin',
		'uglify:admin',
		'jshint',
		'cache-bust:admin_js'
	]);
};