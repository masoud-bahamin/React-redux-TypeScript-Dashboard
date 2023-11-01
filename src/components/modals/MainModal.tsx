import React from 'react'

interface MainModalProps {
    closeModal: () => void;
    children: React.ReactNode
}

export default function MainModal({ children, closeModal }: MainModalProps) {
    return (
        <div className=' w-screen h-screen flex justify-center items-center fixed top-0 left-0 right-0' >
            <div className=' absolute top-0 left-0 w-screen h-screen bg-[rgba(150,150,150,.6)] -z-10' onClick={() => closeModal()}></div>
            <div className='bg-slate-100 p-4 rounded-lg shadow-md max-w-[600px] h-fit' >
                <div className='flex'>
                    <button className='ml-auto hover:bg-gray-500' onClick={() => closeModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}
