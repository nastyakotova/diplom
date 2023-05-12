const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({
      Group, Department, Discipline, Mark,
    }) {
      User.Group = User.belongsTo(Group, { foreignKey: 'group_id' });
      User.Department = User.belongsTo(Department, { foreignKey: 'department_id' });
      User.Discipline = User.hasMany(Discipline, { foreignKey: 'professor_id' });
      User.StudentMark = User.hasMany(Mark, { foreignKey: 'student_id' });
      User.ProfessorMark = User.hasMany(Mark, { foreignKey: 'professor_id' });
    }
  }
  User.init(
    {
      login: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      surname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      patronymic: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      isMale: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      role: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Groups',
          key: 'id',
        },
      },
      department_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Departments',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
