module.exports = function(grunt) {  
	
	grunt.registerTask("docs", "Compile docs from src/sass and src/docs", [
		'sass:docs',
		'autoprefixer:docs',
		'csso:docs',
		'shell',
		'sassdoc'
	]);

};