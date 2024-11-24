import { useEffect, useState } from "react";
import Medicine_Card from "../Home/Medicine_Card";
import { getBlogs } from "../../../api";

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogsData, setBlogsData] = useState([]); // Store fetched blogs
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBlogs, setfilteredBlogs] = useState([]);

  // Fetch blogs only once when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogs(); // Fetch data from API
        console.log("Fetched Blogs:", response);
        setBlogsData(response); // Save fetched blogs
        setfilteredBlogs(response); // Initialize filtered blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []); // Empty dependency array ensures it runs only once

  // Filter blogs when searchTerm or selectedCategory changes
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
    setfilteredBlogs(temp);
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
          <option value="Supplements">Supplements</option>
          <option value="Vitamins">Vitamins</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      {/* Blog Cards Section */}
      <div className="flex flex-wrap justify-start gap-4">
        {filteredBlogs && filteredBlogs.length > 0 ? (
          filteredBlogs.map((item) => (
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
    </div>
  );
}
