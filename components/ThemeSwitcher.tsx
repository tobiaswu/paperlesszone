'use client';

import { useEffect, useState } from 'react';
import { PiMoonStarsThin, PiSunLight } from 'react-icons/pi';

export default function ThemeSwitcher() {
  const isDefaultDark = window.matchMedia('prefers-color-scheme: dark').matches;
  const storedTheme = localStorage.getItem('isDark');
  const [isDark, setIsDark] = useState<boolean>(
    storedTheme ? JSON.parse(storedTheme) : isDefaultDark
  );

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <label className="swap swap-rotate">
      <input
        className="theme-controller"
        checked={isDark}
        type="checkbox"
        value="darkTheme"
        onChange={toggleTheme}
      />
      <PiSunLight className="swap-on text-2xl" />
      <PiMoonStarsThin className="swap-off text-2xl" />
    </label>
  );
}
