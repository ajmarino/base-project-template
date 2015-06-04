module.exports = function (grunt) {

    grunt.registerTask('bower', 'Compiles any assets that are added through bower', [
        'clean:bower',
        'concat:bower_css',
        'copy:font_awesome_fonts',
        'uglify:plugins',
   ]);

};