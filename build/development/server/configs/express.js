var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var config_1 = require("./config");
module.exports = function (app) {
    app.set("views", config_1.default.viewPath);
    app.set("view engine", "jade");
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    if (config_1.default.env === "development") {
        app.use(express.static(config_1.default.appPath));
    }
    require("./routes")(app);
};
