'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      drFirstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlpha: true
        }
      },
      drLastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlpha: true
        }
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true
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
      specialty: {
        type: Sequelize.STRING,
        validate: {
          isAlpha: true
        }
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    return queryInterface.dropTable('Doctors');
  }
};