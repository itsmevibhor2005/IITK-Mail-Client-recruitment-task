import React from 'react'

const Compose = () => {
    return (
        <div className='flex flex-col items-center min-w-[82vw] min-h-[89vh] bg-slate-200 rounded-md m-1 gap-4'>
            <h2 className='text-xl font-bold underline my-2'>Compose Email</h2>
            <div className='my-2'>
                <span className='inline-block font-bold w-[5vw]'>From: </span><input type="email" className='border min-w-[75vw] rounded-md border-cyan-100' />
            </div>
            <div className='my-2'>

                <span className='inline-block font-bold w-[5vw]'>To: </span><input type="email" className='border min-w-[75vw] rounded-md border-cyan-100' />
            </div>
            <div className='my-2'>

                <span className='inline-block font-bold w-[5vw]'>Subject: </span><input type="text" className='border min-w-[75vw] rounded-md border-cyan-100' />
            </div>
            <div>

                <textarea name="email" id="" cols="30" rows="10" className='border w-[80vw] rounded-md border-cyan-100'></textarea>
            </div>
            <div className='flex justify-between min-w-[78vw]'>

            <button className='w-[60px] h-[30px] bg-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-gray-100 transition-all'>Send</button>
            <button className='w-[110px] h-[30px] bg-red-600 rounded-lg text-white hover:bg-red-400 hover:text-black transition-all'>Save as Draft</button>
            </div>
        </div>
    )
}

export default Compose
