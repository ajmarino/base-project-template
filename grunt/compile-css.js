module.exports = function(grunt) {  
	
	grunt.registerTask("css", "Compile just the sass source files", ['clean:css', 'sass', 'autoprefixer', 'csso', 'cache-bust:css']);

};