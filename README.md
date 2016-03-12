# learn gulp
运行
 - npm install

### 合并文件
~~~sh
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
~~~