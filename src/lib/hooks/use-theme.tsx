'use client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const initialState = {
  isDarkMode: false,
  toggle: () => {},
  enableDarkMode: () => {},
  disableDarkMode: () => {},
};

const ThemeContext = createContext(initialState);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to false initially
  const [isMounted, setIsMounted] = useState(false); // Track hydration

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem('darkMode');
    if (storedTheme !== null) {
      setIsDarkMode(JSON.parse(storedTheme));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode, isMounted]);

  const toggle = useCallback(() => setIsDarkMode((prev) => !prev), []);
  const enableDarkMode = useCallback(() => setIsDarkMode(true), []);
  const disableDarkMode = useCallback(() => setIsDarkMode(false), []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggle, enableDarkMode, disableDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
