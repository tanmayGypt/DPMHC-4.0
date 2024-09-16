import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

// Dummy data for videos
const videosData = [
  {
    id: 1,
    title: "Rubber Dam Shri Gaya Ji | Maa Sita Setu | Mesmerizing Video",
    description: "",
    thumbnailUrl: "https://i.ytimg.com/vi/OxWYP2Damac/hqdefault.jpg",
    publishDate: "2024-09-01T15:02:12Z",
    videoUrl: "https://www.youtube.com/watch?v=OxWYP2Damac",
  },
  {
    id: 2,
    title: "Sample Video 2",
    description: "This is a sample description for the second video.",
    thumbnailUrl: "https://i.ytimg.com/vi/sample2/hqdefault.jpg",
    publishDate: "2024-08-15T10:00:00Z",
    videoUrl: "https://www.youtube.com/watch?v=sample2",
  },
  // Add more video data as needed
];

export default function VideoList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredVideos, setFilteredVideos] = useState(videosData);
  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJPg1xTH9GT6ZUAxoc2HUWQ&maxResults=10000&order=date&key=${"AIzaSyD7DRkKTIBkjOGkEnnJkAyz1DfXqqzUq58"}`
        );

        const data = await response.json();
        const items = data.items;

        const videos = items.map((item) => {
          const { snippet, id } = item;
          const { thumbnails, title, publishTime } = snippet;

          // Format publish time
          const [year, month, day] = publishTime.split("T")[0].split("-");

          return {
            thumbnail: thumbnails.high.url,
            videoId: id.videoId,
            embedUrl: `https://www.youtube.com/embed/${id.videoId}`,
            title: title,
            publishDate: `Publish Date: ${day}-${month}-${year}`,
          };
        });
        setFilteredVideos(videos);
        return videos;
      } catch (error) {
        console.error("Error fetching YouTube data:", error);
      }
    };
    fetchYouTubeData();
  }, []);
  useEffect(() => {
    const filtered = videosData.filter((video) => {
      const videoDate = new Date(video.publishDate);
      const searchMatch =
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase());

      const dateMatch =
        (!startDate || videoDate >= new Date(startDate)) &&
        (!endDate || videoDate <= new Date(endDate));

      return searchMatch && dateMatch;
    });
    setFilteredVideos(filtered);
  }, [searchTerm, startDate, endDate]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex flex-col gap-y-4 justify-center">
          <div className="flex gap-x-2 justify-center items-center">
            <span className="">Search Videos</span>
            <input
              type="text"
              placeholder="Search videos...."
              className="shadow appearance-none border border-blue-500 rounded w-4/12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {filteredVideos?.map((video) => (
          <VideoCard
            key={video.videoId}
            title={video.title}
            description={video.description}
            thumbnailUrl={video.thumbnail}
            publishDate={video.publishDate}
            videoUrl={video.videoId}
          />
        ))}
      </div>
    </div>
  );
}
