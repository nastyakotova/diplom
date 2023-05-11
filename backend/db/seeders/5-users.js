'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Владимир',
          surname: 'Богачёв',
          patronymic: 'Александрович',
          role: 'student',
          group_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ксения',
          surname: 'Пиотровская',
          patronymic: 'Раймондовна',
          role: 'professor',
          department_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Екатерина',
          surname: 'Тербушева',
          patronymic: 'Александровна',
          role: 'professor',
          department_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Михаил',
          surname: 'Якубсон',
          patronymic: 'Яковлевич',
          role: 'professor',
          department_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Виктор',
          surname: 'Будаев',
          patronymic: 'Дмитриевич',
          role: 'professor',
          department_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Сергей',
          surname: 'Рукшин',
          patronymic: 'Евгеньевич',
          role: 'professor',
          department_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Михаил',
          surname: 'Поспелов',
          patronymic: 'Владимирович',
          role: 'professor',
          department_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {},
};
