"use strict";

const gulp = require("gulp");
const del = require("del");
const cleanPath = require("./config").clean;

gulp.task("clean", () => {
  return del(cleanPath);
});
