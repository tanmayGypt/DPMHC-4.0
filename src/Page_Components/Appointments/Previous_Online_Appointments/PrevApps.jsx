import { useState } from "react";

export default function PrevApps({ Previous_Appointments }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");

  // Function to filter appointments based on search term and date
  const filteredAppointments = Previous_Appointments?.filter((appointment) => {
    const matchesSearchTerm =
      appointment?.name?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      appointment?.phone?.includes(searchTerm) ||
      appointment?.email?.toLowerCase()?.includes(searchTerm?.toLowerCase());

    const matchesDate = filterDate
      ? appointment.date === filterDate
      : true;

    return matchesSearchTerm && matchesDate;
  });

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-5 text-center">
          Your Appointments
        </h2>

        {/* Search Bar */}
        <div className="flex items-center mb-5">
          <input
            type="text"
            placeholder="Search by name, phone, or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
          />
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="ml-4 p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring-indigo-600"
          />
        </div>

        {/* Appointment List */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-3 px-5 border-b">Name</th>
                <th className="py-3 px-5 border-b">Phone</th>
                <th className="py-3 px-5 border-b">Email</th>
                <th className="py-3 px-5 border-b">Date</th>
                <th className="py-3 px-5 border-b">Time</th>
                <th className="py-3 px-5 border-b">Message</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments?.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="py-3 px-5 border-b">{appointment.name ? appointment.name : "Not Mensioned"}</td>
                  <td className="py-3 px-5 border-b">{appointment.phone ? appointment.phone : "Not Mensioned"}</td>
                  <td className="py-3 px-5 border-b">{appointment.email ? appointment.email : "Not Mensioned"}</td>
                  <td className="py-3 px-5 border-b">{appointment.date ? appointment.date : "Not Mensioned"}</td>
                  <td className="py-3 px-5 border-b">{appointment.time ? appointment.time : "Not Mensioned"}</td>
                  <td className="py-3 px-5 border-b">
                    {appointment.message ? appointment.message.substr(0, 30) : "Not Mensioned"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No Appointments Message */}
        {filteredAppointments?.length === 0 && (
          <p className="mt-5 text-center text-gray-600">
            No appointments found.
          </p>
        )}
      </div>
    </div>
  );
}
