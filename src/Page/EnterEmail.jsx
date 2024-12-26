import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordEmailScreen = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSendOtp = () => {
        if (!email) {
            alert("Please enter your email.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        setIsLoading(true);
        // Here you will make the API call to send the OTP to the email.
        setTimeout(() => {
            setIsLoading(false);
            alert("An OTP has been sent to your email.");
            navigate("/forgot-password/Otp", { state: { email } });

        }, 1500);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
                    Forgot Password
                </h1>
                <p className="text-gray-600 text-center mb-6 text-base md:text-lg">
                    Enter your email address to receive the OTP.
                </p>
                <input
                    type="email"
                    className="w-full h-12 border border-gray-300 rounded-md px-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className={`w-full h-12 bg-blue-500 text-white font-semibold rounded-md text-sm md:text-base hover:bg-blue-600 transition disabled:bg-gray-300 ${isLoading ? "cursor-wait" : "cursor-pointer"
                        }`}
                    onClick={handleSendOtp}
                    disabled={isLoading}
                >
                    {isLoading ? "Sending OTP..." : "Send OTP"}
                </button>
            </div>
        </div>
    );
};



export default ForgotPasswordEmailScreen;
