import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBell, FaCalendarAlt, FaHistory, FaChevronDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Cookie from "js-cookie";

export default function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false);
  const [showAppointmentDropdown, setShowAppointmentDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const jwt = Cookie.get("jwt");
  const user = Cookie.get("user");
  const unblockedRoutes = [];

  const isUnblockedRoute = unblockedRoutes.includes(location.pathname);
  if (isUnblockedRoute) return null;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.appointment-dropdown') && !event.target.closest('button[aria-label*="appointment"]')) {
        setShowAppointmentDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle appointment actions
  const handleAppointmentAction = (action) => {
    setShowHamburger(false);
    setShowAppointmentDropdown(false);
    if (action === "prev-apps") {
      navigate("/Appointment/prev-apps");
    } else if (action === "book-app") {
      navigate("/Appointment");
    }
  };

  const userHandler = () => {
    Cookie.remove("user");
    Cookie.remove("jwt");
    setShowHamburger(false);
    navigate("/Login");
  };

  const isActiveRoute = (path) => location.pathname === path;

  const closeHamburger = () => setShowHamburger(false);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-3"
              onClick={closeHamburger}
            >
              <img src="/logo.png" className="h-10 w-10 rounded-lg shadow-sm" alt="Logo" />
              <span className="self-center text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-300">
                DPHMC
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              onClick={closeHamburger}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${isActiveRoute("/")
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 shadow-sm"
                : "text-gray-800 hover:text-blue-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-300 dark:hover:bg-gray-800"
                }`}
            >
              Home
            </Link>

            {/* Appointment Dropdown */}
            <div className="relative appointment-dropdown">
              <button
                onClick={() => setShowAppointmentDropdown(!showAppointmentDropdown)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${showAppointmentDropdown || location.pathname.includes("Appointment")
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 shadow-sm"
                  : "text-gray-800 hover:text-blue-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-300 dark:hover:bg-gray-800"
                  }`}
                aria-label="Appointment options"
              >
                <FaCalendarAlt className="text-blue-600 dark:text-blue-400" />
                <span>Appointments</span>
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${showAppointmentDropdown ? "rotate-180" : ""
                    }`}
                />
              </button>

              {showAppointmentDropdown && (
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-300 dark:border-gray-600 z-50 animate-fadeIn">
                  <div className="p-2">
                    <button
                      onClick={() => handleAppointmentAction("book-app")}
                      className="flex items-center space-x-4 w-full px-4 py-3 text-left rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 group"
                    >
                      <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50">
                        <FaCalendarAlt className="text-blue-700 dark:text-blue-400 text-lg" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">
                          Book Appointment
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                          Schedule new consultation
                        </p>
                      </div>
                    </button>

                    <div className="border-t border-gray-200 dark:border-gray-700 my-2 mx-4" />

                    <button
                      onClick={() => handleAppointmentAction("prev-apps")}
                      className="flex items-center space-x-4 w-full px-4 py-3 text-left rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 group"
                    >
                      <div className="p-2.5 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800/50">
                        <FaHistory className="text-green-700 dark:text-green-400 text-lg" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">
                          Previous Appointments
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                          View past consultations
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            {["Videos", "Blog-List", "Medicines", "Gallary", "Reviews", "About"].map((path) => (
              <Link
                key={path}
                to={`/${path}`}
                onClick={closeHamburger}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${isActiveRoute(`/${path}`)
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 shadow-sm"
                  : "text-gray-800 hover:text-blue-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-300 dark:hover:bg-gray-800"
                  }`}
              >
                {path === "Blog-List" ? "Blogs" : path}
              </Link>
            ))}
          </div>

          {/* User Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-3 ml-4">
            <Link
              to="/Notifications"
              onClick={closeHamburger}
              className="p-2.5 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200 relative group"
            >
              <FaBell
                className={`text-xl ${location.pathname.includes("Notifications")
                  ? "text-blue-700 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  }`}
              />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse border border-white dark:border-gray-900"></span>
            </Link>

            <Link
              to="/profile"
              onClick={closeHamburger}
              className="p-2.5 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
            >
              <CgProfile
                className={`text-2xl ${location.pathname.includes("profile")
                  ? "text-blue-700 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  }`}
              />
            </Link>

            <button
              onClick={userHandler}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${user && jwt
                ? "bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30"
                : "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-sm"
                }`}
            >
              {user && jwt ? "Logout" : "Login"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <Link
              to="/Notifications"
              onClick={closeHamburger}
              className="p-2.5 relative"
            >
              <FaBell
                className={`text-xl ${location.pathname.includes("Notifications")
                  ? "text-blue-700 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-400"
                  }`}
              />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            </Link>

            <Link
              to="/profile"
              onClick={closeHamburger}
              className="p-2.5"
            >
              <CgProfile
                className={`text-2xl ${location.pathname.includes("profile")
                  ? "text-blue-700 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-400"
                  }`}
              />
            </Link>

            <button
              type="button"
              className="p-2.5 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setShowHamburger(!showHamburger)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {showHamburger ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden ${showHamburger ? "block animate-slideDown" : "hidden"
            } transition-all duration-300`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mt-2 p-4 space-y-2">
            <Link
              to="/"
              onClick={closeHamburger}
              className={`flex items-center px-4 py-3.5 rounded-lg text-sm font-semibold ${isActiveRoute("/")
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
                : "text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
            >
              Home
            </Link>

            {/* Mobile Appointment Options */}
            <div className="px-1 py-2">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
                Appointments
              </p>
              <button
                onClick={() => handleAppointmentAction("book-app")}
                className="flex items-center space-x-3 w-full px-4 py-3.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 mb-2"
              >
                <FaCalendarAlt className="text-blue-700 dark:text-blue-400 text-lg" />
                <span className="font-semibold text-gray-900 dark:text-gray-100">Book Appointment</span>
              </button>
              <button
                onClick={() => handleAppointmentAction("prev-apps")}
                className="flex items-center space-x-3 w-full px-4 py-3.5 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <FaHistory className="text-green-700 dark:text-green-400 text-lg" />
                <span className="font-semibold text-gray-900 dark:text-gray-100">Previous Appointments</span>
              </button>
            </div>

            {/* Other Mobile Links */}
            {["Videos", "Blog-List", "Medicines", "Gallary", "Reviews", "About"].map((path) => (
              <Link
                key={path}
                to={`/${path}`}
                onClick={closeHamburger}
                className={`flex items-center px-4 py-3.5 rounded-lg text-sm font-semibold ${isActiveRoute(`/${path}`)
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
                  : "text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
              >
                {path === "Blog-List" ? "Blogs" : path}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={userHandler}
                className={`w-full text-center px-4 py-3.5 rounded-lg text-sm font-semibold ${user && jwt
                  ? "bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30"
                  : "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  }`}
              >
                {user && jwt ? "Logout" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}