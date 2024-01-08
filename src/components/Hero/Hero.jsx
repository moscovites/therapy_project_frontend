import React from 'react'

const Hero = () => {
  return (
    <div class="mx-auto max-w-8xl">
    <div class="p-5">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="flex justify-center text-center mb-4 text-4xl text-green-500 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                We welcome you to projectname, where your well-being is our priority.
            </h1>
          
            <a href="#" class="hidden hover:bg-green-800 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="hidden inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                Speak to Sales
            </a>
        </div>
    </div>
</div>

  )
}

export default Hero