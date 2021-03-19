'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Levels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Levels.hasMany(models.Classes, {
        foreignKey: 'nivel_id'
      })
    }
  };
  Levels.init({
    descr_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Levels',
    tableName: 'Niveis'
  });
  return Levels;
};