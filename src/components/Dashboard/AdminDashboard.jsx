import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

function AdminDashboard(props) {
  return (
    <div className="w-full bg-black p-5 h-auto text-white">
      <h1>Admin Dashboard</h1>
      <Header changeUser={props.changeUser} data={props.data} />
     <CreateTask/>
     <AllTask/>
    </div>
  );
}

export default AdminDashboard;
