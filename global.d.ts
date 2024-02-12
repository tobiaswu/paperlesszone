// Use type safe message keys with `next-intl`
type Messages = typeof import('./public/dictionaries/en.json');
declare interface IntlMessages extends Messages {}
