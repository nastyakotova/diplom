module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Disciplines',
      [
        {
          title: '3d моделирование',
          module_id: 9,
          semester: 7,
          professor_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Анализ образовательных данных',
          module_id: 9,
          semester: 7,
          professor_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Компьютерное моделирование',
          module_id: 9,
          semester: 7,
          professor_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Программирование лингвистических задач на языке Python',
          module_id: 9,
          semester: 7,
          professor_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Математические модели в экономике',
          module_id: 8,
          semester: 7,
          professor_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Уравнения математической физики',
          module_id: 8,
          semester: 7,
          professor_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'История прикладной математики и информатики',
          module_id: 7,
          semester: 7,
          professor_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Численные методы',
          module_id: 7,
          semester: 7,
          professor_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
};
