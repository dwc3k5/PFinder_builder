var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



var connection ;

if(process.env.JAWSDB_UL) {
  connection = mysql.createConnection(process.env.JAWSDB_UL);
} else {
  connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"default_db"
  });
}
connection.connect();
module.exports = connection;



var app = express();
var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
