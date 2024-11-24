import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import DOMPurify from "dompurify";
import CommentSection from "../Common_Components/Comment_Section/CommentSection";
import { getBlogById, getCommentsForPost } from "../../api";

function MedicoBlogs() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const resp = await getBlogById(id);
      setData(resp);  // Set the blog data
    };

    fetchBlog();

    window.scrollTo(0, 0);
  }, [id]);  // Dependency array should include 'id' so the effect re-runs when 'id' changes

  useEffect(() => {
    if (data?.id) {
      // Fetch comments only after 'data' has been set
      const fetchComments = async () => {
        const resp = await getCommentsForPost(data?.id);
        setComments(resp);  // Set the fetched comments
      };

      fetchComments();
    }
  }, [data]);  // This effect depends on 'data', so it will run when 'data' is set

  const createMarkup = () => {
    return { __html: DOMPurify.sanitize(data?.body) };
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto flex flex-col gap-y-8 my-8 px-4">
      <h1 className="text-center text-3xl md:text-4xl my-5 font-bold">
        {data?.title || "Loading..."}
      </h1>

      <div className="flex flex-col items-center gap-y-8">
        {/* Image Slider */}
        <div className="w-full">
          {data?.images ? (
            <div className="relative w-full pb-[60.64%]"> {/* Aspect ratio: 996 / 604 */}
              <div className="absolute top-0 left-0 w-full h-full">
                <SimpleImageSlider
                  width="100%"
                  height="100%"
                  images={data.images}
                  showBullets={true}
                  showNavs={true}
                />
              </div>
            </div>
          ) : null}
        </div>

        {/* Blog Description */}
        <h2 className="text-center font-semibold text-2xl md:text-3xl my-5">
          {data?.description || "Loading description..."}
        </h2>

        {/* Blog Body */}
        <div className="mx-auto text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={createMarkup()} />

        {/* Comment Section */}
        <CommentSection comments={comments || []} /> {/* Render comments (or an empty array if null) */}
      </div>
    </div>
  );
}

export default MedicoBlogs;
