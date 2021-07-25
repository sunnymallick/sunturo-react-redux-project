'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    vehicleId: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    // Image.belongsTo(models.Vehicle, { foreignKey: 'vehicleId' })
  };
  return Image;
};
