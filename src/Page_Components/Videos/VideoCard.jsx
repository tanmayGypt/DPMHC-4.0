import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const VideoCard = ({
  title,
  description,
  thumbnailUrl,
  publishDate,
  videoUrl,
}) => {
  return (
    <div className="w-4/12 mx-2 bg-white border border-gray-200 rounded-lg shadow-md">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full h-48 object-cover p-1"
          src={thumbnailUrl}
          alt={title}
        />
        <div className="py-4 px-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">
            {description.length > 200
              ? `${description.substring(0, 100)}...`
              : description}
          </p>
          <div className="text-gray-500 text-xs mb-4">
            <p>Date: {new Date(publishDate).toLocaleDateString()}</p>
          </div>
          <Link
            to={`/Videos/${"OxWYP2Damac"}`}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Watch Video
          </Link>
        </div>
      </a>
    </div>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  thumbnailUrl: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};

VideoCard.defaultProps = {
  description: "No description available",
};

export default VideoCard;
