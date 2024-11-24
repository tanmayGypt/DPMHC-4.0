import React, { useState } from "react";
import axios from "axios";
import { createAppointment } from "../../../../api";
import { useNavigate } from "react-router-dom";

export default function Appform() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
    documentUrl: null,
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documentUrl: e.target.files[0] });
  };

  const cleanPhoneNumber = (phone) => {
    return phone.replace(/\D/g, "");
  };

  const validate = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    const phonePattern = /^[0-9]{10}$/;
    const cleanedPhone = cleanPhoneNumber(formData.phone);
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!phonePattern.test(cleanedPhone)) {
      errors.phone = "Phone number must be 10 digits.";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email address.";
    }

    if (!formData.date) {
      errors.date = "Date is required.";
    }

    if (!formData.time) {
      errors.time = "Time is required.";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const appointmentData = {
          name: formData.name,
          phone: cleanPhoneNumber(formData.phone),
          emailAddress: formData.email,
          date: formData.date,
          time: formData.time,
          message: formData.message,
          documentUrl: formData.documentUrl,
        };
        const response = await createAppointment(appointmentData);
        alert("Success , Your Appointment has been booked Successfully");

        navigate("/Appointment/prev-apps");
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className={`flex items-center justify-center p-12 ${loading ? "blur" : ""}`}>
        <div className="max-w-lg w-full bg-white mx-auto">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl mb-5 text-center font-medium">
              Book An Appointment
            </h2>

            <div className="mb-5">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-gray-900 mb-3"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block font-medium text-lg text-gray-900 mb-3"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block font-medium text-lg text-gray-900 mb-3"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="flex flex-wrap -mx-3">
              <div className="w-full sm:w-1/2 px-3 mb-5">
                <label
                  htmlFor="date"
                  className="block font-medium text-lg text-gray-900 mb-3"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
                />
                {errors.date && <p className="text-red-500">{errors.date}</p>}
              </div>

              <div className="w-full sm:w-1/2 px-3 mb-5">
                <label
                  htmlFor="time"
                  className="block font-medium text-lg text-gray-900 mb-3"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  min="09:00"
                  max="21:00"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
                />
                {errors.time && <p className="text-red-500">{errors.time}</p>}
              </div>
            </div>

            <div className="mb-5 pt-3">
              <label className="block font-semibold text-xl text-gray-900 mb-5">
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter Your message here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
                rows="5"
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="mb-5 pt-3">
              <label className="block font-semibold text-xl text-gray-900 mb-5">
                Upload Images (Optional)
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="block w-full text-gray-900"
              />
            </div>

            <div>
              <button className="w-full text-center font-semibold text-lg bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-200">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-90 z-50">
          <div className="loader">Submitting...</div>
        </div>
      )}
    </>
  );
}
