import { RouteId } from '@/lib/routes';
import Link from 'next/link';
import { PiDotOutlineLight, PiLockKeyLight } from 'react-icons/pi';
import { BsTwitterX } from 'react-icons/bs';
import { EmailSignup } from './EmailSignup/EmailSignup';
import { getNavItems } from './Navbar/Navbar.utils';
import { getTranslations } from 'next-intl/server';
import { LocaleSwitcher } from './LocaleSwitcher';

export const Footer = async () => {
  const t = await getTranslations();
  const navItems = await getNavItems();

  return (
    <footer className="bg-neutral" data-theme="darkTheme">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 w-full col-span-2">
          <div className="flex flex-col gap-8">
            <Link className="h-fit" href={RouteId.root}>
              <p className="text-2xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 text-transparent bg-clip-text">
                PaperlessZone
              </p>
            </Link>
            <LocaleSwitcher />
          </div>
          {navItems.map((mainItem) => {
            return (
              mainItem.items && (
                <div className="flex flex-col gap-2" key={mainItem.id}>
                  <Link
                    className="hover:text-primary w-fit"
                    href={mainItem.url ?? RouteId.root}
                  >
                    <p className="font-bold">{mainItem.label}</p>
                  </Link>
                  {mainItem.items.map((item) => {
                    return (
                      <Link
                        className="hover:text-primary w-fit"
                        key={item.id}
                        href={item.url ?? RouteId.root}
                      >
                        <p className="text-base">{item.label}</p>
                      </Link>
                    );
                  })}
                </div>
              )
            );
          })}
          <div className="divider lg:divider-horizontal mx-0" />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="text-xl leading-normal mb-4">
            {t('footer.emailSignup')}
          </p>
          <EmailSignup
            btnTitle={t('button.subscribe')}
            disclaimer={t.rich('emailSignup.agreement', {
              PrivacyLink: (chunks) => (
                <Link
                  className="link"
                  href={RouteId.privacy}
                  target="_blank"
                  rel="noreferrer"
                >
                  {chunks}
                </Link>
              ),
            })}
            loadingMsg={t('state.sending')}
            badgeText={t('button.free')}
          />
        </div>
      </div>

      <div className="bg-gunmetal-400">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-4">
          <aside className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
              <p className="text-sm">© 2024 TW Software Solutions LLC</p>
              <PiDotOutlineLight className="text-2xl hidden md:block" />
              <Link className="hover:text-primary" href={RouteId.about}>
                <p className="text-sm">{t('footer.aboutUs')}</p>
              </Link>
              <PiDotOutlineLight className="text-2xl hidden md:block" />
              <Link className="hover:text-primary" href={RouteId.contact}>
                <p className="text-sm">{t('button.contact')}</p>
              </Link>
              <PiDotOutlineLight className="text-2xl hidden md:block" />
              <Link className="hover:text-primary" href={RouteId.privacy}>
                <p className="text-sm">{t('footer.privacy')}</p>
              </Link>
              <PiDotOutlineLight className="text-2xl hidden md:block" />
              <Link className="hover:text-primary" href="/sitemap.xml">
                <p className="text-sm">Sitemap</p>
              </Link>
            </div>
            <div className="border rounded-lg px-2 py-1 flex items-center gap-2 w-fit h-fit">
              <PiLockKeyLight className="text-2xl" />
              <div className="flex flex-col">
                <p className="font-bold text-xs">Privacy</p>
                <p className="text-xs">Protected</p>
              </div>
            </div>
          </aside>
          <nav className="flex flex-wrap justify-center md:justify-start gap-2 items-center">
            <p>{t('footer.followUs')}</p>
            <Link href="https://twitter.com/paperlesszone">
              <BsTwitterX className="hover:text-primary text-3xl" />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
