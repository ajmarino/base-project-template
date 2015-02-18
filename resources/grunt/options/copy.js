/**
 * Deletes old versions of files to help with cache busting
 */
module.exports = function (grunt) {
    
    /**
     * Checks if object has been loaded into config already using
     * existingObj || {} technique here
     */
    var copy = grunt.config('copy') || {};


    copy = {
        font_awesome_fonts: {
            expand: true,
            cwd: 'bower_components/fontawesome/fonts/',
            src: '*',
            dest: '<%= outputDir %>/fonts/',
            flatten: true,
            filter: 'isFile'
        }
    };


    // Puts the original or modified object back into the config
    grunt.config('copy', copy);


    // Loads the task files
    grunt.loadNpmTasks('grunt-contrib-copy');
}