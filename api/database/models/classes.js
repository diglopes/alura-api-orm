'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classes.hasMany(models.Enrollments, {
        foreignKey: 'turma_id'
      })
      Classes.belongsTo(models.People, {
        foreignKey: 'docente_id'
      })
      Classes.belongsTo(models.Levels, {
        foreignKey: 'nivel_id'
      })
    }
  };
  Classes.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Classes',
    tableName: 'Turmas'
  });
  return Classes;
};