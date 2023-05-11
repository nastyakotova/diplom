const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Discipline extends Model {
    static associate({ Module, User, Mark }) {
      Discipline.Module = Discipline.belongsTo(Module, { foreignKey: 'module_id' });
      Discipline.User = Discipline.belongsTo(User, { foreignKey: 'professor_id' });
      Discipline.Mark = Discipline.hasMany(Mark, { foreignKey: 'discipline_id' });
    }
  }
  Discipline.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      module_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Module',
          key: 'id',
        },
      },
      semester: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      professor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Discipline',
    },
  );
  return Discipline;
};
