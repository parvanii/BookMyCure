import express from 'express'
import { doctorList,loginDoctor ,changeAvailability,appointmentsDoctor ,appointmentComplete,appointmentCancel,doctorDashboard,doctorProfile,updateDoctorProfile} from '../controllers/doctor.controller.js'
import authDoctor from '../middlewares/auth.doctor.js'
const doctorRouter=express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.post('/change-availability', changeAvailability)
doctorRouter.get('/appointments', authDoctor,appointmentsDoctor)
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel)
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete)
doctorRouter.get("/dashboard", authDoctor, doctorDashboard)
doctorRouter.get("/profile", authDoctor, doctorProfile)
doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile)
export default  doctorRouter
