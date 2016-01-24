"use strict";
var path = require("path");
const config = {
    env: process.env.NODE_ENV || "development",
    rootPath: path.normalize(path.join(__dirname, "..", "..", "..")),
    viewPath: path.normalize(path.join(__dirname, "..", "..", "views")),
};
exports.default = config;
