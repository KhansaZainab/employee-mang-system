import React, { createContext } from "react";
// import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { useEffect, useState } from "react";
import { employees } from "../utils/LocalStorage";
import { admins } from "../utils/LocalStorage";
export   const AuthContext = createContext();
function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null)
    // const data = {admins: admins, employees: employees}
 useEffect(()=>{
  // localStorage.clear()
  // setLocalStorage()
    // const {employees, admins} = getLocalStorage();
    setUserData(employees)
   
 },[] )

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}
export default AuthProvider;

