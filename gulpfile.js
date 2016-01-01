'use strict';

var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');


var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('vet', function() {
  log('Analyzing source with JSHint and JSCS');
  return gulp
    .src(config.allJs)
    .pipe($.if(args.verbose, $.print()))
    .pipe($.jscs())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {verbose: true, camelize: true}))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('set-up', function() {
  gulp.src('config.json')
    .pipe($.ngConfig('tacoTruck', config.setUp))
    .pipe(gulp.dest('public/javascripts'));
});

// Private methods below

function clean(path, done) {
  log('Cleaning: ' + $.util.colors.blue(path));
  del(path);
  done();
}

function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }

}
