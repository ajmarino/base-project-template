module.exports = function(grunt) {  
	
	grunt.registerTask("docs", "Compile docs from resources/assets/sass and resources/assets/docs", [
		'sass:docs',
		'autoprefixer:docs',
		'csso:docs',
		'shell',
		'sassdoc'
	]);

};