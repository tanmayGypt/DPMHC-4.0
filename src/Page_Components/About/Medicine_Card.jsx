import toast, { Toaster } from "react-hot-toast";

import { Link } from "react-router-dom";
import Alert from "./Home/Alert";
const notify = () => toast.success("Item Added to Cart");
export default function Medicine_Card() {
  return (
    <>
      <div className="mx-auto duration-300 ease-in-out transition-transform transform hover:scale-105">
        <div className="shadow p-3 rounded-lg bg-white">
          <Link to="/product_description" className="relative inline-block">
            <div className="flex justify-center relative rounded-lg overflow-hidden">
              <img
                className="productImage"
                src="https://dpmemorial.com/slide4.png"
                alt=""
              />
            </div>

            <div className="mt-3">
              <h2
                className="font-medium text-base text-gray-800 text-start"
                title="Immuno Plus"
              >
                Immuno Plus
              </h2>
              <p className="mt-1 text-sm text-gray-700 text-start">
                Immuno Plus tablets are a food supplement based on plant
                extracts, vitamins, and minerals for promoting the body’s
                natural defenses and immune system function.
              </p>

              {/*<div className="flex items-center space-x-3 mt-2">
                <span className="text-lg font-bold text-gray-800">Rs.499</span>
                <span className="text-sm line-through text-gray-500">
                  Rs.500
                </span>
              </div>

              <p className="text-xs text-red-500 mt-1">
                Save Extra With Combo Offers
              </p>*/}
            </div>
          </Link>

          {/*<div className="flex space-x-2 mt-3">
            <button
              className="flex-1 text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-sm"
              onClick={notify}
            >
              Add To Cart
            </button>

            <Link
              to="/currentAddress"
              onClick={notify}
              className="flex-1 text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-sm text-center"
            >
              Buy Now
            </Link>
          </div>*/}

          <Toaster />
        </div>
      </div>
    </>
  );
}
