import { RouteId } from '@/lib/route';
import { NavItemData } from './Navbar.types';
import { getTranslations } from 'next-intl/server';

export const getNavItems = async () => {
  const t = await getTranslations();

  const navItems: NavItemData[] = [
    {
      id: 'solutions',
      label: t('navbar.solutions'),
      items: [
        // {
        //   id: 'solution-1',
        //   label: 'Consultation *coming soon',
        //   url: RouteId.consultation,
        // },
        {
          id: 'solution-2',
          label: t('navbar.paperless'),
          url: RouteId.paperless,
        },
      ],
    },
    {
      id: 'resources',
      label: t('navbar.resources'),
      items: [
        {
          id: 'resource-1',
          label: 'Blog',
          url: RouteId.blog,
        },
        {
          id: 'resource-2',
          label: 'Newsletter',
          url: '/#newsletter',
        },
      ],
    },
    { id: 'about', label: t('navbar.about'), url: RouteId.about },
  ];

  return navItems;
};
