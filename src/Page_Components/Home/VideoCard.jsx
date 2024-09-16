const VideoCard = ({ video }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full h-48 object-cover"
          src={video.thumbnail}
          alt={video.title}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{video.description}</p>
          <div className="text-gray-500 text-xs mb-4">
            <p>Views: {video.views}</p>
            <p>Date: {new Date(video.date).toLocaleDateString()}</p>
          </div>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Watch Video
          </a>
        </div>
      </a>
    </div>
  );
};

export default VideoCard;
