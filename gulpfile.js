var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
  return gulp
    .src('./src/styles/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist'));
});
