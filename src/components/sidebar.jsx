import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className='min-h-[88vh] min-w-[17vw] bg-slate-500 flex flex-col my-1 rounded-lg'>

            <a href="/compose" className='font-medium bg-cyan-500 h-12  m-5 rounded-lg w-52 mx-auto hover:bg-cyan-400 transition-all'>
                <button className='m-auto w-52 h-12'>
                    <img src="./icons/compose.png" alt="" className='w-5 inline m-2 invert' />
                    <div className='inline text-white'>Compose</div>
                </button>
            </a>

            <a href="/" className='font-medium h-12 flex flex-row rounded-md hover:bg-slate-600 transition-all'>
                <button >
                    <img src="./icons/inbox.png" alt="#No image found" className='w-6 inline m-2 mx-[50px] justify-start' />
                    <div className='inline-block py-2 font-semibold'>Inbox</div>
                </button>
            </a>
            <button className='font-medium h-12 flex flex-row rounded-md hover:bg-slate-600 transition-all'>
                <img src="./icons/send.png" alt="#No image found" className='w-6 inline m-2 mx-[50px] justify-start' />
                <div className='inline-block py-2 font-semibold'>Sent</div>
            </button>
            <button className='font-medium h-12 flex flex-row rounded-md hover:bg-slate-600 transition-all'>
                <img src="./icons/draft.png" alt="#No image found" className='w-6 inline m-2 mx-[50px] justify-start' />
                <div className='inline-block py-2 font-semibold'>Draft</div>
            </button>
            <button className='font-medium h-12 flex flex-row rounded-md hover:bg-slate-600 transition-all'>
                <img src="./icons/trash.png" alt="#No image found" className='w-6 inline m-2 mx-[50px] justify-start' />
                <div className='inline-block py-2 font-semibold'>Trash</div>
            </button>


        </div>
    )
}

export default Sidebar
