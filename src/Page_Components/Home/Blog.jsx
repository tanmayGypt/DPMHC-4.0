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

  if (!blogsData || blogsData.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-col gap-y-4 my-16">
      <div className="mx-auto">
        <span className="text-4xl text-black font-bold">
          Featured Blogs
        </span>
      </div>
      <div className="flex justify-between mx-16 my-4">
        <span className="font-semibold text-2xl">Our Popular Blogs</span>
        <span className="font-semibold text-2xl text-red-500">View All</span>
      </div>

      <Slider {...settings} className="flex wrap">
        {blogsData.filter((item) => item.modelCategoty === 1).map((item) => (
          <Medicine_Card
            medicine={item}
            show={1}
          />
        ))}


      </Slider>
    </div>
  );
}

export default Blog;
