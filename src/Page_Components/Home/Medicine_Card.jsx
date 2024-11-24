import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Medicine_Card({ medicine, buttontext }) {

  return (
    <div className="max-w-sm mx-auto p-4 transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Link to={`/product_description/${medicine?.id}`} className="block">
          <img
            className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
            src={
              medicine?.images[0] ||
              "https://media.istockphoto.com/id/1973365581/vector/sample-ink-rubber-stamp.jpg?s=612x612&w=0&k=20&c=_m6hNbFtLdulg3LK5LRjJiH6boCb_gcxPvRLytIz0Ws="
            }
            alt={medicine?.title || "Default Image"}
          />


          {/* Text Section */}
          <div className="p-4">
            <h2
              className="font-semibold text-lg text-gray-800 truncate"
              title={medicine?.title || "Not Available"}
            >
              {medicine?.title || "Not Available"}
            </h2>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {medicine?.description || "Not Available"}
            </p>


            <p className="mt-2 text-sm text-gray-700">
              <strong>Author:</strong> {medicine.author ? medicine.author : "Not Available"}
            </p>



            <p className="mt-1 text-sm text-gray-700">
              <strong>Category:</strong> {medicine?.category ? medicine.category : "Not Available"}
            </p>

          </div>
        </Link>

        {/* Action Button */}
        <div className="p-4">
          <Link
            to={`/content-body/${medicine?.id}`}
            className="block w-full py-2 text-center text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            {buttontext || "View More"}
          </Link>
        </div>

        <Toaster />
      </div>
    </div>
  );
}
