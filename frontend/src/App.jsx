import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/HomePage.jsx"
import Doctors from "./pages/Doctors.jsx"
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import MyProfile from './pages/MyProfile.jsx'
import MyAppointments from './pages/MyAppointments.jsx'
import Appointment from './pages/Appointment.jsx'
import NavBar from './components/NavBar.jsx'
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home />}/>  
      <Route path='/doctors' element={<Doctors />}/>
      <Route path='/doctors/:speciality' element={<Doctors/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/my-profile' element={<MyProfile/>}/>
      <Route path='/my-appointments' element={<MyAppointments/>}/>
      <Route path='/appointment/:id' element={<Appointment/>}/>
      </Routes>
      <Footer/>
      </div>
  )
}

export default App