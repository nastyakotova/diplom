const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Discipline extends Model {
    static associate({
      Module, User, Mark, Group,
    }) {
      Discipline.Module = Discipline.belongsTo(Module, { foreignKey: 'moduleId' });
      Discipline.User = Discipline.belongsTo(User, { foreignKey: 'professorId' });
      Discipline.Mark = Discipline.hasMany(Mark, { foreignKey: 'disciplineId' });
      Discipline.Group = Discipline.belongsTo(Group, { foreignKey: 'groupId' });
    }
  }
  Discipline.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      moduleId: {
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
      professorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Groups',
          key: 'id',
        },
      },
      examType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      examDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Discipline',
    },
  );
  return Discipline;
};
