import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constant';
import { sendEmailVerification } from 'firebase/auth';


const Login = () => {
    const [errorMessage,setErrorMessage]=useState(null);
    const [isSignInForm,setIsSignInForm]= useState(true);
    const [isPasswordWrong,setIsPasswordWrong]=useState(false);
    const [isEmailInValid,setIsEmailInValid]=useState(false);
    const [isShowPassword,setIsShowPassWord]=useState(false);
    const navigate=useNavigate();
    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
    }
    const [isLearnMore,setIsLearnMore]=useState(false);
    const toggleLearMore=()=>{
        setIsLearnMore(!isLearnMore);
    }
    const email = useRef(null);
    const password=useRef(null);
    const Fname=useRef(null);
    const dispatch=useDispatch();
    const handleButtonClick = ()=>{
        // console.log(email);
        // console.log(password);
        const msg = checkValidateData(email.current.value,password.current.value); 
        setErrorMessage(msg);

        if(msg) return;

        // Signin/Signup Logic
        if(!isSignInForm){
            //Sign up Logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                sendEmailVerification(auth.currentUser)
                .then(() => {
            // Email verification sent!
            // ...
            });
                updateProfile(auth.currentUser, {
                    displayName: Fname.current.value , photoURL: USER_AVATAR
                  }).then(() => {
                    // Profile updated!
                    const uid = user.uid;
                    const{email,displayname,photoURL}=auth.currentUser;
                    dispatch(addUser({
                        uid:uid,
                        email:email,
                    displayname:displayname,
                photoURL:photoURL}))
                    // navigate("/browse");
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                    setErrorMessage(error.message);
                  });
                // updateProfile
                // ...
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "-" +errorMessage);
                // ..
            });
        }else{
            //Sign in Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
                // ...
                // navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "-" +errorMessage);
                setIsPasswordWrong(true)
            });
        }
    }
  return (
    <div>
        <Header/>
        <div className='absolute bg-gradient-to-t from-black '>
            <img className=" grayscale-50 " src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"alt='background'/>
        </div>
        <form onSubmit={(e)=>{e.preventDefault()}} className='text-white w-[28%] p-12 bg-black bg-opacity-80 absolute my-36 mx-auto right-0 left-0 flex-row justify-center items-cente'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {((isEmailInValid)&&(isSignInForm))&&
            <p className=' bg-yellow-600 p-4  my-4 text-black rounded-md '>
            Sorry, we can't find an account with this email address. Please try again or <span className=' underline underline-offset-1 cursor-pointer ' onClick={toggleSignInForm}>create a new account.</span></p>}
            {((isPasswordWrong)&&(isSignInForm)&&(!isEmailInValid))&&
            <p className=' bg-yellow-600 p-4  my-4 text-black rounded-md '>
           <span className='font-bold'>Incorrect password.</span> Please try again or you can<span className=' underline underline-offset-1 cursor-pointer ' onClick={toggleSignInForm}> reset your password.</span></p>}
            {!isSignInForm && <input type='text' ref={Fname} placeholder='Full Name' className=' bg-gray-900 p-2 my-2 w-full bg-opacity-70 rounded-md'/>}
            <input ref={email} type='email' placeholder='Email'  className='bg-gray-900 bg-opacity-70 p-2 my-2 w-full rounded-md'/>
            {errorMessage==="Email ID is not valid" && <p className='text-red-700 text-xs px-3 flex gap-1'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="e1vkmu651 default-ltr-cache-2zeu8w e1svuwfo1" data-name="CircleX" aria-labelledby=":r8:" role="img" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg> 
                <p>Please enter a valid email address.</p></p>

            }
            <div>
            <input ref={password} type='password' placeholder='Password' className=' bg-gray-900 p-2 my-2 w-full bg-opacity-70 rounded-md'/>
            <button ></button>
            </div>
            {errorMessage==="Password is not valid" && <p className='text-red-700 text-xs px-3'>Please enter a valid Password.</p>}
            {/* {console.log(errorMessage)} */}
            {(errorMessage==="Password is not valid" && errorMessage==="Email ID is not valid" && errorMessage!=null) && <p> errorMessage </p>}
            <button className='p-4 py-2 my-6 w-full bg-red-700 rounded-md ' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
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

export default Login;