"use strict";

import * as path from "path";


const config = {

  env: process.env.NODE_ENV || "development",
  rootPath: path.normalize(path.join(__dirname, "..", "..", "..")),
  viewPath: path.normalize(path.join(__dirname, "..", "..", "views")),
};

export default config
