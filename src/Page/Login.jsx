import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api";
import Cookies from "js-cookie";

const LoginScreen = () => {
    const navigate = useNavigate();
    const token = Cookies.get("jwt");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginMessage, setLoginMessage] = useState(""); // For displaying login status message

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            if (token) {
                navigate("/");
            }
        };
        checkUserLoggedIn();
    }, [token, navigate]);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please fill in both email and password.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        setLoginMessage("Logging in...");

        try {
            const loginData = { email, password };
            const response = await loginUser(loginData);

            if (response) {
                setLoginMessage("Login successful!");
                setTimeout(() => {
                    navigate("/");
                }, 1000); // Redirect after success
            }
        } catch (error) {
            setLoginMessage("Login Failed: Invalid email or password.");
            console.error("Login error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFf8LSomqEVkH7IcJqJ_MSi1ry-IbWBFugw&s" alt="Logo" className="w-24 h-24" />
                </div>
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Login
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-gray-700 block">Email Address</label>
                        <input
                            type="email"
                            className="p-3 bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="text-gray-700 block">Password</label>
                        <input
                            type="password"
                            className="p-3 bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={() => navigate("/forgot-password")}
                            className="text-sm text-gray-500 hover:underline"
                        >
                            Forgot Password?
                        </button>
                    </div>
                    <div>
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-current border-t-transparent rounded-full" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <span className="ml-4 text-gray-700">{loginMessage}</span>
                            </div>
                        ) : (
                            <button
                                onClick={handleLogin}
                                className="py-3 w-full bg-blue-400 rounded-lg text-gray-700 font-bold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
                <div className="text-center mt-6">
                    <span className="text-gray-500">Don't have an account? </span>
                    <button
                        onClick={() => navigate("/signup")}
                        className="text-yellow-500 font-bold hover:underline"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
