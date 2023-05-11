module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      login: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      surname: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      patronymic: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isMale: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      role: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      group_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Groups',
          key: 'id',
        },
      },
      department_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Departments',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  },
};
