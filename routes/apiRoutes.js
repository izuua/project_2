var db = require("../models");

module.exports = function (app) {
  //////////////////////////////////
  //      dbDoctor api routes
  //////////////////////////////////

  // Get route for getting all of the doctors
  app.get("/api/doctors", function (req, res) {
    db.Doctor.findAll({}).then(function (dbDoctor) {
      res.json(dbDoctor);
    });
  });


  // POST route for saving a new doctor
  app.post("/api/doctors", function (req, res) {
    db.Doctor.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      contact: req.body.contact,
      specialty: req.body.specialty,
      status: req.body.status 
    }).then(function (dbDoctor) {
      res.json(dbDoctor);
    });
  });

  // DELETE route for deleting doctors. 
  //We can get the id of the doctor to be deleted from
  // req.params.id

  app.delete("/api/doctors/:id", function (req, res) {
    db.Doctor.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbDoctor) {
      res.json(dbDoctor);
    });
  });

  // PUT route for updating doctor. We can get the updated doctor data from req.body
  app.put("/api/doctors", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Doctor.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      contact: req.body.contact,
      specialty: req.body.specialty,
      status: req.body.status
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbDoctor) {
      res.json(dbDoctor);
    });
  });

  //////////////////////////////////
  //      dbPatient api routes
  //////////////////////////////////

  // Get route for getting all of the patients
  app.get("/api/patients", function (req, res) {
    db.Patient.findAll({}).then(function (dbPatient) {
      res.json(dbPatient);
    });
  });


  // POST route for saving a new patient
  app.post("/api/patients", function (req, res) {
    db.Patient.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      addressOne: req.body.addressOne,
      addressTwo: req.body.addressTwo,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode
    }).then(function (dbPatient) {
      res.json(dbPatient);
    });
  });

  // DELETE route for deleting patients. 
  //We can get the id of the patient to be deleted from
  // req.params.id

  app.delete("/api/patients/:id", function (req, res) {
    db.Patient.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPatient) {
      res.json(dbPatient);
    });
  });

  // PUT route for updating patient. We can get the updated patient data from req.body
  app.put("/api/doctors", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Doctor.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      addressOne: req.body.addressOne,
      addressTwo: req.body.addressTwo,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode

    }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbPatient) {
      res.json(dbPatient);
    });
  });

  //////////////////////////////////
  //      dbVisit api routes
  //////////////////////////////////

  // Get route for getting all of the visits
  app.get("/api/visits", function (req, res) {
    db.Visit.findAll({}).then(function (dbVisit) {
      res.json(dbVisit);
    });
  });


  // POST route for saving a new visit
  app.post("/api/visits", function (req, res) {
    db.Visit.create({
      firstName: req.body.firstName,
      LastName: req.body.LastName,
      notes: req.body.notes,
      date: req.body.date
    }).then(function (dbVisit) {
      res.json(dbVisit);
    });
  });

  // DELETE route for deleting visits. 
  //We can get the id of the visit to be deleted from
  // req.params.id

  app.delete("/api/visits/:id", function (req, res) {
    db.Visit.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbVisit) {
      res.json(dbVisit);
    });
  });

  // PUT route for updating doctor. We can get the updated visit data from req.body
  app.put("/api/visits", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Visit.update({
      firstName: req.body.firstName,
      LastName: req.body.LastName,
      notes: req.body.notes,
      date: req.body.date
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbVisit) {
      res.json(dbVisit);
    });
  });


};