// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var CharStats = sequelize.define("char_stats", {
  char_id: {
    type: Sequelize.INTEGER,
    primaryKey:true
  },
  str: {
    type: Sequelize.INTEGER,
  },
  con:{
    type: Sequelize.STRING
  },
  dex:{
    type: Sequelize.STRING
  },
  wis:{
    type: Sequelize.STRING
  },
  inte:{
    type:Sequelize.STRING
  },
  cha:{
    type:Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
CharStats.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = CharStats;
