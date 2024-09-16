import { useEffect, useState } from "react";
import Medicine_Card from "./Medicine_Card";
// import Card from "./Medicine_Card";

// Dummy data for medicines (you can replace it with data from API or database)
const medicinesData = [
  {
    id: 1,
    title: "Immuno Plus",
    description:
      "Immuno Plus tablets are a food supplement based on plant extracts, vitamins, and minerals for promoting the body’s natural defenses and immune system function.",
    category: "Supplements",
    dateAdded: "2023-09-14",
    imageUrl: "https://dpmemorial.com/slide4.png",
  },
  {
    id: 2,
    title: "Vitamin C",
    description:
      "Vitamin C tablets help boost your immune system and maintain overall health.",
    category: "Vitamins",
    dateAdded: "2023-08-20",
    imageUrl: "https://dpmemorial.com/slide4.png",
  },
  {
    id: 1,
    title: "Immuno Plus",
    description:
      "Immuno Plus tablets are a food supplement based on plant extracts, vitamins, and minerals for promoting the body’s natural defenses and immune system function.",
    category: "Supplements",
    dateAdded: "2023-09-14",
    imageUrl: "https://dpmemorial.com/slide4.png",
  },
  {
    id: 2,
    title: "Vitamin C",
    description:
      "Vitamin C tablets help boost your immune system and maintain overall health.",
    category: "Vitamins",
    dateAdded: "2023-08-20",
    imageUrl: "https://dpmemorial.com/slide4.png",
  },
  {
    id: 1,
    title: "Immuno Plus",
    description:
      "Immuno Plus tablets are a food supplement based on plant extracts, vitamins, and minerals for promoting the body’s natural defenses and immune system function.",
    category: "Supplements",
    dateAdded: "2023-09-14",
    imageUrl: "https://dpmemorial.com/slide4.png",
  },
  {
    id: 2,
    title: "Vitamin C",
    description:
      "Vitamin C tablets help boost your immune system and maintain overall health.",
    category: "Vitamins",
    dateAdded: "2023-08-20",
    imageUrl: "https://dpmemorial.com/slide4.png",
  },
  {
    id: 1,
    title: "Immuno Plus",
    description:
      "Immuno Plus tablets are a food supplement based on plant extracts, vitamins, and minerals for promoting the body’s natural defenses and immune system function.",
    category: "Supplements",
    dateAdded: "2023-09-14",
    imageUrl: "https://dpmemorial.com/slide4.png",
  },
  {
    id: 2,
    title: "Vitamin C",
    description:
      "Vitamin C tablets help boost your immune system and maintain overall health.",
    category: "Vitamins",
    dateAdded: "2023-08-20",
    imageUrl: "https://dpmemorial.com/slide4.png",
  },
  // Add more medicines as needed
];

export default function MedicineList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredMedicines, setfilteredMedicines] = useState(medicinesData);
  // Function to filter medicines based on search and category

  useEffect(() => {
    const temp = medicinesData.filter((medicine) => {
      return (
        (medicine.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          medicine.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "All" || medicine.category === selectedCategory)
      );
    });
    setfilteredMedicines(temp);
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

      <div className="flex flex-wrap">
        {filteredMedicines?.map((item) => (
          <Medicine_Card key={item.id} medicine={item} />
        ))}
      </div>
    </div>
  );
}
