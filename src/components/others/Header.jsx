import React from 'react'

function Header(props) {
  const LogOutUser = ()=>{
    localStorage.setItem("loggedInUser", '');
    // window.location.reload()
    props.changeUser('')
    
    
  }
  return (
    <div className='flex justify-between items-start text-white'>
        <h2 className='font-semibold text-lg'>Hi  <br/> <span>props.data.firstName👋 </span></h2>
        <button onClick={LogOutUser} className='bg-red-600 text-white rounded-md px-4 py-2'>Log out</button>
      
    </div>
  )
}

export default Header
