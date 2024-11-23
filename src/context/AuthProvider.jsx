import React, { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { useEffect, useState } from "react";
 
export   const AuthContext = createContext();
function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null)
   
 useEffect(()=>{
  // localStorage.clear()
  // setLocalStorage()
    const {employees} = getLocalStorage();
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

