const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sassGlob = require("gulp-sass-glob");
const postcss = require('gulp-postcss');
const sassLint = require('gulp-sass-lint');
const ejs = require('gulp-ejs');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const paths = {
  sass: {
    'src': './assets/sass/*.scss',
    'dist': './public/css'
  },
  ejs: {
    'src': './assets/ejs/*.ejs',
    'dist': './public/html'
  }
}

const processors = [
  autoprefixer(),
  cssnano()
];

gulp.task('style', function() {
  return gulp.src(paths.sass.src)
    .pipe(plumber())
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.sass.dist))
});

gulp.task('ejs', function() {
  return gulp.src(paths.ejs.src)
    .pipe(plumber())
    .pipe(ejs({},{},{'ext': '.html'}))
    .pipe(gulp.dest(paths.ejs.dist))
});
