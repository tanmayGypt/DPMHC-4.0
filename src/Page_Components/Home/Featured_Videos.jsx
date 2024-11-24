import { Animator, batch, Fade, FadeIn, ZoomIn } from "react-scroll-motion";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col gap-4">
      <div className="mx-auto">
        <span className="text-2xl text-black font-bold text-center">
          Our Popular Youtube Videos
        </span>
      </div>

      <div className="flex justify-between mx-8 my-4">
        <span className="font-semibold text-2xl">Our Popular Blogs</span>
        <Link
          to="/Videos"
          className="font-semibold text-2xl text-red-500 hover:scale-105 hover:text-red-400"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-x-clip">
        {featuredVideos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Featured_Videos;
