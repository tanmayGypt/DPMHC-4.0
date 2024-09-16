import { Animator, batch, Fade, FadeIn, ZoomIn } from "react-scroll-motion";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const featuredVideos = [
  {
    title: "Amazing React Tutorial",
    description: "Learn React from scratch with this amazing tutorial.",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=VIDEO_ID",
    views: "1,234,567",
    date: "2024-01-15T00:00:00Z", // ISO 8601 format
  },
  {
    title: "Understanding JavaScript Closures",
    description: "A deep dive into JavaScript closures and their use cases.",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=VIDEO_ID",
    views: "987,654",
    date: "2024-02-25T00:00:00Z", // ISO 8601 format
  },
  {
    title: "Amazing React Tutorial",
    description: "Learn React from scratch with this amazing tutorial.",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=VIDEO_ID",
    views: "1,234,567",
    date: "2024-01-15T00:00:00Z", // ISO 8601 format
  },
  {
    title: "Understanding JavaScript Closures",
    description: "A deep dive into JavaScript closures and their use cases.",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=VIDEO_ID",
    views: "987,654",
    date: "2024-02-25T00:00:00Z", // ISO 8601 format
  },
  {
    title: "Understanding JavaScript Closures",
    description: "A deep dive into JavaScript closures and their use cases.",
    thumbnail: "https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=VIDEO_ID",
    views: "987,654",
    date: "2024-02-25T00:00:00Z", // ISO 8601 format
  },
  // Add more video objects as needed
];
function Featured_Videos() {
  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto">
        <Animator animation={batch(Fade(), ZoomIn())}>
          <span className="text-2xl text-black font-bold text-center">
            Our Popular Youtube Videos
          </span>
        </Animator>
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
