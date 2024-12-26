import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [dob, setDob] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);

    const isEmailValid = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail|outlook)\.com$/;
        return emailRegex.test(email);
    };

    const isPhoneNumberValid = (number) => {
        return /^[0-9]{10}$/.test(number);
    };

    const isDateValid = (date) => {
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return dateRegex.test(date);
    };

    const handleSignUp = async () => {
        if (loading) return;

        // Input Validations
        if (
            !fullName.trim() ||
            !email ||
            !password ||
            !confirmPassword ||
            !dob ||
            !country ||
            !state ||
            !phoneNumber
        ) {
            return alert("All fields are required.");
        }

        if (!isEmailValid(email)) {
            return alert("Please enter a valid email address.");
        }

        if (!isPhoneNumberValid(phoneNumber)) {
            return alert("Phone number must be exactly 10 digits.");
        }

        if (password !== confirmPassword) {
            return alert("Passwords do not match.");
        }



        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);

        try {
            const userData = {
                email,
                fullName,
                password,
                phoneNumber,
                dob,
                country,
                state,
                address,
                isVerified: false,
            };

            navigate(`/otp/${userData.email}/user`, { state: userData });
        } catch (error) {
            console.error("Sign up error:", error);
            alert("Failed to sign up. Please try again.");
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
                <h1 className="text-2xl font-bold text-center text-gray-800">Sign Up</h1>
                <form className="space-y-4 mt-6">
                    <div>
                        <label className="block text-gray-700">Full Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email Address <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password <span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Confirm Password <span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Date of Birth <span className="text-red-500">*</span></label>
                        <input
                            type="date"
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Country <span className="text-red-500">*</span></label>
                        <select
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value="Nill" selected>Select Country</option>
                            <option value="India">India</option>
                            <option value="others">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">State <span className="text-red-500">*</span></label>
                        <select
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value="Nill" selected>Select State</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Ladakh">Ladakh</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Others">Others</option>

                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Address</label>
                        <input
                            type="text"
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        {loading ? (
                            <button
                                type="button"
                                className="w-full p-3 text-white bg-blue-500 rounded-lg"
                                disabled
                            >
                                Signing Up...
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={handleSignUp}
                            >
                                Sign Up
                            </button>
                        )}
                    </div>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <button
                        className="text-blue-500 font-bold hover:underline"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignupScreen;
