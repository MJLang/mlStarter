"use strict";
var path = require("path");
const config = {
    appPath: path.normalize(path.join(__dirname, "..", "..", "..", "client")),
    env: process.env.NODE_ENV || "development",
    rootPath: path.normalize(path.join(__dirname, "..", "..", "..")),
    viewPath: path.normalize(path.join(__dirname, "..", "..", "views")),
};
exports.default = config;
