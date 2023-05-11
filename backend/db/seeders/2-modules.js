'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Modules',
      [
        {
          title: 'Историко-философский',
          programm_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Коммуникативный',
          programm_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Здоровьесберегающий',
          programm_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Математический анализ и дифференциальные уравнения',
          programm_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Алгебра и геометрия',
          programm_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Информационный',
          programm_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Общематематический',
          programm_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Математическое моделирование',
          programm_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Компьютерные науки',
          programm_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Научно-исследовательский',
          programm_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {},
};
