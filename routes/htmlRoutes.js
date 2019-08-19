var db = require("../models");
var path = require("path");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // patient route
  app.get("/patients", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Patient.findAll({}).then(function(patients) {
      res.render("patient", {
        patients: patients
      });
    });
  });
  //doctor route
  app.get("/doctor/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Patient.findOne({ where: { id: req.params.id }}).then(function(doctor) {
      res.render("doctor", {
        doctors: doctor
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
