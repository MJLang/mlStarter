const gulp = require("gulp");
const browserSync = require("browser-sync").create();


gulp.task("browser-sync", ['nodemon'], () => {
  browserSync.init({
    proxy: "http://localhost:3000",
    files: ['./../../client/**/*', 'build/development/client/**/*.*'],
    port: 7000
  });
});
