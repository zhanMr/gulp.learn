import gulp from 'gulp';
import concat from 'gulp-concat';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
//合并代码
gulp.task('concat', function() {
    return gulp.src(['src/*.js'])
        .pipe(babel())
        .pipe(concat('all.js'))
        //压缩文件的后缀名
        .pipe(rename({ suffix: '.min'}))
        //合并到libs目录
        .pipe(gulp.dest('libs'))
        //合并完成的提示
        .pipe(notify({message: 'concat is ok...'}));
});
//压缩代码
gulp.task('uglify', function(){
    return gulp.src(['src/*.js', 'src/*/*.js'])
        //压缩脚本
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('libs'))
        .pipe(notify({message: 'uglify is ok ...'}))

});
//合并压缩代码
gulp.task('concat-uglify', function(){
    return gulp.src(['src/*.js', 'src/*/*.js'])
        .pipe(concat('all.js'))
        //压缩脚本
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('libs'))
        .pipe(notify({message: 'uglify is ok ...'}))

});
//事件监听
gulp.task('watch', function(){
    gulp.watch('src/*.js', ['concat']);
});
//默认执行
gulp.task('default',['watch']);
