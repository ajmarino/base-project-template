# Base Project Template
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![License](http://b.repl.ca/v1/license-MIT-44aa44.png)]()
[![Version 1.8.0](http://b.repl.ca/v1/version-1.8.0-3399dd.png)]()

Grunt organization based on [Chris Coyier's Grunt Boilerplate](https://github.com/chriscoyier/My-Grunt-Boilerplate) <br>
Docs compiled using [SassDocs](https://github.com/SassDoc/sassdoc) and [Daux.io](https://github.com/justinwalsh/daux.io)





##  Install
There are a few setup commands that need to be run to fully be able to use the assets provided.



#### Basic project info
Provided `npm`, `bower` and `grunt-cli` are installed globally, create a `package.json` and `bower.json` for dependency management.

```
npm init
bower init
```





#### Bower Components
```
bower install -D html5-boilerplate jquery bourbon modernizr normalize.css normalize-opentype.css fontawesome bootstrap-sass-official compass-breakpoint singularity
```


* [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
* [jQuery](https://github.com/jquery/jquery)
* [Bourbon](https://github.com/thoughtbot/bourbon)
* [Modernizr](https://github.com/Modernizr/Modernizr)
* [Normalize.css](https://github.com/necolas/normalize.css)
* [Normalize Opentype](https://github.com/kennethormandy/normalize-opentype.css)
* [Font Awesome](https://github.com/FortAwesome/Font-Awesome)
* [Bootstrap Sass](https://github.com/twbs/bootstrap-sass)
* [Breakpoint](https://github.com/at-import/breakpoint)
* [Singularity.gs](https://github.com/at-import/Singularity)





###  NPM
```
npm install -D grunt grunt-contrib-clean grunt-contrib-concat grunt-contrib-copy grunt-contrib-jshint grunt-contrib-sass grunt-contrib-uglify grunt-contrib-watch grunt-autoprefixer grunt-csso grunt-sassdoc grunt-shell
```

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

There are 2 sets of `composer require` commands, one to install production dependencies and the other for dev-only dependencies

```
composer require anlutro/l4-settings laracasts/flash laracasts/utilities
```

[Laravel Settings](https://github.com/anlutro/laravel-settings) - persistent settings in Laravel <br>
[Laravel Flash](https://github.com/laracasts/flash) - easy flash notifications <br>
[PHP Vars to JS](https://github.com/laracasts/PHP-Vars-To-Js-Transformer) - Simplies passing php vars to js <br>

```
composer require --dev laracasts/generators barryvdh/laravel-debugbar fzaninotto/faker
```


[Laracasts Generators](https://github.com/laracasts/Laravel-5-Generators-Extended) - additional generators for Laravel 5 <br>
[Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar) - Integrates PHP Debug Bar with Laravel 5 <br>
[Faker](https://github.com/fzaninotto/Faker) - Dummy data generator <br>
[Way Generators](https://github.com/jeffreyway/laravel-4-generators) - Artisan commands for generating various assets - Laravel 4 <br>
	

Most of the Laravel packages need to have a ServiceProvider and sometimes an Alias added to the main config, and some also require publishing of assets.

#### ServiceProviders
For any packages used on production, add the following to `config/app.php`

```
'anlutro\LaravelSettings\ServiceProvider',
'Laracasts\Utilities\JavaScript\JavascriptServiceProvider',
'Laracasts\Flash\FlashServiceProvider',
```

For the dev only packages, they are added in a unique way in `app/Providers/AppServiceProvider.php` in the `register()` method

```
if ($this->app->environment() == 'local') {
	$this->app->register([
		'Laracasts\Generators\GeneratorsServiceProvider',
		'Barryvdh\Debugbar\ServiceProvider',
	]);
}
```


#### Facades / Aliases

Add the following aliases to the array in `config/app.php`

```
'Setting'  => 'anlutro\LaravelSettings\Facade',
'Debugbar' => 'Barryvdh\Debugbar\Facade',
'Flash'    => 'Laracasts\Flash\Flash'
```


#### Publish Assets

Publish any assets using `php artisan vendor:publish`






###  Misc

[Typecsset v0.3.0](https://github.com/csswizardry/typecsset) - located in `resources/assets/sass/base`<br>



##  Grunt Commands

Grunt commands located in `resources/grunt/tasks`:

* grunt - Compiles all the things!!!

* bower - Copies Bower components out of `bower_components`
* css  - Compiles main.scss in `$assetDir/sass` to `$outputDir/css/main.css`
* js   - Compiles `$assetDir/js` into 1 file in `$outputDir/js/app.min.js`
* docs - Compiles `$assetDir/docs/docs` into `/docs` as static html files rdy to be hosted on a server

`$assetDir` and `$outputDir` are defined in `Gruntfile.js`

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

* Add admin components
* Convert Grunt to Gulp for use with Laravel 5 Elixir
* 