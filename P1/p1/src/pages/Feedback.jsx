import React from 'react'

function Feedback() {
  return (
    <div className='absolute bg-black h-full w-full overflow-hidden'>
        <div className='flex flex-wrap font-semibold text-white w-[50vw] items-center ml-[51vw] mt-[50px] -translate-x-1/2 justify-center text-[40px]'>
            <h1>Your Feedback is most{" "}
            <span className='text-blue-600'> appreciated, </span>
            <h1>to cook something Extravagent</h1></h1>
        </div>
        <div className='w-[50vw] mt-10 shadow-blue-600 shadow-lg translate-x-1/2 bg-slate-700/20  h-[70vh]'>
        <div className='flex p-10'>
        <h1 className='text-white font-semibold text-[20px]'>Name</h1>
        <input type='Text' className='text-white ml-[100px] w-full bg-slate-700/20'/>
        </div>
        <div className='flex p-10'>
        <h1 className='text-white font-semibold text-[20px]'>Email</h1>
        <input type='Text' className='text-white ml-[100px] w-full bg-slate-700/20'/>
        </div><div className='flex p-10'>
        <h1 className='text-white font-semibold text-[20px] py-[70px]'>Message</h1>
        <input type='Text' className='text-white ml-[75px] w-full bg-slate-700/20'/>
        </div>
        <button className='justify-center flex ml-[190px] items-center flex rounded-md w-[35vw] h-8 bg-blue-600'>
            Submit
        </button>
        </div>
    </div>
  )
}

export default Feedback;