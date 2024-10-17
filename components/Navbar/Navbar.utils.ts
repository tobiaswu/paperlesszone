import { RouteId } from '@/lib/routes';
import { NavItemData } from './Navbar.types';
import { getTranslations } from 'next-intl/server';

export const getNavItems = async () => {
  const t = await getTranslations();

  const navItems: NavItemData[] = [
    {
      id: 'solutions',
      label: t('navbar.solutions'),
      url: RouteId.solutions,
      items: [
        {
          id: 'solution-1',
          label: t('navbar.consultation'),
          url: RouteId.consultation,
        },
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
      url: RouteId.resources,
      items: [
        {
          id: 'resource-1',
          label: 'Blog',
          url: RouteId.blog,
        },
        {
          id: 'resource-2',
          label: 'Newsletter',
          url: 'https://paperlesszone.beehiiv.com/subscribe',
        },
      ],
    },
    {
      id: 'tools',
      label: t('navbar.tools'),
      url: RouteId.tools,
      items: [
        {
          id: 'tool-1',
          label: 'Paperless-ngx Demo',
          url: `${RouteId.blog}/free-online-demo-paperless-ngx`,
        },
      ],
    },
    { id: 'about', label: t('navbar.about'), url: RouteId.about },
  ];

  return navItems;
};
