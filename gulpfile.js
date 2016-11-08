var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence'),
    inject = require('gulp-inject'),
    serve = require('gulp-serve'),
    jshint = require('gulp-jshint');

var files = require('./gulp/gulp.config')

gulp.task('default', function(callback) {
    runSequence('build', 'watch', 'serve', callback);
});

gulp.task('build', function(callback){
    runSequence('clean', 'copy-build', 'index', 'forecastTmplts', 'homeTmplts', callback);
});

gulp.task('clean', function(callback) {
    // del now returns a promise so the return is a must include.
    // http://stackoverflow.com/questions/32619677/runsequence-is-not-working-with-gulp
    return del([files.build_dir], {force: true}, callback);
});

gulp.task('copy-build', ['copy-assets', 'copy-app-js', 'copy-vendor-js']);

gulp.task('copy-assets', function() {
    // currently no assets to copy.
    return gulp.src('./assets/**/*')
        .pipe(gulp.dest('./build/assets'));
});

gulp.task('copy-app-js', function() {
    return gulp.src('./src/**/*.js')
        .pipe(gulp.dest(files.build_dir));
});

gulp.task('copy-vendor-js', function() {
    // vendor does not currently exist.
    return gulp.src('./vendor/**/*.js')
        .pipe(gulp.dest('./build/vendor'));
});

gulp.task('index', function() {
    return gulp.src('./src/app/index.html')
        .pipe(inject(gulp.src(files.app_files.tpl_src), {ignorePath: 'build'}))
        .pipe(gulp.dest(files.build_dir));
});

gulp.task('reportDir', function() {
    return gulp.src('./src/app/directives/*.html')
        .pipe(gulp.dest(files.build_dir + '/app/directives'));
});

gulp.task('forecastTmplts', function() {
    return gulp.src('./src/app/forecast/*.html')
        .pipe(gulp.dest(files.build_dir + '/app/forecast'));
});

gulp.task('homeTmplts', function() {
    return gulp.src('./src/app/home/*.html')
        .pipe(gulp.dest(files.build_dir + '/app/home'));
});

gulp.task('serve', serve('build'));

gulp.task('lint', function() {
    return gulp.src(files.app_files.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch(files.app_files.js, ['lint', 'build'])
});