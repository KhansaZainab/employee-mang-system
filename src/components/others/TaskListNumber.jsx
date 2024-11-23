import React from 'react'

function TaskListNumber({data}) {
  return (
    <div className='flex items-start justify-between mt-8 gap-5'>
        <div className='w-[45%] py-6 px-9 rounded-md bg-[#468AE5] text-white'>
            <h2 className='text-3xl font-bold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
        <div className='w-[45%] py-6 px-9 rounded-md bg-[#A9C16E] text-white'>
            <h2 className='text-3xl font-bold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-semibold'>Completed</h3>
        </div>
        <div className='w-[45%] py-6 px-9 rounded-md bg-[#F6CF5F] text-white'>
            <h2 className='text-3xl font-bold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-semibold'>Accepted</h3>
        </div>
        <div className='w-[45%] py-6 px-9 rounded-md bg-[#C8724C] text-white'>
            <h2 className='text-3xl font-bold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-semibold'>Failed</h3>
        </div>
       
    </div>
  )
}

export default TaskListNumber
