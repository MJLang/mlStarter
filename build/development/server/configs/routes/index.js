"use strict";
var express_1 = require("express");
const router = express_1.Router();
module.exports = function (app) {
    router.route("/")
        .all(function (req, res, next) {
        res.render("application");
    });
    app.use("/", router);
};
