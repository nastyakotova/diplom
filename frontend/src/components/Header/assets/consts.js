import { AcademicPerformance } from '../../../pages/AcademicPerformance';
import { Archive } from '../../../pages/Archive';
import { EducationalPerformance } from '../../../pages/EducationalPerformance';
import { EducationalRoute } from '../../../pages/EducationalRoute';
import { Groups } from '../../../pages/Groups';
import { MainPage } from '../../../pages/MainPage';
import { Profile } from '../../../pages/Profile';
import { Schedule } from '../../../pages/Schedule';

export const professorNavigation = [
  {
    path: '/',
    title: 'Успеваемость и посещаемость',
    Component: AcademicPerformance,
  },
  {
    path: '/archive',
    title: 'Архив',
    Component: Archive,
  },
  {
    path: '/profile',
    title: 'Профиль',
    Component: Profile,
  },
  {
    path: '/schedule',
    title: 'Расписание',
    Component: Schedule,
  },
  {
    path: '/groups',
    title: 'Группы',
    Component: Groups,
  },
];

export const studentNavigation = [
  {
    path: '/',
    title: 'Главная',
    Component: MainPage,
  },
  {
    path: '/profile',
    title: 'Профиль',
    Component: Profile,
  },
  {
    path: '/educational-route',
    title: 'Индивидуальный образовательный маршрут',
    Component: EducationalRoute,
  },
  {
    path: '/schedule',
    title: 'Расписание',
    Component: Schedule,
  },
  {
    path: '/educational-performance',
    title: 'Текущая успеваемость',
    Component: EducationalPerformance,
  },
];
