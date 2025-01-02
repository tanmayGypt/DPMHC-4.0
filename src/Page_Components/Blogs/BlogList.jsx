import { useEffect, useState } from "react";
import Medicine_Card from "../Home/Medicine_Card";
import { getBlogs, getCategoties } from "../../../api";

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogsData, setBlogsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogs();
        const resp2 = await getCategoties();
        setCategories(resp2);
        setBlogsData(response);
        setFilteredBlogs(response);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const temp = blogsData.filter((medicine) => {
      return (
        (medicine?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          medicine?.description
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "All" || medicine.category === selectedCategory)
      );
    });
    setFilteredBlogs(temp);
  }, [blogsData, searchTerm, selectedCategory]);

  return (
    <div className="p-6">
      {/* Search and Filter Section */}
      <div className="flex justify-center gap-x-4 items-center mb-6">
        <input
          type="text"
          placeholder="Search blogs..."
          className="border border-gray-300 rounded-lg p-3 w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border border-gray-300 rounded-lg p-3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories?.filter((item) => item.subCategory === "Blog" && item.modelCategoty === 0).map((item) => (
            <option key={item.categoryName} value={item.categoryName}>
              {item.categoryName}
            </option>
          ))}
        </select>
      </div>

      {/* Loader Section */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-current border-t-transparent rounded-full" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-start gap-4">
          {/* Display Blogs */}
          {filteredBlogs && filteredBlogs.filter((item) => item.published && item.modelCategoty === 0).length > 0 ? (
            filteredBlogs.filter((item) => item.published && item.modelCategoty === 0).map((item) => (
              <Medicine_Card
                key={item.id}
                medicine={item}
                buttontext={"View Full Blog"}
              />
            ))
          ) : (
            <p className="text-center w-full text-gray-500">
              No blogs available at the moment. Please check back later!
            </p>
          )}
        </div>
      )}
    </div>
  );
}
