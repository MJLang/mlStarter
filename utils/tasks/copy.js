"use strict";

const gulp = require("gulp");
const path = require("./../config").copy;

gulp.task("dev.copy", () => {
  gulp.src(path.serverViews.development.src)
      .pipe(gulp.dest(path.serverViews.development.dest))
});
