import React from 'react'
import Navbar from '../components/Navbar'
import MultiStepForm from '../Forms/MultiStepForm'

const OnBoarding = () => {
    return (
        <div>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <div className=''>
                <MultiStepForm/>
            </div>
            
        </div>
      )
}

export default OnBoarding