module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Marks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      markType: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      grade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      inDiplom: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      professor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      discipline_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Disciplines',
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
    await queryInterface.dropTable('Marks');
  },
};
