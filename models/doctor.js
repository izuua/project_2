'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    drFirstName: DataTypes.STRING,
    drLastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    specialty: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  Doctor.associate = function(models) {
    Doctor.hasMany(models.Patient);
  };
  return Doctor;
};