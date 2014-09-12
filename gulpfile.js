var gulp  = require('gulp'),
    shell = require('gulp-shell');

gulp.task('node-execute', shell.task([
    'node index.js'
]));

gulp.task('watch', ['node-execute'], function () {
    'use strict';
    //sass
    gulp.watch("index.js", ['node-execute']);
});