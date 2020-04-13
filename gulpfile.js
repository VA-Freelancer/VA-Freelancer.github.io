const   gulp = require('gulp');
const   jade = require('jade');
const   browserSync = require('browser-sync').create();
const   watch = require('gulp-watch');

gulp.task('watch', function(){
    watch(['./*.html', './css/main.css'], gulp.parallel(browserSync.reload));
});
gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('default', gulp.parallel('server', 'watch'));