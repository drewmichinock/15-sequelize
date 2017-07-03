// requiring dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");

// set up express app
var port = process.env.PORT || 3000;
var app = express();

// serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// workaround: override with post having ?_method=DELETE
app.use(methodOverride("_method"));

// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give server access to them
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port, function() {

  console.log("listening on port " + port);

});