"use strict";
var all_1 = require("./env/all");
var development_1 = require("./env/development");
var test_1 = require("./env/test");
var production_1 = require("./env/production");
let config;
switch (all_1.default.env) {
    case "development":
        config = Object.assign(all_1.default, development_1.default);
        break;
    case "test":
        config = Object.assign(all_1.default, test_1.default);
        break;
    case "production":
        config = Object.assign(all_1.default, production_1.default);
}
exports.default = config;
