import React, { useState } from "react";
import { useParams } from "react-router-dom";

const YouTubePlayer = () => {
  const [videoId, setVideoId] = useState("OxWYP2Damac");
  let { videoUrl } = useParams();
  console.log(videoUrl);
  // Extract YouTube video ID from the URL
  // const extractVideoId = (url) => {
  //   const regex =
  //     /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|watch\?.+v=|.*\/)?([^"&?\/\s]{11})/;
  //   const match = url.match(regex);
  //   return match ? match[1] : "";
  // };

  // React.useEffect(() => {
  //   if (videoUrl) {
  //     setVideoId(extractVideoId(videoUrl));
  //   }
  // }, [videoUrl]);

  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden">
      {videoId ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video Player"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : (
        <p className="text-center text-gray-500">Invalid YouTube URL</p>
      )}
    </div>
  );
};

export default YouTubePlayer;
