module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Disciplines',
      [
        {
          title: 'Уравнение математической физики',
          moduleId: 4,
          semester: 2,
          professorId: 2,
          groupId: 1,
          examType: 'Дифф. зачет',
          examDate: new Date(2023, 5, 11),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Аналитическая геометрия',
          moduleId: 5,
          semester: 4,
          professorId: 2,
          groupId: 2,
          examType: 'Экзамен',
          examDate: new Date(2023, 4, 4),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Информатика',
          moduleId: 3,
          semester: 6,
          professorId: 2,
          groupId: 3,
          examType: 'Зачет',
          examDate: new Date(2023, 5, 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Теория вероятностей',
          moduleId: 2,
          semester: 7,
          professorId: 2,
          groupId: 3,
          examType: 'Экзамен',
          examDate: new Date(2023, 4, 22),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
};
