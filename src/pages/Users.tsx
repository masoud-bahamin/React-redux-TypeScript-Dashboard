import React from 'react'
import { addUser, getUsers } from '../Redux/store/users'
import UserBox from '../components/users/UserBox'
import { useAppDispatch, useAppSelector } from '../Hooks/ReduxHooks'
import UserBoxLoading from '../components/users/UserBoxLoading'
import { Formik, Form, Field} from 'formik'
import * as Yup from "yup"

export default function Users() {

    const userSchema = Yup.object().shape({
        firstname: Yup.string().min(2).required(),
        lastname: Yup.string().required(),
        email: Yup.string().email().required(),
    })

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(getUsers())
    }, [])

    const users = useAppSelector(state => state.Users)

    // const users = useSelector<{ Users: UsersInitialState}>(state => state.Users)  as  UsersInitialState

    const submitHandler = (values: intialFormUserType) => {
        const { firstname, lastname, email, username } = values
        const newUser = {
            _id: crypto.randomUUID(),
            firstname,
            lastname,
            email,
            age: 0,
            city: "paris",
            username : username || email
        }
        console.log(newUser);
        
        dispatch(addUser(newUser))
    }

    interface intialFormUserType {
        firstname: string;
        lastname: string;
        email: string;
        username: string
    }

    return (
        <div className=' lg:grid lg:grid-cols-12 lg:gap-8'>
            <main className=" lg:col-span-9 xl:col-span-7">
                <div className="py-4 bg-white px-2 sm:px-4 rounded-lg font-medium">
                    USERS
                </div>
                <div className="mt-4">
                    <h1 className="sr-only">Add user questions</h1>
                    <ul role="list" className="space-y-4">
                        <li className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                            <article aria-labelledby="question-title-81614">
                                <div>
                                    <div className="flex justify-between">
                                        {users.loading ? (
                                            <div className='w-full h-full flex justify-center items-center p-12 m-12'>
                                                <div className='animate-spin h-8 w-8 text-gray-400 border-4 border-dashed rounded-full' ></div>
                                            </div>
                                        ) : (
                                            <div className="">
                                                <h2 className="mb-4 text-base font-medium text-gray-900">
                                                    What would you have done to add user?
                                                </h2>
                                                <Formik
                                                    initialValues={{
                                                        firstname: "",
                                                        lastname: "",
                                                        email: "",
                                                        username: ""
                                                    }}
                                                    onSubmit={(values: intialFormUserType) => {
                                                        console.log(values);
                                                        submitHandler(values)
                                                    }}
                                                    validationSchema={userSchema}
                                                >{({errors , touched} ) => (
                                                    <Form>
                                                        {errors.firstname && touched.firstname && <p className='text-sm text-rose-400'>{errors.firstname}</p>}
                                                        <Field className='border p-2 rounded-lg min-w-[300px] mb-3' placeholder='Firstname' type="text" name='firstname' />
                                                        {errors.lastname && touched.lastname && <p className='text-sm text-rose-400'>{errors.lastname}</p>}
                                                        <Field className='border p-2 rounded-lg min-w-[300px] mb-3' placeholder='Lastname' type="text" name='lastname' />
                                                        {errors.email && touched.email && <p className='text-sm text-rose-400'>{errors.email}</p>}
                                                        <Field className='border p-2 rounded-lg min-w-[300px] mb-3' placeholder='Email' type="text" name='email' />
                                                        <Field className='border p-2 rounded-lg min-w-[300px] mb-3' placeholder='Username' type="text" name='username' />
                                                        <div>
                                                            <button type='submit' className='bg-rose-600 text-white hover:bg-rose-400 p-2 rounded-lg min-w-[300px] mb-3'>Add User</button>
                                                        </div>
                                                    </Form>
                                                )}
                                                    
                                                </Formik>
                                            </div>
                                        )}

                                        <div className=" flex">
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

                                </div>
                                <div className="mt-2 text-sm text-gray-700 space-y-4">
                                    <p>
                                        Ultimately, I think that if you wanted to run the park
                                        successfully and keep visitors safe, the most important
                                        thing to prioritize would be…
                                    </p>
                                </div>
                                <div className="mt-6 flex justify-between space-x-8">
                                    <div className="flex space-x-6">
                                        <span className="inline-flex items-center text-sm">
                                            <button
                                                type="button"
                                                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    strokeWidth={1}
                                                    stroke="currentColor"
                                                    className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                </svg>

                                                <span className="font-medium text-gray-900">{users.data.length}</span>
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
                {users.status === "rejected" ? (
                    <div className='p-4'>
                        <div className='flex justify-between'>
                            <p> there is a problem, Plaese try again</p>
                            <button onClick={() => window.location.reload()}
                                className='bg-blue-500 text-white p-2 px-4 rounded-lg'
                            >refresh</button>
                        </div>
                        <p>{users.error}</p>
                    </div>
                ) : (
                    <div className="sticky top-4 space-y-4">
                        <section aria-labelledby="who-to-follow-heading">
                            <div className="bg-white rounded-lg shadow">
                                <div className="p-6">
                                    <h2
                                        id="who-to-follow-heading"
                                        className="text-base font-medium text-gray-900"
                                    >
                                        All users
                                    </h2>

                                    <div className="mt-6 flow-root">
                                        {users.loading ? (
                                            <ul role="list" className="-my-4 divide-y divide-gray-200">
                                                <UserBoxLoading />
                                            </ul>
                                        ) : (
                                            <ul role="list" className="-my-4 divide-y divide-gray-200">
                                                {users.data.map(user => <UserBox key={user._id} {...user} />)}
                                            </ul>
                                        )}

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
                                        Last User
                                    </h2>
                                    <div className="mt-6 flow-root">
                                        {users.loading ? (
                                            <ul role="list" className="-my-4 divide-y divide-gray-200">
                                                <UserBoxLoading />
                                            </ul>
                                        ) : (
                                            <ul role="list" className="-my-4 divide-y divide-gray-200">
                                                <UserBox  {...users.data[users.data.length - 1]} />
                                            </ul>
                                        )}
                                    </div>
                                    <div className="mt-6">
                                        <a href="#"
                                            className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                        >
                                            View all
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>)}
            </aside>
        </div>
    )
}
