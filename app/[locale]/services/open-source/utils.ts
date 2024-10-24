const logos = [
  {
    src: '/assets/logos/paperless-ngx.webp',
    alt: 'Paperless NGX',
  },
  {
    src: '/assets/logos/nextcloud.webp',
    alt: 'Nextcloud',
  },
  {
    src: '/assets/logos/odoo.webp',
    alt: 'Odoo',
  },
  {
    src: '/assets/logos/metabase.webp',
    alt: 'Metabase',
  },
];
const avatarLogos = [
  {
    src: '/assets/avatars/real-estate-agent.webp',
    alt: 'Real Estate Agent',
  },
  {
    src: '/assets/avatars/it-owner.webp',
    alt: 'IT Owner',
  },
  {
    src: '/assets/avatars/medical-doctor.webp',
    alt: 'Medical Doctor',
  },
  {
    src: '/assets/avatars/lawyer.webp',
    alt: 'Lawyer',
  },
  {
    src: '/assets/avatars/construction-worker.webp',
    alt: 'Construction Worker',
  },
];
const clientLogos = [
  {
    src: '/assets/logos/sap.webp',
    alt: 'SAP',
  },
  {
    src: '/assets/logos/procureai.webp',
    alt: 'ProcureAI',
  },
  {
    src: '/assets/logos/peacevillages.webp',
    alt: 'Peace Villages International Srl',
  },
  {
    src: '/assets/logos/chrisfeith.webp',
    alt: 'Chris Feith Photography',
  },
  {
    src: '/assets/logos/wolfofrealestate.webp',
    alt: 'The Wolf of Real Estate',
  },
];

const cardKeys = ['card1', 'card2', 'card3'] as const;
const serviceBreakdownKeys = [
  'card1',
  'card2',
  'card3',
  'card4',
  'card5',
  'card6',
] as const;
const howItWorksKeys = ['step1', 'step2', 'step3', 'step4', 'step5'] as const;
const pricingStructureRowKeys = [
  'row1',
  'row2',
  'row3',
  'row4',
  'row5',
  'row6',
] as const;
const benefitsKeys = [
  'benefit1',
  'benefit2',
  'benefit3',
  'benefit4',
  'benefit5',
  'benefit6',
] as const;
const faqKeys = [
  'implementationTimeline',
  'dataMigration',
  'timeClientNeeds',
  'dataSecurity',
  'security',
  'whatIf',
  'training',
  'support',
  'hiddenCosts',
  'monthlyCosts',
  'integration',
  'customDevelopment',
  'gettingStarted',
  'preparation',
  'scaling',
  'updates',
] as const;

export {
  logos,
  avatarLogos,
  clientLogos,
  cardKeys,
  serviceBreakdownKeys,
  howItWorksKeys,
  pricingStructureRowKeys,
  benefitsKeys,
  faqKeys,
};
