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
import { onLog } from 'firebase/app';
import { LOGO_URL, USER_AVATAR } from '../utils/constant';
import { toggleGptSearch } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';
import lang from '../utils/languageConstants';


const Header = () => {
  const [isVerify,setIsVerify]=useState(false);
  const navigate = useNavigate( );
  const dispatch = useDispatch();
  const[isHover,setIsHover]=useState(false);
  // ConstantS
  const user = useSelector(store=>store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  const langKey=useSelector(store=>store.config.lang);
  

  useEffect(()=>{
    
    const unsubscribe=  onAuthStateChanged(auth, (user) => {
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
            
          navigate("/browse")
          // ...
        } else {
          navigate("/");
          // User is signed out
          // ...
          dispatch(removeUser());
          // navigate("/");
        }
      });
      //unsybscribe when component unmoubt
      return ()=>unsubscribe();
    },[])


  const HandleHover=()=>{
    setIsHover(!isHover);
  }

  const HandleGPTSearchClick=()=>{
    //Toggle GPT Search
    dispatch(toggleGptSearch());
  }
  const handleLanguageChange =(e)=>{
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
  }
  
  return (
    <div className='fixed w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      
       <img className="w-44" src={LOGO_URL} alt='logo' />
       {!user &&
        <select onChange={handleLanguageChange} className=' flex justify-between h-12 mt-3 text-white w-24 rounded-md bg-gray-600 bg-opacity-50'>
            {SUPPORTED_LANGUAGES.map(lang=>
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
              </option>)}
          </select>
        }
       
       {user && 
       <div className='flex p-2 gap-2 align-middle'>
           <select onChange={handleLanguageChange} className=' flex justify-between h-12 mt-3 text-white w-24 rounded-md bg-gray-600 bg-opacity-50'>
            {SUPPORTED_LANGUAGES.map(lang=>
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
              </option>)}
          </select>
          
          <button className= 'w-52 py-1 px-2 mx-4 my-2 w-full hover:bg-opacity-35 bg-gray-600 bg-opacity-50 text-white round-lg'
          onClick={HandleGPTSearchClick}
          >{showGptSearch?lang[langKey].explore+" <3":"GPT "+lang[langKey].search}</button>
          <div className='flex flex-shrink-0 '> 
            <div className='flex-row justify-start'onMouseLeave={HandleHover} onMouseEnter={HandleHover}  >
              <img className='w-12 my-2  h-12 mt-4' src={USER_AVATAR} alt='userIcon'/>
              {isHover&& <DropMenu/>}
            </div>
            {/* <button onClick={HandleSignout} className='p-4 py-2 my-6 w-full bg-red-700 rounded-md text-white '>Sign Out</button> */}
          </div>
        </div>
      }
    </div>
  )
}

export default Header