var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});

gulp.task('babel', function () {
    return gulp.src('src/js/es6/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('src/js/'));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.sass', ['sass']);
});


gulp.task('js:build', function () {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('style:build', function () {
    gulp.src('src/css/*')
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('fonts:build', function() {
    gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts/'))
});

gulp.task('html:build', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'))
});


gulp.task('build', [
    'js:build',
    'html:build',
    'style:build'
]);


gulp.task('pre-build', [
    'fonts:build',
    'imagemin'
]);
