/**
 * Runs shell commands
 */
module.exports = function (grunt) {
	
	/**
	 * Checks if object has been loaded into config already using
	 * existingObj || {} technique here
	 */
	var shell = grunt.config('shell') || {};

	shell = {
		remove_docs: {
			command: 'rm -rf docs'
		},
		create_docs_folder: {
			command: 'mkdir docs'
		}
		/*
		create_docs: {
			command: 'bash scripts/compile_docs.sh'
		}
		*/
	}

	// Puts the original or modified object back into the config
	grunt.config('shell', shell);


	// Loads the task files
	grunt.loadNpmTasks('grunt-shell');
}