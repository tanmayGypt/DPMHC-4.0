import { Link } from "react-router-dom";
import { FaHome, FaEnvelope, FaArrowLeft } from "react-icons/fa";

function NotFoundPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 font-poppins">
            <div className="text-center p-6 md:p-10 bg-white shadow-lg rounded-lg">
                {/* 404 Heading */}
                <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    Page Not Found
                </h2>

                {/* Explanation */}
                <p className="text-gray-600 text-lg md:text-xl mb-8">
                    Oops! The page you're looking for doesn't exist. It might have been
                    moved, renamed, or deleted. Or maybe you just mistyped the URL.
                </p>


                {/* Suggestions */}
                <p className="text-gray-600 mb-8">
                    Here are some helpful links to get you back on track:
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link
                        to="/"
                        className="flex items-center justify-center px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        <FaHome className="mr-2" />
                        Back to Home
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center justify-center px-6 py-3 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                    >
                        <FaArrowLeft className="mr-2" />
                        Return to Previous Page
                    </Link>
                </div>

                {/* Optional Graphic or Illustration */}

            </div>
        </div>
    );
}

export default NotFoundPage;
