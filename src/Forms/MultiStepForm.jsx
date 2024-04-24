// MultiStepForm.js
import React, { useState } from 'react';
import { Progress, Typography } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';


const MultiStepForm = () => {
  const navigate = useNavigate();
  const [progressCount, setProgressCount] = useState(0)
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState()
  const [verificationCode, setVerificationCode] = useState()
  const [formData, setFormData] = useState({
   
    

    userID: userId,
    age: '',
    gender: '',
    relationshipStatus: '',
    religious: '',
    religiousDenomination: '',
    connectWithReligiousTherapist: '',
    beenInTherapyBefore: ''
  });

  const handleButtonSelection = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value
    }));
    console.log('Form submitted:', formData);
    if (step != 7) {
      nextStep()
    }
    
  };


  const [registerFormData, setRegisterFormData] = useState({
   
    userType: 'patient',
    email: '',
    password: ''
  });


  const formDataWithUserType = {
    ...registerFormData,
    userType: 'therapist'
  };


  let createUser = async () => {
    console.log(registerFormData)

    let response = await fetch("https://therapy-project-backend.onrender.com/waitlist/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataWithUserType)
    })

    let data = await response.json()
    setUserId(data['created user'].ID)
    console.log(data['created user'].ID)
    let payload = {
      "status": response.status,
      "id": data['created user'].ID
    }
    return payload
  }

  let onBoardUser = async () => {
    let response = await createUser()
    console.log("status here", response.status)
    console.log("user ID here", response.id)
    const userId = response.id
    if (response.status == 201) {
        await createPatientProfile(userId)
        nextStep()
    } else {
      alert("something went wrong")
    }
  }


  let createPatientProfile = async (id) => {
    let response = await fetch("https://therapy-project-backend.onrender.com/onboarding/patient", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          "userID": id,
          "age": formData.age,
          "gender": formData.gender,
          "relationshipStatus": formData.relationshipStatus,
          "religious": formData.religious,
          "religiousDenomination": formData.religiousDenomination,
          "connectWithReligiousTherapist": formData.connectWithReligiousTherapist,
          "beenInTherapyBefore": formData.beenInTherapyBefore
        }
      )
    })

    let data = await response.json()
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
      navigate('/users/login')
    } else {
      alert("something went wrong")
    }
  }

  


  const nextStep = () => {
    setStep(step + 1)
    setProgressCount(progressCount + 20)};
  const prevStep = () => {
    setStep(step - 1)
    setProgressCount(progressCount - 20)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleVerificationCode = (e) => {
    setVerificationCode(e.target.value)
  }

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  // const handleRegisterSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', registerFormData);
  // };

  return (
    <div>
      <div>
      <h6 className='flex justify-center m-2 text-3xl font-semiBold text-center'>Complete this questionaire so we match you to the right therapist.</h6>
      </div>

    <div className="mx-auto p-8 flex items-center justify-center ">

      <form className='' onSubmit={handleSubmit}>
      <div className="w-full mb-5">
        {
          step < 8? 
          <><div className="mb-2 flex items-center justify-between gap-4">

                  <><Typography color="blue-gray" variant="h6">
                    Completed
                  </Typography><Typography color="blue-gray" variant="h6">
                      {progressCount}%
                    </Typography></>
                </div><Progress value={progressCount} color="green" /></>
                  : null
        }
        

    </div>        {step === 1 && (
          <div>
            <p className='text-3xl mb-5 font-bold text-green-400'>What is your gender identity?</p>
            <button onClick={() => handleButtonSelection('gender', 'male')} type="button" class="h-10 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Male</button>
            <button onClick={() => handleButtonSelection('gender', 'Female')} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Female</button>
            <button onClick={() => handleButtonSelection('gender', 'Prefer not to say')} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Prefer not to say</button>
            
         
            
          </div>
        )}

        {step === 2 && (
          
          <div>
            <div>
            <p className='text-3xl mb-5 font-bold text-green-400'>How old are?</p>
            
            <div className='w-full flex'>
            <div class="mb-6">
            <input 
            className='w-full rounded-lg'
              type="number" 
              id="age" 
              name="age"
              value={formData.age}
              onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"/>
</div>
            </div>
            <div class="mb-6 flex justify-between">
  <button className='' type="button" onClick={prevStep}>
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaUlEQVR4nLWXz2sTQRTHF/SintT6H6h/g7dA32uoPy8aPNiLycy2xV+kItRDKxT/AAUPnovJzO5BW3uSatoaPAj1pJcm/gimidSgVqsgJGbkRbMkm91ut539woNldnY+zHtv3rw1jBC6aA8eSkk8wS1IcoGTLbMgSWNmJtZn6NTQ9MA+LvAal/icC2hwicrTBDSYgCUzC1fNx6f2bht4ayG2m1k4wiRUfWG+BhUmwKQ1QkFTdvwAk/A0PLDbyAMUni1BmYCjTOLbnUIduITCcAaPBO6UCyjqgnbE/71v8rViKjCnHeq4HecTdmJXD9gUOBoV1IFbyHuOzPayN3S8q8RywP/Pqefkm3NDqlh7o+6/mNIFv9KRyZj3mjQ+d0HVfn5SpFxhVlOsYfFfbDOxPq+K1AnVCeYCGq0Mb9XeAKhWsETFs3jGYKI/5Y7pl19ryq0fv9dV6WshtBVrr9WD5btud49RYk22B0bsQfV5o6p0q9lsqhuz5zsSDKcMU8BEe2DYiqvyt3fawfU/dZV+dLYb7Hb19ZmEqn4v9Xy8tlFRyx+XQtvL0jN1Lz/h5er+4+7gj82cU6vrHyJLrpQcOG1ceggHmcB6EFz7cSLRvek1qdPt+goI5oy2qF3xm0jwV+W8urM4rmnHeNkBp+1je7jEsrYC4WtQ6enHqEeKHGxB0vBpBOajgjIJTzwbAdJo5uR+6pEiAK/Q2sZmosZMM3wlZccPbwrt2rkGt5N7A3fqFsWDeiTKxNBAgatUin1jamxBlP7UrlDnEPQLwyUu0Dnd0S+Ml6i80iXOs5BmEm6T0TPVXnoXZrG/Vk/zda2ZNgYAAAAASUVORK5CYII="/>  </button>
  <button className='mx-8' type="button" onClick={nextStep}>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACc0lEQVR4nLWXQWsTURDHF/SintT6DdTP4C3QmZZqtXjpQfRi8t5q1LbEg4hoKuKpR733IGTfy4o9VGiR1tZUDz0IgodKo5RSk6rFqK1i0UaezNqsm2R3001eBgaW2eX9ePOfN2/WMCLYebvnUELiCZ6FOBeYdjwLcYqZmViHodPOPejaxwUOcYlzXECZS1S+LqDMBORMCwbN8ZN7mwYOz8Z2syxeZBJWA2GBDkUmwKQ1IkETdvcBJmE6OrDaKQMkz46gTMBRJvFdq1AXLiF/IYNHGu6UC3irC+rRfymw+BxNBc5oh7ppx6l+u39XHdgUmGwX1IVnkdcdmeaqN7Leq8RywdvntOWF78/dVEulNyo9EQ+DD3gqGZ/rAE8uSEW2sflVDU+yAK3h2T9tM7GO0I7UBLgCv+0HF1B2KtzpvZo09IJD4Rb2GUx0JrzB0fkRlV97rZa/5CP7+mZJ1RrFajVnAq5SYaUrgaGx06r8Z0vptm8/S+rSw15PgeEdwxRwqxIYeNSnfpd/aQd/2iiopN1TDa5N9b3cDTW/PK1eruQi+4f1lTro2veiujZ+xi/Vncd1FdfEglUF/fzjo7r++GzddwnZdcq4PAYHmcAt3eAgKK8cp+2rMKcT7Jde7qYZZ/5fEBYM6gCPPE2pV4UXgVDu7BivuOCUfWwPl/hel9bBDsW6eYxmpLaDsxAPGgSm2gVlEp74DgJkyUzvfpqR2gBepLWNMKPBTDN8MWF3Hw6FVu1cQ9opvQ13WmukB81IVImRgQIL1IoDNTV2YFT+NK7Q5NDoF4ZLnKVz2tIvjJ9Re6VLnFuQYhLuktMz9V56F2Wxvwrr89RjByJjAAAAAElFTkSuQmCC"/>          
  </button>
</div>
            
          </div>

          </div>
        )}

        {step === 3 && (
          <div>
          <p className='text-3xl mb-5 font-bold text-green-400'>What is your relationship status?</p>
          <button onClick={() => handleButtonSelection('relationshipStatus', 'single')} type="button" class="h-10 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Single</button>
          <button onClick={() => handleButtonSelection('relationshipStatus', 'in a relationship')} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">In a relationship</button>
          <button onClick={() => handleButtonSelection('relationshipStatus', 'married')} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Married</button>
          <button onClick={() => handleButtonSelection('relationshipStatus', 'divorced')} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Divorced</button>
          <button onClick={() => handleButtonSelection('relationshipStatus', 'widowed')} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Widowed</button>
          <button onClick={() => handleButtonSelection('relationshipStatus', 'other')} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Other</button>

          <div className='flex mt-10'>
            <button className='' type="button" onClick={prevStep}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEuUlEQVR4nO1b3WscVRQfMMX6ZvVfsK3Qx7z4UVl379lQyEMbNYLSGtq9d8JaxIoPQSFsCPWhIAgllBahfXH33ExrAmkNiB+JFGu1JqZBsUlTk1Z80WY3DcUkNubKWbZ17WZ252v3zqT+4MAy3Jm9v9/cj3POPWMY/6O+ODjAHue5ZJtA1sMRkCOMCclucMnyAmGNrPibriGMUZti21yyje41oggz2/KkkOw9gewHLtnfQoLyYqV7x7lkhw9Y8e1GmGGeaN5k9rMOgfCtV8IOBLnIJXstMxJrMkJFHCHNJZutF/EKQ/aLkIlO7UJwTDzHESYbRrzSLpsW7Gw48bespx7hCMeLi5g+8qXRQIsoHOs4FdvcEPIHrPh2jmxCO/H71weEn3guvqOu5E0EJhAWdZO1FUGyW6ZMxOtDXib2CAlLuknWnhJshffDywGTT7YLZKvayTkXYVVI9mJA5BNxjmxZOykPIyGVSyT9e3QY3jlfyzjCQmcWtnoi33EqtplcWd0kAhBhkrZt1wJw2udDQCAYY32uyJsW7AyFkxOUFaPO+DOOyGdGYk1hdHSCmAoUt9R++whp3Z2tnwjMrE7+RPOmhkZ1jbdrVSNIk+J5H3/QNfSqOjPxofpgtEs3UXtD2GcrAEf4zuuDu4f3q1tL84qwptbU8a979ZNdxzjCBRvybFsQ5O/ii6kB7WTtbN30mqAcnhfyn+xXhT9v/od8UYDpQe1EbUeBhN71RsBEUOTDLwC7VJm6lu6yt9XIh10AihbT2dYt9wRIIbwQJPnQCyBBUX7DuDf/kfUEST4SAiDrLt/+MEjyURBAIHxULsCYl62uGhaXCmouP91wm/59Uo1eHVLvntvnfCEUEn4NknwYcHtlUXUNvWIvAML18hGwYNeQlIwa+bsYnTlbbQTkywW4Y9fw/LVhFVXcKMxUGwF3HAnw6c+Wiiqu/vGjYwEW7Bq++fEedT0/raKIwcmTzqaAqLEIHhpoi5wIc/NT6uDpVseL4FitbdCtCL8tzKqvZs413D6fGlAnLx5RaWuX822QO3SEaDrMzl/ZeI6QcOEKOxUhWq5wLtnm5mYnIoRdAI5s97/RoNXymNtwuJYIkQqHCV6OwaqJEGYBKPdp3A8u2WEvD7MTIcwC0JoXaFL00Dpb5GdXzoR4BLBtFQIQ/NT4kQgUjhL+Wl1W73/5drTS4gQqQvTz8NdPt6q+893qnbN7tRO1s1R/cq9R7WhMFIsQ9XdUy9EYgSowQ9DRupgpgRsP8vF4xmlpbUomn91IBRLk5JkWe9pwAy7hmO6OB2YIRw1PRVISxrV33r9d9lQkRSCHgcpPI/zmCymr5QnDD1LIno9EiWwFebYiJAMjCPBc4qWolcrSeafxIBZLc2TLgRdLl0+Hahlk7YZQEBbEjHqiMwtbQ1pCO+57wXO3RbK+MDhLxUwWwtE3hnc9bDQa3Gpp9lNZ5ps8uexOS2DrhQzFDv0gKNJq3FuHGY6JVLvV/pARFmRGYk1UhCiQfVO/Nw4XKJ7X/r2gMw8Seun0xZf/gGy19Iwezx8+6EY627qFcvB0EMElZAWy74WEOTqcpAWsZPnStUvUptgW2e6OwdijuvtvbHT8A4TsxydrwkwCAAAAAElFTkSuQmCC"/>
            </button>
            
          </div>
          
        </div>
        )}

{step === 4 && (
          <div>
          <p className='text-center text-3xl mb-5 font-bold text-green-400'>Do you consider yourself to be religious?</p>
          <button onClick={() => handleButtonSelection('religious', true)} type="button" class="h-10 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Yes</button>
          <button onClick={() => handleButtonSelection('religious', false)} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">No</button>
          <button onClick={() => handleButtonSelection('religious', null)} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Prefer not to say</button>
          

          <div className='flex mt-10'>
            <button className='' type="button" onClick={prevStep}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEuUlEQVR4nO1b3WscVRQfMMX6ZvVfsK3Qx7z4UVl379lQyEMbNYLSGtq9d8JaxIoPQSFsCPWhIAgllBahfXH33ExrAmkNiB+JFGu1JqZBsUlTk1Z80WY3DcUkNubKWbZ17WZ252v3zqT+4MAy3Jm9v9/cj3POPWMY/6O+ODjAHue5ZJtA1sMRkCOMCclucMnyAmGNrPibriGMUZti21yyje41oggz2/KkkOw9gewHLtnfQoLyYqV7x7lkhw9Y8e1GmGGeaN5k9rMOgfCtV8IOBLnIJXstMxJrMkJFHCHNJZutF/EKQ/aLkIlO7UJwTDzHESYbRrzSLpsW7Gw48bespx7hCMeLi5g+8qXRQIsoHOs4FdvcEPIHrPh2jmxCO/H71weEn3guvqOu5E0EJhAWdZO1FUGyW6ZMxOtDXib2CAlLuknWnhJshffDywGTT7YLZKvayTkXYVVI9mJA5BNxjmxZOykPIyGVSyT9e3QY3jlfyzjCQmcWtnoi33EqtplcWd0kAhBhkrZt1wJw2udDQCAYY32uyJsW7AyFkxOUFaPO+DOOyGdGYk1hdHSCmAoUt9R++whp3Z2tnwjMrE7+RPOmhkZ1jbdrVSNIk+J5H3/QNfSqOjPxofpgtEs3UXtD2GcrAEf4zuuDu4f3q1tL84qwptbU8a979ZNdxzjCBRvybFsQ5O/ii6kB7WTtbN30mqAcnhfyn+xXhT9v/od8UYDpQe1EbUeBhN71RsBEUOTDLwC7VJm6lu6yt9XIh10AihbT2dYt9wRIIbwQJPnQCyBBUX7DuDf/kfUEST4SAiDrLt/+MEjyURBAIHxULsCYl62uGhaXCmouP91wm/59Uo1eHVLvntvnfCEUEn4NknwYcHtlUXUNvWIvAML18hGwYNeQlIwa+bsYnTlbbQTkywW4Y9fw/LVhFVXcKMxUGwF3HAnw6c+Wiiqu/vGjYwEW7Bq++fEedT0/raKIwcmTzqaAqLEIHhpoi5wIc/NT6uDpVseL4FitbdCtCL8tzKqvZs413D6fGlAnLx5RaWuX822QO3SEaDrMzl/ZeI6QcOEKOxUhWq5wLtnm5mYnIoRdAI5s97/RoNXymNtwuJYIkQqHCV6OwaqJEGYBKPdp3A8u2WEvD7MTIcwC0JoXaFL00Dpb5GdXzoR4BLBtFQIQ/NT4kQgUjhL+Wl1W73/5drTS4gQqQvTz8NdPt6q+893qnbN7tRO1s1R/cq9R7WhMFIsQ9XdUy9EYgSowQ9DRupgpgRsP8vF4xmlpbUomn91IBRLk5JkWe9pwAy7hmO6OB2YIRw1PRVISxrV33r9d9lQkRSCHgcpPI/zmCymr5QnDD1LIno9EiWwFebYiJAMjCPBc4qWolcrSeafxIBZLc2TLgRdLl0+Hahlk7YZQEBbEjHqiMwtbQ1pCO+57wXO3RbK+MDhLxUwWwtE3hnc9bDQa3Gpp9lNZ5ps8uexOS2DrhQzFDv0gKNJq3FuHGY6JVLvV/pARFmRGYk1UhCiQfVO/Nw4XKJ7X/r2gMw8Seun0xZf/gGy19Iwezx8+6EY627qFcvB0EMElZAWy74WEOTqcpAWsZPnStUvUptgW2e6OwdijuvtvbHT8A4TsxydrwkwCAAAAAElFTkSuQmCC"/>
            </button>
            
          </div>
          
        </div>
        )}

{step === 5 && (
          <div>
          <p className='text-center text-3xl mb-5 font-bold text-green-400'>Which religion do you identify with?</p>
          <button onClick={() => handleButtonSelection('religiousDenomination', 'christianity')} type="button" class="h-10 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Christianity</button>
          <button onClick={() => handleButtonSelection('religiousDenomination', 'islam')} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Islam</button>
          <button onClick={() => handleButtonSelection('religiousDenomination', 'other')} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Other</button>
          

          <div className='flex mt-10'>
            <button className='' type="button" onClick={prevStep}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEuUlEQVR4nO1b3WscVRQfMMX6ZvVfsK3Qx7z4UVl379lQyEMbNYLSGtq9d8JaxIoPQSFsCPWhIAgllBahfXH33ExrAmkNiB+JFGu1JqZBsUlTk1Z80WY3DcUkNubKWbZ17WZ252v3zqT+4MAy3Jm9v9/cj3POPWMY/6O+ODjAHue5ZJtA1sMRkCOMCclucMnyAmGNrPibriGMUZti21yyje41oggz2/KkkOw9gewHLtnfQoLyYqV7x7lkhw9Y8e1GmGGeaN5k9rMOgfCtV8IOBLnIJXstMxJrMkJFHCHNJZutF/EKQ/aLkIlO7UJwTDzHESYbRrzSLpsW7Gw48bespx7hCMeLi5g+8qXRQIsoHOs4FdvcEPIHrPh2jmxCO/H71weEn3guvqOu5E0EJhAWdZO1FUGyW6ZMxOtDXib2CAlLuknWnhJshffDywGTT7YLZKvayTkXYVVI9mJA5BNxjmxZOykPIyGVSyT9e3QY3jlfyzjCQmcWtnoi33EqtplcWd0kAhBhkrZt1wJw2udDQCAYY32uyJsW7AyFkxOUFaPO+DOOyGdGYk1hdHSCmAoUt9R++whp3Z2tnwjMrE7+RPOmhkZ1jbdrVSNIk+J5H3/QNfSqOjPxofpgtEs3UXtD2GcrAEf4zuuDu4f3q1tL84qwptbU8a979ZNdxzjCBRvybFsQ5O/ii6kB7WTtbN30mqAcnhfyn+xXhT9v/od8UYDpQe1EbUeBhN71RsBEUOTDLwC7VJm6lu6yt9XIh10AihbT2dYt9wRIIbwQJPnQCyBBUX7DuDf/kfUEST4SAiDrLt/+MEjyURBAIHxULsCYl62uGhaXCmouP91wm/59Uo1eHVLvntvnfCEUEn4NknwYcHtlUXUNvWIvAML18hGwYNeQlIwa+bsYnTlbbQTkywW4Y9fw/LVhFVXcKMxUGwF3HAnw6c+Wiiqu/vGjYwEW7Bq++fEedT0/raKIwcmTzqaAqLEIHhpoi5wIc/NT6uDpVseL4FitbdCtCL8tzKqvZs413D6fGlAnLx5RaWuX822QO3SEaDrMzl/ZeI6QcOEKOxUhWq5wLtnm5mYnIoRdAI5s97/RoNXymNtwuJYIkQqHCV6OwaqJEGYBKPdp3A8u2WEvD7MTIcwC0JoXaFL00Dpb5GdXzoR4BLBtFQIQ/NT4kQgUjhL+Wl1W73/5drTS4gQqQvTz8NdPt6q+893qnbN7tRO1s1R/cq9R7WhMFIsQ9XdUy9EYgSowQ9DRupgpgRsP8vF4xmlpbUomn91IBRLk5JkWe9pwAy7hmO6OB2YIRw1PRVISxrV33r9d9lQkRSCHgcpPI/zmCymr5QnDD1LIno9EiWwFebYiJAMjCPBc4qWolcrSeafxIBZLc2TLgRdLl0+Hahlk7YZQEBbEjHqiMwtbQ1pCO+57wXO3RbK+MDhLxUwWwtE3hnc9bDQa3Gpp9lNZ5ps8uexOS2DrhQzFDv0gKNJq3FuHGY6JVLvV/pARFmRGYk1UhCiQfVO/Nw4XKJ7X/r2gMw8Seun0xZf/gGy19Iwezx8+6EY627qFcvB0EMElZAWy74WEOTqcpAWsZPnStUvUptgW2e6OwdijuvtvbHT8A4TsxydrwkwCAAAAAElFTkSuQmCC"/>
            </button>
            
          </div>
          
        </div>
        )}

{step === 6 && (
          <div>
          <p className='text-center text-2xl mb-5 font-bold text-green-400'>Do you want a therapist that identifies with your religion?</p>
          <button onClick={() => handleButtonSelection('connectWithReligiousTherapist', true)} type="button" class="h-10 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Yes</button>
          <button onClick={() => handleButtonSelection('connectWithReligiousTherapist', false)} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">No</button>
          <button onClick={() => handleButtonSelection('connectWithReligiousTherapist', null)}type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Doesn't matter</button>
          

          <div className='flex mt-10'>
            <button className='' type="button" onClick={prevStep}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEuUlEQVR4nO1b3WscVRQfMMX6ZvVfsK3Qx7z4UVl379lQyEMbNYLSGtq9d8JaxIoPQSFsCPWhIAgllBahfXH33ExrAmkNiB+JFGu1JqZBsUlTk1Z80WY3DcUkNubKWbZ17WZ252v3zqT+4MAy3Jm9v9/cj3POPWMY/6O+ODjAHue5ZJtA1sMRkCOMCclucMnyAmGNrPibriGMUZti21yyje41oggz2/KkkOw9gewHLtnfQoLyYqV7x7lkhw9Y8e1GmGGeaN5k9rMOgfCtV8IOBLnIJXstMxJrMkJFHCHNJZutF/EKQ/aLkIlO7UJwTDzHESYbRrzSLpsW7Gw48bespx7hCMeLi5g+8qXRQIsoHOs4FdvcEPIHrPh2jmxCO/H71weEn3guvqOu5E0EJhAWdZO1FUGyW6ZMxOtDXib2CAlLuknWnhJshffDywGTT7YLZKvayTkXYVVI9mJA5BNxjmxZOykPIyGVSyT9e3QY3jlfyzjCQmcWtnoi33EqtplcWd0kAhBhkrZt1wJw2udDQCAYY32uyJsW7AyFkxOUFaPO+DOOyGdGYk1hdHSCmAoUt9R++whp3Z2tnwjMrE7+RPOmhkZ1jbdrVSNIk+J5H3/QNfSqOjPxofpgtEs3UXtD2GcrAEf4zuuDu4f3q1tL84qwptbU8a979ZNdxzjCBRvybFsQ5O/ii6kB7WTtbN30mqAcnhfyn+xXhT9v/od8UYDpQe1EbUeBhN71RsBEUOTDLwC7VJm6lu6yt9XIh10AihbT2dYt9wRIIbwQJPnQCyBBUX7DuDf/kfUEST4SAiDrLt/+MEjyURBAIHxULsCYl62uGhaXCmouP91wm/59Uo1eHVLvntvnfCEUEn4NknwYcHtlUXUNvWIvAML18hGwYNeQlIwa+bsYnTlbbQTkywW4Y9fw/LVhFVXcKMxUGwF3HAnw6c+Wiiqu/vGjYwEW7Bq++fEedT0/raKIwcmTzqaAqLEIHhpoi5wIc/NT6uDpVseL4FitbdCtCL8tzKqvZs413D6fGlAnLx5RaWuX822QO3SEaDrMzl/ZeI6QcOEKOxUhWq5wLtnm5mYnIoRdAI5s97/RoNXymNtwuJYIkQqHCV6OwaqJEGYBKPdp3A8u2WEvD7MTIcwC0JoXaFL00Dpb5GdXzoR4BLBtFQIQ/NT4kQgUjhL+Wl1W73/5drTS4gQqQvTz8NdPt6q+893qnbN7tRO1s1R/cq9R7WhMFIsQ9XdUy9EYgSowQ9DRupgpgRsP8vF4xmlpbUomn91IBRLk5JkWe9pwAy7hmO6OB2YIRw1PRVISxrV33r9d9lQkRSCHgcpPI/zmCymr5QnDD1LIno9EiWwFebYiJAMjCPBc4qWolcrSeafxIBZLc2TLgRdLl0+Hahlk7YZQEBbEjHqiMwtbQ1pCO+57wXO3RbK+MDhLxUwWwtE3hnc9bDQa3Gpp9lNZ5ps8uexOS2DrhQzFDv0gKNJq3FuHGY6JVLvV/pARFmRGYk1UhCiQfVO/Nw4XKJ7X/r2gMw8Seun0xZf/gGy19Iwezx8+6EY627qFcvB0EMElZAWy74WEOTqcpAWsZPnStUvUptgW2e6OwdijuvtvbHT8A4TsxydrwkwCAAAAAElFTkSuQmCC"/>
            </button>
            
          </div>
          
        </div>
        )}

{step === 7 && (
          <div>
          <p className='text-center text-3xl mb-5 font-bold text-green-400'>Have you ever been in therapy before?</p>
          <button onClick={() => handleButtonSelection('beenInTherapyBefore', true)} type="button" class="h-10 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">No</button>
          <button onClick={() => handleButtonSelection('beenInTherapyBefore', false)} type="button" class="h-10 mt-5 w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Yes</button>
          

          <div className='flex justify-between mt-10'>
            <button className='' type="button" onClick={prevStep}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEuUlEQVR4nO1b3WscVRQfMMX6ZvVfsK3Qx7z4UVl379lQyEMbNYLSGtq9d8JaxIoPQSFsCPWhIAgllBahfXH33ExrAmkNiB+JFGu1JqZBsUlTk1Z80WY3DcUkNubKWbZ17WZ252v3zqT+4MAy3Jm9v9/cj3POPWMY/6O+ODjAHue5ZJtA1sMRkCOMCclucMnyAmGNrPibriGMUZti21yyje41oggz2/KkkOw9gewHLtnfQoLyYqV7x7lkhw9Y8e1GmGGeaN5k9rMOgfCtV8IOBLnIJXstMxJrMkJFHCHNJZutF/EKQ/aLkIlO7UJwTDzHESYbRrzSLpsW7Gw48bespx7hCMeLi5g+8qXRQIsoHOs4FdvcEPIHrPh2jmxCO/H71weEn3guvqOu5E0EJhAWdZO1FUGyW6ZMxOtDXib2CAlLuknWnhJshffDywGTT7YLZKvayTkXYVVI9mJA5BNxjmxZOykPIyGVSyT9e3QY3jlfyzjCQmcWtnoi33EqtplcWd0kAhBhkrZt1wJw2udDQCAYY32uyJsW7AyFkxOUFaPO+DOOyGdGYk1hdHSCmAoUt9R++whp3Z2tnwjMrE7+RPOmhkZ1jbdrVSNIk+J5H3/QNfSqOjPxofpgtEs3UXtD2GcrAEf4zuuDu4f3q1tL84qwptbU8a979ZNdxzjCBRvybFsQ5O/ii6kB7WTtbN30mqAcnhfyn+xXhT9v/od8UYDpQe1EbUeBhN71RsBEUOTDLwC7VJm6lu6yt9XIh10AihbT2dYt9wRIIbwQJPnQCyBBUX7DuDf/kfUEST4SAiDrLt/+MEjyURBAIHxULsCYl62uGhaXCmouP91wm/59Uo1eHVLvntvnfCEUEn4NknwYcHtlUXUNvWIvAML18hGwYNeQlIwa+bsYnTlbbQTkywW4Y9fw/LVhFVXcKMxUGwF3HAnw6c+Wiiqu/vGjYwEW7Bq++fEedT0/raKIwcmTzqaAqLEIHhpoi5wIc/NT6uDpVseL4FitbdCtCL8tzKqvZs413D6fGlAnLx5RaWuX822QO3SEaDrMzl/ZeI6QcOEKOxUhWq5wLtnm5mYnIoRdAI5s97/RoNXymNtwuJYIkQqHCV6OwaqJEGYBKPdp3A8u2WEvD7MTIcwC0JoXaFL00Dpb5GdXzoR4BLBtFQIQ/NT4kQgUjhL+Wl1W73/5drTS4gQqQvTz8NdPt6q+893qnbN7tRO1s1R/cq9R7WhMFIsQ9XdUy9EYgSowQ9DRupgpgRsP8vF4xmlpbUomn91IBRLk5JkWe9pwAy7hmO6OB2YIRw1PRVISxrV33r9d9lQkRSCHgcpPI/zmCymr5QnDD1LIno9EiWwFebYiJAMjCPBc4qWolcrSeafxIBZLc2TLgRdLl0+Hahlk7YZQEBbEjHqiMwtbQ1pCO+57wXO3RbK+MDhLxUwWwtE3hnc9bDQa3Gpp9lNZ5ps8uexOS2DrhQzFDv0gKNJq3FuHGY6JVLvV/pARFmRGYk1UhCiQfVO/Nw4XKJ7X/r2gMw8Seun0xZf/gGy19Iwezx8+6EY627qFcvB0EMElZAWy74WEOTqcpAWsZPnStUvUptgW2e6OwdijuvtvbHT8A4TsxydrwkwCAAAAAElFTkSuQmCC"/>
            </button>
            
         
          {/* <button className='' type="button" onClick={createPatientProfile}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEuUlEQVR4nO1b3WscVRQfMMX6ZvVfsK3Qx7z4UVl379lQyEMbNYLSGtq9d8JaxIoPQSFsCPWhIAgllBahfXH33ExrAmkNiB+JFGu1JqZBsUlTk1Z80WY3DcUkNubKWbZ17WZ252v3zqT+4MAy3Jm9v9/cj3POPWMY/6O+ODjAHue5ZJtA1sMRkCOMCclucMnyAmGNrPibriGMUZti21yyje41oggz2/KkkOw9gewHLtnfQoLyYqV7x7lkhw9Y8e1GmGGeaN5k9rMOgfCtV8IOBLnIJXstMxJrMkJFHCHNJZutF/EKQ/aLkIlO7UJwTDzHESYbRrzSLpsW7Gw48bespx7hCMeLi5g+8qXRQIsoHOs4FdvcEPIHrPh2jmxCO/H71weEn3guvqOu5E0EJhAWdZO1FUGyW6ZMxOtDXib2CAlLuknWnhJshffDywGTT7YLZKvayTkXYVVI9mJA5BNxjmxZOykPIyGVSyT9e3QY3jlfyzjCQmcWtnoi33EqtplcWd0kAhBhkrZt1wJw2udDQCAYY32uyJsW7AyFkxOUFaPO+DOOyGdGYk1hdHSCmAoUt9R++whp3Z2tnwjMrE7+RPOmhkZ1jbdrVSNIk+J5H3/QNfSqOjPxofpgtEs3UXtD2GcrAEf4zuuDu4f3q1tL84qwptbU8a979ZNdxzjCBRvybFsQ5O/ii6kB7WTtbN30mqAcnhfyn+xXhT9v/od8UYDpQe1EbUeBhN71RsBEUOTDLwC7VJm6lu6yt9XIh10AihbT2dYt9wRIIbwQJPnQCyBBUX7DuDf/kfUEST4SAiDrLt/+MEjyURBAIHxULsCYl62uGhaXCmouP91wm/59Uo1eHVLvntvnfCEUEn4NknwYcHtlUXUNvWIvAML18hGwYNeQlIwa+bsYnTlbbQTkywW4Y9fw/LVhFVXcKMxUGwF3HAnw6c+Wiiqu/vGjYwEW7Bq++fEedT0/raKIwcmTzqaAqLEIHhpoi5wIc/NT6uDpVseL4FitbdCtCL8tzKqvZs413D6fGlAnLx5RaWuX822QO3SEaDrMzl/ZeI6QcOEKOxUhWq5wLtnm5mYnIoRdAI5s97/RoNXymNtwuJYIkQqHCV6OwaqJEGYBKPdp3A8u2WEvD7MTIcwC0JoXaFL00Dpb5GdXzoR4BLBtFQIQ/NT4kQgUjhL+Wl1W73/5drTS4gQqQvTz8NdPt6q+893qnbN7tRO1s1R/cq9R7WhMFIsQ9XdUy9EYgSowQ9DRupgpgRsP8vF4xmlpbUomn91IBRLk5JkWe9pwAy7hmO6OB2YIRw1PRVISxrV33r9d9lQkRSCHgcpPI/zmCymr5QnDD1LIno9EiWwFebYiJAMjCPBc4qWolcrSeafxIBZLc2TLgRdLl0+Hahlk7YZQEBbEjHqiMwtbQ1pCO+57wXO3RbK+MDhLxUwWwtE3hnc9bDQa3Gpp9lNZ5ps8uexOS2DrhQzFDv0gKNJq3FuHGY6JVLvV/pARFmRGYk1UhCiQfVO/Nw4XKJ7X/r2gMw8Seun0xZf/gGy19Iwezx8+6EY627qFcvB0EMElZAWy74WEOTqcpAWsZPnStUvUptgW2e6OwdijuvtvbHT8A4TsxydrwkwCAAAAAElFTkSuQmCC"/>
            </button> */}
            <button className='w-40 h-14 text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' type="button" onClick={nextStep}>
              Submit
            </button>
            </div>
        </div>
        )}
      </form>
      {step === 8 && (
        <div class="relative flex flex-col bg-transparent shadow-none rounded-xl bg-clip-border">
        <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-green-500">
          Sign Up
        </h4>


        <p class="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Nice to meet you! Enter your details to register.
        </p>
        <form class="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
          <div class="flex flex-col gap-6 mb-1">
            <h6
              class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-green-500">
              Your Email
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input 
              id="email" 
              name="email"
              value={registerFormData.email}
              onChange={handleRegisterChange}
              placeholder="name@mail.com"
                class="peer h-full w-full rounded-md border border-green-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:!border-t-green-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
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
                class="peer h-full w-full rounded-md border border-green-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:!border-t-green-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <h6
              class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-green-500">
              Retype password
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input type="password" placeholder="********"
                class="peer h-full w-full rounded-md border border-green-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:!border-t-green-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
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
                I agree the
                <a href="#" class="font-medium transition-colors hover:text-gray-900">
                  &nbsp;Terms and Conditions
                </a>
              </p>
            </label>
          </div>
          <button
          onClick={onBoardUser}
            class="mt-6 block w-full select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-1xl font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            sign up
          </button>
          
        </form>
      </div>  
      )}
      {step === 9 && (
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
      class="peer h-full w-full rounded-[7px]  bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700  transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
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
      )}
    </div>
   
    <div class="flex justify-center px-16">
  <div class="flex justify-center">
    <div class="p-8">
      <div class="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
        </svg>
      </div>
      <h2 class="uppercase mt-6 text-indigo-500 font-medium mb-3">WHy this questionaire</h2>
      <p class="font-light text-sm text-gray-500 mb-3">This questionaire will guide us to know more about you in order to match you with the best therapist for you.</p>
      <a class="text-indigo-500 flex items-center hover:text-indigo-600" href="/">Read more
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
        </svg>
      </a>
    </div>
  </div>
  <div class="flex justify-center">
    <div class="p-8">
      <div class="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
        </svg>
      </div>
      <h2 class="uppercase mt-6 text-green-500 font-medium mb-3">Privacy and anonimity</h2>
      <p class="font-light text-sm text-gray-500 mb-3">We only share details fom this questionaire with your therapist and nobody else. Your rpivacy is importnt to as.</p>
      <a class="text-green-500 flex items-center hover:text-green-600" href="/">More about us icon
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
        </svg>
      </a>
    </div>
  </div>
</div>

    </div>
  );
};

export default MultiStepForm;
