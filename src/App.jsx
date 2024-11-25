import React from "react";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import PrimaryLayout from "./layouts/PrimaryLayout";
import LoginForm from "./pages/Login";
import ProSignUp from "./pages/ProSignUp";
import StudentSignUp from "./pages/StudentSIgnUp";
import Home from "./pages/Home";
import DashboardLayout from "./layouts/DashboardLayout";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import PrivateRoute from "./components/PrivateRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "./store";
import BillingPage from "./pages/Billing";
import OverView from "./pages/inPathLms/OverView";
import Features from "./pages/inPathLms/Features";
import Pricing from "./pages/inPathLms/Pricing";
import AboutUs from "./pages/inPathLms/AboutUs";
import Careers from "./pages/inPathLms/Careers";
import Courses from "./pages/learn/Courses";
import Certifications from "./pages/learn/Certification";
import LearningPaths from "./pages/learn/LearningPaths";
import FAQs from "./pages/learn/FAQs";
import CorporateTraining from "./pages/forTeams/CorporateTraining";
import CustomSolutions from "./pages/forTeams/CustomSolutions";
import OnBoardingPrograms from "./pages/forTeams/OnBoardingPrograms";
import Blogs from "./pages/resources/Blogs";
import FreeResources from "./pages/resources/FreeResources";
import TermsOfService from "./pages/resources/TermsOfService";
import PrivacyPolicy from "./pages/resources/PrivacyPolicy";
import HelpCenter from "./pages/resources/HelpCenter";
import CaseStudiesPage from "./pages/inPathLms/CaseStudiesPage";
import Tools from "./pages/Tools";
import AddCourseForm from "./components/course/AddCourse";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
  
      <>    
        <Route path="/" element={<PrimaryLayout />}>
          <Route path="/billing" element={<BillingPage />} />
          <Route index element={<Home />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/teachersignup" element={<ProSignUp />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
          <Route path="/overView" element={<OverView />}></Route>
          <Route path="/features" element={<Features />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/caseStudies" element={<CaseStudiesPage/>}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/certifications" element={<Certifications />}></Route>
          <Route path="/learning-paths" element={<LearningPaths />}></Route>
          <Route path="/faq" element={<FAQs/>}></Route>
          <Route
            path="/corporate-training"
            element={<CorporateTraining />}
          ></Route>
          <Route path="/custom-solutions" element={<CustomSolutions />}></Route>
          <Route path="/onboarding" element={<OnBoardingPrograms />}></Route>
          <Route path="tools" element={<Tools/>}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
          <Route path="/help-center" element={<HelpCenter />}></Route>
          <Route path="/free-resources" element={<FreeResources />}></Route>
          <Route path="/terms" element={<TermsOfService />}></Route>
          <Route path="/privacy" element={<PrivacyPolicy />}></Route>
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route element={<PrivateRoute allowedRoles={["student"]} />}>
            <Route
              path="/dashboard/studentdashboard"
              element={<StudentDashboard />}
            />
          </Route>

          <Route element={<PrivateRoute allowedRoles={["instructor"]} />}>
            <Route
              path="/dashboard/teacherdashboard"
              element={<TeacherDashboard />}
            />
            <Route
              path="/dashboard/teacherdashboard/addCourse"
              element={<AddCourseForm />}
            />
            
          </Route>

          {/* <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
         </Route> */}
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
  );
}

export default App;
