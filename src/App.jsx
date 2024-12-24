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
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
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
import Blogs from "./pages/resources/Blogs";
import FreeResources from "./pages/resources/FreeResources";
import TermsOfService from "./pages/resources/TermsOfService";
import PrivacyPolicy from "./pages/resources/PrivacyPolicy";
import HelpCenter from "./pages/resources/HelpCenter";
import CaseStudiesPage from "./pages/inPathLms/CaseStudiesPage";
import Tools from "./pages/Tools";
import AddCourseForm from "./components/course/AddCourse";
import ProfileHome from "./components/profiles/ProfileHome";
import ViewCourses from "./components/course/ViewCourses";
import EditCourse from "./components/course/EditCourse";
import ViewCourseSections from "./components/course/ViewCourseSections";
import ViewCourse from "./components/course/ViewCourse";
import ShoppingPage from "./pages/ShoppingPage";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import AdminDashboard from "./pages/AdminDashboard";
import ManageTeachers from "./pages/ManageTeachers";
import ManageStudents from "./pages/ManageStudents";
import Analytics from "./pages/Analytics";
import BlogDetail from "./pages/resources/BlogDetails";
import ForTeams from "./pages/ForTeams";
import EnrolledCourses from './components/EnrolledCourses'
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import ResetPassword from "./components/forgotPassword/ResetPassword";
import PageNotFound from "./pages/PageNotFound"
import ExploredCourses from "./components/explore/ExploredCourses";
import AdminApproval from "./pages/AdminApproval";
 
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PrimaryLayout />}>
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/shopping" element={<ShoppingPage />} />
          <Route index element={<Home />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/teachersignup" element={<ProSignUp />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
          <Route path="/overView" element={<OverView />}></Route>
          <Route path="/features" element={<Features />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/caseStudies" element={<CaseStudiesPage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/certifications" element={<Certifications />}></Route>
          <Route path="/learning-paths" element={<LearningPaths />}></Route>
          <Route path="/faq" element={<FAQs />}></Route>
          <Route path="/for-team" element={<ForTeams />}></Route>
          <Route path="tools" element={<Tools />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
          <Route path="/help-center" element={<HelpCenter />}></Route>
          <Route path="/free-resources" element={<FreeResources />}></Route>
          <Route path="/terms" element={<TermsOfService />}></Route>
          <Route path="/privacy" element={<PrivacyPolicy />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/resetpassword/:uid/:token" element={<ResetPassword />}></Route>
          <Route path="/page-not-found" element={<PageNotFound />}></Route>
          <Route path="/exploredcourses/:id" element={<ExploredCourses />}></Route>
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route element={<PrivateRoute allowedRoles={["student"]} />}>
            <Route
              path="/dashboard/studentdashboard"
              element={<StudentDashboard />}
            />
            <Route
              path="/dashboard/studentdashboard/mycourses/:user_id"
              element={<EnrolledCourses />}
            />
            <Route
              path="/dashboard/studentdashboard/mycourses/viewcourse/:course_id"
              element={<ViewCourse />}
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
            <Route
              path="/dashboard/teacherdashboard/viewCourse"
              element={<ViewCourses />}
            />
            <Route
              path="/dashboard/teacherdashboard/editcourse/:courseId"
              element={<EditCourse />}
            />
            <Route
              path="/dashboard/teacherdashboard/viewcourse/viecoursesections/:courseId"
              element={<ViewCourseSections />}
            />
            <Route
              path="/dashboard/teacherdashboard/viewcourse/:courseId"
              element={<ViewCourse />}
            />
          </Route>

          <Route element={<PrivateRoute allowedRoles={["instructor"]} />}>
            <Route path="/dashboard/teacherprofile" element={<ProfileHome />} />
          </Route>
        </Route>

        <Route path="/dashboard/admin" element={<AdminDashboardLayout />}>
                
          <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route index element={<AdminDashboard />} />
          <Route path='/dashboard/admin/manage-teachers' element={<ManageTeachers />} />
          <Route path="/dashboard/admin/manage-students" element={<ManageStudents />} />
          <Route path="/dashboard/admin/analytics" element={<Analytics />} />
          <Route path="/dashboard/admin/approval" element={<AdminApproval/>} />
         </Route>


        </Route>

        {/* Admin Routes */}
        {/* <Route path="/admin" element={<AdminDashboardLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
        </Route> */}

        {/* Blog Routes */}
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </>
    )
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  );
}

export default App;
