/// <reference path="./../../typings/tsd.d.ts" />

import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as expressSession from "express-session";
import * as logger from "morgan";
import * as csurf from "csurf";
import * as handlebars from "express-handlebars";
import config from "./config";


module.exports = function(app: express.Application) {
  app.set("views", config.viewPath);
  app.engine("handlebars", handlebars({}));
  app.set("view engine", "handlebars");
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  if (config.env === "development") {
    app.use(express.static(config.appPath));
    app.use(express.static(config.clientPath));
  }
  require("./routes")(app);
};
