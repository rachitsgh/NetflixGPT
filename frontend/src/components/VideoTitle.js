import React, { useState } from 'react'
import Mute from './Mute';
import { UseSelector, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

function VideoTitle({title,overview}) {
  const [audioIcon,setAudioIcon]=useState(true)
  const langKey = useSelector(store=>store.config.lang);

  const handleAudioTrailer=()=>{
    setAudioIcon(!audioIcon);
  }
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 text-white absolute bg-gradient-to-r from-black '>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='p-6 text-lg w-2/4' >{overview}</p>
        <div className='flex'>
            <button className='bg-white text-black  p-[0.5rem] px-10 w-15 text-xl hover:bg-opacity-65 gap-2 rounded-md'> ▶ {lang[langKey].play}</button>
            <button className='flex justify-between p-[0.5rem] items-center hover:bg-opacity-35 bg-gray-600 bg-opacity-50 text-white p-4 px-10 w-15 rounded-md mx-2 text-xl '>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM25,11c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3zM21,21v2h1h1v13h-1h-1v2h1h1h4h1h1v-2h-1h-1v-15h-1h-4z">
                    </path></g></g>
                    </svg>
                </div>
                {lang[langKey].moreInfo}
            </button>
            <button><Mute/></button>
        </div>
    </div>
  )
}

export default VideoTitle