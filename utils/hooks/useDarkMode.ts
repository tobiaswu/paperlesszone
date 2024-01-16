import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const getDefault = () => {
    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (error) {
      return false;
    }
  };

  const [darkMode, setDarkMode] = useLocalStorage<boolean>(
    'darkMode',
    getDefault()
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleDarkMode] as const;
};
