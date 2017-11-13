var path = require("path");


module.exports = function (app){

    app.get("/charcreate", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/charCreate.html"));
    });

    app.get("/pointcalc", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/pointCalc.html"));
    });
    app.get("/partyview", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/partyview.html"));
    });
    app.use(function(req, res){
      res.sendFile(path.join(__dirname, "../public/charCreate.html"));
    });
};
