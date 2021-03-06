'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    userId: DataTypes.INTEGER,
    year: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    type: DataTypes.STRING,
    ageRestriction: DataTypes.BOOLEAN,
    price: DataTypes.DECIMAL,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    vehicleImg: DataTypes.STRING,
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
    Vehicle.belongsTo(models.User, { foreignKey: 'userId'})
    Vehicle.hasMany(models.Review, { foreignKey: 'vehicleId' })
    Vehicle.hasMany(models.Booking, { foreignKey: 'vehicleId'})
    // Vehicle.hasMany(models.Image, { foreignKey: 'vehicleId' })
  };
  return Vehicle;
};
