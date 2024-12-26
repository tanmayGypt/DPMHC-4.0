import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/remix"

import { Analytics } from "@vercel/analytics/react"
import Footer from "./Common_Components/Footer";
import Navbar from "./Common_Components/Navbar";
import Appointment from "./Page/Appointment";
import Home from "./Page/Home";
import { HashRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import Previous_Appointments from "./Page/Previous_Appointments";
import Medicines from "./Page/Medicines";
import { useEffect } from "react";
import About from "./Page/About";
import Review from "./Page/Review";
import Gallary from "./Page/Gallary";
// import Blog from "./Page_Components/Home/Blog";
import Blogs from "./Page/Blogs";
import MedicoBlogs from "./Page/MedicoBlogs";
import axios from "axios";
import SignupScreen from "./Page/SignUp";
import OTPVerificationScreen from "./Page/otp";
import LoginScreen from "./Page/Login";
import ForgotPasswordEmailScreen from "./Page/EnterEmail";
import ChangePassScreen from "./Page/ChangePass";
import ForgoPassOTP from "./Page/ForgotPassOTP";
import PrivateRoute from "./PrivateRoute";
import Notifications from "./Page/Notifications";
import FeedbackPage from "./Page/Feedback";
import NotFoundPage from "./Page/NotFound";
import ProfilePage from "./Page/Profile";
import { MyContextProvider } from "../Context";
function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    // Map route paths to page titles
    const titleMap = {
      "/": "Home - Welcome",
      "/Appointment": "Book an Appointment",
      "/Appointment/prev-apps": "Your Previous Appointments",
      "/feedback": "Give Your Feedback",
      "/Notifications": "Your Notifications",
      "/Medicines": "Medicines",
      "/Videos": "Videos",
      "/About": "About Us",
      "/Reviews": "Reviews",
      "/Gallary": "Gallery",
      "/Blog-List": "Blogs",
      "/signup": "Sign Up",
      "/Login": "Login",
      "/forgot-password": "Forgot Password",
      "/reset-password": "Reset Password",
      "*": "404 - Page Not Found",
    };

    // Set document title based on current path
    document.title = titleMap[location.pathname] || "Welcome";
  }, [location.pathname]);

  return null; // This component doesn't render anything
}
setInterval(() => {
  axios.get('https://api.dpmemorial.com') // Replace with your API URL
    .then(response => {
      console.log('Data received:', response.data);
    })
    .catch(error => {
      console.error('There was a problem with the request:', error);
    });
}, 10 * 60 * 1000);
function Videos() {

  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.setAttribute("data-use-service-core", true);

    document.body.appendChild(script);

    return () => {
      // Cleanup script tag if the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Render the Elfsight widget container */}
      <div
        className="elfsight-app-b0164021-a0cc-4db6-aa22-3997cf3a2614"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
function App() {

  return (
    <>
      <HashRouter>
        <MyContextProvider>

          <DynamicTitle />
          {<Navbar />}
          <SpeedInsights />
          <Analytics />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Appointment" element={<PrivateRoute><Appointment /></PrivateRoute>} />
            <Route
              path="/Appointment/prev-apps"
              element={<PrivateRoute><Previous_Appointments /></PrivateRoute>}

            />
            <Route
              path="/profile"
              element={<PrivateRoute><ProfilePage /></PrivateRoute>}

            />
            <Route path="/feedback" element={<PrivateRoute><FeedbackPage /></PrivateRoute>} />
            <Route path="/Notifications" element={<Notifications />} />

            <Route path="/Medicines" element={<Medicines />} />
            <Route path="/Videos" element={<Videos />} />
            <Route path="/About" element={<About />} />
            <Route path="/Reviews" element={<Review />} />
            <Route path="/Gallary" element={<Gallary />} />
            <Route path="/Blog-List" element={<Blogs />} />
            <Route path="/Content-Body/:id" element={<PrivateRoute><MedicoBlogs /></PrivateRoute>} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/otp/:email/:fullName" element={<OTPVerificationScreen />} />
            <Route path="/Login" element={<LoginScreen />} />
            <Route path="/forgot-password" element={<ForgotPasswordEmailScreen />} />
            <Route path="/forgot-password/Otp" element={<ForgoPassOTP />} />
            <Route path="/reset-password" element={<ChangePassScreen />} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
          {<Footer />}
          <Link
            to="/feedback"
            className="fixed bottom-10 right-10 bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 "
          >
            Feedback
          </Link>
        </MyContextProvider>
      </HashRouter>
    </>
  );
}

export default App;
