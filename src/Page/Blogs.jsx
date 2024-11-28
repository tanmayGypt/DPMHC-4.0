import { useEffect } from "react";
import BlogList from "../Page_Components/Blogs/BlogList";

function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col gap-y-4 my-28">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-center font-bold text-4xl">Our Blog Collection</h1>
        <div className="w-9/12 text-start mx-auto">
          Welcome to our blog collection! Here, we share valuable insights, tips, and articles to help you understand the power of homeopathy, natural healing, and overall well-being. Whether you're new to homeopathy or a long-time patient, our blogs offer a wealth of knowledge to support your health journey.
        </div>
      </div>

      <BlogList />
    </div>
  );
}

export default Blogs;
