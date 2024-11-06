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
import DashboardLayout from "./layouts/DashboardLayout";
import TeacherDashboard from './pages/TeacherDashboard'
import StudentDashboard from './pages/StudentDashboard'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Provider } from 'react-redux';
import { store } from './store';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PrimaryLayout />} >
        
          <Route index element={<Home />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/teachersignup" element={<ProSignUp />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
         
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />} >
          <Route path="/dashboard/teacherdashboard" element={<TeacherDashboard />} />
          <Route path="/dashboard/studentdashboard" element={<StudentDashboard />} />
         
        </Route>
        

      </>
    )
  );

  return (
    <Provider store={store}>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
    
  )
}

export default App
