import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function NewTask({data,id, onAccept}) {
const [userData, setUserData] = useContext(AuthContext)

const acceptHandler=(emp_id)=>{
   userData.forEach(employee => {
    if(employee.id==emp_id){
      return {
        ...employee,
        taskCount: {
          ...employee.taskCount,
          active: employee.taskCount.active + 1,
          newTask: employee.taskCount.newTask - 1,
        },
        tasks: employee.tasks.map((task) =>
          task.taskId === data.taskId
            ? { ...task, active: true, newTask: false }
            : task
        ),
      };
      // element.taskCount.active+=1
      // element.taskCount.newTask-=1
    }
    return employee
  });
  onAccept(data.taskId)

    console.log('emp_id',emp_id);
    
}
console.log(data);
 
  return (
    <div className='w-[280px] h-full bg-[#468AE5]  px-6 py-8 gap-2  text-start rounded-lg flex-shrink-0'>
            <div className='flex justify-between items-center '>
                <button className='bg-[#408ef5] opacity-80 py-2 px-3 rounded-sm shadow-md hover:opacity-100'>{data.category}</button>
                <span className='text-sm '>{data.taskDate}</span>
            </div>
            <h3 className='text-xl font-semibold mt-9'>{data.taskTitle}</h3>
            <p className='mt-2'>{data.taskDescription}</p>
        <div className='flex justify-start items-center mt-6'>
            <button onClick={()=>acceptHandler(id)} className='bg-[#b7d766] opacity-80 p-3 rounded-md shadow-md hover:opacity-100'>Accept Task</button>
        </div>      
    </div>
  )
}

export default NewTask
