import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import OnBoarding from './OnBoarding/OnBoarding';
import Dashboard from './components/Dashboard/Dashboard';
import Chat from './components/Chat/Chat';
import TherapistDashboard from './Therapists/Dashboard/TherapistDashboard';
import Calendar from 'react-calendar';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import TherapistOnBoarding from './Therapists/OnBoarding/OnBoarding';
import TherapistProfile from './Therapists/Dashboard/TherapistProfile';
import Login from './components/Login/Login';


function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route exact path = "/"  element={ <Home/>}/>
      <Route exact path = "/dashboard/patient"  element={ <Dashboard/>}/>
      <Route exact path = "/dashboard/therapist"  element={ <TherapistDashboard/>}/>
      <Route exact path = "/dashboard/therapist/profile"  element={ <TherapistProfile/>}/>
      <Route exact path = "/dashboard/appointment"  element={ <AppointmentForm/>}/>
      <Route exact path = "/onboarding/patient"  element={ <OnBoarding/>}/>
      <Route exact path = "/onboarding/therapist"  element={ <TherapistOnBoarding/>}/>
      <Route exact path = "/users/login"  element={ <Login/>}/>
      <Route exact path = "/chat"  element={ <Chat/>}/>
      <Route exact path = "/calendar"  element={ <Calendar/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
