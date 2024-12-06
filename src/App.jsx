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
  const [loggedInAdminData, setLoggedInAdminData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState({})
  // console.log(userData);

useEffect(()=>{
  // const loggedInUser = localStorage.getItem("loggedInUser")
  // if(loggedInUser){
  //   const useData = JSON.parse(loggedInUser)
    // console.log(useData);
    if(loggedInUser){
      setUser(loggedInUser.role)
      setLoggedInUserData(loggedInUser.data)
    }
   
    // console.log(useData.role);
    // console.log(useData.data);
  // }
},[])
 

  const HandleLogin = (email, password) => {
      if( email == 'admin1@example.com' && password == '123'){
        setUser("admin");
        // setLoggedInAdminData(admin)
        // localStorage.setItem("loggedInUser",JSON.stringify({ role: "admin" }));
        setLoggedInUser({role: 'admin'})
        console.log(loggedInUser);
      }else if (userData) {
      const employee = userData.find((e) => e.email == email && e.password == password);
        if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        // console.log(employee);
        console.log(loggedInUser);
        
        setLoggedInUser({role:'employee', data: employee})
        // localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee", data : employee }));
        console.log(loggedInUser);
      }
    } else {
      alert("Invalid Credentials")
    }
  };
  // HandleLogin('employee@me', '123');
  // console.log(loggedInUserData);
  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser} data={loggedInAdminData}/> : (user == 'employee'? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  );
}

export default App;
