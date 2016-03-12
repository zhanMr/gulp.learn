### learn gulp
运行
 - npm install

##### 合并脚本
gulp concat
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
##### 压缩脚本
gulp uglify
~~~sh
gulp.task('uglify', function(){
    return gulp.src(['src/*.js', 'src/*/*.js'])
        //压缩脚本
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('libs'))
        .pipe(notify({message: 'uglify is ok ...'}))

});
~~~
#### 合并压缩代码
gulp concat-uglify
~~~sh
gulp.task('concat-uglify', function(){
    return gulp.src(['src/*.js', 'src/*/*.js'])
        .pipe(concat('all.js'))
        //压缩脚本
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('libs'))
        .pipe(notify({message: 'uglify is ok ...'}))

});
~~~
#### 事件监听
gulp watch
~~~sh
gulp.task('watch', function(){
    gulp.watch('src/*.js', ['concat']);
});
~~~
#### 默认执行操作的配置
gulp
~~~sh
gulp.task('default',['watch']);
~~~