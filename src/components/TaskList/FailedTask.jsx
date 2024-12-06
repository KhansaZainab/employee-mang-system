import React from 'react'

function FailedTask({data}) {
  return (
    <div className='w-[280px] h-full bg-[#C8724C]  px-6 py-8 gap-2  text-start rounded-lg flex-shrink-0'>
            <div className='flex justify-between items-center '>
                <button className='bg-[#b7d766] opacity-80 py-2 px-3 rounded-sm shadow-md hover:opacity-100'>{data.category}</button>
                <span className='text-sm '>{data.taskDate}</span>
            </div>
            <h3 className='text-xl font-semibold mt-9'>{data.taskTitle}</h3>
            <p className='mt-2'>{data.taskDescription}</p>
            <div className='flex justify-start items-center mt-6'>
                <button className="bg-[#fcd14f] opacity-80 p-3 rounded-md shadow-md hover:opacity-100">Failed</button>
            </div>
        </div>
  )
}

export default FailedTask
