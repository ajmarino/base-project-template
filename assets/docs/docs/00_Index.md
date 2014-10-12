This is a starter project framework that has a base file structure and files to get a new project off the ground.

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) Grunt organization based on [Chris Coyier's Grunt Boilerplate](https://github.com/chriscoyier/My-Grunt-Boilerplate)

Docs compiled using [SassDocs](https://github.com/SassDoc/sassdoc) and [Daux.io](https://github.com/justinwalsh/daux.io)

## Setup
The bower and npm modules needed are listed below. Once there are installed, the commands in the Gruntfile will be useful.


###  Bower Components
* HTML5 Boilerplate
* jQuery
* Bourbon
* Bitters
* Normalize.css 


###  Grunt Modules
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



### Other Libraries
* [Typecsset](https://github.com/csswizardry/typecsset)
* [Daux.io](https://github.com/justinwalsh/daux.io)
* [SassDoc](https://github.com/SassDoc/sassdoc)



##  Install
After downloading files, run `bash setup-project.sh`. This will run the following commands provided they are installed:

```
npm init
bower init
npm install --save-dev ...
bower install --save-dev ...
```

After filling out the information for the bower.json and package.json files, it will intall the following base components



##  Grunt Commands

There are 3 main grunt commands included in `/grunt`:

* css  - Compiles main.scss in `src/sass` to `*/css/main.css`
* js   - Compiles `src/js` into 1 file in `*/js/app.min.js`
* docs - Compiles `src/docs/docs` into `/docs` as static html files rdy to be hosted on a server

There is also a `grunt watch` command that will watch the `/src` directory for changes and run the appropriate grunt task.





##  Docs
All docs files are located in `src/docs/docs`.  There can be any number of files and sub-folders, and can set in a custom order by pre-pending numbers to the filename, `00_Index.md`.  Docs are written using markdown and are converted into static html files.



## Examples
```
<a href="#" class="button">Default Button</a>
```

<div class="example">
	<a href="#" class="button">Default Button</a>
</div>




