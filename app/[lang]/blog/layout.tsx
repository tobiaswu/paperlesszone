import { BlogNavbar } from '@/components/BlogNavbar';
import { Locale } from '@/lib/i18n';
import { getDictionary } from '@/utils/getDictionary';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DigitizerSpace Blog - Automation Use Cases, AI Trends & More',
  description:
    '▷ Discover the DigitizerSpace Blog. Learn how you can scale & digitalize your business. ✓ Based on real use cases. ✓ Learn for free. ✓ Start automating today.',
};

export default async function BlogLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div data-theme>
      <BlogNavbar dict={dict} lang={lang} />
      {children}
    </div>
  );
}
