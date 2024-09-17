import { useEffect } from "react";
import VideoList from "../Page_Components/Videos/VideoList";

function Videos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-20 mb-36">
      <div className="font-bold text-center text-3xl">
        Our Recent Youtube Videos
      </div>
      <div className="w-9/12 text-start mx-auto mt-12 mb-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
        architecto voluptates. Odit sint vitae earum maiores doloremque
        veritatis inventore est in aperiam eligendi beatae laborum deserunt
        harum ipsam, voluptate ducimus ipsa nesciunt velit ad vel id molestiae
        rerum! Sed quasi quibusdam ipsa dolorem facere quos alias cupiditate
        odio! Dolorum delectus cumque numquam ut doloremque ipsum.
      </div>
      <VideoList />
    </div>
  );
}

export default Videos;
