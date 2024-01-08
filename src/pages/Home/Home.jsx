import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="">
        <Navbar/>
        <br/>
        <br/>
        <br/>
      
        <Hero/>
        <p className='text-center text-3xl md:pt-20 '>What mental health support do you need?</p>
        <div className='md:hidden grid justify-center mb-10 mt-10 '>

<div class="max-w-sm p-4 bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    
    <p href="#">
        <div className='flex'>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Individual</h5>
        <span className='ml-auto'><button data-modal-target="default-modal"  data-modal-toggle="default-modal" type="button" class="text-green-700 bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Get started</button>
</span>
        </div>
        
    </p>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Embark on a personal journey of self-discovery and well-being.</p>
    
</div>
<div class="mt-5 max-w-sm p-6 bg-red-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
<p href="#">
        <div className='flex'>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Couple</h5>
        <span className='ml-auto'><button data-modal-target="default-modal"  data-modal-toggle="default-modal" type="button" class="text-green-700 bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Get started</button>
</span>
        </div>
        
    </p>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Nurture your relationship with our specialized couples counseling.</p>
    
</div>
<div class="mt-5 max-w-sm p-6 bg-yellow-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
<p href="#">
        <div className='flex'>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Corporate</h5>
        <span className='ml-auto'><button data-modal-target="default-modal"  data-modal-toggle="default-modal" type="button" class="text-green-700 bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Get started</button>
</span>
        </div>
        
    </p>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Elevate your team's mental well-being with our corporate counseling services.</p>
    
</div>


        </div>

        <div className='hidden lg:block flex justify-center mb-10 mt-10 mx-auto max-w-12xl pl-10' style={{ paddingLeft: '80px' }}>
      <div className='md:grid md:grid md:grid-cols-3 md:gap-5'>
      <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 pl-10" >
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-people-with-dreadlocks-illustration_23-2149752847.jpg?w=826&t=st=1704543344~exp=1704543944~hmac=0c2d776009eef2a454ad05d70120e38803d35441d4a8fb3e7f1df0822cfc1ffd"
      alt="card-image" class="object-cover w-full h-full" />
  </div>
  <div class="p-6">
    <div class="flex items-center justify-center mb-2">
      <p class="font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       Individuals
      </p>
      
    </div>
    <p class="text-center font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
    Embark on a personal journey of self-discovery and well-being.
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class="align-middle select-none   font-bold text-center text-green-500 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      type="button">
    <a data-modal-target="default-modal"  data-modal-toggle="default-modal"  class="hover:bg-green-800 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
    </button>
  </div>
</div>

<div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 pl-10">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-asian-couple-illustration_23-2149981998.jpg?w=826&t=st=1704543117~exp=1704543717~hmac=b989f8785ba38f48c874e2f08fe55562ef54345c0711c3e3a8cca5047f9f5e36"
      alt="card-image" class="object-cover w-full h-full" />
  </div>
  <div class="p-6">
  <div class="flex items-center justify-center mb-2">
      <p class="font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       Couples
      </p>
      
    </div>
    <p class="text-center font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
    Nurture your relationship and build a stronger connection with our specialized couples counseling. 
    </p>
  </div>
  <div class="p-6 pt-0">
  <button
      class="align-middle select-none  font-bold text-center text-green-500 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      type="button">
    <a hdata-modal-target="default-modal"  data-modal-toggle="default-modal"  class="hover:bg-green-800 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
    </button>
  </div>
</div>

