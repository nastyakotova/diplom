const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate({ User }) {
      Department.User = Department.hasMany(User, { foreignKey: 'department_id' });
    }
  }
  Department.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Department',
    },
  );
  return Department;
};
