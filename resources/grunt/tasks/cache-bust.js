/**
 * Creates a hash out of the compiled js or css file whenever they are changed
 */
module.exports = function (grunt) {
	grunt.registerTask('cache-bust', 'Updates asset-version.txt whenever a src js or sass file changes', function (type) {

		if (type === "css") {
			var source = grunt.file.read("public/css/main.css");
		} else if (type === "admin_sass") {
			var source = grunt.file.read("public/css/admin.css");
		} else if (type === "admin_js") {
			var source = grunt.file.read("public/js/admin.js");
		} else {
			var source = grunt.file.read("public/js/app.js");
		}

		var hash = require('crypto').createHash('sha1').update(source).digest('hex').substr(0, 10);

		grunt.file.write("public/assets-version.txt", hash);
		grunt.log.ok("Updated cache busting to " + hash);
	});	
};