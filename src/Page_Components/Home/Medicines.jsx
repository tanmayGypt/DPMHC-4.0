import Medicine_Card from "./Medicine_Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovingComponent from "react-moving-text";
import { Animator, batch, FadeIn, ZoomIn } from "react-scroll-motion";
import { Link } from "react-router-dom";
function Medicines() {
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
    <div className="flex flex-col gap-y-4">
      <div className="mx-auto">
        <Animator animation={batch(FadeIn(), ZoomIn())}>
          <span className="text-4xl text-black font-bold">
            {" "}
            Featured Medicies
          </span>
        </Animator>
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

export default Medicines;
