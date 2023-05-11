module.exports = {
  async up(queryInterface) {
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
};
