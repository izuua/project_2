var db = require("../models");

module.exports = function(app) {

  // Get route for getting all of the doctors
  app.get("/api/doctors", function(req, res) {
    db.Doctor.findAll({}).then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });



  // POST route for saving a new doctor
  app.post("/api/doctors", function(req, res) {
    db.Doctor.create(req.body).then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });


  // DELETE route for deleting doctors. 
  //We can get the id of the doctor to be deleted from
  // req.params.id
  
  app.delete("/api/doctors/:id", function(req, res) {
    db.Doctor.destroy({ 
      where: { 
        id: req.params.id 
      } 
    }).then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });


 // PUT route for updating doctor. We can get the updated doctor data from req.body
  app.put("/api/doctors", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Doctor.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });

};
