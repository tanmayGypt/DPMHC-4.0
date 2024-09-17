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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          asperiores, inventore mollitia, ipsam deserunt quasi assumenda eveniet
          unde debitis at similique vel totam quisquam saepe sunt qui. Quis,
          sapiente fuga, laudantium iure itaque repudiandae voluptatibus, qui
          officiis ex omnis minima at fugit tenetur facere cum.
        </div>
      </div>

      <BlogList />
    </div>
  );
}

export default Blogs;
