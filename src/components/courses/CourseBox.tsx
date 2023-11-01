import React from 'react'
import { useAppDispatch } from '../../Hooks/ReduxHooks'
import { removeCourse } from '../../Redux/store/courses'
import Swal from 'sweetalert2'
import MainModal from '../modals/MainModal'

export default function CourseBox({ title, _id, desc, category, discount, price, registersCount }: CourseType) {

    const [isShowInfoModal, setIsShowInfoModal] = React.useState(false)

    const dispatch = useAppDispatch()

    const removeHandler = () => {
        Swal.fire({
            title: "Are you sure?",
            confirmButtonColor: "red",
            confirmButtonText: "DELETE",
            showCancelButton: true,
        }).then(res => {
            if (res.isConfirmed) {
                dispatch(removeCourse(_id))
            }
        })
    }

    const closeModal = () => {
        setIsShowInfoModal(false)
    }

    return (<>
        {isShowInfoModal ? (
            <MainModal closeModal={closeModal}>
                <div className="my-5 bg-white  shadow-xl hover:shadow duration-200 rounded-xl">
                    <div className="relative w-full rounded-xl">
                        <img
                            className="rounded-xl hover:scale-105 duration-300"
                            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/X_Reasons_to_learn_Javascript.jpg"
                            alt="card image"
                        />
                        <div className="absolute bottom-3 left-4 flex items-center space-x-2">
                            <span className="p-1.5 rounded-lg bg-white hover:bg-red-500 flex items-center justify-center w-fit duration-200 group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>

                            </span>
                            <span className="p-1.5 rounded-lg bg-white hover:bg-blue-500 flex items-center justify-center w-fit duration-200 space-x-1 group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>

                                <small className="text-blue-500 group-hover:text-white">{registersCount}</small>
                            </span>
                        </div>
                    </div>
                    <div className="p-4">
                        <h5 className="text-primary  font-medium text-sm">
                            {title}
                        </h5>
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quas
                        </small>
                        <div className='flex mt-3'>
                            <p
                                className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm font-medium
                                    hover:-translate-y-0.5 active:translate-y-0 duration-200
                                    bg-transparent bg-green-200 
                                  text-green-800  mx-1
                                    md:mx-2 my-1 md:my-2">
                                ${price}
                            </p>
                            <p
                                className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm font-medium
                                    hover:-translate-y-0.5 active:translate-y-0  duration-200
                                    bg-transparent bg-green-100  dark:bg-green-100
                                 text-green-600 mx-1
                                    md:mx-2 my-1 md:my-2">
                                %{discount}
                            </p>
                            <p
                                className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm font-medium md:ml-auto
                                hover:-translate-y-0.5 active:translate-y-0  duration-200
                                bg-transparent bg-rose-100  dark:bg-rose-100
                                   text-rose-600  mx-1
                                md:mx-2 my-1 md:my-2">
                                {category}
                            </p>
                        </div>
                    </div>
                </div>
            </MainModal>
        ) : <></>}
        <li className="flex flex-col py-4 space-x-3 mb-3">
            <div className="flex-shrink-0 mb-2">
                <img
                    className="h-8 w-8 rounded-full"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt=""
                />
            </div>
            <div className="min-w-0 flex-1 mb-3">
                <p className="text-sm font-medium text-gray-900">
                    <a href="#">{title}</a>
                </p>
                <p className="text-sm text-gray-500">
                    <a href="#" className=' line-clamp-3'>{desc}</a>
                </p>
            </div>
            <div className="flex-shrink-0">
                <button onClick={removeHandler}
                    type="button"
                    className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100 mr-1">
                    Delete
                </button>
                <button onClick={() => setIsShowInfoModal(true)}
                    type="button"
                    className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-green-700 hover:bg-rose-100"
                >
                    View
                </button>
            </div>
        </li>
    </>)
}
