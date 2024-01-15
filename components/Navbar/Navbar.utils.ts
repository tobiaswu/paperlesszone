import { RouteId } from '@/lib/route';
import { NavItemData } from './Navbar.types';
import { Dictionary } from '@/lib/types';
import { Locale } from '@/lib/i18n';

export const getNavItems = (dict: Dictionary, lang: Locale) => {
  const navItems: NavItemData[] = [
    {
      id: 'solutions',
      label: dict.navbar.solutions,
      items: [
        // {
        //   id: 'solution-1',
        //   label: 'Consultation *coming soon',
        //   url: RouteId.consultation,
        // },
        {
          id: 'solution-2',
          label: dict.navbar.paperless,
          url: RouteId.paperless,
        },
      ],
    },
    {
      id: 'resources',
      label: dict.navbar.resources,
      items: [
        // {
        //   id: 'resource-1',
        //   label: 'Blog *coming soon',
        //   url: RouteId.blog,
        // },
        {
          id: 'resource-2',
          label: 'Newsletter',
          url: `/${lang}/#newsletter`,
        },
      ],
    },
    { id: 'about', label: dict.navbar.about, url: RouteId.about },
  ];

  return navItems;
};
