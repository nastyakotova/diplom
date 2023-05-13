const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mark extends Model {
    static associate({ User, Discipline }) {
      Mark.Student = Mark.belongsTo(User, { foreignKey: 'studentId' });
      Mark.Professor = Mark.belongsTo(User, { foreignKey: 'professorId' });
      Mark.Discipline = Mark.belongsTo(Discipline, { foreignKey: 'disciplineId' });
    }
  }
  Mark.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      markType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      grade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      inDiplom: {
        type: DataTypes.BOOLEAN,
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
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      disciplineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Discipline',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Mark',
    },
  );
  return Mark;
};
