const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsServer = require('./../config').typescript.server;
const tsClient = require('./../config').typescript.client;
const debug = require('gulp-debug');

gulp.task('dev.ts.server', () => {
  const tsProject = ts.createProject(tsServer.tsconfig);
  
  return tsProject.src()
                  .pipe(ts(tsProject))
                  .pipe(gulp.dest(tsServer.development.dest));
});


gulp.task('dev.ts.client', () => {
  const tsProject = ts.createProject(tsClient.tsconfig);
  return tsProject.src()
                  .pipe(ts(tsProject))
                  .pipe(debug())
                  .pipe(gulp.dest(tsClient.development.dest));
});
