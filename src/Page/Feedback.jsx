import React, { useState } from "react";
import { createFeedback } from "../../api";
import Cookies from "js-cookie";

const FeedbackPage = () => {
    const user = Cookies.get("user");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [category, setCategory] = useState("Complaint");
    const [isSubmitting, setIsSubmitting] = useState(false); // Loader state

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            alert("Title can't be empty");
            return;
        }
        if (!category) {
            alert("Category can't be empty");
            return;
        }
        if (!message) {
            alert("Message can't be empty");
            return;
        }

        setIsSubmitting(true); // Start loader
        try {
            const resp = await createFeedback({ user, title, message, category });
            if (resp) {
                alert("Thanks for the feedback!");
                // Reset form after successful submission
                setTitle("");
                setMessage("");
                setCategory("Complaint");
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false); // Stop loader
        }
    };

    return (
        <div className="max-w-xl h-fit mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
            <h2 className="title-font text-center mb-8 text-lg md:text-xl lg:text-2xl font-medium text-gray-900">
                Feedback
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600 text-sm md:text-base lg:text-lg">
                If you had any issues or you liked our product, please share with us!
            </p>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="text-sm leading-7 text-gray-600">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        disabled={isSubmitting} // Disable input while submitting
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="text-sm leading-7 text-gray-600">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        disabled={isSubmitting} // Disable input while submitting
                    >
                        <option disabled>Choose category</option>
                        <option value="General">General</option>
                        <option value="Complaint">Complaint</option>
                        <option value="Feedback">Feedback</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="text-sm leading-7 text-gray-600">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        disabled={isSubmitting} // Disable input while submitting
                    />
                </div>

                <button
                    type="submit"
                    className="rounded w-full border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={isSubmitting} // Disable button while submitting
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>

            <p className="mt-3 text-xs text-gray-500">
                Feel free to connect with us on social media platforms.
            </p>
        </div>
    );
};

export default FeedbackPage;
