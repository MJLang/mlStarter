const gulp = require("gulp");
const config = require("./../config");

gulp.task("watch", ['dev.ts.server'] , function () {
  // Watch TS Server
  gulp.watch(config.typescript.server.development.src, ['dev.ts.server']);
});
