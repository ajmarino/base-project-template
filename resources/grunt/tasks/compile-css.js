module.exports = function(grunt) {  
	
	grunt.registerTask("css", "Compile main sass source files", [
		'clean:css',
		'concat:bower_css',
		'sass:dev',
		'autoprefixer:dev',
		'csso:dev',
		'cache-bust:css',
		'shell',
		'sassdoc'
	]);

};