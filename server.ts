/// <reference path="./typings/tsd.d.ts" />

import * as Express from "express";
import config from "./server/configs/config";

const app = Express();
require("./server/configs/express")(app);
app.listen(config.port, () => console.log(`Server running on ${config.port}`));
