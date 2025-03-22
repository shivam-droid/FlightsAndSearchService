'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class City extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  City.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'City',
    }
  );

  return City;
};
