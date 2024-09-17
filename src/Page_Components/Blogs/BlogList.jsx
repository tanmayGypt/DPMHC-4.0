import { useEffect, useState } from "react";
import Medicine_Card from "../Home/Medicine_Card";
// import Medicine_Card from "";
// import Card from "./Medicine_Card";

// Dummy data for medicines (you can replace it with data from API or database)
const blogsData = [
  {
    id: 1,
    title: "Boost Your Immunity with Immuno Plus",
    description:
      "Immuno Plus is a food supplement made with plant extracts, vitamins, and minerals that supports your immune system. Learn how it can help boost your body’s natural defenses.",
    author: "John Doe",
    datePublished: "2023-09-14",
    category: "Health & Wellness",
    imageUrl: "https://dpmemorial.com/slide4.png",
  },
  {
    id: 2,
    title: "The Benefits of Vitamin C",
    description:
      "Vitamin C is known for its immune-boosting properties and is an essential part of maintaining good health. Find out more about how it helps the body and why you should take it.",
    author: "Jane Smith",
    datePublished: "2023-08-20",
    category: "Supplements",
    imageUrl: "https://dpmemorial.com/slide4.png",
  },
  {
    id: 3,
    title: "Immuno Plus: Why Your Body Needs It",
    description:
      "Discover how Immuno Plus can support your immune system and contribute to overall health. We explore the benefits of this food supplement and how it works with your body.",
    author: "John Doe",
    datePublished: "2023-09-14",
    category: "Health & Wellness",
    imageUrl: "https://dpmemorial.com/slide4.png",
  },
  {
    id: 4,
    title: "Everything You Need to Know About Vitamin C",
    description:
      "Vitamin C is a critical nutrient for immune function and overall well-being. Explore how this supplement can help improve your health and keep you feeling your best.",
    author: "Jane Smith",
    datePublished: "2023-08-20",
    category: "Supplements",
    imageUrl: "https://dpmemorial.com/slide4.png",
  },
  // Add more blogs as needed
];

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBlogs, setfilteredBlogs] = useState(blogsData);
  // Function to filter medicines based on search and category

  useEffect(() => {
    const temp = blogsData.filter((medicine) => {
      return (
        (medicine.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          medicine.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "All" || medicine.category === selectedCategory)
      );
    });
    setfilteredBlogs(temp);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="p-6">
      {/* Search and Filter Section */}
      <div className="flex justify-center gap-x-4 items-center mb-6">
        <input
          type="text"
          placeholder="Search medicines..."
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

      <div className="flex">
        {filteredBlogs?.map((item) => (
          <Medicine_Card
            key={item.id}
            medicine={item}
            buttontext={"View Full Blog"}
          />
        ))}
      </div>
    </div>
  );
}
