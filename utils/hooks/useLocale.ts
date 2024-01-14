import { Locale } from '@/common/i18n';
import { useLocalStorage } from './useLocalStorage';

export const useLocale = () => {
  return useLocalStorage<Locale>('locale');
};
