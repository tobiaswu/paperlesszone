import { RouteId } from '@/utils/route';
import { NavItemData } from './Navbar.types';

export const navItems: NavItemData[] = [
  {
    id: 'solutions',
    label: 'Solutions',
    items: [
      // {
      //   id: 'solution-1',
      //   label: 'Consultation *coming soon',
      //   url: RouteId.consultation,
      // },
      {
        id: 'solution-2',
        label: 'Paperless Office',
        url: RouteId.paperless,
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    items: [
      // {
      //   id: 'resource-1',
      //   label: 'Blog *coming soon',
      //   url: RouteId.blog,
      // },
      {
        id: 'resource-2',
        label: 'Newsletter',
        url: '/#newsletter',
      },
    ],
  },
  { id: 'about', label: 'About', url: RouteId.about },
];
