var gulp        = require('gulp'),
	Elixir      = require('laravel-elixir'),
	config      = require('./config'),
	sassdoc     = require('sassdoc'),
	eslint      = require('gulp-eslint'),
	postcss     = require('gulp-postcss'),
	reporter    = require('postcss-reporter')
	syntax_scss = require('postcss-scss'),
	stylelint   = require('stylelint');


var Task = Elixir.Task;


/*
|--------------------------------------------------------------------------
| SASS Documentation
|--------------------------------------------------------------------------
| http://sassdoc.com/
*/
Elixir.extend('sassdocs', function () {
	new Task('sassdocs', function () {
		gulp.src(config.sass.source)
			.pipe(sassdoc(config.sassDoc.options));
	})
	.watch(config.sass.source);
});





/*
|--------------------------------------------------------------------------
| SASS Linting
|--------------------------------------------------------------------------
| http://stylelint.io/user-guide/rules/
*/
Elixir.extend('sassLint', function () {
	// Stylelint config rules
	var stylelintConfig = {
		"rules": {
			"block-closing-brace-newline-after": "always",
			"block-no-empty": true,
			"color-hex-case": "lower",
			"color-no-invalid-hex": true,
			"comment-whitespace-inside": "always",
			"declaration-bang-space-before": "always",
			"declaration-block-no-duplicate-properties": true,
			"declaration-block-single-line-max-declarations": 1,
			"declaration-block-trailing-semicolon": "always",
			"declaration-colon-space-after": "always",
			"declaration-colon-space-before": "never",
			"font-family-name-quotes": "always-where-recommended",
			"function-comma-space-after": "always",
			"function-url-quotes": "always",
			"max-empty-lines": 5,
			"media-feature-colon-space-after": "always",
			"media-feature-colon-space-before": "never",
			"media-feature-name-no-vendor-prefix": true,
			"media-feature-no-missing-punctuation": true,
			"media-query-parentheses-space-inside": "never",
			"number-leading-zero": "never",
			"number-no-trailing-zeros": true,
			"number-zero-length-no-unit": true,
			"property-no-vendor-prefix": true,
			"selector-list-comma-newline-after": "always",
			"selector-list-comma-newline-before": "never-multi-line",
			"selector-list-comma-space-before": "never",
			"selector-no-id": true,
			"string-quotes": "single",
			"value-no-vendor-prefix": true
		},
		"ignoreFiles" : [
			"resources/assets/sass/_variables.scss",
			"resources/assets/sass/base/_typecsset.scss",
			"resources/assets/sass/helpers/**/*.scss",
		]
	};


	var processors = [
		stylelint(stylelintConfig),

		// Pretty reporting config
		reporter({
			clearMessages: true
		})
	];


	new Task('sassLint', function () {
		gulp.src(config.sass.source)
			.pipe(postcss(processors, {syntax: syntax_scss}));
	})
	.watch(config.sass.source);
});





/*
|--------------------------------------------------------------------------
| JS Linting
|--------------------------------------------------------------------------
| http://eslint.org/docs/rules/
*/
Elixir.extend('jsLint', function () {
	var settings = {
		"rules": {
			"indent": [
				1,
				"tab"
			],
			"quotes": [
				1,
				"single"
			],
			"linebreak-style": [
				1,
				"unix"
			],
			"no-console": 1,
			"no-unused-vars": 1,
			"semi": [
				1,
				"always"
			],
			"valid-jsdoc" : 1
		},
		"env": {
			"browser": true,
			"node": true,
			"jquery": true,
			"es6": true
		},
		"extends": "eslint:recommended",
		"globals": {
			"swal": true,
			"App": true,
			"FB": true,
			"Admin": true,
			"Vue": true,
			"Modernizr": true
		},
		"ecmaFeatures": {
			"modules": true
		},
		"ignoreFiles" : [
			"resources/assets/js/utilities/console-errors.js"
		]
	};

	new Task('jsLint', function () {
		gulp.src(config.js.source)
			.pipe( eslint(settings) )
			.pipe( eslint.format() )
			.pipe( eslint.failOnError() );
	})
	.watch(config.js.source);
});




