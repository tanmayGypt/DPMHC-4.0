import { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import { getImages } from "../../api";

function Gallary() {
  const [Images, setImages] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetch = async () => {
      const resp = await getImages();
      setImages(resp);
    }
    fetch();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto mb-20 px-4">
      <div>
        <div className="font-bold text-center text-4xl mt-16 mb-20 text-indigo-600">
          Our Gallery
        </div>
      </div>

      {/* Gallery Intro */}
      <div className="text-center mb-12 text-lg text-gray-600">
        <p>
          Explore our gallery to get a glimpse of the holistic care and healing environment at DP Memorial Homoeopathy Clinic. Our clinic is equipped with state-of-the-art facilities and a dedicated team, ensuring that every patient receives personalized treatment in a calm and supportive atmosphere. Below you will find images that showcase our clinic, patient experiences, and some of our community events.
        </p>
      </div>

      {/* Gallery */}
      {Images?.length && Images.filter((item) => item.active === true).length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Images.filter((item) => item.active).map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-full object-cover rounded-lg transition-all duration-200 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <span className="text-white text-lg font-semibold">{image?.title}</span>
            </div>
          </div>
        ))}
      </div> : <div className="flex justify-center items-center h-64 text-gray-500 text-lg font-medium">
        No image to display, please come back later
      </div>}

      {/* Image Modal */}
      {modalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={selectedImage?.imageUrl}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallary;
