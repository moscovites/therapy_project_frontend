import React from 'react'

const Hero = () => {
  return (
    <div class="hero grid grid-cols-2 gap-2 " style={{ paddingRight: '5rem', paddingLeft: '5rem' }}>
   <div class="pl-10 flex justify-center">

  <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class=" flex justify-center text-justify max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">We welcome you to projectname,  where your well-being is our priority.</h1>
            <p class="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl ">At projectname, we understand that everyone's path is unique. Whether you're seeking guidance, coping strategies, or simply a listening ear, our dedicated team is here for you. Your mental health matters, and we're committed to providing a compassionate and judgment-free environment.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
                Speak to Sales
            </a> 
        </div>

  </div>
 
  <div style={{ paddingRight: '2rem' }} className=''>
    

<div class="grid grid-cols-2 gap-3 ">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/handsome-bearded-man-has-thick-bristle-looks-joyfully-camera-hears-something-very-pleasant-while-talks-with-colleague_273609-39112.jpg?w=1380&t=st=1704551426~exp=1704552026~hmac=4add5530b19a38f9aef4fb821c6b0672611d85b1477869478e53163273be6792" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/check-it-out-friendly-positive-young-afro-american-woman-points-index-fingers-you-picks-person-invites-join-team-congratulates-praises-nice-job-isolated-green-wall_273609-38272.jpg?w=1380&t=st=1704551021~exp=1704551621~hmac=defc007f5d28a544c1f72f7417388a84bb197c1b6a7e5113f1c2c96170dbc102" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/young-stylish-dark-skinned-couple-sitting-sunny-city-use-phone_1157-14193.jpg?w=1380&t=st=1704551502~exp=1704552102~hmac=2ea48cf3b6b38691bd4a1c79bba7a69f2c41091a09110452f2606a59e563c16f" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8980.jpg?w=1380&t=st=1704551166~exp=1704551766~hmac=1f148240c98281f6d7111abf5021124e055e9f88acf3d8ca4b05b363805eb46c" alt=""/>
        </div>
    </div>

  </div>
</div>
  )
}

export default Hero