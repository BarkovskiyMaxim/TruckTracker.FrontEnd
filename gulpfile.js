const gulp = require('gulp');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var del = require('del');

function tssources() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('./'))
}

function clean() {
    del('dist/**', {force:true});
}

gulp.task("build", function(callback) {
    clean();
    tssources();
    callback();
})