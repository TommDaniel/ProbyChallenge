import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';

/** Ícones do MUI para ilustrar o toggle entre claro/escuro */
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Authenticated({
                                          header,
                                          children,
                                      }: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    // Verifica se o tema atual é 'dark' ou 'light'
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        // Tenta buscar do localStorage, caso contrário assume 'light'
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
        }
        return 'light';
    });

    // Sempre que 'theme' muda, adiciona ou remove a classe 'dark'
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    // Handler para alternar o tema
    const toggleTheme = () => {
        setTheme((current) => (current === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
            <nav className="border-b border-gray-100 bg-white dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        {/* Logo / Dashboard Link */}
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route('projects.index')}
                                    active={route().current('projects.index')}
                                >
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        {/* Dropdown Menu (Profile / Logout / DarkMode) */}
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <div className="relative ml-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 dark:bg-gray-700 dark:text-gray-300 transition duration-150 ease-in-out hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
                                            >
                                                {user.name}
                                                <svg
                                                    className="-mr-0.5 ml-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>

                                        {/* Botão de Toggle do Dark Mode */}
                                        <Dropdown.Link
                                            as="button"
                                            onClick={toggleTheme}
                                        >
                                            {theme === 'dark' ? (
                                                <div className="flex items-center">
                                                    <LightModeIcon className="mr-2" />
                                                    Light Mode
                                                </div>
                                            ) : (
                                                <div className="flex items-center">
                                                    <DarkModeIcon className="mr-2" />
                                                    Dark Mode
                                                </div>
                                            )}
                                        </Dropdown.Link>

                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        {/* Botão Hamburguer (mobile) */}
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(!showingNavigationDropdown)
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:hover:bg-gray-700"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={showingNavigationDropdown ? 'hidden' : 'inline-flex'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={!showingNavigationDropdown ? 'hidden' : 'inline-flex'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu responsivo mobile */}
                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route('projects.index')}
                            active={route().current('projects.index')}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                Profile
                            </ResponsiveNavLink>

                            {/* Dark Mode no menu mobile */}
                            <ResponsiveNavLink as="button" onClick={toggleTheme}>
                                {theme === 'dark' ? (
                                    <div className="flex items-center">
                                        <LightModeIcon className="mr-2" />
                                        Light Mode
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        <DarkModeIcon className="mr-2" />
                                        Dark Mode
                                    </div>
                                )}
                            </ResponsiveNavLink>

                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow dark:bg-gray-800 ">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
