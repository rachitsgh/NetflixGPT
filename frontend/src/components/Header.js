import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import DropMenu from './DropMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
// import { Dispatch } from '@reduxjs/toolkit';
import { UseDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';

const Header = () => {
  const [isHover,setIsHover]= useState(false);
  const navigate = useNavigate( );
  const dispatch = useDispatch();
  // ConstantS
  const user = useSelector(store=>store.user);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          const{email,displayname,photoURL}=user;
          dispatch(addUser({
            uid:uid,
            email:email,
            displayname:displayname,
            photoURL:photoURL}))
          navigate("/browse");
          // ...
        } else {
          navigate("/");
          // User is signed out
          // ...
          dispatch(removeUser());
          // navigate("/");
        }
      });
  },[])


  const HandleHover=()=>{

  }
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
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      
       <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo' />
       
       {user && <div className='flex p-2 gap-2'>
         <div className='flex-row justify-start '>
            <img className='w-20 h-12' src={user.photoURL} alt='userIcon'/>
            {/* <DropMenu/> */}
          </div>
          <button onClick={HandleSignout} className='p-4 py-2 my-6 w-full bg-red-700 rounded-md text-white '>Sign Out</button>
       </div>
      }
    </div>
  )
}

export default Header