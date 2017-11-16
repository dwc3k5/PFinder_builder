// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var temp = require("../data/temp.js");
var characters = require("../data/characters.js");
var User = require("../model/users.js");
var CharStats = require("../model/char_stats.js");
var CharBase = require("../model/char_bases.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
console.log("api routes hit");

//==============================================================================
//LOGIN
//==============================================================================
  app.post("/api/userid", function (req, res){
    console.log("checking this");
    console.log(req.body);
    User.create({
      user_name: req.body.newUser
    });
  });

  app.post("/api/temp", function(req, res) {
      temp.push(req.body);
  });

  //==============================================================================
  //Character Create
  //==============================================================================
  app.post("/api/charcreate", function (req, res){
    console.log("checking this");
    console.log(req.body);
    CharBase.create({
      user_id: 1,
      char_name: req.body.charName,
      char_race: req.body.charRace,
      char_class: req.body.charClass,
      char_Flvl: req.body.charFlvl
    });
  // app.post("/api/temp", )
  });


  //==============================================================================
  //Character Stats
  //==============================================================================
  app.post("/api/charstats", function (req, res){
    console.log("checking this");
    console.log(req.body);
    CharStats.create({
      str: req.body.str,
      con: req.body.con,
      dex: req.body.dex,
      wis: req.body.wis,
      inte: req.body.inte,
      cha: req.body.cha
    });
  });

  //==============================================================================
  //Character other
  //==============================================================================
  app.get("/api/temp", function(req, res){
    res.json(temp[0].hello);
  });

  // app.get("/api/tables", function(req, res) {
  //   res.json(characters);
  // });
  //


  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   tableData = [];
  //   waitListData = [];
  //
  //   console.log(tableData);
  // });
};
