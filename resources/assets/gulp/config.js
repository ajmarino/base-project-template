/**
 * Stores all confid options used for Gulp Tasks
 * 
 * @return {Object}
 */

var sassVendor = "resources/assets/sass/vendor";

module.exports = {
	sass : {
		source : './resources/assets/sass/**/*.scss',
		options : {
			dest: './public/sassdocs',
			display: {
				access: ['public'],
			}
		}
	},

	js : {
		source  : './resources/assets/js/**/*.js',

		plugins : [
			"../../../bower_components/jquery/dist/jquery.js",
			"../../../bower_components/modernizr/modernizr.js",
			"../../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js",
			"../../../bower_components/sweetalert/dist/sweetalert-dev.js",
		],
	},

	copyFiles : {
		"bower_components/fontawesome/fonts"                             : 'public/fonts',
		"bower_components/normalize.css/normalize.css"                   : sassVendor + '/_normalize.scss',
		"bower_components/normalize-opentype.css/normalize-opentype.css" : sassVendor + '/_normalize-opentype.scss',
		"bower_components/fontawesome/css/font-awesome.css"              : sassVendor + '/_font-awesome.scss',
		"bower_components/sweetalert/dist/sweetalert.css"                : sassVendor + '/_sweetalert.scss',

		"resources/assets/pixeladmin/js/pixel-admin.min.js"              : 'public/js/pixel-admin.js',
	},


	// Relative to `resources/assets/sass`
	pixel_admin : {
		css : [
			"../pixeladmin/css/bootstrap.min.css",
			"../pixeladmin/css/pixel-admin.min.css",
			"../pixeladmin/css/widgets.min.css",
			"../pixeladmin/css/pages.min.css",
			"../pixeladmin/css/rtl.min.css",
			"../pixeladmin/css/themes.min.css",
		],
	}
};