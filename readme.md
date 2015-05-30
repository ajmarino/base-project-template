# Base Project Template
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![License](http://b.repl.ca/v1/license-MIT-009900.png)]()
[![Version 1.7.0](http://b.repl.ca/v1/version-1.7.0-lightgray.png)]()

Grunt organization based on [Chris Coyier's Grunt Boilerplate](https://github.com/chriscoyier/My-Grunt-Boilerplate)

Docs compiled using [SassDocs](https://github.com/SassDoc/sassdoc) and [Daux.io](https://github.com/justinwalsh/daux.io)


##  Install
After downloading files, run `bash scripts/setup-project.sh`. This will run the following commands provided they are installed:

	npm init
	bower init
	npm install --save-dev ...
	bower install --save-dev ...
	composer install --dev ...

After filling out the information for the bower.json and package.json files, it will install the following base components:


###  Bower
* [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
* [jQuery](https://github.com/jquery/jquery)
* [Bourbon](https://github.com/thoughtbot/bourbon)
* [Normalize.css](https://github.com/necolas/normalize.css)
* [Bootstrap Sass](https://github.com/twbs/bootstrap-sass)
* [Font Awesome](https://github.com/FortAwesome/Font-Awesome)

###  NPM
* [grunt](https://github.com/gruntjs/grunt)
* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
* [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
* [grunt-csso](https://github.com/t32k/grunt-csso)
* [grunt-sassdoc](https://github.com/SassDoc/grunt-sassdoc)
* [grunt-shell](https://github.com/sindresorhus/grunt-shell)


### Composer
* [Way Generators](https://github.com/jeffreyway/laravel-4-generators)
* [Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar)


###  Misc
[Typecsset v0.3.0](https://github.com/csswizardry/typecsset) - located in `resources/assets/sass/base`<br>
[Normalize Opentype 0.2.3](https://github.com/kennethormandy/normalize-opentype.css) - copied into `resources/assets/sass/vendor`<br>



##  Grunt Commands

There are 3 main grunt commands included in `resources/grunt/tasks`:

* css  - Compiles main.scss in `assetDir/sass` to `outputDir/css/main.css`
* js   - Compiles `assetDir/js` into 1 file in `outputDir/js/app.min.js`
* docs - Compiles `assetDir/docs/docs` into `/docs` as static html files rdy to be hosted on a server

`assetDir` and `outputDir` are defined in `Gruntfile.js`

There is also a `grunt watch` command that will watch the `/resources/assets` directory for changes and run the appropriate grunt task.


## Adding New Components
When adding new components through bower, there are a few places in the grunt options that need to be updated so that these plugins will be compiled and minified correctly.  



### Javascript
Un-comment the plugin option in `resources/grunt/options/concat.js`.  Add all external plugins as needed to the array.  Then un-comment the last line of the plugin options in `resources/grunt/options/uglify.js`



### Sass or CSS
Follow the current examples under `bower_css` in `resources/grunt/options/concat.js`, which will copy any css files into `resources/assets/sass/vendor`.  Since these are external, they are not to be modifed in `/vendor` but included at the top of `main.scss` and if necessary, overwritten by custom files.



## Sassdoc
Sassdoc generated documentation is located at `docs/sass`.  These files use settings from `package.json` to apply project specific naming and other data to the compiled docs.


##  Docs
All docs files are located in `resources/assets/docs/docs`.  There can be any number of files and sub-folders, and can set in a custom order by pre-pending numbers to the filename, `00_Index.md`.  Docs are written using markdown and are converted into static html files.


## Future Updates

* Add admin components based off The74
* Convert Grunt to Gulp for use with Laravel 5 Elixir
* 