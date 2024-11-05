import React from "react"
import './index.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import PrimaryLayout from './layouts/PrimaryLayout';
import LoginForm from "./pages/Login";
import ProSignUp from "./pages/ProSignUp";
import StudentSignUp from "./pages/StudentSIgnUp";
import Home from "./pages/Home";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PrimaryLayout />} >
        
          <Route index element={<Home />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/teachersignup" element={<ProSignUp />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
          {/* <Route index element={<Home />} /> */}
        </Route>
        

      </>
    )
  );

  return (
    
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    
  )
}

export default App
