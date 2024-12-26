import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateOTP, registerUser, verifyOtp } from "../../api";
const OTPVerificationScreen = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(30);
    const [isResendEnabled, setIsResendEnabled] = useState(false);
    const refs = useRef([]);
    const location = useLocation();
    const userData = location.state;
    const navigate = useNavigate();
    if (!userData) {
        navigate("/")
        return;
    }


    const generate = async () => {
        await generateOTP({ name: userData.fullName, email: userData.email });
    }
    useEffect(() => {

        generate();
        const countdown = setInterval(() => {
            setTimer((prev) => {
                if (prev === 1) {
                    clearInterval(countdown);
                    setIsResendEnabled(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(countdown); // Clean up timer on unmount
    }, []);

    const handleInputChange = (value, index) => {
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to the next input
        if (value !== "" && index < otp.length - 1) {
            refs.current[index + 1]?.focus();
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const enteredOtp = otp.join(""); // Combine the OTP array into a single string
            setIsLoading(true);

            if (!enteredOtp) {
                Alert.alert("Error, Please enter the OTP.");
                setIsLoading(false);
                return;
            }

            let response = await verifyOtp({ otp: enteredOtp, email: userData.email });


            if (response) {
                userData.email = userData.email;
                let signUpresponse = await registerUser(userData, enteredOtp);

                if (signUpresponse) {
                    alert(`Hello, ${userData.fullName}! You have registered successfully. Thank you for choosing DP Memorial Homoeopathic Clinic. Please log in to continue.`

                    );
                    navigate("/Login");
                } else {
                    alert("An error occurred while registering you. Please try again later.");
                }
            } else {
                alert("Verification Failed", response?.message || "Invalid OTP. Please try again.");
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            alert("An error occurred while verifying the OTP. Please try again.");
        } finally {
            setIsLoading(false); // Ensure loading state is turned off
        }
    };


    const handleResendOtp = () => {
        setOtp(new Array(6).fill(""));
        setIsResendEnabled(false);
        setTimer(30);
        generate();
        alert("OTP resent successfully!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Verify OTP</h1>
                <p className="text-gray-600 text-center mb-6">
                    Enter the 6-digit OTP sent to your email.
                </p>

                <div className="flex justify-center space-x-2 mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (refs.current[index] = el)}
                            type="text"
                            maxLength="1"
                            className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={digit}
                            onChange={(e) => handleInputChange(e.target.value, index)}
                            onKeyDown={(e) => {
                                if (e.key === "Backspace" && index > 0 && digit === "") {
                                    refs.current[index - 1]?.focus();
                                }
                            }}
                        />
                    ))}
                </div>

                <p className="text-gray-500 text-center mb-4">
                    {timer > 0 ? `Resend OTP in ${timer}s` : "You can now resend the OTP."}
                </p>

                <button
                    onClick={handleResendOtp}
                    disabled={!isResendEnabled}
                    className={`w-full py-2 mb-4 font-bold rounded-md ${isResendEnabled
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Resend OTP
                </button>

                <button
                    onClick={handleVerifyOtp}
                    disabled={otp.includes("") || isLoading}
                    className="w-full py-2 font-bold bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    {isLoading ? "Verifying..." : "Verify OTP"}
                </button>
            </div>
        </div>
    );
};

export default OTPVerificationScreen;
