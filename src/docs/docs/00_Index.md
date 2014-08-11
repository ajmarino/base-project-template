This is a starter project framework that has a base file structure and files to get a new project off the ground.

## Setup
The bower and npm modules needed are listed below. Once there are installed, the commands in the Gruntfile will be useful.


### Bower
* html5-boilerplate
* jquery
* normalize.css
* bourbon
* zurb/foundation


### Grunt modules
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



### Other Libraries
* [Typecsset](https://github.com/csswizardry/typecsset)
* [Daux.io](https://github.com/justinwalsh/daux.io)
* [SassDoc](https://github.com/SassDoc/sassdoc)



## Asset Compilation
Once all the above npm modules are installed, the source css and js files from `/src/sass` and `/src/js` will compile with `grunt css` and `grunt js`, and can be watched using `grunt watch`.  

```
grunt watch
```



## Docs Compilation
There is a shell script in the base directory that compiles the `/src/docs` directory.  To compile, run `bash compile_docs.sh`.  This will clear out any previous docs in `/docs` and will create static html files that can be uploaded are run locally.

```
bash compile_docs.sh
```

### Sass Docs
The docs in `/docs/sass/` pertain mostly to development.  This lists are the variables, functions and mixins from the `/src/sass/helpers` directory.