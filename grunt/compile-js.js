module.exports = function(grunt) {  

	grunt.registerTask("js", "Compile just the js source files", ['clean:js', 'concat:dev', 'uglify:dev', 'jshint', 'cache-bust:js']);

};