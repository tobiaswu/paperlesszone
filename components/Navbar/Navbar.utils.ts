import { RouteId } from '@/lib/routes';
import { NavItemData } from './Navbar.types';
import { getTranslations } from 'next-intl/server';

export const getNavItems = async () => {
  const t = await getTranslations();

  const navItems: NavItemData[] = [
    {
      id: 'services',
      label: t('navbar.services'),
      url: RouteId.services,
      items: [
        {
          id: 'consulting',
          label: t('navbar.consulting'),
          url: RouteId.consulting,
        },
        {
          id: 'open-source',
          label: t('navbar.openSource'),
          url: RouteId.openSource,
        },
        // {
        //   id: 'agents',
        //   label: t('navbar.agents'),
        //   url: RouteId.agents,
        // },
        // {
        //   id: 'web-scraping',
        //   label: t('navbar.webScraping'),
        //   url: RouteId.webScraping,
        // },
      ],
    },
    {
      id: 'solutions',
      label: t('navbar.solutions'),
      url: RouteId.solutions,
      items: [
        {
          id: 'paperless-ngx',
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
          id: 'blog',
          label: 'Blog',
          url: RouteId.blog,
        },
        {
          id: 'newsletter',
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
          id: 'paperless-demo',
          label: 'Paperless-ngx Demo',
          url: `${RouteId.blog}/free-online-demo-paperless-ngx`,
        },
      ],
    },
    { id: 'about', label: t('navbar.about'), url: RouteId.about },
  ];

  return navItems;
};
