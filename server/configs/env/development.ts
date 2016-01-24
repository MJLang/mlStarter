"use strict";

import * as path from "path";

const config = {
  appPath: path.normalize(path.join(__dirname, "..", "..", "..", "..", "..", "client")), 
  clientPath: path.normalize(path.join(__dirname, "..", "..", "..", "client")),
  env: "development",
  port: 3000
};

export default config
