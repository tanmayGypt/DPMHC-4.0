import toast, { Toaster } from "react-hot-toast";

import { Link } from "react-router-dom";
import Alert from "./Alert";
const notify = () => toast.success("Item Added to Cart");
export default function Medicine_Card() {
  return (
    <>
      <div className="mx-auto duration-300 ease-in-out transition-transform transform hover:scale-105 py-4 px-8 h-3/5">
        <div className="shadow p-3 rounded-lg bg-white">
          <Link to="/product_description" className="relative inline-block">
            <div className="flex justify-center relative rounded-lg overflow-hidden">
              <img
                className="productImage w-9/12 h-9/12"
                src="https://media.istockphoto.com/id/1973365581/vector/sample-ink-rubber-stamp.jpg?s=612x612&w=0&k=20&c=_m6hNbFtLdulg3LK5LRjJiH6boCb_gcxPvRLytIz0Ws="
                alt=""
              />
            </div>

            <div className="mt-3">
              <h2
                className="font-medium text-base text-gray-800 text-start"
                title="Immuno Plus"
              >
                Sample Title
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

          <div className="flex space-x-2 mt-3">
            <Link
              to="/currentAddress"
              onClick={notify}
              className="flex-1 text-white bg-red-500 border-0 py-2 focus:outline-none hover:bg-red-600 rounded text-center"
            >
              View Full Product
            </Link>
          </div>

          <Toaster />
        </div>
      </div>
    </>
  );
}
