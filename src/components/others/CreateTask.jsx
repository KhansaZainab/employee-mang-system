import React, { useContext } from 'react'
import {useState} from 'react'
import NewTask from '../TaskList/NewTask';
import { AuthContext } from '../../context/AuthProvider';

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignto, setAssignto] = useState('');
  
  const [userData, setUserData] = useContext(AuthContext);
  const [newTask, setNewTask] = useState({});
  const submitHandler = (e)=>{
    e.preventDefault();

    setNewTask({active:false, completed: false, failed:false,  newTask: true,taskTitle, taskDescription,taskDate,category, assignto, })
    
    // const data = JSON.parse(localStorage.getItem('employees'))
    const data = userData
    console.log(data);
    
    data.forEach(elem => {
      if(elem.firstName == assignto){
        elem.tasks.push(newTask)
        elem.taskCount.new+=1
        // console.log(elem);   
      }
    });
    localStorage.setItem('employees', JSON.stringify(data));
    setUserData(data)
    console.log(data);
    
  }
  //  setTaskTitle('')
  //   setTaskDesc('')
  //   setAssignto('')
  //   setCategory('')
  //   setDate('')

  return (
    <>
     <form onSubmit={(e)=>submitHandler(e)} className="w-full flex items-start justify-between gap-5 bg-[#1C1C1C] mt-9 p-6 ">
        <div className="space-y-5 w-[50%] ">
          <div className="flex flex-col text-start ">
            <h3 className=" text-gray-300 mb-[1px]">Task Title</h3>
            <input
            value={taskTitle}
            onChange={(e)=>{
              setTaskTitle(e.target.value)}}
             type="text" placeholder="enter your task here" className="w-4/5 bg-transparent border-gray-200 border-[1px] rounded-md py-1 px-2 placeholder:text-gray-300"/>
          </div>

          <div className="flex flex-col text-start ">
            <h3 className=" text-gray-300 mb-[1px]">Date</h3>
            <input
             value={taskDate}
             onChange={(e)=>{
               setTaskDate(e.target.value) }} 
               type="date" placeholder="enter your task here" className="w-4/5 bg-transparent border-gray-200 border-[1px] rounded-md py-1 px-2 placeholder:text-gray-300"/>
          </div>

          <div className="flex flex-col text-start ">
            <h3 className=" text-gray-300 mb-[1px]">Assign to</h3>
            <input
              value={assignto}
              onChange={(e)=>{
                setAssignto(e.target.value) }} 
              type="text"
              placeholder="employee name"
              className="w-4/5 bg-transparent border-gray-200 border-[1px] rounded-md py-1 px-2 placeholder:text-gray-300"
            />
          </div>
          <div className="flex flex-col text-start ">
            <h3 className=" text-gray-300 mb-[1px]">Category</h3>
            <input
            value={category}
            onChange={(e)=>{
              setCategory(e.target.value) }} 
            type="text" placeholder="enter the category of task here" className="w-4/5 bg-transparent border-gray-200 border-[1px] rounded-md py-1 px-2 placeholder:text-gray-300"/>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="flex w-[100%] flex-col  items-end justify-end  " >
            <div className="w-[80%] flex flex-col gap-2 ">
            <h3 className=" text-gray-300 mb-[1px] ">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value) }} 
              type="text"
              cols='30'
              rows='5'
              placeholder="enter the description here"
              className="w-[100%] bg-transparent border-gray-200 border-[1px] rounded-md py-1 px-2 placeholder:text-gray-300"
            />
            <button className="w-[100%] bg-black text-white rounded-md px-9  mt-3 py-3">
            Create Task
          </button>
            </div>
           
          </div>
         
        </div>
      </form>
    </>
  )
}

export default CreateTask
