const gulp = require("gulp");
const runSequence = require("run-sequence");

gulp.task("run", (cb) => {
   runSequence(['dev.webpack', 'browser-sync'],
               cb);
});
