import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {

    const [isShowMenu , setIsShowMenu] = React.useState(false)

    return (
        <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                    <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="#">
                                <img
                                    className="block h-12 w-auto"
                                    src="https://cdn1.vectorstock.com/i/1000x1000/26/55/bird-logo-vector-33152655.jpg"
                                    alt="Workflow"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                        <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                            <div className="w-full">
                                <label htmlFor="search" className="sr-only">
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                        {/* Heroicon name: solid/search */}
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        id="search"
                                        name="search"
                                        className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                                        placeholder="Search"
                                        type="search"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                        {/* Mobile menu button */}
                        <button onClick={() => setIsShowMenu(prev => !prev)} 
                            type="button"
                            className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open menu</span>
                            {/*
Icon when menu is closed.

Heroicon name: outline/menu

Menu open: "hidden", Menu closed: "block"
*/}
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/*
Icon when menu is open.

Heroicon name: outline/x

Menu open: "block", Menu closed: "hidden"
*/}
                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                        <a
                            href="#"
                            className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                        >
                            <span className="sr-only">View notifications</span>
                            {/* Heroicon name: outline/bell */}
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </a>
                        {/* Profile dropdown */}
                        <div className="flex-shrink-0 relative ml-5 group">
                            <div>
                                <button
                                    type="button"
                                    className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </button>
                            </div>
                            {/*
Dropdown menu, show/hide based on menu state.

Entering: "transition ease-out duration-100"
  From: "transform opacity-0 scale-95"
  To: "transform opacity-100 scale-100"
Leaving: "transition ease-in duration-75"
  From: "transform opacity-100 scale-100"
  To: "transform opacity-0 scale-95"
*/}
                            <div
                                className="hidden group-hover:block origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                                tabIndex={-1}
                            >
                                {/* Active: "bg-gray-100", Not Active: "" */}
                                <a
                                    href="#"
                                    className="block py-2 px-4 text-sm text-gray-700"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="user-menu-item-0"
                                >
                                    Your Profile
                                </a>
                                <a
                                    href="#"
                                    className="block py-2 px-4 text-sm text-gray-700"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="user-menu-item-1"
                                >
                                    Settings
                                </a>
                                <a
                                    href="#"
                                    className="block py-2 px-4 text-sm text-gray-700"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="user-menu-item-2"
                                >
                                    Sign out
                                </a>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                        >

                            New Post
                        </a>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <nav className={`lg:hidden ${isShowMenu ? "block" : "hidden"}`} aria-label="Global" onBlur={() => setIsShowMenu(false)} onClick={() => setIsShowMenu(false)}>
                <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                    {/* Current: "bg-gray-100 text-gray-900", Default: "hover:bg-gray-50" */}
                    <NavLink
                        to={"/"}
                        aria-current="page"
                        className="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={"/users"}
                        className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"
                    >
                        Users
                    </NavLink>
                    <NavLink
                        to={"/courses"}
                        className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"
                    >
                        Courses
                    </NavLink>
                    <a
                        href="#"
                        className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium"
                    >
                        Trending
                    </a>
                </div>
                <div className="border-t border-gray-200 pt-4">
                    <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-gray-800">
                                Chelsea Hagon
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                chelseahagon@example.com
                            </div>
                        </div>
                        <button
                            type="button"
                            className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                        >
                            <span className="sr-only">View notifications</span>
                            {/* Heroicon name: outline/bell */}
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                        <a
                            href="#"
                            className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        >
                            Your Profile
                        </a>
                        <a
                            href="#"
                            className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        >
                            Settings
                        </a>
                        <a
                            href="#"
                            className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        >
                            Sign out
                        </a>
                    </div>
                </div>
                <div className="mt-6 max-w-3xl mx-auto px-4 sm:px-6">
                    <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700"
                    >

                        New Post
                    </a>
                    <div className="mt-6 flex justify-center">
                        <a
                            href="#"
                            className="text-base font-medium text-gray-900 hover:underline"
                        >

                            Go Premium
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