<div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 pl-10">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
    <img
      src="https://img.freepik.com/free-vector/business-people-teamwork_24877-63479.jpg?w=740&t=st=1704543225~exp=1704543825~hmac=cc8d8788f051ce6a23a1cd3c5b130ca4d422cd642211fe6e3994c4ca83debcb1"
      alt="card-image" class="object-cover w-full h-full" />
  </div>
  <div class="p-6">
  <div class="flex items-center justify-center mb-2">
      <p class="font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       Corporate
      </p>
      
    </div>
    <p class="text-center font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
    Elevate your team's mental well-being with our corporate counseling services.
    </p>
  </div>
  <div class="p-6 pt-0">
  <button
      class="align-middle select-none  font-bold text-center text-green-500 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      type="button">
    <a data-modal-target="default-modal"  data-modal-toggle="default-modal" class="hover:bg-green-800 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
    </button>
  </div>
</div>

      </div>
      </div>

<br/>
      <section class="items-center flex justify-center bg-stone-100 lg:h-screen font-poppins " >
        <div className='md:grid md:grid-cols-2 '>

        
        <div class="justify-center  flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div class="px-4 mb-10 md:text-center md:mb-20">
                
                <h2 class="text-center pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
                    Professional and trustworthy therapists
                </h2>
                <div class="flex justify-center w-62 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                    <div class="flex-1 h-2 bg-green-200">
                    </div>
                    <div class="flex-1 h-2 bg-green-400">
                    </div>
                    <div class="flex-1 h-2 bg-green-300">
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap items-center">
                <div class="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
                    <h2 class="text-center mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
                        Privacy and professionalism are our priority
                    </h2>
                    <p class="text-center mb-4 font-bold leading-7 ">
                        We ensure that our partner psychiatrists do not share your information with anyone else.
                        At projectname, you are always free to express how you feel.
                    </p>
                    <p className='text-center mb-4 font-bold leading-7  '>
                    Tap into the world's largest network of credentialled and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. With our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate when and how you want.
                    </p>
                    
    <a href="#" class="hover:bg-green-800 flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Learn more
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
  
                </div>
             
            </div>
            </div>
            <div className='hidden lg:block'>
            <div class="grid grid-cols-2 gap-3 ">
        <div>
            
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/doctor-with-gadget_1098-21572.jpg?w=1380&t=st=1704546659~exp=1704547259~hmac=91d62b9370daff6df00dde52658773ab067d1ac0c4f52f18f9666b84c70e1e85" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/male-psychotherapist-doing-psychoanalysis-consultation-with-couple-therapy-session-office-giving-relationship-advice-solve-conflict-angry-partners-counseling-support_482257-46677.jpg?w=1380&t=st=1704546769~exp=1704547369~hmac=8492cd2284b502a496fa37e015d5b47fd0e2b1544332839b6ddd31afabe16fc6" alt=""/>
        </div>
        <div>
            
        </div>
    </div>

  </div>
        </div>
        
    </section>
    <Footer/>
    <div id="default-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div className="relative p-4 w-full max-w-2xl max-h-full">
    {/* Modal content */}
    <div className="relative bg-gray-200 rounded-lg shadow dark:bg-gray-700">
      {/* Modal header */}
      <div className="flex items-center justify-center text-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      {/* Modal body */}
      <div className="p-4 md:p-5 space-y-4 flex items-center justify-center">
        <div className="relative flex flex-col text-green-700 bg-transparent shadow-none rounded-xl bg-clip-border">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Join the waitlist
          </h4>
          <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Be the first to know when we launch
          </p>
          <form class="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
    <div class="flex flex-col gap-6 mb-1">
      <h6
        class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
        Your Full Name
      </h6>
      <div class="relative h-11 w-full min-w-[200px]">
        <input placeholder="Jon Doe"
          class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
        <label
          class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
      </div>
      <h6
        class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
        Your Email
      </h6>
      <div class="relative h-11 w-full min-w-[200px]">
        <input placeholder="name@mail.com"
          class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
        <label
          class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
      </div>
      
      
    </div>
 
    <button
      class="mt-6 block w-full select-none rounded-lg bg-green-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      Join now
    </button>
    
  </form>
        </div>
      </div>
      {/* Modal footer */}
      <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
        {/* Your modal footer content goes here */}
        {/* ... */}
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
