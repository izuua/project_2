//creating doctor table

module.exports = function(sequelize, DataTypes) {
  var Doctor = sequelize.define("Doctor", {
    drFirstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i']
      }
    },
    drLastName: {
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
    specialty: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });

  Doctor.associate = function(models) {
    Doctor.hasMany(models.Patient);
  };

  return Doctor;
};
