'use strict';

var gulp         = require('gulp'),
    livereload   = require('gulp-livereload'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),

    stylesSrc    = 'assets/styles/src/styles.scss',
    stylesDist   = 'assets/styles/dist';

gulp.task('styles', function() {
  gulp.src(stylesSrc)
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['> 0%'] }))
    .pipe(gulp.dest(stylesDist))
    .pipe(cssnano({ autoprefixer: false }))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest(stylesDist))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(stylesSrc, ['styles']);
});
