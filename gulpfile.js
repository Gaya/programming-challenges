var gulp  = require('gulp'),
    shell = require('gulp-shell'),
    argv = require('yargs').argv;

var path = argv.path || ".";

gulp.task('node-execute', shell.task([
    'node ' + path + '/index.js'
]));

gulp.task('watch', ['node-execute'], function () {
    'use strict';
    //sass
    gulp.watch(path + "/index.js", ['node-execute']);
});