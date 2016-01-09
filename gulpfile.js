var gulp = require('gulp');
var header = require('gulp-header');
var rename = require("gulp-rename");
var fs = require('fs');

gulp.task('default', ['build']);

gulp.task('build', function() {
    var pkg = require('./package.json'),
        headerText = fs.readFileSync("src/header.js", "utf8");

    gulp.src('src/requirejs-typescript.js')
        .pipe(header(headerText, { pkg : pkg } ))
        .pipe(rename('requirejs-typescript-' + pkg.version + '.js'))
        .pipe(gulp.dest('dist/'));
});
