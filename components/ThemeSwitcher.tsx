'use client';

import { useDarkMode } from '@/utils/hooks';
import { useEffect, useState } from 'react';
import { PiMoonStarsLight, PiSunLight } from 'react-icons/pi';

export const ThemeSwitcher = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [className, setClassName] = useState('hidden');

  useEffect(() => {
    if (darkMode) {
      setClassName('swap swap-rotate text-3xl');
    } else {
      setClassName('swap swap-rotate text-3xl');
    }
  }, [darkMode]);

  return (
    <label className={className}>
      <input
        type="checkbox"
        className="theme-controller"
        value="lightTheme"
        checked={!darkMode}
        onChange={toggleDarkMode}
      />
      <PiSunLight className="swap-off" />
      <PiMoonStarsLight className="swap-on" />
    </label>
  );
};
