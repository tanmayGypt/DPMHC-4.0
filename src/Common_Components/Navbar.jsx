import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For animation
  const [showUser, setShowUser] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

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
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://dpmemorial.com/logo.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            DPHMC
          </span>
        </Link>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            onClick={() => setShowUser(!showUser)}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
          </button>

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
            onClick={() => setShowHamburger(!showHamburger)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            showHamburger ? "block" : "hidden"
          }`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActiveRoute("/")
                    ? "text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700"
                }`}
                aria-current={isActiveRoute("/") ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <div className="relative">
              <select
                name="appointment-options"
                id="appointment-options"
                className={`block py-2 px-3 text-center text-blue-500 rounded transition-all ease-in-out duration-300 
              ${
                isOpen ? "transform scale-105" : ""
              } md:bg-transparent text-white md:p-0 `}
                onChange={handleSelectChange}
                onFocus={() => setIsOpen(true)} // Start animation on focus
                onBlur={() => setIsOpen(false)} // End animation on blur
              >
                <option value="" disabled>
                  Appointments
                </option>
                <option
                  value="prev-apps"
                  className={`{isActiveRoute("/Appointment")}
                  ? "text-blue-500"
                  : "text-gray-900 hover:bg-gray-100 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700"`}
                >
                  Previous Appointments
                </option>
                <option value="book-app" className="text-black">
                  Book an Appointment
                </option>
              </select>
            </div>
            <li>
              <Link
                to="/Videos"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActiveRoute("/Videos")
                    ? "text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700"
                }`}
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                to="/Medicines"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActiveRoute("/Medicines")
                    ? "text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700"
                }`}
              >
                Medicines
              </Link>
            </li>
            <li>
              <Link
                to="/Gallary"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActiveRoute("/Gallary")
                    ? "text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700"
                }`}
              >
                Gallary
              </Link>
            </li>
            <li>
              <Link
                to="/Reviews"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActiveRoute("/Reviews")
                    ? "text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700"
                }`}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActiveRoute("/About")
                    ? "text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActiveRoute("/Login")
                    ? "text-blue-700"
                    : "text-gray-900 hover:bg-gray-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700"
                }`}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
