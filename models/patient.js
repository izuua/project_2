//creating patient table
module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define("Patient", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i']
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i']
      }
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address2: DataTypes.STRING,
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i']
      }
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        not: ["[a-z]",'i']
      }
    }
  });

  Patient.associate = function(models) {
    Patient.hasMany(models.Visit);
    Patient.belongsTo(models.Doctor, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Patient;
};
