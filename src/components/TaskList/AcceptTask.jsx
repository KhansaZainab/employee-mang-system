import React from "react";

function AcceptTask({data}) {
  return (
    <div className="w-[280px] h-full bg-[#468AE5]  px-6 py-6 gap-2  text-start rounded-lg flex-shrink-0">
      <div className="flex justify-between items-center ">
        <button className="bg-[#408ef5] opacity-80 py-2 px-3 rounded-sm shadow-md hover:opacity-100">
         {data.category}
        </button>
        <span className="text-sm ">{data.taskDate}</span>
      </div>
      <h3 className="text-xl font-semibold mt-9">{data.taskTitle}</h3>
      <p className="mt-2">
        {data.taskDescription}
      </p>
      <div className="flex justify-between items-center gap-4 mt-3 ">
        <button className="bg-[#b7d766] opacity-80 p-1 rounded-md shadow-md hover:opacity-100">Mark as Completed</button>
        <button className="bg-[#cb693c] opacity-80 p-1 rounded-md shadow-md hover:opacity-100">Mark as Failed</button>
      </div>
    </div>
  );
}

export default AcceptTask;
