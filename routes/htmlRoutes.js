var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("../views.index.handlebars");
  });

  app.get("/doctor/:id", function(req, res) {
    db.Doctor.findAll({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.render("//DOCTOR HTML//");
    });
  });

  app.get("/patient", function(req, res) {
    db.Doctor.findAll({}).then(function() {
      res.render("//Patient HTML//");
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
