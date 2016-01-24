/// <reference path="./../typings/tsd.d.ts" />

import {WDUser} from "../../data/user";
import {module} from "angular";

let user = new WDUser();
user.email = "foobar@foobar.com";
console.log(user);

console.log('oida');

module("Foobar", []);
module("Foobar").run(function() {
  console.log("Hello Angular");
});
