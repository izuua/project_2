//creating visit table

module.exports = function(sequelize, DataTypes) {
  var Visit = sequelize.define("Visit", {
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Visit.associate = function(models) {
    Visit.belongsTo(models.Patient, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Visit;
};
