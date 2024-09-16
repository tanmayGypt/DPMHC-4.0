import { useState } from "react";

export default function PrevApps() {
  // Sample list of appointments
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
      date: "2024-09-10",
      time: "10:00",
      message: "Checkup appointment",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane@example.com",
      date: "2024-09-12",
      time: "12:30",
      message: "Dental appointment",
    },
    // Add more appointments as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");

  // Filter appointments based on search term and selected date
  const filteredAppointments = appointments.filter((appointment) => {
    return (
      appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.phone.includes(searchTerm) ||
      appointment.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-5 text-center">
          Appointments
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
              {filteredAppointments
                .filter((appointment) =>
                  filterDate ? appointment.date === filterDate : true
                )
                .map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="py-3 px-5 border-b">{appointment.name}</td>
                    <td className="py-3 px-5 border-b">{appointment.phone}</td>
                    <td className="py-3 px-5 border-b">{appointment.email}</td>
                    <td className="py-3 px-5 border-b">{appointment.date}</td>
                    <td className="py-3 px-5 border-b">{appointment.time}</td>
                    <td className="py-3 px-5 border-b">
                      {appointment.message}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* No Appointments Message */}
        {filteredAppointments.length === 0 && (
          <p className="mt-5 text-center text-gray-600">
            No appointments found.
          </p>
        )}
      </div>
    </div>
  );
}
