module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Groups',
      [
        {
          groupName: '4об-ПМИ/19',
          kurs: 4,
          programmId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupName: '4об-ПОмо-1',
          kurs: 4,
          programmId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupName: '4об-ПОмо-2',
          kurs: 4,
          programmId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
};
