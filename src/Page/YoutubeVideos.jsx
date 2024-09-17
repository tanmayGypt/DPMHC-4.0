import { useEffect } from "react";
import YouTubePlayer from "../Page_Components/Videos/YouTubePlayer";

function YoutubeVideos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <YouTubePlayer />
    </div>
  );
}

export default YoutubeVideos;
