// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var characters = require("../data/characters.js");
var character = require("../data/temp.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/tables", function(req, res) {
    res.json(characters);
  });

  app.post("/api/tables", function(req, res) {
      characters.push(req.body);
  });

  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   tableData = [];
  //   waitListData = [];
  //
  //   console.log(tableData);
  // });
};
