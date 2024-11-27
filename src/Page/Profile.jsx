import React, { useEffect, useState } from "react";
import { getUserByEmail, UpdateUserByEmail } from "../../api";
import Cookies from "js-cookie";
const ProfilePage = () => {
    // Initialize state variables
    const [email, setEmail] = useState("example@example.com");
    const [fullName, setFullName] = useState("John Doe");
    const [profilePic, setProfilePic] = useState("profile_pic_url"); // URL or local path
    const [dob, setDob] = useState("1990-01-01");
    const [country, setCountry] = useState("USA");
    const [state, setState] = useState("California");
    const [address, setAddress] = useState("123 Street, City");
    const [phoneNumber, setPhoneNumber] = useState("+1234567890");
    const [isEditing, setIsEditing] = useState(false);
    const user = Cookies.get("user");
    useEffect(() => {
        const fetch = async () => {
            const resp = await getUserByEmail(user);
            setEmail(resp.email ? resp.email : "Not Available")
            setCountry(resp.country ? resp.country : "Not Available")
            setFullName(resp.fullName ? resp.fullName : "Not Available")
            setProfilePic(resp.profilePic ? resp.profilePic : "Not Available")
            setDob(resp.dob ? resp.dob : "Not Available")
            setPhoneNumber(resp.phoneNumber ? resp.phoneNumber : "Not Available")
            setState(resp.state ? resp.state : "Not Available")
            setAddress(resp.address ? resp.address : "Not Available");
        }
        fetch();
    }, [])

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSubmit = async () => {
        if (!user || !Cookies.get("jwt")) {
            alert("Please Login First");
            return;
        }
        if (!email || !country || !fullName || !profilePic || !dob || !state || !address) {
            alert("All the fields are required");
            return;
        }

        const resp = await UpdateUserByEmail({ email, country, fullName, profilePic, dob, phoneNumber, state, address })

        if (resp) alert("Profile updated successfully!");
        else alert("Something went wrong");
        setIsEditing(false);
    };

    return (
        <div className="max-w-xl mx-auto mt-16">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">User Info</h1>

            <div className="flex justify-center mb-8">
                <div className="relative">
                    <img
                        src={"/sampleProfilePic.jpg"} // Profile image source
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
                    />
                    <button
                        className="absolute bottom-0 right-0 bg-gray-500 p-2 rounded-full text-white hover:bg-gray-600"
                        onClick={() => alert("Upload new profile picture")}
                    >
                        ✏️
                    </button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-4">
                    <div className="text-gray-600">Email</div>
                    {false ? (
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border px-4 py-2 rounded-md"
                        />
                    ) : (
                        <div>{email}</div>
                    )}
                </div>

                <div className="flex justify-between mb-4">
                    <div className="text-gray-600">Full Name</div>
                    {isEditing ? (
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="border px-4 py-2 rounded-md"
                        />
                    ) : (
                        <div>{fullName}</div>
                    )}
                </div>

                <div className="flex justify-between mb-4">
                    <div className="text-gray-600">Date of Birth</div>
                    {isEditing ? (
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="border px-4 py-2 rounded-md"
                        />
                    ) : (
                        <div>{dob}</div>
                    )}
                </div>

                <div className="flex justify-between mb-4">
                    <div className="text-gray-600">Country</div>
                    {isEditing ? (
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="border px-4 py-2 rounded-md"
                        />
                    ) : (
                        <div>{country}</div>
                    )}
                </div>

                <div className="flex justify-between mb-4">
                    <div className="text-gray-600">State</div>
                    {isEditing ? (
                        <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="border px-4 py-2 rounded-md"
                        />
                    ) : (
                        <div>{state}</div>
                    )}
                </div>

                <div className="flex justify-between mb-4">
                    <div className="text-gray-600">Address</div>
                    {isEditing ? (
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="border px-4 py-2 rounded-md"
                        />
                    ) : (
                        <div>{address}</div>
                    )}
                </div>

                <div className="flex justify-between mb-4">
                    <div className="text-gray-600">Phone Number</div>
                    {isEditing ? (
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="border px-4 py-2 rounded-md"
                        />
                    ) : (
                        <div>{phoneNumber}</div>
                    )}
                </div>





                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleEditClick}
                        className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600"
                    >
                        {isEditing ? "Cancel" : "Edit"}
                    </button>
                    {isEditing && (
                        <button
                            onClick={handleSubmit}
                            className="ml-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
