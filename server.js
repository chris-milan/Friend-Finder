//npm dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//main port
const PORT = process.env.PORT || 8081;

//allows for data parsing through express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//route setup for sever to naviage through
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//starts server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
                