'use client';

import {ThemeProvider} from '@/components/ui/theme-provider';
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar';
import {Dispatch, SetStateAction, createContext, useEffect, useState} from 'react';

export type ThemeProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeProps | null>(null);

const Providers = ({children}: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false); // To track when the component has mounted

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const getCurrentTheme = () => {
    const themeLocalStorage = localStorage.getItem('theme');
    if (themeLocalStorage) {
      setTheme(themeLocalStorage);
    }
  };

  useEffect(() => {
    getCurrentTheme();
    setIsMounted(true); // Mark as mounted after fetching the theme
  }, []);

  if (!isMounted) {
    // Prevent rendering until the theme is set on the client
    return null;
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange>
        {children}
        <ProgressBar
          height="4px"
          color="#fffd00"
          options={{showSpinner: false}}
          shallowRouting
        />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Providers;
