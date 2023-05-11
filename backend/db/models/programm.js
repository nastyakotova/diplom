const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Programm extends Model {
    static associate({ Group, Module }) {
      Programm.Group = Programm.hasMany(Group, { foreignKey: 'programm_id' });
      Programm.Module = Programm.hasMany(Module, { foreignKey: 'programm_id' });
    }
  }
  Programm.init(
    {
      number: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Programm',
    },
  );
  return Programm;
};
