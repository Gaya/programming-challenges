var gulp  = require('gulp'),
    argv = require('yargs').argv;

var path = argv.path || ".";

gulp.task('watch', ['execute'], function () {
    'use strict';
    //sass
    gulp.watch(path + "/index.js", ['execute']);
});

gulp.task('execute', function () {
    var relpath = __dirname + '/' + path + '/index.js';

    if (require.cache[relpath]){
        delete require.cache[relpath];
    }

    require('./' + path + '/index.js');
});