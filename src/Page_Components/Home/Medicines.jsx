import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Animator, batch, FadeIn, ZoomIn } from "react-scroll-motion";
import { Link } from "react-router-dom";
import { getBlogs } from "../../../api";
import Medicine_Card from "./Medicine_Card";

function Medicines({ blogsData }) {



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default number of slides
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
    <div className="flex flex-col gap-y-4 my-16">
      <div className="mx-auto">
        <span className="text-4xl text-black font-bold">
          Featured Medicines
        </span>
      </div>
      <div className="flex justify-between mx-16 my-4">
        <span className="font-semibold text-2xl">Our Popular Medicines</span>
        <Link
          to="/Medicines"
          className="font-semibold text-2xl text-red-500 hover:scale-105 hover:text-red-400"
        >
          View All
        </Link>
      </div>

      <Slider {...settings} className="text-center text-white p-4">
        {blogsData?.filter((item) => item.modelCategoty === 0).map((item) => (

          <Medicine_Card
            medicine={item}

          />
        ))}
      </Slider>
    </div>
  );
}

export default Medicines;
