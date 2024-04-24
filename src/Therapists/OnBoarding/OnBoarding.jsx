import React, { useState } from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const TherapistOnBoarding = () => {

  const [step, setStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState()
  const [registerFormData, setRegisterFormData] = useState({
   
    userType: 'therapist',
    email: '',
    password: ''
  });

 

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleVerificationCode = (e) => {
    setVerificationCode(e.target.value)
  }

  let createUser = async () => {
    console.log(registerFormData)

    let response = await fetch("https://therapy-project-backend.onrender.com/waitlist/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerFormData)
    })

    let data = await response.json()
    if (response.status == 201) {
      nextStep()
    } else{
      alert("Something went wrong.")
    }

    console.log(data)
    
  }


  let verifyEmail = async () => {
     
    const response = await fetch(`https://therapy-project-backend.onrender.com/waitlist/verify-email/${verificationCode}`,
    {
      method: 'GET',
      
      headers: {
        "Content-Type": "application/json"
      },
    }
    )
    
    if (response.status == 200) {
      alert("Your account has been successfully activated. You can now log in.")
      window.location.href = 'https://therapyproject.onrender.com/login';
    } else {
      alert("something went wrong")
    }
  }

  const nextStep = () => {
    setStep(step + 1)
  }
  const prevStep = () => {
    setStep(step - 1)
  };
  return (
    <div>
        <Navbar/>
            <br/>
            <br/>
            <br/>
            
<div className='flex justify-center  pt-20 mb-10'>
{step === 1 && (
        <form class="max-w-screen-lg mt-8  mb-2 w-80 sm:w-96">
            <div>
                <p className='font-bold text-2xl text-center text-green-400'>Create an account</p>
            </div>
          <div class="flex flex-col gap-3 mb-1">
            <h6
              class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-green-500">
              Email
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input 
              id="email" 
              name="email"
              value={registerFormData.email}
              onChange={handleRegisterChange}
              placeholder="name@mail.com"
                class="peer border  h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:!border-t-green-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <h6
              class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-green-500">
              Password
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input 
              id="password" 
              name="password"
              value={registerFormData.password}
              onChange={handleRegisterChange}

              type="password" placeholder="********"
                class="peer border  h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:!border-t-green-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <h6
              class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-green-500">
              Retype password
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input type="password" placeholder="********"
                class="peer border  h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:!border-t-green-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
          </div>
          <div class="inline-flex items-center">
            <label class="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3" htmlFor="remember">
              <input type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="remember" />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="remember">
              <p class="flex items-center font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                I agree to the
                <a href="#" class="font-medium transition-colors hover:text-gray-900">
                  &nbsp;Terms and Conditions
                </a>
              </p>
              
            </label>
            
          </div>
          <p>If you already have an account, <Link className='text-blue-600 font-bold' to="/login">Login</Link></p>
          <button
          onClick={createUser}
            class="mt-6 block w-full select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-1xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            sign up
          </button>
          
        </form>
)}
        </div> 
        {step === 2 && (
     <div class="flex justify-center items-center h-full">
     <div>
       <h4 class="mb-5 block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-green-500">
         Enter verification code.
       </h4>
       <div class="relative flex w-full max-w-[24rem]">
         <div class="relative h-10 w-full min-w-[200px]">
           <input 
             id="verificationCode" 
             name="verificationCode"
             value={verificationCode}
             onChange={handleVerificationCode}
             type="text"
             class="peer h-full w-full rounded-[7px] bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
           />
         </div>
         <button
           onClick={verifyEmail}
           class="!absolute right-1 top-1 select-none rounded bg-green-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
           type="button">
           Verify
         </button>
       </div>
     </div>
   </div>
   
      )}   

<div className='mt-10 pt-20'>

<Footer/>
</div>
        
          
    </div>
    
  )
}

export default TherapistOnBoarding