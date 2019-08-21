'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Doctors", [{
      drFirstName: "David",
      drLastName: "Short",
      userName: "dps0610",
      password: "root",
      phone: "3369027302",
      email: "dps0610@hotmail.com",
      specialty: "",
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      drFirstName: "Michael",
      drLastName: "Beck",
      userName: "MBeck",
      password: "root",
      phone: "3369027302",
      email: "mbeck@hotmail.com",
      specialty: "",
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      drFirstName: "Bonaventure",
      drLastName: "Ndicunguye",
      userName: "Bonnie",
      password: "root",
      phone: "3369027302",
      email: "BonnieN@hotmail.com",
      specialty: "",
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      drFirstName: "Robert",
      drLastName: "Zuniga",
      userName: "RZuniga",
      password: "root",
      phone: "3369027302",
      email: "RZuniga@gmail.com",
      specialty: "",
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
      .then(function () {
        return queryInterface.sequelize.query(
          `Select id from Doctors;`
        );
      })
      .then(function (doctors) {
        const doctorsRows = doctors[0];

        return queryInterface.bulkInsert("Patients", [{
          firstName: "Benson",
          lastName: "Willems",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "James",
          lastName: "Willems",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Elyse",
          lastName: "Willems",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Burnie",
          lastName: "Burns",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Bruce",
          lastName: "Greene",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[1].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Adam",
          lastName: "Kovic",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[1].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Alanah",
          lastName: "Pearce",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[1].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Pam",
          lastName: "Horton",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[1].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Omar",
          lastName: "De Armas",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[2].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Matt",
          lastName: "Peake",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[2].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Lawrence",
          lastName: "Sontag",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[2].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Jon",
          lastName: "Smith",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[2].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Geoff",
          lastName: "Ramsey",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[3].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Michael",
          lastName: "Jones",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[3].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Gavin",
          lastName: "Free",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[3].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          firstName: "Ryan",
          lastName: "Haywood",
          phone: "3369027302",
          email: "example@gmail.com",
          address1: "123 Ray Rd",
          address2: "",
          city: "Charlotte",
          state: "NC",
          zipcode: "28205",
          doctorId: doctorsRows[3].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
      })
      .then(function () {
        return queryInterface.sequelize.query(
          `Select id from Patients;`
        );
      })
      .then(function (patients) {
        const patientRows = patients[0];
        return queryInterface.bulkInsert("Visits", [{
          notes: "Had flu-like symptoms. Low grade fever. Advised vitamin C.",
          patientId: patientRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }])
      })
  },
      

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Doctors', null, {})
    queryInterface.bulkDelete('Patients', null, {});
  }
};
