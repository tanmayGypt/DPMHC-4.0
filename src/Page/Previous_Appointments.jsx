import { useEffect, useState } from "react";
import PrevApps from "../Page_Components/Appointments/Previous_Online_Appointments/PrevApps";
import { getAppointmentsByUserId } from "../../api";
import Cookies from "js-cookie";

function Previous_Appointments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const user = Cookies.get("user");

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetch = async () => {
      try {
        const resp = await getAppointmentsByUserId(Cookies.get("jwt"));
        setData(resp);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false); // Set loading to false after the data is fetched
      }
    };
    fetch();
  }, []);

  return (
    <div>
      {loading ? (
        // Skeletal Loader
        <div className="w-full mx-auto my-auto max-w-6xl max-sm:w-screen bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-5 text-center">
            <div className="bg-gray-300 animate-pulse h-6 w-32 mx-auto rounded"></div>
          </h2>

          {/* Search Bar Skeleton */}
          <div className="flex items-center mb-5">
            <div className="w-full p-3 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="ml-4 w-32 p-3 bg-gray-200 animate-pulse rounded-lg"></div>
          </div>

          {/* Appointment List Skeleton */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-3 px-5 border-b">
                    <div className="bg-gray-300 animate-pulse h-6 w-16 mx-auto rounded"></div>
                  </th>
                  <th className="py-3 px-5 border-b">
                    <div className="bg-gray-300 animate-pulse h-6 w-16 mx-auto rounded"></div>
                  </th>
                  <th className="py-3 px-5 border-b">
                    <div className="bg-gray-300 animate-pulse h-6 w-16 mx-auto rounded"></div>
                  </th>
                  <th className="py-3 px-5 border-b">
                    <div className="bg-gray-300 animate-pulse h-6 w-16 mx-auto rounded"></div>
                  </th>
                  <th className="py-3 px-5 border-b">
                    <div className="bg-gray-300 animate-pulse h-6 w-16 mx-auto rounded"></div>
                  </th>
                  <th className="py-3 px-5 border-b">
                    <div className="bg-gray-300 animate-pulse h-6 w-16 mx-auto rounded"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Repeat skeleton rows */}
                {Array(5).fill(0).map((_, index) => (
                  <tr key={index}>
                    <td className="py-3 px-5 border-b">
                      <div className="bg-gray-300 animate-pulse h-6 w-24 mx-auto rounded"></div>
                    </td>
                    <td className="py-3 px-5 border-b">
                      <div className="bg-gray-300 animate-pulse h-6 w-24 mx-auto rounded"></div>
                    </td>
                    <td className="py-3 px-5 border-b">
                      <div className="bg-gray-300 animate-pulse h-6 w-24 mx-auto rounded"></div>
                    </td>
                    <td className="py-3 px-5 border-b">
                      <div className="bg-gray-300 animate-pulse h-6 w-24 mx-auto rounded"></div>
                    </td>
                    <td className="py-3 px-5 border-b">
                      <div className="bg-gray-300 animate-pulse h-6 w-24 mx-auto rounded"></div>
                    </td>
                    <td className="py-3 px-5 border-b">
                      <div className="bg-gray-300 animate-pulse h-6 w-24 mx-auto rounded"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        // Once data is fetched, render PrevApps component
        <PrevApps Previous_Appointments={data} />
      )}
    </div>
  );
}

export default Previous_Appointments;
