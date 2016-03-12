var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
//合并项目
gulp.task('concat', function() {
    return gulp.src('src/*.js')
        .pipe(concat('all.js'))
        //压缩文件的后缀名
        .pipe(rename({ suffix: '.min'}))
        //合并到libs目录
        .pipe(gulp.dest('libs'))
        //合并完成的提示
        .pipe(notify({message: 'concat is ok...'}));
});
//压缩项目
