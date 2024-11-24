import "./App.css";
import Footer from "./Common_Components/Footer";
import Navbar from "./Common_Components/Navbar";
import Appointment from "./Page/Appointment";
import Home from "./Page/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
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
// import Videos from "./Page/Videos";
// import YoutubeVideos from "./Page/YoutubeVideos";
// import YouTubePlayer from "./Page_Components/Videos/YouTubePlayer";



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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route
            path="/Appointment/prev-apps"
            element={<Previous_Appointments />}
          />
          <Route path="/Medicines" element={<Medicines />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/About" element={<About />} />
          <Route path="/Reviews" element={<Review />} />
          <Route path="/Gallary" element={<Gallary />} />
          <Route path="/Blog-List" element={<Blogs />} />
          <Route path="/Content-Body/:id" element={<MedicoBlogs />} />
          <Route path="/signup" element={<SignupScreen />} />

          <Route path="/otp/:email/:fullName" element={<OTPVerificationScreen />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/forgot-password" element={<ForgotPasswordEmailScreen />} />
          <Route path="/forgot-password/Otp" element={<ForgoPassOTP />} />
          <Route path="/reset-password" element={<ChangePassScreen />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
