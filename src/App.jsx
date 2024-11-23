import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { useEffect } from 'react'
// import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext);
  console.log(userData);

useEffect(()=>{
  const loggedInUser = localStorage.getItem("loggedInUser")
  if(loggedInUser){
    const useData = JSON.parse(loggedInUser)
    console.log(useData);
    
    setUser(useData.role)
    setLoggedInUserData(useData.data)
    
   
    // console.log(useData.role);
    // console.log(useData.data);
  }
},[])
 

  const HandleLogin = (email, password) => {
      if( 'admin1@example.com' == email && '123'== password){
        setUser("admin");
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "admin" }));
      }else if (userData) {
      const employee = userData.find((e) => e.email == email && e.password == password);
        if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        // console.log(employee);
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee", data : employee }));
        console.log(loggedInUserData);
      }
    } else {
      alert("Invalid Credentials")
    }
  };
  // HandleLogin('employee@me', '123');
  console.log(loggedInUserData);
  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser}/> : (user == 'employee'? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  );
}

export default App;
