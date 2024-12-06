import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { useState } from 'react'

function TaskList({data}) {
  // console.log(data.tasks);
  const [tasks, setTasks] = useState(data.tasks || [])
  console.log(tasks);
  
  const HandleAcceptTaskBtn = (taskId)=>{
    const updateNewTask = tasks.map((task)=>
      task.taskId == taskId ? {...task, 'active': true, 'newTask' : false} : task
    )
    console.log('Before:', tasks);
    setTasks(updateNewTask);
    console.log('After:', updateNewTask);
  }
      
  const HandleCompletedBtn = (taskId)=>{
    const updateAcceptedTask = tasks.map((task)=>
    task.taskId == taskId ? {...task, 'active': false, 'completed': true} : task)
    setTasks(updateAcceptedTask)
  }

  const HandleFailedBtn = (taskId)=>{
    const updateFailedTask = tasks.map((task)=>
    task.taskId == taskId ? {...task, 'active' : false, 'failed': true} : task)
    setTasks(updateFailedTask)
  }
  
  return (
    <div id='tasklist' className='w-full h-[57%] overflow-x-scroll mt-10 flex gap-5 shadow-md flex-nowrap'>
    {tasks && tasks.length>0 ? 
    (tasks.map((task, idx)=>{
      if(task.active){
       return  <AcceptTask key={idx} data={task} id={data.id} onFailed={HandleFailedBtn} onCompleted={HandleCompletedBtn}/>
      }
      if(task.completed){
       return   <CompleteTask key={idx} data={task} id={data.id} />
      }
      if(task.failed){
       return   <FailedTask key={idx} data={task} id={data.id}/>
      }
      if(task.newTask){
       return   <NewTask key={idx} data={task} id={data.id} onAccept={HandleAcceptTaskBtn}/>
      }
    })) : (
      <p>No Tasks available</p>
    )
    }
    
    </div>
  )
}

export default TaskList
