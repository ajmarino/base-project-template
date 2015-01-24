module.exports = function(grunt) {  
	
	grunt.registerTask("css", "Compile main sass source files", [
		'clean:css',
		'clean:docs',
		'sass:dev',
		'autoprefixer:dev',
		'csso:dev',
		'cache-bust:css',
		'sassdoc'
	]);

};