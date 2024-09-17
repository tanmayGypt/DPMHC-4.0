import { Gallery } from "react-grid-gallery";

function Gallary() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Images = [
    {
      src: "g1.png",
      width: 340,
      height: 360,
    },
    {
      src: "g2.png",
      width: 640,
      height: 360,
    },
    {
      src: "g3.png",
      width: 640,
      height: 360,
    },
    {
      src: "g4.png",
      width: 640,
      height: 360,
    },

    {
      src: "g6.png",
      width: 640,
      height: 360,
    },
    {
      src: "g7.png",
      width: 640,
      height: 360,
    },
    {
      src: "g8.png",
      width: 640,
      height: 360,
    },
    {
      src: "g10.jpg",
      width: 640,
      height: 360,
    },
    {
      src: "g11.jpg",
      width: 640,
      height: 360,
    },

    {
      src: "g13.jpg",
      width: 640,
      height: 360,
    },

    {
      src: "g16.jpg",
      width: 640,
      height: 360,
    },
  ];

  return (
    <div className="w-9/12 mx-auto mb-20">
      <div>
        <div className="font-bold text-center text-4xl mt-16 mb-20">
          Gallary Section
        </div>
      </div>
      <Gallery images={Images} />
    </div>
  );
}

export default Gallary;
