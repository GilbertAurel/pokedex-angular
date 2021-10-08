import { Menu } from 'src/app/interfaces/menu';

export const MENUS: Menu[] = [
  {
    title: 'Home',
    path: '',
  },
  {
    title: 'Project Initiation',
    path: '',
  },
  {
    title: 'Staffing',
    path: '',
  },
  {
    title: 'Revenue',
    path: '',
  },
  {
    title: 'Approval',
    path: '',
    subMenus: [
      {
        title: 'Home',
        path: '',
      },
      {
        title: 'Project Initiation',
        path: '',
      },
    ],
  },
  {
    title: 'Analytics',
    path: '',
    subMenus: [
      {
        title: 'Home',
        path: '',
      },
      {
        title: 'Project Initiation',
        path: '',
      },
    ],
  },
  {
    title: 'Hiring Summary',
    path: '',
    subMenus: [
      {
        title: 'Home',
        path: '',
      },
      {
        title: 'Project Initiation',
        path: '',
      },
    ],
  },
];
