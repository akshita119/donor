import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import DonorRegistrationForm from "./pages/DonorRegistrationForm.jsx";
import LoginDonor from "./pages/LoginDonor.jsx";
import RegisterHospital from "./pages/HospitalRegistrationForm.jsx";
import LoginHospital from "./pages/LoginHopital.jsx";
import HospitalDashboard from "./pages/HospitalDashboard.jsx";
import Home from "./pages/Home.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>} >
      <Route path='/home' element={<Home/>}/>
      <Route path='/register' element={<DonorRegistrationForm />} />
      <Route path='/login-donor' element={<LoginDonor />} /> 
      <Route path='/register-hospital' element={<RegisterHospital />} />
      <Route path='/login-hospital' element={<LoginHospital />} />
      <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
