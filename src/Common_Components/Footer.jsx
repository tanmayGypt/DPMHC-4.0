import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCalendarCheck, FaBell, FaPills, FaVideo, FaInfoCircle, FaStar } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

const routes = [
  { path: "/", label: "Home", icon: <FaHome /> },
  { path: "/Appointment", label: "Appointment", icon: <FaCalendarCheck /> },
  { path: "/Notifications", label: "Notifications", icon: <FaBell /> },
  { path: "/Medicines", label: "Medicines", icon: <FaPills /> },
  { path: "/Videos", label: "Videos", icon: <FaVideo /> },
  { path: "/About", label: "About", icon: <FaInfoCircle /> },
  { path: "/Reviews", label: "Reviews", icon: <FaStar /> },
];

export default function Footer() {
  const location = useLocation(); // Get the current route
  const unblockedRoutes = [

  ];

  const isUnblockedRoute = unblockedRoutes.includes(location.pathname);

  if (isUnblockedRoute) return null; // Hide footer on unblocked routes

  return (
    <section className="bg-black opacity-90 text-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {routes.map((route) => (
            <div key={route.path} className="px-5 py-2 flex items-center space-x-2">
              <Link
                to={route.path}
                className="text-base leading-6 hover:text-indigo-400 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>{route.icon}</span>
                <span>{route.label}</span>
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex justify-center mt-8 space-x-6">
          {/* Social Media Icons */}
          <a href="https://www.instagram.com/dr__amit__gupta/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/DPMHC" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <span className="sr-only">Facebook</span>
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/@DPMemorialHomoeopathyClinic" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <span className="sr-only">YouTube</span>
            <FaYoutube className="w-6 h-6" />
          </a>
          <a href="https://wa.me/+919716749169" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <span className="sr-only">WhatsApp</span>
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>

        <p className="mt-8 text-base leading-6 text-center text-white">
          &copy; 2024 DP MEMORIAL HOMOEOPATHY CLINIC, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}
