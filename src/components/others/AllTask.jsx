import React from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

function AllTask() {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(userData.employees);
  

  return (
    <div className="bg-[#1C1C1C] mt-3  flex flex-col gap-2 p-6">
       <div className="bg-emerald-500 flex justify-between items-center py-2 px-3 rounded-md">
            <h2 className="w-1/5">Name</h2>
            <h3 className="w-1/5 text-yellow-400">Active</h3>
            <h2 className="w-1/5 text-blue-700">Completed</h2>
            <h2 className="w-1/5 text-red-700">Failed</h2>
            <h2 className="w-1/5 text-pink-600">NewTasks</h2>
          </div>
        
          {userData.map((employee, index) => {
        return (
          <div key={index} className="border-emerald-500 border-2  flex justify-between items-center py-2 px-3 rounded-md ">
            <h2 className="w-1/5">{employee.firstName}</h2>
            <h3 className= "w-1/5 text-yellow-300">{employee.taskCount.active}</h3>
            <h2 className="w-1/5 text-blue-500">{employee.taskCount.completed}</h2>
            <h2 className="w-1/5 text-red-500">{employee.taskCount.failed}</h2>
            <h2 className="w-1/5 text-pink-500">{employee.taskCount.new}</h2>
          </div>
          
        );
      })}
        
    </div>
  );
}

export default AllTask;
