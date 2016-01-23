const gulp = require("gulp");
const config = require("./config");

gulp.task("watch", function () {
  // Watch TS Server
  gulp.watch(config.typescript.server.development.src, ['dev.ts.server']);
});
