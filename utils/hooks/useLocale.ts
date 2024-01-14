import { Locale } from '@/common/i18n/i18n-config';
import { useLocalStorage } from './useLocalStorage';

export const useLocale = () => {
  return useLocalStorage<Locale>('locale');
};
