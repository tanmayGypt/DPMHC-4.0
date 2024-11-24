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
        <div style={styles.container}>
            <h1 style={styles.header}>Forgot Password</h1>
            <p style={styles.subHeader}>Enter your email address to receive the OTP.</p>
            <input

                type="email"
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button
                style={styles.button}
                onClick={handleSendOtp}
                disabled={isLoading}
            >
                {isLoading ? "Sending OTP..." : "Send OTP"}
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f7f9fc",
        height: "100vh",
    },
    header: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#00796b",
        marginBottom: "20px",
    },
    subHeader: {
        fontSize: "16px",
        color: "#757575",
        textAlign: "center",
        marginBottom: "30px",
    },
    input: {
        width: "30%",
        height: "50px",
        borderColor: "#00796b",
        borderWidth: "1px",
        borderRadius: "10px",
        paddingLeft: "10px",
        marginBottom: "20px",
        fontSize: "16px",
    },
    button: {
        backgroundColor: "#00796b",
        padding: "15px 40px",
        borderRadius: "25px",
        color: "#fff",
        fontSize: "18px",
        fontWeight: "bold",
        border: "none",
        cursor: "pointer",
    },
};

export default ForgotPasswordEmailScreen;
