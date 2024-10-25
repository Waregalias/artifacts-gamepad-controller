'use client'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useTheme } from "next-themes";
import { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeContext } from "./Provider";
import { SidebarMenu } from './Sidebar';

export default function NavbarComponent() {
    const theme = useContext(ThemeContext);
    const { setTheme } = useTheme()

    const onDarkModeToggle = (e: boolean) => {
        setTheme(e ? 'dark' : 'light');
        theme?.setTheme(e ? 'dark' : 'light');
    }

    return (
        <header className="sticky top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-primary dark:bg-background dark:text-white text-sm py-4 dark:border-gray-600 border-b border-gray-600">
            <nav className="max-w-full w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <div className="sm:hidden">
                            <Sheet>
                                <SheetTrigger className='text-white mt-2'><Menu/></SheetTrigger>
                                <SheetContent side={"left"} className="w-[300px] sm:w-[340px]">
                                    <SheetHeader>
                                        <SheetTitle className='text-left text-xl font-bold ml-3'>Artifact Gamepad
                                            Controller</SheetTitle>
                                        <SheetDescription>
                                            <SidebarMenu/>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <span className="flex-none text-xl ml-4 font-semibold text-white">Artifact Gamepad Controller</span>
                    </div>
                    <div className="flex items-center">
                        <DarkModeSwitch
                          className='mr-2 text-white sm:block'
                            checked={theme?.theme === 'dark'}
                            onChange={onDarkModeToggle}
                            size={20} />
                    </div>
                </div>
            </nav>
        </header>
    );



}
