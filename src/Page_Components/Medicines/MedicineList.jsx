import { useEffect, useState } from "react";
import { getCategoties, getProducts } from "../../../api";
import Medicine_Card from "../Home/Medicine_Card";

export default function MedicineList() {
  const [medicinesData, setMedicineData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch Medicines Data
  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await getProducts();
        const resp2 = await getCategoties();
        setCategories(resp2);
        setMedicineData(resp);
      } catch (error) {
        console.error("Error fetching medicines data:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    fetch();
  }, []);

  // Filter Medicines based on search term and category
  useEffect(() => {
    const temp = medicinesData.filter((medicine) => {
      const matchesSearch =
        medicine?.title?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        medicine?.description?.toLowerCase().includes(searchTerm?.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" ||
        medicine?.category.toLowerCase() === selectedCategory?.toLowerCase();

      return matchesSearch && matchesCategory;
    });
    setFilteredMedicines(temp);
  }, [medicinesData, selectedCategory, searchTerm]);

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
          {categories?.filter((item) => item.subCategory === "Medicine").map((item) => (
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
        <div className="flex flex-wrap">
          {/* Medicines Grid */}
          {filteredMedicines?.length && filteredMedicines.filter((item) => item.published === true && item.categoty == 1).length > 0 ? (
            filteredMedicines.filter((item) => item.published === true && item.modelCategoty === 1).map((item) => (
              <Medicine_Card key={item.id} medicine={item} />
            ))
          ) : (
            <p className="text-center w-full text-gray-500">
              No medicines match your search or selected category.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
