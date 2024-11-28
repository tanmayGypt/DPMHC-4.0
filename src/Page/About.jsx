import { useEffect } from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col items-center xl:h-screen font-poppins bg-gray-50 mt-20">
      <div className="max-w-6xl px-4 py-10 mx-auto lg:py-16 md:px-6">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">ABOUT US</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At DP Memorial Homoeopathy Clinic, we are dedicated to providing holistic healthcare through the science of homoeopathy. Our clinic is built on the principles of healing the body and mind naturally, without the use of harsh chemicals or side effects. We focus on treating the root cause of ailments rather than just the symptoms, helping our patients achieve long-term health and wellness.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
            <img
              src="./photo.jpeg"
              alt="Dr. Amit Gupta"
              className="object-cover w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Text and Social Media Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                About <span className="text-blue-500">Dr. Amit Gupta</span>
              </h2>
              <p className="text-base text-gray-600 leading-7 mb-6">
                Dr. Amit Gupta is a renowned homeopathic doctor with a passion for holistic
                healing. With years of experience and a commitment to patient care, he has helped
                countless individuals lead healthier lives. At our clinic, we strive to blend
                modern medical practices with the personalized touch of homeopathy.
              </p>

              {/* Address Section */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Clinic Address:</h3>
                <p className="text-gray-600">
                  F 22/102, Shop Number 5, 6, Rohini Sector 3, Delhi - 110085
                  <br />
                  (Beside State Bank Of, Near Gopal Jee Bhaturewale)
                </p>
              </div>

              {/* Working Hours Section */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Working Hours:</h3>
                <p className="text-gray-600">Mon-Sat: 12:00 pm - 3:00 pm || 6:00–9:00 pm</p>
              </div>

              {/* Phone Section */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Phone:</h3>
                <p className="text-gray-600">9716749169</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/dr__amit__gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/DPMHC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@DPMemorialHomoeopathyClinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/+919716749169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
