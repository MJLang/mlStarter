const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsServer = require('./config').typescript.server;

gulp.task('dev.ts.server', () => {
  const tsProject = ts.createProject(tsServer.tsconfig);
  
  return tsProject.src()
                  .pipe(ts(tsProject))
                  .pipe(gulp.dest(tsServer.development.dest));
});
