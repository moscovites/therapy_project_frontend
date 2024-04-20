import {React, useState, useRef, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import MultiStepForm from '../../Forms/MultiStepForm';

const Home = () => {



  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };


    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    carouselRef.current.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    carouselRef.current.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth",
    });
  };



  
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
        <span className='ml-auto'>
          <a >
        <button data-modal-target="default-modal"  data-modal-toggle="default-modal" type="button" class="text-green-700 bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Get started</button>
          </a>
</span>
        </div>
        
    </p>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Embark on a personal journey of self-discovery and well-being.</p>
    
</div>
<div class="mt-5 max-w-sm p-6 bg-red-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
<p href="#">
        <div className='flex'>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Couple</h5>
        <span className='ml-auto'>
        <a>
        <button data-modal-target="default-modal"  data-modal-toggle="default-modal" type="button" class="text-green-700 bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Get started</button>
          </a>
          </span>
        </div>
        
    </p>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Nurture your relationship with our specialized couples counseling.</p>
    
</div>
<div class="mt-5 max-w-sm p-6 bg-yellow-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
<p href="#">
        <div className='flex'>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Corporate</h5>
        <span className='ml-auto'>
        <a >
        <button data-modal-target="default-modal"  data-modal-toggle="default-modal" type="button" class="text-green-700 bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Get started</button>
          </a></span>
        </div>
        
    </p>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Elevate your team's mental well-being with our corporate counseling services.</p>
    
</div>


        </div>

        <div className='hidden lg:block flex justify-center mt-10 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
      <div className='md:grid md:grid md:grid-cols-3 md:gap-5'>
      <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96" >
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
    <button data-modal-target="default-modal"  data-modal-toggle="default-modal"
      class="align-middle select-none   font-bold text-center text-green-500 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      type="button">
    <a   class="hover:bg-green-800 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
    </button>
  </div>
</div>

<div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 ">
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
  <button data-modal-target="default-modal"  data-modal-toggle="default-modal"
      class="align-middle select-none   font-bold text-center text-green-500 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      type="button">
    <a class="hover:bg-green-800 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
    </button>
  </div>
</div>

<div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
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
  <button data-modal-target="default-modal"  data-modal-toggle="default-modal"
      class="align-middle select-none   font-bold text-center text-green-500 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      type="button">
    <a class="hover:bg-green-800 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
    </button>
  </div>
</div>

      </div>
      </div>

<br/>

