import { Link } from "react-router-dom";
import {
  ScrollContainer,
  Animator,
  batch,
  Fade,
  Move,
  Sticky,
  ZoomIn,
  ZoomOut,
  MoveOut,
  StickyIn,
  FadeIn,
  FadeOut,
  ScrollPage,
} from "react-scroll-motion";

export default function About() {
  return (
    <>
      <ScrollContainer>
        <section className="flex items-center xl:h-screen font-poppins">
          <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap">
              {/* Image Section with Animation */}
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <img
                  src="https://dpmemorial.com/photo.jpeg"
                  alt=""
                  className="relative z-40 object-cover w-full h-96 rounded-3xl"
                />
              </div>

              {/* Text Section with Animation */}
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <h2 className="mb-4 text-4xl font-semibold">
                  About <span className="text-blue-500">Dr. Amit Gupta</span>
                </h2>
                <p className="mb-10 text-base leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                </p>
                <Link
                  to="/Appointment"
                  className="px-4 py-3 text-blue-700 transition-all transform border border-blue-500 rounded-sm hover:bg-blue-600 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500 dark:text-blue-400 hover:text-gray-100"
                >
                  Book An Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollContainer>
    </>
  );
}
