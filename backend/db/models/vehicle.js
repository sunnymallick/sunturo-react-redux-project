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
    description: DataTypes.TEXT
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
  };
  return Vehicle;
};