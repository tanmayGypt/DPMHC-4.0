import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateOTP, registerUser, verifyOtp } from "../../api";
const ForgoPassOTP = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || "";
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(30);
    const [isResendEnabled, setIsResendEnabled] = useState(false);
    const refs = useRef([]);
    if (!email) {
        navigate("/");
        return;
    }
    console.log(email)
    const generate = async () => {
        await generateOTP({ name: "User", email: email });
    }
    useEffect(() => {
        generate();
    }, []);
    useEffect(() => {
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

        return () => clearInterval(countdown);
    }, [timer])
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

            let response = await verifyOtp({ otp: enteredOtp, email: email });

            if (response) {
                navigate("/reset-password", { state: { enteredOtp, email } });
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
        <div className="flex flex-col items-center justify-center bg-gray-100 h-screen px-4 py-8 justify-start my-auto">
            <h1 className="text-2xl font-bold text-teal-600 mb-2">Verify OTP</h1>
            <p className="text-gray-600 text-center mb-6">
                Enter the 6-digit OTP sent to your email.
            </p>

            <div className="flex space-x-2 mb-6">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => (refs.current[index] = el)} // Assign ref to each input
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 text-center border-2 border-teal-500 rounded-md focus:outline-none focus:ring focus:ring-teal-300"
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

            <p className="text-gray-500 mb-4">
                {timer > 0 ? `Resend OTP in ${timer}s` : "You can now resend the OTP."}
            </p>

            <button
                onClick={handleResendOtp}
                disabled={!isResendEnabled}
                className={`w-60 py-2 mb-4 font-bold rounded-lg ${isResendEnabled
                    ? "bg-teal-500 text-white hover:bg-teal-600"
                    : "bg-teal-200 text-gray-400 cursor-not-allowed"
                    }`}
            >
                Resend OTP
            </button>

            <button
                onClick={handleVerifyOtp}
                disabled={otp.includes("") || isLoading}
                className="w-60 py-2 font-bold bg-teal-500 text-white rounded-lg hover:bg-teal-600"
            >
                {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
        </div>
    );
};

export default ForgoPassOTP;
