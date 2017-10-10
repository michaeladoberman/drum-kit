var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

// Tasks
gulp.task('serve', ['sass', 'js', 'copy'], function() {
    browserSync.init({
        server: "./public/"
    });

    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/index.html",['copy']);
    gulp.watch("public/index.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest('public/'))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('public/'))
        .pipe(browserSync.stream());
});

gulp.task('copy', function () {
  return gulp.src('src/index.html')
      .pipe(gulp.dest('public/') );
})

gulp.task('default', ['serve']);


