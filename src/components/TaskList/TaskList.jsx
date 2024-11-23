import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'


function TaskList({data}) {
  // console.log(data.tasks);
  
  
  return (
    <div id='tasklist' className='w-full h-[57%] overflow-x-scroll mt-10 flex gap-5 shadow-md flex-nowrap'>
     {data.tasks.map((task, idx)=>{
       if(task.active){
        return  <AcceptTask key={idx} data={task}/>
       }
       if(task.completed){
        return   <CompleteTask key={idx} data={task}/>
       }
       if(task.failed){
        return   <FailedTask key={idx} data={task}/>
       }
       if(task.newTask){
        return   <NewTask key={idx} data={task}/>
       }
     })}

    </div>
  )
}

export default TaskList
