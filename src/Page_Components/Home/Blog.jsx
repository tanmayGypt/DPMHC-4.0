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
function Blog() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of cards to show at once
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Adjust the speed (in milliseconds) for the auto-forward
  };
  return (
    <div className="flex flex-col gap-y-4 my-16">
      <div className="mx-auto">
        <MovingComponent
          type="fadeOutToTop"
          duration="500ms"
          delay="0s"
          direction="alternate"
          timing="linear"
          iteration="2"
          fillMode="forwards"
        >
          <Animator animation={batch(FadeIn(), ZoomIn())}>
            {" "}
            <span className="text-4xl text-black font-bold">
              {" "}
              Featured Blogs
            </span>
          </Animator>
        </MovingComponent>
      </div>
      <div className="flex justify-between mx-16 my-4">
        <span className="font-semibold text-2xl">Our Popular Blogs</span>
        <span className="font-semibold text-2xl text-red-500">View All</span>
      </div>

      <Slider {...settings} className=" text-center text-white p-4">
        <div className="">
          <Medicine_Card />
        </div>
        <div className="">
          <Medicine_Card />
        </div>
        <div className="">
          <Medicine_Card />
        </div>
      </Slider>
    </div>
  );
}

export default Blog;
