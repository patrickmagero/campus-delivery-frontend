import { useState, useEffect } from "react";
import axios from "axios";

import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import EmptyProductGrid from "../components/EmptyProductGrid";
import { filterItems } from "../utils/filterItems"; // ✅ shared filtering logic

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedFilters, setSelectedFilters] = useState({
    category: ["Smartphones"],
  });
  const [priceRange, setPriceRange] = useState([500, 10000]);
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        console.log("Products from backend:", res.data);
        console.log("Example product:", res.data[0]); // 👀
        const data = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.products)
          ? res.data.products
          : [];

        setProducts(data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);
  console.log("Raw products:", products);
  const filteredProducts = products;
  console.log("Filtered products:", filteredProducts);



  return (
    <div className="flex px-6 py-4 gap-4">
      <FilterSidebar
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />

      <div className="grid grid-cols-3 gap-4 flex-1">
        {loading ? (
          Array.from({ length: 9 }).map((_, i) => (
            <LoadingSkeleton key={i} />
          ))
        ) : filteredProducts.length === 0 ? (
          <EmptyProductGrid count={6} />
        ) : (
          filteredProducts.map((product, i) => (
            <ProductCard key={product.id || i} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
