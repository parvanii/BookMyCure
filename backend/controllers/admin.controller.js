import validator from "validator"
import bcrypt from "bcrypt"
import appointmentModel from "../models/appointmentModel.js";
import {v2 as cloudinary} from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";






const addDoctor= async(req,res)=>{
    try {
        const{name,email,password,speciality,degree,experience,about,fees,address}=req.body
        const imageFile=req.file 
        
       
     if(!name||!email||!password||!speciality||!degree||!experience||!about||!fees||!address){
        return res.json({success:false,message:"Missing Details"})
     }
    
     //validate email

     if(!validator.isEmail(email)){
        return res.json({success:false,message:"please enter a valid email"})
     }
    
     if(password.length<8){
        return res.json({success:false,message:"please enter a strong password"})
     }

     const salt= await bcrypt.genSalt(10)
     const hashedPass= await bcrypt.hash(password,salt)

     const image_upload= await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
     const imageUrl=image_upload.secure_url

     const doctorData={
        name,
        email,
        image:imageUrl,
        password:hashedPass,
        speciality,
        degree,
        experience,
        about,
        fees,
        address:JSON.parse(address), //so can be stored as object in db
        date:Date.now()
     }

     const newDoctor= new doctorModel(doctorData)
     await newDoctor.save()

     res.json({success:true,message:"Doctor added"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//api for admin login  

const loginAdmin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign(email + password, process.env.JWT_SECRET);
        res.json({ success: true, token });
      } else {
        res.json({
          success: false,
          message: "Invalid credentials",
        });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  }

  // API to get all appointments list
const appointmentsAdmin = async (req, res) => {
  try {

      const appointments = await appointmentModel.find({})
      res.json({ success: true, appointments })

  } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
  }

}

// API for appointment cancellation
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointment = await appointmentModel.findById(appointmentId);
    if (!appointment) {
      return res.json({ success: false, message: 'Appointment not found' });
    }

    appointment.cancelled = true;   // Update the cancelled flag
    await appointment.save();       // Save changes

    res.json({ success: true, message: 'Appointment Cancelled' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}


  //api to get all doctors list
  const allDoctors= async(req,res)=>{
    try {
      const doctors= await doctorModel.find({}).select('-password')
      res.json({success:true,doctors})
    } catch (error) {
      res.json({success:false,message:error.message})
    }
  }

  // API to get dashboard data for admin panel
const adminDashboard = async (req, res) => {
  try {

      const doctors = await doctorModel.find({})
      const users = await userModel.find({})
      const appointments = await appointmentModel.find({})

      const dashData = {
          doctors: doctors.length,
          appointments: appointments.length,
          patients: users.length,
          latestAppointments: appointments.reverse()
      }

      res.json({ success: true, dashData })

  } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
  }
}

export {
  loginAdmin,
  appointmentsAdmin,
  appointmentCancel,
  addDoctor,
  allDoctors,
  adminDashboard
}