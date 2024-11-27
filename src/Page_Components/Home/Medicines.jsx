import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Medicine_Card from "./Medicine_Card";

function Medicines({ blogsData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // For large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // For small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Render nothing if blogsData is empty
  if (!blogsData || blogsData.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-4 my-16 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto">
        <span className="text-xl font-bold text-center text-black sm:text-2xl md:text-3xl lg:text-4xl">Featured Medicines</span>
      </div>
      <div className="flex justify-between items-center my-4">
        <span className="text-lg font-semibold text-center text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">Our Popular Medicines</span>
        <Link
          to="/Medicines"
          className="text-lg font-medium text-red-500 transition-transform hover:scale-105 hover:text-red-400 sm:text-xl md:text-2xl lg:text-3xl"
        >
          View All
        </Link>
      </div>

      <Slider {...settings} className="text-center text-white p-4">
        {blogsData?.filter((item) => item.modelCategoty === 0 && item.published).slice(0, 6).map((item) => (
          <div className="">
            <Medicine_Card medicine={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Medicines;
