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
    console.log(email, enteredOtp)
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
        <div style={styles.container}>

            <h1 style={styles.header}>Set New Password</h1>
            <p style={styles.subHeader}>Create a strong password to secure your account.</p>

            <input
                type="password"
                style={styles.input}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
                type="password"
                style={styles.input}
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
                style={styles.button}
                onClick={handleSavePassword}
                disabled={isLoading}
            >
                {isLoading ? "Saving Password..." : "Save Password"}
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
        minHeight: "100vh",
    },
    logo: {
        width: "100px",
        height: "100px",
        marginBottom: "15%",
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
        backgroundColor: "#ffffff",
    },
    button: {
        backgroundColor: "#00796b",
        padding: "15px 40px",
        borderRadius: "25px",
        color: "#fff",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        border: "none",
    },
};

export default ChangePassScreen;
