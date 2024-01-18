import { RouteId } from '@/lib/route';
import Link from 'next/link';
import {
  PiDotOutlineLight,
  PiLockKeyLight,
  PiTwitterLogoLight,
} from 'react-icons/pi';
import { EmailSignup } from './EmailSignup/EmailSignup';
import { getNavItems } from './Navbar/Navbar.utils';
import { Dictionary } from '@/lib/types';
import { LocaleSwitcher } from './LocaleSwitcher';
import { Locale } from '@/lib/i18n';

interface FooterProps {
  dict: Dictionary;
  lang: Locale;
}

export const Footer = ({ dict, lang }: FooterProps) => {
  const navItems = getNavItems(dict, lang);

  return (
    <footer className="bg-neutral" data-theme="darkTheme">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 w-full">
          <div className="flex flex-col gap-8">
            <Link className="h-fit" href={`/${lang + RouteId.root}`}>
              <p className="text-2xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 text-transparent bg-clip-text">
                DigitizerSpace
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
                    href={mainItem.url ?? `/${lang + RouteId.root}`}
                  >
                    <p className="font-bold">{mainItem.label}</p>
                  </Link>
                  {mainItem.items.map((item) => {
                    return (
                      <Link
                        className="hover:text-primary w-fit"
                        key={item.id}
                        href={item.url ?? `/${lang + RouteId.root}`}
                      >
                        <p className="text-base">{item.label}</p>
                      </Link>
                    );
                  })}
                </div>
              )
            );
          })}
        </div>
        <div className="divider md:divider-horizontal mx-0" />
        <div className="max-w-sm">
          <p className="text-2xl leading-normal mb-4">
            {dict.footer.emailSignup}
          </p>
          <EmailSignup dict={dict} lang={lang} />
        </div>
      </div>

      <div className="bg-gunmetal-400">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 p-4">
          <aside className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center">
              <p className="text-sm">© 2024 TW Software Solutions LLC</p>
              <PiDotOutlineLight className="text-2xl" />
              <Link
                className="hover:text-primary"
                href={`/${lang + RouteId.about}`}
              >
                <p className="text-sm">{dict.footer.aboutUs}</p>
              </Link>
              <PiDotOutlineLight className="text-2xl" />
              <Link
                className="hover:text-primary"
                href={`/${lang + RouteId.contact}`}
              >
                <p className="text-sm">{dict.button.contact}</p>
              </Link>
              <PiDotOutlineLight className="text-2xl" />
              <Link
                className="hover:text-primary"
                href={`/${lang + RouteId.privacy}`}
              >
                <p className="text-sm">{dict.footer.privacy}</p>
              </Link>
              {/* <PiDotOutlineLight />
        <Link className="hover:text-primary" href="/terms">
          <p className="text-base">Terms</p>
        </Link> */}
            </div>
            <div className="border rounded-lg px-2 py-1 flex items-center gap-2 w-fit h-fit">
              <PiLockKeyLight className="text-2xl" />
              <div className="flex flex-col">
                <p className="font-bold text-xs">Privacy</p>
                <p className="text-xs">Protected</p>
              </div>
            </div>
          </aside>
          <nav>
            <Link href="https://twitter.com/digitizerspace">
              <PiTwitterLogoLight className="hover:text-primary text-3xl" />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
