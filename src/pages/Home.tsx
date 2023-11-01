
export default function Home() {
    return (
        <div className=' lg:grid lg:grid-cols-12 lg:gap-8'>
            <main className=" lg:col-span-9 xl:col-span-7">
                <div className="px-4 sm:px-0">
                    <div className="sm:hidden">
                        <label htmlFor="question-tabs" className="sr-only">
                            Select a tab
                        </label>
                        <select
                            id="question-tabs"
                            className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                        >
                            <option >Recent</option>
                            <option>Most Liked</option>
                            <option>Most Comments</option>
                        </select>
                    </div>
                    <div className="hidden sm:block">
                        <nav
                            className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
                            aria-label="Tabs"
                        >
                            {/* Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" */}
                            <a
                                href="#"
                                aria-current="page"
                                className="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                            >
                                <span>Recent</span>
                                <span
                                    aria-hidden="true"
                                    className="bg-rose-500 absolute inset-x-0 bottom-0 h-0.5"
                                />
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                            >
                                <span>Most Liked</span>
                                <span
                                    aria-hidden="true"
                                    className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
                                />
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                            >
                                <span>Most Comments</span>
                                <span
                                    aria-hidden="true"
                                    className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
                                />
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="sr-only">Recent questions</h1>
                    <ul role="list" className="space-y-4">
                        <li className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                            <article aria-labelledby="question-title-81614">
                                <div>
                                    <div className="flex space-x-3">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-medium text-gray-900">
                                                <a href="#" className="hover:underline">
                                                    Masoud Bahamin
                                                </a>
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                <a href="#" className="hover:underline">
                                                    <time dateTime="2020-12-09T11:43:00">
                                                        December 9 at 11:43 AM
                                                    </time>
                                                </a>
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 self-center flex">
                                            <div className="group relative inline-block text-left">
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600"
                                                        id="options-menu-0-button"
                                                        aria-expanded="false"
                                                        aria-haspopup="true"
                                                    >
                                                        <span className="sr-only">Open options</span>
                                                        {/* Heroicon name: solid/dots-vertical */}
                                                        <svg
                                                            className="h-5 w-5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                        </svg>
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
                                                    className="hidden group-hover:block origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                    role="menu"
                                                    aria-orientation="vertical"
                                                    aria-labelledby="options-menu-0-button"
                                                    tabIndex={-1}
                                                >
                                                    <div className="py-1" role="none">
                                                        {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                                                        <a
                                                            href="#"
                                                            className="text-gray-700 flex px-4 py-2 text-sm"
                                                            role="menuitem"
                                                            tabIndex={-1}
                                                            id="options-menu-0-item-0"
                                                        >
                                                            {/* Heroicon name: solid/star */}
                                                            <svg
                                                                className="mr-3 h-5 w-5 text-gray-400"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                            <span>Add to favorites</span>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="text-gray-700 flex px-4 py-2 text-sm"
                                                            role="menuitem"
                                                            tabIndex={-1}
                                                            id="options-menu-0-item-1"
                                                        >
                                                            {/* Heroicon name: solid/code */}
                                                            <svg
                                                                className="mr-3 h-5 w-5 text-gray-400"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <span>Embed</span>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="text-gray-700 flex px-4 py-2 text-sm"
                                                            role="menuitem"
                                                            tabIndex={-1}
                                                            id="options-menu-0-item-2"
                                                        >
                                                            {/* Heroicon name: solid/flag */}
                                                            <svg
                                                                className="mr-3 h-5 w-5 text-gray-400"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <span>Report content</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2
                                        id="question-title-81614"
                                        className="mt-4 text-base font-medium text-gray-900"
                                    >
                                        These are the best places to park your cash
                                    </h2>
                                </div>
                                <div className="mt-2 text-sm text-gray-700 space-y-4">
                                    <p>
                                        Given that the Fed influences — directly or indirectly — interest rates on financial accounts and products throughout the US economy, savers and people
                                        with surplus cash still have many opportunities
                                        to get a far better return on their money than they’ve had in years — and even more importantly, a return that outpaces the latest readings on inflation.
                                    </p>
                                    <p>
                                        Here are low-risk options to get the best yield on funds you plan to use within two years,
                                        and also on cash you expect to need within the next two to five years. be…
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-between space-x-8">
                                    <div className="flex space-x-6">
                                        <span className="inline-flex items-center text-sm">
                                            <button
                                                type="button"
                                                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                            >
                                                {/* Heroicon name: solid/thumb-up */}
                                                <svg
                                                    className="h-5 w-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                                </svg>
                                                <span className="font-medium text-gray-900">29</span>
                                                <span className="sr-only">likes</span>
                                            </button>
                                        </span>
                                        <span className="inline-flex items-center text-sm">
                                            <button
                                                type="button"
                                                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                            >
                                                {/* Heroicon name: solid/chat-alt */}
                                                <svg
                                                    className="h-5 w-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="font-medium text-gray-900">11</span>
                                                <span className="sr-only">replies</span>
                                            </button>
                                        </span>
                                        <span className="inline-flex items-center text-sm">
                                            <button
                                                type="button"
                                                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                            >
                                                {/* Heroicon name: solid/eye */}
                                                <svg
                                                    className="h-5 w-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="font-medium text-gray-900">
                                                    2.7k
                                                </span>
                                                <span className="sr-only">views</span>
                                            </button>
                                        </span>
                                    </div>
                                    <div className="flex text-sm">
                                        <span className="inline-flex items-center text-sm">
                                            <button
                                                type="button"
                                                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                            >
                                                {/* Heroicon name: solid/share */}
                                                <svg
                                                    className="h-5 w-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                                </svg>
                                                <span className="font-medium text-gray-900">
                                                    Share
                                                </span>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </li>
                        {/* More questions... */}
                    </ul>
                </div>
            </main>
            <aside className="hidden xl:block xl:col-span-5">
                <div className="sticky top-4 space-y-4">
                    <section aria-labelledby="who-to-follow-heading">
                        <div className="bg-white rounded-lg shadow">
                            <div className="p-6">
                                <h2
                                    id="who-to-follow-heading"
                                    className="text-base font-medium text-gray-900"
                                >
                                    last Payment
                                </h2>
                                <div className="mt-6 flow-root">
                                    <ul role="list" className="-my-4 divide-y divide-gray-200">
                                        <li className="flex items-center py-4 space-x-3">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-medium text-gray-900">
                                                    <a href="#">Masoud Bahamin</a>
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    <a href="#">@bahaminwp@gmail.com</a>
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                                                >
                                                    {/* Heroicon name: solid/plus-sm */}
                                                    <svg
                                                        className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span> $650.50 </span>
                                                </button>
                                            </div>
                                        </li>
                                        {/* More people... */}
                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                    >

                                        View all
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section aria-labelledby="trending-heading">
                        <div className="bg-white rounded-lg shadow">
                            <div className="p-6">
                                <h2
                                    id="trending-heading"
                                    className="text-base font-medium text-gray-900"
                                >
                                    Last Comment
                                </h2>
                                <div className="mt-6 flow-root">
                                    <ul role="list" className="-my-4 divide-y divide-gray-200">
                                        <li className="flex py-4 space-x-3">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt="Floyd Miles"
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm text-gray-800">
                                                may offer you a money market deposit account that pays a 
                                                higher yield than your.
                                                </p>
                                                <div className="mt-2 flex">
                                                    <span className="inline-flex items-center text-sm">
                                                        <button
                                                            type="button"
                                                            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                                        >
                                                            {/* Heroicon name: solid/chat-alt */}
                                                            <svg
                                                                className="h-5 w-5"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <span className="font-medium text-gray-900">
                                                               743
                                                            </span>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        {/* More posts... */}
                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                    >

                                        View all
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </aside>
        </div>
    )
}
