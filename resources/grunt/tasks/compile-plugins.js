module.exports = function(grunt) {  
    
    grunt.registerTask("plugins", "Copy bower components into <%= outputDir %>", [
        'copy',
        'concat:bower_css'
    ]);

};