{/* Container for demo purpose */}
<div className="container py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>
        <div
          ref={carouselRef}
          className={`flex ${
            isMobile ? "overflow-x-auto scrollbar-none" : "gap-x-6 md:grid-cols-3 xl:gap-x-12"
          }`}
          style={isMobile ? { scrollSnapType: "x mandatory" } : {}}
        >
          {/* Testimonial 1 */}
          <div
            className={`${
              isMobile ? "flex-none w-full" : "mb-6 lg:mb-0"
            } md:w-96 mr-4`}
          >
            <div className="rounded-lg bg-white shadow-md p-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                className="w-full rounded-t-lg mb-4"
                alt="Testimonial Avatar"
              />
              <h5 className="text-lg font-bold mb-2">Chloe Decker</h5>
              <p className="mb-4">
                
                Using the online therapy platform was a game-changer for me; I finally found the support I needed from the comfort of my home.
              </p>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div
            className={`${
              isMobile ? "flex-none w-full" : "mb-6 lg:mb-0"
            } md:w-96 mr-4`}
          >
            <div className="rounded-lg bg-white shadow-md p-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                className="w-full rounded-t-lg mb-4"
                alt="Testimonial Avatar"
              />
              <h5 className="text-lg font-bold mb-2">Halley Frank</h5>
              <p className="mb-4">
              Using the online therapy platform was a game-changer for me; I finally found the support I needed from the comfort of my home.

              </p>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div
            className={`${
              isMobile ? "flex-none w-full" : ""
            } md:w-96`}
          >
           <div className="rounded-lg bg-white shadow-md p-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/15.jpg"
                className="w-full rounded-t-lg mb-4"
                alt="Testimonial Avatar"
              />
              <h5 className="text-lg font-bold mb-2">Sarah Rhodes</h5>
              <p className="mb-4">
              Using the online therapy platform was a game-changer for me; I finally found the support I needed from the comfort of my home.

              </p>
            </div>
          </div>
          {/* Add more testimonials as needed */}
        </div>
        {/* {isMobile && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handlePrev}
              className="mr-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Next
            </button>
          </div>
        )} */}
      </section>
    </div>
{/* Container for demo purpose */}

                

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class=" mb-8 lg:mb-16 text-center">
          <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Built with you in mind</h2>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className='bg-green-100 p-3 rounded-lg'>
              <div class="bg-green-400 flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Therapist matching</h3>
              <p class="text-gray-500 dark:text-gray-400">We help match you with a therapist that suits your values. You can switch therapists at any time or request for a therapist with s spefic personality</p>
          </div>
          <div className='border border-green-300 p-3 rounded-lg'>
              <div class="bg-green-400 flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Therapy process</h3>
              <p class="text-gray-500 dark:text-gray-400">You can have your sessions in any means that best suits you. You can schedule a video call session, voice call session or an in-person session at any time.</p>
          </div>
          <div className='bg-green-100 p-3 rounded-lg'>
              <div class="bg-green-400 flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Privacy</h3>
              <p class="text-gray-500 dark:text-gray-400">Your therapy sessions are not recorded in any form to compromise your privacy. You can decide to keep your identity anonymous on the platform.</p>
          </div>
          <div className='border border-green-300 p-3 rounded-lg'>
              <div class="bg-green-400 flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Pricing</h3>
              <p class="text-gray-500 dark:text-gray-400">We have a flexible pricing strategy that works for everybody no matter your financial constraints. You could choose between a subscription service or a pay as you go service.</p>
          </div>
          <div className='bg-green-100 p-3 rounded-lg'>
              <div class="bg-green-400 flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Insurance</h3>
              <p class="text-gray-500 dark:text-gray-400">We have partnerships with several insuarance companies. You could check our listed insurance companies to know if you are eligible.</p>
          </div>
          <div className='border border-green-300 p-3 rounded-lg'>
              <div class="bg-green-400 flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Corporate</h3>
              <p class="text-gray-500 dark:text-gray-400">Improve the productivity of your employees and the general growth of your company by subscribing them to our service. We have a flexible plan for all compaies.</p>
          </div>
      </div>
  </div>
</section>


            


            <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 justify-center'>
            <div className='font-bold text-4xl text-center mb-10'>
              <p>Therapy project <span className='text-green-100'>vs</span> in-person</p>
            </div>
              <div className='flex  justify-center space-x-8'>
                
<div class="w-100 p-4 rounded-lg bg-green-100 shadow-lg rounded-2xl dark:bg-gray-800">
    <p class="mb-4 text-4xl font-bold text-black dark:text-gray-50">
        Therapy project
    </p>

    <p class="mt-4  text-gray-600 dark:text-gray-100">
        Online therapy gives you the best convenience
    </p>
    <ul class="w-full mt-6 mb-6 font-bold  dark:text-gray-100">
        <li class="mb-3 flex items-center ">
            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Licensed therapist
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Therapy anywhere
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Switch therapists
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Easy scheduling
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Message therapist
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Premium dashboard
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
           Real community
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            No travel costs
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Flexible payments
        </li>
        <li class="mb-3 flex items-center opacity-50">
        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Corporate services
        </li>
        <li class="mb-3 flex items-center opacity-50">
        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Recovery analysis
        </li>
    </ul>

</div>



