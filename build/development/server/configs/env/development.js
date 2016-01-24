"use strict";
var path = require("path");
const config = {
    appPath: path.normalize(path.join(__dirname, "..", "..", "..", "..", "..", "client")),
    clientPath: path.normalize(path.join(__dirname, "..", "..", "..", "client")),
    env: "development",
    port: 3000
};
exports.default = config;
