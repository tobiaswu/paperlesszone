import { RouteId } from '@/lib/routes';
import Link from 'next/link';
import { PiTriangleLight } from 'react-icons/pi';
import { MobileMenu } from './MobileMenu';
import { getNavItems } from './Navbar.utils';
import { getTranslations } from 'next-intl/server';
import { LocaleSwitcher } from '../LocaleSwitcher';

export const Navbar = async () => {
  const t = await getTranslations();
  const navItems = await getNavItems();

  return (
    <header className="navbar pl-0" data-theme="darkTheme">
      <div className="navbar-start">
        <MobileMenu items={navItems} />
        <Link className="ml-2" href={RouteId.root}>
          <p className="text-xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 text-transparent bg-clip-text">
            DigitizerSpace
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex gap-8">
        {navItems.map((navItem) => {
          return navItem.items ? (
            <div key={navItem.id} className="group">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1">
                <Link href={navItem.url}>{navItem.label}</Link>
                <PiTriangleLight className="text-primary rotate-180 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <ul
                tabIndex={0}
                className="p-2 z-50 hidden menu absolute shadow bg-neutral border border-gunmetal-600 rounded-lg w-52 group-hover:block"
              >
                {navItem.items.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.url ?? RouteId.root}>{item.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <Link key={navItem.id} href={navItem.url ?? RouteId.root}>
              <button className="btn btn-ghost">{navItem.label}</button>
            </Link>
          );
        })}
      </div>
      <div className="navbar-end">
        <div className="hidden lg:block mr-6">
          <LocaleSwitcher />
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-lime_green-600 to-sapphire-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Link href={RouteId.contact}>
            <button className="relative btn btn-sm">{t('button.contact')}</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
