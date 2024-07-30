import { PiListLight } from 'react-icons/pi';
import Link from 'next/link';
import { RouteId } from '@/lib/route';
import { NavItemData } from './Navbar.types';
import { LocaleSwitcher } from '../LocaleSwitcher';

interface MobileMenuProps {
  items: NavItemData[];
}

export const MobileMenu = ({ items }: MobileMenuProps) => {
  return (
    <div className="dropdown">
      <div tabIndex={0} className="btn btn-ghost lg:hidden ml-2">
        <PiListLight className="fill-current text-3xl" />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-lg dropdown-content mt-2 z-50 p-2 shadow bg-neutral border border-gunmetal-600 rounded-lg w-screen"
      >
        {items.map((tab) => {
          return (
            <li key={tab.id}>
              <Link key={tab.id} href={tab.url ?? RouteId.root}>
                <p className="font-bold text-xl">{tab.label}</p>
              </Link>
              {tab.items && (
                <ul className="p-2">
                  {tab.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link href={item.url ?? RouteId.root}>
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
        <div role="li" className="ml-4 mt-2">
          <LocaleSwitcher />
        </div>
      </ul>
    </div>
  );
};
