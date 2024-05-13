import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import lang from "../utils/languageConstants"
import { useSelector } from 'react-redux';

function DropMenu(){
  const langKey = useSelector(store=>store.config.lang)
  const navigate=useNavigate();
  const HandleSignout=()=>{
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  } 
  return (
    <div className='text-white w-[20%] -mt-  p-12 bg-black bg-opacity-80 absolute mx-auto right-0  left-[75%] flex-row justify-center items-center'>
         <ul>
            <li><div className='bg-red w-full border-red-600 h-2'></div></li>
            <li>Children</li>
            <li>{lang[langKey].manageProfile}</li>
            <li>{lang[langKey].transferProfile}</li>
            <li>{lang[langKey].account}</li>
            <li>{lang[langKey].helpCenter}</li>
            <div className= 'bg-white'></div>
            <li onClick={HandleSignout}>{lang[langKey].signOutOfNetflix}</li>
        </ul>
    </div>
  )
}

export default DropMenu