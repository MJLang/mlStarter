const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const paths = require("./../config");


gulp.task('nodemon', ['watch'], () => {
  return nodemon({
    script: paths.server.nodemon.server,
    watch: paths.server.nodemon.watch
  });
});
