const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate({ User, Programm }) {
      Group.User = Group.hasMany(User, { foreignKey: 'group_id' });
      Group.Programm = Group.belongsTo(Programm, { foreignKey: 'programm_id' });
    }
  }
  Group.init(
    {
      group_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      kurs: {
        type: DataTypes.INTEGER,
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
      modelName: 'Group',
    },
  );
  return Group;
};
