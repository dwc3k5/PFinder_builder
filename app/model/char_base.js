// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var CharBase = sequelize.define("char_base", {
  user_id: {
    type: Sequelize.INTEGER,
  },
  char_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  char_name:{
    type: Sequelize.STRING
  },
  char_race:{
    type: Sequelize.STRING
  },
  char_class:{
    type: Sequelize.STRING
  },
  char_Flvl:{
    type:Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
CharBase.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = CharBase;
