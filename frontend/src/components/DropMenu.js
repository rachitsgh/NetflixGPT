import React from 'react'

function DropMenu(){
  return (
    <div className='text-white w-[15%] p-12 bg-black bg-opacity-80 absolute my-36 mx-auto right-0 top-[1%] left-[71%] flex-row justify-center items-center'>
         <ul>
            <li>Children</li>
            <li>Manage Profile</li>
            <li>Transfer Profile</li>
            <li>Account</li>
            <li>Help center</li>
            <div className= 'bg-white'></div>
            <li>signOut of Netflix</li>
        </ul>
    </div>
  )
}

export default DropMenu