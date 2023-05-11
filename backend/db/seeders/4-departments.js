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
          title: 'Кафедра социальной безопасности',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кафедра физического воспитания и спортивно-массовой работы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кафедра философии',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кафедра русской литературы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кафедра истории',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кафедра английского языка для профессиональной коммуникации',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кафедра физической электроники',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кафедра информационных систем',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
};
