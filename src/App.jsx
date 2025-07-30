import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

import { AuthContext } from "./context/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () =>{

  const[user, setUser] = useState(null)
  const[loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)
  
  useEffect(()=>{
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }

  },[])
 

 const handleLogin = (email, password) => {
  if (email === 'admin@1.com' && password === '12345') {
    setUser('admin');
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    toast.success("Welcome Admin");
  } else if (userData) {
    const employee = userData.find((e) => email === e.email && password === e.password);
    if (employee) {
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      toast.success(`Welcome ${employee.name}`);
    } else {
      toast.error("Invalid Login Credentials");
    }
  } else {
    toast.error("Invalid Login Credentials");
  }
};



 

  return(
    <>
    
    {!user ? <Login handleLogin={handleLogin} /> :''} 
   
    {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} />:
      (user =='employee'?<EmployeeDashboard  changeUser={setUser} data={loggedInUserData}  /> : null)}  

      <ToastContainer position="top-right" autoClose={2000} />  

    </>
  )
}

export default App;