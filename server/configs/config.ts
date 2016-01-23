"use strict";

import generalConfig from "./env/all";

import devConfig from "./env/development";
import testConfig from "./env/test";
import productionConfig from "./env/production";


let config;
switch (generalConfig.env) {
  case "development":
    config = Object.assign(generalConfig, devConfig);
    break;
  case "test":
    config = Object.assign(generalConfig, testConfig);
    break;
  case "production":
    config = Object.assign(generalConfig, productionConfig);
}


export default config;

