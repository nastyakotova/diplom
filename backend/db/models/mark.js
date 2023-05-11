const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mark extends Model {
    static associate({ User, Discipline }) {
      Mark.Student = Mark.belongsTo(User, { foreignKey: 'student_id' });
      Mark.Professor = Mark.belongsTo(User, { foreignKey: 'professor_id' });
      Mark.Discipline = Mark.belongsTo(Discipline, { foreignKey: 'discipline_id' });
    }
  }
  Mark.init(
    {
      student_id: {
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
      professor_id: {
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
      discipline_id: {
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
