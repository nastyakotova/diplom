module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Programms',
      [
        {
          number: '01.03.02',
          title: 'Прикладная математика и информатика',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
};
