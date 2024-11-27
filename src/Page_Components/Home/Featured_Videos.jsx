import { Animator, batch, Fade, FadeIn, ZoomIn } from "react-scroll-motion";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Slider from "react-slick";
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
const featuredVideos = [
  {
    title: "LIVER HEMANGIOMA Cured case",
    description: "A liver hemangioma, also known as a hepatic hemangioma, is a benign (non-cancerous) tumor in the liver that is made up of clusters of blood-filled cavities fed by the hepatic (liver) artery. Usually, a patient has only one hemangioma, but in some cases there may be more than one. Hemangiomas do not develop into cancer and do not spread to other areas of the body.",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=4Pu6Vs_4sk8&ab_channel=DrAmitGuptaDPMemorial",
    views: "33, 867",
    date: "Nov 13, 2021",
  },
  {
    title: "Alopecia Areata",
    description: "Sudden hair loss that starts with one or more circular bald patches that may overlap.",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=OLb9gb4WauY&ab_channel=DrAmitGuptaDPMemorial",
    views: "34,247",
    date: "Aug 26, 2020",
  },
  {
    title: "Best Homoeopathic Medicine company",
    description: "Schwabe India, claims to be the world's largest manufacturer of Homeopathic medicines with 140 year old tradition. Dr. Willmar Schwabe India Pvt.",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=__9tMMvux2U&ab_channel=DrAmitGuptaDPMemorial",
    views: "51,699",
    date: "Dec 5, 2021",
  },
  {
    title: "Cured case of Hydronephrosis Grade-3",
    description: "#Hydronephrosis is the swelling of a #kidney due to a build-up of urine. It happens when urine cannot drain out from the kidney to the bladder from a blockage or obstruction.",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=FR6uM0vmL2Y&ab_channel=DrAmitGuptaDPMemorial",
    views: "119,248",
    date: "Oct 17, 2020",
  },
  {
    title: "Rheumatoid arthritis cured case",
    description: "Rheumatoid arthritis (RA) is a chronic inflammatory disease of unknown etiology marked by a symmetric, peripheral polyarthritis. It is the most common form of chronic inflammatory arthritis and often results in joint damage and physical disability. ",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=iJHaNMW8K2M&ab_channel=DrAmitGuptaDPMemorial",
    views: "121,456",
    date: "May 22, 2022",
  },

];
function Featured_Videos() {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <div className="mx-auto">
        <span className="text-xl font-bold text-center text-black sm:text-2xl md:text-3xl lg:text-4xl">
          Our Popular Youtube Videos
        </span>
      </div>

      <div className="flex flex-col items-center justify-between mx-4 space-y-4 md:space-y-0 md:mx-8 md:flex-row md:items-center">
        <span className="text-lg font-semibold text-center text-gray-800 sm:text-xl md:text-2xl lg:text-3xl">
          Featured Videos
        </span>
        <Link
          to="/Videos"
          className="text-lg font-medium text-red-500 transition-transform hover:scale-105 hover:text-red-400 sm:text-xl md:text-2xl lg:text-3xl"
        >
          View All
        </Link>
      </div>

      <Slider {...settings} className="">{featuredVideos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}</Slider>

    </div>
  );
}

export default Featured_Videos;
