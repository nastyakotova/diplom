const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    static associate({ Programm, Discipline }) {
      Module.Programm = Module.belongsTo(Programm, { foreignKey: 'programm_id' });
      Module.Discipline = Module.hasMany(Discipline, { foreignKey: 'module_id' });
    }
  }
  Module.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      programm_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Programm',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Module',
    },
  );
  return Module;
};
