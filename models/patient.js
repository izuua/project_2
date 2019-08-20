'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    // doctorId: DataTypes.INTEGER
  }, {});
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