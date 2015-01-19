# Base Project Template
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) [![License](http://b.repl.ca/v1/license-MIT-aacc22.png)]()

Grunt organization based on [Chris Coyier's Grunt Boilerplate](https://github.com/chriscoyier/My-Grunt-Boilerplate)

Docs compiled using [SassDocs](https://github.com/SassDoc/sassdoc) and [Daux.io](https://github.com/justinwalsh/daux.io)


##  Install
After downloading files, run `bash scripts/setup-project.sh`. This will run the following commands provided they are installed:

	npm init
	bower init
	npm install --save-dev ...
	bower install --save-dev ...

After filling out the information for the bower.json and package.json files, it will intall the following base components

###  Bower Components
* HTML5 Boilerplate
* jQuery
* Bourbon
* Normalize.css
* Bootstrap Sass
* Font Awesome

###  NPM Components
* grunt
* grunt-contrib-clean
* grunt-contrib-concat
* grunt-contrib-jshint
* grunt-contrib-sass
* grunt-contrib-uglify
* grunt-contrib-watch
* grunt-autoprefixer
* grunt-csso
* grunt-sassdoc
* grunt-shell


###  Misc Components
[Typecsset v0.3.0](https://github.com/csswizardry/typecsset) - located in `src/sass/base`<br>
[Normalize Opentype 0.2.3](https://github.com/kennethormandy/normalize-opentype.css) - located in `src/sass/base`<br>



##  Grunt Commands

There are 3 main grunt commands included in `resources/grunt/tasks`:

* css  - Compiles main.scss in `assetDir/sass` to `outputDir/css/main.css`
* js   - Compiles `assetDir/js` into 1 file in `outputDir/js/app.min.js`
* docs - Compiles `assetDir/docs/docs` into `/docs` as static html files rdy to be hosted on a server

`assetDir and outputDir are defined in Gruntfile.js`

There is also a `grunt watch` command that will watch the `/resources/assets` directory for changes and run the appropriate grunt task.




## Sassdoc
Sassdoc generated documentation is located at `docs/sass`.  These files use settings from package.json to apply project specific naming and other data to the compiled docs.


##  Docs
All docs files are located in `resources/assets/docs/docs`.  There can be any number of files and sub-folders, and can set in a custom order by pre-pending numbers to the filename, `00_Index.md`.  Docs are written using markdown and are converted into static html files.
