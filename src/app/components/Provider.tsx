'use client';

import { ThemeProvider } from '@/components/ui/theme-provider';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';

export type ThemeProps = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeProps | null>(null);

const Providers = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    }

    const getCurrentTheme = () => {
        const themeLocalStorage = localStorage.getItem('theme');
        if (themeLocalStorage) {
            setTheme(themeLocalStorage);
        }
    }

    useEffect(() => {
        getCurrentTheme();
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            <ThemeProvider
                attribute="class"
                defaultTheme={'light'}
                enableSystem
                disableTransitionOnChange
            >
                {children}
                <ProgressBar
                    height="4px"
                    color="#fffd00"
                    options={{ showSpinner: false }}
                    shallowRouting
                />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default Providers;
