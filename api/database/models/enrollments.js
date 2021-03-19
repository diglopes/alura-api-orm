'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enrollments.belongsTo(models.People, {
        foreignKey: 'estudante_id'
      })
      Enrollments.belongsTo(models.Classes, {
        foreignKey: 'turma_id'
      })
    }
  };
  Enrollments.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enrollments',
    tableName: 'Matriculas'
  });
  return Enrollments;
};