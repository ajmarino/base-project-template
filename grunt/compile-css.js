module.exports = function(grunt) {  
	
	grunt.registerTask("css", "Compile just the sass source files", [
		'clean:css',
		'clean:sass',
		'sass:dev',
		'autoprefixer:dev',
		'csso:dev',
		'cache-bust:css',
		'sassdoc'
	]);

};