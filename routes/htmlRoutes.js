/* eslint-disable prettier/prettier */
var db = require("../models");
var path = require("path");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // patient route
  app.get("/patient", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Patient.findOne({ where: { Id: req.query.id }, include: [db.Visit] }).then(function(patient) {
      console.log(patient);
      res.render("patient", {
        patients: patient
      });
    });
  });
  //doctor route
  app.get("/doctor", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    console.log(req.query.id);
    db.Patient.findAll({ where: { DoctorId: req.query.id } }).then(function(patient) {
      res.render("doctor", {
        patients: patient
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
