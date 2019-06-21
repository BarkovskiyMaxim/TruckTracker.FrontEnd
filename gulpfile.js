const gulp = require('gulp');
var ts = require("gulp-typescript");
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var tsProject = ts.createProject("tsconfig.json");

function css() {
    return gulp.src('sources/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

function tssources() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist/js'))
}

function copyPackageJson() {
    return gulp.src("package.json")
    .pipe(gulp.dest("dist"))
}

gulp.task("build", function(callback) {
    tssources();
    css();
    copyPackageJson();
    callback();
})