<div class="w-100 border border-green-400 rounded-lg p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
    <p class="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-50">
        In-person
    </p>

    <p class="mt-4   dark:text-gray-100">
        In-person therapy does notsatisfy all your needs.
    </p>
    <ul class="w-full mt-6 mb-6 font-bold dark:text-gray-100">
        <li class="mb-3 flex items-center ">
            <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Licensed therapist
        </li>
        <li class="mb-3 flex items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Therapy anywhere
        </li>
        <li class="mb-3 flex items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Switch therapists
        </li>
        <li class="mb-3 flex items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Easy scheduling
        </li>
        <li class="mb-3 flex items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Message therapist
        </li>
        <li class="mb-3 flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Premium dashboard
        </li>
        <li class="mb-3 flex items-center opacity-50">

            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
           Real community
        </li>
        <li class="mb-3 flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            No travel cost
        </li>
        <li class="mb-3 flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Flexible payments
        </li>
        <li class="mb-3 flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Corporate services
        </li>
        <li class="mb-3 flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Recovery analysis
        </li>
    </ul>

</div>


              </div>
            </div>

              

      <section class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 items-center flex justify-center bg-stone-100 lg:h-screen font-poppins " >
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


    <div class="py-4 bg-white">
    <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

        <div class="text-center">
            <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
                F.A.Q
            </p>
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                Frequently Asked <span class="text-indigo-600">Questions</span>
            </h3>

        </div>

        <div class="mt-20">
            <ul class="">

                <li class="text-left mb-10">
                    <div class="flex flex-row items-start mb-5">
                        <div
                            class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-green-400 text-white border-4 border-white text-xl font-semibold">
                            <svg width="30px" fill="white" height="30px" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g data-name="Layer 2">
                                    <g data-name="menu-arrow">
                                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                        <path
                                            d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                        </path>
                                        <circle cx="12" cy="19" r="1"></circle>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="bg-gray-100 p-5 px-10 w-full flex items-center">
                            <h4 class="text-md leading-6 font-medium text-gray-900">What could possibly be your first
                                question?</h4>
                        </div>
                    </div>

                    <div class="flex flex-row items-start">
                        <div class="bg-indigo-100 p-5 px-10 w-full flex items-center">
                            <p class="text-gray-700 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div
                            class="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-green-400 text-white border-4 border-white text-xl font-semibold">
                            <svg height="25px" fill="white" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 295.238 295.238" 
                                xml:space="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
				V25.714z"></path>
                                            <path d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
				c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                </li>
                <li class="text-left mb-10">
                    <div class="flex flex-row items-start mb-5">
                        <div
                            class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-green-400 text-white border-4 border-white text-xl font-semibold">
                            <svg width="30px" fill="white" height="30px" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g data-name="Layer 2">
                                    <g data-name="menu-arrow">
                                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                        <path
                                            d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                        </path>
                                        <circle cx="12" cy="19" r="1"></circle>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="bg-gray-100 p-5 px-10 w-full flex items-center">
                            <h4 class="text-md leading-6 font-medium text-gray-900">What could possibly be your first
                                question?</h4>
                        </div>
                    </div>

                    <div class="flex flex-row items-start">
                        <div class="bg-indigo-100 p-5 px-10 w-full flex items-center">
                            <p class="text-gray-700 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div
                            class="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-green-400 text-white border-4 border-white text-xl font-semibold">
                            <svg height="25px" fill="white" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 295.238 295.238" 
                                xml:space="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
				V25.714z"></path>
                                            <path d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
				c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                </li>
                <li class="text-left mb-10">
                    <div class="flex flex-row items-start mb-5">
                        <div
                            class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-green-400 text-white border-4 border-white text-xl font-semibold">
                            <svg width="30px" fill="white" height="30px" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g data-name="Layer 2">
                                    <g data-name="menu-arrow">
                                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                        <path
                                            d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                        </path>
                                        <circle cx="12" cy="19" r="1"></circle>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="bg-gray-100 p-5 px-10 w-full flex items-center">
                            <h4 class="text-md leading-6 font-medium text-gray-900">What could possibly be your first
                                question?</h4>
                        </div>
                    </div>

                    <div class="flex flex-row items-start">
                        <div class="bg-indigo-100 p-5 px-10 w-full flex items-center">
                            <p class="text-gray-700 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div
                            class="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-green-400 text-white border-4 border-white text-xl font-semibold">
                            <svg height="25px" fill="white" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 295.238 295.238" 
                                xml:space="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
				V25.714z"></path>
                                            <path d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
				c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                </li>

            </ul>
        </div>

    </div>
</div>

    
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
