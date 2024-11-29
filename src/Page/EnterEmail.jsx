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
        <div className="flex flex-col justify-center items-center px-4 py-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">Forgot Password</h1>
            <p className="text-gray-600 text-center mb-6 text-base md:text-lg">
                Enter your email address to receive the OTP.
            </p>
            <input
                type="email"
                className="w-full max-w-md h-12 border border-teal-500 rounded-lg px-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button
                className={`w-full max-w-md h-12 bg-teal-700 text-white font-semibold rounded-lg text-sm md:text-base hover:bg-teal-800 transition disabled:bg-gray-400 ${isLoading ? "cursor-wait" : "cursor-pointer"
                    }`}
                onClick={handleSendOtp}
                disabled={isLoading}
            >
                {isLoading ? "Sending OTP..." : "Send OTP"}
            </button>
        </div>
    );
};



export default ForgotPasswordEmailScreen;
