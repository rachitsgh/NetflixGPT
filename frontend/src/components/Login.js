import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
    const [isSignInForm,setIsSignInForm]= useState(true);
    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
    }
    const [isLearnMore,setIsLearnMore]=useState(false);
    const toggleLearMore=()=>{
        setIsLearnMore(!isLearnMore);
    }
  return (
    <div>
        <Header/>
        <div className='absolute bg-gradient-to-t from-black '>
            <img className=" grayscale-50 " src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"alt='background'/>
        </div>
        <form className='text-white w-[28%] p-12 bg-black bg-opacity-80 absolute my-36 mx-auto right-0 left-0 flex-row justify-center items-cente'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type='text ' placeholder='Full Name' className=' bg-gray-800 p-2 my-2 w-full bg-opacity-90 rounded-md'/>}
            <input type='email' placeholder='Email' className=' bg-gray-800 bg-opacity-90 p-2 my-2 w-full rounded-md'/>
            
            <input type=' password ' placeholder='Password' className=' bg-gray-800 p-2 my-2 w-full bg-opacity-90 rounded-md'/>
            <button className='p-4 py-2 my-6 w-full bg-red-700 rounded-md '>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className=' text-gray-400 '>{isSignInForm?"New to Netflix? ":"Already an User? "} <span className='text-white cursor-pointer hover:underline 'onClick={toggleSignInForm}>{isSignInForm?"Sign Up Now":"Sign In Now"}</span>
            </p>
            <p className=' text-gray-400 text-xs my-3 '>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className=' text-blue-600 cursor-pointer hover:underline ' onClick={toggleLearMore} > {!isLearnMore&&"Learn more."}</span>
            </p>
            {isLearnMore && <p className=' text-gray-400 text-xs my-3' >
                The information collected by Google reCAPTCHA is subject to the Google <a href='https://policies.google.com/privacy' target='_blank'  rel="noopener noreferrer" className=' text-blue-600 cursor-pointer hover:underline '>Privacy Policy
                </a> and<a href='https://policies.google.com/terms' target='_blank' rel="noopener noreferrer" className=' text-blue-600 cursor-pointer hover:underline '>Terms of Service</a> 
                , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>}
        </form>
    </div>
  )
}

export default Login