import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import Cookie from "js-cookie";
import { CgProfile } from "react-icons/cg";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For animation
  const [showUser, setShowUser] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const jwt = Cookie.get("jwt");
  const user = Cookie.get("user");
  const unblockedRoutes = [
    "/signup",
    "/Login",
    "/forgot-password",
    "/forgot-password/Otp",
    "/reset-password"
  ];
  function userHandler() {
    Cookie.remove("user");
    Cookie.remove("jwt");
  }
  const isUnblockedRoute = unblockedRoutes.includes(location.pathname);

  if (isUnblockedRoute) return null;

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === "prev-apps") {
      navigate("/Appointment/prev-apps");
    } else if (selectedValue === "book-app") {
      navigate("/Appointment");
    }
  };

  // Function to check if a path is the active route
  const isActiveRoute = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold dark:text-white">DPHMC</span>
        </Link>

        {/* User and Hamburger Menu */}
        <div className="flex items-center md:order-2 space-x-3">
          {/* Notification and Profile Icons */}
          <div className="flex gap-4">
            <Link to="/Notifications">
              <FaBell
                className={`text-xl ${location.pathname.includes("Notifications") ? "text-blue-500" : "text-gray-700 dark:text-white"
                  } hover:text-blue-400`}
              />
            </Link>
            <Link to="/profile">
              <CgProfile
                className={`text-xl ${location.pathname.includes("profile") ? "text-blue-500" : "text-gray-700 dark:text-white"
                  } hover:text-blue-400`}
              />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            onClick={() => setShowHamburger(!showHamburger)}
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`w-full md:flex md:w-auto md:order-1 ${showHamburger ? "block" : "hidden"
            } transition-all duration-300`}
        >
          <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:p-0 bg-gray-50 dark:bg-gray-800">
            <li>
              <Link
                to="/"
                className={`block py-2 px-4 rounded md:py-0 ${isActiveRoute("/") ? "text-blue-500" : "text-gray-700 hover:text-blue-500 dark:text-white"
                  }`}
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <select
                name="appointment-options"
                id="appointment-options"
                className="py-2 px-4 bg-transparent border-none text-gray-700 dark:text-white focus:ring-0 focus:outline-none"
                onChange={handleSelectChange}
              >
                <option value="" disabled className="text-gray-400">
                  Appointment Section
                </option>
                <option value="prev-apps" className="text-gray-700">
                  Previous Appointments
                </option>
                <option value="book-app" className="text-gray-700">
                  Book an Appointment
                </option>
              </select>
            </li>
            <li>
              <Link
                to="/Videos"
                className={`block py-2 px-4 rounded md:py-0 ${isActiveRoute("/Videos") ? "text-blue-500" : "text-gray-700 hover:text-blue-500 dark:text-white"
                  }`}
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                to="/Blog-List"
                className={`block py-2 px-4 rounded md:py-0 ${isActiveRoute("/Blog-List") ? "text-blue-500" : "text-gray-700 hover:text-blue-500 dark:text-white"
                  }`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/Medicines"
                className={`block py-2 px-4 rounded md:py-0 ${isActiveRoute("/Medicines") ? "text-blue-500" : "text-gray-700 hover:text-blue-500 dark:text-white"
                  }`}
              >
                Medicines
              </Link>
            </li>
            <li>
              <Link
                to="/Gallary"
                className={`block py-2 px-4 rounded md:py-0 ${isActiveRoute("/Gallary") ? "text-blue-500" : "text-gray-700 hover:text-blue-500 dark:text-white"
                  }`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/Reviews"
                className={`block py-2 px-4 rounded md:py-0 ${isActiveRoute("/Reviews") ? "text-blue-500" : "text-gray-700 hover:text-blue-500 dark:text-white"
                  }`}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={`block py-2 px-4 rounded md:py-0 ${isActiveRoute("/About") ? "text-blue-500" : "text-gray-700 hover:text-blue-500 dark:text-white"
                  }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className={`block py-2 px-4 rounded md:py-0 ${isActiveRoute("/Login") ? "text-blue-500" : "text-gray-700 hover:text-blue-500 dark:text-white"
                  }`}
                onClick={userHandler}
              >
                {user && jwt ? "Logout" : "Login"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
