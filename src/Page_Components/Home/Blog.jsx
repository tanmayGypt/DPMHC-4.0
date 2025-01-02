import Medicine_Card from "./Medicine_Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovingComponent from "react-moving-text";
import {
  ScrollContainer,
  Animator,
  batch,
  Fade,
  Move,
  Sticky,
  ZoomIn,
  FadeIn,
  StickyIn,
} from "react-scroll-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Blog({ blogsData }) {

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


  if (
    !blogsData ||
    blogsData.length === 0 ||
    blogsData.filter(item => item.modelCategoty === 0 && item.published).length < 2
  ) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-4 my-16">
      <div className="mx-auto">
        <span className="text-xl font-bold text-center text-black sm:text-2xl md:text-3xl lg:text-4xl">
          Featured Blogs
        </span>
      </div>
      <div className="flex justify-between mx-16 my-4">
        <span className="text-lg font-semibold text-center text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">Our Popular Blogs</span>
        <span className="text-lg font-medium text-red-500 transition-transform hover:scale-105 hover:text-red-400 sm:text-xl md:text-2xl lg:text-3xl"
        ><Link to="/Blog-List">View All</Link></span>
      </div>

      <Slider {...settings} >
        {blogsData?.filter((item) => item.modelCategoty === 0 && item.published).slice(0, 6).map((item) => (

          <div className="mx-12">
            <Medicine_Card
              medicine={item}
            />
          </div>
        ))}


      </Slider>
    </div>
  );
}

export default Blog;
