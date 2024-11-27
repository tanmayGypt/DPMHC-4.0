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
  const [reload, setReload] = useState(false); // To trigger comment refetch

  // Fetching blog data and comments
  const fetchBlogAndComments = async () => {
    const resp = await getBlogById(id);
    setData(resp);

    // Fetch comments after blog data is set
    if (resp?.id) {
      const commentsResp = await getCommentsForPost(resp.id);
      setComments(commentsResp);
    }
  };

  // Trigger fetchBlogAndComments on component mount or when 'id' changes
  useEffect(() => {
    fetchBlogAndComments();

  }, [id, reload]);  // Dependency array includes 'id' and 'reload'

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
        {data?.images?.length > 0 ? (
          <div className="w-full">
            <div className="relative w-full pb-[60.64%]">
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
          </div>
        ) : null}

        {/* Blog Description */}
        <h2 className="text-center font-semibold text-2xl md:text-3xl my-5">
          {data?.description || "Loading description..."}
        </h2>

        {/* Blog Body */}
        <div className="mx-auto text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={createMarkup()} />

        {/* Comment Section */}
        <CommentSection comments={comments || []} reload={reload} setReload={setReload} />
      </div>
    </div>
  );
}

export default MedicoBlogs;
