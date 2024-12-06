import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AcceptTask({data,id, onCompleted, onFailed}) {

  const  [userData, setUserData]  =  useContext(AuthContext)
  // functionality for mark as completed button.
  const CompletedHandler = (empl_id)=>{
    userData.forEach(element => {
      if(element.id == empl_id){
        if(element.taskCount.active>=1){
          element.taskCount.completed+=1;
          element.taskCount.active-=1;
        }
      }
    });
    onCompleted(data.taskId)
  }
  // functionality for mark as failed button.
  const FailedHandler = (empl_id)=>{
      userData.forEach(element => {
        if(element.id == empl_id){
          if(element.taskCount.active>=1){
            element.taskCount.active-=1;
            element.taskCount.failed+=1;
          }
        }
      });
      onFailed(data.taskId)
  }
  return (
    <div className="w-[280px] h-full bg-[#F6CF5F]  px-6 py-6 gap-2  text-start rounded-lg flex-shrink-0">
      <div className="flex justify-between items-center ">
        <button className="bg-[#f7cb49] opacity-80 py-2 px-3 rounded-sm shadow-md hover:opacity-100">
         {data.category}
        </button>
        <span className="text-sm ">{data.taskDate}</span>
      </div>
      <h3 className="text-xl font-semibold mt-9">{data.taskTitle}</h3>
      <p className="mt-2">
        {data.taskDescription}
      </p>
      <div className="flex justify-between items-center gap-4 mt-6 ">
        <button onClick={()=>CompletedHandler(id)} className="bg-[#b7d766] opacity-80 p-1 rounded-md shadow-md hover:opacity-100">Mark as Completed</button>
        <button onClick={()=>FailedHandler(id)} className="bg-[#cb693c] opacity-80 p-1 rounded-md shadow-md hover:opacity-100">Mark as Failed</button>
      </div>
    </div>
  );
}

export default AcceptTask;
