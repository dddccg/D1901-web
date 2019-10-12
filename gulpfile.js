const gulp = require("gulp");
const htmlmin = require('gulp-htmlmin');
const cssClean = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const imagemin = require("gulp-imagemin");
const connect = require("gulp-connect");
const autoPrefixer = require("gulp-autoprefixer");

const app = {
    src: "src/",
    dist: "dist/"
}

// 处理html
gulp.task("html", function () {
    gulp.src(app.src + "html/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(app.dist + "html/"))
        .pipe(connect.reload());
})
// 处理css
gulp.task("css", function () {
    gulp.src(app.src + "css/*.css")
        .pipe(autoPrefixer({
            browsers:['> 5%'],
            cascade: true
        }))
        .pipe(cssClean())
        .pipe(gulp.dest(app.dist + "css/"))
        .pipe(connect.reload());
})
// 处理js
gulp.task('js', function () {
    gulp.src(app.src + "js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        })).pipe(uglify()).pipe(gulp.dest(app.dist + "js/"))
        .pipe(connect.reload());
});
// 处理图片
gulp.task("img",function(){
    gulp.src(app.src+"images/*/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest(app.dist+"images"))
    .pipe(connect.reload());
});
//fonts
gulp.task("fonts",function(){
    gulp.src(app.src+"fonts/*.*")
    
    .pipe(gulp.dest(app.dist+"fonts"))
    .pipe(connect.reload());
});

// build 构建生产环境的代码
gulp.task("build",['html','css','js','img','fonts']);

gulp.task("server",function(){
    connect.server({
        root:"src",
        port:1901,
        livereload:true
    });
    // 监听
    gulp.watch("src/*.html",['html']);
    gulp.watch("src/css/*.css",['css']);
    gulp.watch("src/js/*.js",['js']);
    gulp.watch("src/images/*.*",["img"]);
    gulp.watch("src/fonts/*.*",["fonts"]);

})