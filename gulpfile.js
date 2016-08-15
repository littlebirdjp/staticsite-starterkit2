var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var prettify = require('gulp-prettify');
var rename = require('gulp-rename');
var minify = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');

var paths = {
  'html': 'src/',
  'scss': 'src/css/',
  'img': 'src/images/',
  'dist': 'dist/',
  'css': 'dist/css/'
}

gulp.task('bs', function() {
  browserSync.init({
    server: {
      baseDir: paths.dist,
      index: 'index.html'
    },
    notify: true
  });
});

gulp.task('html', function() {
  return gulp.src([
    paths.html + '**/*.jade',
    '!' + paths.html + '**/_*.jade'
    ])
    .pipe(jade())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('prettify', ['html'], function() {
  return gulp.src(paths.dist + '**/*.html')
    .pipe(prettify({
      brace_style: 'collapse',
      indent_size: 2,
      indent_char: ' '
    }))
    .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('scss', function() {
  var processors = [
      cssnext()
  ];
  return gulp.src(paths.scss + '**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: require('node-reset-scss').includePath
    }))
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', function() {
  gulp.watch([paths.html + '**/*.jade'], ['prettify']);
  gulp.watch([paths.scss + '**/*.scss'], ['scss']);
});

gulp.task('default', ['bs', 'prettify', 'scss', 'watch']);
