module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Departments',
      [
        {
          title: 'Кафедра алгебры',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кафедра геометрии',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кафедра математического анализа',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кафедра методики обучения математике и информатике',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кафедра физической культуры',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
};
