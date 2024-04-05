import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='bg-slate-300 flex min-h-[10vh] rounded-lg'>
                <img src="./logo.svg" alt="No Imgae Found" className='w-[80px]  p-[10px]' />
                <div className='justify-center items-center flex font-semibold text-xl text-gray-600'>IITK Mail Client</div>
                <div className='w-[85vw] flex justify-end'>

                    <div className='items-center flex right-5 font-semibold text-lg text-gray-600 '>Vibhor Srivastava</div>
                    <button>
                    <img src="./icons/down.png" alt="" className='w-8'/>
                    </button>
                    {/* <img src="./icons/user.jpg" alt="" className='w-10'/> */}
                </div>
            </div>
        </div>
    )
}

export default Header
