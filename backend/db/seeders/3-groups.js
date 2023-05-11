'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Groups',
      [
        {
          group_name: '4',
          kurs: 4,
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
