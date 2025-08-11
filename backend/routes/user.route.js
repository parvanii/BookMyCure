import express from 'express'
import { registerUser,loginUser,getProfile,updateProfile,bookAppointment ,listAppointment,cancelAppointment,paymentRazorpay,verifyRazorpay} from '../controllers/user.controller.js'

import upload from '../middlewares/multer.js'
import authUser from '../middlewares/auth.user.js'



const userRouter = express.Router()


  
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)


userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
userRouter.post('/book-appointment',authUser,bookAppointment)
userRouter.get('/appointments',authUser,listAppointment)
userRouter.post('/cancel-appointments',authUser,cancelAppointment )
userRouter.post('/payment-razorpay',authUser,paymentRazorpay)
userRouter.post("/verifyRazorpay", authUser, verifyRazorpay)
export default userRouter