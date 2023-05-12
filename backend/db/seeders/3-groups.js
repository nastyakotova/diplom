module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Groups',
      [
        {
          group_name: '4об-ПМИ/19',
          kurs: 4,
          programm_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          group_name: '4об-ПОмо-1',
          kurs: 4,
          programm_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          group_name: '4об-ПОмо-2',
          kurs: 4,
          programm_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
};
