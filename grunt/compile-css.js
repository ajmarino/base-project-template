module.exports = function(grunt) {  
	
	grunt.registerTask("css", "Compile just the sass source files", ['clean:css', 'sass:dev', 'autoprefixer:dev', 'csso:dev', 'cache-bust:css']);

};