// import { locales } from '@/lib/constants';
// import { useLocale, useTranslations } from 'next-intl';
// import Link from 'next/link';
// import { LocaleSwitcherTab } from './LocaleSwitcherTab';

// export const LocaleSwitcher = () => {
//   const t = useTranslations('LocaleSwitcher');
//   const locale = useLocale();

//   return (
//     <LocaleSwitcherTab defaultValue={locale}>
//      {locales.map((locale) => (
//         <option key={locale} value={locale}>
//           {t('locale', {locale})}
//         </option>
//       ))}
//     </LocaleSwitcherTab>
    
//       {locales.map((locale) => {
//         const className = activeTab?.includes(locale)
//           ? 'tab tab-active'
//           : 'tab';

//         return (
//           <Link
//             key={locale}
//             className={className}
//             role="tab"
//             href={redirectedPathName(locale)}
//             onClick={() => handleClick(locale)}
//           >
//             {locale}
//           </Link>
//         );
//       })}
//   );
// };
