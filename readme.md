# Base Project Template
[![License](http://b.repl.ca/v1/license-MIT-44aa44.png)]()
[![Version 2.0.0](http://b.repl.ca/v1/version-2.0.0-3399dd.png)]()





##  Install
There are a few setup commands that need to be run to fully be able to use the assets provided.  These files are meant to be used with a Laravel 5.1+ install, but can be adapted for use outside that framework.





#### Basic project info
Provided `npm`, `bower` and are installed globally, create a `package.json` and `bower.json` for dependency management.

```
npm init
bower init
```




#### Bower Components
```
bower install -D html5-boilerplate jquery bourbon modernizr normalize.css normalize-opentype.css fontawesome bootstrap-sass-official compass-breakpoint singularity sweetalert
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
* [SweetAlert](https://github.com/t4t5/sweetalert)




###  NPM
```
npm install -D gulp gulp-jshint laravel-elixir sassdoc
```
* [Gulp](https://github.com/gulpjs/gulp)
* [Gulp JSHint](https://github.com/spalger/gulp-jshint)
* [Laravel Elixir](https://github.com/laravel/elixir)
* [Sassdoc](https://github.com/SassDoc/sassdoc)





### Composer

There are 2 sets of `composer require` commands, one to install production dependencies and the other for dev-only dependencies

```
composer require anlutro/l4-settings laracasts/utilities jenssegers/agent illuminate/html
```

[Laravel Settings](https://github.com/anlutro/laravel-settings) - persistent settings in Laravel <br>
[PHP Vars to JS](https://github.com/laracasts/PHP-Vars-To-Js-Transformer) - Simplies passing php vars to js <br>
[Laravel Agent](https://github.com/jenssegers/Laravel-Agent) - A user agent class for Laravel, based on [Mobile Detect](https://github.com/serbanghita/Mobile-Detect) with extended functionality. <br>
[Laravel Flash](https://github.com/laracasts/flash) - easy flash notifications (not needed anymore)

```
composer require --dev laracasts/generators barryvdh/laravel-debugbar fzaninotto/faker
```


[Laracasts Generators](https://github.com/laracasts/Laravel-5-Generators-Extended) - additional generators for Laravel 5 <br>
[Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar) - Integrates PHP Debug Bar with Laravel 5 <br>
[Faker](https://github.com/fzaninotto/Faker) - Dummy data generator <br>
[Way Generators](https://github.com/jeffreyway/laravel-4-generators) - Artisan commands for generating various assets - Laravel 4 <br>
    

Most of the Laravel packages need to have a ServiceProvider and sometimes an Alias added to the main config, and some also require publishing of assets.



#### ServiceProviders

Add the following to `config/app.php`

```
anlutro\LaravelSettings\ServiceProvider::class,
Laracasts\Utilities\JavaScript\JavascriptServiceProvider::class,
Laracasts\Flash\FlashServiceProvider::class,
Jenssegers\Agent\AgentServiceProvider::class,
Barryvdh\Debugbar\ServiceProvider::class,
Laracasts\Generators\GeneratorsServiceProvider::class,
Illuminate\Html\HtmlServiceProvider::class,
```


#### Facades / Aliases

Add the following aliases to the array in `config/app.php`

```
'Setting'   => anlutro\LaravelSettings\Facade::class,
'Debugbar'  => Barryvdh\Debugbar\Facade::class,
'Flash'     => Laracasts\Flash\Flash::class,
'Agent'     => Jenssegers\Agent\Facades\Agent::class,
'Form'      => Illuminate\Html\FormFacade::class, 
'HTML'      => Illuminate\Html\HtmlFacade::class,
```


#### Publish Assets

Publish any assets or config files using `php artisan vendor:publish`






###  Misc

[Typecsset v0.3.0](https://github.com/csswizardry/typecsset) - located in `resources/assets/sass/base`<br>





## Sassdoc
Sassdoc generated documentation is located at `docs/sass`.  These files use settings from `package.json` to apply project specific naming and other data to the compiled docs.





##  Docs
All docs files are located in `resources/assets/docs/`.  There can be any number of files and sub-folders, and can set in a custom order by pre-pending numbers to the filename, `00_Index.md`.  Docs are written using markdown and are converted into static html files.





##  Gulp Commands





## Future Updates

* Add admin components