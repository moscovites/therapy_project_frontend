import React, { useState } from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Login = () => {


    const [loginFormData, setloginFormData] = useState({
   
       
        email: '',
        password: ''
      });

      const [decodedToken, setDecodedToken] = useState(null);

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setloginFormData((prevData) => ({ ...prevData, [name]: value }));
      };


      let signinUser = async () => {
        console.log(loginFormData)
    
        let response = await fetch("https://therapy-project-backend.onrender.com/login", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginFormData)
        })
    
        let data = await response.json()
        if (response.status == 200) {
          alert("you are logged in!!!!")
        } else{
          alert("Something went wrong.")
        }
        
        console.log(jwtDecode(data.jwt))
        const decodedInfo = jwtDecode(data.jwt)
        localStorage.setItem("userId", decodedInfo.id)
        localStorage.setItem("userType", decodedInfo.userType)
        if (decodedInfo.userType == "therapist") {
            window.location.href = 'https://therapyproject.onrender.com/dashboard/therapist';
        } else if (decodedInfo.userType == "") {
            window.location.href = 'https://therapyproject.onrender.com/dashboard/patient';
        } else {
            alert("user type unknown")
        }
        
      }

  return (
    <div>
      <Navbar/>

      <div className='flex justify-center  pt-20 mb-10'>
      <form class="max-w-screen-lg mt-8  mb-2 w-80 sm:w-96">
            <div>
                <p className='font-bold text-2xl text-center text-green-400'>Sign in</p>
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
              value={loginFormData.email}
              onChange={handleLoginChange}
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
              value={loginFormData.password}
              onChange={handleLoginChange}

              type="password" placeholder="********"
                class="peer border  h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:!border-t-green-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            
           
          </div>
          <div class="inline-flex items-center">
           
          
            
          </div>
          <p>If you do not have an account, <Link className='text-blue-600 font-bold' to="/login">Sign up</Link></p>
          <button
          onClick={signinUser}
            class="mt-6 block w-full select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-1xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Sign in
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default Login
