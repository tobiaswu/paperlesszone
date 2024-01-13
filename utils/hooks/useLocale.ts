import { Locale } from '@/i18n-config';
import { useLocalStorage } from './useLocalStorage';

export const useLocale = () => {
  return useLocalStorage<Locale>('locale');
};
