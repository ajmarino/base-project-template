[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) [![License](http://b.repl.ca/v1/license-MIT-aacc22.png)]()

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
[Normalize Opentype 0.2.3](https://github.com/kennethormandy/normalize-opentype.css) - located in `resources/assets/sass/base`<br>



##  Grunt Commands
There are 3 main grunt commands included in `resources/grunt/tasks`:

* css  - Compiles main.scss in `assetDir/sass` to `outputDir/css/main.css`
* js   - Compiles `assetDir/js` into 1 file in `outputDir/js/app.min.js`
* docs - Compiles `assetDir/docs/docs` into `/docs` as static html files rdy to be hosted on a server

`assetDir` and `outputDir` are defined in `Gruntfile.js`

There is also a `grunt watch` command that will watch the `/resources/assets` directory for changes and run the appropriate grunt task.




## Sassdoc
Sassdoc generated documentation is located at `docs/sass`.  These files use settings from `package.json` to apply project specific naming and other data to the compiled docs.



##  Docs
All docs files are located in `resources/assets/docs/docs`.  There can be any number of files and sub-folders, and can set in a custom order by pre-pending numbers to the filename, `00_Index.md`.  Docs are written using markdown and are converted into static html files.



## Examples
```
<a href="#" class="button">Default Button</a>
```

<div class="example">
	<a href="#" class="button">Default Button</a>
</div>




