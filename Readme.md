# BookMyCure - Healthcare Anytime, Anywhere

**BookMyCure** is a full-stack web application designed to simplify and enhance the **process of booking doctor appointments.** It aims to make healthcare more accessible and efficient by connecting patients with healthcare providers through a seamless digital platform.





Built with a focus on user experience, BookMyCure offers an intuitive UI that balances functionality with simplicity, ensuring that users can navigate effortlessly **whether they are patients, doctors, or administrators.**

---

## 🔑 User Roles & Authentication

- **Patient:**  
  - Register and securely log in to the platform.  
  - Browse doctors by specialty  and apply filters to refine choices.  
  - Book and cancel appointments with ease.  
  - Make payments securely using integrated Razorpay.  
  - Manage and update personal profile information.

- **Doctor:**  
  - Log in to access a personalized dashboard displaying total earnings, appointment counts, and patient statistics.  
  - View detailed appointment lists including patient names, ages, and payment methods.  
  - Update appointment statuses by marking them as *completed* or *cancelled*.  
  - Edit and manage personal profiles, including availability and professional details.

- **Admin:**  
  - Access a comprehensive dashboard with aggregated data on earnings, appointments, patients across all doctors, and recent bookings.  
  - Manage all appointments with the ability to cancel bookings when necessary.  
  - Add new doctors by submitting detailed profiles including uploading their pictures.  
  - View and manage the complete list of doctors, with controls to update their availability status either from the admin panel or reflecting changes made by the doctors themselves.

---

## 📁 Project Structure

```bash
bookmycure/
├── admin/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── adminServer.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── constants/
│   ├── assets/
│   └── main.jsx
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
```
---

## 🔧 Tech Stack

| Category        | Technologies Used       |
|-----------------|-------------------------|
| Frontend        | React.js                |
| Backend         | Node.js, Express.js     |
| Database        | MongoDB                 |
| Authentication  | JSON Web Token (JWT)    |
| Payment Gateway | Razorpay                |
| Notifications   | react-toastify          |
| Deployment      | Render                  |
| Testing         | Postman, Thunder Client |



---

## ⚙️ Environment Variables Setup

###  Frontend (`frontend/.env`)  🖥️

```env
VITE_BACKEND_URL=your_backend_api_url
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Backend (`backend/.env`) 🧑‍⚕️
```env

MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CURRENCY= INR
```


### Admin (`admin/.env`) 🛎️
```env

VITE_BACKEND_URL=your_backend_api_url
VITE_CURRENCY=₹
```

---

## 🚀 Getting Started

### Backend 🧑‍💻

```bash
cd backend
npm install
npm run dev
```

### Frontend 💻

```bash
cd frontend
npm install
npm run dev
```
### Admin 🖥️

```bash
cd admin
npm install
npm run dev
```
---
### 🌐 Live Demo

**Frontend:**
https://bookmycure-frontend.onrender.com/

**Admin Panel (Doctor Panel Included):**
https://bookmycure-admin.onrender.com/

---






