import React, { useState } from 'react'

function Login({HandleLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const submitHandle = (e)=>{
        e.preventDefault()
        HandleLogin(email, password);
        setEmail('');
        setPassword('')
    }
  return (
    <>
    <div className='h-screen w-screen bg-black text-white flex justify-center items-center'>
        <div className='border-red-500 border-2 p-8 rounded-md bg-[#1C1C1C]'>
        <h2 className='text-white mb-24 text-xl font-semibold '>Log in</h2>
            <form onSubmit={(e)=>{submitHandle(e)}}
             className='flex flex-col items-center justify-center gap-5'>
               
                <input 
                value={email}
                onChange={(e=>{
                    setEmail(e.target.value)
                })} required type='email' placeholder='Enter Your email' className='bg-transparent px-9 py-2 border-red-400 border-[1px] rounded-full outline-none  placeholder:text-gray-400' />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                 required type='password' placeholder='Enter Your Password' className='bg-transparent px-9 py-2 border-red-400 border-[1px] rounded-full outline-none  placeholder:text-gray-400'/>
                <button className='bg-[#824145] px-24 py-3 border-red-400 border-[1px] rounded-full outline-none  placeholder:text-gray-400'>Log in</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login
