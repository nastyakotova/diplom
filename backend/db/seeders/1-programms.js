module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Programms',
      [
        {
          number: '01.03.02',
          title: 'Прикладная математика и информатика',
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: '44.03.01',
          title: 'Математическое образование',
          year: 2019,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
};
