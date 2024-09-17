import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function Medicine_Card({ medicine }) {
  const notify = () => toast.success("Item Added to Cart");

  return (
    <>
      <div
        key={medicine.id}
        className="shadow-lg py-4 rounded-lg p-4 h-4/12 w-3/12 my-4  bg-white transition-transform transform hover:scale-105 duration-300 ease-in-out"
      >
        <Link
          to={`/product_description/${medicine.id}`}
          className="relative inline-block"
        >
          <div className="flex justify-center relative rounded-lg overflow-hidden h-48">
            <img
              src={medicine.imageUrl}
              alt={medicine.title}
              className="productImage w-full h-full object-cover"
            />
          </div>

          <div className="mt-3">
            <h2
              className="font-medium text-lg text-gray-800 text-start"
              title={medicine.title}
            >
              {medicine.title}
            </h2>
            <p className="mt-1 text-sm text-gray-700 text-start truncate-overflow">
              {medicine.description.length > 100
                ? `${medicine.description.substring(0, 100)}...`
                : medicine.description}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Category: {medicine.category}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Added on: {new Date(medicine.dateAdded).toLocaleDateString()}
            </p>
          </div>
          <div className="flex space-x-2 mt-3">
            <Link
              to="/Content-Body/:id"
              onClick={notify}
              className="flex-1 text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-sm text-center"
            >
              View Details
            </Link>
          </div>
        </Link>

        <Toaster />
      </div>
    </>
  );
}

export default Medicine_Card;
