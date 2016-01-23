var Express = require("express");
var config_1 = require("./server/configs/config");
const app = Express();
require("./server/configs/express")(app);
app.listen(config_1.default.port, () => console.log(`Server running on ${config_1.default.port}`));
