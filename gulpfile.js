var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    jshint     = require('gulp-jshint'),
    sass       = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    concat     = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),

    input  = {
      'sass': 'source/scss/**/*.scss',
      'javascript': 'source/javascript/**/*.js',
      'vendorjs': 'app/assets/javascript/vendor/**/*.js',
      'html': 'source/**/*.html',
      'compiled' : 'app/assets/stylesheets/compiled/**/*.css'
    },

    output = {
      'stylesheets': 'app/assets/stylesheets/compiled',
      'css': 'app/assets/stylesheets/',
      'javascript': 'app/assets/javascript',
      'html': 'app/**/*.html'
    };

/* run the watch task when gulp is called without arguments */
gulp.task('default', ['watch']);

/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {
  gulp.watch(input.javascript, ['jshint', 'build-js']);
  gulp.watch(input.sass, ['build-css']);
  gulp.watch(input.html, ['copyHtml']);
  gulp.watch(input.compiled, ['minify-css']);
});


/* run javascript through jshint */
gulp.task('jshint', function() {
  return gulp.src(input.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/* compile scss files */
gulp.task('build-css', function() {
  return gulp.src('source/scss/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.stylesheets));
});

//////////////////////////////
// Minify CSS
//////////////////////////////
gulp.task('minify-css', function() {
  return gulp.src(input.compiled)
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(output.css));
});

/* concat javascript files, minify if --type production */
gulp.task('build-js', function() {
  return gulp.src(input.javascript)
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.javascript));
});

/* copy any html files in source/ to public */
gulp.task('copyHtml', function() {
  gulp.src('source/*.html').pipe(gulp.dest('app'));
});

/* Run Browser-sync to reload the browser after a new sass file is compiled */
gulp.task('browser-sync', function () {
  var files = [
    'app/*.html',
    'app/assets/stylesheets/**/*.css',
    'app/assets/javascript/**/*.js',
    'app/assets/javascript/vendor/**/*.js'
  ];

  browserSync.init(files, {
    server: {
       baseDir: './app'
    }
  });
});