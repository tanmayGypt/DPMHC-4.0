import React, { useEffect, useState } from 'react';
import { getAlerts } from '../../api';

const MessageCard = ({ title, message, dateCreated }) => {
    const formattedDate = new Date(dateCreated).toLocaleString(); // Format the date

    return (
        <div className="w-full max-w-3xl mx-auto p-4 my-4 bg-white shadow-lg rounded-lg">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-center text-gray-800">{title || "No Title"}</h2>

            {/* Message */}
            <p className="mt-2 text-lg text-gray-600 whitespace-pre-line text-center">{message || "No message available."}</p>

            {/* Date */}
            <p className="mt-2 text-sm text-gray-500 text-center">{formattedDate}</p>
        </div>
    );
};

const Notifications = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetch = async () => {
            try {
                const resp = await getAlerts();
                setData(resp);
            } catch (error) {
                console.error("Error fetching notifications:", error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };
        fetch();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl mt-12 md:text-4xl font-bold text-center text-teal-600 mb-6">
                Notifications
            </h1>

            {/* Loader while data is being fetched */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-current border-t-transparent rounded-full" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                // Once data is fetched, render the notifications
                data && data.length && data.filter((item) => item.active === true).length > 0 ? (
                    data.filter((item) => item.active === true).map((message, index) => (
                        <MessageCard
                            key={index}
                            title={message.title}
                            message={message.message}
                            dateCreated={message.dateCreated}
                        />
                    ))
                ) : (
                    <p className="text-xl text-gray-600">No messages available at the moment.</p>
                )
            )}
        </div>
    );
};

export default Notifications;
