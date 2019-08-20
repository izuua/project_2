'use strict';
module.exports = (sequelize, DataTypes) => {
  const Visit = sequelize.define('Visit', {
    notes: DataTypes.TEXT
  }, {});
  Visit.associate = function(models) {
    Visit.belongsTo(models.Patient, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Visit;
};