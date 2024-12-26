import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../api";

const ChangePassScreen = () => {
    const location = useLocation();
    const { enteredOtp, email } = location.state || {};
    const navigate = useNavigate();
    if (!enteredOtp && !email) navigate("/")
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSavePassword = async () => {
        if (!newPassword || !confirmPassword) {
            alert("Please fill in both fields.");
        } else if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            setIsLoading(true);
            try {
                const response = await resetPassword({
                    otp: enteredOtp,
                    email: email,
                    password: newPassword,
                });
                if (response.status === 200) {
                    alert("Password updated successfully. Please Login!");
                    navigate("/login"); // Navigate to login page after success
                } else {
                    alert("Error resetting password. Please try again.");
                }
            } catch (error) {
                console.error("Error resetting password:", error.message);
                alert("An unexpected error occurred. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
                    Set New Password
                </h1>
                <p className="text-gray-600 text-center mb-6 text-base md:text-lg">
                    Create a strong password to secure your account.
                </p>

                <input
                    type="password"
                    className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                    type="password"
                    className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                    onClick={handleSavePassword}
                    disabled={isLoading}
                    className={`w-full h-12 font-semibold rounded-md text-sm md:text-base ${isLoading
                        ? "bg-gray-400 text-gray-500 cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-600 transition"
                        }`}
                >
                    {isLoading ? "Saving Password..." : "Save Password"}
                </button>
            </div>
        </div>
    );
};



export default ChangePassScreen;
