module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Modules',
      [
        {
          title: 'Историко-философский',
          programmId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Коммуникативный',
          programmId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Здоровьесберегающий',
          programmId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Математический анализ и дифференциальные уравнения',
          programmId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Алгебра и геометрия',
          programmId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Информационный',
          programmId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Общематематический',
          programmId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Математическое моделирование',
          programmId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Компьютерные науки',
          programmId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Научно-исследовательский',
          programmId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
};
