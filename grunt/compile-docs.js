module.exports = function(grunt) {  
	
	grunt.registerTask("docs", "Compile docs from src/sass and src/docs", ['clean:docs', 'sassdoc']);

};