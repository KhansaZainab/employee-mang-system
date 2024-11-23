import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard(props) {
  // console.log(data);
 
  
  return (
    <div className='bg-black p-5 h-screen text-white'>
        <h1>Employee Dashboard</h1>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
      
    </div>
  )
}

export default EmployeeDashboard
