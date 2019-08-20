'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlpha: true
        }
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlpha: true
        }
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
      address1: {
        type: Sequelize.STRING,
        validate: {
          isAlphanumeric: true
        }
      },
      address2: {
        type: Sequelize.STRING,
        validate: {
          isAlphanumeric: true
        }
      },
      city: {
        type: Sequelize.STRING,
        validate: {
          isAlpha: true
        }
      },
      state: {
        type: Sequelize.STRING,
        validate: {
          isAlpha: true
        }
      },
      zipcode: {
        type: Sequelize.INTEGER,
        validate: {
          len: [5],
          isNumeric: true
        }
      },
      doctorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: {
            tableName: "Doctors",
            schema: "schema"
          },
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Patients');
  }
};