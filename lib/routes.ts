export const RouteId = {
  root: '/',
  contact: '/contact',
  about: '/about',
  blog: '/blog',
  blogTopic: '/blog/topic',
  resources: '/resources',
  tools: '/tools',
  solutions: '/solutions',
  paperless: '/solutions/paperless',
  services: '/services',
  consulting: '/services/consulting',
  agents: '/services/agents',
  openSource: '/services/open-source',
  webScraping: '/services/web-scraping',
  privacy: '/privacy',
} as const;

export type RouteIdType = (typeof RouteId)[keyof typeof RouteId];
