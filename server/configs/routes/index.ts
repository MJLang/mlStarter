"use strict";

import {Router, Request, Response, Application} from "express";

const router = Router();

module.exports = function(app: Application) {
  router.route("/*")
        .all(function(req: Request, res: Response, next) {
          res.render("application");
        });
  app.use("/", router);
}
