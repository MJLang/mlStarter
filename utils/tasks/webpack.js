const gulp = require('gulp');
const webpack = require('webpack-stream');
const paths = require('./../config').bundle;

gulp.task('dev.webpack', () => {
  gulp.src(paths.app.development.entry)
      .pipe(webpack(require('./../../webpack.config.js')))
      .pipe(gulp.dest(paths.app.development.dest));
});
